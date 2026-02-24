import type { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd, siteUrl } from '@/lib/seo';
import { ProductHero } from '@/components/solutions/ProductHero';
import { ProblemSection } from '@/components/solutions/ProblemSection';
import { WhatThisReplaces } from '@/components/solutions/WhatThisReplaces';
import { TippingPoints } from '@/components/solutions/TippingPoints';
import { BoonDifference } from '@/components/solutions/BoonDifference';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { ProductProof } from '@/components/solutions/ProductProof';
import { CoherentSystem } from '@/components/solutions/CoherentSystem';
import { ProductPricing } from '@/components/solutions/ProductPricing';
import { ProductTestimonials } from '@/components/solutions/ProductTestimonials';
import { ProductFAQ } from '@/components/solutions/ProductFAQ';
import { ProductCTA } from '@/components/solutions/ProductCTA';
import { BoonScaleDashboard } from '@/components/solutions/BoonScaleDashboard';
import { Sparkles, Target, MessageSquare } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon SCALE - 1:1 Coaching for Every Employee',
  description:
    'A confidential, usage-based coaching benefit designed for employees at every level, not just the top 5 percent. Democratized 1:1 coaching at scale.',
  path: '/solutions/scale',
  ogDescription: 'Give every employee access to a confidential, expert coach. Usage-based pricing, live in under a week, 30-40% monthly utilization.',
});


function CheckIcon({ className = 'text-blue-600' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconWrapper({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#2E353D] ${className}`}>
      {children}
    </div>
  );
}

function UserIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.848 4.474 10.741 10.12 11.354a11.99 11.99 0 0010.12-11.354c0-1.308-.21-2.568-.598-3.748A11.959 11.959 0 0013.5 2.714z"
      />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 01-.75-.75v-4.25m16.5 0a3 3 0 00-3-3H7.125a3 3 0 00-3 3m16.5 0V9A2.25 2.25 0 0018 6.75H6A2.25 2.25 0 003.75 9v5.15"
      />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5" />
    </svg>
  );
}

