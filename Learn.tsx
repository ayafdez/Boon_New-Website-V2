
import React from 'react';
import { SectionHeading, Page } from './Components';
import { CaseStudiesPage as CaseStudiesHub } from './case-studies/CaseStudies';

/**
 * Boon LEARN - High Fidelity Hub & Sub-pages
 */

const PlayIcon = () => (
  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
  </svg>
);

const LEARN_ICONS = {
  BLOG: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  LIVE: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  PODCAST: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  CASES: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  RESOURCES: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
};

// --- 1. Main Hub ---
export const LearnPage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  return (
    <main className="bg-white text-[#2E353D] overflow-hidden">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]/50 text-center relative overflow-hidden">
        {/* Background Shape 1: Gray Waves Top Right */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(1).png" 
          className="absolute -top-24 -right-24 w-1/2 opacity-10 pointer-events-none select-none z-0"
          alt=""
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white text-[#466FF6] text-[10px] tracking-[0.2em] font-black px-4 py-2 rounded-full mb-10 uppercase border border-blue-50">
            Boon Learning Hub
          </div>
          <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-10 max-w-5xl mx-auto">
            The perspective to <br />
            <span className="text-[#466FF6] italic font-serif">lead better</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            A central repository of research, conversations, and toolkits designed for the people-first leader.
          </p>
        </div>
      </section>

      {/* Grid of Sub-sections */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <h2 className="sr-only">Explore Our Resources</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 'LEARN_BLOG', t: 'Boon Blog', d: 'Insights on leadership, culture, and resilience.', icon: LEARN_ICONS.BLOG },
            { id: 'LEARN_LIVE', t: 'Boon Live', d: 'Interactive webinars and recorded masterclasses.', icon: LEARN_ICONS.LIVE },
            { id: 'LEARN_PODCAST', t: 'The Podcast', d: 'Conversations with practitioners building the future of work.', icon: LEARN_ICONS.PODCAST },
            { id: 'LEARN_CASES', t: 'Case Studies', d: 'Real evidence of how Boon drives impact.', icon: LEARN_ICONS.CASES },
            { id: 'LEARN_RESOURCES', t: 'Resources', d: 'Guides, reports, and ROI calculators for HR leaders.', icon: LEARN_ICONS.RESOURCES },
          ].map(card => (
            <button 
              key={card.id}
              onClick={() => setPage(card.id as Page)}
              className="p-12 bg-gray-50 rounded-[50px] text-left border border-gray-100 hover:border-[#466FF6] hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className="text-[#2E353D] mb-8 group-hover:scale-110 group-hover:text-[#466FF6] transition-all origin-left">{card.icon}</div>
              <h3 className="text-2xl font-black mb-4">{card.t}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-10">{card.d}</p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#466FF6]">
                Explore Page <span>→</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

// --- 2. Boon Blog ---
export const BlogPage: React.FC = () => (
  <main className="bg-white">
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading overline="Boon Blog" title="The Practitioner's Ledger" subtitle="Weekly insights on the intersection of organizational performance and human resilience." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {[
            { title: "Building a Culture of Feedback", cat: "Leadership", date: "May 12, 2024" },
            { title: "The Science of Sustainable Focus", cat: "Productivity", date: "May 08, 2024" },
            { title: "Managing Layoffs with Empathy", cat: "HR Strategy", date: "May 02, 2024" },
            { title: "The ROI of Preventative Coaching", cat: "Data", date: "Apr 28, 2024" },
            { title: "Remote Culture: Beyond Zoom Happy Hours", cat: "Culture", date: "Apr 22, 2024" },
            { title: "Founder Burnout is an Org Risk", cat: "Founders", date: "Apr 15, 2024" },
          ].map(post => (
            <div key={post.title} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-[40px] bg-gray-200 mb-8 overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${Math.floor(Math.random()*100000)}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
              </div>
              <div className="text-[10px] font-black text-[#466FF6] uppercase tracking-widest mb-2">{post.cat} • {post.date}</div>
              <h3 className="text-2xl font-black leading-tight group-hover:text-[#466FF6] transition-colors">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

// --- 3. Boon Live ---
export const LivePage: React.FC = () => (
  <main className="bg-[#2E353D] text-white">
    <section className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Shape 4: Blue Concentric Bottom Right */}
      <img 
        src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png" 
        className="absolute -bottom-44 -right-44 w-1/2 opacity-12 pointer-events-none select-none z-0"
        alt=""
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading light overline="Boon Live" title="Interactive Masterclasses" subtitle="Join live conversations with industry leaders or watch our archived sessions on-demand." />
        <div className="mt-20 relative aspect-video rounded-[60px] overflow-hidden group mb-20 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover opacity-50 grayscale group-hover:opacity-70 transition-all" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
            <div className="w-20 h-20 bg-[#466FF6] rounded-full flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform">
              <PlayIcon />
            </div>
            <div className="bg-[#466FF6] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Live Next Tuesday</div>
            <h3 className="text-4xl md:text-6xl font-black mb-4">Navigating the Feedback Gap</h3>
            <p className="text-white/60 font-medium max-w-xl">Join Dr. James Aris to discuss why managers avoid hard conversations and how coaching fixes it.</p>
            <button className="mt-10 bg-white text-[#2E353D] px-10 py-4 rounded-[15px] font-black text-lg">Reserve My Seat</button>
          </div>
        </div>
        <h3 className="text-2xl font-black mb-12">Past Sessions</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {["Sustainable Scaling", "The Resilience Index", "Managing HR Burnout"].map(t => (
            <div key={t} className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
              <div className="aspect-video bg-white/5 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white/20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
              </div>
              <h4 className="text-xl font-black mb-2">{t}</h4>
              <p className="text-white/40 text-sm">60 mins • Webinar</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

// --- 4. Podcast ---
export const PodcastPage: React.FC = () => (
  <main className="bg-white">
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading overline="Podcast" title="The Human Layer" subtitle="Long-form conversations with the people building cultures that endure." />
        <div className="grid md:grid-cols-1 gap-10 mt-20">
          {[
            { ep: "48", title: "The ROI of Boundaries", guest: "Sarah Williams, Chief People Officer at Zendesk", length: "42 min" },
            { ep: "47", title: "Coaching through a Crisis", guest: "Mark Thompson, VP Talent at Stripe", length: "38 min" },
            { ep: "46", title: "The Future of L&D", guest: "Elena Rossi, Head of Growth at Notion", length: "51 min" },
          ].map(episode => (
            <div key={episode.ep} className="bg-gray-50 p-10 rounded-[60px] flex flex-col md:flex-row gap-10 items-center border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
              <div className="w-32 h-32 bg-[#466FF6] rounded-full flex items-center justify-center text-white text-3xl font-black shadow-lg">
                {episode.ep}
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-black text-[#466FF6] uppercase tracking-widest mb-2">Episode {episode.ep} • {episode.length}</div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-[#466FF6] transition-colors">{episode.title}</h3>
                <p className="text-gray-500 font-medium italic">w/ {episode.guest}</p>
              </div>
              <button className="bg-[#2E353D] text-white p-6 rounded-full hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

// --- 5. Case Studies ---
export const CaseStudiesPage: React.FC = () => (
  <CaseStudiesHub />
);

// --- 6. Resources ---
export const ResourcesPage: React.FC = () => (
  <main className="bg-white">
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading overline="Resources" title="Implementation Toolkit" subtitle="Everything you need to champion coaching and resilience inside your organization." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {[
            { title: "The 2024 Resilience Report", d: "Original research on workforce sentiment and burnout trends.", type: "Whitepaper" },
            { title: "Coaching ROI Calculator", d: "A data-driven model to calculate turnover savings.", type: "Interactive Tool" },
            { title: "The Manager Support Guide", d: "Templates for introducing coaching to new cohorts.", type: "Guide" },
            { title: "Resilience Index™ One-Pager", d: "A summary of how we measure organizational health.", type: "PDF" },
            { title: "Benefit Comparison Sheet", d: "How Boon compares to traditional EAPs and L&D.", type: "Checklist" },
            { title: "Coaching Standards (ICF)", d: "A guide to our accreditation and matching rigor.", type: "Standard" },
          ].map(res => (
            <div key={res.title} className="p-12 border border-gray-100 rounded-[50px] bg-gray-50 hover:bg-white hover:border-[#466FF6] hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#466FF6] shadow-sm mb-8">
                <DownloadIcon />
              </div>
              <div className="text-[10px] font-black text-[#466FF6] uppercase tracking-widest mb-4">{res.type}</div>
              <h3 className="text-2xl font-black mb-4 leading-tight">{res.title}</h4>
              <p className="text-gray-400 font-medium text-sm leading-relaxed mb-10 flex-1">{res.d}</p>
              <button className="bg-[#2E353D] text-white py-4 rounded-2xl font-black text-sm hover:bg-[#466FF6] transition-colors">Download</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);
