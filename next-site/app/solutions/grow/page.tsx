import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd, siteUrl } from '@/lib/seo';
import { GrowMeasurement, ProgramCopyButton } from '@/components/solutions/GrowInteractive';
import { ProductHero } from '@/components/solutions/ProductHero';
import { ProblemSection } from '@/components/solutions/ProblemSection';
import { WhatThisReplaces } from '@/components/solutions/WhatThisReplaces';
import { TippingPoints } from '@/components/solutions/TippingPoints';
import { GrowProgramTimeline } from '@/components/solutions/GrowProgramTimeline';
import { CoherentSystem } from '@/components/solutions/CoherentSystem';
import { ProductPricing } from '@/components/solutions/ProductPricing';
import { ProductTestimonials } from '@/components/solutions/ProductTestimonials';
import { ProductFAQ } from '@/components/solutions/ProductFAQ';
import { ProductCTA } from '@/components/solutions/ProductCTA';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon GROW - Leadership Development for Managers',
  description:
    'A structured, coaching-led development system built around real decisions, real conversations, and measurable behavior change for managers.',
  path: '/solutions/grow',
  ogDescription: 'A structured coaching program that develops managers through real decisions and conversations, with measurable behavior change.',
});

const LOGOS = [
  'https://storage.googleapis.com/boon-public-assets/72andsunny.png',
  'https://storage.googleapis.com/boon-public-assets/doner.png',
  'https://storage.googleapis.com/boon-public-assets/censys.png',
  'https://storage.googleapis.com/boon-public-assets/consensys.png',
  'https://storage.googleapis.com/boon-public-assets/circle.png',
  'https://storage.googleapis.com/boon-public-assets/makeawish.png',
  'https://storage.googleapis.com/boon-public-assets/m3.png',
  'https://storage.googleapis.com/boon-public-assets/mastery.jpg',
  'https://storage.googleapis.com/boon-public-assets/heartland.png',
  'https://storage.googleapis.com/boon-public-assets/polen.png',
  'https://storage.googleapis.com/boon-public-assets/MAL.jpg',
  'https://storage.googleapis.com/boon-public-assets/usta.png',
  'https://storage.googleapis.com/boon-public-assets/nuvei.png',
  'https://storage.googleapis.com/boon-public-assets/vita.png',
  'https://storage.googleapis.com/boon-public-assets/mack.jpg',
];

