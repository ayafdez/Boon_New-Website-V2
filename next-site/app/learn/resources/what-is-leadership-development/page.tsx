import type { Metadata } from 'next';
import Link from 'next/link';
import {
  generatePageMetadata,
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  siteUrl,
} from '@/lib/seo';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = generatePageMetadata({
  title: 'What Is Leadership Development? The Complete Guide for Growing Companies',
  description:
    'Leadership development is how companies build stronger leaders at every level. Learn what works, what doesn\'t, and how to build a program that actually fits how your organization grows.',
  path: '/learn/resources/what-is-leadership-development',
});

// ---------------------------------------------------------------------------
// Data constants
// ---------------------------------------------------------------------------

const STATS = [
  { number: '86%', desc: 'of executives rate leadership development as "urgent" or "important" (Deloitte)' },
  { number: '13%', desc: 'say they do an excellent job developing leaders at all levels' },
  { number: '70%', desc: 'of employee engagement variance is attributed to the direct manager (Gallup)' },
];

const COMPARISON_ROWS = [
  { old: 'One-time workshop with no follow-up', better: 'Ongoing coaching + practice + accountability' },
  { old: 'Coaching for execs only', better: 'Development at every leadership level' },
  { old: 'Generic content disconnected from real work', better: 'Programs configured to your actual challenges' },
  { old: 'Four disconnected vendors', better: 'One system where context carries forward' },
  { old: '"We\'ll know it\'s working when we see it"', better: 'Built-in measurement from day one' },
];

interface ProductCardData {
  name: string;
  tagline: string;
  description: string;
  href: string;
  color: string;
}

const PRODUCTS: ProductCardData[] = [
  {
    name: 'SCALE',
    tagline: '1:1 coaching for everyone, not just execs.',
    description: 'Employees book sessions when they need them, matched to coaches who understand their role and context. No waitlists. No approvals.',
    href: '/solutions/scale',
    color: 'bg-boon-blue',
  },
  {
    name: 'GROW',
    tagline: 'When your managers are underwater.',
    description: 'Cohort-based development for new and rising managers. Feedback, delegation, difficult conversations, the skills most first-time managers never learned.',
    href: '/solutions/grow',
    color: 'bg-boon-green',
  },
  {
    name: 'EXEC',
    tagline: 'When the stakes are highest.',
    description: 'Confidential coaching for senior leaders. A thinking partner for the decisions that ripple across the org.',
    href: '/solutions/exec',
    color: 'bg-boon-purple',
  },
  {
    name: 'TOGETHER',
    tagline: 'When the team needs to get on the same page.',
    description: 'Facilitated sessions for teams that need to align: offsites, department kickoffs, or moments of change.',
    href: '/solutions/together',
    color: 'bg-boon-gold',
  },
];

interface FAQData {
  question: string;
  answer: string;
}

