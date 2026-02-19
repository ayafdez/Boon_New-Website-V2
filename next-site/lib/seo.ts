import type { Metadata } from 'next';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.boon-health.com';

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
    'https://www.linkedin.com/company/boon-health/',
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
  ogTitle,
  ogDescription,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || 'https://storage.googleapis.com/boon-public-assets/boon-og-default.png';
  const socialTitle = ogTitle || title;
  const socialDescription = ogDescription || description;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: socialTitle }],
    },
    twitter: {
      title: socialTitle,
      description: socialDescription,
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
    image: image || 'https://storage.googleapis.com/boon-public-assets/boon-og-default.png',
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

// BreadcrumbList JSON-LD
export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

// Event JSON-LD
export function generateEventJsonLd({
  name,
  startDate,
  description,
  url,
  isUpcoming,
  hasRecording,
}: {
  name: string;
  startDate: string;
  description?: string;
  url: string;
  isUpcoming: boolean;
  hasRecording?: boolean;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    startDate,
    description: description || name,
    url,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: isUpcoming
      ? 'https://schema.org/EventScheduled'
      : hasRecording
        ? 'https://schema.org/EventMovedOnline'
        : 'https://schema.org/EventScheduled',
    organizer: {
      '@type': 'Organization',
      name: 'Boon',
      url: siteUrl,
    },
    location: {
      '@type': 'VirtualLocation',
      url,
    },
  };
}

// Podcast Series JSON-LD
export function generatePodcastSeriesJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: 'The Human Layer',
    description: 'Conversations with operators about leadership in practice.',
    url: `${siteUrl}/learn/podcast`,
    author: {
      '@type': 'Organization',
      name: 'Boon',
      url: siteUrl,
    },
  };
}

// Podcast Episode JSON-LD
export function generatePodcastEpisodeJsonLd({
  name,
  datePublished,
  duration,
  episodeNumber,
  description,
  url,
  spotifyUrl,
  appleUrl,
}: {
  name: string;
  datePublished: string;
  duration?: string;
  episodeNumber?: number;
  description?: string;
  url: string;
  spotifyUrl?: string;
  appleUrl?: string;
}) {
  // Parse duration like "42 min" to "PT42M"
  let isoDuration: string | undefined;
  if (duration) {
    const match = duration.match(/(\d+)\s*min/);
    if (match) {
      isoDuration = `PT${match[1]}M`;
    }
  }

  const sameAs: string[] = [];
  if (spotifyUrl) sameAs.push(spotifyUrl);
  if (appleUrl) sameAs.push(appleUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    name,
    datePublished,
    description: description || name,
    url,
    ...(isoDuration && { timeRequired: isoDuration }),
    ...(episodeNumber && { episodeNumber }),
    partOfSeries: {
      '@type': 'PodcastSeries',
      name: 'The Human Layer',
      url: `${siteUrl}/learn/podcast`,
    },
    ...(sameAs.length > 0 && { sameAs }),
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
