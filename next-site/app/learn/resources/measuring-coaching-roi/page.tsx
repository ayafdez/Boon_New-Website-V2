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
  title: 'Measuring Coaching ROI: A Practical Guide for L&D Leaders',
  description:
    "Your CEO wants to know if coaching is working. Here's how to measure it honestly -- leading indicators, lagging indicators, and the metrics that actually matter.",
  path: '/learn/resources/measuring-coaching-roi',
});

// ---------------------------------------------------------------------------
// Data constants
// ---------------------------------------------------------------------------

const TOC_ITEMS = [
  { id: 'real-problem', label: 'Why measurement is so hard (and why most teams fake it)' },
  { id: 'wrong-metrics', label: "The metrics everyone uses that don't prove anything" },
  { id: 'framework', label: 'A practical measurement framework' },
  { id: 'leading-indicators', label: 'Leading indicators: is the coaching taking hold?' },
  { id: 'lagging-indicators', label: 'Lagging indicators: is it moving the business?' },
  { id: 'competency-tracking', label: 'Competency growth tracking' },
  { id: 'confidentiality', label: 'The confidentiality tension' },
  { id: 'building-case', label: 'Building the business case for leadership coaching' },
  { id: 'boon-approach', label: 'How Boon measures impact' },
  { id: 'faq', label: 'FAQ' },
];

const WRONG_METRICS = [
  {
    metric: 'Participation rates',
    problem: "Tells you people showed up. Doesn't tell you anything changed.",
    reality:
      '"95% of enrolled leaders completed at least one session" sounds impressive until you realize attendance and impact are completely different things. People can attend every session and still not change a single behavior.',
  },
  {
    metric: 'Satisfaction scores',
    problem: "Measures whether people enjoyed the experience, not whether it worked.",
    reality:
      "A 4.8/5 coach rating means the coachee liked their coach. That's good. But liking your coach and actually growing as a leader are not the same thing. Some of the most effective coaching is uncomfortable.",
  },
  {
    metric: 'Self-reported improvement',
    problem: 'People are poor judges of their own behavior change.',
    reality:
      '"I feel more confident as a leader" is a real feeling, but it\'s not evidence. Self-assessments consistently overestimate change. If your entire measurement strategy depends on people saying they improved, you\'re measuring optimism, not outcomes.',
  },
  {
    metric: 'Number of sessions completed',
    problem: 'Activity, not impact.',
    reality:
      "Your organization consumed 500 coaching sessions last quarter. Great. What changed? If you can't connect those sessions to observable behavior shifts or business outcomes, the number means nothing.",
  },
];

const LAGGING_METRICS = [
  ['Employee engagement', 'Compare engagement scores in teams with coached leaders vs. without. Look for trends over two or more survey cycles.', '6-12 months'],
  ['Retention', "Track voluntary turnover in coached leaders' teams vs. a control group. Regrettable attrition is the sharpest signal.", '6-18 months'],
  ['Promotion readiness', 'Are coached leaders advancing faster? Are their direct reports being promoted at higher rates? Both matter.', '12-18 months'],
  ['360 feedback trends', 'Compare 360 results before coaching and 6-12 months after. Look for shifts in specific competencies, not just overall scores.', '6-12 months'],
  ['Time-to-productivity', 'For new managers: how quickly do coached new managers reach full effectiveness vs. unsupported ones?', '6-12 months'],
  ['Internal mobility', 'Are coached leaders more likely to take on new challenges, cross-functional roles, or expanded scope?', '12+ months'],
];

interface FAQData {
  question: string;
  answer: string;
}

