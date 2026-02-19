
import React from 'react';
import { EconomicImpactModel } from './GrowthFeatures';

const CheckMark = () => (
  <svg className="w-4 h-4 text-[#466FF6] mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossMark = () => (
  <svg className="w-4 h-4 text-gray-300 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FragmentedToolCard = ({ icon, label, detail, rotation, className }: { icon: React.ReactNode; label: string; detail: string; rotation: string; className?: string }) => (
  <div className={`absolute bg-white rounded-xl shadow-lg border border-gray-200 p-3 w-36 ${rotation} ${className}`}>
    <div className="flex items-center gap-2 mb-1">
      {icon}
      <span className="text-[10px] font-bold text-gray-600 truncate">{label}</span>
    </div>
    <p className="text-[9px] text-gray-400 truncate">{detail}</p>
  </div>
);

const DesignMetaphor = () => (
  <div className="grid md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-[72px] shadow-sm mb-32 overflow-hidden">
    {/* Patchwork Side - Fragmented Tools */}
    <div className="bg-white p-12 md:p-20 flex flex-col items-center justify-center text-center">
      <div className="mb-12 relative w-72 h-64 mx-auto">
        {/* Calendar invite */}
        <FragmentedToolCard
          icon={<svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2"/></svg>}
          label="Calendar"
          detail="Leadership Workshop 3pm"
          rotation="-rotate-6"
          className="top-0 left-0"
        />
        {/* Slack message */}
        <FragmentedToolCard
          icon={<svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/></svg>}
          label="Slack"
          detail="@manager any updates on..."
          rotation="rotate-3"
          className="top-4 right-0"
        />
        {/* LMS course */}
        <FragmentedToolCard
          icon={<svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>}
          label="LMS"
          detail="Module 4: Feedback (32%)"
          rotation="-rotate-3"
          className="top-24 left-4"
        />
        {/* Spreadsheet */}
        <FragmentedToolCard
          icon={<svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>}
          label="Spreadsheet"
          detail="Q3 Reviews - DRAFT"
          rotation="rotate-6"
          className="bottom-0 right-4"
        />
        {/* Disconnected lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
          <path d="M20 25 L45 40" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="4 4"/>
          <path d="M75 30 L55 50" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="4 4"/>
          <path d="M30 60 L50 55" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="4 4"/>
        </svg>
      </div>
      <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Patchwork Effort</p>
      <p className="text-sm text-gray-400 font-medium mt-4">5 tools. 0 coordination.</p>
    </div>

    {/* Boon Side - Unified System */}
    <div className="bg-[#F4F7FF] p-12 md:p-20 flex flex-col items-center justify-center text-center">
      <div className="mb-12 relative w-72 mx-auto">
        {/* Unified Dashboard Mock */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#466FF6]/20 overflow-hidden">
          {/* Header */}
          <div className="bg-[#466FF6] px-4 py-3 flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white text-[10px] font-black">B</span>
            </div>
            <span className="text-white text-xs font-bold">Boon</span>
            <div className="ml-auto flex gap-1">
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
          {/* Content */}
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg border border-green-100">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-800">Coaching Session</p>
                <p className="text-[9px] text-gray-500">Completed + synced to manager</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg border border-blue-100">
              <div className="w-8 h-8 bg-[#466FF6] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-800">Team Ritual</p>
                <p className="text-[9px] text-gray-500">Thursday alignment, auto-scheduled</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-800">Engagement Score</p>
                <p className="text-[9px] text-gray-500">+12 pts this quarter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#466FF6]">The Boon System</p>
      <p className="text-sm text-[#466FF6]/80 font-medium mt-4">1 system. Everything connected.</p>
    </div>
  </div>
);

export const WhyBoonPage: React.FC = () => {
  return (
    <main className="bg-white text-[#2E353D] overflow-hidden selection:bg-[#466FF6] selection:text-white">
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-[#F4F7FF] text-[#466FF6] text-[10px] tracking-[0.5em] font-black px-6 py-2.5 rounded-[15px] mb-16 uppercase border border-blue-50">
            Strategic Infrastructure
          </div>
          <h1 className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-16 max-w-6xl">
            A unified approach <br />
            to leadership <span className="text-[#466FF6] italic font-serif">resilience</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mb-24">
            Most leadership programs develop individuals. We build the system that makes them effective <em className="italic text-[#2E353D]">together</em>, so growth actually sticks when pressure hits.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <button className="bg-[#466FF6] text-white px-14 py-7 rounded-[15px] font-black text-xl shadow-2xl shadow-[#466FF6]/20 hover:bg-blue-700 transition-all">
              Explore Your System Fit
            </button>
            <button 
              className="border border-gray-100 text-[#2E353D] px-14 py-7 rounded-[15px] font-black text-xl hover:bg-gray-50 transition-all"
            >
              See our Comparison
            </button>
          </div>
        </div>
      </section>

      <section className="py-48 px-6 md:px-12 lg:px-24 bg-[#1A1F24] rounded-[100px] mx-4 md:mx-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <EconomicImpactModel />
        </div>
      </section>

      <section className="py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <p className="text-gray-400 font-black text-[10px] tracking-[0.4em] uppercase mb-10">The Design Gap</p>
            <h2 className="text-5xl md:text-[84px] font-black tracking-tighter leading-none mb-16">The problem is not effort. <br/>It is design.</h2>
          </div>
          
          <DesignMetaphor />
          
          <div className="bg-white border border-gray-100 rounded-[48px] overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 border-b border-gray-100">
              <div className="p-8 bg-gray-50"></div>
              <div className="p-8 bg-gray-50 text-center border-x border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Point Solutions</p>
              </div>
              <div className="p-8 bg-[#F4F7FF] text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#466FF6]">Boon System</p>
              </div>
            </div>
            {[
              {
                category: "Coaching Model",
                point: "1:1 sessions, scheduled reactively",
                boon: "1:1 + team rituals + async nudges, all integrated"
              },
              {
                category: "Content & Learning",
                point: "Generic courses, completed in isolation",
                boon: "Contextual content tied to live challenges"
              },
              {
                category: "Manager Support",
                point: "HR escalation when problems surface",
                boon: "Proactive manager enablement from day one"
              },
              {
                category: "Measurement",
                point: "Satisfaction surveys, lagging indicators",
                boon: "Leading indicators: engagement, retention risk, alignment"
              },
              {
                category: "Outcome",
                point: "Individual growth that doesn't transfer",
                boon: "Coordinated capability that scales under pressure"
              }
            ].map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx < 4 ? 'border-b border-gray-100' : ''}`}>
                <div className="p-8 flex items-center">
                  <p className="font-bold text-[#2E353D]">{row.category}</p>
                </div>
                <div className="p-8 flex items-center border-x border-gray-100 bg-gray-50/30">
                  <div className="flex gap-3 items-start">
                    <CrossMark />
                    <p className="text-gray-500 text-sm leading-relaxed">{row.point}</p>
                  </div>
                </div>
                <div className="p-8 flex items-center bg-[#F4F7FF]/30">
                  <div className="flex gap-3 items-start">
                    <CheckMark />
                    <p className="text-[#2E353D] text-sm leading-relaxed font-medium">{row.boon}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-56 px-6 text-center bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-[110px] font-architectural text-[#2E353D] mb-16">
            Design a system <br /> <span className="text-[#466FF6] italic font-serif">that holds</span>.
          </h2>
          <button className="bg-[#466FF6] text-white px-20 py-8 rounded-[15px] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
            Schedule a Conversation
          </button>
        </div>
      </section>
    </main>
  );
};
