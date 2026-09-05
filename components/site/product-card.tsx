import { ArrowUpRight, Play } from 'lucide-react';

import { Tag } from '@/components/site/tag';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Product } from '@/types';

const statusLabels: Record<Product['status'], string> = {
  available: 'Available to try',
  'limited-preview': 'Limited preview',
  'coming-soon': 'Coming soon',
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-border bg-card p-6 text-card-foreground sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <Tag>{product.category}</Tag>
        <Tag>{statusLabels[product.status]}</Tag>
        {product.isPlaceholder ? (
          <Tag className="border-primary/25 bg-primary/[0.06] text-primary">
            Placeholder
          </Tag>
        ) : null}
      </div>

      <h3 className="mt-6 font-heading text-2xl leading-tight font-semibold tracking-[-0.02em]">
        {product.name}
      </h3>
      <p className="mt-3 text-sm leading-6 font-semibold text-foreground">
        {product.tagline}
      </p>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
        {product.description}
      </p>

      {product.capabilities.length ? (
        <div className="mt-6 border-t border-border pt-5">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Capabilities
          </p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Capabilities">
            {product.capabilities.map((capability) => (
              <li
                key={capability}
                className="border border-border bg-secondary px-2.5 py-1 text-xs font-semibold text-foreground"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center gap-3">
        {product.demoUrl ? (
          <a
            href={product.demoUrl}
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'h-11 rounded-sm px-5 text-[0.82rem] font-semibold tracking-wide',
            )}
          >
            Try this model
            <Play aria-hidden="true" />
          </a>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="h-11 rounded-sm px-5 text-[0.82rem] font-semibold tracking-wide"
            disabled
          >
            Trial coming soon
          </Button>
        )}
        {product.documentationUrl ? (
          <a
            href={product.documentationUrl}
            className="inline-flex min-h-11 items-center gap-2 px-1 text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Documentation
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
