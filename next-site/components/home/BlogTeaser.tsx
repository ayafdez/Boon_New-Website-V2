import Link from 'next/link';
import Image from 'next/image';
import { allBlogs } from 'contentlayer/generated';
import { getCaseStudies, programColors } from '@/lib/content';

export async function BlogTeaser() {
  const latest = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 1)[0];

  const allStudies = await getCaseStudies();
  const caseStudies = allStudies.slice(0, 3);

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24" style={{ background: 'rgb(240, 243, 247)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Blog row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-16 md:py-20 border-b border-gray-200">

          {/* Left — label + heading */}
          <div>
            <p className="label-text text-[10px] text-boon-blue mb-6">Blog</p>
            <h2 className="font-sans text-2xl md:text-4xl lg:text-[44px] font-bold text-boon-charcoal tracking-tight leading-[0.9]">
              Insights for leaders building{' '}
              <span className="font-serif italic text-boon-blue">what&apos;s next.</span>
            </h2>
          </div>

          {/* Right — latest post */}
          {latest && (
            <div className="flex flex-col gap-3">
              <Link href={`/learn/blog/${latest.slug}`} className="group">
                <h3 className="font-sans font-bold text-boon-blue text-base md:text-lg leading-snug group-hover:underline underline-offset-4">
                  {latest.title}
                </h3>
              </Link>
              {latest.excerpt && (
                <p className="text-sm md:text-base text-gray-500 font-body font-medium leading-relaxed">
                  {latest.excerpt}
                </p>
              )}
              <div className="pt-1">
                <Link
                  href="/learn/blog"
                  className="inline-flex items-center gap-1 label-text text-[10px] text-boon-blue hover:gap-3 transition-all underline underline-offset-4"
                >
                  View all articles →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Case studies row */}
        <div className="pt-16 md:pt-20">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/learn/case-studies/${study.slug}`}
                className="group flex flex-col gap-3"
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Program badge */}
                  <div
                    className="absolute top-3 left-3 label-text text-[9px] px-3 py-1.5 rounded-full text-white"
                    style={{ background: programColors[study.program] }}
                  >
                    Boon {study.program}
                  </div>
                </div>
                {/* Title */}
                <p className="text-sm font-sans font-semibold text-boon-charcoal leading-snug group-hover:text-boon-blue transition-colors">
                  {study.title}
                </p>
              </Link>
            ))}
          </div>

          {/* See all link */}
          <div className="text-center">
            <Link
              href="/learn/case-studies"
              className="inline-flex items-center gap-1 label-text text-[10px] text-boon-blue hover:gap-3 transition-all underline underline-offset-4"
            >
              See all case studies →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
