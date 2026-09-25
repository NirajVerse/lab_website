'use client';

import { ImageUp, LoaderCircle, RotateCcw } from 'lucide-react';
import Image from 'next/image';
import {
  type ChangeEvent,
  type SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Button } from '@/components/ui/button';

const MAX_FILE_BYTES = 4 * 1024 * 1024;
const allowedImageTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);

interface PredictionResult {
  predicted_class: 'ro' | 'syp';
  confidence: number;
  probabilities: {
    ro: number;
    syp: number;
  };
}

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 1,
});

function isProbability(value: unknown): value is number {
  return (
    typeof value === 'number' &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= 1
  );
}

function isPredictionResult(value: unknown): value is PredictionResult {
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

function getErrorMessage(value: unknown) {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const error = (value as Record<string, unknown>).error;
  return typeof error === 'string' ? error : null;
}

export function SypRoClassifier() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    };
  }, []);

  function replacePreview(nextFile: File | null) {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
    }

    const nextUrl = nextFile ? URL.createObjectURL(nextFile) : null;
    previewUrlRef.current = nextUrl;
    setPreviewUrl(nextUrl);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0] ?? null;

    setPrediction(null);
    setError(null);

    if (!selectedFile) {
      setFile(null);
      replacePreview(null);
      return;
    }

    if (!allowedImageTypes.has(selectedFile.type)) {
      setFile(null);
      replacePreview(null);
      setError('Choose a JPEG, PNG, or WebP image.');
      event.target.value = '';
      return;
    }

    if (selectedFile.size > MAX_FILE_BYTES) {
      setFile(null);
      replacePreview(null);
      setError('Choose an image smaller than 4 MB.');
      event.target.value = '';
      return;
    }

    if (selectedFile.size === 0) {
      setFile(null);
      replacePreview(null);
      setError('The selected image is empty. Choose another file.');
      event.target.value = '';
      return;
    }

    setFile(selectedFile);
    replacePreview(selectedFile);
  }

  function resetTrial() {
    setFile(null);
    replacePreview(null);
    setPrediction(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  async function handleSubmit(
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) {
    event.preventDefault();

    if (!file || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setPrediction(null);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
      });
      const payload: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          getErrorMessage(payload) ??
            'The image could not be classified. Try again.',
        );
      }

      if (!isPredictionResult(payload)) {
        throw new Error(
          'The prediction service returned an unexpected response.',
        );
      }

      setPrediction(payload);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'The prediction service is temporarily unavailable.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="border border-border bg-card p-5 sm:p-8">
      <div className="border-b border-border pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Live model trial
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.025em]">
          Upload an image
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Choose one supported image. The model will return an RO or SYP
          prediction with confidence scores for both classes.
        </p>
      </div>

      <form className="mt-7" onSubmit={handleSubmit} aria-busy={isSubmitting}>
        <label
          htmlFor="classifier-image"
          className="block text-sm font-bold text-foreground"
        >
          Image file
        </label>
        <div className="mt-3 border border-dashed border-primary/40 bg-secondary/55 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center bg-primary text-primary-foreground">
              <ImageUp className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <input
                id="classifier-image"
                ref={fileInputRef}
                name="file"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                disabled={isSubmitting}
                aria-describedby="classifier-file-guidance"
                className="block min-h-11 w-full cursor-pointer text-sm text-muted-foreground file:mr-4 file:min-h-11 file:cursor-pointer file:border-0 file:bg-primary file:px-4 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60 disabled:file:cursor-not-allowed"
              />
              <p
                id="classifier-file-guidance"
                className="mt-2 text-xs leading-5 text-muted-foreground"
              >
                JPEG, PNG, or WebP · Maximum file size 4 MB
              </p>
            </div>
          </div>
        </div>

        {previewUrl && file ? (
          <div className="mt-6 grid gap-5 border border-border p-4 sm:grid-cols-[12rem_1fr] sm:items-center">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <Image
                src={previewUrl}
                alt={`Preview of ${file.name}`}
                fill
                unoptimized
                sizes="192px"
                className="object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Selected image
              </p>
              <p
                className="mt-2 truncate text-sm font-semibold"
                title={file.name}
              >
                {file.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="submit"
            size="lg"
            className="h-11 rounded-sm px-5 font-semibold"
            disabled={!file || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" />
                Classifying…
              </>
            ) : (
              'Classify image'
            )}
          </Button>
          {file || prediction || error ? (
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="h-11 rounded-sm px-5 font-semibold"
              onClick={resetTrial}
              disabled={isSubmitting}
            >
              <RotateCcw aria-hidden="true" />
              Start over
            </Button>
          ) : null}
        </div>
      </form>

      <div className="mt-7" aria-live="polite" aria-atomic="true">
        {isSubmitting ? (
          <p className="border-l-2 border-primary bg-primary/[0.04] px-4 py-3 text-sm">
            The model is analyzing your image. This can take a moment on the
            first request.
          </p>
        ) : null}

        {error ? (
          <div
            role="alert"
            className="border border-destructive/35 bg-destructive/[0.06] px-4 py-3 text-sm text-destructive"
          >
            {error}
          </div>
        ) : null}

        {prediction ? <PredictionPanel prediction={prediction} /> : null}
      </div>
    </div>
  );
}

function PredictionPanel({ prediction }: { prediction: PredictionResult }) {
  const rows = [
    { label: 'RO', value: prediction.probabilities.ro },
    { label: 'SYP', value: prediction.probabilities.syp },
  ];

  return (
    <section className="border-t-4 border-primary bg-secondary/60 p-5 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
        Prediction complete
      </p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="font-heading text-4xl font-semibold uppercase tracking-[-0.02em]">
            {prediction.predicted_class}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">Predicted class</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-heading text-3xl font-semibold text-primary">
            {percentFormatter.format(prediction.confidence)}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Model confidence</p>
        </div>
      </div>

      <div className="mt-7 border-t border-border pt-6">
        <h4 className="text-sm font-bold">Class probabilities</h4>
        <ul className="mt-4 space-y-4">
          {rows.map((row) => (
            <li key={row.label}>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold">{row.label}</span>
                <span>{percentFormatter.format(row.value)}</span>
              </div>
              <progress
                className="sr-only"
                aria-label={`${row.label} probability`}
                max={1}
                value={row.value}
              />
              <div className="mt-2 h-2 bg-accent/60" aria-hidden="true">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${row.value * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
