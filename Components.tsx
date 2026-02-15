
import React, { useState } from 'react';

export type Page = 
  | 'HOME' | 'SOLUTIONS' | 'SCALE' | 'GROW' | 'EXEC' | 'TOGETHER' | 'WHY_BOON'
  | 'STORY' | 'COACHES' | 'INDIVIDUALS' | 'LEARN'
  | 'LEARN_BLOG' | 'LEARN_LIVE' | 'LEARN_PODCAST' | 'LEARN_CASES' | 'LEARN_RESOURCES'
  | 'DEMO';

export const SectionHeading: React.FC<{ overline: string; title: string; subtitle?: string; light?: boolean }> = ({ overline, title, subtitle, light }) => (
  <div className="text-center mb-16 max-w-4xl mx-auto">
    <p className={`${light ? 'text-white/70' : 'text-[#466FF6]'} font-black text-[10px] tracking-widest uppercase mb-4`}>{overline}</p>
    <h2 className={`text-4xl md:text-5xl font-black mb-6 ${light ? 'text-white' : 'text-[#2E353D]'} leading-tight`}>{title}</h2>
    {subtitle && <p className={`text-lg md:text-xl font-medium ${light ? 'text-white/60' : 'text-gray-500'} leading-relaxed`}>{subtitle}</p>}
  </div>
);

