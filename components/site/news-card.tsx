import Image from 'next/image';

import { Tag } from '@/components/site/tag';
import type { NewsItem } from '@/types';

interface NewsCardProps {
  item: NewsItem;
  showContent?: boolean;
}

export function NewsCard({ item, showContent = false }: NewsCardProps) {
  return (
    <article
      id={showContent ? item.slug : undefined}
      className="flex h-full scroll-mt-28 flex-col border-t-2 border-primary/25 pt-5"
    >
      {item.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={item.image}
            alt={item.imageAlt ?? ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-2">
          {item.category ? <Tag>{item.category}</Tag> : null}
          {item.isPlaceholder ? (
            <Tag className="border-primary/25 bg-primary/[0.06] text-primary">
              Placeholder
            </Tag>
          ) : null}
        </div>
        <h3 className="mt-4 font-heading text-xl leading-snug font-semibold tracking-[-0.015em]">
          {item.title}
        </h3>
        {item.dateIso ? (
          <time
            dateTime={item.dateIso}
            className="mt-2 font-mono text-xs font-semibold text-muted-foreground"
          >
            {item.date}
          </time>
        ) : (
          <p className="mt-2 font-mono text-xs font-semibold text-muted-foreground">
            {item.date}
          </p>
        )}
        <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
          {item.summary}
        </p>
        {showContent && item.content ? (
          <details className="mt-5 border-t border-border pt-4">
            <summary className="cursor-pointer text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Read full update
            </summary>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {item.content}
            </p>
          </details>
        ) : null}
        {item.externalUrl ? (
          <a
            href={item.externalUrl}
            className="mt-5 inline-flex w-fit text-sm font-semibold text-primary underline underline-offset-4"
          >
            Read update
          </a>
        ) : null}
      </div>
    </article>
  );
}
