
import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './Components';

/**
 * Boon GROW - Refined Product Page
 * Strategy: Simplified voice, tightened claims, and operator-first posture.
 */

const ImpactMetricRow: React.FC<{ label: string; before: string; after: string; change: string; width: string }> = ({ label, before, after, change, width }) => (
  <div className="grid grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr_1fr] items-center py-4 border-b border-slate-50 text-[10px] font-bold group">
    <div className="text-slate-700 group-hover:text-[#FF8D80] transition-colors">{label}</div>
    <div className="text-slate-300 font-medium">{before}</div>
    <div className="text-[#FF8D80] font-medium">{after}</div>
    <div className="text-emerald-600/70">{change}</div>
    <div className="pl-4">
      <div className="h-1.5 bg-slate-50 rounded-full w-full overflow-hidden">
        <div className="h-full bg-[#FF8D80]/80 rounded-full transition-all duration-1000" style={{ width }}></div>
      </div>
    </div>
  </div>
);

const ArtifactContainer: React.FC<{ children: React.ReactNode; caption?: string; label?: string; size?: 'lg' | 'sm' }> = ({ children, caption, label, size = 'lg' }) => (
  <div className={`flex flex-col gap-6 group ${size === 'sm' ? 'max-w-md' : 'w-full'}`}>
    {label && <p className="text-slate-300 font-black text-[9px] tracking-[0.3em] uppercase mb-1">{label}</p>}
    <div className="bg-white rounded-[48px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden transition-transform duration-500">
      <div className="bg-white">
        {children}
      </div>
    </div>
    {caption && (
      <div className="px-6">
        <p className="text-sm text-slate-400 font-bold leading-relaxed max-w-sm">{caption}</p>
      </div>
    )}
  </div>
);

