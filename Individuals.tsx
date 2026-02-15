
import React from 'react';
import { SectionHeading } from './Components';

/**
 * For Individuals Page - High Fidelity
 * Targeted at employees and end-users of the Boon system.
 * Focus: Safety, practicality, and personal growth.
 */

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#466FF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);

export const ForIndividualsPage: React.FC = () => {
  return (
    <main className="bg-white text-[#2E353D] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E6EDFF] text-[#466FF6] text-[10px] tracking-[0.2em] font-black px-4 py-2 rounded-full mb-10 uppercase border border-blue-100">
            Professional Support
          </div>
          <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            A dedicated space to <br />
            <span className="text-[#466FF6] italic font-serif">think clearly</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mb-16">
            Boon provides you with a professional 1:1 coach to help you navigate the complexity of your career. It’s a practical, private resource for your growth, supported by your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#466FF6] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
              Find Your Coach
            </button>
            <button className="border border-gray-200 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* 2. Why Coaching? - Normalizing the need */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Opportunity</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
              Coaching is for the moments that matter.
            </h2>
            <div className="space-y-8 text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
              <p>
                Work is often ambiguous. Whether you’re stepping into a new role, managing a difficult project, or trying to find a sustainable balance, you don’t have to figure it out alone.
              </p>
              <p>
                A coach doesn't tell you what to do. They help you process your own ideas, sharpen your skills, and approach your work with more intentionality and less stress.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
             {[
               { t: "Navigating Transitions", d: "Moving from individual contributor to manager, or taking on a high-stakes new project." },
               { t: "Solving Friction", d: "Handling difficult conversations or navigating complex team dynamics with confidence." },
               { t: "Building Sustainability", d: "Setting healthy boundaries and managing stress before it leads to burnout." }
             ].map(item => (
               <div key={item.t} className="p-10 bg-[#F9FAFB] rounded-[40px] border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-black mb-4">{item.t}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. What It Is - Clarity & Tone */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#2E353D] text-white rounded-[60px] mx-4 md:mx-10 my-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <SectionHeading 
            light
            overline="The Experience" 
            title="A 1:1 partnership for your growth." 
            subtitle="Boon coaching is not therapy, and it’s not a performance review. It is a structured, professional conversation focused on you."
          />
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
           {[
             { icon: "🎯", t: "Focus on Action", d: "Every session is designed to leave you with a clear perspective or a practical next step." },
             { icon: "🧠", t: "Safe Exploration", d: "A judgment-free zone to stress-test ideas and vet challenges before you act." },
             { icon: "🛠️", t: "Skill Building", d: "Developing the 'human' skills like influence, empathy, and resilience that drive your career." }
           ].map(item => (
             <div key={item.t} className="text-center">
                <div className="text-4xl mb-8">{item.icon}</div>
                <h4 className="text-2xl font-black mb-4">{item.t}</h4>
                <p className="text-white/40 font-medium leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 4. Common Themes - Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">What You Can Work On</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Real topics for real work.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { t: "Confidence & Decision Making", d: "Trusting your judgment in high-pressure moments and overcoming imposter syndrome." },
              { t: "Communication & Relationships", d: "Navigating feedback, managing up, and building influence across your team." },
              { t: "Managing Stress & Boundaries", d: "Creating a sustainable rhythm that protects your energy and prevents burnout." },
              { t: "Career Pathing & Growth", d: "Identifying your strengths and mapping out your next professional milestone." }
            ].map(theme => (
              <div key={theme.t} className="flex gap-10 p-12 bg-gray-50 rounded-[60px] border border-gray-100 hover:bg-white hover:border-[#466FF6]/20 transition-all group">
                 <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <CheckIcon />
                 </div>
                 <div>
                    <h4 className="text-2xl font-black mb-4 group-hover:text-[#466FF6] transition-colors">{theme.t}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">{theme.d}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Privacy - The Trust Builder */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#E6EDFF]/50 border-y border-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-24 items-center">
           <div>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">100% Private. <br />Always.</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Trust is the foundation of coaching. While your company provides the resource, your conversations are strictly confidential.
              </p>
           </div>
           <div className="bg-white p-12 md:p-20 rounded-[80px] shadow-sm space-y-12">
              {[
                { t: "Confidential Conversations", d: "Your coach will never share what you discuss with your manager or HR. Your sessions are a safe, separate space." },
                { t: "Anonymous Reporting", d: "Employers only see aggregate, high-level data (e.g., '10% of people are focused on growth') to help them support the whole team better." },
                { t: "Your Choice", d: "Coaching is entirely opt-in. You decide when to start, what to talk about, and when you’re done." }
              ].map(item => (
                <div key={item.t} className="flex gap-8">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6F8F0] flex items-center justify-center text-[#4CD995]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                   </div>
                   <div>
                      <h4 className="text-2xl font-black mb-2">{item.t}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. How To Get Started */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading overline="Next Steps" title="Simple to start. Easy to use." />
          <div className="grid md:grid-cols-3 gap-12">
             {[
               { n: "01", t: "Access the Portal", d: "Use your company’s custom link or SSO to log in to the Boon platform." },
               { n: "02", t: "Find Your Match", d: "Answer a few brief questions about your goals, and we’ll match you with a certified coach." },
               { n: "03", t: "Book a Session", d: "Choose a time that fits your schedule. Most sessions are 30-45 minutes and happen via video." }
             ].map(step => (
               <div key={step.n} className="flex flex-col items-center text-center p-12 bg-gray-50 rounded-[60px]">
                  <div className="w-16 h-16 rounded-full bg-[#466FF6] text-white flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-blue-100">
                    {step.n}
                  </div>
                  <h5 className="text-2xl font-black mb-4">{step.t}</h5>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{step.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-[#466FF6] py-40 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-[84px] font-black tracking-tighter leading-[0.85] mb-12">Your growth is <span className="text-white/40 italic font-serif">your</span> investment.</h2>
          <p className="text-xl text-white/70 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Take a moment for yourself. If your company offers Boon, you have access to world-class coaching today.
          </p>
          <button className="bg-white text-[#466FF6] px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-all">
            Find Your Coach
          </button>
          <div className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
            Confidential • ICF Certified • Professional Development
          </div>
        </div>
      </section>
    </main>
  );
};