export default function GrowPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon GROW',
    description:
      'Structured leadership development for managers with measurable behavior change.',
    url: `${siteUrl}/solutions/grow`,
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Grow', path: '/solutions/grow' },
  ]);

  const faqJsonLd = generateFAQJsonLd([
    { question: 'How is GROW different from a leadership workshop?', answer: 'Workshops teach concepts. GROW changes behavior. Over 6 months, managers apply what they learn in real situations with ongoing coach support, peer learning, and measurable competency tracking.' },
    { question: 'What does the manager alignment component look like?', answer: "Three touchpoints with each participant's manager: at kickoff, midpoint, and close. These ensure coaching goals align with on-the-job expectations and that behavior change is visible beyond the coaching relationship." },
    { question: 'How do you measure outcomes?', answer: 'Pre and post competency assessments across 3-5 org-selected leadership behaviors. Coaches also provide observational data. You get a cohort-level impact report showing exactly what changed.' },
    { question: 'Can we customize which competencies GROW focuses on?', answer: 'Yes. Every GROW engagement is configured around 3-5 competencies your organization selects. Common choices include feedback, delegation, communication, decision-making, and confidence.' },
    { question: 'What if a coach match is not right?', answer: 'We rematch within 48 hours. Fit matters more than speed. Our matching process considers role context, industry experience, coaching style, and the specific challenges each manager is facing.' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white overflow-hidden text-[#2E353D]">
        {/* 1. Hero */}
        <ProductHero
          productName="Boon Grow"
          accentColor="#FF8D80"
          accentBg="#FFF2F0"
          headline={
            <>
              Turn managers into leaders who can{' '}
              <span className="text-[#FF8D80] font-serif italic">actually lead</span>.
            </>
          }
          subtitle="A structured, coaching-led development system built around real decisions, real conversations, and measurable behavior change."
          ctaPrimary={{ text: 'Book a conversation', href: '/demo' }}
          ctaSecondary={{ text: 'See How It Works', href: '#grow-timeline' }}
          heroImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
          heroImageAlt="Observational leadership moment"
          badgeText="Cohort Active"
          badgeIcon={
            <div className="w-3 h-3 bg-[#FF8D80] rounded-full flex-shrink-0"></div>
          }
        />

        {/* 2. Problem Section (merged Problem Framing + Diagnosis per #42) */}
        <ProblemSection
          overline="Why Traditional Training Fails"
          headline={
            <>
              Most managers are promoted without support.{' '}
              <span className="text-[#FF8D80]">GROW fixes that.</span>
            </>
          }
          bodyText=""
          accentColor="#FF8D80"
          cards={[
            { label: 'TA', title: 'Too Abstract', desc: "Frameworks don't survive real conversations. GROW is built for implementation." },
            { label: 'TE', title: 'Too Episodic', desc: "Growth doesn't happen in workshops. It happens through bi-weekly reflection." },
            { label: 'TV', title: 'Too Evaluative', desc: 'Managers feel watched instead of supported. GROW is a safe space to fail and grow.' },
            { label: 'TG', title: 'Too Generic', desc: "One-size-fits-all programs ignore context. GROW matches coaches who've done the job before." },
          ]}
        />

        {/* 3. What GROW Replaces */}
        <WhatThisReplaces
          productName="GROW"
          headline="GROW can do the work of 2-3 programs."
          bodyText="GROW replaces the patchwork of workshops and peer circles. It consolidates new manager onboarding, ongoing development, and capability measurement into one continuous system."
        />

        {/* 4. Tipping Points (#82) */}
        <TippingPoints
          productName="GROW"
          accentColor="#FF8D80"
          items={[
            "Your managers were promoted for technical skills but struggle with people leadership",
            "You're investing in workshops and training days but not seeing behavior change",
            "Manager turnover or burnout is higher than you'd like and feedback scores are flat",
          ]}
        />

        {/* 7. Program Timeline */}
        <GrowProgramTimeline />

        {/* 9. Program at a Glance (Grow-specific) */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#FF8D80] font-extrabold text-[10px] tracking-widest uppercase mb-6">Program Overview</p>
              <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.9]">Program at a Glance</h2>
            </div>
            <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm relative overflow-visible">
              <ProgramCopyButton />
              <div className="p-6 md:p-10">
                <div className="divide-y divide-gray-100">
                  {[
                    { label: 'Duration', value: '6 months' },
                    { label: '1:1 Coaching Sessions', value: '12 sessions, 45 min each (2x/month)' },
                    { label: 'Group Coaching', value: 'Peer cohort sessions woven throughout the program' },
                    { label: 'Manager Alignment', value: "Sessions with your managers' managers to reinforce growth" },
                    { label: 'Focus Areas', value: '3-5 org-selected competencies (e.g., Feedback, Delegation, Communication)' },
                    { label: 'Measurement', value: 'Pre/post competency assessments + ongoing coach observation' },
                    { label: 'Coach Matching', value: 'Matched by role, context, and leadership challenges' },
                    { label: 'Time to Launch', value: 'Typically 2-3 weeks from kickoff' },
                  ].map((row) => (
                    <div key={row.label} className="flex flex-col sm:flex-row sm:items-center py-4 gap-1 sm:gap-8">
                      <div className="sm:w-[200px] flex-shrink-0 text-[15px] font-bold text-[#2E353D]">{row.label}</div>
                      <div className="text-[15px] text-[#2E353D]/80">{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-[#2E353D]/50 mt-6">
              Every program is configured to your org. This is a typical structure.
            </p>
            <div className="text-center mt-8">
              <Link href="/demo" className="inline-block bg-[#466FF6] text-white px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-all">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>

        {/* 10. Measurement / Product Proof (Grow-specific) */}
        <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
              <div>
                <p className="text-[#FF8D80] font-extrabold text-[10px] tracking-widest uppercase mb-8">Measurement Integrity</p>
                <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.9] mb-8 text-boon-charcoal">
                  Behavior change, <span className="text-[#FF8D80]">verified.</span>
                </h2>
                <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                  <p>Measurement only matters if it reflects how managers actually show up.</p>
                  <p>Boon GROW measures change in specific, role-relevant leadership behaviors across the lifecycle of the program.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-12 mt-16 pt-16 border-t border-slate-100">
                  <div>
                    <h4 className="text-sm font-bold text-[#FF8D80] uppercase tracking-widest mb-6">What we measure</h4>
                    <ul className="space-y-4">
                      {['Core leadership competencies', 'Change over time at cohort level'].map((item) => (
                        <li key={item} className="flex gap-3 text-sm font-bold text-slate-600">
                          <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#FF8D80] uppercase tracking-widest mb-6">Verification</h4>
                    <ul className="space-y-4">
                      {['Pre/Post assessments', 'Ongoing coach observation'].map((item) => (
                        <li key={item} className="flex gap-3 text-sm font-bold text-slate-600">
                          <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <GrowMeasurement />
            </div>
          </div>
        </section>

        {/* 12. Coherent System */}
        <CoherentSystem
          currentProduct="grow"
          accentColor="#FF8D80"
          headline="GROW is part of something bigger."
          subtitle="Pair with SCALE for ongoing 1:1 coaching, EXEC for senior leadership, or TOGETHER for team alignment. One system that compounds."
        />

        {/* 13. Pricing */}
        <ProductPricing
          accentColor="#FF8D80"
          pricingPoints={[
            { title: 'Per-Cohort Pricing', description: 'A flat per-participant fee that includes 1:1 coaching, group sessions, assessments, and manager alignment.' },
            { title: 'No Hidden Add-ons', description: 'Everything is included: coach matching, measurement tools, impact reports, and HR dashboards.' },
            { title: 'Flexible Cohort Sizes', description: 'Run cohorts as small as 8 or as large as 50. Pricing scales with your needs.' },
          ]}
          ctaText="Get a Quote"
          bottomLine="All-inclusive per-participant pricing."
          bottomSubline="Launch in 2-3 weeks"
        />

        {/* 14. Testimonials */}
        <ProductTestimonials
          logos={LOGOS}
          testimonials={[
            {
              quote: 'I learned the 5-second rule, effective approaches to handling feedback, strategies for delegation, and mental training for navigating challenging situations. She also helped me overcome the fear of speaking up.',
              name: 'Participant',
              title: 'CPG/Manufacturing',
            },
            {
              quote: "I learned that I view problems as opportunities for failure and that I don't need to know all the answers. Sometimes I just need to help facilitate.",
              name: 'Manager',
              title: 'CPG/Manufacturing',
            },
            {
              quote: 'Spending more time developing people rather than fixing their mistakes will open up a significant amount of my own time to focus on business development.',
              name: 'Participant',
              title: 'Retail',
            },
            {
              quote: 'I am now aware of where and when I become the least productive version of myself. I have developed new tactics that take me below the line and help me focus on the task at hand in an efficient and rational manner.',
              name: 'Manager',
              title: 'Retail',
            },
            {
              quote: "Taking a moment to reflect on the situation in front of me and make well thought out decisions. Also, tackling any conflicts head on and having hard discussions. This is not my natural style, but I've had to learn to adapt.",
              name: 'Manager',
              title: 'CPG/Manufacturing',
            },
          ]}
        />

        {/* 15. FAQ */}
        <ProductFAQ
          faqs={[
            { question: 'How is GROW different from a leadership workshop?', answer: 'Workshops teach concepts. GROW changes behavior. Over 6 months, managers apply what they learn in real situations with ongoing coach support, peer learning, and measurable competency tracking.' },
            { question: 'What does the manager alignment component look like?', answer: "Three touchpoints with each participant's manager: at kickoff, midpoint, and close. These ensure coaching goals align with on-the-job expectations and that behavior change is visible beyond the coaching relationship." },
            { question: 'How do you measure outcomes?', answer: 'Pre and post competency assessments across 3-5 org-selected leadership behaviors. Coaches also provide observational data. You get a cohort-level impact report showing exactly what changed.' },
            { question: 'Can we customize which competencies GROW focuses on?', answer: 'Yes. Every GROW engagement is configured around 3-5 competencies your organization selects. Common choices include feedback, delegation, communication, decision-making, and confidence.' },
            { question: 'What if a coach match is not right?', answer: 'We rematch within 48 hours. Fit matters more than speed. Our matching process considers role context, industry experience, coaching style, and the specific challenges each manager is facing.' },
          ]}
        />

        {/* 16. Final CTA */}
        <ProductCTA
          headline={
            <>
              Build managers who can{' '}
              <span className="text-boon-coral font-serif italic">lead people</span>.
            </>
          }
          subtitle="A short conversation to see if GROW fits your organization."
          ctaText="Book a Strategy Call"
          trustBadges="Structured Development &bull; ICF Certified &bull; Measurable Outcomes"
        />
      </main>
    </>
  );
}
