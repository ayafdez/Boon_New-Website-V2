// /app/compare/betterup/page.tsx
// Boon vs BetterUp - Competitive comparison landing page

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  generatePageMetadata,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from '@/lib/seo'
import {
  ComparisonTabs,
  FAQAccordion,
  CheckIcon,
  type ComparisonTab,
  type FAQData,
} from './client'

// ── SEO ──────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon vs BetterUp: An Honest Comparison',
  description:
    "BetterUp offers 1:1 coaching at scale. Boon connects coaching, cohort development, executive support, and team workshops into one system tied to your competencies. Here's how they compare.",
  path: '/compare/betterup',
})

// ── Structured data ──────────────────────────────────────────────────

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Compare', path: '/compare' },
  { name: 'Boon vs BetterUp', path: '/compare/betterup' },
])

const FAQS: FAQData[] = [
  {
    question: "We're already using BetterUp. Why would we evaluate Boon?",
    answer:
      "Many of the companies we talk to aren't unhappy with BetterUp's coaching. The challenge is usually around measurement and customization. They can see that employees like their coaches, but they can't connect coaching to their competency framework, involve managers in the development process, or present outcome data that leadership finds compelling. If those are gaps you're experiencing, a conversation with Boon is worth 30 minutes.",
  },
  {
    question: 'BetterUp has 4,000+ coaches. Can Boon match that scale?',
    answer:
      "We have 270+ certified coaches serving clients globally. For most organizations, the question isn't \"how many coaches do you have?\" It's \"can you match my people with coaches who understand their role, their context, and the decisions they're actually facing?\" Our matching is built around organizational context, not just personality fit. BetterUp has a larger network, which can matter for very large global deployments across dozens of languages simultaneously.",
  },
  {
    question: "BetterUp is investing heavily in AI. What's Boon's approach?",
    answer:
      "We take AI seriously. Our practice space lets employees run AI-powered roleplays on specific scenarios tied directly to their coaching goals, so development continues between sessions. AI also powers our coach matching, surfaces insights, and helps coaches prepare. The difference is philosophy: BetterUp Grow is designed to replace human coaching at scale with AI-first interactions. We built AI to extend and reinforce the human coaching relationship. Both approaches have merit. It depends on whether you want AI as the primary modality or as a force multiplier for your coaches.",
  },
  {
    question: "How does Boon's pricing actually compare?",
    answer:
      "BetterUp's enterprise pricing isn't publicly disclosed, so direct comparison is difficult. What we can say is that our usage-based model means you're paying for coaching that actually gets used. For organizations where coaching utilization is a challenge, that alignment matters. We're transparent about pricing early in the conversation so you can evaluate the investment before committing to a lengthy sales process.",
  },
  {
    question: "What does 'manager visibility' actually look like?",
    answer:
      "At the start of a coaching engagement, the manager, employee, and coach sit down together to align on development goals. At the end, they reconvene to review progress. In between, managers have access to a dashboard showing aggregate participation and competency trends for their team. This isn't surveillance. It's giving managers the context they need to reinforce what coaching is building, without breaking confidentiality.",
  },
  {
    question: 'Is Boon enterprise-ready?',
    answer:
      "We serve enterprise customers across industries including financial services, technology, and professional services. We're SOC 2 compliant, and our platform is built on enterprise-grade infrastructure. We're transparent about our size. We're not a 4,000-person company. But for many buyers, that's a feature, not a bug. You get a partner who's responsive, who knows your program deeply, and who can iterate on the product when your needs evolve.",
  },
]

const faqJsonLd = generateFAQJsonLd(FAQS)

// ── Comparison data ──────────────────────────────────────────────────

