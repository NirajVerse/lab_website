import { Container } from '@/components/site/container';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-secondary/55 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-heading text-4xl leading-[1.03] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
