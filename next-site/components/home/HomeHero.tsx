'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export function HomeHero() {

  useEffect(() => {
    // Reveal observer only
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.25 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="pt-40 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Static background image — full width, natural proportions */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hp_hero_bg.png"
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

      <style jsx>{`
        .font-architectural {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1.05;
        }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-center relative" style={{ zIndex: 2 }}>
        <div>
          <h1 className="reveal stagger-1 font-architectural text-4xl md:text-6xl lg:text-[64px] text-boon-charcoal mb-12">
            The leadership development system you won&apos;t <span className="font-serif italic text-boon-blue">outgrow</span>.
          </h1>

          <p className="reveal stagger-2 text-base md:text-xl lg:text-2xl text-boon-charcoal font-body font-semibold leading-relaxed max-w-2xl mb-4">
            Coaching, manager development, and leadership programs in one system, built to scale as fast as you grow.
          </p>
          <p className="reveal stagger-2 text-sm md:text-lg text-boon-charcoal/80 font-body font-medium leading-relaxed max-w-2xl mb-16">
            Headcount just doubled. Managers are struggling. Teams feel lost. Boon scales with you through it all.
          </p>

          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-6">
            <Link
              href="/solutions"
              className="bg-boon-blue text-white px-8 py-4 rounded-xl font-sans font-bold text-base shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all text-center"
            >
              See how it works
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 rounded-xl font-sans font-bold text-base active:scale-95 transition-all text-center text-boon-charcoal" style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }} onMouseEnter={e => (e.currentTarget.style.background="rgba(255,255,255,0.75)")} onMouseLeave={e => (e.currentTarget.style.background="rgba(255,255,255,0.55)")}
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>

        <div className="reveal stagger-2 relative hidden lg:flex lg:justify-end lg:items-center">
          {/* Glow accents behind video */}
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

          {/* Video container */}
          <div className="w-full max-w-[392px] rounded-[20px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-gray-50 group z-10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            >
              <source
                src="https://storage.googleapis.com/boon-public-assets/Website%20Images/Boon_Website_Header_Revision_2.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-boon-navy/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
