import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateServiceJsonLd, siteUrl } from '@/lib/seo';
import { SystemArchitect } from '@/components/solutions/SystemArchitect';
import { PlatformShowcase } from '@/components/solutions/PlatformShowcase';
import { AccordionSection } from '@/components/solutions/AccordionSection';
import { GlobalCTA } from '@/components/layout/GlobalCTA';
import { SolutionsProblemCards } from '@/components/solutions/SolutionsProblemCards';

export const metadata: Metadata = generatePageMetadata({
  title: 'Solutions - Coaching & Leadership Development',
  description:
    'Boon is a unified talent development system. Coaching, leadership development, and executive support designed around where growth pressure shows up.',
  path: '/solutions',
});


export default function SolutionsPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon Leadership Development System',
    description: 'Unified talent development system with coaching, leadership development, and executive support.',
    url: `${siteUrl}/solutions`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-40 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">

          {/* Background image — matches homepage pattern */}
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sp_hero_bg.png"
              alt=""
              fetchPriority="high"
              decoding="async"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'fill',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-center relative" style={{ zIndex: 2 }}>

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-boon-light-blue/50 text-boon-blue label-text text-[10px] px-4 py-2 rounded-full mb-10 border border-boon-light-blue">
                How Boon Works
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[0.9] text-boon-charcoal mb-10 max-w-xl">
                One system. Configured to solve your <span className="font-serif italic text-boon-blue">problems</span>.
              </h1>
              <p className="text-base md:text-lg text-boon-charcoal font-body font-semibold leading-relaxed max-w-xl mb-4">
                Coaching, manager development, and leadership programs in one system — built to scale as fast as you grow.
              </p>
              <p className="text-sm md:text-base text-boon-charcoal/80 font-body font-medium leading-relaxed max-w-xl mb-16">
                Start by fixing what&apos;s broken today, then adapt to solve new problems tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/demo"
                  className="bg-boon-blue text-white px-8 py-4 rounded-xl font-sans font-bold text-base shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all text-center"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  href="#system"
                  className="px-8 py-4 rounded-xl font-sans font-bold text-base active:scale-95 transition-all text-center text-boon-charcoal"
                  style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  See the system
                </Link>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative hidden lg:flex lg:justify-end lg:items-center">
              {/* Glow accents */}
              <div className="absolute -inset-12 z-0 pointer-events-none">
                <div
                  className="absolute -top-8 -right-8 w-[350px] h-[300px]"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.4) 0%, rgba(70, 111, 246, 0.15) 40%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                ></div>
                <div
                  className="absolute -bottom-8 -left-8 w-[300px] h-[280px]"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.4) 0%, rgba(255, 141, 128, 0.2) 40%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                ></div>
              </div>

              {/* Image container */}
              <div className="w-full max-w-[392px] rounded-[20px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-gray-50 z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero bg solutions page.png"
                  alt="Boon platform solutions overview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-boon-navy/20 to-transparent"></div>
              </div>
            </div>

          </div>
        </section>

        {/* 1. Problem Statement */}
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
            <div className="relative rounded-[20px] overflow-hidden h-full min-h-[500px] lg:min-h-[700px] self-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sp_fragmentsupport.png"
                alt="Fragmented leadership support"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right — text + cards */}
            <div className="flex flex-col justify-center">
              <p className="label-text text-[10px] text-boon-blue mb-6">The Problem</p>
              <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.9] text-white mb-10">
                Fragmented support is <span className="font-serif italic text-boon-blue">no support at all.</span>
              </h2>
              <SolutionsProblemCards />
            </div>

          </div>
        </section>

        {/* 2. System Architecture */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <SystemArchitect />
          </div>
        </section>

        {/* 3. Platform in Action */}
        <PlatformShowcase />

        {/* 4. How The System Evolves Over Time */}
        <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-boon-off-white/50 via-white to-white"></div>
          <div className="relative z-10">
            <AccordionSection />
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-boon-off-white via-white to-boon-light-blue/20"></div>

          {/* Decorative gradient blob */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-boon-soft-coral/20 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
            <p className="label-text text-[10px] text-boon-blue mb-6">
              Getting Started
            </p>
            <h2 className="font-sans font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9]">
              What to expect <span className="font-serif italic text-boon-blue">next</span>.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                num: '01',
                title: 'Book a Demo',
                desc: 'Tell us about your team and where you want to see change. We\'ll walk you through the system and show how companies like yours use Boon.',
              },
              {
                num: '02',
                title: 'Get a Quote',
                desc: 'We\'ll build a custom proposal based on your goals, team size, and timeline. No templated packages, just what you need.',
              },
              {
                num: '03',
                title: 'See Results',
                desc: 'Once live, you\'ll see engagement data and growth signals within weeks. We partner with you to iterate and expand as impact compounds.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-[20px] border border-gray-100 text-left transition-all duration-300 hover:border-boon-blue/30 hover:shadow-lg hover:-translate-y-1 cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-boon-blue/10 flex items-center justify-center mb-6">
                  <span className="label-text text-[10px] text-boon-blue">{step.num}</span>
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-bold text-boon-charcoal mb-3">{step.title}</h3>
                <p className="text-base font-body font-medium text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <GlobalCTA />
      </main>
    </>
  );
}
