
import React from 'react';
import { CaseStudyLayout } from '../CaseStudyLayout';
import { CASE_STUDIES } from '../caseStudies.data';

export const ConsensysStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const meta = CASE_STUDIES.find(s => s.slug === 'consensys')!;

  return (
    <CaseStudyLayout 
      meta={meta}
      onBack={onBack}
      snapshot={[
        "Distributed Web3 team across 15+ timezones",
        "Hypergrowth scaling from 400 to 1,000+ employees",
        "High risk of cultural erosion and engineer burnout",
        "Implemented Boon Together for leadership alignment",
        "Achieved 22% lift in manager-rated team psychological safety"
      ]}
      challenge={
        "Operating as a decentralized organization in a fast-moving industry, Consensys faced the inherent friction of silos. As headcount doubled, engineering leaders found it increasingly difficult to maintain shared standards and a common language for feedback, leading to inconsistent team resilience."
      }
      approach={
        <>
          <p>Consensys deployed <strong>Boon Together</strong> to facilitate synchronous cohort experiences for their geographically distributed leadership team. The program focused on building a 'Common Operating Language' for high-stakes remote communication.</p>
          <p>Unlike traditional seminars, the Boon approach centered on peer-to-peer reflection. Groups of 8 leaders met bi-weekly with an ICF-certified coach to stress-test their real-world management hurdles, from async conflict resolution to scaling high-candor feedback cultures.</p>
        </>
      }
      whatChanged={[
        "Reduced 'Time-to-Feedback' markers in core engineering squads.",
        "Synchronized terminology for performance expectations.",
        "Increased peer-support engagement across timezones.",
        "Verified growth in 'calm presence' during market volatility."
      ]}
      whyItMattered={
        "In Web3, the ability to coordinate at high speed without clinical burnout is a competitive advantage. By building collective capability, Consensys ensured their leaders weren't just managing tasks, but building durable human infrastructure that could withstand the unique pressures of the blockchain industry."
      }
      quote={{
        text: "Boon gave our leaders a shared lens to look through. We stopped solving for symptoms and started building the cultural infrastructure that actually scales.",
        author: "Chief People Officer",
        role: "Consensys"
      }}
    />
  );
};
