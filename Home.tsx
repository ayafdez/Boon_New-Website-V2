
import React, { useState, useEffect } from 'react';
import { Page, SectionHeading } from './Components';

const LOGOS = [
  "https://storage.googleapis.com/boon-public-assets/72andsunny.png",
  "https://storage.googleapis.com/boon-public-assets/doner.png",
  "https://storage.googleapis.com/boon-public-assets/censys.png",
  "https://storage.googleapis.com/boon-public-assets/consensys.png",
  "https://storage.googleapis.com/boon-public-assets/circle.png",
  "https://storage.googleapis.com/boon-public-assets/makeawish.png",
  "https://storage.googleapis.com/boon-public-assets/m3.png",
  "https://storage.googleapis.com/boon-public-assets/mastery.jpg",
  "https://storage.googleapis.com/boon-public-assets/heartland.png",
  "https://storage.googleapis.com/boon-public-assets/polen.png",
  "https://storage.googleapis.com/boon-public-assets/MAL.jpg",
  "https://storage.googleapis.com/boon-public-assets/usta.png",
  "https://storage.googleapis.com/boon-public-assets/nuvei.png",
  "https://storage.googleapis.com/boon-public-assets/vita.png",
  "https://storage.googleapis.com/boon-public-assets/mack.jpg"
];

const COACHES = [
  {
    name: "Olga Volgin",
    roleGroup: "TECH",
    context: "Former Principal Software Eng Manager at Microsoft",
    quote: "I coach leaders navigating the gap between technical excellence and people leadership.",
    img: "https://storage.googleapis.com/boon-public-assets/Olga%20Volgin_New.png"
  },
  {
    name: "Keith Cocking",
    roleGroup: "L&D",
    context: "Ex-Learning Strategy leader at The Home Depot",
    quote: "I help managers find their footing—especially when they're not sure what kind of leader they want to be.",
    img: "https://storage.googleapis.com/boon-public-assets/coking.png"
  },
  {
    name: "Amy Kelly Lauer",
    roleGroup: "EXEC",
    context: "Former SVP/GM at Sephora; eCommerce operator",
    quote: "I work with operators who are scaling fast and need a thinking partner who's been there.",
    img: "https://storage.googleapis.com/boon-public-assets/amykellylauer.jpg"
  },
  {
    name: "Carrie Atkin",
    roleGroup: "EXEC",
    context: "Former Sephora VP of Merchandise Planning",
    quote: "I help leaders align strategy with execution while maintaining their personal resilience.",
    img: "https://storage.googleapis.com/boon-public-assets/Carrie%20Atkin.jpg"
  },
  {
    name: "Colin Cosgrove",
    roleGroup: "GTM",
    context: "Former VP of Sales at Segment & GTM Advisor",
    quote: "I coach GTM leaders to scale high-performance sales cultures without losing their human edge.",
    img: "https://storage.googleapis.com/boon-public-assets/Colin%20Cosgrove.png"
  }
];

const ImpactMetricRow: React.FC<{ label: string; before: string; after: string; change: string; width: string }> = ({ label, before, after, change, width }) => (
  <div className="grid grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr_1fr] items-center py-5 border-b border-gray-50 text-[10px] font-black tracking-tight group">
    <div className="text-[#2E353D] group-hover:text-[#466FF6] transition-colors">{label}</div>
    <div className="text-gray-300">{before}</div>
    <div className="text-[#466FF6]">{after}</div>
    <div className="text-[#6CD893]">{change}</div>
    <div className="pl-6">
      <div className="h-1.5 bg-gray-50 rounded-full w-full overflow-hidden">
        <div className="h-full bg-[#6CD893] rounded-full transition-all duration-1000" style={{ width }}></div>
      </div>
    </div>
  </div>
);

const SYSTEM_ICONS = {
  SCALE: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" cy="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  GROW: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  EXEC: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  TOGETHER: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
};

