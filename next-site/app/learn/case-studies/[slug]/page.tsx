import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, generateArticleJsonLd, generateBreadcrumbJsonLd, siteUrl } from '@/lib/seo';
import { getCaseStudyBySlug, getCaseStudySlugs, getCaseStudies } from '@/lib/content';
import { GlobalCTA } from '@/components/layout/GlobalCTA';
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero';
import { CaseStudyChallenge } from '@/components/case-studies/CaseStudyChallenge';
import { CaseStudyApproach } from '@/components/case-studies/CaseStudyApproach';
import { CaseStudyResults } from '@/components/case-studies/CaseStudyResults';
import { CaseStudyRelated } from '@/components/case-studies/CaseStudyRelated';

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return {};

  return generatePageMetadata({
    title: study.title,
    description: study.summary,
    path: `/learn/case-studies/${study.slug}`,
    image: study.heroImage,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const allStudies = await getCaseStudies();
  const otherStudies = allStudies
    .filter((s) => s.slug !== study.slug)
    .map((s) => {
      const sharedTags = s.tags.filter((t) => study.tags.includes(t)).length;
      const programBonus = s.program !== study.program ? 0.5 : 0;
      return { ...s, relevance: sharedTags + programBonus };
    })
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 2);

  const articleJsonLd = generateArticleJsonLd({
    title: study.title,
    description: study.summary,
    url: `${siteUrl}/learn/case-studies/${study.slug}`,
    publishedTime: new Date().toISOString(),
    authorName: 'Boon',
    image: study.heroImage,
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Case Studies', path: '/learn/case-studies' },
    { name: study.title, path: `/learn/case-studies/${study.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="bg-white">
        <CaseStudyHero study={study} />
        <CaseStudyChallenge study={study} />
        <CaseStudyApproach study={study} />
        <CaseStudyResults study={study} />
        <CaseStudyRelated studies={otherStudies} />
        <GlobalCTA />
      </main>
    </>
  );
}
