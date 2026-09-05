import { BookOpenText } from 'lucide-react';

import { Container } from '@/components/site/container';
import { EmptyState } from '@/components/site/empty-state';
import { PageHero } from '@/components/site/page-hero';
import { PublicationItem } from '@/components/site/publication-item';
import { Tag } from '@/components/site/tag';
import { publications } from '@/data/publications';
import { siteConfig } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Publications',
  `Browse journal articles, conference papers, workshop papers, posters, reports, theses, and preprints from ${siteConfig.labName}.`,
);

const publicationTypeLabels = {
  journal: 'Journal article',
  conference: 'Conference paper',
  workshop: 'Workshop paper',
  poster: 'Poster',
  report: 'Technical report',
  thesis: 'Thesis',
  preprint: 'Preprint',
};

export default function PublicationsPage() {
  const hasPlaceholderPublications = publications.some(
    (publication) => publication.isPlaceholder,
  );
  const years = [...new Set(publications.map((publication) => publication.year))].sort(
    (a, b) => b - a,
  );

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Publications"
        title="Papers and scholarly outputs"
        description={
          siteConfig.isTemplate
            ? 'Publications are grouped by year and read from a single typed data file. Add verified paper, code, dataset, DOI, or BibTeX links only when available.'
            : 'Browse papers and scholarly outputs from the lab, grouped by year.'
        }
      />

      <section className="border-b border-border py-10">
        <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {hasPlaceholderPublications ? (
            <div className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
              <BookOpenText
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p>
                Placeholder citations are clearly marked and must be replaced or
                removed before launch.
              </p>
            </div>
          ) : null}
          <ul
            className="flex flex-wrap gap-2"
            aria-label="Supported publication types"
          >
            {Object.values(publicationTypeLabels).map((label) => (
              <li key={label}>
                <Tag>{label}</Tag>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          {years.length ? (
            <div className="space-y-20">
              {years.map((year) => {
                const yearPublications = publications.filter(
                  (publication) => publication.year === year,
                );

                return (
                  <section
                    key={year}
                    aria-labelledby={`publications-${year}`}
                    className="grid gap-8 lg:grid-cols-[12rem_1fr] lg:gap-16"
                  >
                    <div>
                      <h2
                        id={`publications-${year}`}
                        className="font-heading text-5xl font-semibold tracking-[-0.04em] text-primary"
                      >
                        {year}
                      </h2>
                      {yearPublications.some(
                        (publication) => publication.isPlaceholder,
                      ) ? (
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                          Placeholder year
                        </p>
                      ) : null}
                    </div>
                    <div>
                      {yearPublications.map((publication) => (
                        <PublicationItem
                          key={publication.id}
                          publication={publication}
                          showYear={false}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div>
              <h2 className="sr-only">Publication archive</h2>
              <EmptyState
                title="No publications listed"
                description="Add a verified citation in data/publications.ts when the lab is ready to publish it."
              />
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
