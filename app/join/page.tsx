import {
  ArrowRight,
  CheckCircle2,
  FileText,
  GraduationCap,
  School,
} from 'lucide-react';

import { Container } from '@/components/site/container';
import Link from '@/components/site/full-page-link';
import { LinkButton } from '@/components/site/link-button';
import { PageHero } from '@/components/site/page-hero';
import { Tag } from '@/components/site/tag';
import { joinPageContent } from '@/data/pages';
import { siteConfig } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Join Us',
  `Guidance for prospective undergraduate, master’s, and PhD researchers interested in ${siteConfig.labName}.`,
);

const contactChecklist = [
  'A short introduction and your current academic program',
  'The research topics that interest you most',
  'A current resume or curriculum vitae',
  'Relevant coursework, technical preparation, or research methods',
  'Selected projects, writing samples, or publications when applicable',
  'Why this lab’s specific research is a strong fit for your goals',
];

export default function JoinPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Join us"
        title="Information for prospective researchers"
        description={joinPageContent.heroDescription}
      />

      {joinPageContent.opportunityStatus ? (
        <section className="py-14 sm:py-18">
          <Container>
            <div className="border-l-4 border-accent bg-secondary/65 px-5 py-5 sm:px-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold text-foreground">
                  Opportunity status:{' '}
                  <span className="text-primary">
                    {joinPageContent.opportunityStatus}
                  </span>
                </p>
                {siteConfig.isTemplate ? (
                  <Tag>Confirm before publishing</Tag>
                ) : null}
              </div>
              {joinPageContent.opportunityNote ? (
                <p className="mt-3 max-w-4xl text-sm leading-6 text-muted-foreground">
                  {joinPageContent.opportunityNote}
                </p>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-b border-border pb-20 sm:pb-24">
        <Container className="grid gap-px border border-border bg-border lg:grid-cols-2">
          <article className="bg-background p-7 sm:p-10 lg:p-12">
            <div className="grid size-11 place-items-center bg-primary text-primary-foreground">
              <School className="size-5" aria-hidden="true" />
            </div>
            <h2 className="mt-7 font-heading text-3xl font-semibold tracking-[-0.025em]">
              Undergraduate researchers
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              {joinPageContent.undergraduateOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Before contacting the lab
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li className="border-l border-accent pl-3">
                Review the lab’s research areas and recent work.
              </li>
              <li className="border-l border-accent pl-3">
                Identify the specific topic or project that interests you.
              </li>
              <li className="border-l border-accent pl-3">
                Follow the confirmed application instructions listed here.
              </li>
            </ul>
          </article>

          <article className="bg-secondary/40 p-7 sm:p-10 lg:p-12">
            <div className="grid size-11 place-items-center bg-primary text-primary-foreground">
              <GraduationCap className="size-5" aria-hidden="true" />
            </div>
            <h2 className="mt-7 font-heading text-3xl font-semibold tracking-[-0.025em]">
              Master’s and PhD students
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              {joinPageContent.graduateOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Application guidance
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li className="border-l border-accent pl-3">
                Consult the official department admissions information.
              </li>
              <li className="border-l border-accent pl-3">
                Use only confirmed deadlines and requirements.
              </li>
              <li className="border-l border-accent pl-3">
                Do not infer funding or supervision availability from this page.
              </li>
            </ul>
          </article>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <FileText className="size-7 text-primary" aria-hidden="true" />
            <h2 className="mt-6 font-heading text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              What to include when contacting the lab
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              A focused message makes it easier to understand your preparation,
              interests, and fit. Follow the lab’s final instructions if they
              differ from this general checklist.
            </p>
          </div>
          <ol className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {contactChecklist.map((item, index) => (
              <li key={item} className="flex gap-4 bg-background p-5 sm:p-6">
                <span className="font-mono text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-6 text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-border bg-secondary/50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <CheckCircle2 className="mx-auto size-8 text-primary" aria-hidden="true" />
            <h2 className="mt-6 font-heading text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              Ready to learn more?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              Review the research and people pages first, then use the confirmed
              contact instructions. A thoughtful, specific message is more useful
              than a generic inquiry.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton href="/contact">
                Contact information
                <ArrowRight aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/research" variant="outline">
                Review research areas
              </LinkButton>
            </div>
            <p className="mt-7 text-xs leading-5 text-muted-foreground">
              For official applications, rely on the university and department
              admissions pages once those links are supplied.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="text-center">
          <Link
            href="/people"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4"
          >
            Meet the current team
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
