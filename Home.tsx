
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
    name: "Amy Kelly Lauer",
    roleGroup: "EXEC",
    context: "Former SVP/GM at Sephora",
    quote: "I work with operators who are scaling fast and need a thinking partner who's been there.",
    img: "https://storage.googleapis.com/boon-public-assets/amykellylauer.jpg"
  },
  {
    name: "Colin Cosgrove",
    roleGroup: "GTM",
    context: "Former Head of Sales Operations at Vimeo",
    quote: "I coach GTM leaders to scale high-performance sales cultures without losing their human edge.",
    img: "https://storage.googleapis.com/boon-public-assets/Colin%20Cosgrove.png"
  },
  {
    name: "Olga Volgin",
    roleGroup: "TECH",
    context: "Principal Eng Mgr at Microsoft",
    quote: "I coach leaders navigating the gap between technical excellence and people leadership.",
    img: "https://storage.googleapis.com/boon-public-assets/Olga%20Volgin_New.png"
  }
];

const ImpactMetricRow: React.FC<{ label: string; before: string; after: string; change: string; width: string }> = ({ label, before, after, change, width }) => (
  <div className="grid grid-cols-[2fr_0.6fr_0.6fr_0.6fr_1.2fr] items-center py-4 border-b border-gray-100 text-xs group">
    <div className="text-gray-700 font-medium">{label}</div>
    <div className="text-gray-400 text-center">{before}</div>
    <div className="text-[#466FF6] font-semibold text-center">{after}</div>
    <div className="text-[#6CD893] font-semibold text-center">{change}</div>
    <div className="pl-4">
      <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#466FF6] to-[#6CD893] rounded-full transition-all duration-1000" style={{ width }}></div>
      </div>
    </div>
  </div>
);

const SYSTEM_ICONS = {
  SCALE: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  GROW: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  EXEC: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  TOGETHER: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
};

