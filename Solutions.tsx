
import React, { useState } from 'react';
import { Page, SectionHeading } from './Components';
import { SystemArchitect } from './GrowthFeatures';

const AccordionItem: React.FC<{ 
  index: string; 
  title: string; 
  content: string; 
  defaultOpen?: boolean 
}> = ({ index, title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-10 text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-black text-[#466FF6] border border-[#466FF6]/20 px-2 py-1 rounded-md">{index}</span>
          <h4 className={`text-2xl font-black transition-colors ${isOpen ? 'text-[#466FF6]' : 'text-[#2E353D] group-hover:text-[#466FF6]'}`}>
            {title}
          </h4>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all ${isOpen ? 'bg-[#466FF6] border-[#466FF6] text-white rotate-45' : 'bg-white text-gray-400 group-hover:border-[#466FF6] group-hover:text-[#466FF6]'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12M6 12h12" />
            </svg>
          </div>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-10' : 'max-h-0 opacity-0'}`}>
        <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-3xl ml-16">
          {content}
        </p>
      </div>
    </div>
  );
};

export const SolutionsPage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 border-b border-gray-50 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-gray-100">
            The Growth System
          </div>
          <h1 className="text-6xl md:text-[92px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            One system for how people <span className="text-[#466FF6] italic font-serif">actually grow</span>.
          </h1>
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-6">
              Boon is a unified talent development system that adapts to your organization. Coaching, leadership development, and executive support designed around where growth pressure shows up.
            </p>
            <p className="text-lg md:text-xl text-[#466FF6] font-black tracking-tight border-l-2 border-[#466FF6] pl-6 py-1">
              One system, deployed differently depending on where growth pressure shows up.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: System Architect Section */}
      <SystemArchitect />

      {/* Why a System Matters */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Case for Integration</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] leading-tight mb-8 tracking-tighter">
              Fragmented support is no support at all.
            </h2>
            <div className="space-y-8 text-gray-500 text-lg font-medium leading-relaxed">
              <p>
                When development tools are disconnected, growth becomes reactive. Information fragments, adoption drops, and impact becomes difficult to sustain.
              </p>
              <p>
                A role-aware system ensures people receive the right level of support as responsibilities and stakes change, without resetting the experience each time.
              </p>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[60px] shadow-sm border border-gray-100">
             <div className="space-y-12">
                {[
                  { t: "Seamless Continuity", d: "Support moves with people as roles and expectations change." },
                  { t: "Depth of Impact", d: "Ongoing coaching builds durable habits, not momentary insight." },
                  { t: "Strategic Alignment", d: "One partner aligned to your culture across levels, not vendors in silos." }
                ].map(point => (
                  <div key={point.t} className="flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#466FF6]"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-[#2E353D] mb-2">{point.t}</h4>
                      <p className="text-sm text-gray-400 font-medium">{point.d}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section Transition Divider */}
      <div className="w-full h-px bg-gray-100"></div>

      {/* The Boon System Explanation */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <SectionHeading 
            overline="Our Philosophy" 
            title="Growth as a utility, not an event."
            subtitle="We view coaching as an ongoing, practical resource, a utility that powers the human side of your business."
          />
          <p className="text-lg md:text-xl font-medium text-gray-400 leading-relaxed -mt-10 max-w-2xl mx-auto">
            We view coaching as an ongoing, practical resource. Organizations typically start with one entry point and expand as needs evolve, choosing the mix, emphasis, and pace based on where growth pressure is highest.
          </p>
        </div>

        {/* Unifying micro-label */}
        <div className="max-w-7xl mx-auto text-center mb-12">
           <h4 className="text-[10px] font-black text-[#466FF6] uppercase tracking-[0.3em] mb-4">The Unified Ecosystem</h4>
           <div className="w-12 h-0.5 bg-[#466FF6] mx-auto"></div>
        </div>

        {/* The Solutions Grid - Intentionally Ordered SCALE -> GROW -> EXEC -> TOGETHER */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
          {/* SCALE */}
          <div className="group relative bg-white p-16 rounded-[60px] border border-gray-100 hover:border-[#466FF6] transition-all flex flex-col justify-between min-h-[550px]">
            <div className="absolute top-10 left-16 w-8 h-[2px] bg-[#466FF6]"></div>
            <div>
              <div className="text-blue-600 font-black text-[10px] tracking-widest uppercase mb-10">Boon Scale</div>
              <h3 className="text-4xl font-black mb-4">Democratized 1:1 Coaching</h3>
              <p className="text-sm font-bold text-[#466FF6] uppercase tracking-widest mb-8">“When growth needs to be available, not scheduled.”</p>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                An always-on growth resource that gives every employee access to confidential, high-caliber coaching.
              </p>
              <div className="space-y-4 border-t border-gray-50 pt-8">
                <div className="text-sm font-bold text-[#2E353D]">
                   <span className="text-[#466FF6] uppercase text-[10px] tracking-widest block mb-1">Common starting point when:</span>
                   You want broad, always-on support across the organization.
                </div>
                <div className="text-sm font-bold text-[#2E353D]">
                  <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Best for:</span> All employees, large-scale culture shifts.
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-4">Part of the Boon system. Designed to integrate and expand over time.</p>
              <button onClick={() => setPage('SCALE')} className="flex items-center gap-3 text-blue-600 font-black uppercase text-[10px] tracking-widest group-hover:gap-5 transition-all">
                Learn about Scale <span>→</span>
              </button>
            </div>
          </div>

          {/* GROW */}
          <div className="group relative bg-white p-16 rounded-[60px] border border-gray-100 hover:border-[#FF8D80] transition-all flex flex-col justify-between min-h-[550px]">
            <div className="absolute top-10 left-16 w-8 h-[2px] bg-[#FF8D80]"></div>
            <div className="absolute -top-4 right-10 bg-[#FF8D80] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">Most common starting point</div>
            <div>
              <div className="text-[#FF8D80] font-black text-[10px] tracking-widest uppercase mb-10">Boon Grow</div>
              <h3 className="text-4xl font-black mb-4">Leadership Development</h3>
              <p className="text-sm font-bold text-[#FF8D80] uppercase tracking-widest mb-8">“When managers are the bottleneck.”</p>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Focused support for managers and emerging leaders. GROW closes the gap between individual contribution and leadership capability through structured coaching.
              </p>
              <div className="space-y-4 border-t border-gray-50 pt-8">
                <div className="text-sm font-bold text-[#2E353D]">
                   <span className="text-[#FF8D80] uppercase text-[10px] tracking-widest block mb-1">Common starting point when:</span>
                   New managers or team leads are the biggest bottleneck.
                </div>
                <div className="text-sm font-bold text-[#2E353D]">
                  <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Best for:</span> First-time managers, L&D cohorts, team leads.
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-4">Part of the Boon system. Designed to integrate and expand over time.</p>
              <button onClick={() => setPage('GROW')} className="flex items-center gap-3 text-[#FF8D80] font-black uppercase text-[10px] tracking-widest group-hover:gap-5 transition-all">
                Learn about Grow <span>→</span>
              </button>
            </div>
          </div>

          {/* EXEC */}
          <div className="group relative bg-white p-16 rounded-[60px] border border-gray-100 hover:border-[#2E353D] transition-all flex flex-col justify-between min-h-[550px]">
            <div className="absolute top-10 left-16 w-8 h-[2px] bg-[#2E353D]"></div>
            <div>
              <div className="text-gray-400 font-black text-[10px] tracking-widest uppercase mb-10">Boon Exec</div>
              <h3 className="text-4xl font-black mb-4">Executive Coaching</h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">“When decisions have second-order consequences.”</p>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Confidential, strategic support for senior leaders operating under second-order consequences.
              </p>
              <div className="space-y-4 border-t border-gray-50 pt-8">
                <div className="text-sm font-bold text-[#2E353D]">
                   <span className="text-[#2E353D] uppercase text-[10px] tracking-widest block mb-1">Common starting point when:</span>
                   Senior leaders need confidential, high-stakes support.
                </div>
                <div className="text-sm font-bold text-[#2E353D]">
                  <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Best for:</span> C-Suite, VPs, Founders.
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-4">Part of the Boon system. Designed to integrate and expand over time.</p>
              <button onClick={() => setPage('EXEC')} className="flex items-center gap-3 text-[#2E353D] font-black uppercase text-[10px] tracking-widest group-hover:gap-5 transition-all">
                Learn about Exec <span>→</span>
              </button>
            </div>
          </div>

          {/* TOGETHER */}
          <div className="group relative bg-white p-16 rounded-[60px] border border-gray-100 hover:border-[#FDB022] transition-all flex flex-col justify-between min-h-[550px]">
            <div className="absolute top-10 left-16 w-8 h-[2px] bg-[#FDB022]"></div>
            <div className="absolute -top-4 right-10 bg-[#FDB022] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">Strategic entry point</div>
            <div>
              <div className="text-[#FDB022] font-black text-[10px] tracking-widest uppercase mb-10">Boon Together</div>
              <h3 className="text-4xl font-black mb-4">Collective Development</h3>
              <p className="text-sm font-bold text-[#FDB022] uppercase tracking-widest mb-8">“When alignment, not information, is the constraint.”</p>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Facilitated workshops and cohort-based experiences that build shared language, alignment, and momentum across teams.
              </p>
              <div className="space-y-4 border-t border-gray-50 pt-8">
                <div className="text-sm font-bold text-[#2E353D]">
                   <span className="text-[#FDB022] uppercase text-[10px] tracking-widest block mb-1">Common starting point when:</span>
                   Alignment, shared language, or change moments matter most.
                </div>
                <div className="text-sm font-bold text-[#2E353D]">
                  <span className="text-gray-400 uppercase text-[10px] tracking-widest block mb-1">Best for:</span> Team offsites, department alignment, workshops.
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-4">Part of the Boon system. Designed to integrate and expand over time.</p>
              <button onClick={() => setPage('TOGETHER')} className="flex items-center gap-3 text-[#FDB022] font-black uppercase text-[10px] tracking-widest group-hover:gap-5 transition-all">
                Learn about Together <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Unified System Accordion Section */}
        <div className="max-w-4xl mx-auto pb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-[#2E353D] tracking-tighter">How the system evolves over time</h3>
            <div className="w-12 h-1 bg-[#466FF6] mx-auto mt-6"></div>
          </div>
          <div className="border-t border-gray-100">
            <AccordionItem 
              index="01"
              defaultOpen
              title="Start focused, then expand with intent." 
              content="Most organizations start with a focused entry point and expand the system as value is proven and priorities evolve." 
            />
            <AccordionItem 
              index="02"
              title="Coaching changes as roles and stakes change" 
              content="We match employees with coaches who have relevant operator experience and training for their specific role and moment." 
            />
            <AccordionItem 
              index="03"
              title="You see progress without surveilling people" 
              content="Success is measured by signal that leadership can actually use: sentiment shifts, retention indicators, and core competency development." 
            />
            <AccordionItem 
              index="04"
              title="Growth scales without ripping anything out" 
              content="Boon is designed as a single, flexible human layer. As you add solutions or headcount, existing workflows and data stay intact. Nothing breaks as you grow." 
            />
          </div>
        </div>
      </section>

      {/* Platform Intelligence: Visibility, Integrations & Dashboards */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">Platform Intelligence</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] tracking-tighter leading-tight mb-6">
              Built into the tools your team already uses.
            </h2>
            <p className="text-lg text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
              Real-time development insights, Slack-native nudges, and manager dashboards that surface leadership signal without adding work.
            </p>
          </div>

          {/* UI Mockup Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Growth Areas Card */}
            <div className="bg-[#F9FAFB] rounded-[40px] p-8 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Growth Areas</div>
                <div className="text-[9px] font-black text-[#6CD893] bg-[#6CD893]/10 px-3 py-1 rounded-full">Live</div>
              </div>
              <div className="space-y-5">
                {[
                  { label: 'Confidence in Decision-Making', pct: 85, color: '#466FF6' },
                  { label: 'Navigating Difficult Conversations', pct: 72, color: '#466FF6' },
                  { label: 'Strategic Prioritization', pct: 68, color: '#FDB022' },
                  { label: 'Cross-Functional Influence', pct: 61, color: '#FF8D80' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-[#2E353D]">{item.label}</span>
                      <span className="text-xs font-black" style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.pct}%`, backgroundColor: item.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-gray-400 font-medium mt-6">Anonymized, aggregated across coached population.</p>
            </div>

            {/* Slack Integration Cards */}
            <div className="space-y-8">
              {/* Coach Match Notification */}
              <div className="bg-[#F9FAFB] rounded-[40px] p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#4A154B] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                    </svg>
                  </div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Slack Integration</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#466FF6] flex items-center justify-center">
                      <span className="text-white text-[8px] font-black">B</span>
                    </div>
                    <span className="text-sm font-black text-[#2E353D]">New Coach Match</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Your coach <span className="font-bold text-[#2E353D]">Keith Cocking</span> has been matched based on your role and development goals.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[9px] font-black text-[#466FF6] bg-[#466FF6]/10 px-3 py-1 rounded-full">View Profile</span>
                    <span className="text-[9px] font-black text-[#2E353D] bg-gray-100 px-3 py-1 rounded-full">Book First Session</span>
                  </div>
                </div>
              </div>

              {/* Action Items Notification */}
              <div className="bg-[#F9FAFB] rounded-[40px] p-8 border border-gray-100 shadow-sm">
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-[#466FF6] flex items-center justify-center">
                      <span className="text-white text-[8px] font-black">B</span>
                    </div>
                    <span className="text-sm font-black text-[#2E353D]">Action Items from Session</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    {[
                      'Practice active listening in next 1:1',
                      'Schedule skip-level conversation',
                      'Draft 30-day development plan',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded border border-gray-200 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-gray-400">Due: Feb 28</span>
                </div>
              </div>
            </div>

            {/* KPI Dashboard Card */}
            <div className="bg-[#F9FAFB] rounded-[40px] p-8 border border-gray-100 shadow-sm flex flex-col">
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Manager Dashboard</div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Active Sessions', value: '847', sub: 'this quarter' },
                  { label: 'Utilization', value: '73%', sub: 'of available hours' },
                  { label: 'Coachee NPS', value: '78', sub: 'rolling 90-day' },
                  { label: 'Coach Rating', value: '4.8', sub: 'avg satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
                    <div className="text-2xl font-black text-[#2E353D] tracking-tight">{stat.value}</div>
                    <div className="text-[9px] font-black text-[#466FF6] uppercase tracking-widest mt-1">{stat.label}</div>
                    <div className="text-[8px] text-gray-400 font-medium mt-1">{stat.sub}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 mt-auto">
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3">Team Development Trend</div>
                <div className="flex items-end gap-1 h-16">
                  {[35, 42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i >= 10 ? '#466FF6' : i >= 8 ? '#466FF6CC' : '#466FF640' }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[8px] text-gray-400 font-medium">Jan</span>
                  <span className="text-[8px] text-gray-400 font-medium">Dec</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width product screenshot */}
          <div className="rounded-[48px] md:rounded-[64px] overflow-hidden shadow-2xl border border-gray-100">
            <img
              src="https://storage.googleapis.com/boon-public-assets/togetherdash.png"
              alt="Boon unified leadership dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* What To Expect Next */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
           <div>
              <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">What To Expect Next</p>
              <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] leading-tight mb-8 tracking-tighter">Flexibility without the complexity.</h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-12">
                We help organizations choose the right entry point for their current stage, then expand deliberately as value becomes clear.
              </p>
              <div className="space-y-6">
                 <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <h5 className="font-black mb-2">Incremental Expansion</h5>
                    <p className="text-sm text-gray-400 font-medium">Add solutions as your organization grows. No restrictive licensing models.</p>
                 </div>
                 <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <h5 className="font-black mb-2">Usage-Aware Scaling</h5>
                    <p className="text-sm text-gray-400 font-medium">Align your investment with your team's actualized engagement.</p>
                 </div>
              </div>
           </div>
           <div className="bg-white p-16 rounded-[60px] border border-gray-100">
              <h4 className="text-2xl font-black mb-8 text-[#2E353D]">What Makes Boon Different?</h4>
              <ul className="space-y-10">
                 {[
                   { t: "Seamless Continuity", d: "Support moves with people as roles and expectations change." },
                   { t: "Depth of Impact", d: "Ongoing coaching builds durable habits, not momentary insight." },
                   { t: "Strategic Alignment", d: "One partner aligned to your culture across levels, not vendors in silos." }
                 ].map(item => (
                   <li key={item.t} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black">✓</div>
                      <div>
                        <h6 className="font-black text-[#2E353D] mb-2">{item.t}</h6>
                        <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.d}</p>
                      </div>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* BESPOKE FINAL CTA */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#466FF6] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85]">Built for how people actually grow.</h2>
          <p className="text-xl mb-16 opacity-80 font-medium max-w-2xl mx-auto leading-relaxed">Leadership infrastructure designed around human behavior, so growth holds up as organizations scale.</p>
          <button className="bg-white text-[#466FF6] px-12 py-6 rounded-[15px] font-black text-lg hover:scale-105 transition-all shadow-2xl">
            Schedule a Conversation
          </button>
        </div>
      </section>
    </main>
  );
};
