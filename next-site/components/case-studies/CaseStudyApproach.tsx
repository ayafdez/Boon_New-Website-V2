import { CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '@/lib/content';
import { renderEmphasis } from '@/lib/utils';

interface Props {
  study: CaseStudy;
}

export function CaseStudyApproach({ study }: Props) {
  // Rich layout when approachHeadline is provided
  if (study.approachHeadline) {
    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-[13px] font-extrabold text-boon-blue tracking-[0.1em] uppercase mb-6">
            {"Boon's Approach"}
          </div>

          <h2 className="text-4xl font-bold text-boon-charcoal leading-[1.2] tracking-tight mb-6">
            {renderEmphasis(study.approachHeadline, study.approachEmphasis)}
          </h2>

          {study.approachIntro && (
            <p className="text-xl text-slate-500 font-body leading-relaxed mb-12">
              {study.approachIntro}
            </p>
          )}

          {study.approachColumns && study.approachColumns.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {study.approachColumns.map((column, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-boon-charcoal mb-4">{column.title}</h3>
                  <div className="space-y-3">
                    {column.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-boon-green flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] text-slate-500 font-body leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {study.approachQuote && (
            <div className="p-8 rounded-xl border-2 border-[#E8ECF4] bg-[#F8F9FC]">
              <svg className="text-boon-light-blue mb-4" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
              <p className="text-xl font-serif italic text-boon-charcoal leading-relaxed mb-4">
                &ldquo;{study.approachQuote.quote}&rdquo;
              </p>
              <div>
                <span className="text-sm font-bold text-boon-charcoal">{study.approachQuote.name}</span>
                <span className="text-[13px] text-slate-500 font-body ml-2">{study.approachQuote.title}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Fallback: current white background "Solution" paragraph
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gray-50 text-boon-blue text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-8 uppercase border border-gray-100">
          The Solution
        </div>
        <p className="text-2xl md:text-3xl text-boon-charcoal font-medium leading-relaxed">
          {study.solution}
        </p>
      </div>
    </section>
  );
}
