import type { JoinPageContent, ResearchPageContent } from '@/types';

export const researchPageContent: ResearchPageContent = {
  heroDescription:
    'AIMS Lab develops practical artificial intelligence and machine-learning methods for industry and materials research, with work spanning visual classification, bioproducts, transport modeling, and renewable energy systems.',
  frameworkLabel: 'Research framework',
  framework: [
    'Our research begins with scientific and industrial problems that depend on time-intensive manual analysis. We work with industry partners to translate those challenges into rigorous machine-learning and computational research questions.',
    'Across our projects, we connect artificial intelligence and computer vision with domain knowledge in bioproducts and engineered wood, including image classification, moisture and thermal transport, and renewable and alternative energy systems.',
  ],
  collaboration: {
    eyebrow: 'Industry collaboration',
    title: 'From labor-intensive workflows to practical research tools',
    description:
      'We collaborate with companies to study where artificial intelligence and machine learning can support repeatable analysis, classification, and inspection. Drone-image classification is one example of the image-based problems addressed through this work.',
    ctaLabel: 'Discuss a research challenge',
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
