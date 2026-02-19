'use client';

import { useState } from 'react';

type TabId = 'employee' | 'manager' | 'hr';

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#10B981" fillOpacity="0.15" />
      <path d="M6.5 10.5l2 2 5-5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SlackBadge({ className }: { className?: string }) {
  return (
    <span className={"inline-flex items-center gap-1.5 text-[11px] font-body font-medium px-2.5 py-1 rounded-full " + (className || "bg-white/20 text-white")}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
      Slack Connected
    </span>
  );
}

function EmployeeCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-boon-blue to-boon-deep-blue px-6 py-5">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-sans font-bold text-lg">My Coaching Journey</h4>
          <SlackBadge />
        </div>
      </div>
      <div className="px-6 py-5 space-y-5">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-body font-semibold text-boon-charcoal">Session Progress</span>
            <span className="text-xs font-body font-medium text-gray-400">Session 6 of 12</span>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-boon-blue rounded-full" style={{ width: '50%' }} />
          </div>
          <p className="text-[11px] font-body text-gray-400 mt-1">50% complete</p>
        </div>
        <div className="bg-boon-off-white rounded-2xl p-4">
          <p className="text-[11px] font-body font-semibold text-gray-400 uppercase tracking-wider mb-2">Upcoming Session</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-boon-blue/10 flex items-center justify-center">
                <span className="text-sm font-sans font-bold text-boon-blue">SK</span>
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-boon-charcoal">Sarah Kim</p>
                <p className="text-xs font-body text-gray-400">Wed, Feb 19 at 2:00 PM</p>
              </div>
            </div>
            <span className="bg-boon-blue text-white text-xs font-body font-semibold px-4 py-2 rounded-full">Join</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-body font-semibold text-boon-charcoal mb-3">Current Goals</p>
          <div className="space-y-3">
            {[
              { name: 'Improve delegation skills', pct: 72 },
              { name: 'Build executive presence', pct: 45 },
              { name: 'Lead cross-functional projects', pct: 30 },
            ].map((goal) => (
              <div key={goal.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-body font-medium text-gray-600">{goal.name}</span>
                  <span className="text-[11px] font-body font-semibold text-boon-charcoal">{goal.pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-boon-green rounded-full" style={{ width: `${goal.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-xs font-body font-semibold text-boon-blue py-2 border-t border-gray-100">
          View Session History
        </div>
      </div>
    </div>
  );
}

function ManagerCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-boon-charcoal px-6 py-5">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-sans font-bold text-lg">Manager View</h4>
          <div className="flex items-center gap-3">
            <SlackBadge className="bg-white/15 text-white" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-boon-blue/20 flex items-center justify-center">
                <span className="text-[10px] font-sans font-bold text-boon-blue">JM</span>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-body font-semibold text-white leading-tight">Jordan Martinez</p>
                <p className="text-[10px] font-body text-gray-400 leading-tight">VP of Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-5 space-y-4">
        <div className="flex items-center gap-2.5 bg-boon-off-white rounded-[15px] px-4 py-3 border border-gray-100">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
            <circle cx="8" cy="8" r="7" stroke="#466FF6" strokeWidth="1.5" />
            <path d="M8 5v3M8 10.5v.5" stroke="#466FF6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="text-xs font-body font-medium text-gray-500">
            <span className="font-semibold text-boon-charcoal">Confidentiality Protected.</span>{' '}
            Session content is private. You see progress, not conversations.
          </p>
        </div>
        <div className="rounded-[15px] border-2 border-emerald-200 bg-emerald-50/50 px-5 py-4 text-center">
          <p className="text-2xl font-sans font-bold text-emerald-600">+18%</p>
          <p className="text-xs font-body font-medium text-emerald-600">in leadership competencies</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { value: '4', label: 'Team Members' },
            { value: '61%', label: 'Avg Progress' },
            { value: '8', label: 'Sessions This Mo.' },
            { value: '1', label: 'Touchpoints Done' },
          ].map((stat) => (
            <div key={stat.label} className="bg-boon-off-white rounded-xl p-3 text-center">
              <p className="text-lg font-sans font-bold text-boon-charcoal">{stat.value}</p>
              <p className="text-[10px] font-body font-medium text-gray-400 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HRCard() {
  const themes = [
    { name: 'Leadership & Communication', count: 32, color: '#466FF6' },
    { name: 'Strategic Thinking', count: 24, color: '#A855F7' },
    { name: 'Delegation & Empowerment', count: 19, color: '#10B981' },
    { name: 'Work-Life Balance', count: 16, color: '#F59E0B' },
    { name: 'Conflict Resolution', count: 12, color: '#EF4444' },
    { name: 'Executive Presence', count: 9, color: '#EC4899' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-boon-off-white px-6 py-5 border-b border-gray-100">
        <h4 className="font-sans font-bold text-lg text-boon-charcoal">HR / L&D View</h4>
      </div>
      <div className="px-6 py-5">
        <div className="mb-5">
          <h5 className="text-sm font-sans font-bold text-boon-charcoal mb-1">Coaching Themes Across Organization</h5>
          <p className="text-xs font-body text-gray-400">Based on 47 active participants</p>
        </div>
        <div className="space-y-4">
          {themes.map((theme) => (
            <div key={theme.name} className="flex items-center gap-3">
              <span className="text-xs font-body font-medium text-gray-600 w-[170px] flex-shrink-0 truncate">{theme.name}</span>
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(theme.count / 32) * 100}%`, backgroundColor: theme.color }}
                />
              </div>
              <span className="text-xs font-body font-semibold text-boon-charcoal w-6 text-right">{theme.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TAB_DATA: Record<TabId, {
  badge: string;
  badgeColor: string;
  question: string;
  headline: string;
  features: string[];
}> = {
  employee: {
    badge: 'Employee View',
    badgeColor: 'bg-emerald-50 text-emerald-600',
    question: "What's in it for me?",
    headline: 'Your personal coaching journey, all in one place',
    features: [
      'Set development goals tied to your actual role, not generic competencies',
      'Coach matching, session reminders, and action items delivered in Slack or Teams',
      'Book sessions when you need them, not when HR schedules them',
    ],
  },
  manager: {
    badge: 'Manager View',
    badgeColor: 'bg-blue-50 text-boon-blue',
    question: 'How is my team developing?',
    headline: 'Team development visibility without invading privacy',
    features: [
      "See who's engaged, who's growing, and where your team needs support",
      'Competency scores benchmarked against pre/post assessments',
      'Session content stays between coach and employee. You see progress, not conversations.',
    ],
  },
  hr: {
    badge: 'HR / L&D View',
    badgeColor: 'bg-purple-50 text-purple-600',
    question: "What's the ROI?",
    headline: 'The reporting your CFO will actually believe',
    features: [
      'See what your workforce is actually working on with AI-powered coaching theme analysis',
      'Track adoption, session completion, and satisfaction across every program',
      'Export one-page reports that answer "is this working?" before anyone asks',
    ],
  },
};

function TabCard({ tabId }: { tabId: TabId }) {
  switch (tabId) {
    case 'employee': return <EmployeeCard />;
    case 'manager': return <ManagerCard />;
    case 'hr': return <HRCard />;
  }
}

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
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-boon-off-white/40 to-white" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="label-text text-[10px] mb-4 text-boon-blue">Platform in Action</p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 tracking-tight text-boon-charcoal leading-tight">
            See it working across <span className="font-serif italic">every level</span>.
          </h2>
          <p className="text-lg md:text-xl font-body font-medium text-gray-500 leading-relaxed">
            From individual coaching portals to executive dashboards, Boon keeps everyone connected without adding complexity.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <button
            type="button"
            onClick={() => switchTab('employee')}
            className={
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-semibold border transition-all duration-300 cursor-pointer ' +
              (activeTab === 'employee'
                ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50')
            }
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Employee
          </button>
          <button
            type="button"
            onClick={() => switchTab('manager')}
            className={
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-semibold border transition-all duration-300 cursor-pointer ' +
              (activeTab === 'manager'
                ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50')
            }
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="11" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M1.5 14c0-2.49 2.01-4.5 4.5-4.5s4.5 2.01 4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10.5 9.5c1.66 0 3 1.34 3 3v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Manager
          </button>
          <button
            type="button"
            onClick={() => switchTab('hr')}
            className={
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-semibold border transition-all duration-300 cursor-pointer ' +
              (activeTab === 'hr'
                ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50')
            }
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="9.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="1.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            HR / L&D
          </button>
        </div>

        {/* Tab Content */}
        <div
          className="grid lg:grid-cols-2 gap-12 items-start"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center py-4">
            <span className={"inline-block self-start text-xs font-body font-semibold px-3 py-1 rounded-full mb-5 " + content.badgeColor}>
              {content.badge}
            </span>
            <p className="font-serif italic text-slate-400 text-base mb-3">
              {content.question}
            </p>
            <h3 className="font-sans text-[28px] md:text-[32px] font-bold text-boon-charcoal leading-tight mb-8">
              {content.headline}
            </h3>
            <div className="space-y-5">
              {content.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-base font-body font-medium text-gray-600 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <TabCard tabId={displayTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
