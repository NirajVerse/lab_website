import {
  ArrowLeft,
  CircleAlert,
  FileImage,
  Layers3,
  LockKeyhole,
  Microscope,
} from 'lucide-react';

import { TreeRingBoundaryDetector } from '@/components/products/tree-ring-boundary-detector';
import { Container } from '@/components/site/container';
import Link from '@/components/site/full-page-link';
import { PageHero } from '@/components/site/page-hero';
import { createPageMetadata } from '@/lib/metadata';

const productTitle = 'Generic Tree Ring Boundary Detector';

export const metadata = createPageMetadata(
  productTitle,
  'Try the generic DeepCS-TRD research model and visualize predicted tree-ring boundaries in a wood cross-section image.',
);

export default function TreeRingBoundaryDetectorPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Products · Image segmentation"
        title={productTitle}
        description="Upload a wood cross-section image to visualize the boundary pixels predicted by the generic DeepCS-TRD model across varied species and capture conditions."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all products
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-start">
            <TreeRingBoundaryDetector />

            <aside className="space-y-8" aria-label="Model information">
              <section className="border-t-4 border-primary bg-secondary/60 p-6">
                <div className="flex items-center gap-3 text-primary">
                  <Microscope className="size-5" aria-hidden="true" />
                  <h2 className="font-heading text-2xl font-semibold">
                    Research prototype
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  This public trial exposes the neural boundary-segmentation
                  stage of DeepCS-TRD. It highlights likely ring boundaries but
                  does not count annual rings or run the full pith-dependent
                  geometric analysis.
                </p>
              </section>

              <section className="border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <Layers3 className="size-5 text-primary" aria-hidden="true" />
                  <h2 className="font-heading text-2xl font-semibold">
                    Trial settings
                  </h2>
                </div>
                <dl className="mt-5 divide-y divide-border border-y border-border text-sm">
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted-foreground">Model</dt>
                    <dd className="text-right font-semibold">
                      DeepCS-TRD generic
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted-foreground">Model input</dt>
                    <dd className="font-semibold">1504 × 1504 px</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted-foreground">Threshold</dt>
                    <dd className="font-semibold">0.50</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted-foreground">Tiling</dt>
                    <dd className="font-semibold">Disabled</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted-foreground">Maximum upload</dt>
                    <dd className="font-semibold">4 MB</dd>
                  </div>
                </dl>
              </section>

              <section className="border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <CircleAlert
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  <h2 className="font-heading text-2xl font-semibold">
                    Current limitations
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Species, surface preparation, lighting, scale, background,
                  image sharpness, and differences from the training data can
                  affect the overlay. Use a centered, clearly visible
                  cross-section and treat the result as an experimental aid.
                </p>
              </section>

              <section className="border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <LockKeyhole
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  <h2 className="font-heading text-2xl font-semibold">
                    Image handling
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Your image is sent to the AIMS Lab prediction service for this
                  request. The lab application does not save the uploaded image
                  after the request completes.
                </p>
              </section>

              <section className="flex gap-4 border-l-2 border-accent pl-5">
                <FileImage
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-sm font-bold">Supported files</h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Use a clear JPEG, PNG, or WebP image no larger than 4 MB.
                    The image is resized to the model’s square input dimensions
                    for analysis.
                  </p>
                </div>
              </section>

              <section className="border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
                <p>
                  Model adapted from the MIT-licensed{' '}
                  <a
                    href="https://github.com/hmarichal93/deepcstrd"
                    className="font-semibold text-primary underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DeepCS-TRD project
                  </a>
                  .
                </p>
              </section>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
