'use client';

import { useState } from 'react';

const cards = [
  {
    num: '1',
    label: 'Fragmented',
    heading: "You're managing four vendors for one job.",
    sub: 'No one owns the system.',
    detail: 'Organizations stitch together coaching, training, assessments, and wellbeing tools. None of them talk to each other. Progress stalls because responsibility is diffused.',
    quote: "\"We have five vendors and still can't tell you what's working.\"",
  },
  {
    num: '2',
    label: 'Lopsided',
    heading: 'Executives get coaching. Everyone else gets a workshop and a prayer.',
    sub: 'The middle is carrying the load.',
    detail: 'Most solutions are designed for a handful of senior leaders. Managers and emerging leaders, the people actually running the business, get generic training or nothing at all. The result is burnout, inconsistency, and quiet failure in the middle.',
    quote: '"Our top 5% gets coaching. The other 95% gets a workshop link."',
  },
  {
    num: '3',
    label: 'Invisible',
    heading: "Your CEO asks what's changing. You don't have an answer.",
    sub: 'Impact becomes guesswork.',
    detail: 'HR leaders are asked to defend spend without real insight into behavior change, adoption, or momentum. Data lives in silos. Outcomes are inferred, not observed.',
    quote: '"The board wants ROI. I have engagement scores."',
  },
];

export function ProblemCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card, i) => {
        const isHovered = hovered === i;
        const isDimmed = hovered !== null && !isHovered;

        return (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-[35px] p-8 md:p-10 border flex flex-col transition-all duration-300 overflow-hidden"
            style={{
              backgroundColor: 'rgba(26, 37, 64, 0.5)',
              borderColor: isHovered ? 'rgba(70, 111, 246, 0.6)' : 'rgba(255,255,255,0.1)',
              opacity: isDimmed ? 0.4 : 1,
              transform: isDimmed ? 'scale(0.98)' : 'scale(1)',
            }}
          >
            {/* Blue gradient glow when selected */}
            {isHovered && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[35px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(70, 111, 246, 0.15) 0%, rgba(70, 111, 246, 0.05) 50%, transparent 100%)',
                  boxShadow: 'inset 0 0 40px rgba(70, 111, 246, 0.1)',
                }}
              />
            )}

            {/* Card content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-7 h-7 rounded-lg bg-boon-blue/20 text-boon-blue flex items-center justify-center text-xs font-bold font-body">
                  {card.num}
                </span>
                <span className="label-text text-[10px] text-boon-blue tracking-widest">{card.label}</span>
              </div>

              <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                {card.heading}
              </h3>
              <p className="text-gray-500 font-body font-medium mb-6">{card.sub}</p>

              {/* Detail — revealed on hover, no height change on siblings */}
              <div
                className="border-t border-white/10 pt-6 overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: isHovered ? '300px' : '0px',
                  opacity: isHovered ? 1 : 0,
                  paddingTop: isHovered ? '1.5rem' : '0',
                  borderTopWidth: isHovered ? '1px' : '0px',
                }}
              >
                <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">{card.detail}</p>
                <p className="text-gray-500 text-sm font-serif italic border-l-2 border-boon-blue/30 pl-3">
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
