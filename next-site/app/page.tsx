import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
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

      {/* THE TRUTH - Three Failure Modes */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-boon-navy relative overflow-hidden">
        {/* Dotted texture overlay - fading from right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
          }}
        ></div>

        {/* Soft coral gradient glow from bottom-left */}
        <div
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.2) 0%, rgba(255, 141, 128, 0.1) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="label-text text-[10px] text-gray-500 mb-8">
            The Problem
          </p>
          <h2 className="font-sans text-5xl md:text-7xl lg:text-[84px] font-bold tracking-tight leading-[0.9] text-white mb-20 max-w-5xl">
            Leadership development fails for <span className="font-serif italic text-boon-coral">three predictable reasons</span>.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Fragmented */}
            <div className="group bg-boon-charcoal rounded-3xl p-10 border border-gray-700/50 hover:border-boon-coral/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-boon-coral/20 text-boon-coral flex items-center justify-center text-xs font-bold font-body">01</span>
                <span className="label-text text-[10px] text-boon-coral">Fragmented</span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                You&apos;re managing four vendors for one job.
              </h3>
              <p className="text-gray-500 font-body font-medium mb-6">
                No one owns the system.
              </p>
              <div className="border-t border-gray-700/50 pt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">
                  Organizations stitch together coaching, training, assessments, and wellbeing tools. None of them talk to each other. Progress stalls because responsibility is diffused.
                </p>
                <p className="text-gray-500 text-sm font-serif italic">
                  &quot;We have five vendors and still can&apos;t tell you what&apos;s working.&quot;
                </p>
              </div>
            </div>

            {/* Card 2: Lopsided */}
            <div className="group bg-boon-charcoal rounded-3xl p-10 border border-gray-700/50 hover:border-boon-coral/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-boon-coral/20 text-boon-coral flex items-center justify-center text-xs font-bold font-body">02</span>
                <span className="label-text text-[10px] text-boon-coral">Lopsided</span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                Executives get coaching. Everyone else gets a workshop and a prayer.
              </h3>
              <p className="text-gray-500 font-body font-medium mb-6">
                The middle is carrying the load.
              </p>
              <div className="border-t border-gray-700/50 pt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">
                  Most solutions are designed for a handful of senior leaders. Managers and emerging leaders, the people actually running the business, get generic training or nothing at all. The result is burnout, inconsistency, and quiet failure in the middle.
                </p>
                <p className="text-gray-500 text-sm font-serif italic">
                  &quot;Our top 5% gets coaching. The other 95% gets a workshop link.&quot;
                </p>
              </div>
            </div>

            {/* Card 3: Invisible */}
            <div className="group bg-boon-charcoal rounded-3xl p-10 border border-gray-700/50 hover:border-boon-coral/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-boon-coral/20 text-boon-coral flex items-center justify-center text-xs font-bold font-body">03</span>
                <span className="label-text text-[10px] text-boon-coral">Invisible</span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                Your CEO asks what&apos;s changing. You don&apos;t have an answer.
              </h3>
              <p className="text-gray-500 font-body font-medium mb-6">
                Impact becomes guesswork.
              </p>
              <div className="border-t border-gray-700/50 pt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">
                  HR leaders are asked to defend spend without real insight into behavior change, adoption, or momentum. Data lives in silos. Outcomes are inferred, not observed.
                </p>
                <p className="text-gray-500 text-sm font-serif italic">
                  &quot;The board wants ROI. I have engagement scores.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="bg-boon-off-white rounded-3xl p-10 border border-gray-100">
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
              className="bg-boon-coral text-white px-16 py-8 rounded-full font-sans font-bold text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/solutions"
              className="bg-white/5 border border-white/10 text-white px-16 py-8 rounded-full font-sans font-bold text-2xl hover:bg-white/10 transition-all"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
