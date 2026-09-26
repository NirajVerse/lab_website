import { Container } from '@/components/site/container';
import { EmptyState } from '@/components/site/empty-state';
import { PageHero } from '@/components/site/page-hero';
import { PersonCard } from '@/components/site/person-card';
import { SectionHeading } from '@/components/site/section-heading';
import { people } from '@/data/people';
import { siteConfig } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';
import type { PersonRole } from '@/types';

export const metadata = createPageMetadata(
  'People',
  `Meet the principal investigator, research staff, students, and alumni of ${siteConfig.labName}.`,
);

const roleSections: Array<{
  role: PersonRole;
  title: string;
  description: string;
}> = [
  {
    role: 'principal-investigator',
    title: 'Principal investigator',
    description: 'Faculty leadership and research direction.',
  },
  {
    role: 'staff',
    title: 'Research scientists and staff',
    description: 'Research, technical, and program staff supporting the lab.',
  },
  {
    role: 'phd',
    title: 'PhD students',
    description: 'Doctoral researchers advancing the lab’s core programs.',
  },
  {
    role: 'masters',
    title: 'Master’s students',
    description: 'Graduate students contributing to current research projects.',
  },
  {
    role: 'undergraduate',
    title: 'Undergraduate researchers',
    description: 'Students developing research experience with the lab.',
  },
  {
    role: 'alumni',
    title: 'Alumni',
    description: 'Former lab members and their current roles or destinations.',
  },
];

export default function PeoplePage() {
  const populatedSections = roleSections
    .map((section) => ({
      ...section,
      members: people.filter((person) => person.role === section.role),
    }))
    .filter((section) => section.members.length > 0);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="People"
        title="Researchers, students, and collaborators"
        description="Meet the faculty, students, and alumni who make up the lab’s research community."
      />

      {populatedSections.length ? (
        populatedSections.map((section, sectionIndex) => {
          const { members } = section;

          return (
            <section
              key={section.role}
              className={
                sectionIndex % 2 === 1
                  ? 'border-b border-border bg-secondary/35 py-18 sm:py-22'
                  : 'border-b border-border py-18 sm:py-22'
              }
            >
              <Container>
                <SectionHeading
                  eyebrow={String(sectionIndex + 1).padStart(2, '0')}
                  title={section.title}
                  description={section.description}
                />
                {section.role === 'principal-investigator' ? (
                  <div className="mt-10 max-w-5xl">
                    {members.map((member) => (
                      <PersonCard key={member.id} person={member} featured />
                    ))}
                  </div>
                ) : (
                  <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {members.map((member) => (
                      <PersonCard key={member.id} person={member} />
                    ))}
                  </div>
                )}
              </Container>
            </section>
          );
        })
      ) : (
        <section className="py-20 sm:py-24">
          <Container>
            <h2 className="sr-only">Lab members</h2>
            <EmptyState
              title="Team profiles coming soon"
              description="Confirmed lab-member profiles will be added here."
            />
          </Container>
        </section>
      )}
    </main>
  );
}
