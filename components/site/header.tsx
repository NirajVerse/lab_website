'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Container } from '@/components/site/container';
import Link from '@/components/site/full-page-link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navigation, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

function isCurrentPath(pathname: string, href: string) {
  return href === '/'
    ? pathname === '/'
    : pathname === href || pathname.startsWith(`${href}/`);
}

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center">
      <span
        className={cn(
          'flex shrink-0 items-baseline font-heading leading-none tracking-[-0.045em] text-foreground',
          compact ? 'text-[1.7rem]' : 'text-[1.85rem] sm:text-[2.45rem]',
        )}
        aria-hidden="true"
      >
        <span className="font-medium">AI</span>
        <span className="font-bold text-primary">M</span>
        <span className="font-medium">S</span>
      </span>
      <span
        className={cn(
          'mx-2.5 h-9 w-px shrink-0 bg-border sm:mx-3.5 sm:h-11',
          compact && 'mx-2.5 h-9',
        )}
        aria-hidden="true"
      />
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            'block font-heading font-semibold text-primary',
            compact ? 'text-sm' : 'text-[0.72rem] sm:text-[0.92rem]',
          )}
        >
          {siteConfig.university}
        </span>
        <span
          className={cn(
            'mt-0.5 block font-medium text-foreground/80',
            compact
              ? 'text-[0.68rem]'
              : 'max-w-[11.5rem] text-[0.58rem] sm:max-w-none sm:text-[0.72rem]',
          )}
        >
          {siteConfig.labExpansion}
        </span>
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-t-4 border-primary border-b border-border bg-background text-foreground">
      <Container className="flex min-h-[5.1rem] items-center justify-between gap-4 py-2.5">
        <Link
          href="/"
          className="group min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          aria-label={`${siteConfig.labName} home`}
        >
          <BrandLockup />
        </Link>

        <nav aria-label="Primary navigation" className="hidden 2xl:block">
          <ul className="flex items-center gap-0.5">
            {navigation.map((item) => {
              const isCurrent = isCurrentPath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={cn(
                      'relative inline-flex h-10 items-center px-3 text-[0.78rem] font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                      isCurrent &&
                        'text-primary after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-primary',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-lg"
                className="size-11 rounded-sm border-primary/35 bg-transparent text-primary hover:border-primary/60 hover:bg-primary/5 hover:text-primary focus-visible:border-primary focus-visible:ring-ring focus-visible:ring-offset-background 2xl:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="w-[min(90vw,25rem)] overflow-y-auto bg-background p-0">
            <SheetHeader className="border-b border-border px-6 py-6 pr-14 text-left">
              <SheetTitle className="sr-only">
                {siteConfig.labName} navigation
              </SheetTitle>
              <SheetDescription>
                <BrandLockup compact />
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="px-3 py-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isCurrent = isCurrentPath(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <SheetClose
                        render={
                          <Link
                            href={item.href}
                            aria-current={isCurrent ? 'page' : undefined}
                            className={cn(
                              'flex min-h-12 items-center border-l-2 border-transparent px-4 text-base font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                              isCurrent &&
                                'border-primary bg-primary/[0.06] text-primary',
                            )}
                          />
                        }
                      >
                        {item.label}
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
