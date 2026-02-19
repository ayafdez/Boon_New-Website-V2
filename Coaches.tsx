
import React, { useState } from 'react';
import { SectionHeading } from './Components';

/**
 * For Coaches Page - High Fidelity
 * Targeted at experienced, professional practitioners.
 * Focus: Craft, respect, and organizational impact.
 */

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#466FF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-[#466FF6]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V12C2.017 12.5523 1.56928 13 1.017 13H-0.983C-1.53528 13 -1.983 12.5523 -1.983 12V9C-1.983 7.34315 -0.63985 6 1.017 6H7.017C8.67385 6 10.017 7.34315 10.017 9V15C10.017 17.7614 7.77843 20 5.017 20H2.017V21Z" />
  </svg>
);

const Testimonial: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <div className="bg-white p-12 rounded-[48px] border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all h-full">
    <div>
      <QuoteIcon />
      <p className="text-xl font-bold text-[#2E353D] leading-relaxed mb-10 italic">"{quote}"</p>
    </div>
    <div>
      <p className="text-sm font-black text-[#2E353D] uppercase tracking-widest">{author}</p>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{role}</p>
    </div>
  </div>
);

export const ForCoachesPage: React.FC = () => {
  return (
    <main className="bg-white text-[#2E353D] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F4F7FF] text-[#466FF6] text-[10px] tracking-[0.2em] font-black px-4 py-2 rounded-full mb-10 uppercase border border-blue-100">
            For Practitioners
          </div>
          <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            For the <span className="text-[#466FF6] italic font-serif">discerning</span> practitioner.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Boon partners with experienced coaches who care more about depth, judgment, and long-term impact than session volume or algorithmic matching.
          </p>
          <div className="mt-16 flex flex-col sm:flex-row gap-6">
            <button className="bg-[#466FF6] text-white px-10 py-5 rounded-[15px] font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
              Apply to Join the Partnership
            </button>
            <button className="border border-gray-100 px-10 py-5 rounded-[15px] font-black text-xl hover:bg-gray-50 transition-all">
              Our Coaching Standards
            </button>
          </div>
        </div>
      </section>

      {/* 2. Why Coaches Work With Boon */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Partnership</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
              We respect the craft of coaching.
            </h2>
            <div className="space-y-8 text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
              <p>
                We don’t treat coaches as interchangeable contractors. We treat you as a strategic partner in organizational development.
              </p>
              <p>
                That means intentional matching, real client context, and long-term engagements. We handle the operational overhead so you can focus on the work that actually matters.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
             {[
               { t: "Intentional Matching", d: "Match based on leadership stakes, industry context, and style. Not availability." },
               { t: "Deep Organizational Context", d: "You coach with clarity on culture, constraints, and what success actually means." },
               { t: "Autonomy & Respect", d: "No scripts. No performative frameworks. We trust your training and judgment." }
             ].map(item => (
               <div key={item.t} className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-black mb-4">{item.t}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. The Work - Scope of Engagement */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <SectionHeading 
            overline="The Scope" 
            title="Meaningful work across the leadership spectrum." 
            subtitle="Boon coaches work with leaders at different moments of responsibility and complexity. The work evolves. The standards don’t."
          />
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
           {[
             { l: "Boon EXEC", d: "Senior-level sparring focusing on enterprise-level stakes, strategic ambiguity, and presence." },
             { l: "Boon GROW", d: "Structured development for managers navigating the transition from contributor to leader." },
             { l: "Boon SCALE", d: "Everyday leadership and personal effectiveness coaching for employees at every organizational level." }
           ].map(item => (
             <div key={item.l} className="p-12 border border-gray-100 rounded-[50px] hover:border-[#466FF6]/20 transition-all group">
                <div className="text-xs font-black tracking-widest text-[#466FF6] uppercase mb-4">{item.l}</div>
                <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 4. What We Look For - The Bar */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeading overline="THE BAR" title="Rigor meets real-world experience." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10">
            {[
              { t: "Certified Expertise", d: "ICF accreditation (ACC, PCC, or MCC) is foundational, not optional." },
              { t: "Operating Context", d: "Experience inside real organizations where decisions have consequences." },
              { t: "Professional Presence", d: "The ability to hold space with senior leaders calmly and credibly." },
              { t: "Strong Boundaries", d: "Clear judgment around where coaching ends and other modalities begin." }
            ].map(item => (
              <div key={item.t} className="bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col justify-between shadow-sm">
                 <div>
                    <h5 className="text-xl font-black mb-4">{item.t}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.d}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clear Alignment - The Trust Builder */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div className="rounded-[80px] overflow-hidden grayscale brightness-75 aspect-[4/5] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" alt="Professional Focus" className="w-full h-full object-cover" />
           </div>
           <div>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-12">Clear alignment. <br/>No games.</h3>
              <div className="space-y-12">
                 {[
                   { t: "Not a Marketplace", d: "We don't focus on high-volume 'matches.' We focus on selective, high-quality partnerships." },
                   { t: "No Selling Access", d: "We don’t sell access. We compensate you fairly for judgment, presence, and results." },
                   { t: "Not a Scripted Service", d: "We don't dictate how you coach. We provide the context; you provide the craft." }
                 ].map(item => (
                   <div key={item.t} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 font-black group-hover:border-[#466FF6] group-hover:text-[#466FF6] transition-all">✕</div>
                      <div>
                        <h6 className="text-2xl font-black mb-2">{item.t}</h6>
                        <p className="text-gray-400 font-medium leading-relaxed">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. Testimonials - Signal over Enthusiasm */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-4">Voices from the Partnership</p>
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Built by practitioners, for practitioners.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial 
              quote="Boon gives me thoughtful clients, real context, and a backend team that actually has my back."
              author="Michael P."
              role="PCC Certified Coach"
            />
            <Testimonial 
              quote="I appreciate the depth of client matching. I'm paired with leaders facing the exact enterprise-level stakes I spent my career navigating."
              author="Elena R."
              role="Executive Leadership Coach"
            />
            <Testimonial 
              quote="The operational freedom is the biggest value. I spend my time on the craft, not on scheduling or chasing administrative threads."
              author="David K."
              role="ACC Certified Coach"
            />
          </div>
        </div>
      </section>

      {/* 7. Support for Coaches */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading overline="Support" title="A better way to practice." />
          <div className="grid md:grid-cols-3 gap-12">
             {[
               { t: "Admin Freedom", d: "A seamless platform for scheduling, session notes, and billing, managed entirely by the Boon team." },
               { t: "Fair Compensation", d: "Transparent, professional rates that reflect your experience and the value of your judgment." },
               { t: "Community Depth", d: "Access to a global network of peers who share our commitment to rigorous, systemic development." }
             ].map(item => (
               <div key={item.t} className="group">
                  <div className="mb-6 group-hover:scale-110 transition-transform"><CheckIcon /></div>
                  <h5 className="text-xl font-black mb-4">{item.t}</h5>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="bg-[#466FF6] py-40 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-[84px] font-black tracking-tighter leading-[0.85] mb-12">Do your <span className="text-white/40 italic font-serif">best work</span>, supported.</h2>
          <p className="text-xl text-white/70 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            We are always looking for experienced practitioners who share our belief in democratized, high-quality coaching.
          </p>
          <div className="flex flex-col items-center gap-6 justify-center">
            <button className="bg-white text-[#466FF6] px-12 py-6 rounded-[15px] font-black text-lg shadow-2xl hover:scale-105 transition-all">
              Apply to the Partnership
            </button>
            <p className="text-white/50 text-[11px] font-black uppercase tracking-[0.2em]">
              We review applications carefully. Not every coach is a fit.
            </p>
          </div>
          <div className="mt-16 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
            Current Review Cycle: Q2 2024 • Average response: 2-3 weeks
          </div>
        </div>
      </section>
    </main>
  );
};
