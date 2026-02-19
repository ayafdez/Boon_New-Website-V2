// /app/learn/resources/building-a-leadership-development-program/page.tsx
// How to Build a Leadership Development Program From Scratch
// Pillar cluster page #4 - Tactical BOFU guide for program builders

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  generatePageMetadata,
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from '@/lib/seo'

// ── SEO ──────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: 'How to Build a Leadership Development Program From Scratch',
  description:
    "A step-by-step guide to building a leadership development program that actually works. From needs assessment to measurement, here's what most organizations get wrong and how to get it right.",
  path: '/learn/resources/building-a-leadership-development-program',
})

// ── Structured data ──────────────────────────────────────────────────

const articleJsonLd = generateArticleJsonLd({
  title: 'How to Build a Leadership Development Program From Scratch',
  description:
    'A step-by-step guide to building a leadership development program, from needs assessment through measurement.',
  url: '/learn/resources/building-a-leadership-development-program',
  publishedTime: '2026-02-19',
  modifiedTime: '2026-02-19',
})

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Learn', path: '/learn' },
  { name: 'Resources', path: '/learn/resources' },
  { name: 'Building a Leadership Development Program', path: '/learn/resources/building-a-leadership-development-program' },
])

interface FAQData {
  question: string
  answer: string
}

const FAQS: FAQData[] = [
  {
    question: 'How long does it take to build a leadership development program?',
    answer:
      "A thoughtful needs assessment takes 4-6 weeks. Program design takes another 4-8 weeks depending on complexity. A pilot can launch 2-3 months after design is complete. Full-scale rollout typically happens 6-9 months from the decision to build. Trying to compress this timeline usually means skipping the needs assessment, which is the most important step.",
  },
  {
    question: 'How much should we budget for leadership development?',
    answer:
      'Industry benchmarks suggest 3-5% of payroll for overall L&D, with leadership development being the largest single category. For coaching specifically, expect $3,000-$8,000 per leader per year depending on seniority and session frequency. The more useful question is: what is the cost of not developing your leaders? Calculate the turnover, disengagement, and productivity costs, and the investment usually looks modest by comparison.',
  },
  {
    question: 'Should we start with new managers or senior leaders?',
    answer:
      "Start where the pain is sharpest and the business impact is most visible. For most organizations, that's new managers because the transition failure rate is high and the downstream impact on team engagement and retention is enormous. But if your senior leadership team is misaligned or struggling with a major transformation, starting there might be the right call.",
  },
  {
    question: "How do we get buy-in from leaders who think they don't need development?",
    answer:
      "Position coaching as a performance accelerator, not a remediation tool. Share examples of high-performing leaders (athletes, executives, public figures) who use coaches to get better, not to fix problems. Peer influence is powerful: when respected leaders in the organization talk about coaching positively, resistance drops. And make participation easy. Friction kills adoption faster than skepticism does.",
  },
  {
    question: 'Can we build an effective program with a small L&D team?',
    answer:
      "Yes, if you're strategic about what you build internally versus what you buy. A small team should own strategy, needs assessment, and stakeholder management. Bring in external partners for coaching delivery, content development, and measurement infrastructure. The worst thing a small team can do is try to do everything themselves. You'll burn out before you build anything sustainable.",
  },
  {
    question: 'How do we know when our program needs to evolve?',
    answer:
      "Three signals: engagement is declining (people are going through the motions), the business context has changed (new strategy, reorg, acquisition) and the program hasn't adapted, or measurement shows diminishing returns (early cohorts saw strong results but recent ones are flat). Programs should be reviewed and refreshed at least annually.",
  },
]

const faqJsonLd = generateFAQJsonLd(FAQS)

// ── Data ─────────────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: 'before-you-start', label: 'Before you build anything' },
  { id: 'needs-assessment', label: 'Step 1: Needs assessment (the real version)' },
  { id: 'audience-design', label: 'Step 2: Define your audiences' },
  { id: 'modality-mix', label: 'Step 3: Choose your modalities' },
  { id: 'competency-framework', label: 'Step 4: Build a competency framework' },
  { id: 'program-architecture', label: 'Step 5: Design the program architecture' },
  { id: 'buy-vs-build', label: 'Step 6: Buy, build, or blend' },
  { id: 'launch', label: 'Step 7: Launch without the chaos' },
  { id: 'measurement', label: 'Step 8: Measure what matters' },
  { id: 'common-traps', label: 'The traps that kill programs' },
  { id: 'boon-approach', label: 'How Boon fits into your program' },
  { id: 'faq', label: 'FAQ' },
]

