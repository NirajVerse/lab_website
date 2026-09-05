import type { NavigationItem, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  isTemplate: true,
  // Provisional identity: update these three fields together if the lab name changes.
  labName: 'AIMS Lab',
  shortName: 'AIMS Lab',
  labExpansion: 'Artificial Intelligence & Machine Systems',
  university: 'Mississippi State University',
  department: 'Department of Sustainable Bioproducts',
  affiliationStatement:
    'AIMS Lab is a research laboratory at Mississippi State University in the Department of Sustainable Bioproducts.',
  universityLogo: '/brand/msstate-wordmark-maroon.svg',
  universityLogoWhite: '/brand/msstate-wordmark-white.svg',
  departmentLogo: '/brand/sustainable-bioproducts-maroon.svg',
  departmentLogoWhite: '/brand/sustainable-bioproducts-white.svg',
  description:
    'AIMS Lab is a research laboratory affiliated with Mississippi State University in the Department of Sustainable Bioproducts. [ONE-SENTENCE RESEARCH DESCRIPTION]',
  mission:
    'AIMS Lab at Mississippi State University develops computational and experimental methods for [PRIMARY RESEARCH AREAS].',
  email: '[LAB OR PROFESSOR EMAIL]',
  location: '[BUILDING / CITY / STATE]',
  building: '[BUILDING NAME]',
  room: '[OFFICE / LAB ROOM]',
  mailingAddress: '[MAILING ADDRESS]',
  placeholderNotice:
    'Template content is shown throughout this site. Replace every bracketed field before publishing.',
};

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'People', href: '/people' },
  { label: 'Projects', href: '/projects' },
  { label: 'Products', href: '/products' },
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { label: 'Join Us', href: '/join' },
  { label: 'Contact', href: '/contact' },
];
