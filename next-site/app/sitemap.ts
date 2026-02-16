import type { MetadataRoute } from 'next';
import { getCaseStudySlugs, getBlogPostSlugs } from '@/lib/content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.boon.coach';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    '',
    '/solutions',
    '/solutions/scale',
    '/solutions/grow',
    '/solutions/exec',
    '/solutions/together',
    '/why',
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

  // Dynamic blog posts
  const blogSlugs = await getBlogPostSlugs();
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
