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
        <div className="relative">
          {/* Photo */}
          <div className={`rounded-[24px] overflow-hidden aspect-[4/3] bg-gradient-to-br ${c.fallbackGradient} relative`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image}
              alt={c.heading}
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Timeline cards overlay — top right */}
          <div className="absolute top-4 right-4 space-y-2 w-52">
            {c.timeline.map((item, i) => (
              <div
                key={i}
                className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg flex items-center gap-2.5"
              >
                <div className="text-right flex-shrink-0 min-w-[32px]">
                  <div className="text-[10px] font-body font-bold text-gray-400 leading-none">{item.year}</div>
                  <div className="text-[10px] font-body text-gray-400 leading-none mt-0.5">{item.role}</div>
                </div>
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div
                  className="text-xs font-body font-semibold"
                  style={{ color: item.color }}
                >
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
