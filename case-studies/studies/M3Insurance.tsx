
import React from 'react';
import { CaseStudyLayout } from '../CaseStudyLayout';
import { CASE_STUDIES } from '../caseStudies.data';

export const M3InsuranceStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const meta = CASE_STUDIES.find(s => s.slug === 'm3-insurance')!;

  return (
    <CaseStudyLayout 
      meta={meta}
      onBack={onBack}
      snapshot={[
        "Customer: M3 Insurance",
        "Organization Size: ~450 employees",
        "Stakeholder: Alicia Kaiser, EVP of Human Resources",
        "Solution: Boon SCALE",
        "Who It Served: Leaders and employees across the organization",
        "Primary Outcome: Increased leadership capacity without increasing manager or HR burden"
      ]}
      challenge={
        <>
          <p>M3 Insurance is a growing organization with leaders managing large, complex teams. As the company scaled, a familiar tension emerged. Managers were being asked to take on more developmental and emotional support work without additional capacity, while employees needed a confidential, neutral space to work through challenges that could not be resolved inside traditional reporting lines.</p>
          <p>This is a pattern we have seen repeatedly across the insurance industry, where regulatory complexity, client pressure, and lean management structures leave leaders carrying more responsibility without sufficient support infrastructure.</p>
          <p>M3 recognized that without an additional system to absorb this load, leadership effectiveness and employee growth would eventually become constrained.</p>
        </>
      }
      videoUrl="https://storage.googleapis.com/boon-public-assets/M3%20Insurance%20Case%20Study.mp4"
      approach={
        <>
          <p>M3 partnered with Boon to introduce personalized coaching as a <strong>leadership support system</strong> rather than a wellness perk. The infrastructure allowed leaders and employees to opt into confidential sessions that integrated directly into their flow of work.</p>
          <div className="bg-white border-2 border-blue-50 p-8 rounded-[32px] my-10 shadow-sm">
            <p className="text-xl font-black text-[#466FF6] leading-tight text-center">
              Coaching was positioned as leadership infrastructure, not a perk or program.
            </p>
          </div>
          <p>The solution focused on increasing leadership capacity without adding managerial overhead, positioning coaching as an extension of the internal HR function.</p>
        </>
      }
      whatChanged={[
        "+17% improvement in self-reported productivity.",
        "+22% improvement in stress management.",
        "+15% improvement in work-life balance.",
        "97% coaching satisfaction score across participants."
      ]}
      whyItWorked={
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 bg-[#466FF6] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-600"><strong>Coaching reduced emotional and developmental load on managers</strong>, freeing them to focus on operational execution.</p>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 bg-[#466FF6] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-600"><strong>Employees accessed support earlier</strong> instead of waiting for issues to escalate into performance problems or HR cases.</p>
          </li>
          <li className="flex gap-4">
            <div className="w-1.5 h-1.5 bg-[#466FF6] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-600"><strong>Coaching functioned as infrastructure, not intervention</strong>, becoming a stable utility rather than a reactive fix.</p>
          </li>
        </ul>
      }
      whyItMattered={
        "For M3 Insurance, coaching wasn’t another benefit. It was a way to increase leadership capacity without increasing managerial burden. By providing personalized, role-relevant support at scale, M3 enabled its people to perform better, feel better, and grow without creating new bottlenecks for managers or HR."
      }
      quote={{
        text: "One of the things I appreciate most about Boon is that it supports the whole person. It gave our people a trusted, third-party space to work through real issues without putting more pressure on managers.",
        author: "Alicia Kaiser",
        role: "EVP of Human Resources, M3 Insurance"
      }}
      whoThisIsFor="Best fit for organizations where managers are stretched thin and development cannot live solely inside reporting lines."
      footerCTA={{
        headline: "Let’s apply this to your organization.",
        subhead: "Every company starts from a different place. We’ll help you assess where leadership capacity is constrained today and map a practical starting point that fits your structure, priorities, and budget.",
        buttonText: "Talk Through Your Use Case"
      }}
    />
  );
};
