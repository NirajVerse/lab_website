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
    id: 'wood-chip-moisture-estimator',
    name: 'Wood Chip Moisture Content Estimator',
    tagline: 'Estimate wood-chip moisture content from one uploaded image.',
    description:
      'This research prototype analyzes a wood-chip image and returns a predicted moisture content percentage. Its output is an experimental model estimate, not a laboratory measurement.',
    category: 'Moisture estimation',
    status: 'available',
    capabilities: [
      'Image-based regression',
      'Moisture percentage estimate',
      'Image upload',
    ],
    demoUrl: '/products/wood-chip-moisture-estimator',
    isPlaceholder: false,
  },
];

export const availableProducts = products.filter(
  (product) => product.status === 'available' && product.demoUrl,
);
