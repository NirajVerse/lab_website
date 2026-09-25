import type { ReactNode } from 'react';

import Link from '@/components/site/full-page-link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  ariaLabel?: string;
}

export function LinkButton({
  href,
  children,
  className,
  variant = 'default',
  ariaLabel,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        buttonVariants({ variant, size: 'lg' }),
        'h-11 rounded-sm px-5 text-[0.82rem] font-semibold tracking-wide',
        className,
      )}
    >
      {children}
    </Link>
  );
}
