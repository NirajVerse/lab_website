import { ExternalLink } from 'lucide-react';

import { Tag } from '@/components/site/tag';
import type { Publication } from '@/types';

interface PublicationItemProps {
  publication: Publication;
  showYear?: boolean;
}

export function PublicationItem({
  publication,
  showYear = true,
}: PublicationItemProps) {
  const links = [
    publication.paperUrl ? { label: 'Paper', href: publication.paperUrl } : null,
    publication.codeUrl ? { label: 'Code', href: publication.codeUrl } : null,
    publication.datasetUrl
      ? { label: 'Dataset', href: publication.datasetUrl }
      : null,
    publication.doi
      ? { label: 'DOI', href: `https://doi.org/${publication.doi}` }
      : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <article className="grid gap-5 border-t border-border py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-10">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Tag>{publication.type}</Tag>
          {publication.isPlaceholder ? (
            <Tag className="border-primary/25 bg-primary/[0.06] text-primary">
              Placeholder record
            </Tag>
          ) : null}
        </div>
        <h3 className="font-heading text-xl leading-snug font-semibold tracking-[-0.015em] sm:text-[1.35rem]">
          {publication.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {publication.authors.join(', ')}
        </p>
        {publication.venue ? (
          <p className="mt-1 text-sm leading-6 text-foreground/75">
            {publication.venue}
          </p>
        ) : null}
        {links.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
        {publication.bibtex ? (
          <details className="mt-5 border border-border bg-muted/30 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              BibTeX citation
            </summary>
            <pre className="mt-4 overflow-x-auto text-xs leading-5 whitespace-pre-wrap text-muted-foreground">
              <code>{publication.bibtex}</code>
            </pre>
          </details>
        ) : null}
      </div>
      {showYear ? (
        <p className="font-mono text-sm font-semibold text-muted-foreground sm:pt-1">
          {publication.year}
        </p>
      ) : null}
    </article>
  );
}