const COMPARISON_TABS: ComparisonTab[] = [
  {
    key: 'customization',
    label: 'Customization',
    rows: [
      { feature: 'Competency alignment', bStatus: 'yes', buStatus: 'no', boon: "Coaching, assessments, and goals mapped to your organization's competency framework", betterup: "Standardized 'Whole Person Model' with 25 proprietary dimensions applied across all clients" },
      { feature: 'Program configuration', bStatus: 'yes', buStatus: 'partial', boon: 'Every program configured to your pressure points. No two implementations look the same', betterup: 'Modular products (Lead, Manage, Ready) with some customization at enterprise tier' },
      { feature: 'Coach context', bStatus: 'yes', buStatus: 'partial', boon: 'Coaches briefed on your culture, competencies, and specific development goals', betterup: 'Coach matching is algorithmic. Limited organizational context in the matching process' },
      { feature: 'Assessment integration', bStatus: 'yes', buStatus: 'partial', boon: 'Pre/post assessments tied to your specific framework. Can integrate with existing 360 tools', betterup: 'Proprietary assessments only. Limited ability to map to your existing competency language' },
      { feature: 'Product architecture', bStatus: 'yes', buStatus: 'partial', boon: 'One integrated system: SCALE, GROW, EXEC, TOGETHER. Context carries between programs', betterup: 'Separate products (Lead, Manage, Ready, Grow) that operate more independently' },
    ],
  },
  {
    key: 'manager',
    label: 'Manager Visibility',
    rows: [
      { feature: 'Manager-coach connection', bStatus: 'yes', buStatus: 'no', boon: 'Structured alignment sessions where manager, employee, and coach set and review goals together', betterup: 'No structured way for managers to connect with coaches or influence development direction' },
      { feature: 'Development visibility', bStatus: 'yes', buStatus: 'partial', boon: 'Managers see aggregate progress and competency trends without compromising confidentiality', betterup: 'Limited. Coaching is primarily employee-driven with minimal manager involvement' },
      { feature: 'Manager dashboard', bStatus: 'yes', buStatus: 'no', boon: 'Real-time portal showing participation, progress, and competency movement across their team', betterup: 'No dedicated manager-facing dashboard for development visibility' },
      { feature: 'Tri-party alignment', bStatus: 'yes', buStatus: 'no', boon: 'Kickoff and closeout sessions with manager, employee, and coach create shared accountability', betterup: 'Coaching relationship is between employee and coach only' },
      { feature: 'Confidentiality balance', bStatus: 'yes', buStatus: 'partial', boon: 'Visibility without surveillance. Managers see enough to support, not enough to intrude', betterup: 'Full confidentiality, but managers are left entirely out of the development loop' },
    ],
  },
  {
    key: 'pricing',
    label: 'Pricing & Access',
    rows: [
      { feature: 'Pricing model', bStatus: 'yes', buStatus: 'partial', boon: 'Usage-based. Pay for coaching your people actually use', betterup: 'License-based enterprise pricing. Custom quotes only, not publicly disclosed' },
      { feature: 'Pricing transparency', bStatus: 'yes', buStatus: 'no', boon: 'Clear pricing structure discussed upfront in the evaluation process', betterup: 'Requires engagement with sales team. Pricing varies significantly by deal' },
      { feature: 'Coaching accessibility', bStatus: 'yes', buStatus: 'partial', boon: 'Designed to bring coaching to every level, not just executives and HiPos', betterup: 'Enterprise pricing can limit coaching to top leadership tiers depending on budget' },
      { feature: 'Unused sessions', bStatus: 'yes', buStatus: 'partial', boon: "Usage-based model means you're not paying for sessions that don't get used", betterup: 'Individual plans allow some rollover. Enterprise terms vary by contract' },
      { feature: 'Multi-product value', bStatus: 'yes', buStatus: 'partial', boon: 'One partner for coaching, cohorts, exec support, and workshops. No stacking vendor contracts', betterup: 'Products available but typically sold and priced separately' },
    ],
  },
  {
    key: 'roi',
    label: 'ROI & Data',
    rows: [
      { feature: 'Outcome measurement', bStatus: 'yes', buStatus: 'partial', boon: 'Competency-level tracking showing verified behavior change over time', betterup: 'Self-reported assessments and engagement metrics. Stronger on sentiment than business outcomes' },
      { feature: 'Executive reporting', bStatus: 'yes', buStatus: 'partial', boon: "Dashboards built to answer 'what's changing?' with data your CHRO can present to the board", betterup: 'Aggregate data available. Companies report difficulty tying coaching to business outcomes' },
      { feature: 'Customer portal', bStatus: 'yes', buStatus: 'partial', boon: 'Real-time portal for your L&D team with participation, progress, and competency data', betterup: 'Admin tools and reporting available. Depth varies by enterprise tier' },
      { feature: 'Competency growth data', bStatus: 'yes', buStatus: 'no', boon: "Pre/post measurement against your specific competencies. Not generic benchmarks", betterup: "Whole Person Model tracking is standardized, not mapped to your org's framework" },
      { feature: 'Business case support', bStatus: 'yes', buStatus: 'partial', boon: 'We help you build the ROI narrative to defend and expand the coaching investment', betterup: 'Resources available but the connection between coaching data and business outcomes is often unclear' },
    ],
  },
  {
    key: 'platform',
    label: 'Platform',
    rows: [
      { feature: 'AI capabilities', bStatus: 'yes', buStatus: 'yes', boon: 'AI-powered practice space for scenario-based roleplays tied to coaching goals. Smart matching, insights, and between-session reinforcement', betterup: 'BetterUp Grow offers AI coaching at scale, embedded in Slack/Teams. More AI-first, less human-coach integration' },
      { feature: 'Coach network', bStatus: 'yes', buStatus: 'yes', boon: '270+ certified coaches serving clients globally. Matched by role, function, and organizational context', betterup: '4,000+ coaches across 70 countries. Larger network, but matching is more algorithmic than contextual' },
      { feature: 'Implementation', bStatus: 'yes', buStatus: 'partial', boon: 'Weeks to launch. Consultative approach with a dedicated partner who knows your culture', betterup: 'Enterprise implementations can be lengthy. Account team continuity varies' },
      { feature: 'Security', bStatus: 'yes', buStatus: 'yes', boon: 'SOC 2 compliant with enterprise-grade data protection', betterup: 'SOC 2 Type II, ISO 27001, FedRAMP. Strong security posture' },
      { feature: 'Group coaching', bStatus: 'yes', buStatus: 'partial', boon: 'GROW cohorts with peer learning and TOGETHER team workshops built into the system', betterup: 'Group offerings available. Execution quality cited as inconsistent in some reviews' },
    ],
  },
]

