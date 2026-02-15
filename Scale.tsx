
import React, { useState } from 'react';

/**
 * Boon SCALE - High Fidelity Landing Page
 * Optimized for enterprise authority and professional restraint.
 */

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

// --- Shared Neutral Icon System (1.5px Stroke) ---
const IconWrapper = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#2E353D] ${className}`}>
    {children}
  </div>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.848 4.474 10.741 10.12 11.354a11.99 11.99 0 0010.12-11.354c0-1.308-.21-2.568-.598-3.748A11.959 11.959 0 0113.5 2.714z" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 01-.75-.75v-4.25m16.5 0a3 3 0 00-3-3H7.125a3 3 0 00-3 3m16.5 0V9A2.25 2.25 0 0018 6.75H6A2.25 2.25 0 003.75 9v5.15" />
  </svg>
);

const ActivityIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5" />
  </svg>
);

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className={`w-6 h-6 text-blue-600 transition-transform ${isOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-8 text-left group"
      >
        <h4 className="text-xl font-bold text-[#2E353D] group-hover:text-blue-600 transition-colors">{question}</h4>
        <PlusIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className="pb-8 text-gray-500 font-medium leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const BoonScalePage: React.FC = () => {
  return (
    <main className="bg-white overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Shape 1: Gray Waves Top Right */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(1).png" 
          className="absolute -top-24 -right-24 w-1/2 opacity-10 pointer-events-none select-none z-0"
          alt=""
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E6EDFF] text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase">
              <span className="w-1.5 h-1.5 bg-[#466FF6] rounded-full"></span>
              Introducing Boon Scale
            </div>
            <h1 className="text-6xl md:text-[84px] font-black text-[#2E353D] leading-[0.9] tracking-tighter mb-8">
              1:1 coaching for every employee.
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-4 max-w-xl">
              A confidential, usage-based coaching benefit designed for employees at every level, not just the top 5 percent.
            </p>
            <p className="text-lg text-gray-400 font-medium italic leading-relaxed mb-12 max-w-xl">
              Your people shouldn't have to wait for a crisis—or a promotion—to get support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#466FF6] text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                See How Boon SCALE Works <span className="text-xl">→</span>
              </button>
              <button className="border border-gray-100 text-[#2E353D] px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all">
                View Pricing & Use Cases
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[80px] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" 
                alt="Human-centric coaching interaction" 
                className="w-full h-full object-cover aspect-[1/1]"
              />
              <div className="absolute top-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm p-5 rounded-3xl shadow-2xl flex items-start gap-4 max-w-[320px]">
                  <div className="w-10 h-10 bg-[#E6F8F0] rounded-full flex items-center justify-center flex-shrink-0 text-[#4CD995]">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#2E353D]">Session Completed</p>
                    <p className="text-xs text-gray-400 italic font-medium">"Feeling much clearer on my goals."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Tension (Dark Section) */}
      <section className="bg-[#2E353D] py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Shape 5: Blue Flowing top left */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(5).png" 
          className="absolute -top-32 -left-32 w-1/2 opacity-12 pointer-events-none select-none z-0 rotate-45"
          alt=""
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-20 items-center relative z-10">
          <div>
            <p className="text-[#FF8D80] font-black text-[10px] tracking-widest uppercase mb-6">The Tension</p>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-10 tracking-tighter">
              HR Leaders are being asked to do the impossible.
            </h2>
            <div className="space-y-6 text-white/60 text-lg font-medium leading-relaxed max-w-lg">
              <p>Professional development is typically reserved for the top 5 percent, leaving the remaining workforce to navigate growth on their own.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'TM', title: 'Talent Mismatch', desc: 'Coaching options are either too clinical or too generic to stick.', color: 'text-[#FF8D80]' },
              { label: 'CP', title: 'Cost-Prohibitive', desc: 'Traditional coaching costs hundreds per hour per person.', color: 'text-[#FF8D80]' },
              { label: 'LE', title: 'Low Engagement', desc: 'EAPs routinely see engagement below 5 percent.', color: 'text-[#FF8D80]' },
              { label: 'OH', title: 'Operationally Heavy', desc: 'Internal programs take months to design and manage.', color: 'text-[#FF8D80]' },
            ].map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
                <div className={`mb-8 ${item.color}`}>
                   <div className="w-10 h-10 border-2 border-current rounded-xl flex items-center justify-center font-black text-xs">
                     {item.label}
                   </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Democratizing Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Shape 3: Gray Spiral Bottom Left */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(3).png" 
          className="absolute -bottom-32 -left-32 w-1/2 opacity-10 pointer-events-none select-none z-0"
          alt=""
        />
        <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter leading-tight mb-4">
            Democratizing coaching at scale.
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            A single coaching system employees actually use, when it matters.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
          {[
            { title: "100% Opt-In", icon: <UserIcon />, desc: "Available to everyone. Employees choose when and why to use coaching, keeping sessions relevant." },
            { title: "Strictly Confidential", icon: <ShieldIcon />, desc: "This is not performance management. We share high-level themes while individual sessions remain private." },
            { title: "Usage-Based", icon: <ZapIcon />, desc: "Pay only for completed sessions. No wasted spend on unused licenses." },
          ].map(card => (
            <div key={card.title} className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <IconWrapper className="mb-10">{card.icon}</IconWrapper>
              <h3 className="text-3xl font-black mb-6">{card.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1.5fr] gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-[#2E353D] leading-tight mb-4">A seamless experience for HR and Employees.</h2>
            <p className="text-xl text-gray-500 font-medium mb-16">We handle the complexity so you can focus on your people.</p>
            
            <div className="space-y-12">
              {[
                { n: "01", t: "Enroll & Launch", d: "Invite your organization in minutes. We integrate into existing workflows to make enrollment simple." },
                { n: "02", t: "Matching & 1:1 Delivery", d: "Employees are matched with experienced coaches based on goals and role context. Sessions are scheduled flexibly and delivered 1:1." },
                { n: "03", t: "Insights & Impact", d: "HR receives aggregate insight into growth and wellbeing trends, helping demonstrate ROI without compromising privacy." }
              ].map(step => (
                <div key={step.n} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-2">{step.t}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed max-w-md">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="rounded-[48px] overflow-hidden bg-white shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/boon-public-assets/boon_dash_2.png" 
                  alt="Boon Dashboard Experience" 
                  className="w-full h-auto object-contain" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* 5. Whole Person Support */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter leading-tight mb-8">One resource for the whole person.</h2>
          <p className="text-xl text-gray-500 font-medium">Coaching that supports people as humans, not just roles.</p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center mb-16 px-6">
           <p className="text-lg font-bold text-[#466FF6] leading-relaxed italic">
             Employees don’t need to choose between personal and professional growth. Neither does your organization.
           </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#F4F7FF] p-16 rounded-[60px] border border-blue-50/50">
             <IconWrapper className="mb-10 bg-white"><BriefcaseIcon /></IconWrapper>
             <h3 className="text-3xl font-black mb-12">Professional Growth</h3>
             <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {["Managing up and across", "Career pathing", "Time management", "Leadership confidence", "Conflict resolution"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#2E353D]">
                    <CheckIcon /> {item}
                  </div>
                ))}
             </div>
          </div>
          <div className="bg-[#FFF8F6] p-16 rounded-[60px] border border-orange-50/50">
             <IconWrapper className="mb-10 bg-white text-orange-600"><ActivityIcon /></IconWrapper>
             <h3 className="text-3xl font-black mb-12">Personal Wellbeing</h3>
             <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {["Stress management", "Work-life boundaries", "Interpersonal skills", "Sustaining energy over time", "Resilience training"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#2E353D]">
                    <CheckIcon /> {item}
                  </div>
                ))}
             </div>
          </div>
        </div>
        <div className="mt-16 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
          Employees don't need to "qualify" for sessions. If they have a goal or a challenge, they have a coach.
        </div>
      </section>

      {/* 6. Strategic Tool (Blue ROI Section) */}
      <section className="bg-blue-600 py-32 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
        {/* Background Shape 4: Blue Concentric Bottom Right */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png" 
          className="absolute -bottom-32 -right-32 w-1/2 opacity-12 pointer-events-none select-none z-0"
          alt=""
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-24 items-center relative z-10">
          <div className="grid md:grid-cols-2 gap-y-20 gap-x-16 border-t border-white/20 pt-20">
             {[
               { t: "High Engagement", d: "Utilization rates are consistently higher than traditional EAPs and benefits." },
               { t: "Confidential Data", d: "Aggregate trend reporting reveals what’s driving engagement and retention, safely." },
               { t: "Zero Admin", d: "We manage matching, scheduling, and billing end to end." },
               { t: "Instant Scale", d: "Supports hundreds or thousands of employees without adding headcount." }
             ].map(item => (
               <div key={item.t}>
                  <h4 className="text-2xl font-black mb-6">{item.t}</h4>
                  <p className="text-white/60 font-medium leading-relaxed">{item.d}</p>
               </div>
             ))}
          </div>
          <div>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-10">A strategic lever for retention and engagement.</h2>
            <p className="text-xl text-white/70 font-medium mb-12 leading-relaxed">Boon SCALE is not a perk. It is an investment in your people’s ability to navigate complexity, change, and growth.</p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-2xl">
              Download the HR Impact Report
            </button>
          </div>
        </div>
      </section>

      {/* 7. Modern Pricing */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
        <div className="max-w-5xl mx-auto text-center mb-20">
           <p className="text-blue-600 font-black text-[10px] tracking-widest uppercase mb-6">Modern Pricing</p>
           <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter leading-tight mb-8">Designed to fit real budgets.</h2>
           <p className="text-xl text-gray-500 font-medium leading-relaxed">Usage-based pricing that works for people leaders and finance teams.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[80px] shadow-sm relative overflow-hidden">
           <div className="space-y-12 mb-16 relative z-10">
              {[
                { t: "Usage-Based Model", d: "Pay only for completed sessions. No unused licenses." },
                { t: "Predictable Monthly Billing", d: "Fixed session pricing keeps budgets predictable as you scale." },
                { t: "No Long-Term Lock-in", d: "Flexible agreements aligned to growth and seasonality." }
              ].map(item => (
                <div key={item.t} className="flex gap-8">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6F8F0] flex items-center justify-center text-[#4CD995]">
                      <CheckIcon />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black mb-2">{item.t}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
           <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-gray-50 gap-8 relative z-10">
              <div className="text-left">
                <p className="text-3xl font-black text-[#2E353D]">No upfront fees.</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">Launch in under 1 week</p>
              </div>
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
                Get a Quote
              </button>
           </div>
        </div>
      </section>

      {/* 8. Trusted By - Animated Scroller */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-12 text-center">Trusted by people-first organizations</p>
            
            <div className="relative overflow-hidden group py-4">
              <div className="flex whitespace-nowrap">
                <div className="flex items-center gap-20 animate-scroll pr-20">
                  {[...LOGOS, ...LOGOS].map((logo, idx) => (
                    <img 
                      key={idx} 
                      src={logo} 
                      alt="Partner Logo" 
                      className="h-10 md:h-11 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500 flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
              {/* Fade masks */}
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#F4F7FF] p-16 rounded-[60px]">
               <p className="text-xl font-bold text-[#2E353D] leading-relaxed mb-12 italic">"Boon SCALE has fundamentally changed how we support our mid-level managers. Utilization rates are 6x higher than our previous EAP, and they finally have a safe place to grow."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                  <div>
                    <p className="text-sm font-black">Sarah Jenkins</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">VP of People, Global Logistics Co.</p>
                  </div>
               </div>
            </div>
            <div className="bg-gray-50 p-16 rounded-[60px]">
               <p className="text-xl font-bold text-[#2E353D] leading-relaxed mb-12 italic">"The ROI was obvious within the first quarter. We saw engagement up 24% among managers and coaching is now our #1 highest-rated benefit."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF8D80] rounded-full"></div>
                  <div>
                    <p className="text-sm font-black">Michael Chen</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Director of L&D, Fintech Startup</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter mb-4">Answers to your questions.</h2>
             <p className="text-gray-400 font-bold italic">Grounded, honest, and direct.</p>
          </div>
          <div className="border-t border-gray-100">
             {[
               { q: "Is this therapy?", a: "No. While our coaches are trained in mental health principles, Boon focuses on professional growth, personal resilience, and goal-attainment. It is proactive support rather than clinical treatment." },
               { q: "How is this different from an EAP?", a: "Most EAPs are reactive (used during a crisis) and clinical. Boon is proactive, usage-based, and highly engaging. Our utilization rates are typically 5-10x higher than traditional EAPs." },
               { q: "Will managers see session content?", a: "Absolutely not. Privacy is the foundation of Boon. Employers receive aggregate theme reports (e.g., '15% of sessions focused on conflict') but individual data is strictly confidential." },
               { q: "How do we ensure ROI?", a: "Through our 'Resilience Index™'. We track anonymous workforce sentiment and combine it with utilization data to show you exactly how the program is impacting burnout and retention." }
             ].map(faq => (
               <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
             ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="bg-blue-600 py-40 px-6 text-white text-center relative overflow-hidden">
        {/* Background Shape 4: Blue Concentric Bottom Right */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png" 
          className="absolute -bottom-44 -right-44 w-1/2 opacity-12 pointer-events-none select-none z-0"
          alt=""
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10">Support every employee without blowing up your budget.</h2>
          <p className="text-xl text-white/70 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">A short conversation to understand your organization and see if Boon SCALE is a fit. No pressure. No obligation.</p>
          <button className="bg-white text-blue-600 px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-all">
            Talk to Our Team
          </button>
        </div>
      </section>
    </main>
  );
};
