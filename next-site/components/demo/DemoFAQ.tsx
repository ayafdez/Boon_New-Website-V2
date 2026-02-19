'use client';

import { useState } from 'react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-8 text-left group transition-all"
      >
        <h3 className="text-xl font-sans font-bold text-boon-charcoal group-hover:text-boon-blue transition-colors">
          {question}
        </h3>
        <div
          className={`w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all ${
            isOpen ? 'bg-boon-blue border-boon-blue text-white rotate-45' : 'text-gray-400'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12M6 12h12" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-500 font-body font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function DemoFAQ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <p className="label-text text-[10px] text-boon-blue mb-4">FAQ</p>
          <div className="w-12 h-0.5 bg-boon-blue mx-auto mb-8"></div>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-7xl font-bold text-boon-charcoal tracking-tight mb-4">Questions.</h2>
          <p className="text-gray-400 font-body font-medium leading-relaxed">Clear answers to common questions.</p>
        </div>
        <div className="border-t border-gray-100">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
