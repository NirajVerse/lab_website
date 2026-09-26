import { Building2, Mail, MapPin } from 'lucide-react';

import { Container } from '@/components/site/container';
import { LinkButton } from '@/components/site/link-button';
import { PageHero } from '@/components/site/page-hero';
import { Tag } from '@/components/site/tag';
import { principalInvestigator } from '@/data/people';
import { siteConfig } from '@/data/site';
import { isPlaceholderValue } from '@/lib/content';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Contact',
  `Contact information and location details for ${siteConfig.labName} at ${siteConfig.university}.`,
);

export default function ContactPage() {
  const hasRealEmail = !isPlaceholderValue(siteConfig.email);
  const hasRealLocation = [
    siteConfig.building,
    siteConfig.room,
    siteConfig.location,
  ].every((value) => !isPlaceholderValue(value));
  const hasRealMailingAddress = !isPlaceholderValue(siteConfig.mailingAddress);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Get in touch with the lab"
        description="Use the confirmed public email and university address below. Prospective students should review the Join Us page before contacting the lab."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            <article className="bg-background p-7 sm:p-8">
              <div className="grid size-10 place-items-center bg-primary text-primary-foreground">
                <Mail className="size-5" aria-hidden="true" />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <h2 className="font-heading text-2xl font-semibold">
                  Lab inquiries
                </h2>
                {!hasRealEmail ? <Tag>Placeholder</Tag> : null}
              </div>
              {hasRealEmail && principalInvestigator ? (
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {principalInvestigator.name}
                </p>
              ) : null}
              {hasRealEmail ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 inline-block break-all text-sm font-semibold text-primary underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              ) : (
                <p className="mt-4 break-all text-sm font-semibold text-foreground">
                  {siteConfig.email}
                </p>
              )}
              {!hasRealEmail ? (
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Replace this field with a public lab or faculty email address.
                </p>
              ) : null}
            </article>

            <article className="bg-background p-7 sm:p-8">
              <div className="grid size-10 place-items-center bg-primary text-primary-foreground">
                <Building2 className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-semibold">
                Academic affiliation
              </h2>
              <p className="mt-4 text-sm leading-6 font-semibold text-foreground">
                {siteConfig.affiliationStatement}
              </p>
              {siteConfig.universityDirectoryUrl ? (
                <a
                  href={siteConfig.universityDirectoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary underline underline-offset-4"
                >
                  Mississippi State University website
                </a>
              ) : null}
            </article>

            <article className="bg-background p-7 sm:p-8">
              <div className="grid size-10 place-items-center bg-primary text-primary-foreground">
                <MapPin className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-semibold">
                Lab location
              </h2>
              <p className="mt-4 text-sm leading-6 text-foreground">
                {siteConfig.building}
                <br />
                {siteConfig.room}
                <br />
                {siteConfig.location}
              </p>
              {!hasRealLocation ? (
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Add a public building and room number only when approved.
                </p>
              ) : null}
              {siteConfig.mapsUrl ? (
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary underline underline-offset-4"
                >
                  View map
                </a>
              ) : null}
            </article>

            <article className="bg-background p-7 sm:p-8">
              <div className="grid size-10 place-items-center bg-primary text-primary-foreground">
                <Building2 className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-semibold">
                Mailing address
              </h2>
              <p className="mt-4 text-sm leading-6 text-foreground">
                {siteConfig.mailingAddress}
              </p>
              {!hasRealMailingAddress ? (
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Use the university’s public mailing address format.
                </p>
              ) : null}
            </article>
          </div>

          <aside className="self-start bg-primary px-7 py-9 text-primary-foreground sm:px-10 sm:py-11">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Before you write
            </p>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.025em]">
              Prospective students
            </h2>
            <p className="mt-5 text-base leading-7 text-primary-foreground/80">
              Review the lab’s research areas and opportunity guidance before
              contacting the professor. Current positions, supervision capacity,
              and funding must be confirmed directly.
            </p>
            <LinkButton
              href="/join"
              variant="secondary"
              className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:outline-primary-foreground"
            >
              Read application guidance
            </LinkButton>
            <div className="mt-10 border-t border-primary-foreground/20 pt-7">
              <h3 className="text-sm font-bold">Collaborators and visitors</h3>
              <p className="mt-3 text-sm leading-6 text-primary-foreground/75">
                Include a concise description of the relevant research topic,
                proposed connection, and preferred next step.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}
