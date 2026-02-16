import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/Analytics';
import { organizationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.boon.coach'),
  title: {
    default: 'Boon | The Unified Leadership System',
    template: '%s | Boon',
  },
  description:
    'Boon provides scalable, human-centered leadership development through expert coaching. Transform your organization with our unified leadership system.',
  keywords: [
    'leadership development',
    'executive coaching',
    'manager training',
    'team alignment',
    'leadership coaching',
    'organizational development',
  ],
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
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Boon - The Unified Leadership System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boon | The Unified Leadership System',
    description:
      'Boon provides scalable, human-centered leadership development through expert coaching.',
    images: ['/images/og-default.png'],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YD3CQ6VQRZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YD3CQ6VQRZ');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
