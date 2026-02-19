// /app/learn/resources/leadership-development-remote-teams/page.tsx
// Leadership Development for Remote and Hybrid Teams
// Pillar cluster page #5 - Evergreen post-2020 search intent

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
  title: 'Leadership Development for Remote and Hybrid Teams',
  description:
    "Remote and hybrid teams need different leadership. Here's what changes, what stays the same, and how to develop leaders who can manage people they don't see every day.",
  path: '/learn/resources/leadership-development-remote-teams',
})

// ── Structured data ──────────────────────────────────────────────────

const articleJsonLd = generateArticleJsonLd({
  title: 'Leadership Development for Remote and Hybrid Teams',
  description:
    'How to develop leaders who manage distributed teams, including the specific skills remote managers need and development approaches designed for virtual delivery.',
  url: '/learn/resources/leadership-development-remote-teams',
  publishedTime: '2026-02-19',
  modifiedTime: '2026-02-19',
})

const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: 'Learn', path: '/learn' },
  { name: 'Resources', path: '/learn/resources' },
  { name: 'Remote & Hybrid Teams', path: '/learn/resources/leadership-development-remote-teams' },
])

interface FAQData {
  question: string
  answer: string
}

const FAQS: FAQData[] = [
  {
    question: 'Is virtual coaching as effective as in-person coaching?',
    answer:
      "Yes. Multiple studies have found no significant difference in outcomes between virtual and in-person coaching. The relationship quality, goal attainment, and behavior change measures are comparable. In some cases, virtual coaching is preferred because it's easier to schedule, eliminates travel friction, and allows the coachee to be in their actual work environment during the conversation.",
  },
  {
    question: 'How do we develop leaders we never see in person?',
    answer:
      "The same way you develop anyone: with clear goals, structured support, and accountability. Coaching, virtual cohort programs, peer partnerships, and async reflection all work without physical proximity. The key is designing for the medium rather than trying to replicate in-person experiences virtually. The development might look different, but the outcomes don't have to.",
  },
  {
    question: 'Should remote leaders get different development content than in-office leaders?',
    answer:
      'The core leadership competencies are the same. But remote leaders need additional development in areas like asynchronous communication, virtual meeting facilitation, trust-based management, and detecting disengagement through screens. These should supplement, not replace, the foundational leadership curriculum.',
  },
  {
    question: 'How do we handle development for hybrid teams where some leaders are remote and some are in-office?',
    answer:
      "Default to virtual delivery so everyone has the same experience. If you deliver some development in-person and some virtually, the in-person participants will have a better experience and the program creates the same inequity you're trying to eliminate. Use occasional in-person gatherings for relationship building, not for development content.",
  },
  {
    question: "What's the right cadence for virtual leadership development sessions?",
    answer:
      'For coaching: biweekly sessions of 45-60 minutes is the sweet spot for most leaders. For cohort programs: one 75-90 minute session every two to three weeks, with application work between sessions. For peer partnerships: biweekly 30-minute check-ins. More frequent and shorter consistently outperforms less frequent and longer in virtual settings.',
  },
  {
    question: "How do we create cohesion among remote leaders who don't know each other?",
    answer:
      'Cohort programs are the best mechanism. When 10-12 leaders go through a shared development experience over several months, they build relationships that persist after the program ends. These become the informal support network that remote leaders are otherwise missing. Pair the cohort with a dedicated Slack channel or similar space for ongoing connection between sessions.',
  },
]

const faqJsonLd = generateFAQJsonLd(FAQS)

// ── Data ─────────────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: 'whats-different', label: "What's actually different about remote leadership" },
  { id: 'skills-gap', label: 'The skills gap remote managers face' },
  { id: 'hybrid-complexity', label: 'The unique complexity of hybrid' },
  { id: 'development-approaches', label: 'Development approaches that work remotely' },
  { id: 'coaching-remote', label: 'Why coaching is the natural fit for remote development' },
  { id: 'building-culture', label: 'Building leadership culture without a building' },
  { id: 'common-mistakes', label: 'Common mistakes in remote leadership development' },
  { id: 'boon-approach', label: 'How Boon supports remote and hybrid teams' },
  { id: 'faq', label: 'FAQ' },
]

