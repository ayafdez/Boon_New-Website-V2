import type { Metadata } from 'next';
import Image from 'next/image';
import { Shield, CheckCircle2, Brain, MessageSquare, Target, Users, Lock, Eye } from 'lucide-react';
import { generatePageMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd, siteUrl } from '@/lib/seo';
import { ProductHero } from '@/components/solutions/ProductHero';
import { TippingPoints } from '@/components/solutions/TippingPoints';
import { CoherentSystem } from '@/components/solutions/CoherentSystem';
import { ProductPricing } from '@/components/solutions/ProductPricing';
import { ProductTestimonials } from '@/components/solutions/ProductTestimonials';
import { ProductFAQ } from '@/components/solutions/ProductFAQ';
import { ProductCTA } from '@/components/solutions/ProductCTA';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon EXEC - Executive Coaching for Senior Leaders',
  description:
    'A confidential space for senior leaders navigating decisions where clarity, consequence, and timing matter. Precision in high-stakes leadership.',
  path: '/solutions/exec',
  ogDescription: 'Confidential executive coaching for senior leaders navigating high-stakes decisions. Precision when clarity, consequence, and timing matter most.',
});


export default function ExecPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon EXEC',
    description:
      'A confidential space for senior leaders navigating high-stakes decisions. Precision in executive leadership.',
    url: `${siteUrl}/solutions/exec`,
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Exec', path: '/solutions/exec' },
  ]);

  const faqJsonLd = generateFAQJsonLd([
    { question: 'How is Boon EXEC different from hiring an executive coach independently?', answer: 'Independent coaches are uncoordinated. Boon EXEC is part of a leadership system. Your coaching connects to how the rest of your organization is developing. Plus, our matching process is structured around operating style and industry context, not just referrals.' },
    { question: 'Is session content shared with my organization?', answer: 'Never. Absolute discretion is foundational to EXEC. Your sponsor receives progress summaries at midpoint and close showing focus areas and engagement quality without any session content or personal details.' },
    { question: 'What seniority levels does EXEC serve?', answer: 'C-suite, SVP, VP, and senior director-level leaders. The common thread is not title but the weight of the decisions being made and the need for a confidential space to calibrate.' },
    { question: 'How do you ensure coach quality at this level?', answer: 'Every EXEC coach has held senior operating roles (CEO, CFO, COO, SVP). They are vetted for operator depth, not just coaching certification. If the match is not right, we rematch within 48 hours.' },
    { question: 'Can EXEC be part of a broader organizational engagement?', answer: 'Yes. EXEC integrates with SCALE, GROW, and TOGETHER. Many organizations run EXEC for the senior team while using GROW for managers and SCALE for the broader workforce, creating coherent development at every level.' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white text-[#2E353D] overflow-hidden">
        {/* 1. Hero (dark variant) */}
        <ProductHero
          productName="Boon EXEC"
          accentColor="#C9A55C"
          accentBg="#FBF5E8"
          darkMode
          headline={
            <>
              Precision in high-stakes{' '}
              <span className="text-[#C9A55C] font-serif italic">leadership</span>.
            </>
          }
          subtitle="A thinking partner for the decisions only you can make."
          ctaPrimary={{ text: 'Initiate a Confidential Inquiry', href: '/demo' }}
          heroImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000"
          heroImageAlt="High-stakes leadership calibration"
        />

        {/* 2. The Executive Reality */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#FAF8F5] relative overflow-hidden">
          {/* Warm gold glow - top right */}
          <div
            className="absolute -top-[20%] -right-[10%] w-[50%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201, 165, 92, 0.12) 0%, rgba(201, 165, 92, 0.04) 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="text-[#C9A55C] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                THE EXECUTIVE REALITY
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                At the top, decisions get harder but feedback gets <span className="text-[#C9A55C] font-serif italic">softer.</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-[#2E353D]">
                Traditional executive coaching is reactive, isolated, and expensive. Boon EXEC is different.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'Decisions get harder',
                  description: 'More ambiguity, higher stakes, less clear "right answers"',
                },
                {
                  icon: MessageSquare,
                  title: 'Feedback gets softer',
                  description: 'Peers hesitate, reports filter, boards stay high-level',
                },
                {
                  icon: Target,
                  title: 'Stakes multiply',
                  description: 'Impact on teams, culture, and business outcomes compounds',
                },
                {
                  icon: Users,
                  title: 'Isolation increases',
                  description: 'Fewer peers who truly understand your context',
                },
              ].map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full">
                      <div className="p-6">
                        <div className="w-14 h-14 rounded-xl bg-[#FBF5E8] flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-7 h-7 text-[#C9A55C]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-center text-[#2E353D] mb-3">
                          {challenge.title}
                        </h3>
                        <p className="text-sm text-center text-slate-500">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. The Difference - Comparison Table */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C9A55C] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                THE DIFFERENCE
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                Not your typical executive coaching.
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-[#2E353D]">
                Traditional executive coaching is reactive, expensive, and often unclear on ROI. Boon EXEC is designed differently.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Desktop Table */}
              <div className="hidden md:block bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="grid grid-cols-3 gap-6 p-8 border-b border-gray-200 bg-[#FAF8F5]">
                  <div></div>
                  <div className="text-center">
                    <span className="text-sm font-semibold text-slate-400">
                      Traditional Coaching
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-bold text-[#C9A55C]">
                      Boon EXEC
                    </span>
                  </div>
                </div>

                {[
                  {
                    category: 'Timing',
                    traditional: 'Reactive, called in when there\'s already a problem',
                    exec: 'Proactive, ongoing strategic partnership',
                  },
                  {
                    category: 'Focus',
                    traditional: 'Remediation and "fixing" perceived gaps',
                    exec: 'Sharpening strengths and strategic thinking',
                  },
                  {
                    category: 'Structure',
                    traditional: 'Ad-hoc, inconsistent cadence',
                    exec: 'Structured 6-month engagement with clear milestones',
                  },
                  {
                    category: 'Coach Match',
                    traditional: 'Generic senior coach assignment',
                    exec: 'Role-specific coach with relevant domain expertise',
                  },
                  {
                    category: 'Confidentiality',
                    traditional: 'Often unclear what\'s shared with organization',
                    exec: 'Crystal clear boundaries. Sessions private, progress shared.',
                  },
                  {
                    category: 'Cost',
                    traditional: '$25K-50K per executive per year',
                    exec: 'Scalable pricing, cohort-based efficiency',
                  },
                ].map((point, index, arr) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-6 p-6 ${
                      index !== arr.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-[#2E353D]">
                        {point.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-center px-4">
                      <div className="text-center">
                        <p className="text-sm text-slate-400">
                          {point.traditional}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center px-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-[#2E353D]">
                          {point.exec}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {[
                  {
                    category: 'Timing',
                    traditional: 'Reactive, called in when there\'s already a problem',
                    exec: 'Proactive, ongoing strategic partnership',
                  },
                  {
                    category: 'Focus',
                    traditional: 'Remediation and "fixing" perceived gaps',
                    exec: 'Sharpening strengths and strategic thinking',
                  },
                  {
                    category: 'Structure',
                    traditional: 'Ad-hoc, inconsistent cadence',
                    exec: 'Structured 6-month engagement with clear milestones',
                  },
                  {
                    category: 'Coach Match',
                    traditional: 'Generic senior coach assignment',
                    exec: 'Role-specific coach with relevant domain expertise',
                  },
                  {
                    category: 'Confidentiality',
                    traditional: 'Often unclear what\'s shared with organization',
                    exec: 'Crystal clear boundaries. Sessions private, progress shared.',
                  },
                  {
                    category: 'Cost',
                    traditional: '$25K-50K per executive per year',
                    exec: 'Scalable pricing, cohort-based efficiency',
                  },
                ].map((point, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-5 py-3 border-b border-gray-100 bg-[#FAF8F5]">
                      <span className="text-sm font-bold text-[#2E353D]">
                        {point.category}
                      </span>
                    </div>
                    <div className="p-5 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Traditional</p>
                        <p className="text-sm text-slate-500">
                          {point.traditional}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#C9A55C] uppercase tracking-wider mb-1">Boon EXEC</p>
                        <p className="text-sm font-medium text-[#2E353D]">
                          {point.exec}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Callout */}
              <div className="mt-8 bg-white border-l-4 border-[#C9A55C] rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2E353D] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2E353D] mb-1">
                      Built for scale, designed for impact
                    </h4>
                    <p className="text-sm text-[#2E353D]">
                      Boon EXEC combines the personalized attention of 1:1 coaching with the efficiency and insight of a cohort-based model.
                      Your organization gets better outcomes at a fraction of traditional executive coaching costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Tipping Points */}
        <TippingPoints
          productName="EXEC"
          accentColor="#C9A55C"
          items={[
            "Your senior leaders are navigating high-stakes transitions with no structured support",
            "Executive coaching has been ad-hoc, disconnected from the broader leadership development strategy",
            "Board dynamics, organizational scaling, or leadership team friction require confidential calibration",
          ]}
        />

        {/* 6. What an Executive Engagement Looks Like */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          {/* Subtle warm glow - bottom left */}
          <div
            className="absolute -bottom-[20%] -left-[10%] w-[45%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201, 165, 92, 0.08) 0%, rgba(201, 165, 92, 0.03) 40%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="text-[#C9A55C] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                THE ENGAGEMENT
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                Strategic sparring. Not <span className="text-[#C9A55C] font-serif italic">remediation.</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-[#2E353D]">
                A structured 6-month engagement designed to sharpen your strategic thinking and decision-making in real-time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 'Step 1',
                  icon: Brain,
                  title: 'Discovery',
                  duration: 'Week 1',
                  description: 'Deep context gathering and strategic priority mapping',
                  activities: [
                    'Confidential intake and 360 context review',
                    'Strategic challenge identification',
                    'Success metrics definition',
                  ],
                },
                {
                  step: 'Step 2',
                  icon: MessageSquare,
                  title: 'Intensive Sparring',
                  duration: '3-4 months',
                  description: 'Bi-weekly strategic sessions with your dedicated coach',
                  activities: [
                    'Live decision-making and scenario planning',
                    'Leadership blind spot surfacing',
                    'Real-time strategic thinking practice',
                  ],
                },
                {
                  step: 'Step 3',
                  icon: Target,
                  title: 'Application & Refinement',
                  duration: 'Months 4-6',
                  description: 'Apply insights to real challenges, refine approach',
                  activities: [
                    'Test new strategies in live situations',
                    'Debrief outcomes with coach',
                    'Iterate and strengthen new patterns',
                  ],
                },
                {
                  step: 'Step 4',
                  icon: Users,
                  title: 'Sustain & Scale',
                  duration: 'Month 6+',
                  description: 'Ongoing access and reinforcement',
                  activities: [
                    'Monthly check-ins for continuity',
                    'On-demand sparring for key moments',
                    'Optional peer executive cohort access',
                  ],
                },
              ].map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full">
                      <div className="p-6 border-b border-gray-100">
                        <p className="text-[10px] font-black text-[#C9A55C] tracking-[0.4em] uppercase mb-3">
                          {phase.step}
                        </p>

                        <div className="w-12 h-12 rounded-xl bg-[#2E353D] flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                        </div>

                        <h3 className="text-xl font-bold text-[#2E353D] mb-2">
                          {phase.title}
                        </h3>

                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-[#2E353D]">
                          {phase.duration}
                        </span>
                      </div>

                      <div className="p-6">
                        <p className="text-sm text-slate-500 mb-4">
                          {phase.description}
                        </p>

                        <ul className="space-y-2">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C9A55C]" />
                              <span className="text-xs text-slate-500">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coach Match */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#FAF8F5] relative overflow-hidden">
          {/* Warm glow - bottom right */}
          <div
            className="absolute -bottom-[15%] -right-[10%] w-[45%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201, 165, 92, 0.10) 0%, rgba(201, 165, 92, 0.03) 40%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-[#C9A55C] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                YOUR COACH MATCH
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                Not generic. <span className="text-[#C9A55C] font-serif italic">Role-specific.</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-[#2E353D]">
                Every Boon EXEC coach has walked in your shoes. They have held senior roles at high-growth companies and know the challenges you are facing.
              </p>
            </div>

            {/* Coach Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  initials: 'CM',
                  photo: 'https://storage.googleapis.com/boon-public-assets/Cheryl.jpg',
                  name: 'Cheryl Mills',
                  title: 'Former Head of Technology Product Management',
                  credentials: 'ICF-Accredited Coach, MBA in Finance',
                  companies: ['BNY Mellon', 'Broadridge'],
                  specialties: [
                    'Technology leadership through organizational change',
                    'Scaling product teams in regulated industries',
                    'Executive presence in board-facing roles',
                  ],
                  style: 'Holistic & clarity-focused',
                },
                {
                  initials: 'CA',
                  photo: 'https://storage.googleapis.com/boon-public-assets/Carrie%20Atkin.jpg',
                  name: 'Carrie Atkin',
                  title: 'Former VP of Merchandise Planning',
                  credentials: 'ICF-Certified Coach, Harvard BA',
                  companies: ['Sephora', 'Ann Taylor', 'Gap'],
                  specialties: [
                    'Retail leadership through rapid growth and restructuring',
                    'Building and leading cross-functional merchandising teams',
                    'Navigating executive transitions',
                  ],
                  style: 'Supportive & developmental',
                },
                {
                  initials: 'YH',
                  photo: 'https://storage.googleapis.com/boon-public-assets/Yoshi_pic.png',
                  photoPosition: 'center 20%',
                  name: 'Yoshi Hashimoto',
                  title: 'Former VP at Elsevier & Goldman Sachs',
                  credentials: 'ICF-Accredited Coach, MBA',
                  companies: ['Elsevier', 'Goldman Sachs'],
                  specialties: [
                    'Leading through M&A and organizational transformation',
                    'Finance-to-general-management transitions',
                    'Cross-cultural executive leadership',
                  ],
                  style: 'Authentic & empowering',
                },
                {
                  initials: 'KC',
                  photo: 'https://storage.googleapis.com/boon-public-assets/Coach%20Profile%20Photos/cumming.png',
                  photoPosition: 'center 20%',
                  name: 'Kimberli Cumming',
                  title: 'Former Executive Coach at Michigan Medicine',
                  credentials: 'MSW & MBA - University of Michigan',
                  companies: ['Michigan Medicine', 'Michigan Ross'],
                  specialties: [
                    'Healthcare system leadership and stakeholder management',
                    'Leading culture change in large institutions',
                    'Executive coaching through career pivots',
                  ],
                  style: 'Champion & advocate',
                },
              ].map((coach) => (
                <div key={coach.name} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Top section */}
                  <div className="flex items-start mb-4">
                    <div className="flex items-center gap-3">
                      {coach.photo ? (
                        <Image src={coach.photo} alt={coach.name} width={72} height={72} className="w-[72px] h-[72px] rounded-xl object-cover flex-shrink-0 ring-2 ring-white shadow-md" style={coach.photoPosition ? { objectPosition: coach.photoPosition } : undefined} />
                      ) : (
                        <div className="w-[72px] h-[72px] rounded-xl bg-[#2E353D] flex items-center justify-center text-white text-lg font-bold flex-shrink-0 ring-2 ring-white shadow-md">
                          {coach.initials}
                        </div>
                      )}
                      <div>
                        <p className="text-base font-bold text-[#2E353D]">
                          {coach.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {coach.title}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {coach.credentials}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Company tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {coach.companies.map((company) => (
                      <div key={company} className="px-2.5 py-1 rounded-[15px] bg-slate-100">
                        <span className="text-[11px] font-medium text-slate-500">
                          {company}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-4"></div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <ul className="space-y-1.5">
                      {coach.specialties.map((spec) => (
                        <li key={spec} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#C9A55C]"></div>
                          <span className="text-xs text-slate-500">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coaching Style as subtitle */}
                  <p className="text-sm font-bold text-[#2E353D]">
                    {coach.style}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Confidentiality */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#FAF8F5] relative overflow-hidden">
          {/* Warm gold glow - center */}
          <div
            className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201, 165, 92, 0.10) 0%, rgba(201, 165, 92, 0.03) 50%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          ></div>
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(201, 165, 92, 0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
            }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="text-[#C9A55C] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                CONFIDENTIALITY BUILT IN
              </p>

              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                What&apos;s shared. What&apos;s <span className="text-[#C9A55C] font-serif italic">not.</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-[#2E353D]">
                Your coaching conversations remain confidential. Your organization sees only what matters: growth and impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* What's Shared */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="w-6 h-6 text-[#C9A55C]" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold text-[#2E353D]">
                      What&apos;s Shared
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    Aggregate insights that help your organization
                  </p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      'Engagement frequency and consistency',
                      'Competency development areas being addressed',
                      'Progress toward stated goals',
                      'Overall cohort trends (anonymized)',
                      'ROI and program effectiveness metrics',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#C9A55C]" />
                        <span className="text-sm text-[#2E353D]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What's Private */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Lock className="w-6 h-6 text-[#2E353D]" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold text-[#2E353D]">
                      What&apos;s Private
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    Your strategic conversations stay confidential
                  </p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      'Specific coaching session content',
                      'Individual challenges or vulnerabilities discussed',
                      'Personal performance concerns',
                      'Relationship dynamics with specific colleagues',
                      'Career considerations or next moves',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-slate-400"></div>
                        <span className="text-sm text-slate-500">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-white border-l-4 border-[#C9A55C] rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-[#C9A55C] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-lg font-bold text-[#2E353D] mb-2">
                      Why this matters
                    </h4>
                    <p className="text-sm text-[#2E353D]">
                      Executives need a safe space to think out loud, test ideas, and work through challenges without fear of judgment or political fallout.
                      Traditional executive coaching often lacks this protection when delivered through internal HR channels. Boon EXEC creates a clear boundary
                      that enables real growth while giving your organization the visibility it needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Outcomes */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          {/* Warm glow - top right */}
          <div
            className="absolute -top-[15%] -right-[5%] w-[40%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201, 165, 92, 0.10) 0%, rgba(201, 165, 92, 0.03) 40%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          ></div>
          {/* Charcoal glow - bottom left */}
          <div
            className="absolute -bottom-[15%] -left-[5%] w-[35%] h-[40%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(46, 53, 61, 0.06) 0%, rgba(46, 53, 61, 0.02) 40%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="text-[#C9A55C] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                THE OUTCOMES
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                What you&apos;ll <span className="text-[#C9A55C] font-serif italic">develop.</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-[#2E353D]">
                Executives who complete Boon EXEC report measurable improvements across four critical dimensions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Leading Through Ambiguity',
                  description: 'Navigate complex, high-stakes decisions with confidence even when there\'s no clear "right answer"',
                  metrics: ['85% report increased decision confidence', 'Faster strategic clarity'],
                },
                {
                  icon: Users,
                  title: 'Expanding Your Leadership Range',
                  description: 'Flex between directive and collaborative styles based on context, not habit',
                  metrics: ['360 feedback improvement', 'Stronger team trust scores'],
                },
                {
                  icon: Target,
                  title: 'Sharpening Strategic Thinking',
                  description: 'See patterns earlier, connect dots faster, anticipate second-order effects',
                  metrics: ['Better long-term planning', 'Reduced reactive firefighting'],
                },
                {
                  icon: Shield,
                  title: 'Building Resilience',
                  description: 'Maintain clarity and composure under pressure without burning out',
                  metrics: ['Sustained high performance', 'Improved work-life integration'],
                },
              ].map((outcome, index) => {
                const Icon = outcome.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      <div className="p-8 pb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#2E353D] flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                        </div>

                        <h3 className="text-xl font-bold text-[#2E353D] mb-3">
                          {outcome.title}
                        </h3>

                        <p className="text-sm text-slate-500 mb-6">
                          {outcome.description}
                        </p>

                        <div className="space-y-2">
                          {outcome.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A55C]"></div>
                              <span className="text-sm font-medium text-[#2E353D]">
                                {metric}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. Cross-sell */}
        <CoherentSystem
          currentProduct="exec"
          accentColor="#C9A55C"
          headline="EXEC is part of something bigger."
          subtitle="Pair with GROW for manager development, SCALE for organization-wide coaching, or TOGETHER for team alignment. One system that compounds."
        />

        {/* 11. Pricing */}
        <ProductPricing
          accentColor="#C9A55C"
          pricingPoints={[
            { title: 'Engagement-Based Pricing', description: 'Custom pricing based on scope, duration, and seniority. No rigid packages.' },
            { title: 'Confidential Billing', description: 'Discreet invoicing and administration. Your engagement details stay private.' },
            { title: 'Flexible Terms', description: 'Engage for as long as it provides value. Scale up during transitions, dial back when you have momentum.' },
          ]}
          ctaText="Start a Conversation"
          bottomLine="Confidential. Flexible. Results-driven."
          bottomSubline="Engagements begin within 1-2 weeks"
        />

        {/* 12. Testimonials */}
        <ProductTestimonials
          logos={[]}
          testimonials={[
            {
              quote: "Stop doing everyone's job. Don't work your way out of it, manage your way out of it. You set the standard.",
              name: 'Executive',
              title: 'Mechanical Services',
            },
            {
              quote: "It gave me confidence where I was unsure on some decisions that I made or was about to make. I've learned to address issues with the person, rather than listen to hearsay from other employees.",
              name: 'VP',
              title: 'Software Technology',
            },
            {
              quote: 'I have been able to work through a challenging issue with an employee that is not thrilled to be at work.',
              name: 'Senior Director',
              title: 'Government',
            },
          ]}
        />

        {/* 13. FAQ */}
        <ProductFAQ
          faqs={[
            { question: 'How is Boon EXEC different from hiring an executive coach independently?', answer: 'Independent coaches are uncoordinated. Boon EXEC is part of a leadership system. Your coaching connects to how the rest of your organization is developing. Plus, our matching process is structured around operating style and industry context, not just referrals.' },
            { question: 'Is session content shared with my organization?', answer: 'Never. Absolute discretion is foundational to EXEC. Your sponsor receives progress summaries at midpoint and close showing focus areas and engagement quality without any session content or personal details.' },
            { question: 'What seniority levels does EXEC serve?', answer: 'C-suite, SVP, VP, and senior director-level leaders. The common thread is not title but the weight of the decisions being made and the need for a confidential space to calibrate.' },
            { question: 'How do you ensure coach quality at this level?', answer: 'Every EXEC coach has held senior operating roles (CEO, CFO, COO, SVP). They are vetted for operator depth, not just coaching certification. If the match is not right, we rematch within 48 hours.' },
            { question: 'Can EXEC be part of a broader organizational engagement?', answer: 'Yes. EXEC integrates with SCALE, GROW, and TOGETHER. Many organizations run EXEC for the senior team while using GROW for managers and SCALE for the broader workforce, creating coherent development at every level.' },
          ]}
        />

        {/* 14. Final CTA */}
        <ProductCTA
          headline={
            <>
              Get clarity when{' '}
              <span className="text-[#C9A55C] font-serif italic">the stakes are highest</span>.
            </>
          }
          subtitle="Ready to talk through the decision in front of you?"
          ctaText="Book a Strategy Call"
          trustBadges="Strictly Confidential &bull; ICF Certified &bull; Global Network"
          accentBlobColor="rgba(201, 165, 92, 0.3)"
        />
      </main>
    </>
  );
}