export default function ScalePage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon SCALE',
    description:
      'A confidential, usage-based coaching benefit designed for employees at every level. Democratized 1:1 coaching at scale.',
    url: `${siteUrl}/solutions/scale`,
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Scale', path: '/solutions/scale' },
  ]);

  const faqJsonLd = generateFAQJsonLd([
    { question: 'Is this therapy?', answer: 'No. While our coaches are trained in mental health principles, Boon focuses on professional growth, personal resilience, and goal-attainment. It is proactive support rather than clinical treatment.' },
    { question: 'How is this different from an EAP?', answer: 'Most EAPs are reactive (used during a crisis) and clinical. Boon is proactive, usage-based, and highly engaging. Our utilization rates are typically 5-10x higher than traditional EAPs.' },
    { question: 'Will managers see session content?', answer: "Absolutely not. Privacy is the foundation of Boon. Employers receive aggregate theme reports (e.g., '15% of sessions focused on conflict') but individual data is strictly confidential." },
    { question: 'How do we ensure ROI?', answer: "Through our 'Resilience Index'. We track anonymous workforce sentiment and combine it with utilization data to show you exactly how the program is impacting burnout and retention." },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white overflow-hidden">
        {/* 1. Hero */}
        <ProductHero
          productName=""
          accentColor="#466FF6"
          accentBg="#E6EDFF"
          headline={
            <>
              1:1 coaching for{' '}
              <span className="font-serif italic">every employee</span>.
            </>
          }
          subtitle="A confidential, usage-based coaching benefit designed for employees at every level, not just the top 5 percent."
          tagline=""
          ctaPrimary={{ text: 'See How Boon SCALE Works', href: '#how-it-works' }}
          ctaSecondary={{ text: 'View Pricing & Use Cases', href: '#pricing' }}
          heroImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
          heroImageAlt="Human-centric coaching interaction"
          badgeText="Session Completed"
          badgeIcon={
            <div className="w-10 h-10 bg-[#E6F8F0] rounded-full flex items-center justify-center flex-shrink-0 text-[#4CD995]">
              <CheckIcon className="text-[#4CD995]" />
            </div>
          }
        />

        {/* 2. The Tension (Problem) */}
        <ProblemSection
          overline="Why Other Coaching Solutions Fail"
          headline="HR Leaders are being asked to do the impossible."
          bodyText="Professional development is typically reserved for the top 5 percent, leaving the remaining workforce to navigate growth on their own."
          accentColor="#FF8D80"
          cards={[
            { label: 'TM', title: 'Talent Mismatch', desc: 'Coaching options are either too clinical or too generic to stick.' },
            { label: 'CP', title: 'Cost-Prohibitive', desc: 'Traditional coaching costs hundreds per hour per person.' },
            { label: 'LE', title: 'Low Engagement', desc: 'EAPs routinely see engagement below 5 percent.' },
            { label: 'OH', title: 'Operationally Heavy', desc: 'Internal programs take months to design and manage.' },
          ]}
        />

        {/* Transition */}
        <div className="py-20 md:py-24 bg-slate-50">
          <p className="text-center font-serif italic text-[28px] md:text-[32px] text-slate-400">
            That&apos;s why we built something different.
          </p>
        </div>

        {/* 3. Whole Person Support */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9] mb-8">
              One resource for the whole person.
            </h2>
            <p className="text-xl text-gray-500 font-medium">
              Coaching that supports people as humans, not just roles.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-[#F4F7FF] p-6 md:p-8 lg:p-16 rounded-[40px] md:rounded-[60px] border border-blue-50/50">
              <IconWrapper className="mb-10 bg-white">
                <BriefcaseIcon />
              </IconWrapper>
              <h3 className="font-sans text-xl md:text-2xl font-bold mb-6">Professional Growth</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {['Managing up and across', 'Career pathing', 'Time management', 'Leadership confidence', 'Conflict resolution'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#2E353D]">
                    <CheckIcon /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#FFF8F6] p-6 md:p-8 lg:p-16 rounded-[40px] md:rounded-[60px] border border-orange-50/50">
              <IconWrapper className="mb-10 bg-white text-orange-600">
                <ActivityIcon />
              </IconWrapper>
              <h3 className="font-sans text-xl md:text-2xl font-bold mb-6">Personal Wellbeing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {['Stress management', 'Work-life boundaries', 'Interpersonal skills', 'Sustaining energy over time', 'Resilience training'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#2E353D]">
                    <CheckIcon /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto text-center mt-16 px-6">
            <p className="text-lg font-bold text-[#466FF6] leading-relaxed italic">
              Employees don&apos;t need to choose between personal and professional growth. Neither does your organization.
            </p>
          </div>
        </section>

        {/* 4. What SCALE Replaces */}
        <WhatThisReplaces
          productName="SCALE"
          headline="SCALE replaces the patchwork of disconnected benefits no one uses."
          bodyText="Most organizations cobble together EAPs, wellness apps, and one-off coaching engagements. Utilization stays below 5%. SCALE consolidates all of that into a single system employees actually use, with 30-40% monthly engagement."
        />

        {/* 4. Tipping Points */}
        <TippingPoints
          productName="SCALE"
          accentColor="#466FF6"
          items={[
            "Your EAP utilization is below 5% and you know employees need more support",
            "You want to offer coaching beyond the executive level but can't justify per-seat costs",
            "Your team is growing fast and existing development infrastructure can't keep up",
          ]}
        />

        {/* 5. How It Works */}
        <HowItWorks
          headline="A seamless experience for HR teams and employees."
          subtitle="We handle the complexity so you can focus on your people."
          accentColor="#466FF6"
          steps={[
            { number: '01', title: 'Enroll & Launch', description: 'Add employees via HRIS sync or CSV. Most organizations are live within 5 business days.' },
            { number: '02', title: 'Matching & 1:1 Delivery', description: 'We match based on coaching specialty, industry background, and availability. Employees book directly with no coordination required from HR.' },
            { number: '03', title: 'Insights & Impact', description: 'Your dashboard shows adoption rates, engagement trends, and aggregated coaching themes. Export-ready for leadership reviews.' },
          ]}
          dashboardElement={<BoonScaleDashboard />}
          dashboardCaption="Track adoption rates, engagement trends, and coaching themes across your organization in real time."
        />

        {/* Feature Differentiation */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center font-serif text-[32px] md:text-[36px] text-slate-900 mb-12">
              Built for how people actually use coaching.
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">AI-Powered Insights</h3>
                <p className="text-sm text-slate-500">Session analysis and AI roleplay so coaching extends beyond the hour.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Personalized Tracking</h3>
                <p className="text-sm text-slate-500">Employees track the goals that matter to them, not a generic competency framework.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Slack & Teams Built In</h3>
                <p className="text-sm text-slate-500">Coach matching, session reminders, and action items delivered where work happens.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. The Boon Difference (ROI) */}
        <BoonDifference
          accentColor="#466FF6"
          headline="A strategic lever for retention and engagement."
          bodyText="Boon SCALE is not a perk. It is an investment in your people's ability to navigate complexity, change, and growth."
          benefits={[
            { title: '30-40% Monthly Utilization', desc: 'Typical EAPs see 3-5%. Boon sees 30-40% monthly utilization because employees actually want to use it.' },
            { title: 'Aggregate Insights, Never Individual Details', desc: "HR sees coaching themes like 'communication' and 'time management.' They never see session content. Ever." },
            { title: 'Live in Under a Week', desc: 'HRIS sync or CSV upload. No implementation project, no IT tickets. Your team spends less than 2 hours per month on Boon administration.' },
            { title: 'One HR Generalist. 2,000 Employees.', desc: 'Boon handles matching, scheduling, and billing end to end. Scale from 50 to 5,000 without adding headcount.' },
          ]}
          ctaText="Download the HR Impact Report"
          ctaHref="https://content.boon-health.com/hubfs/PDFs/Boon_Ebook_Empower-Your-Workforce_2024.pdf"
        />

        {/* 11. Pricing */}
        <ProductPricing
          accentColor="#466FF6"
          pricingPoints={[
            { title: 'Usage-Based Model', description: 'Pay only for completed sessions. No unused licenses.' },
            { title: 'Predictable Monthly Billing', description: 'Fixed session pricing keeps budgets predictable as you scale.' },
            { title: 'No Long-Term Lock-in', description: 'Flexible agreements aligned to growth and seasonality.' },
          ]}
          ctaText="Get a Quote"
        />

        {/* 12. Testimonials */}
        <ProductTestimonials
          logos={[
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
          ]}
          testimonials={[
            {
              quote: 'Stacey has helped me work on strengthening my executive presence, delegate responsibilities so my job is manageable, and has shared many tools and resources related to leadership that have been wonderful.',
              name: 'Company President',
              title: 'Professional Services',
            },
            {
              quote: "My executive coach is amazing. I've been working with her for almost 2 years and it's been truly transformative. Her thoughtful and challenging questions push me to reflect deeply and practice new ways of leading.",
              name: 'HaMy V.',
              title: 'Chief Operating Officer (G2)',
            },
            {
              quote: "My company let us know that we will be losing Boon this month. I am hoping to be able to keep it. If I don't get to come back, you've got a good one, and anyone will be lucky to have her as their coach.",
              name: '2-Year Participant',
              title: 'SaaS',
            },
            {
              quote: 'It was helpful to have someone help you talk through your goals and struggles. I found ways to knock down my barriers and it is helping me to become more confident in my work.',
              name: 'Melanie W.',
              title: 'Benefits Administrator (G2)',
            },
            {
              quote: 'Using Boon for the last year and a half has been life changing. My coach holds me accountable, helps me find better work-life balance, and makes me feel understood.',
              name: 'Verified User',
              title: 'Staffing & Recruiting (G2)',
            },
          ]}
        />

        {/* 13. FAQ */}
        <ProductFAQ
          faqs={[
            { question: 'Is this therapy?', answer: "No. While our coaches are trained in mental health principles, Boon focuses on professional growth, personal resilience, and goal-attainment. It is proactive support rather than clinical treatment." },
            { question: 'How is this different from an EAP?', answer: 'Most EAPs are reactive (used during a crisis) and clinical. Boon is proactive, usage-based, and highly engaging. Our utilization rates are typically 5-10x higher than traditional EAPs.' },
            { question: 'Will managers see session content?', answer: "Absolutely not. Privacy is the foundation of Boon. Employers receive aggregate theme reports (e.g., '15% of sessions focused on conflict') but individual data is strictly confidential." },
            { question: 'How do we ensure ROI?', answer: "Through our 'Resilience Index'. We track anonymous workforce sentiment and combine it with utilization data to show you exactly how the program is impacting burnout and retention." },
          ]}
        />

        {/* Coherent System */}
        <CoherentSystem
          currentProduct="scale"
          accentColor="#466FF6"
          headline="SCALE is part of something bigger."
          subtitle="Pair with GROW for structured manager development, EXEC for senior leadership, or TOGETHER for team alignment. One system that compounds."
        />

        {/* 14. Final CTA */}
        <ProductCTA
          headline={
            <>
              Support <span className="font-serif italic">every employee</span> without blowing up your budget.
            </>
          }
          subtitle="A short conversation to understand your organization and see if Boon SCALE is a fit. No pressure. No obligation."
          ctaText="Book a Strategy Call"
          trustBadges="Usage-Based &bull; ICF Certified &bull; Instantly Scalable"
        />
      </main>
    </>
  );
}
