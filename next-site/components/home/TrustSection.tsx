'use client';

import Image from 'next/image';

const LOGOS: Array<{ src: string; name: string }> = [
  { src: 'https://storage.googleapis.com/boon-public-assets/blue%20owl.png', name: 'Blue Owl Capital' },
  { src: 'https://storage.googleapis.com/boon-public-assets/circle.png', name: 'Circle' },
  { src: 'https://storage.googleapis.com/boon-public-assets/The_Wonderful_Company_Logo.jpg', name: 'The Wonderful Company' },
  { src: 'https://storage.googleapis.com/boon-public-assets/consensys.png', name: 'Consensys' },
  { src: 'https://storage.googleapis.com/boon-public-assets/taftlogo.png', name: 'Taft Law' },
  { src: 'https://storage.googleapis.com/boon-public-assets/nuvei.png', name: 'Nuvei' },
  { src: 'https://storage.googleapis.com/boon-public-assets/72.png', name: '72andSunny' },
  { src: 'https://storage.googleapis.com/boon-public-assets/m3.png', name: 'M3 Insurance' },
  { src: 'https://storage.googleapis.com/boon-public-assets/doner.png', name: 'Doner' },
];

export function TrustSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-12 text-center">
          Trusted by teams building leaders at scale
        </p>
        <div className="relative overflow-hidden py-4">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {/* Three copies — translateX(-33.333%) resets seamlessly to the start */}
            {[0, 1, 2].map((copy) => (
              <div key={copy} aria-hidden={copy > 0 ? true : undefined} className="flex items-center gap-12 md:gap-24 shrink-0 pr-12 md:pr-24">
                {LOGOS.map((logo, idx) => (
                  <div key={idx} className="flex-shrink-0 w-28 h-10 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={120}
                      height={40}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
