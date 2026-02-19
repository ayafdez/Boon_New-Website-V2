'use client';

import Image from 'next/image';

const LOGOS: Array<{ src: string; name: string }> = [
  { src: 'https://storage.googleapis.com/boon-public-assets/72andsunny.png', name: '72andSunny' },
  { src: 'https://storage.googleapis.com/boon-public-assets/doner.png', name: 'Doner' },
  { src: 'https://storage.googleapis.com/boon-public-assets/censys.png', name: 'Censys' },
  { src: 'https://storage.googleapis.com/boon-public-assets/consensys.png', name: 'Consensys' },
  { src: 'https://storage.googleapis.com/boon-public-assets/circle.png', name: 'Circle' },
  { src: 'https://storage.googleapis.com/boon-public-assets/makeawish.png', name: 'Make-A-Wish' },
  { src: 'https://storage.googleapis.com/boon-public-assets/m3.png', name: 'M3 Insurance' },
  { src: 'https://storage.googleapis.com/boon-public-assets/mastery.jpg', name: 'Mastery Logistics' },
  { src: 'https://storage.googleapis.com/boon-public-assets/heartland.png', name: 'Heartland' },
  { src: 'https://storage.googleapis.com/boon-public-assets/polen.png', name: 'Polen Capital' },
  { src: 'https://storage.googleapis.com/boon-public-assets/MAL.jpg', name: 'MAL' },
  { src: 'https://storage.googleapis.com/boon-public-assets/usta.png', name: 'USTA' },
  { src: 'https://storage.googleapis.com/boon-public-assets/nuvei.png', name: 'Nuvei' },
  { src: 'https://storage.googleapis.com/boon-public-assets/vita.png', name: 'Vita Coco' },
  { src: 'https://storage.googleapis.com/boon-public-assets/mack.jpg', name: 'Mack Weldon' },
];

export function DemoTrustBar() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="label-text text-[10px] text-gray-300 mb-12 text-center">
          Trusted by teams building leaders at scale
        </p>
        <div className="relative overflow-hidden py-4">
          <div className="flex whitespace-nowrap animate-scroll">
            <div className="flex items-center gap-24 pr-24">
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo.src}
                  alt={`${logo.name} logo`}
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
