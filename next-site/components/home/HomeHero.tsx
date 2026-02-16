'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HomeHero() {
  const [scrollY, setScrollY] = useState(0);

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

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="pt-40 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#F0F3F7]">
      <style jsx>{`
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Parallax background image */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Image
          src="/homepage_background.png"
          alt=""
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-24 items-center relative z-10">
        <div>
          {/* Main page heading - H1 (only one per page) */}
          <h1 className="reveal stagger-1 font-sans text-6xl md:text-7xl lg:text-[90px] font-bold text-[#1a1a1a] mb-8 leading-[1.1]">
            The leadership development system <span className="font-serif italic text-[#5B7FFF]">you won't outgrow.</span>
          </h1>

          {/* Lead paragraph - standard text */}
          <p className="reveal stagger-2 text-lg md:text-xl text-[#4a4a4a] font-body font-medium leading-relaxed max-w-2xl mb-4">
            Headcount just doubled. Managers are struggling. Teams feel lost.
          </p>
          
          {/* Strong emphasis paragraph */}
          <p className="reveal stagger-2 text-lg md:text-xl text-[#1a1a1a] font-body font-bold leading-relaxed max-w-2xl mb-12">
            Boon scales with you through it all.
          </p>

          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-4">
            <Link
              href="/demo"
              className="bg-[#5B7FFF] text-white px-10 py-4 rounded-[15px] font-sans font-bold text-lg hover:bg-[#4a6eee] transition-all shadow-lg shadow-blue-200/50 active:scale-95 text-center"
            >
              Book Demo
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-[#5B7FFF] text-[#5B7FFF] px-10 py-4 rounded-[15px] font-sans font-bold text-lg hover:bg-[#5B7FFF]/5 transition-all active:scale-95 text-center"
            >
              How It Works
            </Link>
          </div>
        </div>

        <div className="reveal stagger-2 relative hidden lg:block">
          {/* Container with 35px radius */}
          <div className="rounded-[35px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-white border border-gray-200 z-10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://storage.googleapis.com/boon-public-assets/Website%20Images/Boon_Website_Header_Revision_2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
