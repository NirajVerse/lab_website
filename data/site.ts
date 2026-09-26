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
    'AIMS Lab is a research laboratory in the Department of Sustainable Bioproducts at Mississippi State University. We develop applied artificial intelligence and machine-learning methods that help industry partners automate labor-intensive analysis, classification, and inspection tasks.',
  mission:
    'AIMS Lab partners with industry to develop practical artificial intelligence and machine-learning methods for automated analysis, image classification, materials assessment, and related research challenges.',
  email: 'jts118@msstate.edu',
  location: '201 Locksley Way, Starkville, MS 39759',
  building: 'Forest Products Laboratory',
  room: 'Building 4',
  mailingAddress: 'P.O. Box 9820, Mississippi State, MS 39762',
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
