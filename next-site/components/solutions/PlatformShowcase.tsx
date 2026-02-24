'use client';

import { useState } from 'react';

type TabId = 'employee' | 'manager' | 'hr';

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#466FF6" fillOpacity="0.12" />
      <path d="M6.5 10.5l2 2 5-5" stroke="#466FF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TAB_DATA: Record<TabId, {
  badge: string;
  badgeColor: string;
  question: string;
  headline: string;
  features: string[];
  image: string;
}> = {
  employee: {
    badge: "What's in it for me?",
    badgeColor: 'bg-boon-light-blue/50 text-boon-blue border border-boon-light-blue',
    question: "What's in it for me?",
    headline: 'Your personal coaching journey, all in one place',
    features: [
      'Set development goals tied to your actual role, not generic competencies',
      'Coach matching, session reminders, and action items delivered in Slack or Teams',
      'Book sessions when you need them, not when HR schedules them',
    ],
    image: '/sp_employee.png',
  },
  manager: {
    badge: 'How is my team developing?',
    badgeColor: 'bg-boon-light-blue/50 text-boon-blue border border-boon-light-blue',
    question: 'How is my team developing?',
    headline: 'Team development visibility without invading privacy',
    features: [
      "See who's engaged, who's growing, and where your team needs support",
      'Competency scores benchmarked against pre/post assessments',
      'Session content stays between coach and employee. You see progress, not conversations.',
    ],
    image: '/sp_manager.png',
  },
  hr: {
    badge: "What's the ROI?",
    badgeColor: 'bg-boon-light-blue/50 text-boon-blue border border-boon-light-blue',
    question: "What's the ROI?",
    headline: 'The reporting your CFO will actually believe',
    features: [
      'See what your workforce is actually working on with AI-powered coaching theme analysis',
      'Track adoption, session completion, and satisfaction across every program',
      'Export one-page reports that answer "is this working?" before anyone asks',
    ],
    image: '/sp_hr.png',
  },
};

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>('employee');
  const [displayTab, setDisplayTab] = useState<TabId>('employee');
  const [visible, setVisible] = useState(true);

  function switchTab(id: TabId) {
    if (id === activeTab) return;
    setVisible(false);
    setActiveTab(id);
    setTimeout(() => {
      setDisplayTab(id);
      setVisible(true);
    }, 200);
  }

  const content = TAB_DATA[displayTab];

  return (
    <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-boon-off-white/40 to-white" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="label-text text-[10px] text-boon-blue mb-6">Platform in Action</p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9] mb-6">
            See it working across <span className="font-serif italic text-boon-blue">every level</span>.
          </h2>
          <p className="text-base md:text-lg font-body font-medium text-gray-500 leading-relaxed max-w-2xl mx-auto">
            From individual coaching portals to executive dashboards, Boon keeps everyone connected without adding complexity.
          </p>
        </div>

        {/* Tab bar — homepage underline style */}
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-gray-200">
            {(['employee', 'manager', 'hr'] as TabId[]).map((id) => {
              const labels: Record<TabId, string> = { employee: 'EMPLOYEE', manager: 'MANAGER', hr: 'HR / L&D' };
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => switchTab(id)}
                  className={`px-8 py-3 text-xs font-body font-extrabold tracking-widest transition-all duration-200 border-b-2 -mb-px ${
                    activeTab === id
                      ? 'border-boon-blue text-boon-charcoal'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {labels[id]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* Left — copy */}
          <div className="flex flex-col justify-center py-4">
            <span className={`label-text text-[10px] self-start px-3 py-1 rounded-full mb-6 ${content.badgeColor}`}>
              {content.badge}
            </span>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-boon-charcoal tracking-tight leading-tight mb-8">
              {content.headline}
            </h3>
            <div className="flex flex-col gap-5">
              {content.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-base font-body font-medium text-gray-600 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image, no crop, no shadow, no radius */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.image}
              alt={content.badge}
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