const AUDIENCE_SEGMENTS = [
  {
    level: 'New to leadership',
    color: 'bg-boon-blue',
    who: 'First-time managers, newly promoted team leads, ICs taking on people responsibilities for the first time.',
    needs:
      'Feedback delivery, delegation, running effective 1:1s, managing former peers, shifting from "doing" to "enabling." The fundamentals.',
  },
  {
    level: 'Experienced managers',
    color: 'bg-boon-green',
    who: 'Managers with 2-5 years of experience leading teams. They have the basics but hit a plateau.',
    needs:
      'Coaching their own direct reports, managing performance at both ends (underperformers and top talent), cross-functional influence, building team culture deliberately.',
  },
  {
    level: 'Senior leaders',
    color: 'bg-boon-gold',
    who: 'Directors, VPs, and functional heads leading other managers. Strategy and organizational complexity define their role.',
    needs:
      'Organizational design, executive communication, leading through ambiguity, board and C-suite presence, managing up and across, building leadership bench strength.',
  },
  {
    level: 'Executives',
    color: 'bg-boon-coral',
    who: 'C-suite and senior-most leaders accountable for enterprise outcomes.',
    needs:
      'Enterprise strategy, stakeholder management, public presence, culture stewardship, succession planning. Often lonely at the top and need confidential thinking partners.',
  },
]

const MODALITY_ROWS = [
  ['1:1 coaching', 'Individual behavior change, personalized skill building, working through real situations in real time', 'Cost per person is higher. Requires quality coaches and good matching.'],
  ['Group coaching / cohorts', 'Shared learning, peer accountability, building a common leadership language across a cohort', 'Individual attention is limited. Pacing must accommodate different skill levels.'],
  ['Workshops', 'Introducing frameworks, building shared vocabulary, practicing skills in a safe environment', 'Retention drops sharply without follow-up. Behavior change requires more than a single session.'],
  ['Mentoring', 'Career navigation, organizational knowledge transfer, cross-functional relationship building', 'Hard to scale. Quality depends entirely on mentor availability and skill.'],
  ['Self-directed learning', 'Knowledge acquisition, foundational concepts, individual exploration of topics', "Low completion rates. Zero accountability. Doesn't change behavior on its own."],
  ['On-the-job assignments', 'Applying skills in real contexts, stretch experiences, learning by doing', 'Requires intentional design and support. Without coaching alongside, people learn bad habits as often as good ones.'],
]

const COMPETENCY_LEVELS = [
  { level: 'New manager', behavior: 'Delivers timely, specific feedback to direct reports in 1:1 settings. Balances positive recognition with constructive input. Follows up on development conversations.', color: 'bg-boon-blue' },
  { level: 'Experienced manager', behavior: 'Creates a team culture where feedback flows in all directions. Coaches direct reports to give better feedback to each other. Addresses performance issues directly rather than avoiding them.', color: 'bg-boon-green' },
  { level: 'Senior leader', behavior: 'Models feedback transparency at the organizational level. Builds systems that institutionalize feedback (skip-levels, 360s, retrospectives). Ensures managers across the organization are equipped and held accountable for feedback quality.', color: 'bg-boon-gold' },
]

const PROGRAM_TIMELINE = [
  { month: 'Month 1', items: 'Needs assessment, coach matching, first coaching session, manager orientation workshop', color: 'bg-boon-blue' },
  { month: 'Month 2', items: 'Biweekly coaching (feedback & delegation focus), cohort session #1: The Manager Shift', color: 'bg-boon-blue' },
  { month: 'Month 3', items: 'Biweekly coaching (performance conversations), cohort session #2: Difficult Conversations', color: 'bg-boon-green' },
  { month: 'Month 4', items: 'Biweekly coaching (team dynamics), cohort session #3: Building Your Team Culture', color: 'bg-boon-green' },
  { month: 'Month 5', items: 'Biweekly coaching (upward management), cohort session #4: Managing Up and Across', color: 'bg-boon-gold' },
  { month: 'Month 6', items: 'Final coaching session, competency reassessment, cohort capstone: Your Leadership Identity', color: 'bg-boon-gold' },
]

