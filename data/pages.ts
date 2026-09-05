import type { JoinPageContent, ResearchPageContent } from '@/types';

export const researchPageContent: ResearchPageContent = {
  heroDescription:
    'Replace this introduction with a clear overview of the lab’s research agenda, the shared questions across its projects, and the contribution it seeks to make.',
  frameworkLabel: 'Research framework',
  framework: [
    'Use this space to explain how the lab’s research areas relate to one another. The goal is to help readers understand the program as a whole before they explore individual themes.',
    'Keep the final version grounded in confirmed work. Name real questions, methods, collaborations, and application domains only after the lab has supplied and reviewed them.',
  ],
  collaboration: {
    eyebrow: 'Collaboration and facilities',
    title: '[COLLABORATION OR FACILITIES NOTE]',
    description:
      'Replace this section with verified information about interdisciplinary collaboration, shared facilities, field sites, or research infrastructure. Remove it if no public note is needed.',
    ctaLabel: 'Discuss collaboration',
  },
};

export const joinPageContent: JoinPageContent = {
  heroDescription:
    'Current opportunities vary by semester. This page provides a clear place for the lab to publish confirmed expectations and contact instructions without implying that positions or funding are available.',
  opportunityStatus: '[NOT YET SUPPLIED]',
  opportunityNote:
    'Do not state that positions are open, funded, or guaranteed until the principal investigator has confirmed the wording for the current term.',
  undergraduateOverview: [
    '[EXPLAIN THE TYPICAL WAYS UNDERGRADUATE STUDENTS PARTICIPATE, INCLUDING INDEPENDENT STUDY, CAPSTONE WORK, OR PAID RESEARCH ONLY IF CONFIRMED.]',
    '[ADD EXPECTED PREPARATION, RELEVANT COURSES, AND TIME COMMITMENT AFTER THE LAB HAS SUPPLIED THESE DETAILS.]',
  ],
  graduateOverview: [
    '[DESCRIBE THE LAB’S GRADUATE RESEARCH AREAS AND THE TECHNICAL OR SCHOLARLY BACKGROUND MOST RELEVANT TO THEM.]',
    '[EXPLAIN THE UNIVERSITY APPLICATION PATH AND WHETHER PROSPECTIVE STUDENTS SHOULD CONTACT THE PROFESSOR BEFORE APPLYING.]',
  ],
};