const FAQS: FAQData[] = [
  {
    question: "What's a realistic ROI to expect from a coaching program?",
    answer:
      "It depends entirely on what you're measuring and the maturity of your program. A well-designed program targeting new managers can show measurable competency growth within three months and meaningful engagement and retention improvements within six to twelve months. Be skeptical of anyone promising a specific multiplier (e.g., \"7x ROI\") because that level of precision requires assumptions that rarely hold up to scrutiny.",
  },
  {
    question: "How do you isolate coaching's impact from other factors?",
    answer:
      "You can't perfectly isolate it, and anyone who claims otherwise is overselling. What you can do is build a strong correlational case: compare coached populations to similar uncoached ones, control for obvious variables (tenure, role level, team size), and triangulate across multiple data sources. A comparison group is the single most powerful design choice you can make.",
  },
  {
    question: 'How many coaching sessions before you can see results?',
    answer:
      "Leading indicators (engagement depth, coach-observed shifts, qualitative specificity) should appear within two to four sessions. Measurable competency growth typically takes three to six months. Business outcome correlations require six to twelve months of data. If you're seeing zero signal after three months, something in the program design needs to change.",
  },
  {
    question: 'Should we measure individual coaching ROI or program-level ROI?',
    answer:
      "Program-level. Individual coaching outcomes are too variable and too influenced by factors outside coaching's control (team dynamics, organizational changes, personal circumstances). At the program level, these factors average out and patterns become meaningful. The exception is executive coaching, where the investment per person is high enough that individual outcome tracking makes sense.",
  },
  {
    question: "How do we measure ROI if we don't have a control group?",
    answer:
      "Use pre/post comparisons with the same population. Measure competency baselines before coaching starts, then track growth over time. Compare 360-degree feedback results across cycles. Survey the coached leaders' teams before and after. It's not as rigorous as a true control group, but it's vastly better than relying on satisfaction scores alone.",
  },
  {
    question: 'What if our CEO just wants a single ROI number?',
    answer:
      "Resist the temptation to manufacture one. A fabricated ROI number feels precise but is built on assumptions that collapse under questioning. Instead, present the converging evidence: \"Here are the behavior changes coaches are observing. Here are the competency growth trends. Here's how engagement and retention compare between coached and uncoached populations. Here's the estimated cost of the attrition we're preventing.\" That story is more credible and more defensible than any single number.",
  },
];

const RELATED_RESOURCES = [
  { label: 'What Is Leadership Development? The Complete Guide', href: '/learn/resources/what-is-leadership-development' },
  { label: "Coaching vs. Mentoring: What's the Difference?", href: '/learn/resources/coaching-vs-mentoring' },
  { label: 'The First-Time Manager Problem Nobody Talks About', href: '/learn/blog/first-time-manager' },
  { label: 'How to Build a Leadership Development Program From Scratch', href: '/learn/resources/building-a-leadership-development-program' },
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

function KickerCoral({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic text-boon-light-coral">{children}</span>;
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
    <div className={`bg-boon-off-white border-l-4 ${borderColor} rounded-r-lg px-6 py-5 my-8`}>
      {children}
    </div>
  );
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-boon-coral pl-6 py-4 my-8">
      <p className="font-serif text-xl text-boon-navy leading-relaxed m-0">{children}</p>
    </blockquote>
  );
}

