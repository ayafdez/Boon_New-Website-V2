'use client';

import Image from 'next/image';

const LOGOS = [
  'https://storage.googleapis.com/boon-public-assets/72andsunny.png',
  'https://storage.googleapis.com/boon-public-assets/doner.png',
  'https://storage.googleapis.com/boon-public-assets/censys.png',
  'https://storage.googleapis.com/boon-public-assets/consensys.png',
  'https://storage.googleapis.com/boon-public-assets/circle.png',
  'https://storage.googleapis.com/boon-public-assets/makeawish.png',
  'https://storage.googleapis.com/boon-public-assets/m3.png',
  'https://storage.googleapis.com/boon-public-assets/mastery.jpg',
  'https://storage.googleapis.com/boon-public-assets/heartland.png',
  'https://storage.googleapis.com/boon-public-assets/polen.png',
  'https://storage.googleapis.com/boon-public-assets/MAL.jpg',
  'https://storage.googleapis.com/boon-public-assets/usta.png',
  'https://storage.googleapis.com/boon-public-assets/nuvei.png',
  'https://storage.googleapis.com/boon-public-assets/vita.png',
  'https://storage.googleapis.com/boon-public-assets/mack.jpg',
];

export function TrustSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-12 text-center">
          Trusted by teams building leaders at scale
        </p>
        <div className="relative overflow-hidden group py-4">
          <div className="flex whitespace-nowrap animate-scroll">
            <div className="flex items-center gap-24 pr-24">
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo}
                  alt="Partner Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
