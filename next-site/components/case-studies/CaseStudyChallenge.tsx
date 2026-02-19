import { CaseStudy } from '@/lib/content';
import { renderEmphasis } from '@/lib/utils';

interface Props {
  study: CaseStudy;
}

export function CaseStudyChallenge({ study }: Props) {
  // Rich layout when challengeHeadline is provided
  if (study.challengeHeadline) {
    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-boon-navy">
        <div className="max-w-4xl mx-auto">
          <div className="text-[13px] font-extrabold text-boon-light-blue tracking-[0.1em] uppercase mb-6">
            The Challenge
          </div>

          <h2 className="text-4xl font-bold text-white leading-[1.2] tracking-tight mb-8">
            {renderEmphasis(
              study.challengeHeadline,
              study.challengeEmphasis,
              'font-serif italic text-boon-blue'
            )}
          </h2>

          {study.challengeNarrative && (
            <div className="space-y-4 mb-12">
              {study.challengeNarrative.map((paragraph, idx) => (
                <p key={idx} className="text-[17px] text-boon-light-blue font-body leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {study.challengeStats && study.challengeStats.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6">
              {study.challengeStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: stat.color || '#FFFFFF' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  // Fallback: current gray background single paragraph
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white text-boon-blue text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-8 uppercase border border-gray-100">
          The Challenge
        </div>
        <p className="text-2xl md:text-3xl text-boon-charcoal font-medium leading-relaxed">
          {study.challenge}
        </p>
      </div>
    </section>
  );
}
