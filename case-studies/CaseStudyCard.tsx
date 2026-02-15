
import React from 'react';
import { CaseStudyMetadata } from './caseStudies.data';

export const CaseStudyCard: React.FC<{ 
  study: CaseStudyMetadata; 
  onClick: () => void 
}> = ({ study, onClick }) => {
  const colorMap = {
    'Scale': '#466FF6',
    'Grow': '#FF8D80',
    'Exec': '#2E353D',
    'Together': '#FDB022'
  };

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-[40px] border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl hover:border-transparent transition-all flex flex-col h-full"
    >
      <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
        <img 
          src={study.heroImage} 
          alt={study.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute top-6 left-6">
          <div 
            className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg"
            style={{ backgroundColor: colorMap[study.program] }}
          >
            Boon {study.program}
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col flex-1">
        <div className="mb-4">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Audience: {study.audience}</p>
          <h3 className="text-2xl font-black text-[#2E353D] leading-tight group-hover:text-[#466FF6] transition-colors">
            {study.title}
          </h3>
        </div>
        <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 flex-1">
          {study.summary}
        </p>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#466FF6]">
          Read Case Study <span className="text-lg group-hover:pl-2 transition-all">→</span>
        </div>
      </div>
    </div>
  );
};
