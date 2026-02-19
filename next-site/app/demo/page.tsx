import type { Metadata } from 'next';
import { generatePageMetadata, generateFAQJsonLd } from '@/lib/seo';
import { DemoForm } from '@/components/demo/DemoForm';
import { DemoFAQ } from '@/components/demo/DemoFAQ';
import { DemoTrustBar } from '@/components/demo/DemoTrustBar';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Schedule a Conversation',
  description:
    'Schedule a conversation with Boon to understand your goals and determine whether our unified leadership system is the right fit for your organization.',
  path: '/demo',
  ogTitle: 'Talk to Boon',
  ogDescription: 'Schedule a conversation to explore how Boon\'s unified leadership system can develop your people at every level.',
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
      <main className="bg-white text-boon-charcoal">
        {/* Hero */}
        <section className="pt-24 md:pt-40 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gradient-to-br from-boon-light-blue/30 via-white to-boon-soft-coral/15">
          {/* Floating blobs */}
          <div
            className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <p className="label-text text-[10px] text-boon-blue mb-6">
              30 minutes, zero pressure
            </p>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-[92px] font-bold tracking-tight leading-tight lg:leading-[0.9] mb-10 max-w-5xl">
              See if Boon is the right{' '}
              <span className="font-serif italic text-boon-blue">fit</span> for your team.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-body font-semibold leading-relaxed max-w-3xl mb-12">
              Pick a time below. We&apos;ll talk through your goals and show you exactly how Boon works for organizations like yours.
            </p>

            <div className="flex flex-wrap items-center gap-8 label-text text-[10px] text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-boon-blue"></div>
                Pick a time that works for you
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-boon-blue"></div>
                No scripted sales pitch
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-boon-blue"></div>
                Speak directly with our team
              </div>
            </div>
          </div>
        </section>

        {/* Content + Calendar */}
        <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 border-t border-gray-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start relative">
            {/* Left Column */}
            <div className="space-y-24 lg:sticky lg:top-32">
              <div className="space-y-16">
                <div>
                  <p className="label-text text-[10px] text-boon-blue mb-8">
                    What this conversation covers
                  </p>
                  <ul className="space-y-6 text-lg text-gray-500 font-body font-medium leading-relaxed">
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 bg-boon-light-blue rounded-full mt-2.5 flex-shrink-0"></span>
                      Whether Boon fits your organization and goals
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 bg-boon-light-blue rounded-full mt-2.5 flex-shrink-0"></span>
                      Which programs make sense for your team today
                    </li>
                    <li className="flex gap-4">
                      <span className="w-1.5 h-1.5 bg-boon-light-blue rounded-full mt-2.5 flex-shrink-0"></span>
                      How pricing works as you scale
                    </li>
                  </ul>
                </div>

                <div className="pt-16 border-t border-gray-100">
                  <p className="label-text text-[10px] text-gray-300 mb-8">
                    After you book
                  </p>
                  <ul className="space-y-6">
                    {[
                      'You\'ll get a calendar invite with a video link',
                      'We\'ll review your goals before the call',
                      'Come with questions. We\'ll bring answers.',
                    ].map((item) => (
                      <li key={item} className="flex gap-4 text-sm font-body font-bold text-gray-400">
                        <span className="w-1.5 h-1.5 bg-gray-200 rounded-full mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Calendar */}
            <DemoForm />
          </div>
        </section>

        {/* Social Proof - Scrolling Logo Bar */}
        <DemoTrustBar />

        {/* FAQ */}
        <DemoFAQ faqs={faqs} />

        {/* Final CTA */}
        <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-boon-navy text-white text-center relative overflow-hidden">
          {/* Decorative blobs */}
          <div
            className="absolute top-[10%] right-[5%] w-[40%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.3) 0%, rgba(70, 111, 246, 0.1) 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute bottom-[10%] left-[10%] w-[45%] h-[55%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.25) 0%, rgba(255, 141, 128, 0.1) 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-sans text-3xl md:text-5xl lg:text-[84px] font-bold tracking-tight leading-tight lg:leading-[0.9] mb-6">
              Not ready to{' '}
              <span className="font-serif italic text-boon-blue">book</span>?
            </h2>
            <p className="text-xl text-white/60 font-body font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
              No problem. Drop us a line and we&apos;ll get back to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="mailto:anewman@boon-health.com"
                className="bg-boon-coral text-white px-8 py-4 md:px-16 md:py-8 rounded-[15px] font-sans font-bold text-lg md:text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all"
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
