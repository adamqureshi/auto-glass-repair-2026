import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/data/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Auto Glass Repair | Impex Auto Glass Quote',
    template: '%s | Impex Auto Glass'
  },
  description: siteConfig.description,
  applicationName: 'Impex Auto Glass',
  openGraph: {
    title: 'Auto Glass Repair | Impex Auto Glass',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: 'Impex Auto Glass',
    images: [
      {
        url: siteConfig.logo,
        width: 1575,
        height: 488,
        alt: 'Impex Auto Glass'
      }
    ],
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#112e72'
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneDisplay,
  logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
  areaServed: ['North Carolina', 'South Carolina'],
  makesOffer: [
    'Auto Glass Repair',
    'Auto Glass Replacement',
    'Side Glass Replacement',
    'Back Auto Glass Replacement',
    'ADAS Calibration'
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
