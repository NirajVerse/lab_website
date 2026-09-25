import type { Person } from '@/types';

export const people: Person[] = [
  {
    id: 'pi',
    name: 'Dr. Jason Tyler Street',
    role: 'principal-investigator',
    title: 'Interim Head · Associate Professor',
    image: '/people/jason-tyler-street.jpg',
    bio: 'Dr. Street leads AIMS Lab and serves as Interim Head and Associate Professor in Mississippi State University’s Department of Sustainable Bioproducts. His work spans sustainable materials, engineered wood products, artificial intelligence, transport modeling, and renewable energy systems.',
    researchInterests: [
      'Bio-based composites and engineered wood products',
      'AI and machine learning in materials research',
      'Moisture and thermal transport modeling',
      'Renewable and alternative energy systems',
    ],
    education: [
      'Ph.D. in Engineering, Mississippi State University',
      'M.S. in Biological Engineering, Mississippi State University',
      'B.S. in Biological Engineering, Mississippi State University',
    ],
    email: 'jts118@msstate.edu',
    phone: '662-325-5120',
    office: 'Room 5204, Forest Products Laboratory',
    website: 'https://www.fwrc.msstate.edu/people/jts118',
    websiteLabel: 'Official MSU profile',
  },
  {
    id: 'staff-01',
    name: '[RESEARCH STAFF NAME]',
    role: 'staff',
    title: '[STAFF TITLE]',
    image: '/people/placeholder-person.svg',
    bio: '[SHORT BIO]',
    researchInterests: ['[RESEARCH INTEREST]'],
    isPlaceholder: true,
  },
  {
    id: 'tilak-neupane',
    name: 'Tilak Neupane',
    role: 'phd',
    title: 'Graduate Research Assistant · PhD in Sustainable Bioproducts',
    program: 'PhD in Sustainable Bioproducts, Department of Sustainable Bioproducts',
    image: '/people/tilak-neupane.png',
    bio: 'Tilak Neupane is a second-year PhD student in the Department of Sustainable Bioproducts. His research applies machine learning and deep learning to assess wood properties, including wood chip moisture content and the mechanical properties of tree logs. He earned an MS in Forestry from the University of Georgia.',
    researchInterests: [
      'Artificial intelligence and computer vision for wood quality assessment',
      'Moisture content prediction',
      'Hyperspectral imaging',
      'Nondestructive evaluation',
    ],
    email: 'tn614@msstate.edu',
  },
  {
    id: 'phd-02',
    name: '[PHD STUDENT NAME]',
    role: 'phd',
    program: '[PHD PROGRAM]',
    image: '/people/placeholder-person.svg',
    bio: '[SHORT BIO]',
    researchInterests: ['[RESEARCH INTEREST]'],
    isPlaceholder: true,
  },
  {
    id: 'masters-01',
    name: '[MASTER’S STUDENT NAME]',
    role: 'masters',
    program: '[MASTER’S PROGRAM]',
    image: '/people/placeholder-person.svg',
    bio: '[SHORT BIO]',
    researchInterests: ['[RESEARCH INTEREST]'],
    isPlaceholder: true,
  },
  {
    id: 'undergraduate-01',
    name: '[UNDERGRADUATE RESEARCHER NAME]',
    role: 'undergraduate',
    program: '[DEGREE PROGRAM]',
    image: '/people/placeholder-person.svg',
    bio: '[SHORT BIO]',
    researchInterests: ['[RESEARCH INTEREST]'],
    isPlaceholder: true,
  },
  {
    id: 'alumni-01',
    name: '[ALUM NAME]',
    role: 'alumni',
    title: '[CURRENT ROLE OR DESTINATION]',
    image: '/people/placeholder-person.svg',
    researchInterests: ['[FORMER RESEARCH INTEREST]'],
    isPlaceholder: true,
  },
];

export const principalInvestigator = people.find(
  (person) => person.role === 'principal-investigator',
);

export const currentResearchers = people.filter(
  (person) =>
    person.role !== 'principal-investigator' && person.role !== 'alumni',
);
