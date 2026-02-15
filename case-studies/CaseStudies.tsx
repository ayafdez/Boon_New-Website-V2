import React, { useState } from 'react';
import { CASE_STUDIES } from './caseStudies.data';
import { CaseStudyCard } from './CaseStudyCard';
import { ConsensysStudy } from './studies/Consensys';
import { RSCMechanicalStudy } from './studies/RSCMechanical';
import { TriNetStudy } from './studies/TriNet';
import { M3InsuranceStudy } from './studies/M3Insurance';

export const CaseStudiesPage: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const renderDetail = () => {
    switch (selectedSlug) {
      case 'm3-insurance': return <M3InsuranceStudy onBack={() => setSelectedSlug(null)} />;
      case 'consensys': return <ConsensysStudy onBack={() => setSelectedSlug(null)} />;
      case 'rsc-mechanical': return <RSCMechanicalStudy onBack={() => setSelectedSlug(null)} />;
      case 'trinet': return <TriNetStudy onBack={() => setSelectedSlug(null)} />;
      default: return null;
    }
  };

  if (selectedSlug) {
    return renderDetail();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#466FF6] font-black text-[10px] tracking-[0.4em] uppercase mb-8">Impact Stories</p>
          <h1 className="text-6xl md:text-[88px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-10 max-w-5xl mx-auto">
            The growth <span className="text-[#466FF6] italic font-serif">is the proof</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Explore how resilient organizations are using the Boon system to build leadership capability, stabilize culture, and drive performance.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map(study => (
              <CaseStudyCard 
                key={study.slug} 
                study={study} 
                onClick={() => {
                  setSelectedSlug(study.slug);
                  window.scrollTo(0, 0);
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-lg text-gray-400 font-medium italic leading-relaxed">
            "We focus on long-term credibility over growth hype. Our impact is measured in the retention, wellbeing, and performance of the thousands of humans who use Boon every day."
          </p>
        </div>
      </section>
    </main>
  );
};