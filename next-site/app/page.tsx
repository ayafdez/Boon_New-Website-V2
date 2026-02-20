import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
import { TrustSection } from '@/components/home/TrustSection';
import { BoonDifferenceVisual } from '@/components/home/BoonDifferenceVisual';
import { SystemArchitectureSection } from '@/components/home/SystemArchitectureSection';
import { CoachSection } from '@/components/home/CoachSection';
import { LeadershipIntelligence } from '@/components/home/LeadershipIntelligence';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon | The Unified Leadership System',
  description:
    'Boon provides scalable, human-centered leadership development through expert coaching. Transform your organization with our unified leadership system.',
  path: '/',
  ogTitle: 'Boon - The Unified Leadership System',
  ogDescription: 'One system for coaching, leadership development, and executive support. Scalable, human-centered, and built to grow with your organization.',
});

export default function HomePage() {
  return (
    <div className="bg-white">
      <HomeHero />
      <TrustSection />

      {/* THE TRUTH - Three Failure Modes */}
      <section className="section section-py bg-boon-navy relative overflow-hidden">
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

        <div className="container-xl relative z-10">
          <p className="label-text text-[10px] text-gray-500 mb-8">
            The Problem
          </p>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-[84px] font-bold tracking-tight leading-[0.9] text-white mb-20 max-w-5xl">
            Leadership development fails for <span className="font-serif italic text-boon-coral">three predictable reasons</span>.
          </h2>

          <div className="grid-3col">
            {/* Card 1: Fragmented */}
            <div className="group bg-boon-charcoal rounded-3xl p-6 md:p-10 border border-gray-700/50 hover:border-boon-coral/30 transition-all duration-300">
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
            <div className="group bg-boon-charcoal rounded-3xl p-6 md:p-10 border border-gray-700/50 hover:border-boon-coral/30 transition-all duration-300">
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
            <div className="group bg-boon-charcoal rounded-3xl p-6 md:p-10 border border-gray-700/50 hover:border-boon-coral/30 transition-all duration-300">
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
      <section className="section section-py bg-white">
        <div className="container-xl">
          <div className="section-header mb-16">
            <p className="label-text text-[10px] text-boon-blue mb-8">
              The Boon Difference
            </p>
            <h2 className="font-sans text-4xl md:text-6xl lg:text-[84px] font-bold tracking-tight leading-[0.95] md:leading-[0.9] text-boon-charcoal mb-10">
              What if everyone got the development they needed, <span className="font-serif italic text-boon-blue">not just executives</span>?
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-body font-medium leading-relaxed max-w-3xl mx-auto">
              Continuous, personalized development from day one. Not generic workshops for years, then suddenly, premium coaching.
            </p>
          </div>
          <BoonDifferenceVisual />
        </div>
      </section>

      <SystemArchitectureSection />

      {/* Mid-page CTA */}
      <section className="section section-py-sm bg-gradient-to-b from-boon-navy/90 to-boon-navy text-center relative overflow-hidden">
        {/* Subtle gradient accents */}
        <div
          className="absolute top-0 right-0 w-[40%] h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[35%] h-[50%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>

        <div className="container-md relative z-10">
          <h3 className="font-sans text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to see it in action?
            </h3>
          <p className="text-base md:text-lg text-white/60 font-body font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            See how Boon can replace your fragmented vendor stack with one unified leadership system.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center bg-boon-coral text-white px-8 py-4 rounded-xl font-sans font-bold text-lg hover:bg-boon-light-coral transition-all shadow-lg shadow-boon-coral/20 active:scale-95"
          >
            Book a Strategy Call
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <CoachSection />
      <LeadershipIntelligence />
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="section section-py bg-boon-navy text-center relative overflow-hidden">
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

        <div className="container-md relative z-10">
          <h2 className="font-sans text-4xl md:text-6xl lg:text-[84px] font-bold text-white mb-8 tracking-tight leading-tight lg:leading-[0.9]">
            Built to help people and teams <br /> <span className="font-serif italic text-boon-blue">actually grow</span>.
          </h2>
          <p className="text-base md:text-lg text-white/60 font-body font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
            Boon delivers leadership infrastructure designed around real human behavior. Ready for a better leadership system? Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/demo"
              className="bg-boon-coral text-white px-8 py-4 md:px-16 md:py-8 rounded-full font-sans font-bold text-lg md:text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/solutions"
              className="bg-white/5 border border-white/10 text-white px-8 py-4 md:px-16 md:py-8 rounded-full font-sans font-bold text-lg md:text-2xl hover:bg-white/10 transition-all"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
