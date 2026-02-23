import Image from 'next/image';
import Link from 'next/link';

const rows = [
  { label: 'Giving and Receiving Feedback', before: '2.1', after: '3.3', change: '+53%', width: '100%' },
  { label: 'Delegation and Accountability',  before: '2.4', after: '3.4', change: '+41%', width: '77%'  },
  { label: 'Time Management',               before: '2.5', after: '3.5', change: '+40%', width: '75%'  },
  { label: 'Self Confidence',               before: '2.6', after: '3.4', change: '+33%', width: '62%'  },
  { label: 'Planning and Execution',        before: '2.7', after: '3.3', change: '+25%', width: '47%'  },
  { label: 'Emotional Intelligence',        before: '3.0', after: '3.7', change: '+24%', width: '45%'  },
];

export function LeadershipIntelligence() {
  return (
    <section
      className="section relative overflow-hidden py-20 md:py-32"
      style={{ background: 'linear-gradient(135deg, #EEF1FF 0%, #F5F0FF 35%, #FFF5F0 70%, #FFF0F5 100%)' }}
    >
      {/* Blob accents */}
      <div className="absolute top-0 left-0 w-[50%] h-[60%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, rgba(70,111,246,0.10) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-0 right-0 w-[45%] h-[55%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(255,141,128,0.12) 0%, transparent 65%)', filter: 'blur(70px)' }} />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 lg:gap-24 items-center">

          {/* ── Left: stacked visuals ── */}
          <div className="relative pb-12">

            {/* Top header card */}
            <div
              className="rounded-2xl px-5 py-4 mb-4"
              style={{
                background: 'rgba(255,255,255,0.90)',
                boxShadow: '0 4px 24px rgba(46,53,61,0.08)',
                border: '1px solid rgba(255,255,255,0.9)',
              }}
            >
              <p className="label-text text-[9px] text-boon-blue mb-1">Aggregate Cohort Performance</p>
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-bold text-boon-charcoal text-lg leading-tight">Competency Growth</h3>
                <span
                  className="label-text text-[9px] px-2.5 py-1 rounded-full flex items-center gap-1 flex-shrink-0"
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

            {/* Overlapping data table card */}
            <div
              className="absolute bottom-0 right-0 w-[80%] rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.97)',
                boxShadow: '0 16px 48px rgba(46,53,61,0.12), 0 2px 8px rgba(46,53,61,0.06)',
                border: '1px solid rgba(255,255,255,0.95)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div className="px-5 py-3">
                {rows.map((r, i) => (
                  <div
                    key={i}
                    className="grid items-center py-2"
                    style={{
                      gridTemplateColumns: '1fr 2.2rem 2.2rem 2.8rem 4.5rem',
                      borderBottom: i < rows.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                    }}
                  >
                    <span className="text-[11px] font-medium text-gray-500 pr-2 truncate">{r.label}</span>
                    <span className="text-[11px] text-gray-400 text-right tabular-nums">{r.before}</span>
                    <span className="text-[11px] font-semibold text-boon-blue text-right tabular-nums">{r.after}</span>
                    <span className="text-[11px] font-bold text-boon-blue text-right tabular-nums">{r.change}</span>
                    <div className="flex items-center pl-3">
                      <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: r.width, background: 'linear-gradient(90deg, #4ade80, #16a34a)' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right: text ── */}
          <div>
            <p className="label-text text-[10px] text-boon-blue mb-8">
              Boon&apos;s Data and Insights
            </p>
            <h2 className="font-sans text-4xl md:text-6xl lg:text-[84px] font-bold text-boon-charcoal mb-10 tracking-tight leading-[0.9]">
              See what&apos;s actually <span className="font-serif italic text-boon-blue">changing</span>.
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