const TRAPS = [
  {
    trap: 'The event trap',
    desc: 'You schedule a great offsite. People are energized. They go back to their desks and nothing changes. Three months later, the offsite is a memory. Events create energy, not change. If your program is a series of events with nothing in between, you\'re spending money on enthusiasm that evaporates.',
  },
  {
    trap: 'The content trap',
    desc: 'You build a beautiful library of leadership content: courses, videos, articles, assessments. Completion rates hover around 15%. The people who need it most never engage. Content is necessary but not sufficient. Without coaching, accountability, and application support, content is just information that sits unused.',
  },
  {
    trap: 'The top-only trap',
    desc: 'You invest heavily in executive coaching and ignore everyone else. Your VPs are developing beautifully. Meanwhile, the managers who interact with 80% of your workforce every day are struggling without support. The highest-leverage investment in most organizations is at the manager level, not the executive level.',
  },
  {
    trap: 'The vendor fragmentation trap',
    desc: "You use one vendor for coaching, another for workshops, a third for assessments, and a fourth for content. None of them talk to each other. Your L&D team spends half their time coordinating vendors instead of designing development. And you can't measure anything holistically because the data lives in five different systems.",
  },
  {
    trap: 'The one-and-done trap',
    desc: 'Someone completes the six-month program and is "graduated." Development stops. But leadership is not a credential you earn once. The best leaders continue developing throughout their careers. Design for ongoing growth, not a finish line.',
  },
]

const PRODUCTS = [
  {
    product: 'SCALE',
    tagline: '1:1 coaching for everyone',
    fit: "The coaching layer. Matched coaches for every leader in your program, from new managers to senior leaders. Competency-mapped, confidential, and measurable. This is the sustained practice and accountability that workshops alone can't provide.",
    link: '/solutions/scale',
    color: 'bg-boon-blue',
  },
  {
    product: 'GROW',
    tagline: 'When your managers are underwater',
    fit: 'The cohort layer. Group coaching and facilitated development for manager cohorts. Builds shared leadership language, peer accountability, and collective skill development. The peer learning that makes individual coaching even more effective.',
    link: '/solutions/grow',
    color: 'bg-boon-green',
  },
  {
    product: 'EXEC',
    tagline: 'When stakes are highest',
    fit: "The executive layer. Senior-level coaching with coaches who've operated at the executive level. Confidential, high-touch, and designed for the complexity that comes with leading at scale.",
    link: '/solutions/exec',
    color: 'bg-boon-gold',
  },
  {
    product: 'TOGETHER',
    tagline: 'When the team needs to get on the same page',
    fit: 'The team layer. Facilitated team sessions for alignment, communication, and collaborative skill building. The connective tissue between individual development and team performance.',
    link: '/solutions/together',
    color: 'bg-boon-coral',
  },
]

const RELATED_RESOURCES = [
  { label: 'What Is Leadership Development? The Complete Guide', href: '/learn/resources/what-is-leadership-development' },
  { label: 'Measuring Coaching ROI: A Guide for L&D Leaders', href: '/learn/resources/measuring-coaching-roi' },
  { label: 'The First-Time Manager Problem Nobody Talks About', href: '/learn/blog/first-time-manager' },
  { label: "Coaching vs. Mentoring: What's the Difference?", href: '/learn/resources/coaching-vs-mentoring' },
  { label: 'Leadership Development for Remote and Hybrid Teams', href: '/learn/resources/leadership-development-remote-teams' },
]

// ── Shared sub-components ────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-body font-bold text-xs tracking-[0.12em] uppercase text-boon-blue mb-3">
      {children}
    </span>
  )
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic text-boon-blue">{children}</span>
}

function KickerCoral({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic text-boon-light-coral">{children}</span>
}

function Callout({ children, accent = 'blue' }: { children: React.ReactNode; accent?: 'blue' | 'coral' | 'green' }) {
  const colors = { blue: 'border-l-boon-blue', coral: 'border-l-boon-coral', green: 'border-l-boon-green' }
  return (
    <div className={`bg-boon-off-white border-l-4 ${colors[accent]} rounded-r-lg px-6 py-5 my-8`}>
      {children}
    </div>
  )
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-boon-coral pl-6 py-4 my-8">
      <p className="font-serif text-xl text-boon-navy leading-relaxed m-0">{children}</p>
    </blockquote>
  )
}

function SectionBreak() {
  return <hr className="border-t border-gray-200 my-12" />
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-boon-blue text-white font-sans font-bold text-lg flex-shrink-0">
      {n}
    </span>
  )
}

