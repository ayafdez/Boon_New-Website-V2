import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { Analytics } from '@/components/Analytics';
import { organizationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.boon-health.com'),
  title: {
    default: 'Boon | The Unified Leadership System',
    template: '%s | Boon',
  },
  description:
    'Boon provides scalable, human-centered leadership development through expert coaching. Transform your organization with our unified leadership system.',
  authors: [{ name: 'Boon' }],
  creator: 'Boon',
  publisher: 'Boon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Boon',
    title: 'Boon | The Unified Leadership System',
    description:
      'Boon provides scalable, human-centered leadership development through expert coaching.',
    images: [
      {
        url: 'https://storage.googleapis.com/boon-public-assets/boon-og-default.png',
        width: 1200,
        height: 630,
        alt: 'Boon - Development that builds on itself',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boon | The Unified Leadership System',
    description:
      'Boon provides scalable, human-centered leadership development through expert coaching.',
    images: ['https://storage.googleapis.com/boon-public-assets/boon-og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500&family=DM+Serif+Text:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#2E353D] selection:bg-[#466FF6] selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
