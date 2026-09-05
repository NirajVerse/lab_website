import type { Metadata, Viewport } from 'next';

import { Footer } from '@/components/site/footer';
import { Header } from '@/components/site/header';
import { siteConfig } from '@/data/site';
import { absoluteUrl, siteUrl } from '@/lib/metadata';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteConfig.labName} at ${siteConfig.university}`,
    template: `%s | ${siteConfig.labName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.labName,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.labName,
    title: `${siteConfig.labName} at ${siteConfig.university}`,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl('/og-aims.png'),
        width: 1731,
        height: 909,
        alt: `${siteConfig.labName}, a research laboratory at ${siteConfig.university}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.labName} at ${siteConfig.university}`,
    description: siteConfig.description,
    images: [absoluteUrl('/og-aims.png')],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5D1725',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[100] -translate-y-20 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
