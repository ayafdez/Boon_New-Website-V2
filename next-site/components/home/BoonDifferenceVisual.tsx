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
      { year: '2021', role: 'IC', event: 'Onboarding webinar' },
      { year: '2023', role: 'Manager', event: 'Leadership 101 workshop' },
      { year: '2025', role: 'VP', event: 'Executive Coach', isLilac: true },
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
    fallbackGradient: 'from-blue-50 to-blue-100',
    timeline: [
      { year: '2021', role: 'IC', event: 'Boon SCALE', tone: 'blue', description: 'Builds Self-Awareness' },
      { year: '2023', role: 'Manager', event: 'Boon GROW', tone: 'red', description: 'Applies IC Insights To Leadership' },
      { year: '2025', role: 'VP', event: 'Boon EXEC', tone: 'purple', description: 'Accelerates With Strong Foundation' },
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
              onClick={() => { setActive(tab); setHoveredCard(null); }}
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

        {/* Left */}
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

        {/* Right — image + overlay */}
        <div className="relative pt-32">

          <div className={`rounded-[24px] overflow-hidden aspect-[4/3] bg-gradient-to-br ${c.fallbackGradient} relative`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt={c.heading} className="w-full h-full object-cover absolute inset-0" />
          </div>

          {/* WITHOUT BOON overlay */}
          {!isWithBoon && (
            <div className="absolute" style={{
              top: 40, right: -200, width: 400, zIndex: 10,
              borderRadius: 28, padding: 18,
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.20) 100%)',
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}>
              <div style={{ borderRadius: 22, padding: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {c.timeline.map((item: any, i) => {
                    const isLast = i === c.timeline.length - 1;
                    const isHovered = hoveredCard === i;
                    const isDimmed = hoveredCard !== null && !isHovered;
                    return (
                      <div key={i} style={{ position: 'relative', cursor: 'pointer' }}
                        onMouseEnter={() => setHoveredCard(i)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div style={{
                          display: 'flex', alignItems: 'center', gap: 16,
                          borderRadius: 22, padding: '14px 16px',
                          background: isHovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.95)',
                          boxShadow: isHovered ? '0 16px 36px rgba(10,10,10,0.18)' : '0 10px 22px rgba(10,10,10,0.10)',
                          border: isHovered ? '1px solid rgba(70,111,246,0.3)' : '1px solid rgba(0,0,0,0.04)',
                          opacity: isDimmed ? 0.45 : 1,
                          transform: isHovered ? 'scale(1.03) translateX(-4px)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                        }}>
                          <div style={{ width: 48, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#8C8F97', fontSize: 11, fontWeight: 600, lineHeight: 1.1 }}>
                            <span>{item.year}</span><span style={{ marginTop: 3 }}>{item.role}</span>
                          </div>
                          <div style={{ width: 18, flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                              width: 14, height: 14, borderRadius: 999, transition: 'all 0.2s ease',
                              background: isHovered ? '#466FF6' : '#7C7F88',
                              boxShadow: isHovered ? '0 0 0 4px rgba(70,111,246,0.15)' : '0 2px 6px rgba(0,0,0,0.15)',
                            }} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{
                              borderRadius: 999, padding: '9px 18px', textAlign: 'left',
                              background: item.isLilac ? 'rgba(239,217,255,0.65)' : '#EEF0F3',
                              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.65)',
                            }}>
                              <span style={{ fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', color: item.isLilac ? '#B06AF2' : '#8A8F98' }}>
                                {item.event}
                              </span>
                            </div>
                          </div>
                        </div>
                        {!isLast && (
                          <div style={{
                            position: 'absolute', top: '100%', left: 10 + 48 + 16 + 9,
                            width: 2, height: 20, borderRadius: 999,
                            backgroundImage: 'repeating-linear-gradient(to bottom, rgba(124,127,136,0.55) 0 4px, rgba(124,127,136,0) 4px 9px)',
                          }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* WITH BOON overlay */}
          {isWithBoon && (
            <div className="absolute" style={{
              top: 40, right: -200, width: 400, zIndex: 10,
              borderRadius: 35, padding: 18, overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(246,248,255,0) 0%, rgba(70,111,246,0.20) 100%)',
            }}>
              <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: 35, padding: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {c.timeline.map((item: any, i: number) => {
                    const isLast = i === c.timeline.length - 1;
                    const isHovered = hoveredCard === i;
                    const isDimmed = hoveredCard !== null && !isHovered;
                    const dotColor = item.tone === 'blue' ? '#466FF6' : item.tone === 'red' ? '#FF8D80' : '#D077D2';
                    const badgeBg = item.tone === 'blue' ? 'rgba(70,111,246,0.10)' : item.tone === 'red' ? 'rgba(255,141,128,0.15)' : 'rgba(208,119,210,0.12)';
                    const connectorGradient = i === 0
                      ? 'linear-gradient(180deg, #466FF6 0%, #FF8D80 100%)'
                      : 'linear-gradient(180deg, #FF8D80 0%, #D077D2 100%)';
                    return (
                      <div key={i}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 10, position: 'relative', cursor: 'pointer', opacity: isDimmed ? 0.45 : 1, transition: 'opacity 0.2s ease' }}
                        onMouseEnter={() => setHoveredCard(i)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Dot + connector */}
                        <div style={{ position: 'relative', width: 16, flexShrink: 0, display: 'flex', justifyContent: 'center', paddingTop: 3 }}>
                          <div style={{
                            width: 12, height: 12, borderRadius: 999,
                            background: dotColor, boxShadow: `0 4px 10px ${dotColor}55`,
                            position: 'relative', zIndex: 1,
                            transform: isHovered ? 'scale(1.35)' : 'scale(1)',
                            transition: 'transform 0.2s ease',
                          }} />
                          {!isLast && (
                            <div style={{
                              position: 'absolute', top: 15, left: '50%',
                              transform: 'translateX(-50%)',
                              width: 4, height: 70, borderRadius: 999,
                              background: connectorGradient,
                            }} />
                          )}
                        </div>

                        {/* Label */}
                        <div style={{ width: 52, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'rgba(85,92,115,0.75)', fontSize: 11, fontWeight: 600, lineHeight: 1.2, paddingTop: 2 }}>
                          <span>{item.year}</span><span style={{ marginTop: 3 }}>{item.role}</span>
                        </div>

                        {/* Badge + description */}
                        <div style={{ flexShrink: 0 }}>
                          <span style={{
                            display: 'inline-block',
                            fontSize: 12, fontWeight: 800, padding: '5px 12px',
                            borderRadius: 999, background: badgeBg, color: dotColor,
                            whiteSpace: 'nowrap',
                          }}>
                            {item.event}
                          </span>
                          {item.description && (
                            <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(80,88,112,0.80)', marginTop: 4, lineHeight: 1.4 }}>
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
