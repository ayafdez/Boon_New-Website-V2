import type { Metadata } from 'next';
import { generatePageMetadata, generateFAQJsonLd } from '@/lib/seo';
import { DemoForm } from '@/components/demo/DemoForm';
import { DemoFAQ } from '@/components/demo/DemoFAQ';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Book a Demo',
  description:
    'Schedule a conversation with Boon to understand your goals and determine whether our unified leadership system is the right fit for your organization.',
  path: '/demo',
});

const faqs = [
  {
    question: 'Is individual data shared with HR?',
    answer:
      'No. Privacy is foundational to our trust. We provide aggregate theme reporting so leadership can understand organizational trends without ever exposing individual session content.',
  },
  {
    question: 'How quickly can we launch a cohort?',
    answer:
      'Most organizations can launch their first cohort in under 10 business days. We provide all the enrollment templates and SSO integration needed.',
  },
  {
    question: 'How do you match coaches?',
    answer:
      "We don't use simple algorithms. We match based on operator experience, industry context, and the specific goals identified by the employee.",
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We believe in usage-based transparency. You pay for completed sessions, ensuring your investment is directly tied to engagement and value.',
  },
];

export default function DemoPage() {
  const faqJsonLd = generateFAQJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="bg-white text-[#2E353D]">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#F4F7FF] text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-blue-50">
              Schedule a Conversation
            </div>
            <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-10 max-w-5xl">
              Schedule a conversation about your organization.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mb-12">
              A short conversation to understand your goals and determine whether Boon is the right fit.
            </p>

            <div className="flex flex-wrap items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#466FF6]"></div>
                Response within 1 business day
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#466FF6]"></div>
                No scripted sales pitch
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#466FF6]"></div>
                Speak directly with our team
              </div>
            </div>
          </div>
        </section>

        {/* Content + Form */}
        <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-24 items-start relative">
            {/* Left Column */}
            <div className="space-y-24 lg:sticky lg:top-32">
              <div className="space-y-16">
                <div>
                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#466FF6] mb-8">
                    What this conversation covers
                  </h3>
                  <ul className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 bg-blue-100 rounded-full mt-2.5 flex-shrink-0"></span>
                      Whether Boon fits your organization and goals
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 bg-blue-100 rounded-full mt-2.5 flex-shrink-0"></span>
                      Which programs make sense for your team today
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 bg-blue-100 rounded-full mt-2.5 flex-shrink-0"></span>
                      How pricing works as you scale
                    </li>
                  </ul>
                </div>

                <div className="pt-16 border-t border-gray-100">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-300 mb-8">
                    What this is not
                  </h3>
                  <ul className="space-y-6">
                    {['Not a scripted sales demo', 'Not therapy or clinical intake', 'Not a generic product walkthrough'].map(
                      (item) => (
                        <li key={item} className="flex gap-4 text-sm font-bold text-gray-400">
                          <span className="w-1.5 h-1.5 border border-gray-200 rounded-full mt-1.5"></span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <DemoForm />
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-16">
              TRUSTED BY PEOPLE LEADERS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale mb-24">
              <Image
                src="https://storage.googleapis.com/boon-public-assets/72andsunny.png"
                width={80}
                height={24}
                className="h-6 w-auto"
                alt="72andSunny"
              />
              <Image
                src="https://storage.googleapis.com/boon-public-assets/consensys.png"
                width={80}
                height={24}
                className="h-6 w-auto"
                alt="Consensys"
              />
              <Image
                src="https://storage.googleapis.com/boon-public-assets/circle.png"
                width={80}
                height={24}
                className="h-6 w-auto"
                alt="Circle"
              />
              <Image
                src="https://storage.googleapis.com/boon-public-assets/usta.png"
                width={80}
                height={24}
                className="h-6 w-auto"
                alt="USTA"
              />
            </div>

            <div className="max-w-2xl bg-white p-12 rounded-[56px] border border-gray-100 shadow-sm text-center">
              <p className="text-lg font-bold text-gray-500 italic leading-relaxed mb-8">
                &ldquo;Boon has become a core part of our leadership infrastructure. The level of support they
                provide our managers is unmatched by any generic L&D tool we&apos;ve used.&rdquo;
              </p>
              <div>
                <p className="text-sm font-black uppercase tracking-widest">VP OF PEOPLE</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
                  Global Tech Organization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <DemoFAQ faqs={faqs} />

        {/* Final CTA */}
        <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#466FF6] text-white text-center rounded-[80px] mx-4 md:mx-10 mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.85]">
              Prefer to reach out directly?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="mailto:hello@boon.coach"
                className="bg-white text-[#466FF6] px-14 py-7 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl"
              >
                Email our team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
