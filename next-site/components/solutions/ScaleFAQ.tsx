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
        <h4 className="text-xl font-bold text-[#2E353D] group-hover:text-blue-600 transition-colors">
          {question}
        </h4>
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

const faqs = [
  {
    q: 'Is this therapy?',
    a: "No. While our coaches are trained in mental health principles, Boon focuses on professional growth, personal resilience, and goal-attainment. It is proactive support rather than clinical treatment.",
  },
  {
    q: 'How is this different from an EAP?',
    a: 'Most EAPs are reactive (used during a crisis) and clinical. Boon is proactive, usage-based, and highly engaging. Our utilization rates are typically 5-10x higher than traditional EAPs.',
  },
  {
    q: 'Will managers see session content?',
    a: "Absolutely not. Privacy is the foundation of Boon. Employers receive aggregate theme reports (e.g., '15% of sessions focused on conflict') but individual data is strictly confidential.",
  },
  {
    q: 'How do we ensure ROI?',
    a: "Through our 'Resilience Index™'. We track anonymous workforce sentiment and combine it with utilization data to show you exactly how the program is impacting burnout and retention.",
  },
];

export function ScaleFAQ() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter mb-4">
            Answers to your questions.
          </h2>
          <p className="text-gray-400 font-bold italic">Grounded, honest, and direct.</p>
        </div>
        <div className="border-t border-gray-100">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