export const BoonGrowPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const end = 20;
        const duration = 1000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.5 });
    
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white overflow-hidden text-[#2E353D]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawUnderline {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeInUpLate {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-underline { position: relative; display: inline-block; }
        .animate-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 2px;
          background: #FF8D80;
          animation: drawUnderline 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-badge { opacity: 0; animation: fadeInUpLate 0.6s ease-out 1.2s forwards; }
        .vignette { box-shadow: inset 0 0 100px rgba(0,0,0,0.1); }
      `}</style>

      {/* 1. Hero Section - Simplified Voice */}
      <section className="pt-32 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFF2F0] text-[#FF8D80] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-[#FF8D80]/10">
              <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full"></span>
              Boon Grow
            </div>
            <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-10 max-w-5xl animate-fade-in">
              Turn managers into leaders who can <span className="text-[#FF8D80]">actually lead</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl mb-16">
              A structured, coaching-led development system built around real decisions, real conversations, and measurable behavior change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="flex flex-col items-center sm:items-start gap-3">
                <button className="bg-[#FF8D80] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-100 hover:bg-[#ff7a6b] transition-all">
                  Book a conversation
                </button>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest sm:ml-4">30 minutes. No sales pitch.</p>
              </div>
              <button className="border border-gray-100 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all">
                View Leadership Focus
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[64px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-gray-50 vignette">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200" 
                alt="Observational leadership moment" 
                className="w-full h-full object-cover grayscale-[0.3] desaturate-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              <div className="absolute top-8 left-8 animate-badge">
                <div className="bg-white/95 backdrop-blur-sm p-5 rounded-3xl shadow-xl flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF8D80] rounded-full"></div>
                  <p className="text-[10px] font-black text-[#2E353D] uppercase tracking-widest">Cohort Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Emotional Tension Band */}
      <section className="py-32 bg-[#2E353D] text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
            Most managers are promoted without support. <br/>
            <span className="animate-underline">GROW fixes that.</span>
          </h2>
          <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
            Traditional training is episodic. GROW is continuous, providing support through the most difficult transition in a professional career.
          </p>
        </div>
      </section>

      {/* 3. The Diagnosis - Stacked Clarity Layout */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
        <div className="max-w-7xl mx-auto">
          {/* Full-width block on top */}
          <div className="w-full mb-20 border-l-4 border-[#FF8D80] pl-10 py-2">
            <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-6">The Diagnosis</p>
            <h2 className="text-4xl md:text-[68px] font-black leading-[1] tracking-tighter mb-6">
              Why traditional leadership training fails.
            </h2>
            <p className="text-gray-400 font-medium text-2xl leading-relaxed max-w-3xl">
              Most programs teach ideas. Very few change behavior.
            </p>
          </div>
          
          {/* Cards aligned to the same left edge */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                q: "Too Abstract", 
                a: "Frameworks don't survive real conversations. GROW is built for implementation."
              },
              { 
                q: "Too Episodic", 
                a: "Growth doesn't happen in workshops. It happens through bi-weekly reflection."
              },
              { 
                q: "Too Evaluative", 
                a: "Managers feel watched instead of supported. GROW is a safe space to fail and grow."
              }
            ].map(item => (
              <div key={item.q} className="bg-white p-12 rounded-[48px] shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-2xl font-black mb-6 tracking-tight text-slate-800">{item.q}</h4>
                <div className="w-8 h-[2px] bg-[#FF8D80] mb-6 opacity-30"></div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The GROW Arc - Progression */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            overline="The Experience" 
            title="How GROW actually builds leaders." 
            subtitle="A continuous loop of reflection and application that compounds leadership behavior over time."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24 relative">
            <div className="absolute top-[20px] left-0 right-0 hidden lg:block px-10">
              <div className="w-full h-px border-t border-gray-100 relative"></div>
            </div>

            {[
              { 
                t: "Role-specific starting point", 
                d: "Emerging leaders begin coaching around the live situations they're facing now. Not a generic curriculum." 
              },
              { 
                t: "Bi-weekly applied coaching", 
                d: "Sessions focus on live challenges, decisions, and people dynamics. Every session ends with a specific behavioral commitment." 
              },
              { 
                t: "Skills reinforced through repetition", 
                d: "Coaches track progress across core leadership muscles like communication, delegation, and accountability." 
              },
              { 
                t: "Signals HR can trust", 
                d: "Aggregate themes show where leadership is strengthening or breaking down.",
                note: "Individual conversations remain private."
              }
            ].map((step, idx) => (
              <div 
                key={step.t} 
                className={`flex flex-col gap-6 relative z-10 transition-all duration-700 ${activeStep === idx ? 'opacity-100' : 'opacity-20'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs transition-all duration-500 ${activeStep === idx ? 'bg-[#FF8D80] text-white shadow-xl shadow-orange-100' : 'bg-gray-100 text-gray-400'}`}>
                  {idx + 1}
                </div>
                <h4 className={`text-xl font-black leading-tight transition-colors ${activeStep === idx ? 'text-[#FF8D80]' : 'text-[#2E353D]'}`}>{step.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
                {step.note && <p className="text-[10px] font-bold text-gray-300 italic">{step.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Measurement Section */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
            <div>
              <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-8">Measurement Integrity</p>
              <h2 className="text-5xl md:text-[80px] font-black leading-[0.85] mb-10 tracking-tighter text-slate-900">
                Behavior change, <span className="text-[#FF8D80]">verified.</span>
              </h2>
              <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                <p>
                  Measurement only matters if it reflects how managers actually show up.
                </p>
                <p>
                  Boon GROW measures change in specific, role-relevant leadership behaviors across the lifecycle of the program.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-12 mt-16 pt-16 border-t border-slate-100">
                <div>
                  <h4 className="text-sm font-black text-[#FF8D80] uppercase tracking-widest mb-6">What we measure</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm font-bold text-slate-600">
                      <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                      Core leadership competencies
                    </li>
                    <li className="flex gap-3 text-sm font-bold text-slate-600">
                      <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                      Change over time at cohort level
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#FF8D80] uppercase tracking-widest mb-6">Verification</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm font-bold text-slate-600">
                      <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                      Pre/Post assessments
                    </li>
                    <li className="flex gap-3 text-sm font-bold text-slate-600">
                      <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                      Ongoing coach observation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <ArtifactContainer>
                <div className="p-8 md:p-12">
                   <div className="flex justify-between items-start mb-10">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900">Program Impact</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Measuring competency growth</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-[9px] font-black text-slate-400">
                        Aggregate View
                      </div>
                   </div>

                   <div className="flex flex-wrap gap-12 mb-12 border-b border-slate-50 pb-12" ref={countRef}>
                      <div>
                        <div className="text-[#FF8D80]/80 text-6xl font-black tracking-tighter">+{count}.0%</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Overall Competency Growth</div>
                      </div>
                      <div className="hidden sm:block w-px h-20 bg-slate-100"></div>
                      <div className="flex flex-col gap-6">
                        <div className="bg-white border border-slate-50 p-4 rounded-2xl shadow-sm min-w-[180px]">
                           <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg Score Gain</div>
                           <div className="text-xl font-black text-slate-900">+0.56</div>
                        </div>
                      </div>
                   </div>

                   <div className="space-y-1">
                      <ImpactMetricRow label="Giving & Receiving Feedback" before="2.14" after="3.29" change="+53%" width="92%" />
                      <ImpactMetricRow label="Delegation and Accountability" before="2.43" after="3.43" change="+41%" width="78%" />
                      <ImpactMetricRow label="Self Confidence & Imposter Syndrome" before="2.57" after="3.43" change="+33%" width="72%" />
                      <ImpactMetricRow label="Prioritization & Focus" before="2.60" after="3.45" change="+32%" width="65%" />
                   </div>
                </div>
              </ArtifactContainer>
              <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-2 px-6">Anonymized cohort data</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Leadership Muscles - Embodied Voice */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-white rounded-[80px] mx-4 md:mx-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-[#FF8D80] font-black text-[10px] tracking-widest uppercase mb-4">Core Competencies</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">The leadership muscles managers <span className="text-[#FF8D80]">need to build</span>.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Communication", d: "Being understood when it matters.", e: "Moving from talking to being understood across the team." },
              { t: "Accountability", d: "Setting expectations and holding the line.", e: "Creating clarity without defaulting to micro-management." },
              { t: "Delegation", d: "Building capability, not dependency.", e: "Moving from 'doing' to enabling others to execute." },
              { t: "Decision-making", d: "Acting with incomplete information.", e: "Navigating ambiguity with judgment and confidence." },
              { t: "Feedback", d: "Turning observation into action.", e: "Constructing growth-oriented conversations that stick." },
              { t: "Confidence", d: "Staying grounded under pressure.", e: "Stable presence during high-stakes organizational moments." }
            ].map(muscle => (
              <div key={muscle.t} className="bg-white p-12 rounded-[50px] border border-gray-100 hover:border-[#FF8D80]/20 hover:-translate-y-2 transition-all flex flex-col justify-between group relative overflow-hidden">
                <div className="mb-12">
                  <h4 className="text-2xl font-black mb-4 group-hover:text-[#FF8D80] transition-colors tracking-tight">{muscle.t}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{muscle.d}</p>
                  <p className="mt-6 text-xs text-gray-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 italic">
                    {muscle.e}
                  </p>
                </div>
                <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-slate-100 group-hover:bg-[#FF8D80]/40 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Integration - Redesigned System Diagram */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-6">Integration</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#2E353D]">GROW is one part of a larger system.</h2>
          </div>
          
          {/* System Row with directional logic */}
          <div className="relative max-w-6xl mx-auto mb-12">
            {/* Implied flow connector lines (desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-200 hidden lg:block -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {[
                { label: 'Boon SCALE', desc: 'Always-on coaching for the entire organization.', active: false, arrow: '←' },
                { label: 'Boon GROW', desc: 'Structured, measurable leadership development for managers.', active: true },
                { label: 'Boon EXEC', desc: 'Executive coaching for high-stakes leadership moments.', active: false, arrow: '→' }
              ].map((item) => (
                <div 
                  key={item.label} 
                  className={`p-10 rounded-[40px] border transition-all flex flex-col justify-center relative min-h-[220px] ${
                    item.active 
                      ? 'bg-[#FF8D80] text-white border-[#FF8D80] shadow-[0_40px_80px_-15px_rgba(255,141,128,0.3)] z-10 scale-105' 
                      : 'bg-white text-[#2E353D] border-slate-100 hover:border-slate-200'
                  }`}
                >
                  {item.arrow && (
                    <div className={`absolute top-1/2 ${item.arrow === '←' ? '-left-4' : '-right-4'} hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-100 text-slate-300 text-sm font-black -translate-y-1/2 shadow-sm`}>
                      {item.arrow}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <h4 className={`text-lg font-black mb-4 uppercase tracking-tight ${item.active ? 'text-white' : 'text-slate-900'}`}>{item.label}</h4>
                    <p className={`text-sm font-medium leading-relaxed ${item.active ? 'text-white/90' : 'text-slate-500'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boon Together: Spanning layer underneath */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-slate-100 p-10 rounded-[48px] flex flex-col lg:flex-row items-center justify-between gap-10 hover:border-[#FDB022]/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FDB022]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col relative z-10">
                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-[#FDB022] transition-colors">Boon TOGETHER</h4>
                <p className="text-sm font-medium text-slate-500 max-w-2xl mt-3 leading-relaxed">
                  Cohort and group experiences that reinforce GROW by turning individual coaching into shared leadership behavior across your teams.
                </p>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black text-[#FDB022] uppercase tracking-[0.3em] bg-[#FFF9E6] px-10 py-5 rounded-full border border-[#FDB022]/10 flex-shrink-0 relative z-10 shadow-sm">
                <span className="w-2 h-2 bg-[#FDB022] rounded-full animate-pulse"></span>
                Reinforcement Layer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA - Build managers who can lead people. */}
      <section className="py-64 px-6 text-center bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-5xl md:text-[88px] font-black tracking-tighter leading-[0.85] mb-12 text-slate-900">
             Build managers who <br />
             can lead people.
           </h2>
           <p className="text-xl text-gray-400 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
             A short conversation to see if GROW fits your organization.
           </p>
           <div className="flex flex-col items-center gap-4">
             <button className="bg-[#FF8D80] text-white px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all">
               Schedule a conversation
             </button>
             <p className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em]">Speak directly with our team. No sales pitch.</p>
           </div>
        </div>
      </section>
    </main>
  );
};
