import type { Metadata } from 'next';
import Link from 'next/link';
import {
  generatePageMetadata,
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  siteUrl,
} from '@/lib/seo';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = generatePageMetadata({
  title: 'The First-Time Manager Problem Nobody Talks About',
  description:
    "Most first-time managers were promoted because they were great at their old job. Then they got zero preparation for the new one. Here's what that costs, and what to do about it.",
  path: '/learn/blog/first-time-manager',
});

// ---------------------------------------------------------------------------
// Data constants
// ---------------------------------------------------------------------------

const STATS = [
  { number: '60%', desc: 'of new managers underperform in their first two years (CEB/Gartner)' },
  { number: '50%', desc: 'of people who leave a job cite their manager as the reason (Gallup)' },
  { number: '70%', desc: 'of engagement variance tied to the direct manager' },
];

interface TimelineItemData {
  title: string;
  description: string;
}

const TIMELINE_ITEMS: TimelineItemData[] = [
  {
    title: 'Month 1-2: Orientation and foundations',
    description:
      "Learn the basics: running effective 1:1s, setting expectations, understanding your team's motivations. Get matched with a coach. Join a cohort of peers at the same stage. Start building self-awareness about your default tendencies under pressure.",
  },
  {
    title: 'Month 3-4: The hard conversations begin',
    description:
      "First real performance conversations. First time giving direct feedback that someone doesn't want to hear. First delegation that feels uncomfortable. This is where coaching is most valuable: a thinking partner for the specific situations you're navigating in real time.",
  },
  {
    title: 'Month 5-7: Building your management identity',
    description:
      'Starting to develop your own leadership style rather than copying someone else\'s. Getting more comfortable with ambiguity. Learning when to step in and when to step back. Cohort sessions shift from "survival skills" to "growing as a leader."',
  },
  {
    title: 'Month 8-10: Deepening and refining',
    description:
      "Tackling more complex challenges: managing up, navigating cross-functional dynamics, developing your own direct reports as future leaders. Coaching focuses on patterns and blind spots that have emerged over months of real experience.",
  },
  {
    title: 'Month 11-12: Integration and forward-looking',
    description:
      "Reflecting on growth. Identifying what's working and what still needs attention. Setting development goals for the next phase. The foundation is built. Now it's about continuing to grow, not starting from scratch.",
  },
];

