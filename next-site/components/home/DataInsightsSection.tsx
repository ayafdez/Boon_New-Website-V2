'use client';

import Image from 'next/image';
import Link from 'next/link';

const competencies = [
  { name: 'Giving and Receiving Feedback', before: 2.1, after: 3.3, delta: '+53%', barWidth: 72 },
  { name: 'Delegation and Accountability',  before: 2.4, after: 3.4, delta: '+41%', barWidth: 60 },
  { name: 'Time Management',               before: 2.5, after: 3.5, delta: '+40%', barWidth: 58 },
  { name: 'Self Confidence',               before: 2.6, after: 3.4, delta: '+33%', barWidth: 48 },
  { name: 'Planning and Execution',        before: 2.7, after: 3.2, delta: '+25%', barWidth: 38 },
  { name: 'Emotional Intelligence',        before: 3.0, after: 3.7, delta: '+24%', barWidth: 34 },
];

export function DataInsightsSection() {
  return (
    <section
      className="section section-py relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EEF1FF 0%, #F5F0FF 35%, #FFF5F0 70%, #FFF0F5 100%)' }}
    >
      {/* Blob accents */}
      <div className="absolute top-0 left-0 w-[50%] h-[60%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, rgba(70,111,246,0.10) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-0 right-0 w-[45%] h-[55%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(255,141,128,0.12) 0%, transparent 65%)', filter: 'blur(70px)' }} />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

          {/* ── Left: stacked visuals ── */}
          <div className="relative" style={{ minHeight: 520 }}>

            {/* Header card — top, full width */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.92)',
                boxShadow: '0 4px 24px rgba(46,53,61,0.08)',
                border: '1px solid rgba(255,255,255,0.9)',
                padding: '20px 24px 16px',
                marginBottom: 16,
              }}
            >
              <p className="label-text text-[9px] text-boon-blue mb-1">Aggregate Cohort Performance</p>
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-bold text-boon-charcoal text-xl leading-tight">Competency Growth</h3>
                <span
                  className="text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1"
                  style={{ background: 'rgba(108,216,147,0.15)', color: '#16a34a', border: '1px solid rgba(108,216,147,0.25)' }}
                >
                  ✓ Verified
                </span>
              </div>
              <p className="label-text text-[9px] text-gray-400 mt-0.5">Q3–Q4 2025</p>
            </div>

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 240 }}>
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=90&auto=format&fit=crop"
                alt="Leadership coaching session"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Data table card — overlapping bottom-right */}
            <div
              className="absolute bottom-0 right-0 w-[82%] rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.97)',
                boxShadow: '0 16px 48px rgba(46,53,61,0.12), 0 2px 8px rgba(46,53,61,0.06)',
                border: '1px solid rgba(255,255,255,0.95)',
                backdropFilter: 'blur(16px)',
                transform: 'translateY(32px)',
              }}
            >
              <div className="px-5 py-4">
                {competencies.map((c, i) => (
                  <div
                    key={i}
                    className="grid items-center py-2.5"
                    style={{
                      gridTemplateColumns: '1fr 2.5rem 2.5rem 3rem 5rem',
                      borderBottom: i < competencies.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                    }}
                  >
                    <span className="text-[11px] font-medium text-gray-500 pr-2 truncate">{c.name}</span>
                    <span className="text-[11px] text-gray-400 text-right tabular-nums">{c.before.toFixed(1)}</span>
                    <span className="text-[11px] font-semibold text-boon-blue text-right tabular-nums">{c.after.toFixed(1)}</span>
                    <span className="text-[11px] font-bold text-boon-blue text-right tabular-nums">{c.delta}</span>
                    <div className="flex items-center pl-3">
                      <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${c.barWidth}%`, background: 'linear-gradient(90deg, #4ade80, #16a34a)' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right: text ── */}
          <div className="lg:pl-4" style={{ paddingBottom: 32 }}>
            <p className="label-text text-[10px] text-boon-blue mb-8">
              Boon&apos;s Data and Insights
            </p>
            <h2 className="font-sans text-4xl md:text-6xl lg:text-[84px] font-bold text-boon-charcoal mb-10 tracking-tight leading-[0.9]">
              See what&apos;s actually{' '}
              <span className="font-serif italic text-boon-blue">changing</span>.
            </h2>
            <div className="space-y-6 max-w-sm">
              <p className="text-base md:text-lg text-gray-500 font-body font-medium leading-relaxed">
                Leverage AI-powered insights to give your exec team the data they need to see development in action.
              </p>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 label-text text-[10px] text-boon-blue hover:gap-4 transition-all underline underline-offset-4"
              >
                See how leadership signal compounds over time →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
