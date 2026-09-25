import { env } from 'cloudflare:workers';

const MODEL_API_ORIGIN = 'https://aims-model-api.vercel.app';
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const REQUEST_TIMEOUT_MS = 60_000;

const allowedImageTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);

const safeFilenames: Record<string, string> = {
  'image/jpeg': 'upload.jpg',
  'image/png': 'upload.png',
  'image/webp': 'upload.webp',
};

const responseHeaders = {
  'Cache-Control': 'no-store, max-age=0',
  'Content-Type': 'application/json; charset=utf-8',
  'X-Content-Type-Options': 'nosniff',
};

interface PredictionProxyConfig {
  upstreamPath: `/${string}`;
  labels: readonly string[];
}

interface PredictionPayload {
  predicted_class: string;
  confidence: number;
  probabilities: Record<string, number>;
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: responseHeaders,
  });
}

function isProbability(value: unknown): value is number {
  return (
    typeof value === 'number' &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= 1
  );
}

function parsePredictionPayload(
  value: unknown,
  labels: readonly string[],
): PredictionPayload | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const record = value as Record<string, unknown>;
  const probabilities = record.probabilities;

  if (
    typeof record.predicted_class !== 'string' ||
    !labels.includes(record.predicted_class) ||
    !isProbability(record.confidence) ||
    !probabilities ||
    typeof probabilities !== 'object'
  ) {
    return null;
  }

  const probabilityRecord = probabilities as Record<string, unknown>;

  if (
    Object.keys(probabilityRecord).length !== labels.length ||
    !labels.every((label) => isProbability(probabilityRecord[label]))
  ) {
    return null;
  }

  return {
    predicted_class: record.predicted_class,
    confidence: record.confidence,
    probabilities: Object.fromEntries(
      labels.map((label) => [label, probabilityRecord[label] as number]),
    ),
  };
}

function getApiKey() {
  const bindings = env as typeof env & { AIMS_API_KEY?: string };
  const key = bindings.AIMS_API_KEY ?? process.env.AIMS_API_KEY;

  return key?.trim();
}

function isSameOriginRequest(request: Request) {
  const origin = request.headers.get('origin');
  return !origin || origin === new URL(request.url).origin;
}

export async function proxyImagePrediction(
  request: Request,
  config: PredictionProxyConfig,
) {
  if (!isSameOriginRequest(request)) {
    return jsonResponse(
      { error: 'Cross-origin requests are not allowed.' },
      403,
    );
  }

  const contentType = request.headers.get('content-type')?.toLowerCase() ?? '';
  const normalizedType = contentType.split(';', 1)[0]?.trim() ?? '';

  if (!allowedImageTypes.has(normalizedType)) {
    return jsonResponse({ error: 'Upload a JPEG, PNG, or WebP image.' }, 415);
  }

  const contentLength = Number(request.headers.get('content-length'));

  if (Number.isFinite(contentLength) && contentLength > MAX_FILE_BYTES) {
    return jsonResponse({ error: 'The uploaded image is too large.' }, 413);
  }

  let file: Blob;

  try {
    file = await request.blob();
  } catch {
    return jsonResponse({ error: 'The upload could not be read.' }, 400);
  }

  if (file.size === 0) {
    return jsonResponse({ error: 'The uploaded image is empty.' }, 400);
  }

  if (file.size > MAX_FILE_BYTES) {
    return jsonResponse({ error: 'The uploaded image is too large.' }, 413);
  }

  const apiKey = getApiKey();

  if (!apiKey) {
    return jsonResponse(
      { error: 'The prediction service is not configured yet.' },
      503,
    );
  }

  const upstreamForm = new FormData();
  upstreamForm.append('file', file, safeFilenames[normalizedType]);

  let upstreamResponse: Response;

  try {
    upstreamResponse = await fetch(
      new URL(config.upstreamPath, MODEL_API_ORIGIN),
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-AIMS-API-Key': apiKey,
        },
        body: upstreamForm,
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      },
    );
  } catch (error) {
    const timedOut =
      error instanceof DOMException &&
      (error.name === 'AbortError' || error.name === 'TimeoutError');

    return jsonResponse(
      {
        error: timedOut
          ? 'The prediction service took too long to respond.'
          : 'The prediction service is temporarily unavailable.',
      },
      timedOut ? 504 : 502,
    );
  }

  if (!upstreamResponse.ok) {
    if (upstreamResponse.status === 413) {
      return jsonResponse({ error: 'The uploaded image is too large.' }, 413);
    }

    if (upstreamResponse.status === 415) {
      return jsonResponse({ error: 'Upload a JPEG, PNG, or WebP image.' }, 415);
    }

    if (upstreamResponse.status === 422) {
      return jsonResponse(
        {
          error:
            'The image could not be read. Try another JPEG, PNG, or WebP image.',
        },
        422,
      );
    }

    if (upstreamResponse.status === 401 || upstreamResponse.status === 403) {
      return jsonResponse(
        { error: 'The prediction service is not configured correctly.' },
        503,
      );
    }

    return jsonResponse(
      { error: 'The prediction service is temporarily unavailable.' },
      502,
    );
  }

  let payload: unknown;

  try {
    payload = await upstreamResponse.json();
  } catch {
    return jsonResponse(
      { error: 'The prediction service returned an unexpected response.' },
      502,
    );
  }

  const prediction = parsePredictionPayload(payload, config.labels);

  if (!prediction) {
    return jsonResponse(
      { error: 'The prediction service returned an unexpected response.' },
      502,
    );
  }

  return jsonResponse(prediction);
}
