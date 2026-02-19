import Image from 'next/image';
import { TrendingUp, Users, Target, Award } from 'lucide-react';
import type { ReactNode } from 'react';
import { CaseStudy, programColors } from '@/lib/content';
import { renderEmphasis } from '@/lib/utils';

const iconMap: Record<string, ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
};

const statColors = ['#6CD893', '#466FF6', '#FFC969', '#C47ACC'];

interface Props {
  study: CaseStudy;
}

export function CaseStudyResults({ study }: Props) {
  const color = programColors[study.program];

  // Rich layout when resultsHeadline is provided
  if (study.resultsHeadline) {
    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-boon-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[13px] font-extrabold text-boon-green tracking-[0.1em] uppercase mb-6">
              The Results
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight mb-4">
              {renderEmphasis(
                study.resultsHeadline,
                study.resultsEmphasis,
                'font-serif italic text-boon-blue'
              )}
            </h2>
            {study.resultsIntro && (
              <p className="text-lg text-boon-light-blue font-body max-w-2xl mx-auto">
                {study.resultsIntro}
              </p>
            )}
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {study.results.map((result, idx) => {
              const statColor = statColors[idx % statColors.length];
              const icon = result.icon ? iconMap[result.icon] : null;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 text-center">
                  {icon && (
                    <div
                      className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${statColor}26`, color: statColor }}
                    >
                      {icon}
                    </div>
                  )}
                  <div className="text-4xl font-bold mb-2" style={{ color: statColor }}>
                    {result.metric}
                  </div>
                  <div className="text-sm font-bold text-boon-charcoal mb-1">
                    {result.description}
                  </div>
                  {result.detail && (
                    <div className="text-xs text-slate-500 font-body">{result.detail}</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Key outcomes */}
          {study.keyOutcomes && study.keyOutcomes.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {study.keyOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{outcome.title}</h3>
                  <p className="text-sm text-boon-light-blue font-body leading-relaxed mb-4">
                    {outcome.description}
                  </p>
                  <div className="border-t border-white/10 pt-3">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                      {outcome.label}
                    </div>
                    <div className="text-sm text-boon-light-blue font-body">{outcome.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Featured testimonial */}
          {study.featuredQuote && (
            <div
              className="p-8 rounded-xl"
              style={{
                backgroundColor: 'rgba(70,111,246,0.1)',
                border: '1px solid rgba(70,111,246,0.3)',
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {study.featuredQuote.image && (
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={study.featuredQuote.image}
                      alt={study.featuredQuote.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-2xl font-serif italic text-white leading-relaxed mb-4">
                    &ldquo;{study.featuredQuote.quote}&rdquo;
                  </p>
                  <div>
                    <span className="text-sm font-bold text-white">{study.featuredQuote.name}</span>
                    <span className="text-[13px] text-boon-light-blue font-body ml-2">
                      {study.featuredQuote.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Fallback: current dark background 3-col stats + testimonial
  return (
    <>
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-boon-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-12 uppercase">
            The Results
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {study.results.map((result, idx) => (
              <div key={idx} className="bg-white/10 rounded-[32px] p-10 text-center">
                <div className="text-5xl md:text-6xl font-black mb-4" style={{ color }}>
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
            <svg className="mx-auto mb-8 text-boon-blue" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
            <blockquote className="text-2xl md:text-4xl font-black text-boon-charcoal leading-tight tracking-tight mb-8">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-black text-boon-charcoal text-lg">{study.testimonial.name}</p>
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
    </>
  );
}
