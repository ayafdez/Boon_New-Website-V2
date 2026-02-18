'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export function HomeHero() {
  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-40 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">

      <style jsx>{`
        .font-architectural {
          font-family: 'DM Sans', sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.0;
        }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Background image from Figma */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/homepage_background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Subtle blue grid overlay — center-left area matching Figma */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(70, 111, 246, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 111, 246, 0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse 35% 60% at 42% 50%, black 0%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 35% 60% at 42% 50%, black 0%, transparent 100%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center relative z-10">
        {/* Left: Text content */}
        <div>
          <h1 className="reveal stagger-1 font-architectural text-6xl md:text-7xl lg:text-[80px] text-boon-navy mb-8">
            The leadership<br />
            development system<br />
            <span className="font-serif italic text-boon-blue">you won&apos;t outgrow.</span>
          </h1>

          <p className="reveal stagger-2 text-base md:text-lg text-boon-charcoal font-body leading-relaxed max-w-xl mb-10">
            Headcount just doubled. Managers are struggling. Teams feel lost.{' '}
            <strong className="font-bold">Boon scales with you through it all.</strong>
          </p>

          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-4">
            <Link
              href="/demo"
              className="bg-boon-blue text-white px-8 py-4 rounded-xl font-sans font-bold text-base hover:bg-boon-deep-blue transition-all shadow-lg shadow-boon-blue/25 active:scale-95 text-center"
            >
              Book Demo
            </Link>
            <Link
              href="/solutions"
              className="border border-gray-300 bg-white/60 backdrop-blur-sm text-boon-charcoal px-8 py-4 rounded-xl font-sans font-bold text-base hover:bg-white transition-all active:scale-95 text-center"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* Right: Video — untouched */}
        <div className="reveal stagger-2 relative hidden lg:block">
          <div className="rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-gray-50 group z-10">
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
            <div className="absolute inset-0 bg-gradient-to-t from-boon-navy/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
