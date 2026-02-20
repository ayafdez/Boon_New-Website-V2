import Link from 'next/link';

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

export function LeadershipIntelligence() {
  return (
    <section className="section section-py relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-boon-soft-coral/10 via-white to-boon-light-blue/15"></div>

      {/* Soft radial gradient accent - right side */}
      <div
        className="absolute top-[20%] -right-[5%] w-[45%] h-[70%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.25) 0%, rgba(204, 217, 255, 0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      ></div>

      {/* Secondary blue accent - bottom left */}
      <div
        className="absolute -bottom-[10%] -left-[5%] w-[35%] h-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.15) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      ></div>

      <div className="container-xl grid lg:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 lg:gap-32 items-center relative z-10">
        <div>
          <p className="label-text text-[10px] text-boon-blue mb-10">
            Boon&apos;s Data and Insights
          </p>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-[84px] font-bold text-boon-charcoal mb-12 tracking-tight leading-tight lg:leading-[0.9]">
            See what&apos;s actually <span className="font-serif italic text-boon-blue">changing</span>.
          </h2>
          <div className="space-y-8 max-w-xl">
            <p className="text-base md:text-lg text-boon-charcoal font-body font-semibold leading-relaxed">
              Leverage AI-powered insights to give your exec team the data they need to see development in action.
            </p>
            <div className="pt-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-body font-bold text-boon-blue hover:gap-4 transition-all uppercase tracking-widest"
              >
                See how leadership signal compounds over time <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full relative">
          <p className="label-text text-[10px] text-gray-300 ml-0 md:ml-12">
            Aggregated cohort deltas measured across coached leaders over time.
          </p>

          {/* Organic gradient blob behind chart - signature Boon visual */}
          <div className="absolute -inset-12 z-0 pointer-events-none">
            {/* Blue accent - top left */}
            <div
              className="absolute -top-20 -left-20 w-[380px] h-[420px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.5) 0%, rgba(70, 111, 246, 0.25) 40%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            ></div>
            {/* Coral accent - bottom right */}
            <div
              className="absolute -bottom-16 -right-16 w-[350px] h-[380px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.55) 0%, rgba(255, 141, 128, 0.3) 40%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            ></div>
            {/* Center blend for smooth transition */}
            <div
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[450px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(204, 217, 255, 0.4) 0%, rgba(255, 187, 187, 0.25) 50%, transparent 80%)',
                filter: 'blur(55px)',
              }}
            ></div>
          </div>

          <div className="bg-white p-6 md:p-12 lg:p-20 rounded-[32px] md:rounded-[80px] shadow-2xl border border-gray-100 relative z-10">
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-16">
                <div>
                  <h3 className="font-sans text-xl md:text-3xl font-bold text-boon-charcoal tracking-tight">Competency Growth</h3>
                  <p className="label-text text-[10px] text-gray-400 mt-2">
                    Aggregate Cohort Performance • Q3-Q4 2025
                  </p>
                </div>
                <div className="label-text text-[10px] text-boon-green bg-boon-green/10 px-4 py-2 rounded-full border border-boon-green/10">
                  VERIFIED
                </div>
              </div>

              <div className="space-y-2">
                <ImpactMetricRow
                  label="Giving and Receiving Feedback"
                  before="2.1"
                  after="3.3"
                  change="+53%"
                  width="100%"
                />
                <ImpactMetricRow
                  label="Delegation and Accountability"
                  before="2.4"
                  after="3.4"
                  change="+41%"
                  width="77%"
                />
                <ImpactMetricRow
                  label="Time Management"
                  before="2.5"
                  after="3.5"
                  change="+40%"
                  width="75%"
                />
                <ImpactMetricRow
                  label="Self Confidence"
                  before="2.6"
                  after="3.4"
                  change="+33%"
                  width="62%"
                />
                <ImpactMetricRow
                  label="Planning and Execution"
                  before="2.7"
                  after="3.3"
                  change="+25%"
                  width="47%"
                />
                <ImpactMetricRow
                  label="Emotional Intelligence"
                  before="3.0"
                  after="3.7"
                  change="+24%"
                  width="45%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