export const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  const [activeRoleGroup, setActiveRoleGroup] = useState('ALL');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.15 });

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
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
      `}</style>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-pink-50 via-pink-50/30 to-white relative overflow-hidden">
        {/* Background blur element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="reveal stagger-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The leadership<br />
              development system<br />
              <span className="italic text-blue-600 font-serif">you won't outgrow</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              Scale your leaders with the same rigor you scale your product. Boon delivers 1:1 leadership coaching through a cohesive system you can measure.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
              See how it works
            </button>
          </div>
          
          <div className="reveal stagger-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop" 
                alt="Leadership coaching session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators / Logo Marquee */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <p className="text-center text-sm font-semibold text-gray-500 mb-10 uppercase tracking-wide">
            Trusted by 8,000+ leaders in forward-thinking companies
          </p>
        </div>
        <div className="overflow-hidden relative">
          <div className="flex gap-16 animate-scroll" style={{ width: 'fit-content' }}>
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt="Company logo" 
                className="h-8 w-auto opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problem Statement Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#1a2332] to-[#2d3b52]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">The Problem</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Leadership development fails<br />
              <span className="italic text-blue-400 font-serif">for three predictable reasons</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 reveal stagger-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">You're managing 4x<br />their workload</h3>
              <p className="text-gray-400 leading-relaxed">
                Managers are stuck in firefighting mode, handling crises they should have delegated months ago. No time for development.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Executives get nervous<br />once you gift a workshop<br />and it's preggo</h3>
              <p className="text-gray-400 leading-relaxed">
                Training programs launch with fanfare, then disappear. Six months later, nothing has changed. No follow-through, no accountability.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-all">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Your CEO asks who's<br />improving and you don't<br />have an answer</h3>
              <p className="text-gray-400 leading-relaxed">
                You invested in development but have no real data on impact. Just anecdotes and survey scores that don't move the needle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution Section - "What if leadership development worked..." */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">The Boon Approach</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What if leadership development worked<br />
              like a cohesive, <span className="italic text-blue-600 font-serif">customized system</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Instead of scattered workshops and inconsistent coaching, what if your leaders developed through a unified system — one that scales with your org, measures real progress, and compounds results over time?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 reveal stagger-1">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">One system. Shared language. Ongoing reinforcement.</h3>
                  <p className="text-gray-600">Leaders develop in a cohesive environment with shared frameworks and continuous support.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Coaches deliver a playbook, not their personal coaching philosophy.</h3>
                  <p className="text-gray-600">Consistent methodology across all coaches ensures predictable outcomes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">You get board-level visibility into who's improving and where.</h3>
                  <p className="text-gray-600">Real-time data and insights show exactly how your investment is paying off.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership capability compounds — it doesn't plateau after three sessions.</h3>
                  <p className="text-gray-600">Designed for long-term growth, not short-term fixes.</p>
                </div>
              </div>
            </div>

            <div className="reveal stagger-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-700">System Architecture</span>
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Live View</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Coaching Sessions</span>
                        <span className="text-sm font-bold text-blue-600">94%</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Goal Completion</span>
                        <span className="text-sm font-bold text-green-600">87%</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Team Satisfaction</span>
                        <span className="text-sm font-bold text-purple-600">4.8/5</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600 rounded-full" style={{ width: '96%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 italic">Real-time dashboard showing leadership development metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. System Architecture - Four Pillars */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">The System Architecture</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              One leadership system.<br />
              <span className="italic text-blue-600 font-serif">Not four disconnected programs</span>.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Boon is built as a cohesive system — not a menu of services. Every pillar works together, reinforcing the same leadership behaviors that actually compound over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal stagger-1">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 hover:shadow-xl transition-all border border-blue-100 group cursor-pointer" onClick={() => setPage('SCALE')}>
              <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
                {SYSTEM_ICONS.SCALE}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Boon <span className="text-blue-600">SCALE</span></h3>
              <p className="text-gray-600 leading-relaxed mb-4">Build your foundation: manager-level coaching that scales across the org.</p>
              <div className="text-sm font-semibold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 hover:shadow-xl transition-all border border-green-100 group cursor-pointer" onClick={() => setPage('GROW')}>
              <div className="text-green-600 mb-6 transform group-hover:scale-110 transition-transform">
                {SYSTEM_ICONS.GROW}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Boon <span className="text-green-600">GROW</span></h3>
              <p className="text-gray-600 leading-relaxed mb-4">High-impact coaching for directors & senior leaders driving critical outcomes.</p>
              <div className="text-sm font-semibold text-green-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 hover:shadow-xl transition-all border border-purple-100 group cursor-pointer" onClick={() => setPage('EXEC')}>
              <div className="text-purple-600 mb-6 transform group-hover:scale-110 transition-transform">
                {SYSTEM_ICONS.EXEC}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Boon <span className="text-purple-600">EXEC</span></h3>
              <p className="text-gray-600 leading-relaxed mb-4">Strategic sparring for executives navigating high-stakes leadership decisions.</p>
              <div className="text-sm font-semibold text-purple-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 hover:shadow-xl transition-all border border-orange-100 group cursor-pointer" onClick={() => setPage('TOGETHER')}>
              <div className="text-orange-600 mb-6 transform group-hover:scale-110 transition-transform">
                {SYSTEM_ICONS.TOGETHER}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Boon <span className="text-orange-600">TOGETHER</span></h3>
              <p className="text-gray-600 leading-relaxed mb-4">Team coaching to align leadership teams and solve systemic challenges.</p>
              <div className="text-sm font-semibold text-orange-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Coaches Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">Boon's Operator Model</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Coaches who've <span className="italic text-blue-600 font-serif">done the job before</span>.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Former operators who understand the context your leaders are operating in — not career coaches who've never run a team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 reveal stagger-1">
            {COACHES.map((coach, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={coach.img} 
                    alt={coach.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{coach.name}</h4>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">{coach.context}</p>
                  <p className="text-gray-600 leading-relaxed italic">"{coach.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <p className="text-gray-600 mb-6">Trained and vetted from Boon's exclusive 150-person network: former directors and VPs at Nike, Amazon, Peloton, Meta, Intuit, P&G and more.</p>
            <button 
              onClick={() => setPage('COACHES')} 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              Explore the full coach network <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. Impact Metrics Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">Backed by data, not just promises</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See what's actually <span className="italic text-blue-600 font-serif">changing</span>.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Track what actually matters: resilience, decision clarity, team safety, conflict resolution. Not vanity metrics.
              </p>
              <p className="text-lg text-gray-900 font-semibold leading-relaxed mb-8">
                Your board gets anonymized, aggregate insights showing where leadership capability is strengthening across the organization.
              </p>
              <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Explore impact metrics in detail <span>→</span>
              </button>
            </div>

            <div className="reveal stagger-1">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Impact Dashboard</h3>
                    <p className="text-sm text-gray-500 mt-1">Q4 2024 Cohort Performance</p>
                  </div>
                  <div className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">VERIFIED</div>
                </div>

                <div className="space-y-1">
                  <ImpactMetricRow label="Emotional Resilience" before="2.4" after="3.8" change="+58%" width="94%" />
                  <ImpactMetricRow label="Manager Decision Clarity" before="2.8" after="3.9" change="+39%" width="82%" />
                  <ImpactMetricRow label="Psychological Safety" before="3.1" after="4.1" change="+32%" width="75%" />
                  <ImpactMetricRow label="Conflict Navigation" before="2.2" after="3.2" change="+45%" width="88%" />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 text-center">
                    Aggregate anonymized data from coached leaders over 6-month period
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#0f1f3d] via-[#1a2f52] to-[#0f1f3d] relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 reveal">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Built to help people and teams<br />
            <span className="italic text-blue-400 font-serif">actually grow</span>.
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Boon isn't a marketplace or a tool. It's leadership infrastructure — designed to scale with the humans running your company, not against them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
              Book a demo today
            </button>
            <button 
              onClick={() => setPage('STORY')} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              See how it works
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
