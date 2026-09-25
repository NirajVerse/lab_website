import { env } from 'cloudflare:workers';

const MODEL_ENDPOINT = 'https://aims-model-api.vercel.app/predict';
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const MAX_MULTIPART_BYTES = MAX_FILE_BYTES + 256 * 1024;
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

interface PredictionPayload {
  predicted_class: 'ro' | 'syp';
  confidence: number;
  probabilities: {
    ro: number;
    syp: number;
  };
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

function isPredictionPayload(value: unknown): value is PredictionPayload {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const record = value as Record<string, unknown>;
  const probabilities = record.probabilities;

  if (!probabilities || typeof probabilities !== 'object') {
    return false;
  }

  const probabilityRecord = probabilities as Record<string, unknown>;

  return (
    (record.predicted_class === 'ro' || record.predicted_class === 'syp') &&
    isProbability(record.confidence) &&
    isProbability(probabilityRecord.ro) &&
    isProbability(probabilityRecord.syp)
  );
}

function getApiKey() {
  const bindings = env as typeof env & { AIMS_API_KEY?: string };
  const key = bindings.AIMS_API_KEY ?? process.env.AIMS_API_KEY;

  return key?.trim();
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type')?.toLowerCase() ?? '';

  if (!contentType.startsWith('multipart/form-data;')) {
    return jsonResponse(
      { error: 'Upload an image using multipart form data.' },
      415,
    );
  }

  const contentLength = Number(request.headers.get('content-length'));

  if (Number.isFinite(contentLength) && contentLength > MAX_MULTIPART_BYTES) {
    return jsonResponse({ error: 'The uploaded image is too large.' }, 413);
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ error: 'The upload could not be read.' }, 400);
  }

  const uploadedFiles = [...formData.values()].filter(
    (value): value is File => value instanceof File,
  );
  const fileValues = formData.getAll('file');

  if (
    uploadedFiles.length !== 1 ||
    fileValues.length !== 1 ||
    !(fileValues[0] instanceof File)
  ) {
    return jsonResponse({ error: 'Choose one image to classify.' }, 400);
  }

  const file = fileValues[0];
  const normalizedType = file.type.split(';', 1)[0]?.trim().toLowerCase() ?? '';

  if (!allowedImageTypes.has(normalizedType)) {
    return jsonResponse({ error: 'Upload a JPEG, PNG, or WebP image.' }, 415);
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
    upstreamResponse = await fetch(MODEL_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'X-AIMS-API-Key': apiKey,
      },
      body: upstreamForm,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
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

  if (!isPredictionPayload(payload)) {
    return jsonResponse(
      { error: 'The prediction service returned an unexpected response.' },
      502,
    );
  }

  return jsonResponse({
    predicted_class: payload.predicted_class,
    confidence: payload.confidence,
    probabilities: {
      ro: payload.probabilities.ro,
      syp: payload.probabilities.syp,
    },
  });
}
