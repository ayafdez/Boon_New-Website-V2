
import React from 'react';
import { SectionHeading } from './Components';

/**
 * Boon TOGETHER - High Fidelity Product Page
 * Focused on group coaching, alignment, and shared capability.
 * Refined for Coordinated Leadership Behavior.
 */

// Minimal geometric markers (Reduced prominence as requested)
const ArcMark = () => (
  <svg className="w-3.5 h-3.5 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M4 12a8 8 0 0 1 16 0" />
  </svg>
);

const CircleMark = () => (
  <svg className="w-3.5 h-3.5 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="8" />
  </svg>
);

const DotGridMark = () => (
  <svg className="w-3.5 h-3.5 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
    <circle cx="6" cy="12" r="0.5" />
    <circle cx="12" cy="12" r="0.5" />
    <circle cx="18" cy="12" r="0.5" />
  </svg>
);

const VerticalBar: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="w-[1.5px] h-4 bg-[#FDB022] opacity-40">
    {children}
  </div>
);

const IconWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#2E353D] mb-8 transition-colors border border-gray-100/50">
    {children}
  </div>
);

// Abstract signal visual for spatial contrast
const SignalContrast: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-[64px] overflow-hidden">
    <div className="bg-white p-20 flex flex-col items-center justify-center relative group">
      <div className="absolute top-8 left-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Fragmented Signals</div>
      <div className="relative w-48 h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
        <div className="absolute top-4 left-10 w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="absolute top-20 right-4 w-4 h-4 bg-gray-400 rounded-full rotate-12"></div>
        <div className="absolute bottom-10 left-4 w-5 h-5 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gray-400 rotate-[45deg]"></div>
        <div className="absolute bottom-4 right-10 w-6 h-px bg-gray-400 -rotate-[20deg]"></div>
      </div>
      <p className="text-sm font-bold text-gray-300 mt-8 italic">People grow, but teams drift.</p>
    </div>
    <div className="bg-[#FFF9E6]/30 p-20 flex flex-col items-center justify-center relative group">
      <div className="absolute top-8 left-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#FDB022]/60">Aligned Signals</div>
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="absolute inset-0 border border-[#FDB022]/10 rounded-full scale-100 group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute inset-8 border border-[#FDB022]/20 rounded-full scale-100 group-hover:scale-105 transition-transform duration-1000"></div>
        <div className="absolute inset-16 border border-[#FDB022]/40 rounded-full"></div>
        <div className="w-4 h-4 bg-[#FDB022] rounded-full shadow-2xl shadow-amber-200"></div>
      </div>
      <p className="text-sm font-bold text-[#FDB022]/60 mt-8 italic">Collective Capability</p>
    </div>
  </div>
);

