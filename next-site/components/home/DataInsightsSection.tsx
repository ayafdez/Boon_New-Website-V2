'use client';

import Image from 'next/image';
import Link from 'next/link';

const competencies = [
  { name: 'Giving and Receiving Feedback', before: 2.8, after: 3.8, delta: '+63%' },
  { name: 'Delegation and Accountability',  before: 2.4, after: 3.6, delta: '+47%' },
  { name: 'Time Management',               before: 2.8, after: 3.6, delta: '+60%' },
  { name: 'Self Confidence',               before: 3.0, after: 2.4, delta: '+23%' },
  { name: 'Planning and Execution',        before: 2.7, after: 3.4, delta: '+33%' },
  { name: 'Emotional Intelligence',        before: 3.0, after: 3.7, delta: '+24%' },
];

export function DataInsightsSection() {
  return (
    <section className="section section-py bg-off-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 lg:gap-24 items-center">

          {/* Left — photo + data card overlay */}
          <div className="relative">

            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=90&auto=format&fit=crop"
                alt="Leadership coaching session"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 640px"
                className="object-cover object-center"
                priority
              />
              {/* Subtle dark gradient at bottom so card floats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Data card overlay — bottom left */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 w-[88%] md:w-[82%] rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.97)',
                boxShadow: '0 16px 48px rgba(46,53,61,0.14), 0 2px 8px rgba(46,53,61,0.06)',
                border: '1px solid rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Card header */}
              <div className="px-5 pt-4 pb-3 border-b border-gray-100">
                <p className="label-text text-[9px] text-boon-blue mb-1">Aggregate Cohort Performance</p>
                <div className="flex items-center justify-between">
                  <h4 className="font-sans font-bold text-boon-charcoal text-base leading-tight">Competency Growth</h4>
                  <span
                    className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(108,216,147,0.15)', color: '#22a55a' }}
                  >
                    ✓ Verified
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">Q3–Q4 2023</p>
              </div>

              {/* Rows */}
              <div className="px-5 py-3 space-y-2.5">
                {/* Column headers */}
                <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  <span>Competency</span>
                  <span className="text-right">Before</span>
                  <span className="text-right">After</span>
                  <span className="text-right">Δ</span>
                </div>
                {competencies.map((c, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 items-center">
                    <span className="text-[10px] text-gray-500 font-medium truncate">{c.name}</span>
                    <span className="text-[10px] font-semibold text-gray-400 text-right tabular-nums">{c.before.toFixed(1)}</span>
                    <span className="text-[10px] font-semibold text-boon-charcoal text-right tabular-nums">{c.after.toFixed(1)}</span>
                    <div className="flex items-center gap-1.5 justify-end">
                      {/* Mini bar */}
                      <div className="w-10 h-1.5 rounded-full bg-gray-100 overflow-hidden hidden sm:block">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(100, parseFloat(c.delta) * 1.2)}%`,
                            background: 'linear-gradient(90deg, #466FF6, #FF8D80)',
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-boon-blue tabular-nums">{c.delta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="lg:pl-4">
            <p className="label-text text-[10px] text-boon-blue mb-8">
              Boon&apos;s Data and Insights
            </p>
            <h2 className="font-sans text-4xl md:text-6xl lg:text-[84px] font-bold text-boon-charcoal mb-10 tracking-tight leading-[0.9]">
              See what&apos;s actually{' '}
              <span className="font-serif italic text-boon-blue">changing</span>.
            </h2>
            <div className="space-y-6 max-w-md">
              <p className="text-base md:text-lg text-gray-500 font-body font-medium leading-relaxed">
                Leverage AI-powered insights to give your exec team the data they need to see development in action.
              </p>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-body font-bold text-boon-blue hover:gap-4 transition-all uppercase tracking-widest"
              >
                See how leadership signal compounds over time <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