function SectionBreak() {
  return <hr className="border-0 border-t border-gray-200 my-12" />;
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function MeasuringCoachingROIPage() {
  const pageUrl = `${siteUrl}/learn/resources/measuring-coaching-roi`;

  const articleJsonLd = generateArticleJsonLd({
    title: 'Measuring Coaching ROI: A Practical Guide for L&D Leaders',
    description:
      'How to measure the real impact of coaching programs using leading indicators, competency tracking, and business outcome correlations.',
    url: pageUrl,
    publishedTime: '2026-02-19',
    modifiedTime: '2026-02-19',
    authorName: 'Boon',
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Resources', path: '/learn/resources' },
    { name: 'Measuring Coaching ROI', path: '/learn/resources/measuring-coaching-roi' },
  ]);

  const faqJsonLd = generateFAQJsonLd(FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-boon-navy to-[#1e2d4a] pt-20 pb-16 px-6 text-white">
          <div className="max-w-3xl mx-auto">
            <nav className="text-xs text-white/50 mb-6">
              <Link href="/learn" className="hover:text-white/80 transition-colors">Learn</Link>
              <span className="mx-1.5">&rsaquo;</span>
              <Link href="/learn/resources" className="hover:text-white/80 transition-colors">Resources</Link>
              <span className="mx-1.5">&rsaquo;</span>
              <span>Measuring Coaching ROI</span>
            </nav>

            <span className="inline-block font-body font-bold text-xs tracking-[0.12em] uppercase text-boon-light-coral mb-3">
              The Measurement Problem
            </span>
            <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
              Measuring coaching ROI.{' '}
              <br className="hidden md:block" />
              <KickerCoral>Without the guesswork.</KickerCoral>
            </h1>
            <p className="text-white/85 text-lg max-w-xl leading-relaxed">
              Your CEO asks &quot;is coaching working?&quot; You pull up attendance numbers and satisfaction
              scores. They&apos;re not impressed. Here&apos;s how to build a measurement approach that
              actually answers the question.
            </p>
            <div className="flex gap-6 mt-6 text-sm text-white/50">
              <span>14 min read</span>
              <span>February 2026</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 pt-12">

          {/* TOC */}
          <nav className="bg-boon-off-white rounded-xl px-8 py-6 mb-12">
            <h3 className="font-sans font-semibold text-boon-navy text-base mb-4">What we&apos;ll cover</h3>
            <ol className="list-decimal pl-5 space-y-2 text-[0.95rem]">
              {TOC_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-boon-charcoal font-medium hover:text-boon-blue transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── Section 1: The Real Problem ── */}
          <section id="real-problem">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              Why measurement is so hard <Kicker>(and why most teams fake it).</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Here&apos;s the uncomfortable truth about measuring coaching ROI: most organizations
              don&apos;t do it well. Not because they don&apos;t care, but because coaching is genuinely
              harder to measure than most business investments. The outcomes are behavioral
              (how someone leads differently), the timeline is long (months, not weeks), and
              the causal chain is indirect (coaching improves a manager, who improves a team,
              who improves retention, which saves money).
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Compare that to measuring a marketing campaign. You spend money, you get clicks,
              you track conversions, you calculate return. Clean. Linear. Leadership development
              doesn&apos;t work that way. The best you can do is build a rigorous case using converging
              evidence, not a single silver-bullet metric.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The result? Most L&amp;D teams either avoid measurement altogether (&quot;coaching is
              qualitative, you can&apos;t put a number on it&quot;) or they rely on vanity metrics that
              don&apos;t survive executive scrutiny. Neither approach protects the budget when the
              CFO starts asking hard questions.
            </p>

            <QuoteBlock>
              Impact becomes guesswork. And guesswork doesn&apos;t survive budget season.
            </QuoteBlock>
          </section>

          <SectionBreak />

          {/* ── Section 2: Wrong Metrics ── */}
          <section id="wrong-metrics">
            <SectionLabel>The Traps</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              The metrics everyone uses <Kicker>that don&apos;t prove anything.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              These metrics aren&apos;t useless. They&apos;re necessary for program management. But they
              don&apos;t answer the question your CEO is actually asking, which is: &quot;Is this making
              our leaders better, and is that worth what we&apos;re spending?&quot;
            </p>

            <div className="space-y-6 my-8">
              {WRONG_METRICS.map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded bg-boon-coral/10 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-boon-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <h3 className="font-sans font-semibold text-boon-navy text-base m-0">{item.metric}</h3>
                  </div>
                  <p className="text-[0.95rem] text-boon-coral font-medium mb-2">{item.problem}</p>
                  <p className="text-[0.95rem] text-gray-500 leading-relaxed m-0">{item.reality}</p>
                </div>
              ))}
            </div>

            <Callout variant="coral">
              <p className="text-[0.95rem] leading-relaxed m-0 text-boon-charcoal">
                <strong className="text-boon-navy">The core issue:</strong> These metrics measure
                the coaching <em>process</em>, not coaching <em>outcomes</em>. They answer &quot;did coaching
                happen?&quot; not &quot;did coaching work?&quot; And the second question is the only one that
                matters to anyone controlling a budget.
              </p>
            </Callout>
          </section>

          <SectionBreak />

          {/* ── Section 3: Framework ── */}
          <section id="framework">
            <SectionLabel>The Framework</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              A practical measurement framework.
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Forget trying to calculate a single ROI number for coaching. That precision is
              misleading at best and dishonest at worst. Instead, build a measurement approach
              across three layers, each providing a different type of evidence that coaching is
              producing value.
            </p>

            {/* Visual framework */}
            <div className="my-10 space-y-4">
              <div className="bg-boon-blue/5 border border-boon-blue/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 bg-boon-blue text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">1</span>
                  <h4 className="font-sans font-bold text-boon-navy text-base m-0">Leading Indicators</h4>
                  <span className="text-xs text-boon-blue font-medium bg-boon-blue/10 px-2 py-0.5 rounded-full">Weeks 2-12</span>
                </div>
                <p className="text-sm text-gray-500 m-0">
                  Is the coaching taking hold? Behavior shifts, coach observations, applied learning between sessions.
                </p>
              </div>

              <div className="bg-boon-green/5 border border-boon-green/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 bg-boon-green text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">2</span>
                  <h4 className="font-sans font-bold text-boon-navy text-base m-0">Competency Growth</h4>
                  <span className="text-xs text-boon-green font-medium bg-boon-green/10 px-2 py-0.5 rounded-full">Months 3-9</span>
                </div>
                <p className="text-sm text-gray-500 m-0">
                  Are leaders building specific capabilities? Coach-observed, competency-mapped growth over time.
                </p>
              </div>

              <div className="bg-boon-gold/5 border border-boon-gold/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 bg-boon-gold text-boon-navy text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">3</span>
                  <h4 className="font-sans font-bold text-boon-navy text-base m-0">Business Outcomes</h4>
                  <span className="text-xs text-amber-700 font-medium bg-boon-gold/15 px-2 py-0.5 rounded-full">Months 6-18</span>
                </div>
                <p className="text-sm text-gray-500 m-0">
                  Is it moving the business? Engagement, retention, promotion readiness, 360-degree feedback trends.
                </p>
              </div>
            </div>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The power of this framework is that it gives you something credible to report at
              every stage. You don&apos;t have to wait twelve months to answer &quot;is this working?&quot;
              Leading indicators appear within weeks. Competency data emerges over months.
              Business outcomes confirm the trajectory over quarters. Each layer builds on the
              one before it.
            </p>
          </section>

          <SectionBreak />

          {/* ── Section 4: Leading Indicators ── */}
          <section id="leading-indicators">
            <SectionLabel>Layer 1</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              Leading indicators: <Kicker>is the coaching taking hold?</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              These are the earliest signals that coaching is producing change. They won&apos;t
              convince a CFO on their own, but they tell you whether the program is on the
              right track or needs adjustment.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Engagement and follow-through</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Not just &quot;did they attend?&quot; but &quot;are they actively engaged between sessions?&quot;
              Are leaders bringing specific situations to coaching? Are they completing commitments
              they made with their coach? Are session notes showing progressively deeper
              conversations? Active engagement correlates with outcomes in ways that attendance
              alone does not.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Coach-observed behavior shifts</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Trained coaches are skilled observers of change. They can report (at the aggregate
              level, never identifying individuals) patterns like: &quot;70% of coachees have
              shifted from avoiding difficult conversations to initiating them&quot; or &quot;leaders
              in the delegation cohort are showing measurable improvement in their ability to
              define outcomes rather than prescribe tasks.&quot; This is more credible than self-report
              because the observer is trained and external.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Qualitative feedback with specificity</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Generic feedback (&quot;coaching was great!&quot;) tells you nothing. Specific feedback
              tells you everything. &quot;I used the framework from coaching to restructure how I
              run my team meetings, and my team said the meetings are more focused now.&quot; That
              level of specificity indicates actual application, not just satisfaction. Design
              your feedback collection to elicit specifics, not ratings.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Manager observations</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The coached leader&apos;s manager is one of the best sources of evidence. &quot;Sarah has
              been much more direct in her communication with the team since starting coaching&quot;
              carries more weight than any self-assessment. Giving managers a simple framework
              to observe and report on development themes (without exposing coaching content)
              creates a powerful data source.
            </p>
          </section>

          <SectionBreak />

          {/* ── Section 5: Lagging Indicators ── */}
          <section id="lagging-indicators">
            <SectionLabel>Layer 3</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              Lagging indicators: <Kicker>is it moving the business?</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              These are the outcomes that executives care about. They take longer to materialize,
              and they&apos;re influenced by many factors beyond coaching. But when you can show
              correlation between coaching investment and business outcomes, the argument for
              continued investment becomes much stronger.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-[0.95rem]">
                <thead>
                  <tr className="bg-boon-navy text-white">
                    <th className="px-5 py-3 text-left font-sans font-semibold text-sm">Metric</th>
                    <th className="px-5 py-3 text-left font-sans font-semibold text-sm">What to measure</th>
                    <th className="px-5 py-3 text-left font-sans font-semibold text-sm">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {LAGGING_METRICS.map(([metric, measure, timeline], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-boon-off-white'}>
                      <td className="px-5 py-3 font-semibold text-boon-navy whitespace-nowrap">{metric}</td>
                      <td className="px-5 py-3 text-gray-500">{measure}</td>
                      <td className="px-5 py-3 text-gray-500 whitespace-nowrap">{timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout>
              <p className="text-[0.95rem] leading-relaxed m-0 text-boon-charcoal">
                <strong className="text-boon-navy">The comparison principle:</strong> The most
                persuasive data isn&apos;t absolute numbers. It&apos;s the difference between coached
                and uncoached populations. &quot;Engagement in coached managers&apos; teams increased 12
                points vs. 3 points in the control group&quot; is dramatically more convincing than
                &quot;engagement went up 12 points.&quot; If you can design even a rough comparison, do it.
              </p>
            </Callout>
          </section>

          <SectionBreak />

          {/* ── Section 6: Competency Tracking ── */}
          <section id="competency-tracking">
            <SectionLabel>Layer 2</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              Competency growth tracking: <Kicker>the missing middle.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              This is the layer most coaching programs are missing entirely, and it&apos;s arguably
              the most valuable. Competency tracking sits between leading indicators (&quot;is the
              coaching engaging?&quot;) and lagging indicators (&quot;did the business improve?&quot;). It
              answers the most specific question: are leaders actually building the capabilities
              we&apos;re developing them on?
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">How it works</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              At the start of a coaching engagement, you map development goals to specific
              competencies: feedback delivery, delegation, strategic thinking, conflict
              management, executive presence, whatever the organization and the individual
              need. The coach observes progress against these competencies over time, based
              on the situations the leader brings to coaching and how they handle them.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              This creates a development record that&apos;s objective (based on coach observation,
              not self-assessment), longitudinal (tracked over months, showing trajectory),
              and connected to the organization&apos;s leadership framework (mapped to the
              competencies that actually matter for the business).
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Why this is powerful</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Competency growth data lets you say things like: &quot;Across our manager cohort,
              average competency scores in feedback delivery improved from 2.3 to 3.8 over
              six months of coaching.&quot; That&apos;s not a satisfaction score. That&apos;s not attendance.
              That&apos;s verified capability growth in a specific skill the organization identified
              as critical. Try cutting that budget.
            </p>

            <QuoteBlock>
              Visibility without surveillance. See what&apos;s changing across your leadership
              population without compromising what makes coaching work.
            </QuoteBlock>
          </section>

          <SectionBreak />

          {/* ── Section 7: Confidentiality ── */}
          <section id="confidentiality">
            <SectionLabel>The Tension</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              The confidentiality <Kicker>balancing act.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Here&apos;s the paradox every organization faces: the more data you collect about
              coaching, the better you can prove ROI. But the more you surveil coaching, the
              less effective it becomes. Coaching works because it&apos;s a safe space. When leaders
              worry that what they say will be reported to their manager or HR, they stop being
              honest. And coaching without honesty is just performance theater.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The solution isn&apos;t to choose between measurement and confidentiality. It&apos;s to
              measure at the right level of aggregation.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-sans font-bold text-green-600 text-sm uppercase tracking-wide mb-4">
                  Safe to share
                </h4>
                <div className="space-y-3 text-[0.95rem] text-gray-500">
                  <p className="m-0">Aggregate participation rates across the program</p>
                  <p className="m-0">Competency growth trends at the cohort level</p>
                  <p className="m-0">Themes emerging across coaching engagements (e.g., &quot;delegation is the most common focus area&quot;)</p>
                  <p className="m-0">Satisfaction and engagement scores</p>
                  <p className="m-0">Business outcome correlations at the group level</p>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-sans font-bold text-boon-coral text-sm uppercase tracking-wide mb-4">
                  Must protect
                </h4>
                <div className="space-y-3 text-[0.95rem] text-gray-500">
                  <p className="m-0">Content of any individual coaching session</p>
                  <p className="m-0">Specific challenges an individual brought to coaching</p>
                  <p className="m-0">Individual competency scores shared with anyone besides the coachee</p>
                  <p className="m-0">Coach&apos;s assessment of an individual leader shared with their manager</p>
                  <p className="m-0">Anything that could be used in performance reviews or promotion decisions</p>
                </div>
              </div>
            </div>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The principle: <strong className="text-boon-charcoal">organizations see the forest. Individuals own the trees.</strong> A
              leader can choose to share their coaching insights with their manager. The system
              should never do it for them.
            </p>
          </section>

          <SectionBreak />

          {/* ── Section 8: Building the Case ── */}
          <section id="building-case">
            <SectionLabel>The Playbook</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              Building the business case <Kicker>for leadership coaching.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Whether you&apos;re proposing a new coaching program or defending an existing one,
              the business case follows the same structure. Lead with the problem, connect
              coaching to the solution, and show how you&apos;ll measure progress.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Step 1: Name the business problem</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Don&apos;t start with &quot;we should invest in coaching.&quot; Start with what&apos;s broken.
              &quot;We promoted 40 new managers last year. Engagement scores in their teams dropped
              an average of 8 points. Three teams lost their top performer within six months
              of the promotion. The estimated cost of that turnover alone is $600K.&quot; Now you
              have a problem worth solving.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Step 2: Connect coaching to the problem</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Explain <em>why</em> coaching is the right intervention for this specific problem.
              Not &quot;coaching is generally good for leaders&quot; but &quot;new managers struggle because
              the transition from IC to people leader requires entirely different skills. Coaching
              provides the individualized practice and accountability that workshops and training
              programs can&apos;t. Here&apos;s the research that supports this approach.&quot;
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Step 3: Show what you&apos;ll measure and when</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              This is where most proposals fall apart. Don&apos;t promise &quot;improved leadership.&quot; Promise
              specific metrics at specific timeframes: &quot;At 90 days, we&apos;ll measure coaching engagement
              depth and coach-observed behavior shifts. At six months, we&apos;ll compare engagement
              scores in coached vs. uncoached managers&apos; teams. At twelve months, we&apos;ll analyze
              retention trends.&quot; The specificity signals that you&apos;re serious about accountability.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">Step 4: Anchor to the cost of inaction</h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The most powerful business case isn&apos;t about what coaching costs. It&apos;s about what
              doing nothing costs. Manager-driven turnover. Disengaged teams. Underperforming
              leaders in critical roles. Failed promotions that require external hires at 2-3x
              the cost. When the cost of the status quo is clear, the coaching investment looks
              small by comparison.
            </p>

            {/* Weak vs Strong pitch */}
            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="bg-boon-off-white rounded-xl p-6">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400 block mb-3">Weak pitch</span>
                <p className="text-[0.95rem] text-gray-500 leading-relaxed m-0 font-serif italic">
                  &quot;We&apos;d like to invest in coaching for our managers. Research shows coaching
                  improves leadership effectiveness. The cost is $120K per year for 40 managers.
                  We&apos;ll measure satisfaction and participation.&quot;
                </p>
              </div>
              <div className="bg-boon-navy rounded-xl p-6">
                <span className="text-xs font-bold uppercase tracking-wide text-boon-light-coral block mb-3">Strong pitch</span>
                <p className="text-[0.95rem] text-white/85 leading-relaxed m-0 font-serif italic">
                  &quot;Manager-driven attrition cost us $600K last year. Engagement in newly-promoted
                  managers&apos; teams dropped 8 points on average. We&apos;re proposing a 40-person coaching
                  program at $120K that targets the specific skills new managers are missing. We&apos;ll
                  track competency growth monthly and compare team engagement against a control group
                  at 6 and 12 months.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Mid-page CTA */}
          <div className="bg-gradient-to-br from-boon-blue to-boon-deep-blue rounded-2xl p-8 md:p-10 text-center my-12 text-white">
            <h2 className="font-sans text-2xl md:text-[1.65rem] font-bold text-white mt-0 mb-2 tracking-tight">
              Coaching with <KickerCoral>built-in measurement.</KickerCoral>
            </h2>
            <p className="text-white/85 max-w-lg mx-auto mb-6 text-[0.95rem]">
              Boon tracks participation, competency growth, and development themes automatically.
              No spreadsheets. No guesswork. Just clear evidence that coaching is working.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-boon-coral hover:bg-boon-light-coral text-white font-semibold px-8 py-3 rounded-lg transition-all hover:-translate-y-0.5"
            >
              See the Dashboard
            </Link>
          </div>

          <SectionBreak />

          {/* ── Section 9: Boon's Approach ── */}
          <section id="boon-approach">
            <SectionLabel>How We Do It</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              How Boon measures <Kicker>impact.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Measurement isn&apos;t a feature we bolted on. It&apos;s built into how the entire platform
              works. When an organization uses Boon, measurement happens as a natural byproduct
              of the coaching itself, not as extra work for coaches, coachees, or L&amp;D teams.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">Competency-mapped coaching.</strong> Every coaching
              engagement starts with development goals mapped to specific competencies. As coaching
              progresses, coaches track growth against these competencies based on real coaching
              conversations. This creates a longitudinal view of capability development that
              organizations can access at the aggregate level through the{' '}
              <Link href="/solutions/scale" className="text-boon-blue font-medium hover:underline">customer portal</Link>.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">Manager visibility, not surveillance.</strong> Managers
              can see that their direct report is engaged in coaching, what competency areas they&apos;re
              focused on, and the general trajectory of their development. They never see session
              content, specific challenges discussed, or individual competency scores. This gives
              managers enough context to support development without undermining confidentiality.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">Theme-level organizational intelligence.</strong> Across
              your entire coaching population, Boon surfaces patterns: the most common development
              themes, where leaders are growing fastest, where they&apos;re getting stuck, and how different
              cohorts compare. This isn&apos;t data for data&apos;s sake. It tells L&amp;D teams where to invest
              more, where to create supplementary programming, and what&apos;s working across the board.
            </p>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">Integrated with your existing data.</strong> Coaching
              data becomes powerful when it connects to what you already track. Combine Boon&apos;s
              competency growth data with your engagement survey results, retention metrics, and
              promotion data, and you have a complete picture of how coaching is contributing to
              business outcomes.
            </p>

            <Callout variant="green">
              <p className="text-[0.95rem] leading-relaxed m-0 text-boon-charcoal">
                <strong className="text-boon-navy">The Boon difference:</strong> Most coaching
                platforms track sessions and satisfaction. Boon tracks competency growth,
                development themes, and organizational patterns. That&apos;s the difference between
                proving coaching happened and proving coaching worked.
              </p>
            </Callout>
          </section>

          <SectionBreak />

          {/* ── Section 10: FAQ ── */}
          <section id="faq">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-6">
              Frequently asked questions
            </h2>

            <div className="divide-y divide-gray-200">
              {FAQS.map((faq) => (
                <div key={faq.question} className="py-5">
                  <h3 className="font-sans font-semibold text-boon-navy text-[1.05rem] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[0.95rem] text-gray-500 leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <SectionBreak />

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-boon-blue to-boon-deep-blue rounded-2xl p-8 md:p-10 text-center my-12 text-white">
            <h2 className="font-sans text-2xl md:text-[1.65rem] font-bold text-white mt-0 mb-2 tracking-tight">
              Stop guessing. <KickerCoral>Start measuring.</KickerCoral>
            </h2>
            <p className="text-white/85 max-w-lg mx-auto mb-6 text-[0.95rem]">
              110+ enterprise customers. Competency tracking built in. The data your CFO actually wants.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-boon-coral hover:bg-boon-light-coral text-white font-semibold px-8 py-3 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/learn/resources/what-is-leadership-development"
              className="block mt-3 text-white/70 text-sm hover:text-white/90 transition-colors"
            >
              Read the complete leadership development guide &rarr;
            </Link>
          </div>

          {/* Related Resources */}
          <section className="mb-16">
            <SectionLabel>Keep Reading</SectionLabel>
            <h2 className="font-sans text-2xl font-bold text-boon-navy tracking-tight mb-4">
              Related
            </h2>
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
