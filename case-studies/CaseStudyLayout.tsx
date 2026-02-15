
import React from 'react';
import { CaseStudyMetadata } from './caseStudies.data';

interface CaseStudyLayoutProps {
  meta: CaseStudyMetadata;
  onBack: () => void;
  snapshot: string[];
  challenge: React.ReactNode;
  approach: React.ReactNode;
  whatChanged: string[];
  whyItWorked?: React.ReactNode;
  whyItMattered: React.ReactNode;
  whoThisIsFor?: string;
  videoUrl?: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  footerCTA?: {
    headline: string;
    subhead: string;
    buttonText: string;
  };
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  meta, onBack, snapshot, challenge, approach, whatChanged, whyItWorked, whyItMattered, whoThisIsFor, videoUrl, quote, footerCTA
}) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 font-black text-[11px] uppercase tracking-widest mb-12 hover:text-[#466FF6] transition-colors"
          >
            <span>←</span> Back to Case Studies
          </button>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-md">Boon {meta.program}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{meta.audience}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#2E353D] leading-[0.9] tracking-tighter mb-8">
              {meta.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2.5fr] gap-20">
          
          {/* Snapshot Sidebar */}
          <aside className="lg:sticky lg:top-40 h-fit">
            <div className="bg-[#F0F3F7] p-10 rounded-[48px] border border-gray-100">
              <p className="text-[10px] font-black text-[#2E353D] uppercase tracking-widest mb-8 pb-4 border-b border-gray-200">The Snapshot</p>
              <ul className="space-y-6">
                {snapshot.map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-sm font-bold text-gray-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#466FF6] rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              {meta.logo && !meta.logo.startsWith('M3') && (
                <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
                   <img src={meta.logo} alt="Partner Logo" className="h-12 w-auto object-contain opacity-40" />
                </div>
              )}
            </div>
          </aside>

          {/* Narrative Body */}
          <article className="max-w-3xl">
            <div className="mb-24">
              <h2 className="text-[10px] font-black text-[#466FF6] uppercase tracking-[0.3em] mb-8">The Context</h2>
              <div className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed space-y-6">
                {challenge}
              </div>
            </div>

            {videoUrl && (
              <div className="mb-24 aspect-video rounded-[40px] overflow-hidden bg-black shadow-2xl">
                <video 
                  src={videoUrl} 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="mb-24">
              <h2 className="text-[10px] font-black text-[#466FF6] uppercase tracking-[0.3em] mb-8">The Approach</h2>
              <div className="text-lg text-gray-600 font-medium leading-relaxed space-y-6">
                {approach}
              </div>
            </div>

            <div className="mb-24 bg-gray-50 p-12 md:p-16 rounded-[60px] border border-gray-100">
              <h2 className="text-[10px] font-black text-[#466FF6] uppercase tracking-[0.3em] mb-10">What Changed</h2>
              <div className="grid sm:grid-cols-2 gap-10">
                {whatChanged.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-[#466FF6] text-[10px] font-black">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-bold text-[#2E353D] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {whyItWorked && (
              <div className="mb-24 p-12 md:p-16 bg-[#F4F7FF] rounded-[60px] border border-blue-50/50">
                <h2 className="text-[10px] font-black text-[#466FF6] uppercase tracking-[0.3em] mb-8">Why It Worked</h2>
                <div className="text-lg text-gray-600 font-medium leading-relaxed">
                  {whyItWorked}
                </div>
              </div>
            )}

            <div className="mb-24">
              <h2 className="text-[10px] font-black text-[#466FF6] uppercase tracking-[0.3em] mb-8">Strategic Impact</h2>
              <div className="text-lg text-gray-600 font-medium leading-relaxed italic border-l-4 border-blue-100 pl-8">
                {whyItMattered}
              </div>
            </div>

            {quote && (
              <div className="pt-12 border-t border-gray-100 mb-24">
                <p className="text-2xl font-medium text-gray-400 italic leading-relaxed mb-8">
                  "{quote.text}"
                </p>
                <div>
                  <p className="text-sm font-black text-[#2E353D] uppercase tracking-widest">{quote.author}</p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{quote.role}</p>
                </div>
              </div>
            )}

            {whoThisIsFor && (
              <div className="pt-12 border-t border-gray-100">
                <h2 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-4 text-center lg:text-left">Who This Is For</h2>
                <p className="text-sm font-bold text-gray-400 leading-relaxed text-center lg:text-left">
                  {whoThisIsFor}
                </p>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Footer CTA Section */}
      {footerCTA ? (
        <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#466FF6] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85]">{footerCTA.headline}</h2>
            <p className="text-xl mb-16 opacity-80 font-medium max-w-2xl mx-auto leading-relaxed">{footerCTA.subhead}</p>
            <button className="bg-white text-[#466FF6] px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl">
              {footerCTA.buttonText}
            </button>
          </div>
        </section>
      ) : (
        <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#466FF6] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85]">Let’s map the right starting point for your team.</h2>
            <p className="text-xl mb-16 opacity-80 font-medium max-w-2xl mx-auto leading-relaxed">Most teams start in one place and expand over time. We’ll help you design a starting point that fits today and evolves as you grow.</p>
            <button className="bg-white text-[#466FF6] px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl">
              Schedule a Conversation
            </button>
          </div>
        </section>
      )}
    </div>
  );
};