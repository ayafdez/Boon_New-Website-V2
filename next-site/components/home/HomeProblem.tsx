'use client';

import Image from 'next/image';
import { useState } from 'react';

const problems = [
  {
    number: '1',
    label: 'Fragmented',
    headline: "You're managing four vendors for one job.",
    subline: 'No one owns the system.',
    body: 'Organizations stitch together coaching, training, assessments, and wellbeing tools. None of them talk to each other. Progress stalls because responsibility is diffused.',
    quote: '"We have five vendors and still can\'t tell you what\'s working."',
  },
  {
    number: '2',
    label: 'Lopsided',
    headline: 'Executives get coaching. Everyone else gets a workshop and a prayer.',
    subline: 'The middle is carrying the load.',
    body: 'Most solutions are designed for a handful of senior leaders. Managers and emerging leaders — the people actually running the business — get generic training or nothing at all.',
    quote: '"Our top 5% gets coaching. The other 95% gets a workshop link."',
  },
  {
    number: '3',
    label: 'Invisible',
    headline: "Your CEO asks what's changing. You don't have an answer.",
    subline: 'The middle is carrying the load.',
    body: 'HR leaders are asked to defend spend without real insight into behavior change, adoption, or momentum. Data lives in silos. Outcomes are inferred, not observed.',
    quote: '"The board wants ROI. I have engagement scores."',
  },
];

export function HomeProblem() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-24">
      {/* Background image */}
      <Image
        src="/hp_2sectionbg.png"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="label-text text-[10px] text-[#466FF6] mb-6 tracking-[0.25em]">
            The Problem
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-[1.05] tracking-tight max-w-3xl">
            Leadership development fails{' '}
            <span className="font-serif italic text-[#466FF6]">
              for three predictable reasons.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid md:grid-cols-3 gap-5"
          onMouseLeave={() => setActive(null)}
        >
          {problems.map((p, i) => {
            const isActive = active === i;
            const isAnyActive = active !== null;

            return (
              <div
                key={p.number}
                onMouseEnter={() => setActive(i)}
                className={`rounded-[35px] p-8 border flex flex-col gap-5 cursor-default transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1e2c45]/90 border-[#466FF6]/40 backdrop-blur-sm'
                    : isAnyActive
                    ? 'bg-[#151f30]/40 border-white/[0.05] backdrop-blur-sm opacity-60'
                    : 'bg-[#151f30]/60 border-white/[0.08] backdrop-blur-sm'
                }`}
              >
                {/* Label row */}
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black font-sans flex-shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-[#466FF6] text-white' : 'bg-white/10 text-white/40'
                  }`}>
                    {p.number}
                  </span>
                  <span className={`label-text text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? 'text-[#466FF6]' : 'text-white/30'
                  }`}>
                    {p.label}
                  </span>
                </div>

                {/* Headline */}
                <h3 className={`font-sans text-xl font-black leading-snug transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/70'
                }`}>
                  {p.headline}
                </h3>

                {/* Subline — always visible */}
                <p className={`text-sm font-sans font-medium transition-colors duration-300 ${
                  isActive ? 'text-white/40' : 'text-white/30'
                }`}>
                  {p.subline}
                </p>

                {/* Expanded content — only when hovered */}
                <div
                  className="flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isActive ? '300px' : '0px',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="border-t border-white/10" />

                  <p className="text-white/70 text-sm font-sans font-bold leading-relaxed">
                    {p.body}
                  </p>

                  <blockquote className="border-l-2 border-white/20 pl-4">
                    <p className="text-white/40 text-sm font-serif italic leading-relaxed">
                      {p.quote}
                    </p>
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
