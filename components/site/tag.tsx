import type { ComponentProps } from 'react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function Tag({ className, ...props }: ComponentProps<'span'>) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'h-auto max-w-full shrink overflow-visible rounded-sm border-primary/20 bg-primary/[0.04] px-2.5 py-1 text-left text-[0.68rem] leading-4 font-semibold break-words whitespace-normal uppercase tracking-[0.12em] text-primary',
        className,
      )}
      {...props}
    />
  );
}
