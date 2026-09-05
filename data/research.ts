import type { ResearchArea } from '@/types';

export const researchAreas: ResearchArea[] = [
  {
    id: 'research-area-01',
    title: '[RESEARCH AREA 01]',
    shortDescription:
      'Replace this summary with a concise explanation of the first major research direction.',
    description: [
      'Use this section to explain the motivation for this research area, the problems the lab studies, and why those problems matter to the broader field.',
      'Add a second paragraph describing the lab’s distinctive perspective, current lines of inquiry, and the kinds of contributions the work aims to make.',
    ],
    image: '/research/research-placeholder-01.svg',
    imageAlt: 'Placeholder for imagery related to research area 01',
    topics: ['[TOPIC 01]', '[TOPIC 02]', '[TOPIC 03]'],
    questions: [
      '[IMPORTANT RESEARCH QUESTION 01]',
      '[IMPORTANT RESEARCH QUESTION 02]',
    ],
    methods: ['[METHOD 01]', '[METHOD 02]', '[TECHNOLOGY 01]'],
    relatedProjects: ['project-01'],
    relatedPublications: ['publication-01'],
    isPlaceholder: true,
  },
  {
    id: 'research-area-02',
    title: '[RESEARCH AREA 02]',
    shortDescription:
      'Describe the scientific or engineering challenge addressed by this research direction.',
    description: [
      'Replace this paragraph with a clear, accessible account of the second research area. Define specialized terms and connect the work to concrete scholarly questions.',
      'Use the follow-up paragraph for current approaches, experimental settings, collaborators, or facilities only when those details have been confirmed.',
    ],
    image: '/research/research-placeholder-02.svg',
    imageAlt: 'Placeholder for imagery related to research area 02',
    topics: ['[TOPIC 01]', '[TOPIC 02]', '[TOPIC 03]'],
    questions: [
      '[IMPORTANT RESEARCH QUESTION 01]',
      '[IMPORTANT RESEARCH QUESTION 02]',
    ],
    methods: ['[METHOD 01]', '[METHOD 02]', '[TECHNOLOGY 01]'],
    relatedProjects: ['project-02'],
    relatedPublications: ['publication-02'],
    isPlaceholder: true,
  },
  {
    id: 'research-area-03',
    title: '[RESEARCH AREA 03]',
    shortDescription:
      'Summarize the third research theme and the questions that connect its projects.',
    description: [
      'Introduce the central problem and its academic context here. Keep the language precise enough for researchers and approachable enough for prospective students.',
      'Explain the lab’s methods, systems, or experimental practices in this paragraph after the real research description has been supplied.',
    ],
    image: '/research/research-placeholder-03.svg',
    imageAlt: 'Placeholder for imagery related to research area 03',
    topics: ['[TOPIC 01]', '[TOPIC 02]', '[TOPIC 03]'],
    questions: [
      '[IMPORTANT RESEARCH QUESTION 01]',
      '[IMPORTANT RESEARCH QUESTION 02]',
    ],
    methods: ['[METHOD 01]', '[METHOD 02]', '[TECHNOLOGY 01]'],
    relatedProjects: ['project-03'],
    relatedPublications: ['publication-03'],
    isPlaceholder: true,
  },
  {
    id: 'research-area-04',
    title: '[RESEARCH AREA 04]',
    shortDescription:
      'Use this area for an additional established theme, or remove it if the lab has three themes.',
    description: [
      'Replace this text with a focused explanation of the fourth research area. If this area is not needed, remove this record and the site will adjust automatically.',
      'Add only confirmed research questions, methods, projects, and publications to the structured fields below.',
    ],
    image: '/research/research-placeholder-04.svg',
    imageAlt: 'Placeholder for imagery related to research area 04',
    topics: ['[TOPIC 01]', '[TOPIC 02]'],
    questions: ['[IMPORTANT RESEARCH QUESTION 01]'],
    methods: ['[METHOD 01]', '[TECHNOLOGY 01]'],
    relatedProjects: ['project-04'],
    relatedPublications: ['publication-04'],
    isPlaceholder: true,
  },
];
