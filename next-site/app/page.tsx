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
import { BlogTeaser } from '@/components/home/BlogTeaser';
import { ProblemCards } from '@/components/home/ProblemCards';

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
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-boon-navy relative overflow-hidden">
        {/* Dotted texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
          }}
        />
        {/* Coral glow */}
        <div
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-stretch">

          {/* Left — image */}
          <div className="relative rounded-3xl overflow-hidden h-full min-h-[500px] lg:min-h-[700px] self-start">
            <img
              src="/leadership development.png"
              alt="Leadership development challenge"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right — text + accordion */}
          <div className="flex flex-col justify-center">
            <p className="label-text text-[10px] text-boon-blue mb-6">The Problem</p>
            <h2 className="font-sans text-2xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[0.9] text-white mb-10">
              Leadership development fails <span className="font-serif italic text-boon-blue">for three predictable reasons.</span>
            </h2>
            <ProblemCards />
          </div>

        </div>
      </section>

      {/* THE SHIFT - System Solution */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-5xl mx-auto">
            <p className="label-text text-[10px] text-boon-blue mb-8">
              The Boon Difference
            </p>
            <h2 className="font-sans text-2xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[0.9] text-boon-charcoal mb-10">
              What if everyone got the development they needed, <span className="font-serif italic text-boon-blue">not just executives</span>?
            </h2>
            <p className="text-xl text-gray-500 font-body font-medium leading-relaxed max-w-3xl mx-auto">
              Continuous, personalized development from day one. Not generic workshops for years, then suddenly, premium coaching.
            </p>
          </div>
          <BoonDifferenceVisual />
        </div>
      </section>

      <SystemArchitectureSection />

      {/* Mid-page CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ background: 'rgb(240, 243, 247)' }}>
        <div className="max-w-7xl mx-auto">

          {/* Card */}
          <div
            className="relative overflow-hidden rounded-3xl px-10 md:px-16 py-12 md:py-14"
            style={{ background: 'linear-gradient(135deg, #1A253B 0%, #0F1A2E 100%)' }}
          >

            {/* Glow accents */}
            <div className="absolute top-0 right-0 w-[40%] h-[80%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(70,111,246,0.18) 0%, transparent 65%)', filter: 'blur(48px)' }} />
            <div className="absolute bottom-0 left-[30%] w-[30%] h-[60%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom, rgba(255,141,128,0.12) 0%, transparent 65%)', filter: 'blur(48px)' }} />

            {/* Horizontal layout */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">

              {/* Left — heading */}
              <div className="flex-shrink-0">
                <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                  Ready to see it<br />
                  <span className="font-serif italic font-normal text-white/80">in action?</span>
                </h3>
              </div>

              {/* Right — description + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-10">
                <p className="text-white/60 font-body font-medium leading-relaxed text-base max-w-xs">
                  See how Boon can replace your fragmented vendor stack with one unified leadership system.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 flex-shrink-0 bg-boon-coral hover:bg-boon-light-coral text-white px-7 py-3.5 rounded-xl font-sans font-bold text-base transition-all shadow-lg shadow-boon-coral/20 active:scale-95"
                >
                  Book a Strategy Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      <CoachSection />
      <LeadershipIntelligence />
      <TestimonialsSection />
      <BlogTeaser />

      {/* Final CTA */}
      <section className="py-24 md:py-48 px-6 text-center relative overflow-hidden" style={{ background: 'radial-gradient(rgb(68, 102, 221) 0%, rgb(51, 85, 204) 35%, rgb(31, 45, 93) 65%, #111827 100%)' }}>
        {/* Grid line pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Heading with inline avatars */}
          <h2 className="font-sans text-2xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[0.95] mb-8">
            {/* Line 1: "Built to help people" with avatars after */}
            <span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-2">
              <span>Built to help people</span>
              {/* Avatar cluster 1 */}
              <span className="inline-flex items-center">
                {[
                  'https://storage.googleapis.com/boon-public-assets/lisa%20s.jpeg',
                  'https://storage.googleapis.com/boon-public-assets/hamy.jpg',
                  'https://storage.googleapis.com/boon-public-assets/nick.png',
                ].map((src, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full overflow-hidden border-2 border-white/30"
                    style={{ width: 48, height: 48, marginLeft: i === 0 ? 0 : -12 }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </span>
                ))}
              </span>
            </span>
            {/* Line 2: "and teams" */}
            <span className="block mb-2">and teams</span>
            {/* Line 3: italic "actually grow." with avatars after */}
            <span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span className="font-serif italic font-normal">actually grow.</span>
              {/* Avatar cluster 2 */}
              <span className="inline-flex items-center">
                {[
                  'https://storage.googleapis.com/boon-public-assets/amykellylauer.jpg',
                  'https://storage.googleapis.com/boon-public-assets/Olga%20Volgin_New.png',
                ].map((src, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full overflow-hidden border-2 border-white/30"
                    style={{ width: 48, height: 48, marginLeft: i === 0 ? 0 : -12 }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </span>
                ))}
              </span>
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/60 font-body font-medium mb-12 max-w-lg mx-auto leading-relaxed">
            Boon delivers leadership infrastructure designed around real human behavior. Ready for a better leadership system? Get in touch today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo"
              className="bg-boon-coral text-white px-8 py-4 rounded-xl font-sans font-bold text-base shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/solutions"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-sans font-bold text-base hover:bg-white/15 transition-all"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