const FAQS: FAQData[] = [
  {
    question: "What's the difference between leadership development and management training?",
    answer: 'Management training tends to focus on operational skills: how to run a meeting, manage a budget, or use a performance review system. Leadership development goes deeper. It builds self-awareness, emotional intelligence, decision-making under ambiguity, and the ability to grow other people. Both matter. But most organizations over-index on the tactical and under-invest in the human side.',
  },
  {
    question: 'How long does leadership development take to show results?',
    answer: "Behavior change, which is what you're really after, typically takes three to six months of sustained effort to become visible. You'll see leading indicators earlier: increased self-awareness, better conversations, shifts in how someone approaches problems. Lagging indicators like engagement scores and retention take six to twelve months. Programs that promise overnight transformation aren't being honest about how people actually change.",
  },
  {
    question: 'What does leadership development cost?',
    answer: "It varies widely based on the approach. Executive coaching can range from $500 to $1,000+ per session. Cohort programs typically cost $2,000 to $10,000 per participant depending on length and format. Workshops range from $3,000 to $15,000 per session. The more important question is what it costs to not invest: one bad manager can drive turnover that costs multiples of any development budget. Boon uses usage-based pricing that scales with your team, so you're not paying for seats nobody uses.",
  },
  {
    question: 'Should leadership development be mandatory or voluntary?',
    answer: "It depends on the program. Cohort-based programs for new managers often work best when they're part of the role expectation, because the skills are foundational. Coaching tends to work best when it's opt-in, because the coachee needs to be engaged and willing. The key is making programs accessible and well-positioned rather than forcing participation that breeds resentment.",
  },
  {
    question: 'How do I convince my CEO that leadership development is worth the investment?',
    answer: 'Don\'t lead with "we should invest in coaching." Lead with the business problem: "We promoted 40 new managers last year and gave them zero preparation. Our engagement scores in those teams dropped. Three high performers left." Then connect the development program to that specific problem with measurable goals. CEOs don\'t fund abstract development. They fund solutions to problems they recognize.',
  },
  {
    question: "What's the difference between coaching and mentoring?",
    answer: "A coach is a trained professional who helps leaders build specific capabilities through structured conversations, accountability, and evidence-based frameworks. A mentor is typically a more senior internal leader who shares experience and advice. Both have value, but they serve different purposes. Coaching is more structured, more confidential, and more focused on the coachee's specific development goals. Mentoring is more relational and focused on navigating organizational culture and career paths.",
  },
  {
    question: 'Can AI replace human coaching?',
    answer: "AI can complement coaching. It can help with practice, reflection, and reinforcement between sessions. But the core of coaching is a relationship between two humans, where trust, challenge, and nuanced judgment create the conditions for growth. The most important moments in coaching happen when a leader is vulnerable, uncertain, or navigating something they've never faced before. Those moments require a human on the other side. AI can be a useful tool in the system. It's not a replacement for the relationship.",
  },
  {
    question: 'How does Boon handle leadership development differently?',
    answer: "Boon brings coaching, cohort programs, executive coaching, and team workshops into one system instead of requiring four separate vendors. Coaches are matched based on role, industry, and context. Managers get visibility into team development themes without seeing session content. And competency growth is tracked over time, so you can actually show what's changing. The result is development that compounds instead of getting lost.",
  },
];

const RELATED_RESOURCES = [
  { label: 'Coaching vs. Mentoring: What\'s the Difference?', href: '/learn/resources/coaching-vs-mentoring' },
  { label: 'The First-Time Manager Problem Nobody Talks About', href: '/learn/blog/first-time-manager' },
  { label: 'How to Build a Leadership Development Program From Scratch', href: '/learn/resources/building-a-leadership-development-program' },
  { label: 'Measuring Coaching ROI: A Guide for L&D Leaders', href: '/learn/resources/measuring-coaching-roi' },
  { label: 'Leadership Development for Remote and Hybrid Teams', href: '/learn/resources/leadership-development-remote-teams' },
];

// ---------------------------------------------------------------------------
// Local helper components
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-body font-bold text-xs tracking-[0.12em] uppercase text-boon-blue mb-3">
      {children}
    </span>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic text-boon-blue">{children}</span>;
}

interface CalloutProps {
  variant?: 'blue' | 'coral' | 'green';
  children: React.ReactNode;
}

function Callout({ variant = 'blue', children }: CalloutProps) {
  const borderColor = {
    blue: 'border-l-boon-blue',
    coral: 'border-l-boon-coral',
    green: 'border-l-boon-green',
  }[variant];

  return (
    <div className={`bg-boon-off-white border-l-4 ${borderColor} rounded-r-lg px-8 py-6 my-8`}>
      <div className="text-base leading-relaxed font-body text-boon-charcoal [&>strong]:text-boon-navy [&>strong]:font-bold">
        {children}
      </div>
    </div>
  );
}

interface StatCardProps {
  number: string;
  desc: string;
}

function StatCard({ number, desc }: StatCardProps) {
  return (
    <div className="bg-boon-off-white rounded-xl p-6 text-center">
      <span className="block font-sans text-4xl font-bold text-boon-blue">{number}</span>
      <span className="text-sm text-gray-500 mt-1 block">{desc}</span>
    </div>
  );
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-l-boon-coral px-8 py-5 my-8 bg-white">
      <p className="font-serif text-xl text-boon-navy leading-relaxed m-0">{children}</p>
    </div>
  );
}

function ProductCard({ name, tagline, description, href, color }: ProductCardData) {
  return (
    <Link
      href={href}
      className="group relative block border border-gray-200 rounded-xl p-6 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 ${color}`} />
      <h4 className="font-sans text-lg font-bold text-boon-navy mt-2 mb-2">{name}</h4>
      <span className="block font-serif italic text-boon-blue text-[0.95rem] mb-3">{tagline}</span>
      <p className="text-sm text-gray-500 mb-0 leading-relaxed">{description}</p>
    </Link>
  );
}

