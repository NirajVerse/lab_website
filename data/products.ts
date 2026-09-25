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
    id: 'product-02',
    name: '[AI MODEL / PRODUCT NAME 02]',
    tagline: '[ONE-LINE DESCRIPTION OF THE SECOND PRODUCT]',
    description:
      'Add only confirmed product details here. Connect the reviewed public trial when the model and its usage guidance are ready.',
    category: '[MODEL TYPE]',
    status: 'coming-soon',
    capabilities: ['[CAPABILITY 01]', '[CAPABILITY 02]'],
    version: '[VERSION]',
    isPlaceholder: true,
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
