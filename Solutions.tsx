
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
            subtitle="We view coaching as an ongoing, practical resource—a utility that powers the human side of your business."
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
              content="Success is measured by signal that leadership can actually use—sentiment shifts, retention indicators, and core competency development." 
            />
            <AccordionItem 
              index="04"
              title="Growth scales without ripping anything out" 
              content="Boon is designed as a single, flexible human layer. As you add solutions or headcount, existing workflows and data stay intact. Nothing breaks as you grow." 
            />
          </div>
        </div>
      </section>

      {/* Product Artifact Section: Grounded Data Visualization */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#466FF6]/5 blur-[80px] rounded-full"></div>
             <div className="relative bg-[#F9FAFB] p-8 md:p-12 rounded-[60px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/20"></div>
                  </div>
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Aggregate Sentiment Report</div>
                </div>
                
                {/* Mock UI Artifact */}
                <div className="space-y-6 blur-[1px] opacity-70">
                   <div className="h-8 bg-white rounded-lg w-2/3 shadow-sm border border-gray-50"></div>
                   <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-white rounded-2xl shadow-sm border border-gray-50"></div>
                      <div className="h-24 bg-[#466FF6]/10 rounded-2xl shadow-sm border border-[#466FF6]/20"></div>
                      <div className="h-24 bg-white rounded-2xl shadow-sm border border-gray-50"></div>
                   </div>
                   <div className="space-y-3">
                      <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-4/6"></div>
                   </div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                   <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white max-w-sm">
                      <p className="text-sm font-black text-[#2E353D] mb-2 uppercase tracking-tight">Meaningful Measurement</p>
                      <p className="text-xs text-gray-500 font-medium">Boon provides an anonymized view of workforce themes—identifying burnout markers and growth trends before they impact performance.</p>
                   </div>
                </div>
             </div>
          </div>
          <div>
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Outcome</p>
            <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] leading-[0.9] mb-10 tracking-tighter">Leadership signal that informs decisions, not dashboards.</h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
              Traditional surveys capture how people feel at a moment in time. Boon surfaces evolving development themes so leaders can act while change is still possible.
            </p>
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#466FF6] group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </div>
               <span className="text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-[#2E353D]">View Sample Report</span>
            </div>
          </div>
        </div>
      </section>

      {/* How Organizations Use Boon */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
           <div>
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
          <button className="bg-white text-[#466FF6] px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl">
            Schedule a Conversation
          </button>
        </div>
      </section>
    </main>
  );
};