export const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  const [activeRoleGroup, setActiveRoleGroup] = useState('EXEC');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.25 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
        .font-architectural {
          font-weight: 900;
          letter-spacing: -0.06em;
          line-height: 0.82;
        }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
      `}</style>

      {/* 1. Hero Section */}
      <section className="pt-40 pb-32 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-24 items-center">
          <div>
            <h1 className="reveal stagger-1 font-architectural text-7xl md:text-[115px] text-[#2E353D] mb-12">
              Headcount scales.<br />Leadership doesn't.
            </h1>

            <p className="reveal stagger-2 text-xl md:text-2xl text-gray-500 font-black leading-relaxed max-w-2xl mb-16">
              Boon builds leadership capacity as fast as companies grow.
            </p>

            <div className="reveal stagger-3 flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setPage('SOLUTIONS')} 
                className="bg-[#466FF6] text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-[#466FF6]/20 active:scale-95"
              >
                Explore the System
              </button>
              <button 
                onClick={() => setPage('WHY_BOON')} 
                className="border border-gray-100 text-[#2E353D] px-12 py-6 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all active:scale-95"
              >
                How It Works
              </button>
            </div>
          </div>

          <div className="reveal stagger-2 relative hidden lg:block">
            <div className="rounded-[100px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-gray-50 border border-gray-100 group">
              <video 
                autoPlay muted loop playsInline 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
              >
                <source src="https://storage.googleapis.com/boon-public-assets/Website%20Images/Boon_Website_Header_Revision_2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F24]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Section (Social Proof) */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="reveal text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-12 text-center">Trusted by teams building leaders at scale</p>
          <div className="reveal relative overflow-hidden group py-4">
            <div className="flex whitespace-nowrap">
              <div className="flex items-center gap-24 animate-scroll pr-24">
                {[...LOGOS, ...LOGOS].map((logo, idx) => (
                  <img 
                    key={idx} 
                    src={logo} 
                    alt="Partner Logo" 
                    className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mental Model Reset Block (Authoritative Thesis Block) */}
      <section className="py-64 px-6 md:px-12 lg:px-24 bg-[#F9FAFB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-32 items-center relative reveal">
          <div className="flex flex-col h-full justify-center">
            {/* 1. Eyebrow */}
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
              Structural Failure Mode
            </p>
            
            {/* 2. Primary Headline */}
            <h2 className="text-6xl md:text-[84px] font-black tracking-tighter leading-[0.82] text-[#2E353D] mb-20">
              Leadership development breaks when it’s&nbsp;fragmented.
            </h2>

            {/* 3. Staccato List with Aligned Bar */}
            <div className="flex gap-10 mb-20 items-stretch">
              <div className="w-1.5 bg-[#466FF6]/20 rounded-full"></div>
              <div className="space-y-6 text-2xl md:text-4xl text-[#2E353D]/60 font-black tracking-tight leading-none">
                <p>Coaching here.</p>
                <p>Training there.</p>
                <p>Feedback too late.</p>
              </div>
            </div>

            {/* 5. Resolution Anchor */}
            <div className="pl-12 relative border-l-2 border-gray-200">
              <div className="py-8">
                <p className="text-2xl md:text-4xl text-[#2E353D] font-black tracking-tight leading-tight max-w-2xl">
                  Leadership development only compounds when it’s connected.
                </p>
              </div>
            </div>
          </div>
          
          {/* 6. High-Fidelity System Illustration */}
          <div className="hidden lg:flex items-center justify-center h-full sticky top-32">
            <img 
              src="https://storage.googleapis.com/boon-public-assets/Website%20Images/Screenshot%202026-01-03%20at%201.17.35%E2%80%AFPM.png" 
              alt="The Boon Unified Leadership System" 
              className="w-full h-auto rounded-[64px] transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* 4. System Architecture Section */}
      <section className="py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-6xl mx-auto reveal">
            <p className="text-[#466FF6] font-black text-[10px] tracking-[0.5em] uppercase mb-8">The System Architecture</p>
            <h2 className="text-6xl md:text-[110px] font-black text-[#2E353D] mb-12 tracking-tighter leading-[0.85]">
              One leadership system. <br/>Not four disconnected programs.
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-500 leading-relaxed max-w-4xl mx-auto">
              Boon unifies coaching, manager development, executive support, and shared capability into a single system designed to compound as organizations scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'SCALE', name: 'SCALE', icon: SYSTEM_ICONS.SCALE, desc: 'Company-wide coaching for every employee.', color: '#466FF6' },
              { id: 'GROW', name: 'GROW', icon: SYSTEM_ICONS.GROW, desc: 'Applied development for manager cohorts.', color: '#FF8D80' },
              { id: 'EXEC', name: 'EXEC', icon: SYSTEM_ICONS.EXEC, desc: 'Strategic sparring for executive leadership.', color: '#2E353D' },
              { id: 'TOGETHER', name: 'TOGETHER', icon: SYSTEM_ICONS.TOGETHER, desc: 'Group alignment and shared capability.', color: '#FDB022' },
            ].map((item, idx) => (
              <button 
                key={item.id}
                onClick={() => setPage(item.id as Page)}
                className="reveal p-14 bg-white rounded-[64px] text-left border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all h-full flex flex-col justify-between group overflow-hidden"
              >
                <div className="absolute top-10 left-14 w-10 h-[2px]" style={{ backgroundColor: item.color }}></div>
                <div className="pt-6">
                  <div className="text-[#2E353D] mb-12 group-hover:scale-110 group-hover:text-[#466FF6] transition-all origin-left">{item.icon}</div>
                  <h3 className="text-3xl font-black">Boon <span style={{ color: item.color }}>{item.name}</span></h3>
                  <p className="text-gray-500 font-medium text-base leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-16 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#466FF6]">
                  Explore Pillar <span>→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dynamic "Operator" Coach Matcher */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-[#466FF6] font-black text-[10px] tracking-[0.5em] uppercase mb-10">The Network Layer</p>
            <h2 className="font-architectural text-5xl md:text-[84px] text-[#2E353D] mb-8">Operators coaching <span className="text-[#466FF6]">operators</span>.</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                Boon matches leaders with coaches who have operated at the same altitude. Former executives, functional leaders, and builders who understand the decisions your people are actually making.
              </p>
              <p className="text-lg md:text-xl text-[#2E353D] font-black tracking-tight">
                Coaches don’t operate independently. They deliver inside a unified system with shared standards, ongoing calibration, and measurable outcomes.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-16">
              {['EXEC', 'TECH', 'GTM', 'L&D'].map((group) => (
                <button 
                  key={group}
                  onClick={() => setActiveRoleGroup(group)}
                  className={`px-8 py-3 rounded-full text-[11px] font-black tracking-widest transition-all ${activeRoleGroup === group ? 'bg-[#466FF6] text-white shadow-xl shadow-blue-200' : 'bg-white text-gray-400 border border-gray-100 hover:border-blue-200'}`}
                >
                  {group} ROLES
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] text-center">Example operator coaches</p>
          </div>

          <div className="reveal grid md:grid-cols-3 gap-10">
            {COACHES.filter(c => c.roleGroup === activeRoleGroup || activeRoleGroup === 'ALL').map((coach, idx) => (
              <div key={idx} className="bg-white/80 opacity-90 grayscale-[0.2] hover:bg-white hover:opacity-100 hover:grayscale-0 rounded-[56px] overflow-hidden border border-gray-100/50 hover:shadow-2xl transition-all group p-10">
                <div className="aspect-square rounded-[40px] bg-gray-50 mb-10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={coach.img} alt={coach.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-black text-[#2E353D] mb-2">{coach.name}</h4>
                <p className="text-xs font-bold text-[#466FF6] uppercase tracking-widest">{coach.context}</p>
              </div>
            ))}
            {activeRoleGroup === 'EXEC' && (
              <div className="bg-blue-600 rounded-[56px] p-12 text-white flex flex-col justify-center items-center text-center">
                 <h4 className="text-3xl font-black mb-8">Explore the full 150+ coach network.</h4>
                 <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all">
                    See how Boon vets, matches, and governs coaching at scale.
                 </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Leadership Intelligence */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-32 items-center">
          <div className="reveal">
            <p className="text-[#466FF6] font-black text-[10px] tracking-[0.5em] uppercase mb-10">Leadership Intelligence</p>
            <h2 className="reveal font-architectural text-5xl md:text-[84px] text-[#2E353D] mb-12">
              Leadership signal without <span className="text-[#466FF6]">the noise</span>.
            </h2>
            <div className="reveal space-y-8 max-w-xl">
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                We don’t just measure activity. We measure behavioral change that actually compounds.
              </p>
              <p className="text-xl text-[#2E353D] font-bold leading-relaxed">
                CPOs get an anonymized, board-ready view of where leadership capability is strengthening across the organization.
              </p>
              <div className="pt-4">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setPage('SOLUTIONS'); }} 
                  className="inline-flex items-center gap-2 text-sm font-black text-[#466FF6] hover:gap-4 transition-all uppercase tracking-widest"
                >
                  See how leadership signal compounds over time <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <p className="reveal text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] ml-12">
              Aggregated cohort deltas measured across coached leaders over time.
            </p>
            <div className="reveal bg-white p-12 md:p-20 rounded-[80px] shadow-2xl border border-gray-100 relative overflow-hidden">
               <div className="relative z-10">
                   <div className="flex justify-between items-center mb-16">
                      <div>
                         <h3 className="text-3xl font-black text-[#2E353D] tracking-tight">System Impact Delta</h3>
                         <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-2">Aggregate Cohort Performance • Q1-Q2 2024</p>
                      </div>
                      <div className="text-[10px] font-black text-[#6CD893] bg-[#6CD893]/10 px-4 py-2 rounded-full border border-[#6CD893]/10">VERIFIED</div>
                   </div>

                   <div className="space-y-2">
                      <ImpactMetricRow label="Emotional Resilience" before="2.4" after="3.8" change="+58%" width="94%" />
                      <ImpactMetricRow label="Manager Decision Clarity" before="2.8" after="3.9" change="+39%" width="82%" />
                      <ImpactMetricRow label="Psychological Safety Delta" before="3.1" after="4.1" change="+32%" width="70%" />
                      <ImpactMetricRow label="Conflict Navigation" before="2.2" after="3.2" change="+45%" width="65%" />
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final High-Contrast CTA */}
      <section className="py-64 bg-[#1A1F24] px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-white" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-white)" />
          </svg>
        </div>
        <div className="reveal max-w-4xl mx-auto relative z-10">
           <h2 className="font-architectural text-6xl md:text-[110px] text-white mb-8 tracking-tighter leading-[0.85]">
             Built for how people <br /> <span className="text-[#466FF6] italic font-serif">actually grow</span>.
           </h2>
           <p className="text-xl md:text-2xl text-white/60 font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
             Boon is leadership infrastructure designed around human behavior, not tools or programs. So growth holds up as organizations scale.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="bg-[#466FF6] text-white px-16 py-8 rounded-full font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
               Book a Strategy Call
             </button>
             <button onClick={() => setPage('WHY_BOON')} className="bg-white/5 border border-white/10 text-white px-16 py-8 rounded-full font-black text-2xl hover:bg-white/10 transition-all">
               See how it works
             </button>
           </div>
        </div>
      </section>
    </main>
  );
};