// ── Product data ─────────────────────────────────────────────────────

const BOON_PRODUCTS = [
  { name: 'SCALE', desc: '1:1 coaching for employees at every level. Not just executives.' },
  { name: 'GROW', desc: 'Cohort-based manager development with peer learning and structured curricula.' },
  { name: 'EXEC', desc: 'Executive coaching for senior leaders with dedicated, long-term partnerships.' },
  { name: 'TOGETHER', desc: 'Team workshops and facilitated sessions for intact teams working through real challenges.' },
]

const BETTERUP_PRODUCTS = [
  { name: 'Lead', desc: '1:1 coaching for leadership development and high-potentials.' },
  { name: 'Manage', desc: 'AI-enabled assessment and learning paths for managers.' },
  { name: 'Ready', desc: 'Wellness and personal development coaching for broader populations.' },
  { name: 'Grow', desc: 'AI-powered coaching and roleplay, designed to scale without human coaches.' },
]

const THREE_PILLARS = [
  {
    num: '01',
    title: 'Customization',
    body: "Coaching anchored to your competency framework, not a generic assessment model. Your culture. Your leadership language. Your specific pressure points. Every program is configured to solve problems you're actually facing.",
    detail: "Buyers tell us the biggest gap with enterprise coaching platforms is the one-size-fits-all approach. Boon maps coaching, assessments, and development goals to the competencies your organization already uses.",
  },
  {
    num: '02',
    title: 'Manager Visibility',
    body: "Structured touchpoints where managers, employees, and coaches align on development goals. Not surveillance. Not exposure. A system where managers can actually support what coaching is building.",
    detail: "Most coaching platforms are entirely employee-driven. The manager has no connection to the coach, no visibility into progress, and no way to reinforce development. Boon's manager alignment sessions change that.",
  },
  {
    num: '03',
    title: 'Affordability at Scale',
    body: "Usage-based pricing that lets you extend coaching beyond executives and high-potentials. When coaching is accessible to every level, the impact compounds across the organization.",
    detail: "Enterprise coaching contracts often limit coaching to a narrow slice of leadership. Boon's pricing model aligns cost with actual usage, making it possible to bring coaching to every manager, not just the top tier.",
  },
]

