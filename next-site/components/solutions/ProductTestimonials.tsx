'use client';

import Image from 'next/image';

const LOGO_NAMES: Record<string, string> = {
  '72andsunny': '72andSunny',
  'doner': 'Doner',
  'censys': 'Censys',
  'consensys': 'Consensys',
  'circle': 'Circle',
  'makeawish': 'Make-A-Wish',
  'm3': 'M3 Insurance',
  'mastery': 'Mastery Logistics',
  'heartland': 'Heartland',
  'polen': 'Polen Capital',
  'MAL': 'MAL',
  'usta': 'USTA',
  'nuvei': 'Nuvei',
  'vita': 'Vita Coco',
  'mack': 'Mack Weldon',
};

function getLogoAlt(url: string): string {
  const filename = url.split('/').pop()?.split('.')[0] || '';
  return `${LOGO_NAMES[filename] || filename} logo`;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  bgColor?: string;
}

interface ProductTestimonialsProps {
  logos?: string[];
  testimonials: Testimonial[];
}

export function ProductTestimonials({ logos, testimonials }: ProductTestimonialsProps) {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {logos && logos.length > 0 && (
          <div className="text-center mb-16">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-12 text-center">
              Trusted by people-first organizations
            </p>
            <div className="relative overflow-hidden group py-4">
              <div className="flex whitespace-nowrap">
                <div className="flex items-center gap-20 animate-scroll pr-20">
                  {[...logos, ...logos].map((logo, idx) => (
                    <Image
                      key={idx}
                      src={logo}
                      width={80}
                      height={44}
                      alt={getLogoAlt(logo)}
                      className="h-10 md:h-11 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500 flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
              {/* Fade masks */}
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        )}

        <div className="text-center mb-12">
          <p className="label-text text-[10px] text-boon-blue mb-4">Testimonials</p>
          <div className="w-12 h-0.5 bg-boon-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => {
            const bgColors = ['bg-[#F4F7FF]', 'bg-gray-50', 'bg-[#FFF8F6]', 'bg-[#F8FAF4]', 'bg-[#FBF5E8]'];
            const avatarColors = ['#466FF6', '#FF8D80', '#C9A55C', '#4CD995', '#466FF6'];
            const isLastOdd = testimonials.length % 2 === 1 && idx === testimonials.length - 1;
            return (
              <div
                key={`${t.name}-${idx}`}
                className={`p-8 md:p-16 rounded-[32px] md:rounded-[60px] ${bgColors[idx % bgColors.length]} ${
                  isLastOdd ? 'md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto' : ''
                }`}
              >
                <p className="text-xl font-bold text-[#2E353D] leading-relaxed mb-12 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full"
                    style={{ backgroundColor: avatarColors[idx % avatarColors.length] }}
                  ></div>
                  <div>
                    <p className="text-sm font-black">{t.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
