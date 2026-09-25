import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'syp-ro-classifier',
    name: 'SYP–RO Image Classifier',
    tagline: 'Classify an uploaded image as RO or SYP.',
    description:
      'This research prototype analyzes one image at a time and returns the model’s predicted class and confidence scores. Its output is experimental and should be interpreted alongside domain expertise.',
    category: 'Image classification',
    status: 'available',
    capabilities: [
      'RO/SYP classification',
      'Image upload',
      'Confidence scores',
    ],
    version: '1.0',
    demoUrl: '/products/syp-ro-classifier',
    isPlaceholder: false,
  },
  {
    id: 'guitar-veneer-grader',
    name: 'Developing deep learning models to grade guitar veneer',
    tagline: 'Grade an uploaded guitar veneer image as 2A, 3A, or 4A.',
    description:
      'This research prototype analyzes one guitar veneer image at a time and returns a predicted grade with scores for 2A, 3A, and 4A. Its output is experimental and should be interpreted alongside domain expertise.',
    category: 'Veneer grading',
    status: 'available',
    capabilities: [
      '2A/3A/4A classification',
      'Image upload',
      'Confidence scores',
    ],
    demoUrl: '/products/guitar-veneer-grader',
    isPlaceholder: false,
  },
  {
    id: 'product-03',
    name: '[AI MODEL / PRODUCT NAME 03]',
    tagline: '[ONE-LINE DESCRIPTION OF THE THIRD PRODUCT]',
    description:
      'Use this record for another model, application, or research prototype that visitors will be able to try.',
    category: '[MODEL TYPE]',
    status: 'coming-soon',
    capabilities: ['[CAPABILITY 01]', '[CAPABILITY 02]'],
    version: '[VERSION]',
    isPlaceholder: true,
  },
];

export const availableProducts = products.filter(
  (product) => product.status === 'available' && product.demoUrl,
);
