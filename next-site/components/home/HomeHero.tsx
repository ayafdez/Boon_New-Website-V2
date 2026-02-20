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
    <section className="section pt-40 pb-32 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-boon-light-blue/30 via-white to-boon-soft-coral/15"></div>

      <style jsx>{`
        @keyframes float-coral {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes float-blue {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 15px) scale(0.95); }
          66% { transform: translate(15px, -25px) scale(1.05); }
        }
        .floating-coral {
          animation: float-coral 20s ease-in-out infinite;
        }
        .floating-blue {
          animation: float-blue 25s ease-in-out infinite;
        }
        .font-architectural {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 0.9;
        }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Animated floating gradient blob - Coral (top right) */}
      <div
        className="floating-coral absolute -top-[10%] -right-[10%] w-[50%] h-[70%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.4) 0%, rgba(255, 141, 128, 0.2) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      ></div>

      {/* Animated floating gradient blob - Blue (bottom left) */}
      <div
        className="floating-blue absolute -bottom-[15%] -left-[10%] w-[45%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.35) 0%, rgba(70, 111, 246, 0.15) 30%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      ></div>

      <div className="container-xl grid lg:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-24 items-center relative z-10">
        <div>
          <h1 className="reveal stagger-1 font-architectural text-4xl md:text-7xl lg:text-[115px] text-boon-charcoal mb-12">
            The leadership development system you won&apos;t <span className="font-serif italic text-boon-blue">outgrow</span>.
          </h1>

          <p className="reveal stagger-2 text-base md:text-xl lg:text-2xl text-boon-charcoal font-body font-semibold leading-relaxed max-w-2xl mb-4">
            Coaching, manager development, and leadership programs in one system, built to scale as fast as you grow.
          </p>
          <p className="reveal stagger-2 text-sm md:text-lg text-gray-400 font-body font-medium leading-relaxed max-w-2xl mb-16">
            Headcount just doubled. Managers are struggling. Teams feel lost. Boon scales with you through it all.
          </p>

          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-6">
            <Link
              href="/solutions"
              className="bg-boon-blue text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl font-sans font-bold text-lg md:text-xl hover:bg-boon-deep-blue transition-all shadow-2xl shadow-boon-blue/20 active:scale-95 text-center"
            >
              See how it works
            </Link>
            <Link
              href="/demo"
              className="border border-gray-200 text-boon-charcoal px-8 py-4 md:px-12 md:py-6 rounded-2xl font-sans font-bold text-lg md:text-xl hover:bg-boon-off-white transition-all active:scale-95 text-center"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>

        <div className="reveal stagger-2 relative hidden lg:block">
          {/* Organic gradient blob behind video - coral to blue accent */}
          <div className="absolute -inset-12 z-0 pointer-events-none">
            {/* Blue accent - top right */}
            <div
              className="absolute -top-8 -right-8 w-[350px] h-[300px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.5) 0%, rgba(70, 111, 246, 0.2) 40%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            ></div>
            {/* Coral accent - bottom left */}
            <div
              className="absolute -bottom-8 -left-8 w-[300px] h-[280px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.5) 0%, rgba(255, 141, 128, 0.25) 40%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            ></div>
            {/* Center blend */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[350px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(204, 217, 255, 0.4) 0%, rgba(255, 187, 187, 0.2) 50%, transparent 80%)',
                filter: 'blur(50px)',
              }}
            ></div>
          </div>

          <div className="rounded-[100px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-gray-50 border border-gray-100 group z-10">
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