export const Navbar: React.FC<{ currentPage: Page; setPage: (p: Page) => void }> = ({ currentPage, setPage }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (p: Page) => {
    setPage(p);
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsLearnOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="flex items-center gap-10">
        <button onClick={() => handleNav('HOME')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="https://res.cloudinary.com/djbo6r080/image/upload/v1764863780/Wordmark_Blue_16_aw7lvc.png" 
            alt="Boon Logo" 
            className="h-6 w-auto"
          />
        </button>
        
        <div className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide text-gray-500 font-bold uppercase">
          <div 
            className="relative group"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button 
              onClick={() => handleNav('SOLUTIONS')}
              className={`flex items-center gap-1.5 py-2 transition-all font-black text-[#2E353D] hover:text-[#466FF6] ${['SOLUTIONS', 'SCALE', 'GROW', 'EXEC', 'TOGETHER'].includes(currentPage) ? 'text-[#466FF6]' : ''}`}
            >
              Solutions
              <svg className={`w-3.5 h-3.5 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isSolutionsOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 py-4 px-2 flex flex-col gap-1">
                <button onClick={() => handleNav('SOLUTIONS')} className="flex flex-col text-left p-3 hover:bg-[#F4F7FF] rounded-xl transition-all border-b border-gray-50 mb-1">
                  <span className="text-[#2E353D] text-sm font-black">Overview</span>
                  <span className="text-gray-400 text-[10px] lowercase italic">The unified leadership system</span>
                </button>
                {[
                  { id: 'SCALE' as Page, name: 'Boon SCALE', desc: 'Always-on coaching for everyone' },
                  { id: 'GROW' as Page, name: 'Boon GROW', desc: 'Developing managers at scale' },
                  { id: 'EXEC' as Page, name: 'Boon EXEC', desc: 'High-stakes executive leadership' },
                  { id: 'TOGETHER' as Page, name: 'Boon TOGETHER', desc: 'Alignment for teams in motion' },
                ].map(item => (
                  <button 
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className="flex flex-col text-left p-3 hover:bg-[#F4F7FF] rounded-xl transition-all"
                  >
                    <span className="text-[#2E353D] text-sm font-black">{item.name}</span>
                    <span className="text-gray-400 text-[10px] lowercase italic">{item.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => handleNav('WHY_BOON')} className={`hover:text-[#466FF6] transition-colors ${currentPage === 'WHY_BOON' ? 'text-[#466FF6]' : ''}`}>Why Boon</button>
          <button onClick={() => handleNav('STORY')} className={`hover:text-[#466FF6] transition-colors ${currentPage === 'STORY' ? 'text-[#466FF6]' : ''}`}>Our Story</button>
          <button onClick={() => handleNav('COACHES')} className={`hover:text-[#466FF6] transition-colors ${currentPage === 'COACHES' ? 'text-[#466FF6]' : ''}`}>For Coaches</button>
          <button onClick={() => handleNav('INDIVIDUALS')} className={`hover:text-[#466FF6] transition-colors ${currentPage === 'INDIVIDUALS' ? 'text-[#466FF6]' : ''}`}>For Individuals</button>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsLearnOpen(true)}
            onMouseLeave={() => setIsLearnOpen(false)}
          >
            <button 
              onClick={() => handleNav('LEARN')}
              className={`flex items-center gap-1 hover:text-[#466FF6] transition-colors py-2 ${currentPage.startsWith('LEARN') ? 'text-[#466FF6]' : ''}`}
            >
              Learn
              <svg className={`w-3 h-3 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isLearnOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 py-4 px-2 flex flex-col gap-1">
                <button onClick={() => handleNav('LEARN')} className="flex flex-col text-left p-3 hover:bg-[#F4F7FF] rounded-xl transition-all border-b border-gray-50 mb-1">
                  <span className="text-[#2E353D] text-sm font-black">Learn Hub</span>
                  <span className="text-gray-400 text-[10px] lowercase italic">Resource Center</span>
                </button>
                {[
                  { id: 'LEARN_BLOG' as Page, name: 'Boon Blog', desc: 'Insights & Perspectives' },
                  { id: 'LEARN_LIVE' as Page, name: 'Boon Live', desc: 'Events & Webinars' },
                  { id: 'LEARN_PODCAST' as Page, name: 'Podcast', desc: 'The Human Layer' },
                  { id: 'LEARN_CASES' as Page, name: 'Case Studies', desc: 'Impact Stories' },
                  { id: 'LEARN_RESOURCES' as Page, name: 'Resources', desc: 'Guides & Toolkits' },
                ].map(item => (
                  <button 
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className="flex flex-col text-left p-3 hover:bg-[#F4F7FF] rounded-xl transition-all"
                  >
                    <span className="text-[#2E353D] text-sm font-black">{item.name}</span>
                    <span className="text-gray-400 text-[10px] lowercase italic">{item.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-[#2E353D] font-bold text-sm hover:text-[#466FF6] px-4 transition-colors">Log In</button>
        <button 
          onClick={() => handleNav('DEMO')}
          className="bg-[#466FF6] text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-100 text-sm"
        >
          Book Demo
        </button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-600">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white p-6 flex flex-col gap-6 lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <img src="https://res.cloudinary.com/djbo6r080/image/upload/v1764863780/Wordmark_Blue_16_aw7lvc.png" alt="Boon" className="h-6" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
          </div>
          <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2">Solutions</p>
            <button onClick={() => handleNav('SOLUTIONS')} className="block w-full text-left text-2xl font-black text-[#2E353D]">Overview</button>
            {['SCALE', 'GROW', 'EXEC', 'TOGETHER'].map((p) => (
              <button key={p} onClick={() => handleNav(p as Page)} className="block w-full text-left text-2xl font-black text-[#2E353D]">Boon {p}</button>
            ))}
            <button onClick={() => handleNav('WHY_BOON')} className="block w-full text-left text-2xl font-black text-[#2E353D] mt-8">Why Boon</button>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2 mt-12">Learn</p>
            <button onClick={() => handleNav('LEARN')} className="block w-full text-left text-2xl font-black text-[#2E353D]">Learn Hub</button>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2 mt-12">Company</p>
            <button onClick={() => handleNav('STORY')} className="block w-full text-left text-2xl font-black text-[#2E353D]">Our Story</button>
            <button onClick={() => handleNav('COACHES')} className="block w-full text-left text-2xl font-black text-[#2E353D]">For Coaches</button>
            <button onClick={() => handleNav('INDIVIDUALS')} className="block w-full text-left text-2xl font-black text-[#2E353D]">For Individuals</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <footer className="bg-white py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1">
        <img src="https://res.cloudinary.com/djbo6r080/image/upload/v1764863780/Wordmark_Blue_16_aw7lvc.png" alt="Boon" className="h-6 w-auto mb-8" />
        <p className="text-gray-400 text-sm font-medium leading-relaxed">Coaching that scales with your people.</p>
      </div>
      <div>
        <h5 className="font-black text-[#2E353D] text-[10px] tracking-widest uppercase mb-6">Solutions</h5>
        <div className="flex flex-col gap-4 text-sm font-bold text-gray-500">
          <button onClick={() => setPage('SOLUTIONS')} className="text-left hover:text-[#466FF6]">Overview</button>
          <button onClick={() => setPage('SCALE')} className="text-left hover:text-[#466FF6]">Boon SCALE</button>
          <button onClick={() => setPage('GROW')} className="text-left hover:text-[#466FF6]">Boon GROW</button>
          <button onClick={() => setPage('EXEC')} className="text-left hover:text-[#466FF6]">Boon EXEC</button>
          <button onClick={() => setPage('TOGETHER')} className="text-left hover:text-[#466FF6]">Boon TOGETHER</button>
        </div>
      </div>
      <div>
        <h5 className="font-black text-[#2E353D] text-[10px] tracking-widest uppercase mb-6">Why Boon</h5>
        <div className="flex flex-col gap-4 text-sm font-bold text-gray-500">
          <button onClick={() => setPage('WHY_BOON')} className="text-left hover:text-[#466FF6]">Comparison</button>
          <button onClick={() => setPage('STORY')} className="text-left hover:text-[#466FF6]">Our Story</button>
          <button onClick={() => setPage('COACHES')} className="text-left hover:text-[#466FF6]">For Coaches</button>
          <button onClick={() => setPage('INDIVIDUALS')} className="text-left hover:text-[#466FF6]">For Individuals</button>
        </div>
      </div>
      <div>
        <h5 className="font-black text-[#2E353D] text-[10px] tracking-widest uppercase mb-6">Connect</h5>
        <div className="flex flex-col gap-4 text-sm font-bold text-gray-500">
          <a href="#" className="hover:text-[#466FF6]">LinkedIn</a>
          <a href="#" className="hover:text-[#466FF6]">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
);

export const GlobalCTA: React.FC = () => (
  <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#466FF6] text-white text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85]">Built for how people actually grow.</h2>
      <p className="text-xl mb-16 opacity-80 font-medium max-w-2xl mx-auto leading-relaxed">Boon is leadership infrastructure designed around human behavior, not tools or programs. So growth holds up as organizations scale.</p>
      <button className="bg-white text-[#466FF6] px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl">
        Schedule a Conversation
      </button>
    </div>
  </section>
);