export const BoonTogetherPage: React.FC = () => {
  return (
    <main className="bg-white text-[#2E353D] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#FFF9E6]/20 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FDB022]/5 text-[#FDB022]/70 text-[9px] tracking-[0.3em] font-black px-4 py-2 rounded-full mb-10 uppercase border border-[#FDB022]/10">
              System Infrastructure
            </div>
            <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-10 max-w-5xl">
              Collective capability, <br />
              <span className="text-[#FDB022] italic font-serif">synchronized</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-4">
              Turn individual development into coordinated leadership behavior.
            </p>
            <p className="text-lg text-[#FDB022]/60 font-black tracking-tight mb-8 uppercase text-[12px] border-l-2 border-[#FDB022]/20 pl-6">
              Designed for moments when misalignment, not effort, is slowing teams down.
            </p>
            <p className="text-[11px] font-bold text-gray-300 italic mb-16">
              TOGETHER is not a replacement for 1:1 coaching. It’s what makes 1:1 coaching stick.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#FDB022] text-white px-10 py-5 rounded-[15px] font-black text-xl hover:bg-[#e89c10] transition-all shadow-xl shadow-amber-900/5">
                Start a Conversation About Alignment
              </button>
              <button className="border border-gray-100 px-10 py-5 rounded-[15px] font-black text-xl hover:bg-white transition-all">
                Explore Group Themes
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[80px] overflow-hidden shadow-2xl relative border border-[#FDB022]/5">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Observational team alignment moment" 
                className="w-full h-full object-cover aspect-[1/1] desaturate-[0.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDB022]/5 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Collective Growth? - Spatial Contrast */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-32">
            <p className="text-[#FDB022]/60 font-black text-[10px] tracking-widest uppercase mb-10">The Case for Connection</p>
            <h2 className="text-5xl md:text-[84px] font-black leading-[0.9] mb-12 tracking-tighter">
              High-performing individuals can still create a low-performing system.
            </h2>
            <div className="space-y-12 text-gray-500 text-xl font-medium leading-relaxed max-w-2xl">
              <p>
                When development happens in silos, teams struggle to coordinate under pressure, especially during growth, change, or conflict.
              </p>
              <p className="text-[#2E353D] font-bold">
                Boon TOGETHER creates shared language, shared standards, and shared expectations so leadership shows up consistently across the team.
              </p>
            </div>
          </div>

          <SignalContrast />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
             {[
               { t: "Shared Language", d: "Creating a common vocabulary for feedback, conflict, and decision-making." },
               { t: "Synchronized Expectations", d: "Aligning on what 'good leadership' looks like in practice across the organization." },
               { t: "Collective Resilience", d: "Equipping groups to navigate organizational change and high-pressure cycles together." }
             ].map(item => (
               <div key={item.t} className="p-10 border border-gray-100 rounded-[40px] shadow-sm hover:border-[#FDB022]/20 transition-all">
                  <h4 className="text-xl font-black mb-4">{item.t}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. What It Is - Methodology */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <SectionHeading 
            overline="The Methodology" 
            title="Facilitated experiences, not lectures." 
            subtitle="We don’t perform. We facilitate."
          />
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
           {[
             { 
               icon: <ArcMark />, 
               t: "Group Coaching", 
               d: "Small cohorts working through real leadership challenges over time. Focus on continuity and repetition." 
             },
             { 
               icon: <CircleMark />, 
               t: "Leadership Offsites", 
               d: "Designed for inflection points: scale, transition, or reset. Reset culture and operating rhythms." 
             },
             { 
               icon: <DotGridMark />, 
               t: "Manager Circles", 
               d: "Peer spaces to align expectations and decision norms. Vet challenges and build shared standards." 
             }
           ].map(item => (
             <div key={item.t} className="text-left bg-white p-12 rounded-[60px] shadow-sm border border-gray-100 group">
                <IconWrapper>{item.icon}</IconWrapper>
                <h4 className="text-2xl font-black mb-4 group-hover:text-[#FDB022] transition-colors">{item.t}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">{item.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 4. Common Themes - Grouped for Patterns */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#FDB022]/40 font-black text-[10px] tracking-widest uppercase mb-6">How teams actually change</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Areas of collective exploration.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { t: "Shared Leadership Standards", d: "Building a unified standard for feedback, delegation, and coaching-style management across the firm." },
              { t: "Decision Alignment at Scale", d: "Moving from individual contributor mindsets to a unified, mission-driven approach to scaling." },
              { t: "Conflict, Change & Safety", d: "Equipping teams to handle friction as growth rather than dysfunction. Navigating change cycles with trust." }
            ].map(theme => (
              <div key={theme.t} className="p-12 border border-gray-100 rounded-[48px] hover:bg-[#FFF9E6]/10 hover:border-[#FDB022]/10 transition-all flex gap-8 group">
                 <div className="flex-shrink-0 pt-2">
                    <VerticalBar />
                 </div>
                 <div>
                    <h4 className="text-2xl font-black mb-4 group-hover:text-[#FDB022] transition-colors tracking-tight">{theme.t}</h4>
                    <p className="text-gray-400 font-medium leading-relaxed text-sm">{theme.d}</p>
                 </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <p className="text-sm text-gray-400 font-bold italic">
               These aren’t topics. They’re patterns teams return to under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* 5. The Coherent System - Glue Layer */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#2E353D] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1.3fr] gap-24 items-center">
           <div className="relative aspect-video rounded-[60px] overflow-hidden grayscale brightness-75 shadow-2xl opacity-80 border border-white/5">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Group Collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2E353D]/50 to-transparent"></div>
           </div>
           <div>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">Infrastructure <br/>for collective growth.</h3>
              <p className="text-white/20 text-lg font-medium leading-relaxed mb-6 max-w-md">
                Without a shared layer, leadership development fragments. People grow, but teams drift.
              </p>
              <p className="text-white/40 text-lg font-bold italic mb-10 max-w-md border-l border-[#FDB022]/40 pl-6">
                TOGETHER ensures leadership development compounds across levels instead of diverging into disconnected experiences.
              </p>
              <div className="space-y-6">
                 {[
                   { l: "Boon EXEC", d: "Senior alignment" },
                   { l: "Boon GROW", d: "Manager cohort standards" },
                   { l: "Boon SCALE", d: "System-wide language" }
                 ].map(item => (
                   <div key={item.l} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-[1px] bg-[#FDB022] opacity-40 group-hover:w-4 transition-all"></div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black tracking-widest text-white/80 uppercase">{item.l}</span>
                        <span className="text-[9px] text-white/30 uppercase font-bold">{item.d}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. Who It's For - Designed for teams in motion */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#FDB022]/40 font-black text-[10px] tracking-widest uppercase mb-4">Application</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Designed for teams in motion.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { t: "Aligning culture and strategy", d: "Scale amplifies cracks. Sync before the fracture becomes a crisis." },
               { t: "Creating management consistency", d: "Where quality varies, the system breaks. Standardize leadership behavior." },
               { t: "Breaking organizational silos", d: "Solve friction before it hardens into political drift and stalled execution." }
             ].map(item => (
               <div key={item.t} className="p-12 bg-gray-50/50 rounded-[60px] border border-gray-100 h-full">
                  <h5 className="text-xl font-black mb-4 leading-tight">{item.t}</h5>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-[#FDB022] py-40 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12">Growth is better when it's <span className="text-white/40 italic font-serif">shared</span>.</h2>
          <p className="text-xl text-white/80 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Every Boon TOGETHER engagement is custom-designed around your team’s real dynamics, not generic content.
          </p>
          <button className="bg-white text-[#FDB022] px-12 py-6 rounded-[15px] font-black text-lg shadow-2xl hover:scale-105 transition-all">
            Start a Conversation About Alignment
          </button>
          <div className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
            Facilitated by ICF Certified Coaches • Systemic Design • Global Delivery
          </div>
        </div>
      </section>
    </main>
  );
};
