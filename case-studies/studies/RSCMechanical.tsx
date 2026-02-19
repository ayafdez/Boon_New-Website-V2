
import React from 'react';
import { CaseStudyLayout } from '../CaseStudyLayout';
import { CASE_STUDIES } from '../caseStudies.data';

export const RSCMechanicalStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const meta = CASE_STUDIES.find(s => s.slug === 'rsc-mechanical')!;

  return (
    <CaseStudyLayout 
      meta={meta}
      onBack={onBack}
      snapshot={[
        "Traditional mechanical services industry",
        "Technicians transitioning into field management roles",
        "Historically low engagement with 'soft skill' training",
        "Implemented Boon Grow for 1:1 behavioral coaching",
        "Zero manager turnover in the first 12 months"
      ]}
      challenge={
        "In an industry built on technical precision, moving a master technician into a management role is a significant risk. RSC Mechanical found that while their field managers had the technical 'know-how,' they often lacked the behavioral framework to manage conflict and delegate effectively, leading to high-friction teams."
      }
      approach={
        <>
          <p>RSC chose <strong>Boon Grow</strong> to provide a practical, non-academic support system for their operations managers. The focus was on 'Applied Leadership': taking the high-pressure situations found on a job site and coaching through them in real-time.</p>
          <p>Coaches worked 1:1 with managers to build 'muscles' around delegation and accountability. The coaching was grounded in the reality of the mechanical services world, avoiding academic jargon in favor of practical outcomes.</p>
        </>
      }
      whatChanged={[
        "Improved manager-to-technician feedback frequency.",
        "Higher accuracy in project-based labor planning.",
        "Stabilized retention across high-risk technician roles.",
        "Measurable shift from 'reactive firefighting' to 'proactive planning'."
      ]}
      whyItMattered={
        "Traditional industries are often underserved by modern talent development. By investing in the human layer of their operations, RSC Mechanical didn't just improve their managers; they protected their highest-value asset, their field expertise, and created a sustainable path for career growth."
      }
      quote={{
        text: "Boon is the only leadership resource our managers have actually asked for more of. It's practical, it's grounded, and it works in the field.",
        author: "Director of Operations",
        role: "RSC Mechanical"
      }}
    />
  );
};
