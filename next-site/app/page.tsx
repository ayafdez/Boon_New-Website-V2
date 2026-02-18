import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeProblem } from '@/components/home/HomeProblem';
import { HomeShift } from '@/components/home/HomeShift';
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

      <HomeShift />

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