const SKILLS_GAPS = [
  {
    skill: 'Asynchronous communication',
    gap: "In an office, unclear communication gets corrected in real time. Someone looks confused, you explain further. Remotely, unclear communication sits in a Slack message or email for hours while someone works from the wrong assumptions. Remote leaders need to write clearly, set context explicitly, and anticipate questions before they're asked. Most managers have never been trained in this.",
  },
  {
    skill: 'Trust-based management (not surveillance)',
    gap: "When you can't see someone working, the temptation is to monitor their activity: tracking tools, required camera-on policies, frequent status check-ins. This destroys trust and signals that you manage inputs, not outcomes. Remote leaders need to define clear outcomes, trust people to achieve them, and resist the urge to micromanage the process.",
  },
  {
    skill: 'Intentional relationship building',
    gap: "In-person relationships form through proximity and shared experience. Remote relationships require deliberate effort. A remote leader who only talks to their team about work will eventually lead strangers. Building rapport, creating space for non-work connection, and maintaining human relationships through a screen are skills that don't come naturally to most people.",
  },
  {
    skill: 'Running effective virtual meetings',
    gap: "Most remote meetings are bad. They're too long, too frequent, poorly facilitated, and dominated by a few voices. Remote leaders need to be much more deliberate about when a meeting is necessary (often it isn't), how to structure it for engagement (not just information broadcast), and how to make sure quieter team members contribute.",
  },
  {
    skill: 'Detecting disengagement early',
    gap: "In an office, disengagement has visible signals: someone stops participating in meetings, arrives later, takes longer lunches, seems withdrawn. Remotely, disengagement is nearly invisible until it becomes a resignation letter. Remote leaders need to create systems for early detection: regular 1:1s with genuine check-ins, engagement pulse checks, and proactive outreach when someone goes quiet.",
  },
  {
    skill: 'Managing across time zones',
    gap: "Distributed teams often span time zones, which creates asymmetries in information access, meeting availability, and response times. Leaders who default to \"let's just hop on a call\" inadvertently exclude team members in different time zones. Effective remote leaders design for asynchronous-first communication with synchronous moments that are intentionally inclusive.",
  },
]

const WORKS_WELL = [
  { title: '1:1 coaching', desc: "Virtual coaching is equally effective as in-person coaching. The intimacy of a video call, the lack of office distractions, and the scheduling flexibility all work in coaching's favor." },
  { title: 'Small-group cohort sessions', desc: '90-minute virtual sessions with 8-12 people, well-facilitated with breakout rooms and interactive exercises. Shorter and more frequent beats long and infrequent.' },
  { title: 'Peer coaching pairs', desc: 'Two leaders meeting biweekly to practice skills and hold each other accountable. Low overhead, high impact, works perfectly over video.' },
  { title: 'Async reflection and application', desc: 'Written reflection prompts, journaling between coaching sessions, and documented practice plans. Remote workers are already comfortable with written communication.' },
]

const DOESNT_TRANSLATE = [
  { title: 'Multi-day retreats (as Zoom events)', desc: "Nobody can sit in a virtual workshop for eight hours. The magic of retreats is the informal connection between sessions, which doesn't exist virtually." },
  { title: 'Large-group workshops', desc: "30+ people on a Zoom with one facilitator is a webinar, not a workshop. Engagement drops sharply past 12 participants in virtual settings." },
  { title: 'Shadowing and observation', desc: 'Following a senior leader around for a day to learn how they operate doesn\'t work when "around" means "on their calendar." The ambient learning of physical proximity has no virtual equivalent.' },
  { title: 'Purely self-paced content', desc: "Remote workers already have screen fatigue. Adding a library of leadership videos they'll never watch doesn't count as development. Content needs human interaction wrapped around it." },
]

const COMMON_MISTAKES = [
  {
    mistake: 'Converting in-person programs to Zoom and calling it done',
    reality:
      "A two-day leadership workshop doesn't become a virtual program by turning it into a two-day Zoom session. Virtual development needs to be redesigned from scratch for the medium: shorter sessions, more interaction, more space between touchpoints for application and reflection. Lazy conversion is the most common mistake and the most damaging to participant engagement.",
  },
  {
    mistake: 'Ignoring the development needs that are unique to remote',
    reality:
      "If your leadership development program is the same whether your team is in-office, remote, or hybrid, it's not addressing the specific challenges remote leaders face. Asynchronous communication, virtual meeting facilitation, detecting disengagement through screens, managing across time zones. These need explicit attention, not the assumption that general leadership skills will transfer.",
  },
  {
    mistake: 'Over-relying on self-paced digital content',
    reality:
      "E-learning libraries are cheap to scale and easy to point to in a budget review. But completion rates for self-paced leadership content hover around 10-15% in most organizations. Remote workers already spend their entire day on screens. Adding more screen time as \"development\" is not a strategy. It's a checkbox.",
  },
  {
    mistake: 'Forgetting that remote leaders need connection, not just skills',
    reality:
      'Remote leadership is lonely. A development program that only focuses on skill-building misses the human element. Cohort experiences, peer coaching pairs, and coaching relationships all serve a dual purpose: they develop skills and they reduce isolation. Both matter for sustained performance.',
  },
  {
    mistake: 'Assuming hybrid managers will figure it out',
    reality:
      "Hybrid management is genuinely harder than fully remote or fully in-office management. The coordination complexity, the proximity bias risks, the two-tier team dynamics. These require specific development. Assuming managers will navigate hybrid intuitively because they \"have office experience\" is how you end up with remote employees who feel invisible.",
  },
]

