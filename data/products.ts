import type { Product } from '@/types';

/**
 * Replace these placeholder records with verified AIMS Lab products.
 * A product becomes actionable only when a reviewed public demoUrl is present.
 */
export const products: Product[] = [
  {
    id: 'product-01',
    name: '[AI MODEL / PRODUCT NAME 01]',
    tagline: '[ONE-LINE DESCRIPTION OF WHAT THE MODEL HELPS A USER DO]',
    description:
      'Replace this text with an accessible explanation of the model, its intended users, accepted inputs, and important limitations.',
    category: '[MODEL TYPE]',
    status: 'coming-soon',
    capabilities: ['[CAPABILITY 01]', '[CAPABILITY 02]'],
    version: '[VERSION]',
    isPlaceholder: true,
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
