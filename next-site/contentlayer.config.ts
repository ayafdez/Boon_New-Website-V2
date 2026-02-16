import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

const sharedFields = {
  title: {
    type: 'string' as const,
    required: true,
  },
  slug: {
    type: 'string' as const,
    required: true,
  },
  date: {
    type: 'date' as const,
    required: true,
  },
  author: {
    type: 'string' as const,
    required: false,
  },
  excerpt: {
    type: 'string' as const,
    required: false,
  },
  description: {
    type: 'string' as const,
    required: false,
  },
  featuredImage: {
    type: 'string' as const,
    required: false,
  },
  categories: {
    type: 'list' as const,
    of: { type: 'string' as const },
    required: false,
  },
  tags: {
    type: 'list' as const,
    of: { type: 'string' as const },
    required: false,
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...sharedFields,
    readingTime: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc.slug}`,
    },
  },
}));

export const Podcast = defineDocumentType(() => ({
  name: 'Podcast',
  filePathPattern: 'podcast/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...sharedFields,
    episodeNumber: {
      type: 'number',
      required: false,
    },
    duration: {
      type: 'string',
      required: false,
    },
    audioUrl: {
      type: 'string',
      required: false,
    },
    spotifyUrl: {
      type: 'string',
      required: false,
    },
    appleUrl: {
      type: 'string',
      required: false,
    },
    youtubeUrl: {
      type: 'string',
      required: false,
    },
    // Guest information
    guest: {
      type: 'string',
      required: false,
    },
    guestTitle: {
      type: 'string',
      required: false,
    },
    guestCompany: {
      type: 'string',
      required: false,
    },
    guestImage: {
      type: 'string',
      required: false,
    },
    // Timestamps as JSON string (array of objects with time and label)
    timestampsJson: {
      type: 'string',
      required: false,
    },
    // Key takeaways as list
    keyTakeaways: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/podcast/${doc.slug}`,
    },
  },
}));

export const BoonLive = defineDocumentType(() => ({
  name: 'BoonLive',
  filePathPattern: 'boon-live/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...sharedFields,
    eventDate: {
      type: 'date',
      required: false,
    },
    eventTime: {
      type: 'string',
      required: false,
    },
    registrationUrl: {
      type: 'string',
      required: false,
    },
    recordingUrl: {
      type: 'string',
      required: false,
    },
    // YouTube video URL for embedding
    youtubeUrl: {
      type: 'string',
      required: false,
    },
    // PDF download URL
    downloadUrl: {
      type: 'string',
      required: false,
    },
    // Topic summary for callout box
    topicSummary: {
      type: 'string',
      required: false,
    },
    // Speakers as JSON string (array of objects with name, title, company, image)
    speakersJson: {
      type: 'string',
      required: false,
    },
    // Key takeaways as list
    keyTakeaways: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    // Legacy speakers field (simple list)
    speakers: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    isUpcoming: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/boon-live/${doc.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Podcast, BoonLive],
});
