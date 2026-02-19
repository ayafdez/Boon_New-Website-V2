import React, { useState } from 'react';

/**
 * Our Story Page - High Fidelity
 * Focus: Narrative, founder-led, calm, and grounded.
 * Revised for sharper posture and structural conviction.
 */

const SectionLabel = ({ children }: { children?: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 bg-[#F4F7FF] text-[#466FF6] text-[10px] tracking-[0.2em] font-black px-4 py-2 rounded-full mb-8 uppercase border border-blue-100">
    {children}
  </div>
);

export const StoryPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="bg-white text-[#2E353D] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-8 max-w-5xl">
            Personal and professional growth <br />
            finally <span className="text-[#466FF6] italic font-serif">belong together</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mb-12">
            We learned this the hard way, inside high-pressure systems that optimized for performance but ignored the human cost. Boon delivers scalable, human coaching across entire organizations.
          </p>
          <button className="bg-[#466FF6] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
            Work with Boon
          </button>
        </div>
      </section>

      {/* Hero Image - Team Moment */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto aspect-[21/9] rounded-[60px] overflow-hidden bg-gray-100 shadow-sm">
          <img 
            src="https://storage.googleapis.com/boon-public-assets/Website%20Images/Screenshot-2024-10-22-at-10.18.38%E2%80%AFPM.png" 
            alt="The Boon founders and team in a warm, human moment" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* 2. Founder Story */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-video bg-[#2E353D] rounded-[40px] shadow-2xl relative overflow-hidden group cursor-pointer border border-white/5">
            {isPlaying ? (
              <video 
                src="https://storage.googleapis.com/boon-public-assets/the_boon_story.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-cover"
              />
            ) : (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center text-white/20 font-black text-sm uppercase tracking-widest group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#466FF6]/20 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-[#466FF6] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white text-[11px] tracking-[0.3em]">Founder Story: Alex Simmons</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <SectionLabel>Why Boon Exists</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
              A transition from high finance <br /> to human development.
            </h2>
            <div className="space-y-6 text-gray-500 text-lg font-medium leading-relaxed">
              <p className="text-[#2E353D] font-bold">
                We learned this the hard way, inside systems that optimized for output and ignored the people producing it.
              </p>
              <p>
                Alex Simmons spent the early part of his career in the high-stakes world of finance. It was a system optimized for output, not durability. Performance was measured relentlessly. Leadership capability wasn’t measured at all.
              </p>
              <p>
                Like many in high-growth environments, the weight of the work eventually led to burnout. It was a turning point that felt both personal and structural. During this period, Alex found a coach, a professional partner who helped him navigate the transition from reaction to intention.
              </p>
              <p>
                That experience revealed a structural failure in how organizations develop leaders. Coaching worked, but only for the few. Everyone else was expected to figure it out on their own, under pressure. Boon was built to bridge that gap, making world-class support a standard resource for every level of an organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Why */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The Philosophy</SectionLabel>
          <h3 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter">Growth requires grounding.</h3>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <h4 className="text-xl font-black mb-4">Performance requires awareness</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Without self-reflection, performance eventually collapses under its own weight. We provide the space to build the mental models that prevent burnout.</p>
            </div>
            <div>
              <h4 className="text-xl font-black mb-4">Organizational resilience is built or broken in the middle.</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Strategy doesn't scale; behavior does. We ensure that entry-level managers and individual contributors have the tools to lead themselves.</p>
            </div>
            <div>
              <h4 className="text-xl font-black mb-4">Generic programs create insight. Personalized coaching creates behavior change.</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Workshops don't change how people work. One-to-one coaching addresses the specific complexity of a person's daily decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision */}
      <section className="py-48 px-6 md:px-12 lg:px-24 text-center bg-white relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-[84px] font-black leading-[0.95] tracking-tighter">
            “A more resilient world built by people who can think clearly, lead others, and <span className="text-[#466FF6]">hold under pressure</span>.”
          </h2>
        </div>
        <div className="mt-20 w-px h-32 bg-gray-100 mx-auto"></div>
      </section>

      {/* 5. Community & Impact */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionLabel>Impact</SectionLabel>
          <div className="grid md:grid-cols-3 gap-12 w-full mt-10 text-center">
             <div className="p-12 bg-white rounded-[50px] shadow-sm border border-gray-100">
                <div className="text-6xl font-black text-[#466FF6] mb-4">100+</div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Organizations supported through sustained engagements</p>
             </div>
             <div className="p-12 bg-white rounded-[50px] shadow-sm border border-gray-100">
                <div className="text-6xl font-black text-[#466FF6] mb-4">Dozens</div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Industries navigating complexity</p>
             </div>
             <div className="p-12 bg-white rounded-[50px] shadow-sm border border-gray-100">
                <div className="text-6xl font-black text-[#466FF6] mb-4">All</div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Levels where leadership behavior matters</p>
             </div>
          </div>
          <p className="mt-16 text-gray-400 max-w-2xl text-center font-medium leading-relaxed">
            We focus on long-term credibility over growth hype. Our impact is measured in the retention, wellbeing, and performance of the thousands of humans who use Boon every day.
          </p>
        </div>
      </section>

      {/* 6. How we work reflects how we coach. */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">How we work <br /> reflects how we coach.</h2>
            <ul className="space-y-8">
              {[
                { t: "Remote-first culture", d: "We prioritize work-life integration and trust our team to manage their own energy." },
                { t: "Emphasis on personal growth", d: "We practice what we preach. Every employee has access to our coaching platform." },
                { t: "Supported, not extracted", d: "Our business is built on human capability. We invest in our coaches and our team's longevity." },
                { t: "Autonomy with accountability", d: "We value owners who are comfortable with ambiguity and driven by outcomes." }
              ].map(item => (
                <li key={item.t} className="flex gap-6 group">
                   <div className="mt-1 w-6 h-6 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:border-[#466FF6] transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#466FF6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                   <div>
                      <h4 className="text-xl font-black mb-1">{item.t}</h4>
                      <p className="text-gray-400 text-sm">{item.d}</p>
                   </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/5] bg-gray-50 rounded-[80px] overflow-hidden flex items-center justify-center p-20">
             {/* Illustration Placeholder */}
             <div className="w-full h-full bg-white rounded-[60px] shadow-inner border border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 text-gray-300">
                <svg className="w-24 h-24 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-[10px] font-black uppercase tracking-widest">Illustration: Remote Synergy</span>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Voices from Boon */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#E6EDFF]/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-12 opacity-20">“</div>
          <p className="text-2xl md:text-4xl font-black leading-tight mb-12 tracking-tight">
            “The most authentic professional environment I've ever been part of. We don't hide from the hard parts of scaling. We coach through them.”
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-[#466FF6] rounded-full mb-2"></div>
            <p className="text-sm font-black uppercase tracking-widest text-[#2E353D]">Sarah Henderson</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Operations Lead</p>
          </div>
        </div>
      </section>

      {/* 8. Leadership Team */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">The team behind the mission.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: "Alex Simmons", role: "Co-Founder & CEO", img: "AS", desc: "Systems thinker" },
              { name: "Chris Henrichs", role: "Co-Founder", img: "CH", desc: "Operator-coach" },
              { name: "Robin Axelrod", role: "Clinical Advisor", img: "RA", desc: "Clinical rigor" },
              { name: "Jessica Taylor", role: "Head of Coaching", img: "JT", desc: "Coach network architect" },
            ].map(leader => (
              <div key={leader.name} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-50 rounded-full mb-8 flex items-center justify-center text-gray-200 font-black text-4xl border border-gray-100 grayscale hover:grayscale-0 transition-all cursor-pointer">
                  {leader.img}
                </div>
                <h4 className="text-xl font-black mb-1">{leader.name}</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{leader.role}</p>
                <p className="text-[#466FF6] text-[10px] font-black uppercase tracking-widest italic">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Closing CTA */}
      <section className="py-48 px-6 text-center border-t border-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-tight">
            Growth is not a perk. <br />
            <span className="text-[#466FF6] italic font-serif">It’s the work.</span>
          </h2>
          <button className="bg-[#466FF6] text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-all">
            Partner with Boon
          </button>
        </div>
      </section>
    </main>
  );
};
