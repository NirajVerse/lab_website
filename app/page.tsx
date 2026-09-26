import { ArrowRight, BookOpenText, FlaskConical, Users } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/site/container';
import { EmptyState } from '@/components/site/empty-state';
import Link from '@/components/site/full-page-link';
import { LinkButton } from '@/components/site/link-button';
import { NewsCard } from '@/components/site/news-card';
import { PersonCard } from '@/components/site/person-card';
import { ProductCard } from '@/components/site/product-card';
import { ProjectCard } from '@/components/site/project-card';
import { PublicationItem } from '@/components/site/publication-item';
import { ResearchAreaCard } from '@/components/site/research-area-card';
import { SectionHeading } from '@/components/site/section-heading';
import { newsItems } from '@/data/news';
import { currentResearchers, principalInvestigator } from '@/data/people';
import { products } from '@/data/products';
import { featuredProjects } from '@/data/projects';
import { featuredPublications } from '@/data/publications';
import { researchAreas } from '@/data/research';
import { siteConfig } from '@/data/site';

export default function Home() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b border-border">
        <Container className="grid min-h-[calc(100svh-8rem)] items-stretch gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-16">
          <div className="flex max-w-3xl flex-col justify-center py-6 lg:py-12">
            <h1 className="font-heading text-[clamp(3.1rem,7vw,6.2rem)] leading-[0.96] font-semibold tracking-[-0.028em] text-balance">
              {siteConfig.labName}
            </h1>
            <p className="mt-5 font-heading text-xl leading-7 italic text-foreground sm:text-2xl">
              {siteConfig.labExpansion}
            </p>
            <p className="mt-3 text-base font-bold text-primary sm:text-lg">
              {siteConfig.university}
            </p>
            <p className="mt-1 text-sm italic text-muted-foreground sm:text-base">
              {siteConfig.department}
            </p>
            <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {siteConfig.mission}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/research">
                Explore our research
                <ArrowRight aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/people" variant="outline">
                Meet the team
              </LinkButton>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
              <div className="bg-background px-4 py-4">
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Primary research
                </dt>
                <dd className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-foreground">
                  Applied AI &amp; machine learning
                </dd>
              </div>
              <div className="bg-background px-4 py-4">
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Academic home
                </dt>
                <dd className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-foreground">
                  {siteConfig.university}
                </dd>
              </div>
              <div className="col-span-2 bg-background px-4 py-4 sm:col-span-1">
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Applications
                </dt>
                <dd className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  Industry &amp; materials research
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[32rem] overflow-hidden bg-primary lg:min-h-[44rem]">
            <Image
              src="/lab/hero-placeholder.svg"
              alt={
                siteConfig.isTemplate
                  ? 'Research image placeholder to be replaced with verified lab photography'
                  : 'Research activity in the lab'
              }
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {siteConfig.isTemplate ? (
              <div className="absolute top-5 right-5 bg-background/95 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-primary shadow-sm">
                Replace image
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section
        className="border-b border-border bg-secondary/70 py-10 sm:py-12"
        aria-labelledby="university-affiliation-heading"
      >
        <Container className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              University affiliation
            </p>
            <h2
              id="university-affiliation-heading"
              className="mt-3 font-heading text-2xl leading-tight font-semibold tracking-[-0.02em] sm:text-3xl"
            >
              A research laboratory at Mississippi State University
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              {siteConfig.affiliationStatement}
            </p>
          </div>
          <div className="border-t border-border pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <Image
              src={siteConfig.departmentLogo}
              alt="Mississippi State University Department of Sustainable Bioproducts"
              width={617}
              height={116}
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="h-auto w-full max-w-[38rem]"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Products"
              title="AI models people can explore and try"
              description="Explore public models and software products developed from the lab’s research."
            />
            <Link
              href="/products"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View all products
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          {products.length ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <EmptyState
                title="Product catalog coming soon"
                description="AIMS Lab models and public trials will appear here as they become ready."
              />
            </div>
          )}
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Research directions"
              title="Questions that organize our work"
              description="Explore the major themes, questions, and methods that connect the lab’s research program."
            />
            <Link
              href="/research"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Full research overview
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          {researchAreas.length ? (
            <div className="mt-12 grid gap-x-8 gap-y-2 sm:grid-cols-2 xl:grid-cols-4">
              {researchAreas.map((area, index) => (
                <ResearchAreaCard key={area.id} area={area} index={index} />
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <EmptyState
                title="Research overview coming soon"
                description="The lab’s confirmed research directions will be added here."
              />
            </div>
          )}
        </Container>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Featured work
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-[1.1] font-semibold tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.8rem]">
                Current projects and research in progress
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
                {siteConfig.isTemplate
                  ? 'Project records are ready for real motivations, methods, team members, and verified outcomes.'
                  : 'Explore selected ongoing and completed work from across the lab.'}
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary-foreground underline decoration-accent underline-offset-4 hover:decoration-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
            >
              View all projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          {featuredProjects.length ? (
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  priority={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <EmptyState
                title="No featured projects yet"
                description="Featured project records will appear here once they are available."
              />
            </div>
          )}
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Selected publications"
              title="Recent scholarly work"
              description={
                featuredPublications.some(
                  (publication) => publication.isPlaceholder,
                )
                  ? 'Publication records are grouped and rendered from one typed data file, ready for verified citations and paper links.'
                  : 'A selection of recent publications by Dr. Jason Tyler Street.'
              }
            />
            {featuredPublications.some(
              (publication) => publication.isPlaceholder,
            ) ? (
              <div className="mt-8 flex items-center gap-3 border-l-2 border-accent pl-4 text-sm leading-6 text-muted-foreground">
                <BookOpenText
                  className="size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <p>
                  Placeholder citations are clearly marked and should not be
                  published.
                </p>
              </div>
            ) : null}
            <LinkButton href="/publications" variant="outline" className="mt-8">
              View all publications
            </LinkButton>
          </div>
          <div>
            {featuredPublications.length ? (
              featuredPublications
                .slice(0, 3)
                .map((publication) => (
                  <PublicationItem
                    key={publication.id}
                    publication={publication}
                  />
                ))
            ) : (
              <EmptyState
                title="No featured publications yet"
                description="Verified citations will appear here once they are added."
              />
            )}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-secondary/60 py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="People"
              title="A collaborative research community"
              description="Profiles support the links and research details commonly needed by faculty, students, alumni, and prospective collaborators."
            />
            <Link
              href="/people"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Meet everyone
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          {principalInvestigator || currentResearchers.length ? (
            <div
              className={`mt-12 grid gap-8 ${
                principalInvestigator && currentResearchers.length
                  ? 'xl:grid-cols-[1.15fr_1fr]'
                  : ''
              }`}
            >
              {principalInvestigator ? (
                <PersonCard person={principalInvestigator} featured />
              ) : null}
              {currentResearchers.length ? (
                <div className="grid gap-7 sm:grid-cols-3 xl:gap-5">
                  {currentResearchers.slice(0, 3).map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <div className="mt-12">
              <EmptyState
                title="Team profiles coming soon"
                description="Confirmed lab-member profiles will be added here."
              />
            </div>
          )}
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Lab notes"
              title="News and recent activity"
              description={
                siteConfig.isTemplate
                  ? 'Use these records for confirmed publications, student achievements, presentations, projects, and outreach.'
                  : 'Recent publications, presentations, achievements, projects, and outreach from the lab.'
              }
            />
            <Link
              href="/news"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              All updates
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          {newsItems.length ? (
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-7">
              {newsItems.slice(0, 3).map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <EmptyState
                title="No lab updates yet"
                description="Confirmed news and recent activity will appear here."
              />
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-border py-8 sm:py-12">
        <Container>
          <div className="grid gap-10 bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-accent">
                <Users className="size-5" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Join the lab
                </p>
              </div>
              <h2 className="mt-5 font-heading text-3xl leading-tight font-semibold tracking-[-0.025em] sm:text-4xl">
                Interested in working with us?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/80">
                Current opportunities vary by semester. Review the guidance for
                undergraduate and graduate researchers before getting in touch.
              </p>
            </div>
            <LinkButton
              href="/join"
              variant="secondary"
              className="w-fit bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:outline-primary-foreground"
            >
              View opportunities
              <ArrowRight aria-hidden="true" />
            </LinkButton>
          </div>
          {siteConfig.isTemplate ? (
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <FlaskConical className="size-4" aria-hidden="true" />
              <p>
                No positions, funding, or availability are implied by this
                template.
              </p>
            </div>
          ) : null}
        </Container>
      </section>
    </main>
  );
}
