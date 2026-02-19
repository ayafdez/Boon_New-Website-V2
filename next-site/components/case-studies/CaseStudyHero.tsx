import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CaseStudy, programColors } from '@/lib/content';
import { renderEmphasis } from '@/lib/utils';

interface Props {
  study: CaseStudy;
}

export function CaseStudyHero({ study }: Props) {
  const color = programColors[study.program];

  // Rich layout when heroHeadline is provided
  if (study.heroHeadline) {
    return (
      <section className="bg-boon-off-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/learn/case-studies"
            className="inline-flex items-center gap-2 text-gray-400 font-medium hover:text-boon-blue transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-[13px] font-semibold mb-6"
                style={{ backgroundColor: `${color}1A`, color }}
              >
                Boon {study.program}
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-boon-charcoal leading-[1.1] tracking-tight mb-6">
                {renderEmphasis(study.heroHeadline, study.emphasisWord)}
              </h1>

              <p className="text-xl text-slate-500 font-body leading-relaxed mb-8">
                {study.summary}
              </p>

              {/* Company metadata */}
              <div className="flex flex-wrap items-center gap-6 mb-10">
                {study.industry && (
                  <div>
                    <div className="text-sm font-bold text-boon-charcoal">Industry</div>
                    <div className="text-sm text-slate-500 font-body">{study.industry}</div>
                  </div>
                )}
                {study.industry && study.companySize && (
                  <div className="w-px h-12 bg-slate-200 hidden sm:block" />
                )}
                {study.companySize && (
                  <div>
                    <div className="text-sm font-bold text-boon-charcoal">Company Size</div>
                    <div className="text-sm text-slate-500 font-body">{study.companySize}</div>
                  </div>
                )}
                {study.companySize && study.programDuration && (
                  <div className="w-px h-12 bg-slate-200 hidden sm:block" />
                )}
                {study.programDuration && (
                  <div>
                    <div className="text-sm font-bold text-boon-charcoal">Program Duration</div>
                    <div className="text-sm text-slate-500 font-body">{study.programDuration}</div>
                  </div>
                )}
              </div>

              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-boon-blue text-white font-bold text-lg hover:scale-105 transition-all group"
              >
                Get Similar Results
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right column - image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={study.heroImage}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
              {study.logo && (
                <div className="absolute bottom-6 left-6 bg-white rounded-lg px-6 py-4 shadow-xl">
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
        </div>
      </section>
    );
  }

  // Fallback: current stacked hero layout
  return (
    <>
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/learn/case-studies"
            className="inline-flex items-center gap-2 text-gray-400 font-medium hover:text-boon-blue transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Case Studies
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div
              className="px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
              style={{ backgroundColor: color }}
            >
              Boon {study.program}
            </div>
            <span className="text-gray-400 text-sm font-medium">{study.audience}</span>
          </div>

          <h1 className="text-5xl md:text-[72px] font-black text-boon-charcoal leading-[0.9] tracking-tighter mb-8 max-w-5xl">
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
    </>
  );
}
