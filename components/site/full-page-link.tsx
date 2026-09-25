import type { ComponentPropsWithRef } from 'react';

type FullPageLinkProps = ComponentPropsWithRef<'a'> & {
  href: string;
};

/**
 * Uses native document navigation while Vinext client transitions are
 * unreliable in production builds.
 */
export default function FullPageLink({
  href,
  children,
  ...props
}: FullPageLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