const BETTERUP_EDGES = [
  "Coach network size: 4,000+ coaches on their platform vs. Boon's 270+",
  'Brand recognition: A decade of market presence and Fortune 500 logos',
  'Behavioral science: Deep investment in the Whole Person Model and research',
  'Government certifications: FedRAMP, StateRAMP for public sector',
]

const BOON_EDGES = [
  'Integrated system: Four programs (SCALE, GROW, EXEC, TOGETHER) that share context and data',
  'Customization: Programs mapped to your competencies, not a one-size model',
  'Manager visibility: Structured alignment sessions that connect coaching to the job',
  'Affordability: Usage-based pricing that extends coaching beyond the executive tier',
  "ROI clarity: Competency-level measurement that answers 'what's actually changing?'",
]

const ROI_CHECKLIST = [
  'Pre/post competency assessments mapped to your framework',
  'Manager alignment sessions that connect coaching to on-the-job performance',
  'Real-time dashboards your team can access anytime',
  'Aggregate reporting that shows verified behavior change, not just sentiment',
  'Data your CHRO can present to the board with confidence',
]

// ── Helper components ────────────────────────────────────────────────

function SectionLabel({ children, color = 'text-boon-blue' }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`inline-block font-body font-extrabold text-xs tracking-[0.15em] uppercase ${color} mb-3`}>
      {children}
    </span>
  )
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic text-boon-blue">{children}</span>
}

