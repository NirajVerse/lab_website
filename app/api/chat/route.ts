import { env } from 'cloudflare:workers';

import { chatConfig } from '@/data/chat';
import { answerLabQuestion, LabChatServiceError } from '@/lib/server/rag-chat';
import type { LabChatErrorResponse, LabChatRequest } from '@/types/chat';

const MAX_REQUEST_BYTES = 16 * 1024;

const responseHeaders = {
  'Cache-Control': 'no-store, max-age=0',
  'Content-Type': 'application/json; charset=utf-8',
  'X-Content-Type-Options': 'nosniff',
};

function jsonResponse(
  body: unknown,
  status = 200,
  extraHeaders: Record<string, string> = {},
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...responseHeaders, ...extraHeaders },
  });
}

function isSameOriginRequest(request: Request) {
  const origin = request.headers.get('origin');

  return !origin || origin === new URL(request.url).origin;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function parseRequest(value: unknown): LabChatRequest | null {
  if (!isRecord(value) || typeof value.question !== 'string') {
    return null;
  }

  const question = value.question.trim();

  if (!question || question.length > chatConfig.maxQuestionLength) {
    return null;
  }

  return { question };
}

function getChatRateLimiter() {
  const bindings = env as typeof env & {
    AIMS_CHAT_RATE_LIMITER?: RateLimit;
  };

  return bindings.AIMS_CHAT_RATE_LIMITER;
}

async function checkRateLimit(request: Request) {
  const rateLimiter = getChatRateLimiter();

  if (!rateLimiter) {
    throw new LabChatServiceError(
      'The lab assistant is not configured yet.',
      503,
    );
  }

  const clientIdentifier =
    request.headers.get('cf-connecting-ip')?.trim() || 'local-development';

  try {
    return await rateLimiter.limit({
      key: `aims-chat:v1:${clientIdentifier}`,
    });
  } catch {
    throw new LabChatServiceError(
      'The lab assistant is temporarily unavailable. Please try again later.',
      503,
    );
  }
}

export async function POST(request: Request) {
  if (!chatConfig.enabled) {
    return jsonResponse({ error: 'The lab assistant pilot is disabled.' }, 404);
  }

  if (!isSameOriginRequest(request)) {
    return jsonResponse(
      { error: 'Cross-origin requests are not allowed.' },
      403,
    );
  }

  const contentType = request.headers.get('content-type')?.toLowerCase() ?? '';

  if (!contentType.startsWith('application/json')) {
    return jsonResponse({ error: 'Send the question as JSON.' }, 415);
  }

  const contentLength = Number(request.headers.get('content-length'));

  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ error: 'The chat request is too large.' }, 413);
  }

  let bodyText: string;

  try {
    bodyText = await request.text();
  } catch {
    return jsonResponse({ error: 'The chat request could not be read.' }, 400);
  }

  if (new TextEncoder().encode(bodyText).byteLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ error: 'The chat request is too large.' }, 413);
  }

  let body: unknown;

  try {
    body = JSON.parse(bodyText);
  } catch {
    return jsonResponse({ error: 'The chat request is not valid JSON.' }, 400);
  }

  const chatRequest = parseRequest(body);

  if (!chatRequest) {
    const response: LabChatErrorResponse = {
      error: `Enter a question between 1 and ${chatConfig.maxQuestionLength} characters.`,
    };

    return jsonResponse(response, 400);
  }

  try {
    const rateLimit = await checkRateLimit(request);

    if (!rateLimit.success) {
      return jsonResponse(
        { error: 'Too many questions were sent. Please wait a minute.' },
        429,
        { 'Retry-After': '60' },
      );
    }

    const answer = await answerLabQuestion(chatRequest.question);

    return jsonResponse(answer);
  } catch (error) {
    if (error instanceof LabChatServiceError) {
      return jsonResponse({ error: error.message }, error.status);
    }

    return jsonResponse(
      { error: 'The lab assistant is temporarily unavailable.' },
      503,
    );
  }
}
