import Link from 'next/link';

function ImpactMetricRow({
  label, before, after, change, width,
}: {
  label: string; before: string; after: string; change: string; width: string;
}) {
  return (
    <div
      className="grid items-center py-5"
      style={{
        gridTemplateColumns: '1fr 3rem 3rem 3.5rem 8rem',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <span className="text-sm font-medium text-gray-600 pr-4">{label}</span>
      <span className="text-sm text-gray-400 text-right tabular-nums">{before}</span>
      <span className="text-sm font-bold text-boon-blue text-right tabular-nums">{after}</span>
      <span className="text-sm font-bold text-boon-blue text-right tabular-nums">{change}</span>
      <div className="flex items-center pl-5">
        <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width, background: 'linear-gradient(90deg, #4ade80, #16a34a)' }} />
        </div>
      </div>
    </div>
  );
}

export function LeadershipIntelligence() {
  return (
    <section
      className="section section-py relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EEF1FF 0%, #F5F0FF 35%, #FFF5F0 70%, #FFF0F5 100%)' }}
    >
      {/* Blob accents */}
      <div className="absolute top-0 left-0 w-[50%] h-[60%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, rgba(70,111,246,0.10) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-0 right-0 w-[45%] h-[55%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(255,141,128,0.12) 0%, transparent 65%)', filter: 'blur(70px)' }} />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 lg:gap-32 items-center">

          {/* Left — text */}
          <div>
            <p className="label-text text-[10px] text-boon-blue mb-8">
              Boon&apos;s Data and Insights
            </p>
            <h2 className="font-sans text-4xl md:text-6xl lg:text-[84px] font-bold text-boon-charcoal mb-10 tracking-tight leading-[0.9]">
              See what&apos;s actually <span className="font-serif italic text-boon-blue">changing</span>.
            </h2>
            <div className="space-y-6 max-w-md">
              <p className="text-base md:text-lg text-gray-500 font-body font-medium leading-relaxed">
                Leverage AI-powered insights to give your exec team the data they need to see development in action.
              </p>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 label-text text-[10px] text-boon-blue hover:gap-4 transition-all"
              >
                See how leadership signal compounds over time →
              </Link>
            </div>
          </div>

          {/* Right — card */}
          <div className="flex flex-col gap-4 w-full relative">
            <p className="label-text text-[9px] text-gray-400 text-right tracking-widest">
              Aggregated cohort deltas measured across coached leaders over time.
            </p>

            <div
              className="rounded-[28px] overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.92)',
                boxShadow: '0 24px 64px rgba(46,53,61,0.10), 0 4px 16px rgba(46,53,61,0.06)',
                border: '1px solid rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Card header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-sans font-bold text-boon-charcoal text-2xl md:text-3xl leading-tight">
                    Competency Growth
                  </h3>
                  <span
                    className="text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full mt-1 flex-shrink-0"
                    style={{ background: 'rgba(108,216,147,0.15)', color: '#16a34a', border: '1px solid rgba(108,216,147,0.3)' }}
                  >
                    Verified
                  </span>
                </div>
                <p className="label-text text-[9px] text-gray-400 tracking-widest mt-1">
                  Aggregate Cohort Performance &bull; Q3–Q4 2025
                </p>
              </div>

              {/* Rows */}
              <div className="px-8 pb-4">
                <ImpactMetricRow label="Giving and Receiving Feedback" before="2.1" after="3.3" change="+53%" width="100%" />
                <ImpactMetricRow label="Delegation and Accountability"  before="2.4" after="3.4" change="+41%" width="77%"  />
                <ImpactMetricRow label="Time Management"               before="2.5" after="3.5" change="+40%" width="75%"  />
                <ImpactMetricRow label="Self Confidence"               before="2.6" after="3.4" change="+33%" width="62%"  />
                <ImpactMetricRow label="Planning and Execution"        before="2.7" after="3.3" change="+25%" width="47%"  />
                <ImpactMetricRow label="Emotional Intelligence"        before="3.0" after="3.7" change="+24%" width="45%"  />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function ImpactMetricRow({
  label,
  before,
  after,
  change,
  width,
}: {
  label: string;
  before: string;
  after: string;
  change: string;
  width: string;
}) {
  return (
    <div className="py-5 border-b border-gray-50 text-[10px] font-body font-bold tracking-tight group">
      {/* Mobile layout: stacked */}
      <div className="flex flex-col gap-3 sm:hidden">
        <div className="flex justify-between items-center">
          <div className="text-boon-charcoal text-xs">{label}</div>
          <div className="text-boon-green text-xs">{change}</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-300 shrink-0">{before}</span>
          <div className="h-1.5 bg-gray-50 rounded-full flex-1 overflow-hidden">
            <div
              className="h-full bg-boon-green rounded-full transition-all duration-1000"
              style={{ width }}
            ></div>
          </div>
          <span className="text-boon-blue shrink-0">{after}</span>
        </div>
      </div>
      {/* Desktop layout: grid row */}
      <div className="hidden sm:grid grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr_1fr] items-center">
        <div className="text-boon-charcoal group-hover:text-boon-blue transition-colors">{label}</div>
        <div className="text-gray-300">{before}</div>
        <div className="text-boon-blue">{after}</div>
        <div className="text-boon-green">{change}</div>
        <div className="pl-6">
          <div className="h-1.5 bg-gray-50 rounded-full w-full overflow-hidden">
            <div
              className="h-full bg-boon-green rounded-full transition-all duration-1000"
              style={{ width }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
