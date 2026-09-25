import { ArrowUpRight } from 'lucide-react';

import Link from '@/components/site/full-page-link';
import { Tag } from '@/components/site/tag';
import type { ResearchArea } from '@/types';

interface ResearchAreaCardProps {
  area: ResearchArea;
  index: number;
}

export function ResearchAreaCard({ area, index }: ResearchAreaCardProps) {
  return (
    <article className="group border-t-2 border-primary/25 py-7 transition-colors hover:border-primary">
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-xs font-semibold text-primary">
          0{index + 1}
        </span>
        {area.isPlaceholder ? <Tag>Placeholder</Tag> : null}
      </div>
      <h3 className="mt-9 font-heading text-2xl leading-tight font-semibold tracking-[-0.02em]">
        <Link
          href={`/research#${area.id}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {area.title}
        </Link>
      </h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        {area.shortDescription}
      </p>
      <Link
        href={`/research#${area.id}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Explore this area <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