function FAQItem({ question, answer }: FAQData) {
  return (
    <div className="border-b border-gray-200 py-5 last:border-b-0">
      <h3 className="font-sans font-semibold text-[1.05rem] text-boon-navy mb-2">{question}</h3>
      <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-0">{answer}</p>
    </div>
  );
}

interface CTABannerProps {
  title: React.ReactNode;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

function CTABanner({ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CTABannerProps) {
  return (
    <div className="bg-gradient-to-br from-boon-blue to-boon-deep-blue rounded-2xl p-12 text-center my-14">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 mt-0">{title}</h2>
      <p className="text-white/85 max-w-lg mx-auto mb-6">{description}</p>
      <Link
        href={primaryHref}
        className="inline-block bg-boon-coral text-white px-8 py-3 rounded-lg font-semibold text-base transition-all hover:bg-boon-light-coral hover:-translate-y-0.5"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="block mt-3 text-white/70 text-sm hover:text-white/90 transition-colors"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}

function SectionBreak() {
  return <hr className="border-0 border-t border-gray-200 my-14" />;
}

// ---------------------------------------------------------------------------
// TOC data
// ---------------------------------------------------------------------------

const TOC_ITEMS = [
  { id: 'definition', label: 'Leadership development, defined plainly' },
  { id: 'why-it-matters', label: 'Why it matters more now than five years ago' },
  { id: 'what-it-looks-like', label: 'What leadership development actually looks like' },
  { id: 'core-skills', label: 'The skills that matter most' },
  { id: 'common-mistakes', label: 'Where most programs fall apart' },
  { id: 'building-a-program', label: 'How to build a program that works' },
  { id: 'who-needs-it', label: 'Who needs leadership development (hint: not just executives)' },
  { id: 'measuring-impact', label: 'Measuring impact without guessing' },
  { id: 'coaching-role', label: 'The role of coaching in leadership development' },
  { id: 'boon-approach', label: 'How Boon approaches leadership development' },
  { id: 'faq', label: 'Frequently asked questions' },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function LeadershipDevelopmentPage() {
  const pageUrl = `${siteUrl}/learn/resources/what-is-leadership-development`;

  const articleJsonLd = generateArticleJsonLd({
    title: 'What Is Leadership Development? The Complete Guide for Growing Companies',
    description:
      'Leadership development is how companies build stronger leaders at every level. Learn what works, what doesn\'t, and how to build a program that actually fits how your organization grows.',
    url: pageUrl,
    publishedTime: '2026-02-18',
    modifiedTime: '2026-02-18',
    authorName: 'Boon',
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Resources', path: '/learn/resources' },
    { name: 'Leadership Development', path: '/learn/resources/what-is-leadership-development' },
  ]);

  const faqJsonLd = generateFAQJsonLd(FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white">
        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="bg-gradient-to-br from-boon-navy to-[#1e2d4a] pt-20 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <nav className="text-xs text-white/50 mb-6">
              <Link href="/learn" className="hover:text-white/80 transition-colors">Learn</Link>
              <span className="mx-1.5">&rsaquo;</span>
              <Link href="/learn/resources" className="hover:text-white/80 transition-colors">Resources</Link>
              <span className="mx-1.5">&rsaquo;</span>
              <span>Leadership Development</span>
            </nav>
            <span className="inline-block font-body font-bold text-xs tracking-[0.12em] uppercase text-boon-light-coral mb-3">
              The Complete Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              What Is Leadership Development?{' '}
              <br className="hidden md:block" />
              <span className="font-serif italic text-boon-light-coral">And why most companies get it wrong.</span>
            </h1>
            <p className="text-lg text-white/85 max-w-2xl leading-relaxed">
              Leadership development is how organizations build stronger leaders at every level. Not through a one-time workshop. Not through a motivational speaker at the annual offsite. Through sustained, structured programs that help people actually grow into the leaders their teams need them to be.
            </p>
            <div className="flex gap-6 mt-6 text-sm text-white/60">
              <span>20 min read</span>
              <span>Last updated February 2026</span>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* ARTICLE BODY                                                     */}
        {/* ---------------------------------------------------------------- */}
        <div className="max-w-3xl mx-auto px-6">

          {/* Table of Contents */}
          <nav className="bg-boon-off-white rounded-xl p-8 md:px-10 my-12">
            <h3 className="font-sans font-semibold text-lg text-boon-navy mb-4">What we&apos;ll cover</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {TOC_ITEMS.map((item) => (
                <li key={item.id} className="text-[0.95rem]">
                  <a href={`#${item.id}`} className="text-boon-charcoal font-medium hover:text-boon-blue transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ----- SECTION 1: DEFINITION ----- */}
          <section id="definition">
            <SectionLabel>The Basics</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              Leadership development, <Kicker>defined plainly.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Leadership development is the ongoing process of helping people build the skills, self-awareness, and judgment they need to lead others well. It covers everything from how a first-time manager gives feedback to how a VP navigates organizational politics to how a CEO makes decisions that ripple across thousands of people.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The phrase gets used loosely. Companies throw it on everything from a half-day seminar to a full-blown multi-year investment. But at its core, leadership development answers a simple question: <strong className="text-boon-charcoal">How do we help the people responsible for leading others actually get better at it?</strong>
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              That question matters because most people who become leaders were never taught how to lead. They were promoted because they were good at their previous job. An outstanding engineer becomes an engineering manager. A top sales rep becomes a sales director. The skills that got them promoted are rarely the skills they need in their new role. And without intentional development, many struggle in silence.
            </p>

            <Callout>
              <strong>A working definition:</strong> Leadership development is any structured effort, including coaching, cohort programs, workshops, and feedback systems, that helps current and emerging leaders build the capabilities to guide teams, make better decisions, and grow the people around them.
            </Callout>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Notice what&apos;s missing from that definition: it&apos;s not limited to executives. It&apos;s not a single event. And it&apos;s not something you &quot;complete.&quot; Leadership development is an ongoing capability you build into your organization, not a box you check.
            </p>
          </section>

          <SectionBreak />

          {/* ----- SECTION 2: WHY IT MATTERS ----- */}
          <section id="why-it-matters">
            <SectionLabel>The Stakes</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              Why it matters more now <Kicker>than five years ago.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Organizations have always needed good leaders. What&apos;s changed is the pace and complexity of the demands placed on them. Hybrid and remote work rewired how teams communicate. AI is reshaping entire job functions. Employee expectations around transparency, flexibility, and purpose have fundamentally shifted. Tenure is down. Turnover costs are up. And the middle layer of management, the people translating strategy into daily execution, is carrying more weight than ever.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-10">
              {STATS.map((stat) => (
                <StatCard key={stat.number} number={stat.number} desc={stat.desc} />
              ))}
            </div>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              That gap between urgency and execution is where companies lose people, money, and momentum. When a first-time manager doesn&apos;t know how to have a difficult conversation, the problem doesn&apos;t stay contained. It shows up in engagement scores, exit interviews, and the quiet disengagement of people who stop bringing their best ideas to work.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Leadership development isn&apos;t a nice-to-have. It&apos;s the infrastructure that determines whether your growing organization stays healthy or starts breaking at the seams.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">The compounding cost of doing nothing</h3>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Skipping leadership development doesn&apos;t feel expensive in the short term. There&apos;s no line item for &quot;managers who avoid giving feedback&quot; or &quot;directors who can&apos;t delegate.&quot; But the costs show up everywhere: in regrettable attrition, in teams that can&apos;t execute, in the executive who keeps making decisions that should have been made two levels down. Those aren&apos;t leadership problems in the abstract. They&apos;re leadership development failures with real financial impact.
            </p>
          </section>

          <SectionBreak />

          {/* ----- SECTION 3: WHAT IT LOOKS LIKE ----- */}
          <section id="what-it-looks-like">
            <SectionLabel>The Landscape</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              What leadership development <Kicker>actually looks like.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Leadership development isn&apos;t one thing. It&apos;s a category that includes a wide range of approaches, formats, and delivery methods. The best programs combine several of these, matched to where people actually are in their leadership journey.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">1:1 coaching</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              A confidential relationship between a leader and a trained coach. Coaching is where leaders work through real challenges in real time: a team restructure, a relationship with a difficult peer, a career transition they&apos;re navigating. The value of coaching is specificity. It&apos;s not generic advice. It&apos;s support shaped to the exact situation someone is facing.{' '}
              <Link href="/solutions/scale" className="text-boon-blue font-semibold hover:underline">Learn about Boon SCALE &rarr;</Link>
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Cohort-based programs</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Groups of leaders going through a structured curriculum together, usually over weeks or months. Cohort programs create shared language, peer accountability, and a safe space to practice new skills. They&apos;re particularly effective for managers at the same career stage who are facing similar challenges.{' '}
              <Link href="/solutions/grow" className="text-boon-blue font-semibold hover:underline">Learn about Boon GROW &rarr;</Link>
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Executive coaching</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Higher-stakes, more confidential coaching for senior leaders. The decisions at this level ripple across the whole organization, so the coaching relationship tends to be deeper, more strategic, and more focused on organizational impact.{' '}
              <Link href="/solutions/exec" className="text-boon-blue font-semibold hover:underline">Learn about Boon EXEC &rarr;</Link>
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Workshops and facilitated sessions</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Focused, typically shorter-format experiences designed to build a specific skill or align a team around a shared challenge. The best workshops aren&apos;t lectures. They&apos;re interactive, grounded in the team&apos;s real context, and followed by application.{' '}
              <Link href="/solutions/together" className="text-boon-blue font-semibold hover:underline">Learn about Boon TOGETHER &rarr;</Link>
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Mentoring programs</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Pairing less experienced leaders with more senior ones for guidance and knowledge transfer. Mentoring works well for navigating organizational culture and career development but tends to be less structured than coaching.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">360-degree feedback and assessments</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Tools that give leaders visibility into how others experience their leadership. The data isn&apos;t the development. It&apos;s the starting point for a conversation about what to work on and why.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">On-the-job development</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Stretch assignments, cross-functional projects, job rotations, and other experiences that push leaders outside their comfort zone. Research consistently shows that experience is the most powerful teacher, but only when it&apos;s paired with reflection and support.
            </p>

            <Callout variant="green">
              <strong>The integration problem:</strong> Most companies aren&apos;t missing any of these pieces. They&apos;re missing the connective tissue. Coaching happens in one system. Workshops happen in another. Assessments live in a spreadsheet. Nobody owns the whole picture. When development is fragmented, context gets lost, adoption drops, and you can&apos;t show what&apos;s actually working.
            </Callout>
          </section>

          <SectionBreak />

          {/* ----- SECTION 4: CORE SKILLS ----- */}
          <section id="core-skills">
            <SectionLabel>The Capabilities</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              The skills that <Kicker>matter most.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Leadership frameworks vary, but the research converges on a handful of capabilities that separate leaders who grow their teams from leaders who simply manage tasks. These aren&apos;t &quot;soft skills.&quot; They&apos;re the hard work of leading people well.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Self-awareness</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Understanding your own strengths, blind spots, triggers, and patterns. Self-awareness is the foundation. Without it, everything else is guesswork. A leader who doesn&apos;t recognize their tendency to avoid conflict will never address the performance issues dragging their team down.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Communication</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Not just presenting well. Listening actively, giving feedback that actually changes behavior, navigating difficult conversations, and adapting your message to different audiences. Communication is where most new managers struggle first.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Decision-making under ambiguity</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              As leaders move up, the decisions get grayer. There&apos;s rarely a clearly right answer. The skill is in making sound judgments with incomplete information, communicating the reasoning, and adjusting when new data arrives.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Building trust and psychological safety</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Creating an environment where people feel safe to speak up, take risks, and admit mistakes. This isn&apos;t about being &quot;nice.&quot; It&apos;s about building the conditions where teams do their best work.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Coaching and developing others</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Leaders who develop other leaders multiply their impact. This means moving beyond telling people what to do and instead asking better questions, delegating meaningfully, and investing time in someone else&apos;s growth.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Managing change and resilience</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Every organization is navigating constant change. Leaders need to help their teams absorb disruption, maintain focus, and keep moving forward even when the ground is shifting.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Strategic thinking</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Connecting daily decisions to longer-term organizational goals. Seeing the system, not just the task. Understanding how your team&apos;s work fits into the bigger picture and helping others see it too.
            </p>

            <QuoteBlock>
              Leadership is gray, not black and white. The leaders who grow are the ones who get comfortable with complexity instead of pretending everything is simple.
            </QuoteBlock>
          </section>

          <SectionBreak />

          {/* ----- SECTION 5: COMMON MISTAKES ----- */}
          <section id="common-mistakes">
            <SectionLabel>The Pitfalls</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              Where most programs <Kicker>fall apart.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Companies spend billions on leadership development globally. A significant portion of that investment doesn&apos;t produce lasting change. Here&apos;s why.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">The event trap</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              A two-day offsite with a keynote speaker is not a leadership development program. It&apos;s an event. Events create energy, not behavior change. Without follow-up coaching, practice, and accountability, the insights from a workshop fade within weeks. Development happens over months, not hours.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Only investing at the top</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Most companies reserve coaching and structured development for executives and a small group of &quot;high-potentials.&quot; Everyone else, the managers making daily leadership decisions, the senior ICs navigating career transitions, the new directors figuring out how to lead teams, gets nothing. Or worse, they get a generic e-learning module and no follow-up. The middle is where companies break or scale. Invest there.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">No connection to real work</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Development that feels theoretical doesn&apos;t stick. If a manager learns about &quot;situational leadership&quot; in a classroom but never gets to practice it with feedback, the learning stays abstract. The best programs are anchored in the actual challenges people face on Monday morning.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Fragmented vendors and tools</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              One vendor for coaching. Another for cohort programs. A third for assessments. A fourth for workshops. Nothing connects. The coach doesn&apos;t know what happened in the workshop. The assessment results don&apos;t inform the coaching. Context gets lost, and nobody can see the full picture of what&apos;s working.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">No way to measure impact</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              When the CEO asks &quot;what&apos;s changing?&quot; and the L&amp;D team can&apos;t answer, the budget gets questioned. Measuring leadership development is genuinely hard, but it&apos;s not impossible. The problem is that most programs are built without measurement in mind from the start.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Treating it as a &quot;perk&quot; instead of infrastructure</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              When leadership development is positioned as a benefit (&quot;we offer coaching!&quot;), it becomes optional. When it&apos;s positioned as how the company builds leadership capacity, it becomes essential. The framing matters.
            </p>

            {/* Comparison table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full text-[0.95rem] border-collapse">
                <thead>
                  <tr>
                    <th className="bg-boon-navy text-white px-5 py-3 text-left font-sans font-semibold text-sm">What doesn&apos;t work</th>
                    <th className="bg-boon-navy text-white px-5 py-3 text-left font-sans font-semibold text-sm">What does</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-boon-off-white' : ''}>
                      <td className="px-5 py-3 border-b border-gray-200">
                        <span className="text-boon-coral font-semibold">{row.old}</span>
                      </td>
                      <td className="px-5 py-3 border-b border-gray-200">
                        <span className="text-boon-green font-semibold">{row.better}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* MID-PAGE CTA */}
          <CTABanner
            title={<>Stop managing four vendors <Kicker>for one job.</Kicker></>}
            description="Boon brings coaching, manager development, executive support, and team workshops into one system that grows with your organization."
            primaryLabel="Book a Strategy Call"
            primaryHref="/demo"
            secondaryLabel="See how it works &rarr;"
            secondaryHref="/solutions"
          />

          <SectionBreak />

          {/* ----- SECTION 6: BUILDING A PROGRAM ----- */}
          <section id="building-a-program">
            <SectionLabel>The Playbook</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              How to build a program <Kicker>that actually works.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              There&apos;s no single formula, but programs that produce lasting change tend to share a few characteristics.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Start with the problem, not the modality</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Don&apos;t start by asking &quot;should we buy coaching?&quot; Start by asking &quot;where are our leaders struggling?&quot; Maybe new managers are drowning in feedback conversations. Maybe your director-level leaders can&apos;t delegate. Maybe your exec team isn&apos;t aligned on strategy. The development approach should follow the diagnosis, not the other way around.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Match the format to the challenge</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Coaching is great for personalized, confidential support on complex challenges. Cohort programs work when a group of leaders needs to build the same foundational skills. Workshops are best for team-level alignment and skill-building. The best programs use multiple formats, calibrated to what different populations actually need.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Make it continuous, not episodic</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              A workshop is a moment. Behavior change takes months. Build in follow-up coaching after workshops. Create spacing between cohort sessions so people can practice. Design the program so that support is available when challenges arise, not just on a predetermined schedule.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Connect the pieces</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              If someone goes through a cohort program and then starts 1:1 coaching, the coach should know what they learned and what they&apos;re working on. If a 360-degree assessment reveals a gap, the coaching should address it. Development that connects creates compounding growth. Development that&apos;s disconnected creates confusion.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Involve managers</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The most effective programs give managers visibility into their team&apos;s development, not the content of coaching sessions, but the themes, participation patterns, and growth trajectories. When managers can see what their people are working on and reinforce it in the day-to-day, development accelerates.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Design for measurement from the start</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Decide upfront what success looks like. Is it improved engagement scores? Higher promotion readiness? Reduced time-to-productivity for new managers? Better retention? Then build in the checkpoints to track progress. Don&apos;t wait until the end to figure out if it worked.
            </p>
          </section>

          <SectionBreak />

          {/* ----- SECTION 7: WHO NEEDS IT ----- */}
          <section id="who-needs-it">
            <SectionLabel>The Audience</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              Who needs leadership development <Kicker>(hint: not just executives)</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The traditional model concentrated development at the top. Executives got coaching. Directors got a conference. Everyone else got an annual review and maybe an e-learning library nobody used. That model is breaking.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">First-time managers</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The transition from individual contributor to manager is one of the hardest in anyone&apos;s career. They need to learn how to give feedback, delegate, have difficult conversations, and manage performance, often with zero formal preparation. This is where cohort-based programs like{' '}
              <Link href="/solutions/grow" className="text-boon-blue font-semibold hover:underline">GROW</Link>
              {' '}make the biggest difference.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Mid-level managers and directors</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              These are the people translating strategy into execution. They&apos;re managing managers, navigating organizational politics, and juggling competing priorities. They often feel squeezed: responsible for more, with less time to develop themselves. Coaching gives them a thinking partner for the complexity they face daily.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Senior leaders and executives</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The decisions at this level have outsized impact. A bad hire, a misaligned strategy, a poorly managed reorganization, the stakes are high. Executive coaching provides confidential sparring on the decisions that ripple across the organization.{' '}
              <Link href="/solutions/exec" className="text-boon-blue font-semibold hover:underline">EXEC</Link>
              {' '}is designed for exactly this.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">High-potential individual contributors</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Not everyone who could lead is currently leading. Developing high-potential ICs before they step into leadership roles reduces the shock of the transition and improves their readiness.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Intact teams navigating change</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              When teams are going through a merger, a reorg, a leadership transition, or a strategic pivot, they need facilitated support to get aligned and rebuild trust.{' '}
              <Link href="/solutions/together" className="text-boon-blue font-semibold hover:underline">TOGETHER</Link>
              {' '}was built for these moments.
            </p>

            <Callout variant="coral">
              <strong>The real shift:</strong> Leadership development used to be a reward for the top 10%. The companies getting it right are treating it as infrastructure for everyone who leads, at any level. Not because it&apos;s egalitarian (though it is). Because that&apos;s where the leverage is.
            </Callout>
          </section>

          <SectionBreak />

          {/* ----- SECTION 8: MEASURING IMPACT ----- */}
          <section id="measuring-impact">
            <SectionLabel>The Proof</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              Measuring impact <Kicker>without guessing.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              This is where most programs lose credibility. The CEO asks &quot;is this working?&quot; and the L&amp;D team pulls out attendance numbers and satisfaction surveys. That&apos;s not impact. That&apos;s activity.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Meaningful measurement requires thinking about leadership development the way you&apos;d think about any other business investment: what outcomes are we trying to drive, and can we track progress toward them?
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Leading indicators</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              These tell you whether the development is taking hold before you see business results. Participation rates and engagement are table stakes. More meaningful: Are leaders applying what they&apos;re learning? Are their coaches observing behavior change? Are their teams reporting improved communication or trust?
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Lagging indicators</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              These are the business outcomes leadership development should eventually influence: employee engagement scores, retention rates (especially in teams with developed leaders vs. those without), promotion readiness, time-to-productivity for new managers, and 360-degree feedback trends over time.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Competency growth tracking</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The most rigorous approach maps development to specific competencies and tracks growth over time, coach-observed, not self-reported. This gives organizations visibility into whether leaders are actually building the capabilities that matter, without compromising the confidentiality that makes coaching work.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">What &quot;visibility without surveillance&quot; means</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              There&apos;s a tension in measurement. If you track too much, you destroy the trust that makes coaching effective. If you track nothing, you can&apos;t justify the investment. The answer is tracking participation, progress, and competency growth at the aggregate level, showing what&apos;s changing across the leadership population, without exposing what any individual said in a coaching session. This is a hard balance to strike, and most programs don&apos;t even try.
            </p>
          </section>

          <SectionBreak />

          {/* ----- SECTION 9: COACHING'S ROLE ----- */}
          <section id="coaching-role">
            <SectionLabel>Going Deeper</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              The role of coaching <Kicker>in leadership development.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Coaching has become the centerpiece of most modern leadership development programs, and for good reason. Unlike workshops or e-learning, coaching is personalized to the individual. The conversation is shaped by their specific challenges, their context, their goals. A coaching session doesn&apos;t cover &quot;leadership theory.&quot; It addresses &quot;how do I handle the conversation I need to have with my direct report on Friday?&quot;
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">What makes coaching effective</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Not all coaching is the same. The research on what actually drives coaching outcomes points to a few critical factors: the quality of the coach-client relationship, the specificity of the goals, and the degree to which coaching is connected to real-world application. A great coach doesn&apos;t just listen. They challenge assumptions, offer frameworks, hold the leader accountable, and push them toward the growth edge where real development happens.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">The coach matching problem</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Most platforms treat coach matching like a marketplace. Here are fifty coaches, pick one. That approach puts the burden on the employee to evaluate coaching styles and expertise they have no framework for assessing. Better matching factors in role, industry, coaching focus, seniority, and context. The right match isn&apos;t just someone with good credentials. It&apos;s someone who&apos;s been in the room the leader is trying to navigate.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Coaching at scale vs. coaching as a perk</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              There&apos;s a meaningful difference between &quot;we offer coaching as a benefit&quot; and &quot;coaching is embedded in how we develop leaders.&quot; The first approach results in low utilization and fragmented impact. The second approach, where coaching is part of a system that includes cohort programs, manager visibility, and competency tracking, creates compounding growth. When someone gets promoted, their coach relationship and development history come with them. No starting over.
            </p>

            <QuoteBlock>
              Executives get coaching. Everyone else gets a workshop and a prayer. That&apos;s the gap most companies are still operating with.
            </QuoteBlock>
          </section>

          <SectionBreak />

          {/* ----- SECTION 10: BOON'S APPROACH ----- */}
          <section id="boon-approach">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4 mt-1">
              How Boon approaches <Kicker>leadership development.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Boon is a leadership development system, not a vendor, not a marketplace, not a point solution. It brings coaching, manager development, executive support, and team capability into one architecture that compounds as organizations scale.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Most companies cobble together three or four vendors for coaching, cohorts, exec support, and workshops. Nothing connects. The coach doesn&apos;t know what happened in the workshop. The assessment results don&apos;t inform the coaching. You&apos;re managing four relationships for one job.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Boon is one system. Same coaches. Continuous thread. When someone gets promoted, their development journey continues. No reset.
            </p>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Four programs, one system</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>

            <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">What makes Boon different</h3>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-charcoal">Configured to your problems.</strong> Every organization has different pressure points. Maybe new managers are drowning, or ICs are ready for leadership, or executives need confidential sparring. Boon maps the system to where you actually need it.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-charcoal">Coaches who&apos;ve done the job.</strong> Boon matches your people with coaches who&apos;ve been in their shoes: former execs, functional leaders, operators who understand the decisions your team is facing. Not generic credentials. Real context.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-charcoal">Visibility without surveillance.</strong> Track participation, progress, and competency growth across your leadership population, without compromising the confidentiality that makes coaching work. Managers see themes and trajectory. Never session content.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-charcoal">A system you won&apos;t outgrow.</strong> Start with one program. Add others as you see results. Coverage from IC to C-suite, in one system where everything talks to each other.
            </p>
          </section>

          {/* BOTTOM CTA */}
          <CTABanner
            title={<>Build a leadership development program <Kicker>that actually fits.</Kicker></>}
            description="110+ enterprise customers. 270+ certified coaches. One system that compounds as your organization grows."
            primaryLabel="Schedule a Conversation"
            primaryHref="/demo"
            secondaryLabel="Explore all four programs &rarr;"
            secondaryHref="/solutions"
          />

          <SectionBreak />

          {/* ----- FAQ ----- */}
          <section id="faq">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-6 mt-1">Frequently asked questions</h2>
            {FAQS.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </section>

          <SectionBreak />

          {/* ----- RELATED RESOURCES ----- */}
          <section className="mb-16">
            <SectionLabel>Keep Reading</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-6 mt-1">Related resources</h2>
            <div className="space-y-3">
              {RELATED_RESOURCES.map((resource) => (
                <div key={resource.href}>
                  <Link href={resource.href} className="text-boon-blue font-medium hover:underline">
                    {resource.label}
                  </Link>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
