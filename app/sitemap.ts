import type { MetadataRoute } from 'next';

import { projects } from '@/data/projects';
import { absoluteUrl } from '@/lib/metadata';

const staticRoutes = [
  '',
  '/research',
  '/people',
  '/projects',
  '/products',
  '/publications',
  '/news',
  '/join',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: absoluteUrl(route || '/'),
    changeFrequency: route.startsWith('/projects/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/projects/') ? 0.7 : 0.8,
  }));
}