const RELATED_RESOURCES = [
  { label: 'What Is Leadership Development? The Complete Guide', href: '/learn/resources/what-is-leadership-development' },
  { label: 'How to Build a Leadership Development Program From Scratch', href: '/learn/resources/building-a-leadership-development-program' },
  { label: "Coaching vs. Mentoring: What's the Difference?", href: '/learn/resources/coaching-vs-mentoring' },
  { label: 'Boon GROW: Manager Development That Sticks', href: '/solutions/grow' },
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

function StatCard({ number, desc }: { number: string; desc: string }) {
  return (
    <div className="bg-boon-off-white rounded-xl p-5 text-center">
      <span className="block font-sans text-3xl font-bold text-boon-blue">{number}</span>
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

function ScenarioCard({ variant, title, items }: { variant: 'before' | 'after'; title: string; items: string[] }) {
  const isBefore = variant === 'before';
  return (
    <div
      className={`rounded-xl p-6 ${
        isBefore
          ? 'bg-red-50 border border-red-200'
          : 'bg-green-50 border border-green-200'
      }`}
    >
      <h4
        className={`font-sans text-xs font-bold uppercase tracking-widest mb-3 ${
          isBefore ? 'text-boon-coral' : 'text-green-600'
        }`}
      >
        {title}
      </h4>
      {items.map((item, i) => (
        <p key={i} className="text-[0.95rem] text-gray-600 mb-2 last:mb-0">{item}</p>
      ))}
    </div>
  );
}

function TimelineItem({ title, description }: TimelineItemData) {
  return (
    <div className="relative pl-8 mb-7 last:mb-0">
      <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-boon-blue border-[3px] border-boon-light-blue" />
      <h4 className="font-sans text-base font-semibold text-boon-navy mb-1">{title}</h4>
      <p className="text-[0.95rem] text-gray-500 mb-0 leading-relaxed">{description}</p>
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
    <div className="bg-gradient-to-br from-boon-blue to-boon-deep-blue rounded-2xl p-12 text-center my-12">
      <h2 className="text-white text-2xl md:text-[1.6rem] font-bold mb-2 mt-0">{title}</h2>
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
  return <hr className="border-0 border-t border-gray-200 my-12" />;
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function FirstTimeManagerPage() {
  const pageUrl = `${siteUrl}/learn/blog/first-time-manager`;

  const articleJsonLd = generateArticleJsonLd({
    title: 'The First-Time Manager Problem Nobody Talks About',
    description:
      "Most first-time managers were promoted because they were great at their old job. Then they got zero preparation for the new one. Here's what that costs, and what to do about it.",
    url: pageUrl,
    publishedTime: '2026-02-18',
    modifiedTime: '2026-02-18',
    authorName: 'Boon',
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Blog', path: '/learn/blog' },
    { name: 'The First-Time Manager Problem', path: '/learn/blog/first-time-manager' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-boon-navy to-[#1e2d4a] pt-20 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <nav className="text-xs text-white/50 mb-6">
              <Link href="/learn" className="hover:text-white/80 transition-colors">Learn</Link>
              <span className="mx-1.5">&rsaquo;</span>
              <Link href="/learn/blog" className="hover:text-white/80 transition-colors">Blog</Link>
              <span className="mx-1.5">&rsaquo;</span>
              <span>First-Time Managers</span>
            </nav>
            <span className="inline-block font-body font-bold text-xs tracking-[0.12em] uppercase text-boon-light-coral mb-3">
              The Manager Gap
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              The first-time manager problem{' '}
              <span className="font-serif italic text-boon-light-coral">nobody talks about.</span>
            </h1>
            <p className="text-lg text-white/85 max-w-2xl leading-relaxed">
              Your best engineer just became an engineering manager. Your top sales rep is now leading a team. They were promoted because they were great at their old job. Nobody prepared them for the new one.
            </p>
            <div className="flex gap-6 mt-6 text-sm text-white/60">
              <span>12 min read</span>
              <span>February 2026</span>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <div className="max-w-3xl mx-auto px-6 pt-12">

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Here&apos;s a scene that plays out at every growing company. Someone is excellent at their job. They consistently deliver. They&apos;re reliable, smart, well-liked. So the company promotes them to manager. Maybe there&apos;s a congratulatory email, a title change, a modest pay bump. And then... nothing. No preparation. No coaching. No structured onboarding into what is, in every meaningful way, a completely different job.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            The person who was your best individual contributor last month is now responsible for giving feedback, running 1:1s, navigating team conflict, managing performance, making hiring decisions, and translating strategy into daily work. Skills they were never taught. Responsibilities they were never trained for. And most of them are too proud, too overwhelmed, or too unsure to ask for help.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            This is the first-time manager problem. And it&apos;s quietly costing companies far more than they realize.
          </p>

          <SectionBreak />

          {/* THE PROMOTION */}
          <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4">
            The promotion <Kicker>that changes everything.</Kicker>
          </h2>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Promotion to management is one of the largest role transitions in a person&apos;s career. It&apos;s not a step up. It&apos;s a step sideways into an entirely different discipline. The skills that made someone a great engineer, designer, analyst, or salesperson have almost nothing to do with the skills they need as a manager of engineers, designers, analysts, or salespeople.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">Think about what actually changes:</p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            <strong className="text-boon-charcoal">Your output is no longer your own work.</strong> You&apos;re now measured by what your team produces. The dopamine hit of personally solving a hard problem is replaced by the slower, less visible work of helping other people solve hard problems.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            <strong className="text-boon-charcoal">Your relationships shift overnight.</strong> Peers become direct reports. The person you used to commiserate with about your manager is now looking to you for direction. Social dynamics that were simple yesterday are suddenly complicated.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            <strong className="text-boon-charcoal">You&apos;re expected to have conversations nobody taught you how to have.</strong> Performance feedback. Career development discussions. Navigating conflict between team members. Telling someone their work isn&apos;t good enough. These aren&apos;t things you learn by watching your own manager do them, especially if your own manager wasn&apos;t great at them either.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            <strong className="text-boon-charcoal">Your calendar fills with other people&apos;s problems.</strong> The time you used to spend in deep work is now split between 1:1s, team meetings, cross-functional alignment, and the constant triage of who needs what from you and when.
          </p>

          <QuoteBlock>
            Promotion is a title change. Growth is a behavior change. Most companies hand out the first and hope the second follows.
          </QuoteBlock>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            For some people, the transition clicks. They have natural instincts, good role models, or the self-awareness to figure it out. But research suggests that most new managers struggle, and the consequences aren&apos;t just personal. They ripple across their entire team.
          </p>

          <SectionBreak />

          {/* WHAT THE DATA SAYS */}
          <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4">
            What the data says <Kicker>about the gap.</Kicker>
          </h2>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            This isn&apos;t a soft problem. The first-time manager gap has hard, measurable consequences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-10">
            {STATS.map((stat) => (
              <StatCard key={stat.number} number={stat.number} desc={stat.desc} />
            ))}
          </div>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            That last number deserves emphasis. Seventy percent of the variance in team engagement traces back to one person: the direct manager. Not the CEO&apos;s vision. Not the compensation package. Not the company&apos;s mission statement. The person who runs their 1:1s and decides whether they feel heard, challenged, and supported.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            When that person is a new manager who&apos;s struggling in silence, the effects compound quickly. Engagement drops. Good people start interviewing elsewhere. The remaining team picks up the slack, which accelerates burnout. And the new manager, sensing things are slipping, often defaults to the only playbook they know: working harder individually instead of leading differently. Which makes everything worse.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            The financial impact isn&apos;t abstract either. Replacing an employee costs between 50% and 200% of their annual salary depending on the role. If a struggling new manager loses two or three people from their team over the course of a year, the replacement costs alone dwarf any investment in manager development.
          </p>

          <SectionBreak />

          {/* FIVE CONVERSATIONS */}
          <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4">
            The five conversations <Kicker>new managers avoid.</Kicker>
          </h2>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            If you ask most new managers what they find hardest, they&apos;ll usually say &quot;time management&quot; or &quot;prioritization.&quot; Those are real challenges, but they&apos;re not the root issue. The root issue is that management is fundamentally a relational discipline, and the hardest parts are conversations.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Specifically, there are five conversations that most new managers delay, avoid, or handle poorly. And each one has consequences that get worse the longer it&apos;s avoided.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">1. The performance conversation</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Telling someone their work isn&apos;t meeting expectations. Most new managers either avoid it entirely (hoping the problem resolves itself) or handle it so poorly that it damages the relationship. The avoidance costs the team. The botched delivery costs trust. Either way, the new manager loses.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">2. The feedback conversation</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Not annual review feedback. The day-to-day kind. &quot;Here&apos;s what I noticed in that meeting. Here&apos;s what worked. Here&apos;s what I&apos;d do differently.&quot; Most new managers don&apos;t give enough of it, and when they do, it&apos;s either too vague (&quot;great job!&quot;) or too late to be useful. Building a feedback habit is one of the highest-leverage skills a new manager can develop.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">3. The delegation conversation</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Handing off work they could do better and faster themselves, and trusting someone else to own it. This is where former high-performers get stuck. They know they could do the task in half the time. What they don&apos;t yet understand is that doing it themselves is the most expensive decision they can make, because it scales nothing.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">4. The career conversation</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            &quot;Where do you want to be in two years, and how can I help you get there?&quot; Most new managers don&apos;t have these conversations because nobody had them with them. The result: direct reports who feel like nobody&apos;s invested in their growth, which is one of the top drivers of attrition.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">5. The &quot;I don&apos;t know&quot; conversation</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Admitting uncertainty. Saying &quot;I&apos;m figuring this out too.&quot; New managers often feel pressure to have all the answers, especially if they were promoted for expertise. The irony is that the vulnerability of admitting what you don&apos;t know is exactly what builds trust with a team. But it takes confidence most new managers haven&apos;t developed yet.
          </p>

          <Callout>
            <strong>The pattern:</strong> New managers avoid hard conversations. The avoidance creates bigger problems. The bigger problems feel even harder to address. The cycle repeats until someone leaves, the manager burns out, or both.
          </Callout>

          <SectionBreak />

          {/* WHAT MOST COMPANIES DO */}
          <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4">
            What most companies do about it <Kicker>(and why it doesn&apos;t work).</Kicker>
          </h2>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Companies aren&apos;t completely ignoring this. Many have some version of new manager support. The problem is that what they offer rarely matches the scale or depth of what&apos;s needed.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">The half-day workshop</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            By far the most common approach. A training session on &quot;management fundamentals&quot; covering feedback models, communication styles, and maybe a personality assessment. The content is usually fine. The problem is that a half-day event doesn&apos;t change behavior. People nod along, take some notes, and go back to exactly what they were doing before. Within two weeks, retention of the material drops to near zero without reinforcement.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">The e-learning library</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            &quot;Here&apos;s access to 500 hours of leadership content. Go learn.&quot; Completion rates for voluntary e-learning hover around 5-15%. And even when people do complete a module, there&apos;s no connection between what they watched on a screen and the difficult conversation they need to have on Tuesday.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">The buddy system</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Pairing new managers with more experienced ones for informal mentoring. This can be valuable when the mentor is good, available, and invested. In practice, it often fizzles after the first month as both people get consumed by their own workloads. And the quality varies wildly depending on who gets paired with whom.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">The &quot;sink or swim&quot; approach</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            More common than anyone admits. The implicit belief: &quot;I figured it out, they&apos;ll figure it out.&quot; This works for the small percentage of natural managers. For everyone else, it produces a year of struggle, a team that suffers, and a manager who either burns out or concludes they were never cut out for leadership, both of which are preventable losses.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            None of these approaches are inherently bad. They&apos;re just insufficient. The gap between a half-day workshop and the twelve months of daily management challenges that follow is where the actual development needs to happen. And that gap is exactly where most companies have nothing.
          </p>

          <SectionBreak />

          {/* WHAT ACTUALLY WORKS */}
          <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4">
            What actually works: <Kicker>development over time, not in a day.</Kicker>
          </h2>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            If the problem is that new managers face a sustained, complex transition that unfolds over months, the response needs to be sustained and structured, too. Here&apos;s what the evidence and practice suggest works best.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Cohort-based programs with spacing</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Groups of new managers going through a structured program together, with sessions spaced weeks apart. The spacing is critical. It gives people time to practice what they&apos;ve learned in real situations and come back to discuss what happened. The cohort creates peer accountability and normalizes the reality that everyone is figuring this out. Nobody&apos;s alone in it.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">1:1 coaching alongside the program</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            A coach who knows the new manager&apos;s context and can help them work through specific situations as they arise. The cohort program builds shared skills and language. The coaching makes it personal. &quot;Here&apos;s how to apply the feedback framework to the actual conversation you need to have with Sarah this week.&quot;
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Manager visibility</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            The new manager&apos;s own manager should know what they&apos;re working on developmentally and be able to reinforce it in the day-to-day. This doesn&apos;t mean reading coaching session notes. It means understanding the themes: &quot;Jamie is working on delegation this quarter&quot; so they can create opportunities for Jamie to practice.
          </p>

          <h3 className="text-xl font-semibold text-boon-navy mt-10 mb-3">Real practice, not theory</h3>
          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            The best programs are anchored in scenarios the new manager is actually facing. Not &quot;here&apos;s a case study about a fictional company.&quot; More like &quot;you mentioned your direct report isn&apos;t meeting expectations. Let&apos;s work through how you&apos;d open that conversation, what you&apos;d say, and how you&apos;d handle the three most likely responses.&quot;
          </p>

          {/* Scenario cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
            <ScenarioCard
              variant="before"
              title="Without development"
              items={[
                'New manager avoids performance conversation for three months.',
                'Team engagement drops 15%.',
                'Two high performers start interviewing elsewhere.',
                'Manager burns out trying to compensate by doing everyone\'s work.',
              ]}
            />
            <ScenarioCard
              variant="after"
              title="With structured development"
              items={[
                'Coach helps manager prepare for and debrief the conversation.',
                'Cohort peers share how they handled similar situations.',
                'Manager builds confidence through practice and support.',
                'Team sees growth. Engagement holds. People stay.',
              ]}
            />
          </div>

          <SectionBreak />

          {/* FIRST TWELVE MONTHS */}
          <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4">
            The first twelve months: <Kicker>a realistic timeline.</Kicker>
          </h2>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            New manager development isn&apos;t a single event. It&apos;s a progression. Here&apos;s roughly what the journey looks like when it&apos;s done well.
          </p>

          {/* Timeline */}
          <div className="relative my-8 pl-8 border-l-2 border-boon-light-blue ml-1.5">
            {TIMELINE_ITEMS.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            This isn&apos;t a rigid prescription. Some people move faster, some need more time with specific skills. The point is that real development unfolds over months, not hours. And the support needs to be there throughout, not just at the beginning.
          </p>

          <SectionBreak />

          {/* WHAT THIS MEANS */}
          <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-4">
            What this means <Kicker>for your organization.</Kicker>
          </h2>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            If you&apos;re an L&amp;D leader, a CHRO, or a CEO reading this, here&apos;s the honest assessment:
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            Look at how many people your company promoted into management in the last two years. Now look at how much structured support those people received in their first twelve months. If the answer is &quot;a workshop and access to an e-learning library,&quot; you&apos;re running an expensive experiment with your most critical leadership layer.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            The new managers in your organization are the ones making daily decisions about how work gets done, how feedback is delivered, how conflict is resolved, and whether people feel supported enough to do their best work. They&apos;re the front line of your culture. And most of them are figuring it out alone.
          </p>

          <p className="mb-5 font-body text-gray-600 leading-relaxed">
            That doesn&apos;t have to be the case. A structured, sustained program that combines cohort learning with 1:1 coaching, anchored in real challenges, can close the gap. Not overnight, but reliably, over the first year that matters most.
          </p>

          <Callout variant="green">
            <strong>A practical next step:</strong> Audit your last twelve months of promotions to management. For each person, ask: what structured development did they receive in their first six months? If the answer makes you uncomfortable, that&apos;s useful information. It means the problem is real, and it&apos;s addressable.
          </Callout>

          {/* CTA */}
          <CTABanner
            title={<>GROW was built <Kicker>for exactly this.</Kicker></>}
            description="Cohort-based development for new and rising managers. Feedback, delegation, difficult conversations. The skills most first-time managers never learned."
            primaryLabel="Learn About GROW"
            primaryHref="/solutions/grow"
            secondaryLabel="Or schedule a conversation &rarr;"
            secondaryHref="/demo"
          />

          <SectionBreak />

          {/* RELATED */}
          <section className="mb-16">
            <SectionLabel>Keep Reading</SectionLabel>
            <h2 className="text-3xl font-bold text-boon-navy tracking-tight mb-6 mt-1">Related</h2>
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
