import type { MetadataRoute } from 'next';
import { getCaseStudySlugs } from '@/lib/content';
import { siteUrl } from '@/lib/seo';
import { allBlogs } from 'contentlayer/generated';
import { allPodcasts } from 'contentlayer/generated';
import { allBoonLives } from 'contentlayer/generated';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    '',
    '/solutions',
    '/solutions/scale',
    '/solutions/grow',
    '/solutions/exec',
    '/solutions/together',
    '/story',
    '/coaches',
    '/individuals',
    '/learn',
    '/learn/blog',
    '/learn/live',
    '/learn/podcast',
    '/learn/case-studies',
    '/learn/resources',
    '/demo',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/solutions' ? 0.9 : 0.8,
  }));

  // Dynamic case studies
  const caseStudySlugs = await getCaseStudySlugs();
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${siteUrl}/learn/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic blog posts from Contentlayer
  const blogRoutes: MetadataRoute.Sitemap = allBlogs.map((post) => ({
    url: `${siteUrl}/learn/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // Dynamic podcast episodes from Contentlayer
  const podcastRoutes: MetadataRoute.Sitemap = allPodcasts.map((episode) => ({
    url: `${siteUrl}/learn/podcast/${episode.slug}`,
    lastModified: episode.date ? new Date(episode.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // Dynamic live events from Contentlayer
  const liveRoutes: MetadataRoute.Sitemap = allBoonLives.map((event) => ({
    url: `${siteUrl}/learn/live/${event.slug}`,
    lastModified: event.date ? new Date(event.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes, ...podcastRoutes, ...liveRoutes];
}
