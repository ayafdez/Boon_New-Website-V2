
import React from 'react';
import { CaseStudyLayout } from '../CaseStudyLayout';
import { CASE_STUDIES } from '../caseStudies.data';

export const TriNetStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const meta = CASE_STUDIES.find(s => s.slug === 'trinet')!;

  return (
    <CaseStudyLayout 
      meta={meta}
      onBack={onBack}
      snapshot={[
        "Enterprise-scale HR and PEO services",
        "Senior leadership navigating complex market shifts",
        "Need for absolute discretion and strategic depth",
        "Implemented Boon Exec for C-Suite and VPs",
        "98% usage rate among senior executive participants"
      ]}
      challenge={
        "At the enterprise level, leadership isolation is a real risk. Senior executives at TriNet were making high-impact decisions under conditions of significant ambiguity. They needed a confidential, external sounding board that understood business stakes, not just 'coaching frameworks'."
      }
      approach={
        <>
          <p><strong>Boon Exec</strong> provided senior leaders with elite operator-coaches who had managed similar enterprise-level complexity. These engagements were strictly confidential and prioritized strategic sparring and presence.</p>
          <p>The program focused on 'Cognitive Leverage': sharpening the ability to think clearly under pressure and navigate board dynamics without the cognitive erosion that often follows prolonged periods of high stress.</p>
        </>
      }
      whatChanged={[
        "Verified lift in decision-clarity markers.",
        "Higher resilience ratings during organizational restructuring.",
        "Enhanced board-level communication and influence.",
        "Consistent leadership presence during market volatility."
      ]}
      whyItMattered={
        "For an enterprise like TriNet, decision quality at the top tier has outsized consequences. Boon Exec ensured that their most senior leaders were operating with maximum clarity, directly impacting organizational stability and strategic execution during a critical growth phase."
      }
      quote={{
        text: "The level of operator depth in Boon's coach network is what makes the difference. They aren't just coaches; they are partners in strategic thinking.",
        author: "VP of Talent",
        role: "TriNet"
      }}
    />
  );
};