function CTABanner({
  heading,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  heading: React.ReactNode
  body: string
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
}) {
  return (
    <div className="bg-gradient-to-br from-boon-blue to-boon-deep-blue rounded-2xl p-8 md:p-10 text-center my-12 text-white">
      <h2 className="font-sans text-2xl md:text-[1.65rem] font-bold text-white mt-0 mb-2 tracking-tight">
        {heading}
      </h2>
      <p className="text-white/85 max-w-lg mx-auto mb-6 text-[15px]">{body}</p>
      <Link
        href={primaryHref}
        className="inline-block bg-boon-coral hover:bg-boon-light-coral text-white font-semibold px-8 py-3 rounded-lg transition-all hover:-translate-y-0.5"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="block mt-3 text-white/70 text-sm hover:text-white/90 transition-colors"
      >
        {secondaryLabel} &rarr;
      </Link>
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────────────

export default function BuildingLeadershipDevProgramPage() {
  return (
    <>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-boon-navy to-[#1e2d4a] pt-20 pb-16 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/learn" className="hover:text-white/80 transition-colors">Learn</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href="/learn/resources" className="hover:text-white/80 transition-colors">Resources</Link>
            <span className="mx-2">&rsaquo;</span>
            <span>Building a Leadership Development Program</span>
          </nav>

          <span className="inline-block font-body font-bold text-xs tracking-[0.12em] uppercase text-boon-light-coral mb-3">
            The Builder&apos;s Guide
          </span>
          <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
            How to build a leadership <br />
            development program <KickerCoral>that works.</KickerCoral>
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            Not another off-the-shelf curriculum. Not another keynote series disguised as
            development. Here&apos;s how to build a program that changes how your leaders actually
            operate, from needs assessment through measurement.
          </p>
          <div className="flex gap-6 mt-6 text-sm text-white/50">
            <span>16 min read</span>
            <span>February 2026</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-12">

        {/* TOC */}
        <nav className="bg-boon-off-white rounded-xl px-8 py-6 mb-12">
          <h3 className="font-sans font-semibold text-boon-navy text-base mb-4">What we&apos;ll cover</h3>
          <ol className="list-decimal pl-5 space-y-2 text-[15px]">
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-boon-charcoal font-medium hover:text-boon-blue transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Before You Start ── */}
        <section id="before-you-start">
          <SectionLabel>First Principles</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            Before you build <Kicker>anything.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            Most leadership development programs fail before they launch. Not because of bad
            content or weak facilitation, but because they were built to solve the wrong problem.
            Someone in the C-suite says &ldquo;we need leadership development,&rdquo; HR puts together a
            program, and six months later nobody can explain what changed.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            The programs that actually work start with a different question. Not &ldquo;what leadership
            content should we deliver?&rdquo; but &ldquo;what is happening in our organization right now that
            better leadership would fix?&rdquo; That shift from content-first to problem-first is the
            single biggest predictor of whether a program will produce results or just produce
            attendance.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            A second principle: leadership development is not an event. It&apos;s a system. A two-day
            offsite can generate energy and alignment, but it can&apos;t change behavior. Behavior
            changes through sustained practice, feedback, and accountability over months. If your
            &ldquo;program&rdquo; is a collection of events with no connective tissue between them, you&apos;ve
            built a calendar, not a development system.
          </p>

          <QuoteBlock>
            A program is not a calendar of events. It&apos;s a system that produces
            behavior change over time.
          </QuoteBlock>
        </section>

        <SectionBreak />

        {/* ── Step 1: Needs Assessment ── */}
        <section id="needs-assessment">
          <div className="flex items-start gap-4 mb-4">
            <StepNumber n={1} />
            <div>
              <SectionLabel>Needs Assessment</SectionLabel>
              <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight">
                Start with what&apos;s <Kicker>actually broken.</Kicker>
              </h2>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            A real needs assessment isn&apos;t a survey with five Likert-scale questions. It&apos;s a
            diagnostic process that identifies specific capability gaps that are causing
            specific business problems. The output should be precise enough that you can
            point to it and say: &ldquo;This is what we&apos;re fixing, and here&apos;s how we&apos;ll know
            it&apos;s fixed.&rdquo;
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Talk to the right people</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            Don&apos;t just ask executives what they think leaders need. They&apos;ll give you generic
            answers like &ldquo;better communication&rdquo; and &ldquo;strategic thinking.&rdquo; Instead, triangulate
            across three sources: senior leaders (what do they see from above?), the leaders
            themselves (where are they struggling?), and their teams (what&apos;s the experience
            of being led by these people?). The gaps between these three perspectives are
            where the real development needs live.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Look at the data you already have</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            Before you collect new data, mine what exists. Engagement survey results (which
            questions score lowest? Do scores vary by manager?). Exit interview themes (why
            are people leaving, and is leadership cited?). Performance review patterns (where
            do managers consistently struggle?). Promotion failure rates (are newly-promoted
            leaders succeeding or floundering?). This data already tells a story. Most
            organizations have never read it holistically.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Translate needs into development goals</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            &ldquo;Our managers need to be better at communication&rdquo; is not a development goal.
            &ldquo;Our managers need to deliver clear, direct feedback in a way that motivates
            rather than demoralizes&rdquo; is. The more specific your goals, the more clearly you
            can design programming and the more precisely you can measure outcomes.
          </p>

          <Callout>
            <p className="text-[15px] leading-relaxed m-0">
              <strong className="text-boon-navy">The specificity test:</strong> If you can&apos;t
              describe what &ldquo;success&rdquo; looks like in behavioral terms, your goal isn&apos;t specific
              enough. &ldquo;Better strategic thinking&rdquo; fails this test. &ldquo;Leaders who can articulate
              their team&apos;s priorities in the context of company strategy, make trade-off decisions
              without escalating everything, and allocate resources based on impact rather than
              urgency&rdquo; passes it.
            </p>
          </Callout>
        </section>

        <SectionBreak />

        {/* ── Step 2: Audience Design ── */}
        <section id="audience-design">
          <div className="flex items-start gap-4 mb-4">
            <StepNumber n={2} />
            <div>
              <SectionLabel>Audience Design</SectionLabel>
              <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight">
                Define your <Kicker>audiences.</Kicker>
              </h2>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            One program for all leaders is almost always a mistake. A first-time manager
            and a VP face fundamentally different challenges. Putting them in the same room
            with the same content means neither gets what they need. The first-time manager
            drowns in strategic frameworks they can&apos;t yet apply. The VP is bored by basics
            they mastered years ago.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            Segment your leadership population by the challenges they face, not just by title
            or tenure. Here&apos;s a framework that works for most organizations:
          </p>

          <div className="space-y-4 my-8">
            {AUDIENCE_SEGMENTS.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className={`flex-shrink-0 w-1.5 rounded-full ${item.color}`} />
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="font-sans font-bold text-boon-navy text-base mb-1">{item.level}</h4>
                  <p className="text-[14px] text-gray-400 mb-2">{item.who}</p>
                  <p className="text-[15px] text-gray-500 leading-relaxed m-0">
                    <strong className="text-boon-navy">Key needs:</strong> {item.needs}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            You don&apos;t need to launch programs for every audience simultaneously. Start with
            the segment where the need is most acute and the business impact is most visible.
            For most organizations, that&apos;s new managers or the senior leader tier.
          </p>
        </section>

        <SectionBreak />

        {/* ── Step 3: Modality Mix ── */}
        <section id="modality-mix">
          <div className="flex items-start gap-4 mb-4">
            <StepNumber n={3} />
            <div>
              <SectionLabel>Modality Mix</SectionLabel>
              <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight">
                Choose your <Kicker>modalities.</Kicker>
              </h2>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            Different development goals require different delivery methods. The mistake is
            picking a modality first (usually &ldquo;let&apos;s do a workshop&rdquo;) and then fitting your
            goals into it. Instead, match the modality to what you&apos;re trying to develop.
          </p>

          <div className="my-8 overflow-x-auto">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="bg-boon-navy text-white">
                  <th className="px-5 py-3 text-left font-sans font-semibold text-sm">Modality</th>
                  <th className="px-5 py-3 text-left font-sans font-semibold text-sm">Best for</th>
                  <th className="px-5 py-3 text-left font-sans font-semibold text-sm">Limitations</th>
                </tr>
              </thead>
              <tbody>
                {MODALITY_ROWS.map(([modality, best, limits], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-boon-off-white'}>
                    <td className="px-5 py-3 font-semibold text-boon-navy whitespace-nowrap">{modality}</td>
                    <td className="px-5 py-3 text-gray-500">{best}</td>
                    <td className="px-5 py-3 text-gray-500">{limits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            The strongest programs layer modalities together. A cohort workshop introduces the
            framework. 1:1 coaching helps each leader apply it to their specific context.
            Peer accountability groups maintain momentum between coaching sessions. On-the-job
            assignments create practice opportunities. Each modality reinforces the others.
          </p>

          <Callout accent="green">
            <p className="text-[15px] leading-relaxed m-0">
              <strong className="text-boon-navy">The integration principle:</strong> A program
              with three connected modalities outperforms a program with five disconnected ones.
              It&apos;s not about how many things you offer. It&apos;s about how well they reinforce each
              other. If your coaching doesn&apos;t reference your workshop content, and your workshops
              don&apos;t build on coaching themes, you have parallel programs, not an integrated system.
            </p>
          </Callout>
        </section>

        <SectionBreak />

        {/* ── Step 4: Competency Framework ── */}
        <section id="competency-framework">
          <div className="flex items-start gap-4 mb-4">
            <StepNumber n={4} />
            <div>
              <SectionLabel>Competency Framework</SectionLabel>
              <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight">
                Build a competency <Kicker>framework.</Kicker>
              </h2>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            A competency framework is the backbone of your program. It defines what &ldquo;good
            leadership&rdquo; looks like in your organization, broken into specific, observable
            capabilities. Without it, development is directionless. Coaches don&apos;t know what
            to develop. Participants don&apos;t know what success looks like. L&amp;D can&apos;t measure
            whether the program is working.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Keep it lean</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            The biggest mistake in competency framework design is making it too comprehensive.
            A 30-competency model is academically thorough and practically useless. Nobody can
            develop 30 things at once. Aim for 6-10 core competencies that differentiate great
            leaders from average ones in your specific context. If every company&apos;s framework
            looks the same, it&apos;s too generic to be useful.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Make it behavioral</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            &ldquo;Strategic thinking&rdquo; is a competency. &ldquo;Identifies trade-offs between competing
            priorities and makes resource allocation decisions based on strategic impact rather
            than urgency&rdquo; is a behavior. Competencies should be described in terms of what
            someone actually does, not what they abstractly possess. Behavioral descriptions
            make coaching more targeted, feedback more specific, and measurement more rigorous.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Differentiate by level</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            &ldquo;Communication&rdquo; means different things for a new manager and a VP. For the new
            manager, it means delivering clear feedback in a 1:1 setting. For the VP, it
            means aligning a 200-person organization around a strategic narrative. Your
            competency framework should describe what each competency looks like at each
            leadership level. This is what makes the framework genuinely useful for
            development conversations rather than a poster on the wall nobody reads.
          </p>

          {/* Example competency card */}
          <div className="my-8 bg-boon-off-white rounded-xl p-6 md:p-8">
            <h4 className="font-sans font-bold text-boon-navy text-base mb-4">
              Example: &ldquo;Feedback Delivery&rdquo; across levels
            </h4>
            <div className="space-y-4">
              {COMPETENCY_LEVELS.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1.5 ${item.color}`} />
                  <div>
                    <span className="font-sans font-semibold text-boon-navy text-[14px]">{item.level}</span>
                    <p className="text-[14px] text-gray-500 leading-relaxed m-0 mt-1">{item.behavior}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBreak />

        {/* ── Step 5: Program Architecture ── */}
        <section id="program-architecture">
          <div className="flex items-start gap-4 mb-4">
            <StepNumber n={5} />
            <div>
              <SectionLabel>Program Architecture</SectionLabel>
              <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight">
                Design the <Kicker>architecture.</Kicker>
              </h2>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            This is where you connect everything: audiences, modalities, competencies, and
            timelines into a coherent program structure. The architecture determines what
            each audience experiences, in what sequence, and how the pieces connect.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Think in journeys, not events</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            A new manager shouldn&apos;t experience &ldquo;a workshop in March and coaching starting
            whenever.&rdquo; They should experience: an onboarding assessment that identifies their
            top development priorities, matched with a coach within the first month of their
            transition, enrolled in a cohort program with other new managers for peer learning,
            with monthly touchpoints that connect coaching themes to cohort content. Each piece
            builds on the last.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Build in progression</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            The program should evolve as the leader grows. Month one might focus on the basics
            of delegation and feedback. Month three shifts to team dynamics and performance
            management. Month six introduces cross-functional influence and upward management.
            This progression keeps the program relevant as leaders develop and prevents the
            &ldquo;I already know this&rdquo; disengagement that kills flat programs.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Create connective tissue</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            Between every touchpoint, something should be happening. Reflection prompts
            after a workshop. A coaching session that processes what came up in the cohort.
            A peer conversation that applies a framework from coaching to a real situation.
            The moments between formal touchpoints are where most of the development actually
            occurs. Design for them.
          </p>

          {/* Sample architecture visual */}
          <div className="my-10 bg-gradient-to-r from-boon-blue/5 via-boon-off-white to-boon-green/5 rounded-xl p-6 md:p-8">
            <h4 className="font-sans font-bold text-boon-navy text-base mb-6 text-center">
              Sample: New Manager Program (6 months)
            </h4>
            <div className="space-y-3">
              {PROGRAM_TIMELINE.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-20">
                    <span className="text-[13px] font-bold text-boon-navy">{item.month}</span>
                  </div>
                  <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-1 ${item.color}`} />
                  <p className="text-[14px] text-gray-500 leading-relaxed m-0">{item.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBreak />

        {/* ── Step 6: Buy vs Build ── */}
        <section id="buy-vs-build">
          <div className="flex items-start gap-4 mb-4">
            <StepNumber n={6} />
            <div>
              <SectionLabel>Build or Buy</SectionLabel>
              <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight">
                Buy, build, <Kicker>or blend.</Kicker>
              </h2>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            At this point you have a clear picture of what you need. Now: do you build it
            internally, buy it from a vendor, or combine both? There&apos;s no universally right
            answer. It depends on your internal capability, budget, timeline, and how
            specialized your needs are.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="font-sans font-bold text-boon-navy text-base mb-3">Build internally</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-3">
                Best when you have strong internal L&amp;D capability, highly specific cultural
                context that external vendors can&apos;t replicate, and senior leaders willing to
                facilitate.
              </p>
              <p className="text-[14px] text-gray-400 m-0">
                Risk: slower to launch, dependent on internal bandwidth, hard to scale coaching.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="font-sans font-bold text-boon-navy text-base mb-3">Buy from a vendor</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-3">
                Best when you need to move fast, don&apos;t have internal coaching capacity, want
                external expertise and measurement infrastructure, or need to scale across
                hundreds of leaders.
              </p>
              <p className="text-[14px] text-gray-400 m-0">
                Risk: less customization, potential cultural mismatch, vendor dependency.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="font-sans font-bold text-boon-navy text-base mb-3">Blend both</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-3">
                Best when you want internal ownership of strategy and culture, but need
                external capacity for coaching delivery, measurement, and scaling. Most
                organizations land here.
              </p>
              <p className="text-[14px] text-gray-400 m-0">
                Risk: coordination complexity. The internal and external pieces need to
                actually talk to each other.
              </p>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            Most organizations that are serious about leadership development end up blending.
            They own the strategy, the competency framework, and the cultural context. They
            bring in external partners for coaching delivery, measurement infrastructure, and
            the kind of scalable programming that internal teams can&apos;t build and maintain alone.
          </p>
        </section>

        <SectionBreak />

        {/* ── Step 7: Launch ── */}
        <section id="launch">
          <div className="flex items-start gap-4 mb-4">
            <StepNumber n={7} />
            <div>
              <SectionLabel>Launch</SectionLabel>
              <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight">
                Launch without <Kicker>the chaos.</Kicker>
              </h2>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            Program launches fail for predictable reasons: unclear communication about what the
            program is and isn&apos;t, participants who don&apos;t understand what&apos;s expected, managers
            who aren&apos;t bought in, and logistics that create friction. Here&apos;s how to avoid
            each one.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Get executive sponsorship that&apos;s visible</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            Not a one-time email from the CHRO. Visible, ongoing sponsorship where a senior
            leader talks about why this matters, shares their own development story, and
            checks in on progress. When the CEO says &ldquo;I have a coach and it&apos;s made me better,&rdquo;
            the stigma around coaching disappears overnight.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Brief managers before participants</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            The participant&apos;s direct manager is either the program&apos;s biggest ally or its biggest
            obstacle. If the manager doesn&apos;t understand the program, doesn&apos;t support it, or
            subtly signals that it&apos;s a waste of time, participation will be hollow. Brief
            managers first. Explain what the program is, what their role is (supportive, not
            intrusive), and how they&apos;ll see development show up in their team.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Start with a pilot</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            Don&apos;t launch to 500 people on day one. Run a 30-50 person pilot with a cohort
            that&apos;s engaged and representative. Use the pilot to work out logistics, test
            your measurement approach, collect early stories of impact, and build internal
            champions who&apos;ll evangelize the program when you scale.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Remove friction from the participant experience</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            If scheduling a coaching session requires three emails and a calendar circus,
            people won&apos;t do it. If joining a cohort session means navigating a confusing
            platform, energy drops before the session starts. The operational experience
            matters as much as the content. Make it seamless.
          </p>
        </section>

        <SectionBreak />

        {/* ── Step 8: Measurement ── */}
        <section id="measurement">
          <div className="flex items-start gap-4 mb-4">
            <StepNumber n={8} />
            <div>
              <SectionLabel>Measurement</SectionLabel>
              <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight">
                Measure what <Kicker>matters.</Kicker>
              </h2>
            </div>
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            We wrote an{' '}
            <Link href="/learn/resources/measuring-coaching-roi" className="text-boon-blue font-medium hover:underline">
              entire guide on measuring coaching ROI
            </Link>, so we won&apos;t repeat all of it here. But here&apos;s the summary that applies
            to your overall program:
          </p>

          <p className="mb-5 text-[17px] leading-relaxed">
            Build measurement into the program design from day one, not as an afterthought.
            Track three layers: leading indicators (are people engaged and applying what they&apos;re
            learning?), competency growth (are specific capabilities improving over time?), and
            business outcomes (is the organization seeing results?). Each layer answers a
            different question and gives you something credible to report at every stage.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            The single most important design choice: create a comparison group. Even an
            imperfect one. &ldquo;Coached managers&apos; teams retained 15% more top performers than
            the company average&rdquo; is the kind of sentence that protects a budget.
          </p>
        </section>

        <SectionBreak />

        {/* ── Common Traps ── */}
        <section id="common-traps">
          <SectionLabel>Watch Out</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            The traps that <Kicker>kill programs.</Kicker>
          </h2>

          <div className="space-y-8 my-8">
            {TRAPS.map((item, i) => (
              <div key={i}>
                <h3 className="font-sans text-xl font-semibold text-boon-navy mb-2">{item.trap}</h3>
                <p className="text-[17px] text-gray-500 leading-relaxed m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mid-page CTA */}
        <CTABanner
          heading={<>One system. <KickerCoral>Every level.</KickerCoral></>}
          body="Boon replaces the fragmented vendor stack with one platform that covers coaching, manager development, executive support, and team programming. Matched coaches. Built-in measurement. No coordination tax."
          primaryHref="/demo"
          primaryLabel="Book a Strategy Call"
          secondaryHref="/solutions"
          secondaryLabel="See how the products connect"
        />

        <SectionBreak />

        {/* ── Boon's Approach ── */}
        <section id="boon-approach">
          <SectionLabel>How Boon Fits</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            How Boon fits into <Kicker>your program.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            Boon isn&apos;t trying to replace your entire leadership development strategy. We&apos;re
            the coaching and development infrastructure that makes it work. Here&apos;s how each
            product maps to the program architecture we&apos;ve described in this guide:
          </p>

          <div className="space-y-4 my-8">
            {PRODUCTS.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className={`flex-shrink-0 w-1.5 rounded-full ${item.color}`} />
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Link href={item.link} className="font-sans font-bold text-boon-navy text-base hover:text-boon-blue transition-colors">
                      {item.product}
                    </Link>
                    <span className="text-[13px] text-gray-400">{item.tagline}</span>
                  </div>
                  <p className="text-[15px] text-gray-500 leading-relaxed m-0">{item.fit}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-5 text-[17px] leading-relaxed">
            What makes this different from assembling four separate vendors: all four products
            share one platform, one coaching network, one competency framework, and one
            measurement system. Your L&amp;D team sees the whole picture in one place. Leaders
            experience a connected development journey, not a disjointed collection of programs.
          </p>
        </section>

        <SectionBreak />

        {/* ── FAQ ── */}
        <section id="faq">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-6">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-gray-200">
            {FAQS.map((item, i) => (
              <div key={i} className="py-5">
                <h3 className="font-sans font-semibold text-boon-navy text-[1.05rem] mb-2">
                  {item.question}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed m-0">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <SectionBreak />

        {/* Bottom CTA */}
        <CTABanner
          heading={<>Build a program <KickerCoral>that compounds.</KickerCoral></>}
          body="110+ enterprise customers. Four connected products. Coaching, manager development, executive support, and team programming in one system."
          primaryHref="/demo"
          primaryLabel="Book a Strategy Call"
          secondaryHref="/learn/resources/what-is-leadership-development"
          secondaryLabel="Read the complete leadership development guide"
        />

        {/* Related Resources */}
        <section className="mb-16">
          <SectionLabel>Keep Reading</SectionLabel>
          <h2 className="font-sans text-2xl font-bold text-boon-navy tracking-tight mb-4">
            Related
          </h2>
          <div className="space-y-2">
            {RELATED_RESOURCES.map((item, i) => (
              <p key={i} className="mb-1 text-[17px]">
                <Link href={item.href} className="text-boon-blue font-medium hover:underline">
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
