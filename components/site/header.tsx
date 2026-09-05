'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Container } from '@/components/site/container';
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

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-primary text-primary-foreground">
      <Container className="flex min-h-[6.5rem] items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          aria-label={`${siteConfig.labName} home`}
        >
          <span
            className="h-16 w-1 shrink-0 bg-accent"
            aria-hidden="true"
          />
          <span className="min-w-0">
            <span className="block font-heading text-lg leading-none font-semibold tracking-[-0.02em] text-primary-foreground sm:text-xl">
              {siteConfig.shortName}
            </span>
            <span className="mt-1 block text-[0.7rem] leading-4 italic text-primary-foreground/85 sm:text-xs">
              {siteConfig.labExpansion}
            </span>
            <span className="block text-[0.7rem] leading-4 font-bold text-primary-foreground sm:text-xs">
              {siteConfig.university}
            </span>
            <span className="block text-[0.62rem] leading-4 italic text-primary-foreground/70 sm:text-[0.68rem]">
              {siteConfig.department}
            </span>
          </span>
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
                      'relative inline-flex h-10 items-center px-3 text-[0.78rem] font-semibold text-primary-foreground/75 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary',
                      isCurrent &&
                        'text-primary-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-accent',
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
                className="size-11 rounded-sm border-white/35 bg-transparent text-primary-foreground hover:border-white/60 hover:bg-white/10 hover:text-primary-foreground focus-visible:border-primary-foreground focus-visible:ring-primary-foreground focus-visible:ring-offset-primary 2xl:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="w-[min(90vw,25rem)] overflow-y-auto bg-background p-0">
            <SheetHeader className="border-b border-border px-6 py-6 pr-14 text-left">
              <SheetTitle className="font-heading text-xl font-semibold">
                {siteConfig.shortName}
              </SheetTitle>
              <SheetDescription className="space-y-0.5">
                <span className="block italic text-foreground">
                  {siteConfig.labExpansion}
                </span>
                <span className="block font-semibold text-primary">
                  {siteConfig.university}
                </span>
                <span className="block text-xs italic">
                  {siteConfig.department}
                </span>
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
