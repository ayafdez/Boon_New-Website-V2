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
        <div className="relative overflow-hidden group py-4">
          <div className="flex animate-scroll">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-12 md:gap-24 shrink-0 pr-12 md:pr-24">
                {LOGOS.map((logo, idx) => (
                  <div key={idx} className="flex-shrink-0 w-28 h-10 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={120}
                      height={40}
                      className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
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
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
