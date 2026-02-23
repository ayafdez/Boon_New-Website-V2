'use client';

import { useState } from 'react';

const cards = [
  {
    label: 'Fragmented',
    heading: "You're managing four vendors for one job.",
    sub: 'No one owns the system.',
    detail: 'Organizations stitch together coaching, training, assessments, and wellbeing tools. None of them talk to each other. Progress stalls because responsibility is diffused.',
    quote: "\"We have five vendors and still can't tell you what's working.\"",
  },
  {
    label: 'Lopsided',
    heading: 'Executives get coaching. Everyone else gets a workshop and a prayer.',
    sub: 'The middle is carrying the load.',
    detail: 'Most solutions are designed for a handful of senior leaders. Managers and emerging leaders—the people actually running the business—get generic training or nothing at all.',
    quote: '"Our top 5% gets coaching. The other 95% gets a workshop link."',
  },
  {
    label: 'Invisible',
    heading: "Your CEO asks what's changing. You don't have an answer.",
    sub: 'Impact becomes guesswork.',
    detail: 'HR leaders are asked to defend spend without real insight into behavior change, adoption, or momentum. Data lives in silos. Outcomes are inferred, not observed.',
    quote: '"The board wants ROI. I have engagement scores."',
  },
];

export function ProblemCards() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3">
      {cards.map((card, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: isOpen ? 'rgba(70, 111, 246, 0.08)' : 'rgba(255,255,255,0.04)',
              borderColor: isOpen ? 'rgba(70, 111, 246, 0.35)' : 'rgba(255,255,255,0.08)',
            }}
            onClick={() => setOpen(i)}
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 px-6 py-5">
              <div className="flex flex-col gap-1">
                <span className="label-text text-[9px] text-boon-blue tracking-widest">{card.label.toUpperCase()}</span>
                <h3 className="font-sans font-bold text-white text-base md:text-lg leading-snug">
                  {card.heading}
                </h3>
              </div>
              <span className="text-white/40 mt-1 flex-shrink-0 text-lg leading-none">
                {isOpen ? '∧' : '∨'}
              </span>
            </div>

            {/* Expanded content */}
            <div
              className="overflow-hidden transition-all duration-400"
              style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <div className="px-6 pb-6 border-t border-white/10 pt-4">
                <p className="text-white/50 font-sans font-semibold text-sm mb-3">{card.sub}</p>
                <p className="text-white/40 text-sm font-body leading-relaxed mb-4">{card.detail}</p>
                <p className="text-boon-blue/70 text-sm font-serif italic border-l-2 border-boon-blue/30 pl-3">
                  {card.quote}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
