const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = new URL(
  configuredSiteUrl && /^https?:\/\//.test(configuredSiteUrl)
    ? configuredSiteUrl
    : 'http://localhost:3000',
);

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  const socialImage = absoluteUrl('/og.png');

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: siteConfig.labName,
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: `${siteConfig.labName} academic research lab website`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
  };
}
import type { Metadata } from 'next';

import { siteConfig } from '@/data/site';
