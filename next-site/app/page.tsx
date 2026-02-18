import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeProblem } from '@/components/home/HomeProblem';
import { TrustSection } from '@/components/home/TrustSection';
import { SystemArchitectureSection } from '@/components/home/SystemArchitectureSection';
import { CoachSection } from '@/components/home/CoachSection';
import { LeadershipIntelligence } from '@/components/home/LeadershipIntelligence';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon | The Unified Leadership System',
  description:
    'Boon provides scalable, human-centered leadership development through expert coaching. Transform your organization with our unified leadership system.',
  path: '/',
});

export default function HomePage() {
  return (
    <main className="bg-white">
      <HomeHero />
      <TrustSection />

      <HomeProblem />

      {/* THE SHIFT - System Solution */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="label-text text-[10px] text-boon-blue mb-8">
              The Boon Difference
            </p>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] text-boon-charcoal mb-10">
              What if leadership development worked like a cohesive, <span className="font-serif italic text-boon-blue">customized system</span>?
            </h2>
            <p className="text-xl text-gray-500 font-body font-medium mb-10 leading-relaxed">
              One streamlined solution that replaces the patchwork—coaching, cohorts, and team development, all connected.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-boon-blue mt-2.5"></div>
                <span className="text-lg font-body font-semibold text-boon-charcoal">One partner aligned to your culture, across every level</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-boon-blue mt-2.5"></div>
                <span className="text-lg font-body font-semibold text-boon-charcoal">Visibility into what&apos;s changing, without surveillance or guesswork</span>
              </li>
            </ul>
          </div>

          {/* Visual Diagram */}
          <div className="bg-boon-off-white rounded-[35px] p-10 border border-gray-100">
            {/* Before/After */}
            <div className="grid grid-cols-2 gap-8 mb-10 pb-10 border-b border-gray-200">
              <div>
                <p className="label-text text-[10px] text-gray-400 mb-4">Before</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-body text-gray-400">Vendor</span>
                    <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-body text-gray-400">Vendor</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-body text-gray-400">Vendor</span>
                    <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-body text-gray-400">Vendor</span>
                  </div>
                </div>
                <p className="text-xs font-body text-gray-400 mt-3">Too many. Zero integration.</p>
              </div>
              <div>
                <p className="label-text text-[10px] text-gray-400 mb-4">After</p>
                <div className="w-24 h-24 bg-boon-charcoal rounded-2xl flex items-center justify-center">
                  <span className="text-white font-sans font-bold text-lg">Boon</span>
                </div>
              </div>
            </div>

            {/* Coverage Levels */}
            <div>
              <p className="label-text text-[10px] text-gray-400 mb-6 text-center">
                Coverage Across Every Level
              </p>
              <div className="flex items-center justify-between">
                {[
                  { label: 'IC', size: 'w-10 h-10' },
                  { label: 'Manager', size: 'w-12 h-12' },
                  { label: 'Director', size: 'w-14 h-14' },
                  { label: 'VP', size: 'w-16 h-16' },
                  { label: 'Exec', size: 'w-20 h-20', highlight: true },
                ].map((level, idx, arr) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`${level.size} rounded-full ${level.highlight ? 'bg-boon-blue' : 'bg-boon-blue/20'} flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full ${level.highlight ? 'bg-white' : 'bg-boon-blue'}`}></div>
                      </div>
                      <span className="text-[10px] font-body font-bold text-gray-400">{level.label}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="w-6 md:w-10 h-[2px] bg-gray-200 mx-1 mb-5"></div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs font-body text-gray-500 mt-6 text-center">Same system. Same coaches. Continuous thread.</p>
            </div>
          </div>
        </div>
      </section>

      <SystemArchitectureSection />
      <CoachSection />
      <LeadershipIntelligence />

      {/* Final CTA */}
      <section className="py-64 bg-boon-navy px-6 text-center relative overflow-hidden">
        {/* Overlapping gradient blobs */}
        <div
          className="absolute top-[10%] right-[5%] w-[40%] h-[50%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.3) 0%, rgba(70, 111, 246, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        ></div>
        <div
          className="absolute bottom-[10%] left-[10%] w-[45%] h-[55%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.25) 0%, rgba(255, 141, 128, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        ></div>

        {/* Subtle grid line pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-sans text-6xl md:text-[110px] font-bold text-white mb-8 tracking-tight leading-[0.9]">
            Built to help people and teams <br /> <span className="font-serif italic text-boon-blue">actually grow</span>.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-body font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
            Boon delivers leadership infrastructure designed around real human behavior. Ready for a better leadership system? Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/demo"
              className="bg-boon-coral text-white px-8 py-4 rounded-[15px] font-sans font-bold text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/solutions"
              className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-[15px] font-sans font-bold text-2xl hover:bg-white/10 transition-all"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
