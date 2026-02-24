'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    title: 'Personalized From Day One',
    quote: "One of the things that set Boon apart was how personalized their match process was. Boon was one of the only solutions that truly combined personal and professional development.",
    name: 'Alicia Kiser',
    position: 'EVP of Human Resources',
    company: 'M3 Insurance',
    headshot: 'https://storage.googleapis.com/boon-public-assets/alicia.jpeg',
    highlight: 'Truly personalized match',
  },
  {
    title: 'More Than Productivity',
    quote: "What surprised me most was how coaching connected the dots between personal well-being and professional performance. Employees were not just more productive. They were more present, more collaborative, and more invested in our mission.",
    name: 'Lisa Sordilla',
    position: 'Chief People Officer',
    company: 'Energage',
    headshot: 'https://storage.googleapis.com/boon-public-assets/lisa%20s.jpeg',
    highlight: 'Well-being meets performance',
  },
];

export function SolutionsTestimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ background: 'rgb(240, 243, 247)' }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          {/* G2 badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.07)' }}>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current text-boon-blue" />
              ))}
            </div>
            <span className="text-xs font-body font-bold text-boon-charcoal">5.0 on G2</span>
          </div>

          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.9] text-boon-charcoal mb-4">
            What Our <span className="font-serif italic text-boon-blue">Clients Say</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-body font-medium max-w-xl mx-auto">
            Trusted by HR leaders building real cultures.
          </p>
        </div>

        {/* Featured testimonial card */}
        <div
          className="rounded-[20px] p-8 md:p-12 mb-10 text-center"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(255,255,255,0.9)',
            boxShadow: '0 4px 32px rgba(46,53,61,0.07)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-boon-blue" />
            ))}
          </div>

          {/* Title */}
          <h3 className="font-sans font-bold text-boon-charcoal text-xl md:text-2xl mb-4">
            {t.title}
          </h3>

          {/* Quote */}
          <p className="text-sm md:text-base font-body text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6">
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Highlight badge */}
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-body font-semibold text-boon-blue"
            style={{ background: 'rgba(70,111,246,0.08)', border: '1px solid rgba(70,111,246,0.15)' }}
          >
            {t.highlight}
          </span>
        </div>

        {/* Avatar row */}
        <div className="flex items-center justify-center gap-4">
          {testimonials.map((person, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-200 flex items-center gap-3"
              style={{ width: i === active ? 'auto' : 44, minWidth: i === active ? 220 : 44 }}
            >
              <div
                className="rounded-full overflow-hidden flex-shrink-0"
                style={{ width: i === active ? 52 : 44, height: i === active ? 52 : 44, opacity: i === active ? 1 : 0.4 }}
              >
                <Image
                  src={person.headshot}
                  alt={person.name}
                  width={104}
                  height={104}
                  quality={90}
                  className="w-full h-full object-cover"
                />
              </div>
              {i === active && (
                <div className="text-left">
                  <p className="text-sm font-sans font-bold text-boon-charcoal leading-tight">{person.name}</p>
                  <p className="text-xs font-body text-gray-500 leading-snug">{person.position}</p>
                  <p className="text-xs font-body text-gray-400 leading-snug">{person.company}</p>
                </div>
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
