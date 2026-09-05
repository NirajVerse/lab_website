import { Container } from '@/components/site/container';
import { LinkButton } from '@/components/site/link-button';

export default function NotFound() {
  return (
    <main id="main-content" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm font-bold text-primary">404</p>
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            The page may have moved, or this placeholder record may have been
            removed from the site data.
          </p>
          <LinkButton href="/" className="mt-8">
            Return home
          </LinkButton>
        </div>
      </Container>
    </main>
  );
}
