'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    title: 'Boon is a Game Changer',
    quote: 'My coach helps me stay accountable and creates space for meaningful conversations around what matters most. As CPO, I\'m proud to offer Boon to our employees. It\'s consistently one of our most appreciated benefits.',
    name: 'Lisa S.',
    position: 'Chief People Officer',
    company: 'Energage',
    headshot: 'https://storage.googleapis.com/boon-public-assets/lisa%20s.jpeg',
    highlight: 'Most appreciated benefit',
  },
  {
    title: 'Truly Transformative',
    quote: 'I\'ve worked with my coach for almost two years and it\'s been truly transformative. Her thoughtful questions push me to reflect deeply and practice new ways of leading. Coaching has helped me discover insights that continue to shape both my professional and personal life.',
    name: 'HaMy V.',
    position: 'Chief Operating Officer',
    company: 'Teaching Lab',
    headshot: 'https://storage.googleapis.com/boon-public-assets/hamy.jpg',
    highlight: 'Deep, lasting impact',
  },
  {
    title: 'Seamless, Supportive, and Strategic',
    quote: 'Boon has quickly become a core pillar of our total rewards package. Support feels less like a vendor and more like a trusted thought partner. I\'ve built a strong partnership with my own coach through dozens of sessions that are consistently authentic, insightful, and transformative.',
    name: 'Nick D.',
    position: 'HR Director',
    company: 'OpenUp Resources',
    headshot: 'https://storage.googleapis.com/boon-public-assets/nick.png',
    highlight: 'Core to total rewards',
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(1);
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
            Don&apos;t just take <span className="font-serif italic text-boon-blue">our word</span> for it
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-body font-medium max-w-xl mx-auto">
            See what leaders are saying about their experience with Boon
          </p>
        </div>

        {/* Featured testimonial card */}
        <div
          className="rounded-2xl p-8 md:p-12 mb-10 text-center"
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
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-body font-semibold text-boon-blue" style={{ background: 'rgba(70,111,246,0.08)', border: '1px solid rgba(70,111,246,0.15)' }}>
            {t.highlight}
          </span>
        </div>

        {/* Avatar row — fixed-width slots keep active centered */}
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