function KickerCoral({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic text-boon-coral">{children}</span>
}

function GradientBlob({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-[80px] opacity-30 pointer-events-none ${className}`} />
}

function CornerBrackets({ children, accent = 'border-boon-blue' }: { children: React.ReactNode; accent?: string }) {
  const base = `absolute w-5 h-5 border-dotted border-2 opacity-35 ${accent}`
  return (
    <div className="relative">
      <div className={`${base} -top-1.5 -left-1.5 border-r-0 border-b-0`} />
      <div className={`${base} -top-1.5 -right-1.5 border-l-0 border-b-0`} />
      <div className={`${base} -bottom-1.5 -left-1.5 border-r-0 border-t-0`} />
      <div className={`${base} -bottom-1.5 -right-1.5 border-l-0 border-t-0`} />
      {children}
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────────────

export default function BoonVsBetterUpPage() {
  return (
    <>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-boon-off-white pt-24 pb-20 px-6">
        <GradientBlob className="w-[600px] h-[600px] -top-[200px] -left-[200px] bg-boon-light-blue/40" />
        <GradientBlob className="w-[500px] h-[500px] -top-[100px] left-[60%] bg-boon-light-coral/30" />

        <div className="max-w-[900px] mx-auto relative z-10 text-center">
          <SectionLabel>Boon vs BetterUp</SectionLabel>
          <h1 className="font-sans font-bold text-[52px] leading-[1.1] text-boon-charcoal tracking-tight mb-2">
            Same goal. Different <Kicker>approach.</Kicker>
          </h1>
          <p className="font-body text-[19px] text-gray-600 max-w-[640px] mx-auto mt-5 leading-relaxed">
            BetterUp offers one-on-one coaching at scale. Boon connects coaching, cohort-based development,
            executive support, and team workshops into one system tied to your competencies, your managers,
            and your bottom line.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-boon-coral text-white rounded-[15px] font-sans font-bold text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-boon-coral/30 transition-all"
            >
              Book a Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-7 py-3.5 text-boon-charcoal rounded-[15px] font-sans font-semibold text-base border-2 border-boon-charcoal/10 hover:border-boon-blue hover:text-boon-blue transition-all"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE REAL QUESTION ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <SectionLabel>The Question Buyers Are Asking</SectionLabel>
          <h2 className="font-sans font-bold text-[40px] leading-[1.15] text-boon-charcoal tracking-tight mb-6">
            &ldquo;People like their coaches. But what&apos;s actually <Kicker>changing?</Kicker>&rdquo;
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-[620px] mx-auto leading-relaxed">
            This is the question L&amp;D leaders keep running into. Coaching feels good. Employees appreciate it.
            But when leadership asks for outcomes tied to business objectives, the answer gets murky.
            Boon was built to make that answer clear.
          </p>
        </div>
      </section>

      {/* ─── THREE PILLARS ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-boon-navy relative overflow-hidden">
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.12) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at 70% 50%, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="text-center mb-14">
            <SectionLabel color="text-boon-light-coral">Why Companies Evaluate Boon</SectionLabel>
            <h2 className="font-sans font-bold text-[40px] leading-[1.15] text-white tracking-tight">
              Three things that <KickerCoral>change the conversation.</KickerCoral>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {THREE_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-2xl p-8 border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
              >
                <div className="font-sans font-bold text-sm text-boon-coral mb-4">{pillar.num}</div>
                <div className="font-sans font-bold text-2xl text-white mb-4 leading-tight">{pillar.title}</div>
                <p className="font-body text-[15px] text-white/75 leading-relaxed mb-4">{pillar.body}</p>
                <p className="font-body text-[13px] text-white/45 leading-relaxed">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ONE SYSTEM VS ONE PRODUCT ─────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>The Structural Difference</SectionLabel>
            <h2 className="font-sans font-bold text-[40px] leading-[1.15] text-boon-charcoal tracking-tight mb-4">
              One product vs. one <Kicker>system.</Kicker>
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-[620px] mx-auto leading-relaxed">
              BetterUp is one-on-one coaching delivered at scale. Boon is four connected programs
              that share context, data, and continuity as your people grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Boon side */}
            <div className="bg-boon-blue/[0.03] rounded-2xl p-8 border border-boon-blue/10">
              <div className="font-sans font-bold text-[22px] text-boon-blue mb-6">Boon</div>
              {BOON_PRODUCTS.map((p, i) => (
                <div key={i} className="mb-5">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckIcon color="text-boon-blue" />
                    <span className="font-sans font-bold text-[15px] text-boon-charcoal">{p.name}</span>
                  </div>
                  <p className="font-body text-sm text-gray-600 pl-8">{p.desc}</p>
                </div>
              ))}
              <div className="mt-6 px-5 py-4 bg-boon-blue/[0.05] rounded-[15px] border-l-[3px] border-boon-blue">
                <p className="font-body text-sm text-boon-charcoal font-medium leading-relaxed">
                  Everything talks to each other. A manager in GROW and their direct report in SCALE
                  are working in the same system with shared context. Data flows across programs,
                  so your L&amp;D team sees the full picture, not four disconnected dashboards.
                </p>
              </div>
            </div>

            {/* BetterUp side */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="font-sans font-bold text-[22px] text-gray-400 mb-6">BetterUp</div>
              {BETTERUP_PRODUCTS.map((p, i) => (
                <div key={i} className="mb-5">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
                      <circle cx="11" cy="11" r="11" fill="#F59E0B" opacity="0.15" />
                      <path d="M7 11H15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="font-sans font-bold text-[15px] text-gray-500">{p.name}</span>
                  </div>
                  <p className="font-body text-sm text-gray-400 pl-8">{p.desc}</p>
                </div>
              ))}
              <div className="mt-6 px-5 py-4 bg-gray-100 rounded-[15px] border-l-[3px] border-gray-300">
                <p className="font-body text-sm text-gray-500 font-medium leading-relaxed">
                  Multiple products, but the core is 1:1 coaching. Manage and Grow are newer additions
                  with different underlying architectures. Group coaching and team workshops
                  are not a core part of the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE ROI STORY ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>The Business Case</SectionLabel>
            <h2 className="font-sans font-bold text-[40px] leading-[1.15] text-boon-charcoal tracking-tight">
              Coaching that proves its own <Kicker>ROI.</Kicker>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-boon-off-white rounded-2xl p-8">
              <div className="font-sans font-bold text-lg text-boon-charcoal mb-4">
                The problem L&amp;D teams face
              </div>
              <p className="font-body text-[15px] text-gray-600 leading-relaxed mb-4">
                Your CEO asks &ldquo;what&apos;s changing?&rdquo; and the best answer is satisfaction scores and session counts.
                Coaching feels valuable. But the data doesn&apos;t connect to business outcomes.
              </p>
              <p className="font-body text-[15px] text-gray-600 leading-relaxed">
                Without that connection, coaching stays a &ldquo;nice to have&rdquo; instead of a strategic investment.
                Budget gets harder to defend every year.
              </p>
            </div>

            <div className="bg-boon-blue/[0.05] rounded-2xl p-8 border border-boon-blue/10">
              <div className="font-sans font-bold text-lg text-boon-blue mb-4">
                How Boon solves it
              </div>
              {ROI_CHECKLIST.map((item, i) => (
                <div key={i} className="flex gap-2.5 mb-3 items-start">
                  <div className="mt-0.5"><CheckIcon color="text-boon-blue" /></div>
                  <p className="font-body text-sm text-boon-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DETAILED COMPARISON ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-boon-off-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Side by Side</SectionLabel>
            <h2 className="font-sans font-bold text-[40px] leading-[1.15] text-boon-charcoal tracking-tight">
              Compare the <Kicker>details.</Kicker>
            </h2>
          </div>

          <ComparisonTabs tabs={COMPARISON_TABS} />
        </div>
      </section>

      {/* ─── HONEST TAKE ───────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>An Honest Comparison</SectionLabel>
            <h2 className="font-sans font-bold text-4xl leading-[1.15] text-boon-charcoal tracking-tight">
              Where BetterUp wins, and where <Kicker>Boon wins.</Kicker>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CornerBrackets accent="border-gray-400">
              <div className="p-7 bg-gray-50 rounded-2xl">
                <div className="font-sans font-bold text-xl text-gray-500 mb-5">
                  Where BetterUp has the edge
                </div>
                {BETTERUP_EDGES.map((item, i) => (
                  <div key={i} className="flex gap-2.5 mb-3 items-start">
                    <CheckIcon color="text-gray-400" />
                    <p className="font-body text-sm text-gray-500">{item}</p>
                  </div>
                ))}
              </div>
            </CornerBrackets>

            <CornerBrackets accent="border-boon-blue">
              <div className="p-7 bg-boon-blue/[0.03] rounded-2xl border border-boon-blue/10">
                <div className="font-sans font-bold text-xl text-boon-blue mb-5">
                  Where Boon has the edge
                </div>
                {BOON_EDGES.map((item, i) => (
                  <div key={i} className="flex gap-2.5 mb-3 items-start">
                    <CheckIcon color="text-boon-blue" />
                    <p className="font-body text-sm text-boon-charcoal">{item}</p>
                  </div>
                ))}
              </div>
            </CornerBrackets>
          </div>

          <p className="font-body text-[15px] text-gray-500 text-center max-w-[600px] mx-auto mt-8 leading-relaxed">
            BetterUp is a strong platform with genuine strengths. The right choice depends on what matters most
            to your organization. We believe the best way to decide is a real conversation about your specific challenges.
          </p>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-boon-off-white">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-sans font-bold text-4xl leading-[1.15] text-boon-charcoal tracking-tight">
              Questions we hear from <Kicker>L&amp;D leaders.</Kicker>
            </h2>
          </div>

          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-boon-navy relative overflow-hidden text-center">
        <GradientBlob className="w-[600px] h-[600px] -top-[200px] left-[30%] bg-boon-blue/30" />
        <GradientBlob className="w-[400px] h-[400px] top-1/2 -left-[100px] bg-boon-coral/20" />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        />

        <div className="max-w-[640px] mx-auto relative z-10">
          <SectionLabel color="text-boon-light-coral">Ready to Compare?</SectionLabel>
          <h2 className="font-sans font-bold text-[44px] leading-[1.1] text-white tracking-tight mb-3">
            See what coaching looks like when it&apos;s built around <KickerCoral>your organization.</KickerCoral>
          </h2>
          <p className="font-body text-lg text-white/65 max-w-[500px] mx-auto mb-10 leading-relaxed">
            30 minutes. No sales pitch. We&apos;ll walk through how Boon maps to your
            specific challenges and show you what&apos;s different.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-boon-coral text-white rounded-[15px] font-sans font-bold text-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-boon-coral/40 transition-all"
          >
            Book a Strategy Call
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <div className="mt-4 font-body text-sm text-white/40">
            No commitment required
          </div>
        </div>
      </section>
    </>
  )
}
