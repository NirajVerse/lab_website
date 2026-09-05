import type { Publication } from '@/types';

export const publications: Publication[] = [
  {
    id: 'publication-01',
    title: '[PUBLICATION TITLE 01]',
    authors: ['[AUTHOR NAME]', '[AUTHOR NAME]'],
    venue: '[VENUE]',
    year: 2026,
    type: 'conference',
    researchAreas: ['research-area-01'],
    isFeatured: true,
    isPlaceholder: true,
  },
  {
    id: 'publication-02',
    title: '[PUBLICATION TITLE 02]',
    authors: ['[AUTHOR NAME]', '[AUTHOR NAME]', '[AUTHOR NAME]'],
    venue: '[VENUE]',
    year: 2026,
    type: 'journal',
    researchAreas: ['research-area-02'],
    isFeatured: true,
    isPlaceholder: true,
  },
  {
    id: 'publication-03',
    title: '[PUBLICATION TITLE 03]',
    authors: ['[AUTHOR NAME]', '[AUTHOR NAME]'],
    venue: '[VENUE]',
    year: 2025,
    type: 'workshop',
    researchAreas: ['research-area-03'],
    isFeatured: true,
    isPlaceholder: true,
  },
  {
    id: 'publication-04',
    title: '[PUBLICATION TITLE 04]',
    authors: ['[AUTHOR NAME]'],
    venue: '[VENUE]',
    year: 2025,
    type: 'preprint',
    researchAreas: ['research-area-04'],
    isPlaceholder: true,
  },
  {
    id: 'publication-05',
    title: '[PUBLICATION TITLE 05]',
    authors: ['[AUTHOR NAME]', '[AUTHOR NAME]'],
    venue: '[VENUE]',
    year: 2024,
    type: 'poster',
    researchAreas: ['research-area-01'],
    isPlaceholder: true,
  },
];

export const featuredPublications = publications.filter(
  (publication) => publication.isFeatured,
);