const RELATED_RESOURCES = [
  { label: 'What Is Leadership Development? The Complete Guide', href: '/learn/resources/what-is-leadership-development' },
  { label: 'How to Build a Leadership Development Program From Scratch', href: '/learn/resources/building-a-leadership-development-program' },
  { label: 'The First-Time Manager Problem Nobody Talks About', href: '/learn/blog/first-time-manager' },
  { label: "Coaching vs. Mentoring: What's the Difference?", href: '/learn/resources/coaching-vs-mentoring' },
  { label: 'Measuring Coaching ROI: A Guide for L&D Leaders', href: '/learn/resources/measuring-coaching-roi' },
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
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <div className="bg-gradient-to-br from-boon-blue to-boon-deep-blue rounded-2xl p-8 md:p-10 text-center my-12 text-white">
      <h2 className="font-sans text-2xl md:text-[1.65rem] font-bold text-white mt-0 mb-2 tracking-tight">
        {heading}
      </h2>
      <p className="text-white/85 max-w-lg mx-auto mb-6 text-[15px]">{body}</p>
      <Link
        href={primaryHref}
        className="inline-block bg-boon-coral hover:bg-boon-light-coral text-white font-semibold px-8 py-3 rounded-[15px] transition-all hover:-translate-y-0.5"
      >
        {primaryLabel}
      </Link>
      {secondaryHref && secondaryLabel && (
        <Link
          href={secondaryHref}
          className="block mt-3 text-white/70 text-sm hover:text-white/90 transition-colors"
        >
          {secondaryLabel} &rarr;
        </Link>
      )}
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────────────

export default function RemoteLeadershipDevPage() {
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
            <span>Remote &amp; Hybrid Teams</span>
          </nav>

          <span className="inline-block font-body font-bold text-xs tracking-[0.12em] uppercase text-boon-light-coral mb-3">
            The Distributed Challenge
          </span>
          <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
            Leadership development for <br />
            remote and hybrid <KickerCoral>teams.</KickerCoral>
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            Managing people you see every day is hard enough. Managing people you don&apos;t see
            requires a different set of skills, different habits, and development approaches
            designed for how distributed teams actually work.
          </p>
          <div className="flex gap-6 mt-6 text-sm text-white/50">
            <span>12 min read</span>
            <span>February 2026</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-12">

        {/* TOC */}
        <nav className="bg-boon-off-white rounded-[15px] px-8 py-6 mb-12">
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

        {/* ── Section 1: What's Different ── */}
        <section id="whats-different">
          <SectionLabel>The Shift</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            What&apos;s actually different <Kicker>about remote leadership.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            The fundamentals of good leadership don&apos;t change when a team goes remote. Clear
            expectations, honest feedback, genuine care for your people, and accountability
            for results matter regardless of where anyone sits. What changes is how you
            deliver those things.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            In an office, leadership is partly ambient. You pick up on body language in a
            meeting. You notice when someone seems disengaged over lunch. You can pull
            someone aside for a quick conversation in the hallway. A lot of management
            happens in the in-between moments, the informal, unscheduled interactions that
            are almost impossible to replicate remotely.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            When those ambient signals disappear, leaders who relied on them are suddenly
            flying blind. The manager who was &ldquo;good with people&rdquo; in person discovers that
            their instincts don&apos;t translate through a screen. They can&apos;t tell who&apos;s
            struggling. They can&apos;t read the room because there is no room. And the habits
            they built over years of in-person management don&apos;t just transfer automatically.
          </p>

          <QuoteBlock>
            Remote didn&apos;t make bad managers visible. It made invisible management
            impossible to hide.
          </QuoteBlock>

          <p className="mb-5 text-[17px] leading-relaxed">
            The leaders who were already intentional, who structured their 1:1s, who gave
            clear feedback, who documented expectations, who checked in proactively rather
            than waiting for problems, they were fine. The leaders who managed by proximity,
            by hallway conversations, by reading body language in real time, they struggled.
            Remote didn&apos;t create new leadership challenges. It exposed the ones that were
            always there.
          </p>
        </section>

        <SectionBreak />

        {/* ── Section 2: The Skills Gap ── */}
        <section id="skills-gap">
          <SectionLabel>The Gap</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            The skills gap <Kicker>remote managers face.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            Remote leadership isn&apos;t a totally different discipline. But it does require
            specific skills to be stronger, more intentional, and more practiced than they
            might need to be in person. Here&apos;s where the gap shows up most often:
          </p>

          <div className="space-y-8 my-8">
            {SKILLS_GAPS.map((item, i) => (
              <div key={i}>
                <h3 className="font-sans text-xl font-semibold text-boon-navy mb-2">{item.skill}</h3>
                <p className="text-[17px] text-gray-500 leading-relaxed m-0">{item.gap}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionBreak />

        {/* ── Section 3: Hybrid Complexity ── */}
        <section id="hybrid-complexity">
          <SectionLabel>The Harder Version</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            The unique complexity <Kicker>of hybrid.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            Hybrid is often described as &ldquo;the best of both worlds.&rdquo; In practice, it&apos;s frequently
            the worst of both. The people in the office form an in-group. Remote employees
            become second-class participants who watch meetings on a screen while the room
            has side conversations they can&apos;t hear. Decisions get made in hallways that remote
            team members only learn about later. Proximity bias, the tendency to favor people
            you see in person, becomes the dominant force in promotion decisions, project
            assignments, and day-to-day attention.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            Leading a hybrid team well is harder than leading a fully remote one. At least
            with fully remote, everyone has the same experience. With hybrid, the leader has
            to actively counteract the gravity that pulls attention toward whoever is
            physically present. That requires awareness, discipline, and systems that most
            managers don&apos;t have unless someone explicitly develops them.
          </p>

          <Callout accent="coral">
            <p className="text-[15px] leading-relaxed m-0">
              <strong className="text-boon-navy">The proximity bias trap:</strong> Research
              consistently shows that managers rate in-office employees as more committed,
              more productive, and more promotable than remote ones doing identical work.
              This isn&apos;t malice. It&apos;s human wiring. Leaders need to be trained to recognize
              and counteract this bias, or hybrid will quietly create a two-tier workforce.
            </p>
          </Callout>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">
            What hybrid leaders specifically need to learn
          </h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            <strong className="text-boon-navy">Default to remote.</strong> If one person is
            remote, the meeting is a remote meeting. Everyone joins from their laptop, even
            the people in the office. This eliminates the &ldquo;side conversation in the room&rdquo;
            problem and creates equal participation conditions.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            <strong className="text-boon-navy">Document decisions, not just discussions.</strong> Every
            decision that happens in person needs to be documented and shared asynchronously
            within hours, not days. If remote team members consistently learn about decisions
            after they&apos;ve been made, they&apos;ll disengage. The documentation habit is the single
            most important practice for hybrid teams.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            <strong className="text-boon-navy">Audit for proximity bias quarterly.</strong> Look
            at who&apos;s getting promoted, who&apos;s getting high-visibility projects, who&apos;s getting
            mentioned in leadership meetings. If there&apos;s a pattern that favors in-office
            employees, you have a proximity bias problem that needs to be addressed directly.
          </p>
        </section>

        <SectionBreak />

        {/* ── Section 4: Development Approaches ── */}
        <section id="development-approaches">
          <SectionLabel>What Works</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            Development approaches <Kicker>that work remotely.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            Not everything translates. The two-day offsite leadership retreat doesn&apos;t work
            as a 16-hour Zoom marathon. But many development approaches work as well or
            better in a remote context, if they&apos;re designed for it rather than awkwardly
            adapted from in-person formats.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-sans font-bold text-green-600 text-sm uppercase tracking-wide mb-4">
                Works well remotely
              </h4>
              <div className="space-y-4 text-[15px] text-gray-500">
                {WORKS_WELL.map((item, i) => (
                  <div key={i}>
                    <p className="font-semibold text-boon-navy mb-1 text-[14px]">{item.title}</p>
                    <p className="m-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-sans font-bold text-boon-coral text-sm uppercase tracking-wide mb-4">
                Doesn&apos;t translate well
              </h4>
              <div className="space-y-4 text-[15px] text-gray-500">
                {DOESNT_TRANSLATE.map((item, i) => (
                  <div key={i}>
                    <p className="font-semibold text-boon-navy mb-1 text-[14px]">{item.title}</p>
                    <p className="m-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout accent="green">
            <p className="text-[15px] leading-relaxed m-0">
              <strong className="text-boon-navy">The design principle:</strong> For remote
              development, think &ldquo;shorter, more frequent, and more interactive.&rdquo; Replace a
              4-hour workshop with four 75-minute sessions over four weeks. Replace a lecture
              with a facilitated conversation. Replace a reading assignment with a coaching
              session that processes the concepts through the leader&apos;s real challenges. Frequency
              and interaction beat duration and content volume every time.
            </p>
          </Callout>
        </section>

        <SectionBreak />

        {/* ── Section 5: Coaching as Natural Fit ── */}
        <section id="coaching-remote">
          <SectionLabel>The Natural Fit</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            Why coaching is the natural fit <Kicker>for remote development.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            Coaching was virtual-ready before virtual was a requirement. The core of coaching,
            a focused conversation between two people about real challenges, works identically
            whether you&apos;re sitting across a table or across a continent. There&apos;s no &ldquo;virtual
            version&rdquo; of coaching that&apos;s worse than the in-person version. Research consistently
            shows virtual coaching produces equivalent outcomes to in-person coaching.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed">
            But there&apos;s a deeper reason coaching is especially valuable for remote leaders.
            Remote work is isolating. Decisions that would have been bounced off a colleague
            in the hallway now happen alone. Frustrations that would have been vented over
            coffee accumulate. The ambiguity of reading a team&apos;s energy through Slack messages
            creates anxiety that has nowhere to go. A coach becomes the thinking partner that
            the physical office used to provide informally.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Coaching solves the isolation problem</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            Remote leaders, especially remote managers, are often the loneliest people in the
            organization. They&apos;re expected to support their team, manage up to their boss,
            and navigate organizational complexity, all without the informal support network
            that an office provides. A coaching relationship gives them one person whose sole
            job is to support their growth. That matters more when you can&apos;t grab lunch with
            a peer.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Coaching addresses the specific remote skill gaps</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            Asynchronous communication, trust-based management, detecting disengagement,
            running effective virtual meetings: these are exactly the kind of behavioral
            skills that coaching develops well. They can&apos;t be learned from a course. They
            require practice with real situations, feedback on how it went, and iterative
            improvement over time. That&apos;s what coaching is built to deliver.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Coaching scales without geography</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            If your team is distributed across three time zones, flying everyone to the same
            city for a workshop is expensive and disruptive. Coaching happens wherever the
            leader is, on their schedule, with no travel required. A company with employees
            in six countries can deliver the same quality coaching experience to all of them.
            The economics and logistics of virtual coaching are built for distributed organizations.
          </p>
        </section>

        <SectionBreak />

        {/* ── Section 6: Building Culture ── */}
        <section id="building-culture">
          <SectionLabel>Culture Without Walls</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            Building leadership culture <Kicker>without a building.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            One of the hardest parts of remote leadership development isn&apos;t the skill
            building. It&apos;s creating a shared leadership culture, a common set of expectations,
            language, and norms about what good leadership looks like in your organization.
            In an office, culture is partly absorbed through osmosis. Remotely, it has to be
            constructed deliberately.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Create shared language through cohorts</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            When a group of managers goes through a{' '}
            <Link href="/solutions/grow" className="text-boon-blue font-medium hover:underline">cohort program</Link>{' '}
            together, they develop shared vocabulary and frameworks. They start saying &ldquo;that&apos;s
            a delegation moment&rdquo; or &ldquo;have you tried the feedback structure from session three?&rdquo;
            in their conversations with each other. This shared language becomes the connective
            tissue of your leadership culture. It&apos;s especially powerful for remote teams because
            it creates a sense of community among leaders who might never share a physical space.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Use in-person time strategically</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            If your remote team does come together occasionally (offsites, quarterly gatherings),
            don&apos;t waste that time on content that could be delivered virtually. Use in-person
            time for the things that only work in person: relationship building, team alignment,
            strategic planning, and the kind of vulnerable conversations that benefit from
            physical proximity. Let the ongoing development happen virtually. Let the connection
            happen in person.
          </p>

          <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Make leadership development visible</h3>
          <p className="mb-5 text-[17px] leading-relaxed">
            In an office, people can see that their leaders are investing in development:
            they&apos;re in a coaching session, they&apos;re at a workshop, they&apos;re reading leadership
            books. Remotely, development is invisible unless you make it visible. Leaders
            sharing what they&apos;re learning in team channels, executives talking about their
            own coaching in all-hands meetings, cohort participants presenting their capstone
            projects to the broader organization. Visibility normalizes development and creates
            a culture where growth is expected, not exceptional.
          </p>
        </section>

        <SectionBreak />

        {/* ── Section 7: Common Mistakes ── */}
        <section id="common-mistakes">
          <SectionLabel>The Pitfalls</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            Common mistakes in <Kicker>remote leadership development.</Kicker>
          </h2>

          <div className="space-y-8 my-8">
            {COMMON_MISTAKES.map((item, i) => (
              <div key={i}>
                <h3 className="font-sans text-xl font-semibold text-boon-navy mb-2">{item.mistake}</h3>
                <p className="text-[17px] text-gray-500 leading-relaxed m-0">{item.reality}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mid-page CTA */}
        <CTABanner
          heading={<>Coaching that works <KickerCoral>wherever your team is.</KickerCoral></>}
          body="Boon was built for distributed teams. Virtual coaching, virtual cohorts, and a platform that works across time zones. No offsites required."
          primaryHref="/demo"
          primaryLabel="Book a Strategy Call"
        />

        <SectionBreak />

        {/* ── Section 8: Boon's Approach ── */}
        <section id="boon-approach">
          <SectionLabel>How Boon Helps</SectionLabel>
          <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
            How Boon supports remote <Kicker>and hybrid teams.</Kicker>
          </h2>

          <p className="mb-5 text-[17px] leading-relaxed">
            Boon has been virtual-first since day one. Not because of the pandemic, but because
            coaching doesn&apos;t need a conference room. Our entire platform, from coach matching
            to session delivery to competency tracking, is designed for distributed organizations.
          </p>

          <p className="mb-5 text-[17px] leading-relaxed">
            <strong className="text-boon-navy">Coaches across time zones.</strong> Our network of
            270+ certified coaches spans multiple time zones and geographies. A leader in
            Singapore and a leader in San Francisco both get matched with a coach who works
            on their schedule, in their context, with the same quality and the same measurement
            infrastructure.
          </p>

          <p className="mb-5 text-[17px] leading-relaxed">
            <strong className="text-boon-navy">Virtual cohort programs.</strong> Boon&apos;s{' '}
            <Link href="/solutions/grow" className="text-boon-blue font-medium hover:underline">GROW</Link>{' '}
            program runs as virtual cohort sessions designed specifically for the medium. 90 minutes,
            highly interactive, with breakout rooms, real-time practice, and application
            between sessions. Not a webinar. A working session.
          </p>

          <p className="mb-5 text-[17px] leading-relaxed">
            <strong className="text-boon-navy">Scheduling that removes friction.</strong> Our
            platform handles scheduling directly between the coach and the leader. No
            coordinator. No email chains. A leader picks a time that works, the coach
            confirms, and the session happens. For distributed teams where scheduling is
            already painful, removing this friction matters more than it sounds.
          </p>

          <p className="mb-5 text-[17px] leading-relaxed">
            <strong className="text-boon-navy">Measurement across geography.</strong> Whether
            your coaching population is in one city or ten countries, the{' '}
            <Link href="/solutions/scale" className="text-boon-blue font-medium hover:underline">customer portal</Link>{' '}
            gives you the same view: participation, competency growth, development themes,
            and organizational patterns. No spreadsheets. No manual aggregation from different
            regional vendors.
          </p>

          <p className="mb-5 text-[17px] leading-relaxed">
            <strong className="text-boon-navy">Team sessions that bridge distance.</strong>{' '}
            <Link href="/solutions/together" className="text-boon-blue font-medium hover:underline">TOGETHER</Link>{' '}
            sessions are designed for teams that don&apos;t share a physical space. They create the
            psychological safety and alignment that in-person teams build through proximity,
            but through structured conversation and facilitation rather than hoping it happens
            organically.
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
          heading={<>Develop leaders <KickerCoral>everywhere.</KickerCoral></>}
          body="110+ enterprise customers across time zones. Virtual-first coaching, cohorts, and team sessions. One platform, anywhere your people are."
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
