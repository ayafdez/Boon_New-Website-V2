import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.boon.coach';

// Organization JSON-LD (sitewide)
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Boon',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    'Boon provides scalable, human-centered leadership development through expert coaching.',
  sameAs: [
    'https://www.linkedin.com/company/boon-coach',
    'https://twitter.com/booncoach',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: `${siteUrl}/demo`,
  },
};

// Helper to generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = '/',
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || '/images/og-default.png';

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// Article/Blog Post JSON-LD
export function generateArticleJsonLd({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  authorName = 'Boon',
  image,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Boon',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    image: image || `${siteUrl}/images/og-default.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

// FAQ JSON-LD
export function generateFAQJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Service JSON-LD (for product pages)
export function generateServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Boon',
      url: siteUrl,
    },
  };
}
