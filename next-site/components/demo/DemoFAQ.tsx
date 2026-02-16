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
        <h4 className="text-xl font-bold text-[#2E353D] group-hover:text-[#466FF6] transition-colors">
          {question}
        </h4>
        <div
          className={`w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all ${
            isOpen ? 'bg-[#466FF6] border-[#466FF6] text-white rotate-45' : 'text-gray-400'
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
        <p className="text-gray-500 font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function DemoFAQ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter mb-4">Questions.</h2>
          <p className="text-gray-400 font-bold italic">Clear answers to common questions.</p>
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
