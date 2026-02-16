'use client';

import { useState } from 'react';

function AccordionItem({
  index,
  title,
  content,
  defaultOpen = false,
}: {
  index: string;
  title: string;
  content: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-10 text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="label-text text-[10px] text-boon-blue border border-boon-blue/20 px-2 py-1 rounded-md">
            {index}
          </span>
          <h4
            className={`font-sans text-2xl font-bold transition-colors ${
              isOpen ? 'text-boon-blue' : 'text-boon-charcoal group-hover:text-boon-blue'
            }`}
          >
            {title}
          </h4>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div
            className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all ${
              isOpen
                ? 'bg-boon-blue border-boon-blue text-white rotate-45'
                : 'bg-white text-gray-400 group-hover:border-boon-blue group-hover:text-boon-blue'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12M6 12h12" />
            </svg>
          </div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-10' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-lg text-gray-400 font-body font-medium leading-relaxed max-w-3xl ml-16">{content}</p>
      </div>
    </div>
  );
}

export function AccordionSection() {
  return (
    <div className="max-w-4xl mx-auto pb-32">
      <div className="text-center mb-16">
        <h3 className="font-sans text-4xl font-bold text-boon-charcoal tracking-tight">
          How the system evolves over time
        </h3>
        <div className="w-12 h-1 bg-boon-blue mx-auto mt-6"></div>
      </div>
      <div className="border-t border-gray-100">
        <AccordionItem
          index="01"
          defaultOpen
          title="Start focused, then expand with intent."
          content="Most organizations start with a focused entry point and expand the system as value is proven and priorities evolve."
        />
        <AccordionItem
          index="02"
          title="Coaching changes as roles and stakes change"
          content="We match employees with coaches who have relevant operator experience and training for their specific role and moment."
        />
        <AccordionItem
          index="03"
          title="You see progress without surveilling people"
          content="Success is measured by signal that leadership can actually use—sentiment shifts, retention indicators, and core competency development."
        />
        <AccordionItem
          index="04"
          title="Growth scales without ripping anything out"
          content="Boon is designed as a single, flexible human layer. As you add solutions or headcount, existing workflows and data stay intact. Nothing breaks as you grow."
        />
      </div>
    </div>
  );
}
