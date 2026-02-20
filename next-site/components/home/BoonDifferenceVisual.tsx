import { ArrowDown, X, Check } from 'lucide-react';

export function BoonDifferenceVisual() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-16">

      {/* BEFORE - Fragmented Journey */}
      <div>
        <div className="mb-8 text-center">
          <div className="text-xs font-body font-extrabold text-slate-400 tracking-[0.1em] mb-2">
            BEFORE
          </div>
          <h3 className="text-xl md:text-2xl font-sans font-bold text-boon-charcoal mb-3">
          </h3>
          <p className="text-sm font-body text-slate-500 max-w-2xl mx-auto">
            Maria sat through an onboarding webinar in 2021. She didn&apos;t get development again until she was already managing a team.
          </p>
        </div>

        {/* Timeline with gaps */}
        <div className="relative">
          {/* Dashed connector line (desktop) */}
          <div className="hidden sm:block absolute top-2 left-[16.67%] right-[16.67%] h-0.5" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #E2E8F0 0, #E2E8F0 6px, transparent 6px, transparent 12px)' }} />

          <div className="grid sm:grid-cols-3 gap-0 sm:gap-6">
            {[
              { role: 'IC', year: '2021', offering: 'Onboarding webinar', isEmpty: true, pain: 'Generic, forgotten in a week' },
              { role: 'Manager', year: '2023', offering: 'Leadership 101 workshop', isEmpty: true, pain: 'Too late, too basic' },
              { role: 'VP', year: '2025', offering: 'Executive Coach', isEmpty: false, pain: 'Expensive, no foundation to build on' },
            ].map((stage, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Vertical dashed connector (mobile only) */}
                {i > 0 && (
                  <div className="sm:hidden w-0.5 h-8 my-1" style={{ backgroundImage: 'repeating-linear-gradient(180deg, #E2E8F0 0, #E2E8F0 4px, transparent 4px, transparent 8px)' }} />
                )}

                {/* Dot */}
                <div
                  className={`w-4 h-4 rounded-full mb-3 border-2 relative z-10 ${
                    stage.isEmpty
                      ? 'bg-white border-slate-200'
                      : 'bg-boon-purple border-boon-purple'
                  }`}
                />

                {/* Role */}
                <div className="text-sm font-sans font-bold text-boon-charcoal mb-0.5">
                  {stage.role}
                </div>

                {/* Year */}
                <div className="text-xs font-body text-slate-400 mb-3">
                  {stage.year}
                </div>

                {/* Offering badge */}
                <div
                  className={`px-3 py-1.5 rounded border ${
                    stage.isEmpty
                      ? 'border-slate-200 bg-slate-50 opacity-50'
                      : 'border-boon-purple/25 bg-boon-purple/10'
                  }`}
                >
                  <div className={`text-xs font-body font-semibold ${
                    stage.isEmpty ? 'text-slate-400' : 'text-boon-purple'
                  }`}>
                    {stage.offering}
                  </div>
                </div>

                {/* Pain point */}
                <div className="flex items-center gap-1.5 mt-2">
                  <X className="w-3.5 h-3.5 text-boon-coral flex-shrink-0" />
                  <span className="text-xs font-body text-slate-400 italic">{stage.pain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider arrow */}
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-boon-blue flex items-center justify-center">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* AFTER - With Boon */}
      <div className="rounded-2xl border border-boon-blue/15 bg-boon-blue/[0.03] p-8 md:p-12">
        <div className="mb-8 text-center">
          <div className="text-xs font-body font-extrabold text-boon-blue tracking-[0.1em] mb-2">
            WITH BOON
          </div>
          <h3 className="text-xl md:text-2xl font-sans font-bold text-boon-charcoal mb-3">
          </h3>
          <p className="text-sm font-body text-boon-charcoal max-w-2xl mx-auto">
            Scaffolded development from day one.{' '}
            <span className="font-serif italic font-semibold text-boon-blue">
              Each stage builds on the last.
            </span>
          </p>
        </div>

        {/* Continuous timeline */}
        <div className="relative">
          {/* Continuous gradient line (desktop) */}
          <div
            className="hidden sm:block absolute top-2.5 left-[16.67%] right-[16.67%] h-1 rounded-full"
            style={{ background: 'linear-gradient(to right, #466FF6, #FF6D6A, #C47ACC)' }}
          />

          {/* Timeline stages */}
          <div className="grid sm:grid-cols-3 gap-0 sm:gap-6 mb-6 relative">
            {[
              { role: 'IC', year: '2021', product: 'SCALE', color: '#466FF6', context: 'Builds self-awareness' },
              { role: 'Manager', year: '2023', product: 'GROW', color: '#FF6D6A', context: 'Applies IC insights to leadership' },
              { role: 'VP', year: '2025', product: 'EXEC', color: '#C47ACC', context: 'Accelerates with strong foundation' },
            ].map((stage, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Vertical gradient connector (mobile only) */}
                {i > 0 && (
                  <div className="sm:hidden w-1 h-8 my-1 rounded-full" style={{
                    background: i === 1
                      ? 'linear-gradient(to bottom, #466FF6, #FF6D6A)'
                      : 'linear-gradient(to bottom, #FF6D6A, #C47ACC)',
                  }} />
                )}

                {/* Dot with glow */}
                <div
                  className="w-5 h-5 rounded-full mb-3 relative z-10"
                  style={{
                    backgroundColor: stage.color,
                    boxShadow: `0 0 0 4px ${stage.color}20`,
                  }}
                />

                {/* Role */}
                <div className="text-sm font-sans font-bold text-boon-charcoal mb-0.5">
                  {stage.role}
                </div>

                {/* Year */}
                <div className="text-xs font-body text-slate-400 mb-3">
                  {stage.year}
                </div>

                {/* Product badge */}
                <div className="px-3 py-1.5 rounded mb-2" style={{ backgroundColor: `${stage.color}15` }}>
                  <div className="text-xs font-body font-bold" style={{ color: stage.color }}>
                    Boon {stage.product}
                  </div>
                </div>

                {/* Context note */}
                <div className="text-xs font-body text-slate-500 italic px-2">
                  {stage.context}
                </div>
              </div>
            ))}
          </div>

          {/* TOGETHER persistent bar */}
          <div className="mt-4 mx-auto rounded-lg bg-emerald-50 border border-emerald-200/50 px-4 py-2.5 text-center" style={{ width: 'calc(100% - 2rem)' }}>
            <span className="text-xs font-body font-bold text-emerald-600 tracking-wide">
              Boon TOGETHER
            </span>
            <span className="text-xs font-body text-emerald-600/70 ml-2">
              Team workshops available at every stage
            </span>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6">
            {[
              'Development from day one',
              'Growth compounds over time',
              'Context carries forward',
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-boon-green" />
                <span className="text-sm font-body font-medium text-boon-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
