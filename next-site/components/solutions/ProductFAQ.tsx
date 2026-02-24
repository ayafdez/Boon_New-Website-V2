'use client';

import { useState } from 'react';

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-6 h-6 text-blue-600 transition-transform ${isOpen ? 'rotate-45' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-8 text-left group"
      >
        <h3 className="text-xl font-bold text-[#2E353D] group-hover:text-blue-600 transition-colors">
          {question}
        </h3>
        <PlusIcon isOpen={isOpen} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-8' : 'max-h-0'
        }`}
      >
        <p className="text-gray-500 font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

interface FAQ {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  faqs: FAQ[];
  headline?: string;
  subline?: string;
}

export function ProductFAQ({
  faqs,
  headline = 'FAQs',
  subline = '',
}: ProductFAQProps) {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9] mb-4">
            {headline}
          </h2>
          <p className="text-gray-400 font-bold italic">{subline}</p>
        </div>
        <div className="border-t border-gray-100">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
