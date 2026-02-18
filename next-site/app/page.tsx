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
      <section className="py-12 px-6 md:px-12 lg:px-16 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[35px] py-20 px-8 md:px-16 text-center">
            {/* Background image */}
            <Image
              src="/cta_bg.png"
              alt=""
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
              aria-hidden="true"
            />
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-[1.05] tracking-tight mb-6">
                Built to help people and teams{' '}
                <span className="font-serif italic">actually grow.</span>
              </h2>
              <p className="text-base md:text-lg text-white/70 font-sans font-normal mb-10 leading-relaxed">
                Boon delivers leadership infrastructure designed around real human behavior.{' '}
                Ready for a better leadership system? Get in touch today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/demo"
                  className="bg-[#FF6D6A] text-white px-8 py-4 rounded-[15px] font-sans font-bold text-base hover:brightness-110 active:scale-95 transition-all"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  href="/solutions"
                  className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-[15px] font-sans font-bold text-base hover:bg-white/20 transition-all"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
