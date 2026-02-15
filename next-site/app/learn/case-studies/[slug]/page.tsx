import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { getCaseStudyBySlug, getCaseStudySlugs, getCaseStudies } from '@/lib/content';
import { GlobalCTA } from '@/components/layout/GlobalCTA';

const programColors: Record<string, string> = {
  Scale: '#466FF6',
  Grow: '#FF8D80',
  Exec: '#2E353D',
  Together: '#FDB022',
};

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
  const otherStudies = allStudies.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/learn/case-studies"
            className="inline-flex items-center gap-2 text-gray-400 font-medium hover:text-[#466FF6] transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Case Studies
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div
              className="px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
              style={{ backgroundColor: programColors[study.program] }}
            >
              Boon {study.program}
            </div>
            <span className="text-gray-400 text-sm font-medium">{study.audience}</span>
          </div>

          <h1 className="text-5xl md:text-[72px] font-black text-[#2E353D] leading-[0.9] tracking-tighter mb-8 max-w-5xl">
            {study.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            {study.summary}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden">
            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {study.logo && (
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src={study.logo}
                  alt={`${study.title} logo`}
                  width={120}
                  height={48}
                  className="object-contain h-10 w-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-8 uppercase border border-gray-100">
            The Challenge
          </div>
          <p className="text-2xl md:text-3xl text-[#2E353D] font-medium leading-relaxed">
            {study.challenge}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-8 uppercase border border-gray-100">
            The Solution
          </div>
          <p className="text-2xl md:text-3xl text-[#2E353D] font-medium leading-relaxed">
            {study.solution}
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#2E353D]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-12 uppercase">
            The Results
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {study.results.map((result, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-[32px] p-10 text-center"
              >
                <div
                  className="text-5xl md:text-6xl font-black mb-4"
                  style={{ color: programColors[study.program] }}
                >
                  {result.metric}
                </div>
                <p className="text-white/80 font-medium text-lg leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="mx-auto mb-8 text-[#466FF6]" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
            <blockquote className="text-2xl md:text-4xl font-black text-[#2E353D] leading-tight tracking-tight mb-8">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-black text-[#2E353D] text-lg">{study.testimonial.name}</p>
              <p className="text-gray-500 font-medium">{study.testimonial.title}</p>
            </div>
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* More Case Studies */}
      {otherStudies.length > 0 && (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] tracking-tighter mb-12">
              More case studies.
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {otherStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/learn/case-studies/${other.slug}`}
                  className="group bg-white rounded-[48px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={other.heroImage}
                      alt={other.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div
                      className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
                      style={{ backgroundColor: programColors[other.program] }}
                    >
                      Boon {other.program}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-[#2E353D] mb-4 group-hover:text-[#466FF6] transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      {other.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/learn/case-studies"
                className="inline-block bg-[#466FF6] text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>
      )}

      <GlobalCTA />
    </main>
  );
}
