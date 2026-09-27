'use client';

import {
  ExternalLink,
  LoaderCircle,
  MessageCircle,
  Send,
  X,
} from 'lucide-react';
import {
  type KeyboardEvent,
  type SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Button } from '@/components/ui/button';
import { chatConfig } from '@/data/chat';
import type {
  LabChatMessage,
  LabChatResponse,
  LabChatSource,
} from '@/types/chat';

interface DisplayMessage extends LabChatMessage {
  id: string;
  isWelcome?: boolean;
  sources?: LabChatSource[];
}

const initialMessage: DisplayMessage = {
  id: 'welcome',
  role: 'assistant',
  content: chatConfig.welcomeMessage,
  isWelcome: true,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function parseChatResponse(value: unknown): LabChatResponse | null {
  if (!isRecord(value) || typeof value.answer !== 'string') {
    return null;
  }

  if (!Array.isArray(value.sources)) {
    return null;
  }

  const sources: LabChatSource[] = [];

  for (const source of value.sources) {
    if (
      !isRecord(source) ||
      typeof source.label !== 'string' ||
      typeof source.href !== 'string' ||
      !source.href.startsWith('/') ||
      source.href.startsWith('//')
    ) {
      return null;
    }

    sources.push({ label: source.label, href: source.href });
  }

  return { answer: value.answer, sources };
}

function parseErrorResponse(value: unknown) {
  if (isRecord(value) && typeof value.error === 'string') {
    return value.error;
  }

  return null;
}

export function LabChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([initialMessage]);
  const [question, setQuestion] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const requestControllerRef = useRef<AbortController | null>(null);
  const messageSequence = useRef(0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frame = requestAnimationFrame(() => inputRef.current?.focus());

    function closeOnEscape(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isSending]);

  useEffect(() => {
    return () => requestControllerRef.current?.abort();
  }, []);

  function nextMessageId(prefix: string) {
    messageSequence.current += 1;
    return `${prefix}-${messageSequence.current}`;
  }

  function closeChat() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  async function submitQuestion(rawQuestion: string) {
    const normalizedQuestion = rawQuestion.trim();

    if (!normalizedQuestion || isSending) {
      return;
    }

    if (normalizedQuestion.length > chatConfig.maxQuestionLength) {
      setError(
        `Keep your question under ${chatConfig.maxQuestionLength} characters.`,
      );
      return;
    }

    const history = messages
      .filter((message) => !message.isWelcome)
      .slice(-chatConfig.maxHistoryMessages)
      .map(({ role, content }) => ({ role, content }));
    const userMessage: DisplayMessage = {
      id: nextMessageId('user'),
      role: 'user',
      content: normalizedQuestion,
    };

    setMessages((current) => [...current, userMessage]);
    setQuestion('');
    setError(null);
    setIsSending(true);

    const controller = new AbortController();
    requestControllerRef.current = controller;
    const timeoutId = window.setTimeout(() => controller.abort(), 25_000);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: normalizedQuestion, history }),
        signal: controller.signal,
      });
      const payload: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const responseError = parseErrorResponse(payload);
        throw new Error(
          responseError ?? 'The lab assistant could not answer right now.',
        );
      }

      const chatResponse = parseChatResponse(payload);

      if (!chatResponse) {
        throw new Error('The lab assistant returned an unexpected response.');
      }

      setMessages((current) => [
        ...current,
        {
          id: nextMessageId('assistant'),
          role: 'assistant',
          content: chatResponse.answer,
          sources: chatResponse.sources,
        },
      ]);
    } catch (requestError) {
      const message =
        requestError instanceof DOMException &&
        requestError.name === 'AbortError'
          ? 'The request took too long. Please try again.'
          : requestError instanceof Error
            ? requestError.message
            : 'The lab assistant is temporarily unavailable.';

      setError(message);
    } finally {
      window.clearTimeout(timeoutId);
      requestControllerRef.current = null;
      setIsSending(false);
    }
  }

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitQuestion(question);
  }

  function handleQuestionKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.key === 'Enter' &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      void submitQuestion(question);
    }
  }

  return (
    <div className="fixed right-2 bottom-2 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {isOpen ? (
        <dialog
          open
          id="aims-lab-chat"
          aria-modal="false"
          aria-labelledby="aims-lab-chat-title"
          aria-describedby="aims-lab-chat-description"
          className="relative m-0 flex h-[min(38rem,calc(100dvh-6rem))] w-[calc(100vw-1rem)] max-w-[26rem] flex-col overflow-hidden border border-border bg-background p-0 text-foreground shadow-2xl"
        >
          <header className="flex items-start justify-between gap-4 bg-primary px-5 py-4 text-primary-foreground">
            <div>
              <div className="flex items-center gap-2">
                <MessageCircle className="size-5" aria-hidden="true" />
                <h2
                  id="aims-lab-chat-title"
                  className="font-heading text-lg font-semibold"
                >
                  {chatConfig.title}
                </h2>
              </div>
              <p
                id="aims-lab-chat-description"
                className="mt-1 text-xs leading-5 text-primary-foreground/80"
              >
                {chatConfig.isPilot ? 'Public-information pilot' : null}
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              onClick={closeChat}
              aria-label="Close AIMS Lab assistant"
              className="-mt-1 -mr-2 size-11 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground focus-visible:border-primary-foreground focus-visible:ring-primary-foreground"
            >
              <X aria-hidden="true" />
            </Button>
          </header>

          <div
            ref={messagesRef}
            className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message) => (
              <article
                key={message.id}
                className={
                  message.role === 'user'
                    ? 'ml-10 bg-primary px-4 py-3 text-primary-foreground'
                    : 'mr-5 border-l-2 border-accent bg-secondary/70 px-4 py-3 text-foreground'
                }
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] opacity-70">
                  {message.role === 'user' ? 'You' : 'AIMS Lab assistant'}
                </p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6">
                  {message.content}
                </p>
                {message.sources?.length ? (
                  <div className="mt-3 border-t border-current/15 pt-3">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Sources
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-2">
                      {message.sources.map((source) => (
                        <li key={source.href}>
                          <a
                            href={source.href}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary"
                          >
                            {source.label}
                            <ExternalLink
                              className="size-3"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}

            {messages.length === 1 ? (
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Try asking
                </p>
                <div className="mt-2 grid gap-2">
                  {chatConfig.suggestedQuestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void submitQuestion(suggestion)}
                      className="min-h-11 border border-border bg-background px-3 py-2 text-left text-xs leading-5 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {isSending ? (
              <output className="mr-5 flex items-center gap-2 border-l-2 border-accent bg-secondary/70 px-4 py-3 text-sm text-muted-foreground">
                <LoaderCircle
                  className="size-4 animate-spin"
                  aria-hidden="true"
                />
                Searching approved lab information…
              </output>
            ) : null}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-border bg-secondary/45 p-4"
          >
            <label htmlFor="aims-chat-question" className="sr-only">
              Ask AIMS Lab a question
            </label>
            <textarea
              ref={inputRef}
              id="aims-chat-question"
              value={question}
              onChange={(event) => {
                setQuestion(event.target.value);
                if (error) setError(null);
              }}
              onKeyDown={handleQuestionKeyDown}
              maxLength={chatConfig.maxQuestionLength}
              rows={2}
              disabled={isSending}
              placeholder="Ask about our research, people, or products…"
              className="min-h-20 w-full resize-none border border-input bg-background px-3 py-2 text-base leading-6 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
            {error ? (
              <p
                className="mt-2 text-xs leading-5 text-destructive"
                role="alert"
              >
                {error}
              </p>
            ) : null}
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="max-w-[15rem] text-[0.65rem] leading-4 text-muted-foreground">
                {chatConfig.disclaimer}
              </p>
              <Button
                type="submit"
                size="icon-lg"
                className="size-11"
                disabled={!question.trim() || isSending}
                aria-label="Send question"
              >
                {isSending ? (
                  <LoaderCircle className="animate-spin" aria-hidden="true" />
                ) : (
                  <Send aria-hidden="true" />
                )}
              </Button>
            </div>
          </form>
        </dialog>
      ) : null}

      <Button
        ref={triggerRef}
        type="button"
        size="lg"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="aims-lab-chat"
        aria-haspopup="dialog"
        className="h-12 gap-2 border border-white/20 px-4 shadow-lg"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        {isOpen ? 'Hide assistant' : chatConfig.title}
      </Button>
    </div>
  );
}
