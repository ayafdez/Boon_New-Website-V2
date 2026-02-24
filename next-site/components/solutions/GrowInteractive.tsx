'use client';

import { useState, useEffect, useRef } from 'react';

// The GROW Arc Steps with auto-advance
const steps = [
  {
    t: 'Role-specific starting point',
    d: 'Coaches address problems that emerging leaders are facing in-the-moment, not generic curriculums based on hypothetical scenarios.',
  },
  {
    t: 'Bi-weekly applied coaching',
    d: 'Sessions focus on real-time challenges, decisions, and people dynamics. Every session ends with a specific commitment to action.',
  },
  {
    t: 'Skills reinforced through repetition',
    d: 'Coaches track progress across core leadership muscles like communication, delegation, and accountability.',
  },
  {
    t: 'Signals HR can trust',
    d: 'See where leadership is developing or breaking down without relying on surveillance and violating manager privacy.',
  },
];

export function GrowSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24 relative">
      <div className="absolute top-[20px] left-0 right-0 hidden lg:block px-10">
        <div className="w-full h-px border-t border-gray-100 relative"></div>
      </div>

      {steps.map((step, idx) => (
        <div
          key={step.t}
          className={`flex flex-col gap-6 relative z-10 transition-all duration-700 ${
            activeStep === idx ? 'opacity-100' : 'opacity-20'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 ${
              activeStep === idx
                ? 'bg-[#FF8D80] text-white shadow-xl shadow-orange-100'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            {idx + 1}
          </div>
          <h4
            className={`font-sans text-lg font-bold leading-tight transition-colors ${
              activeStep === idx ? 'text-[#FF8D80]' : 'text-[#2E353D]'
            }`}
          >
            {step.t}
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
        </div>
      ))}
    </div>
  );
}

// Impact Metric Row Component
function ImpactMetricRow({
  label,
  before,
  after,
  change,
  width,
}: {
  label: string;
  before: string;
  after: string;
  change: string;
  width: string;
}) {
  return (
    <div className="grid grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr_1fr] items-center py-4 border-b border-slate-50 text-[10px] font-bold group">
      <div className="text-slate-700 group-hover:text-[#FF8D80] transition-colors">{label}</div>
      <div className="text-slate-300 font-medium">{before}</div>
      <div className="text-[#FF8D80] font-medium">{after}</div>
      <div className="text-emerald-600/70">{change}</div>
      <div className="pl-4">
        <div className="h-1.5 bg-slate-50 rounded-full w-full overflow-hidden">
          <div
            className="h-full bg-[#FF8D80]/80 rounded-full transition-all duration-1000"
            style={{ width }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Program at a Glance - Copy Button
const programText = `Duration: 6 months
1:1 Coaching Sessions: 12 sessions, 45 min each (2x/month)
Group Coaching: Peer cohort sessions woven throughout the program
Manager Alignment: Sessions with your managers' managers to reinforce growth
Focus Areas: 3-5 org-selected competencies (e.g., Feedback, Delegation, Communication)
Measurement: Pre/post competency assessments + ongoing coach observation
Coach Matching: Matched by role, context, and leadership challenges
Time to Launch: Typically 2-3 weeks from kickoff`;

export function ProgramCopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(programText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className="absolute top-6 right-6 md:top-8 md:right-8 text-slate-300 hover:text-[#FF8D80] transition-colors p-2 rounded-lg hover:bg-slate-50"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
      {copied && (
        <div className="absolute top-16 right-6 md:top-18 md:right-8 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
          Copied to clipboard
        </div>
      )}
    </>
  );
}

// Measurement Section with counting animation
export function GrowMeasurement() {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = 20;
          const duration = 1000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-white rounded-[48px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h3 className="font-sans text-lg md:text-xl font-bold text-slate-900">Program Impact</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                Measuring competency growth
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-[9px] font-extrabold text-slate-400">
              Aggregate View
            </div>
          </div>

          <div
            className="flex flex-wrap gap-12 mb-12 border-b border-slate-50 pb-12"
            ref={countRef}
          >
            <div>
              <div className="text-[#FF8D80]/80 text-5xl font-bold tracking-tight">
                +{count}.0%
              </div>
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mt-2">
                Overall Competency Growth
              </div>
            </div>
            <div className="hidden sm:block w-px h-20 bg-slate-100"></div>
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-slate-50 p-4 rounded-2xl shadow-sm min-w-[180px]">
                <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">
                  Avg Score Gain
                </div>
                <div className="text-xl font-bold text-slate-900">+0.56</div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <ImpactMetricRow
              label="Giving & Receiving Feedback"
              before="2.14"
              after="3.29"
              change="+53%"
              width="92%"
            />
            <ImpactMetricRow
              label="Delegation and Accountability"
              before="2.43"
              after="3.43"
              change="+41%"
              width="78%"
            />
            <ImpactMetricRow
              label="Self Confidence & Imposter Syndrome"
              before="2.57"
              after="3.43"
              change="+33%"
              width="72%"
            />
            <ImpactMetricRow
              label="Prioritization & Focus"
              before="2.60"
              after="3.45"
              change="+32%"
              width="65%"
            />
          </div>
        </div>
      </div>
      <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-2 px-6">
        Anonymized cohort data
      </p>
    </div>
  );
}
