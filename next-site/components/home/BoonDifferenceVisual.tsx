'use client';

import { useState } from 'react';
import { X, Check } from 'lucide-react';

const tabs = ['WITHOUT BOON', 'WITH BOON'] as const;
type Tab = typeof tabs[number];

const content = {
  'WITHOUT BOON': {
    heading: "Maria's fragmented journey",
    subheading: 'No development for years. Then suddenly, premium coaching with no foundation to build on.',
    bullets: [
      { icon: 'x', text: 'Generic, one-off trainings' },
      { icon: 'x', text: 'Not personalized' },
      { icon: 'x', text: 'Nothing to build on' },
    ],
    image: '/without-boon.jpg',
    fallbackGradient: 'from-gray-100 to-gray-200',
    timeline: [
      { year: '2021', role: 'IC', event: 'Onboarding webinar', color: '#CBD5E1' },
      { year: '2023', role: 'Manager', event: 'Leadership 101 workshop', color: '#CBD5E1' },
      { year: '2025', role: 'VP', event: 'Executive Coach', color: '#C47ACC' },
    ],
  },
  'WITH BOON': {
    heading: "Maria's continuous journey",
    subheading: 'Scaffolded development from day one. Each stage builds on the last.',
    bullets: [
      { icon: 'check', text: 'Development from day one' },
      { icon: 'check', text: 'Growth compounds over time' },
      { icon: 'check', text: 'Context carries forward' },
    ],
    image: '/with-boon.jpg',
    fallbackGradient: 'from-boon-light-blue to-boon-soft-coral/30',
    timeline: [
      { year: '2021', role: 'IC', event: 'Boon SCALE', color: '#466FF6' },
      { year: '2023', role: 'Manager', event: 'Boon GROW', color: '#FF6D6A' },
      { year: '2025', role: 'VP', event: 'Boon EXEC', color: '#C47ACC' },
    ],
  },
} as const;

export function BoonDifferenceVisual() {
  const [active, setActive] = useState<Tab>('WITHOUT BOON');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const c = content[active];
  const isWithBoon = active === 'WITH BOON';

  return (
    <div className="w-full max-w-5xl mx-auto">

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-8 py-3 text-xs font-body font-extrabold tracking-widest transition-all duration-200 border-b-2 -mb-px ${
                active === tab
                  ? 'border-boon-blue text-boon-charcoal'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left — text content */}
        <div>
          <h3 className={`text-2xl font-sans font-bold mb-4 ${isWithBoon ? 'text-boon-blue' : 'text-boon-charcoal'}`}>
            {c.heading}
          </h3>
          <p className="text-base font-body text-slate-500 mb-8 leading-relaxed">
            {c.subheading}
          </p>
          <ul className="space-y-4">
            {c.bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                {b.icon === 'x' ? (
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-boon-coral" strokeWidth={3} />
                  </span>
                ) : (
                  <span className="w-5 h-5 rounded-full bg-boon-blue/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-boon-blue" strokeWidth={3} />
                  </span>
                )}
                <span className="text-sm font-body text-slate-600 font-medium">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — image with timeline overlay */}
        <div className="relative pt-16">
          {/* Photo */}
          <div className={`rounded-[24px] overflow-hidden aspect-[4/3] bg-gradient-to-br ${c.fallbackGradient} relative`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image}
              alt={c.heading}
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Timeline overlay — overlaps only ~20% of image, extends right */}
          <div
            className="absolute"
            style={{
              top: '0px',
              right: '-200px',
              width: 400,
              borderRadius: 28,
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.20) 100%)',
              backgroundColor: 'rgba(255,255,255,0.15)',
              boxShadow: '0 18px 40px rgba(10,10,10,0.15)',
              padding: 18,
              zIndex: 10,
            }}
          >
            <div style={{ borderRadius: 22, padding: 10 }}>
              <div className="flex flex-col gap-5">
                {c.timeline.map((item, i) => {
                  const isLast = i === c.timeline.length - 1;
                  const isLilac = isLast && active === 'WITHOUT BOON';

                  const isHovered = hoveredCard === i;
                  const isDimmed = hoveredCard !== null && !isHovered;

                  return (
                    <div key={i} className="relative"
                      onMouseEnter={() => setHoveredCard(i)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Row card */}
                      <div
                        className="flex items-center gap-4"
                        style={{
                          background: isHovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.95)',
                          borderRadius: 22,
                          padding: '14px 16px',
                          boxShadow: isHovered
                            ? '0 16px 36px rgba(10,10,10,0.18)'
                            : '0 10px 22px rgba(10,10,10,0.10)',
                          border: isHovered
                            ? '1px solid rgba(70,111,246,0.3)'
                            : '1px solid rgba(0,0,0,0.04)',
                          opacity: isDimmed ? 0.45 : 1,
                          transform: isHovered ? 'scale(1.03) translateX(-4px)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {/* Year / Role label */}
                        <div
                          className="flex flex-col items-center"
                          style={{ width: 48, color: '#8C8F97', fontSize: 11, lineHeight: 1.1, fontWeight: 600 }}
                        >
                          <span>{item.year}</span>
                          <span style={{ marginTop: 3 }}>{item.role}</span>
                        </div>

                        {/* Dot */}
                        <div style={{ position: 'relative', width: 18, display: 'flex', justifyContent: 'center' }}>
                          <div
                            style={{
                              width: 14,
                              height: 14,
                              borderRadius: 999,
                              background: isHovered ? '#466FF6' : '#7C7F88',
                              boxShadow: isHovered ? '0 0 0 4px rgba(70,111,246,0.15)' : '0 2px 6px rgba(0,0,0,0.15)',
                              flexShrink: 0,
                              transition: 'all 0.2s ease',
                            }}
                          />
                        </div>

                        {/* Pill */}
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              borderRadius: 999,
                              padding: '9px 14px',
                              background: isLilac ? 'rgba(239,217,255,0.65)' : '#EEF0F3',
                              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.65)',
                              textAlign: 'center',
                            }}
                          >
                            <span
                              style={{
                                fontSize: 13,
                                fontWeight: 700,
                                color: isLilac ? '#B06AF2' : '#8A8F98',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {item.event}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Dashed connector between cards */}
                      {!isLast && (
                        <div
                          style={{
                            position: 'absolute',
                            left: 48 + 16 + 9, // label width + gap + dot center
                            top: '100%',
                            width: 2,
                            height: 22,
                            backgroundImage: 'repeating-linear-gradient(to bottom, rgba(124,127,136,0.55) 0 4px, rgba(124,127,136,0) 4px 9px)',
                            borderRadius: 999,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
