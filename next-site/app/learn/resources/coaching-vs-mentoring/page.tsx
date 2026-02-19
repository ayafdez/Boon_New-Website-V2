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
  title: "Coaching vs. Mentoring: What's the Difference?",
  description:
    "Coaching and mentoring both help leaders grow, but they work differently. Here's when to use each, what to expect, and how to decide what your organization actually needs.",
  path: '/learn/resources/coaching-vs-mentoring',
});

// ---------------------------------------------------------------------------
// Data constants
// ---------------------------------------------------------------------------

const COMPARISON_ROWS = [
  ['Primary approach', 'Asks questions, facilitates thinking', 'Shares experience, gives advice'],
  ['Structure', 'Regular sessions, defined goals, accountability', 'Flexible, often informal'],
  ['Confidentiality', 'Strict, contractual', 'Informal, varies'],
  ['Duration', 'Time-bounded (3-12 months typical)', 'Open-ended, sometimes years'],
  ['Expertise source', 'Coaching methodology and process', 'Personal career experience'],
  ['Best for', 'Behavior change, skill building, specific challenges', 'Career navigation, organizational context, wisdom transfer'],
  ['Relationship', 'Professional, boundaried', 'Personal, relational'],
  ['Who provides it', 'Trained, certified professionals', 'Senior leaders, peers, alumni'],
  ['Scalability', 'Highly scalable with matching systems', 'Hard to scale, depends on volunteer mentors'],
  ['Measurement', 'Goal attainment, behavior change, competency growth', 'Harder to measure, often qualitative'],
];

const COACHING_USE_CASES = [
  {
    title: 'A new manager is struggling with the transition',
    desc: "They were promoted for technical excellence but now need to give feedback, delegate, and manage performance. These are skills that require practice and reflection, not just information. A coach helps them build the habits over months.",
  },
  {
    title: 'A leader has a specific behavior to change',
    desc: "They avoid conflict. They micromanage. They dominate meetings. They don't listen. These patterns are deeply ingrained and don't change from reading a book. Coaching provides the mirror, the challenge, and the accountability to actually shift.",
  },
  {
    title: 'Someone is navigating a high-stakes situation',
    desc: 'A reorganization. A difficult team member. A board presentation. A career-defining project. Coaching provides a confidential thinking partner for working through the specifics in real time.',
  },
  {
    title: 'The organization wants measurable development outcomes',
    desc: "If you need to track competency growth, demonstrate behavior change, or show ROI on development spend, coaching's structured nature makes it far more measurable than mentoring.",
  },
  {
    title: 'You need to scale development across many leaders',
    desc: 'Coaching can be delivered by a curated network of professionals, matched to individuals, with consistent quality. Mentoring depends on the availability and quality of internal volunteers, which varies wildly.',
  },
];

const MENTORING_USE_CASES = [
  {
    title: 'Someone is navigating organizational politics',
    desc: "No coach from outside can tell you how decisions really get made at your company, who the key influencers are, or which unwritten rules will trip you up. A senior internal mentor can.",
  },
  {
    title: 'A leader needs career path guidance',
    desc: '"Should I move to product or stay in engineering?" "What does the path to VP actually look like here?" These are questions that benefit from someone who\'s walked a similar path and can share what they learned.',
  },
  {
    title: 'New hires need to absorb culture quickly',
    desc: "Pairing new leaders with tenured ones accelerates their understanding of how things work, who to talk to, and what the organization values beyond what's written in the handbook.",
  },
  {
    title: 'You want to build cross-functional relationships',
    desc: "Mentoring pairs that cross department boundaries create connections that wouldn't form otherwise. A marketing leader mentored by a finance VP gains perspective that makes them better at their own job.",
  },
  {
    title: 'Knowledge transfer is the primary goal',
    desc: "When a senior leader is retiring or transitioning and their institutional knowledge needs to be preserved, mentoring is the natural mechanism. The value is in what the mentor knows, not in a process.",
  },
];

interface FAQData {
  question: string;
  answer: string;
}

const FAQS: FAQData[] = [
  {
    question: 'Can a manager be both a mentor and a coach to their direct report?',
    answer:
      "A manager can and should use coaching skills (asking good questions, facilitating thinking, providing feedback). But a manager can't serve as a formal coach because the power dynamic makes true confidentiality impossible. A manager can absolutely be a mentor, sharing career advice and organizational wisdom. But professional coaching should come from someone outside the reporting relationship.",
  },
  {
    question: 'Is coaching only for people who are struggling?',
    answer:
      "No. And framing it that way is one of the most common mistakes. The best athletes in the world have coaches. High-performing leaders benefit from coaching because it pushes them past the plateau that self-directed development can't break through. If coaching is only offered to people with performance issues, it carries a stigma that makes it less effective for everyone.",
  },
  {
    question: 'How do I know if my organization needs coaching, mentoring, or both?',
    answer:
      "Start with the problem you're trying to solve. If leaders need to build specific skills or change behaviors (feedback, delegation, conflict management), coaching is the right tool. If leaders need to navigate organizational dynamics, build networks, or absorb institutional knowledge, mentoring is the answer. Most growing organizations need both, delivered deliberately rather than ad hoc.",
  },
  {
    question: 'What should I look for in a coaching provider?',
    answer:
      "Three things matter most: coach quality and matching rigor (not a marketplace where employees self-select), measurement capability (can you see what's changing?), and integration with your broader development strategy (does the coaching connect to your other programs or operate in isolation?).",
  },
  {
    question: 'How long does a coaching engagement typically last?',
    answer:
      'Most coaching engagements run between three and twelve months, depending on the goals. Shorter engagements work for specific situations (navigating a transition, preparing for a role change). Longer engagements support deeper behavior change and skill development. The key is that coaching should be time-bounded with clear goals, not open-ended.',
  },
  {
    question: 'Can AI replace coaching or mentoring?',
    answer:
      "AI can support both. It can help with reflection between coaching sessions, suggest conversation topics for mentoring pairs, and provide practice scenarios. But the core of coaching is a trusted human relationship where someone helps you see what you can't see yourself. And the core of mentoring is someone who's lived the experience you're navigating. AI is a useful supplement. It's not a replacement.",
  },
];

const RELATED_RESOURCES = [
  { label: 'What Is Leadership Development? The Complete Guide', href: '/learn/resources/what-is-leadership-development' },
  { label: 'The First-Time Manager Problem Nobody Talks About', href: '/learn/blog/first-time-manager' },
  { label: 'Measuring Coaching ROI: A Guide for L&D Leaders', href: '/learn/resources/measuring-coaching-roi' },
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

interface NumberedItemProps {
  index: number;
  title: string;
  desc: string;
  color: 'blue' | 'green';
}

function NumberedItem({ index, title, desc, color }: NumberedItemProps) {
  const isBlue = color === 'blue';
  return (
    <div className="flex gap-4">
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 ${
          isBlue ? 'bg-boon-blue/10' : 'bg-boon-green/15'
        }`}
      >
        <span className={`font-sans font-bold text-sm ${isBlue ? 'text-boon-blue' : 'text-green-600'}`}>
          {index}
        </span>
      </div>
      <div>
        <h4 className="font-sans font-semibold text-boon-navy mb-1">{title}</h4>
        <p className="text-[0.95rem] text-gray-500 leading-relaxed m-0">{desc}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// TOC data
// ---------------------------------------------------------------------------

const TOC_ITEMS = [
  { id: 'quick-distinction', label: 'The quick distinction' },
  { id: 'coaching-defined', label: 'What coaching actually is' },
  { id: 'mentoring-defined', label: 'What mentoring actually is' },
  { id: 'side-by-side', label: 'Side-by-side comparison' },
  { id: 'when-coaching', label: 'When to use coaching' },
  { id: 'when-mentoring', label: 'When to use mentoring' },
  { id: 'together', label: 'Why the best programs use both' },
  { id: 'common-mistakes', label: 'Common mistakes organizations make' },
  { id: 'boon-approach', label: 'How Boon approaches coaching' },
  { id: 'faq', label: 'FAQ' },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function CoachingVsMentoringPage() {
  const pageUrl = `${siteUrl}/learn/resources/coaching-vs-mentoring`;

  const articleJsonLd = generateArticleJsonLd({
    title: "Coaching vs. Mentoring: What's the Difference?",
    description:
      "Coaching and mentoring both help leaders grow, but they work differently. Here's when to use each, what to expect, and how to decide what your organization actually needs.",
    url: pageUrl,
    publishedTime: '2026-02-18',
    modifiedTime: '2026-02-18',
    authorName: 'Boon',
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Resources', path: '/learn/resources' },
    { name: 'Coaching vs. Mentoring', path: '/learn/resources/coaching-vs-mentoring' },
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
              <span>Coaching vs. Mentoring</span>
            </nav>

            <span className="inline-block font-body font-bold text-xs tracking-[0.12em] uppercase text-boon-light-coral mb-3">
              Know the Difference
            </span>
            <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
              Coaching vs. mentoring:{' '}
              <br className="hidden md:block" />
              <KickerCoral>they&apos;re not the same thing.</KickerCoral>
            </h1>
            <p className="text-white/85 text-lg max-w-xl leading-relaxed">
              Both help leaders grow. But they work differently, serve different purposes, and produce
              different outcomes. Knowing when to use each is the difference between a development
              program that compounds and one that stays surface-level.
            </p>
            <div className="flex gap-6 mt-6 text-sm text-white/50">
              <span>10 min read</span>
              <span>February 2026</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 pt-12">

          {/* Table of Contents */}
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

          {/* ── Section 1: Quick Distinction ── */}
          <section id="quick-distinction">
            <SectionLabel>The Short Version</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              The quick distinction.
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Coaching is a structured, confidential relationship with a trained professional who helps
              you build specific capabilities. A coach asks better questions than they give answers.
              They hold you accountable, challenge your assumptions, and help you work through the
              real situations you&apos;re facing right now.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Mentoring is a relationship with someone more experienced who shares wisdom, advice,
              and perspective from their own career. A mentor has been where you&apos;re trying to go.
              They tell you what they wish they&apos;d known, open doors, and help you navigate the
              unwritten rules of an organization or industry.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Both are valuable. Neither is a substitute for the other. The confusion happens when
              organizations treat them as interchangeable, because they&apos;re not. And the consequences
              of getting the match wrong are real: a leader who needs coaching gets mentoring and
              stays stuck on the same behavioral patterns. A leader who needs mentoring gets coaching
              and misses the organizational context that would accelerate their growth.
            </p>
          </section>

          <SectionBreak />

          {/* ── Section 2: Coaching Defined ── */}
          <section id="coaching-defined">
            <SectionLabel>Coaching</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              What coaching <Kicker>actually is.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Professional coaching is a goal-oriented, time-bounded relationship between a leader and
              a trained coach. The coach doesn&apos;t need to have done your specific job. They need to
              understand how people change, how leaders develop, and how to create the conditions
              for someone to think more clearly about the challenges in front of them.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              A good coaching conversation doesn&apos;t feel like getting advice. It feels like having the
              sharpest, most focused thinking session of your week. The coach listens deeply, asks
              questions that reframe the problem, challenges the stories you&apos;re telling yourself, and
              helps you build a plan you&apos;ll actually follow through on.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">
              What makes coaching different
            </h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">It&apos;s structured.</strong> Coaching typically involves
              regular sessions (biweekly or monthly), specific development goals, and accountability
              between sessions. There&apos;s a rhythm and a framework, not just &quot;let&apos;s grab coffee when
              we can.&quot;
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">It&apos;s confidential.</strong> What happens in coaching
              stays in coaching. This confidentiality is what allows leaders to be honest about their
              struggles, doubts, and blind spots. Without it, coaching becomes performance theater.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">It&apos;s focused on behavior change.</strong> The
              ultimate measure of coaching isn&apos;t insight. It&apos;s whether the leader actually does
              something differently on Monday morning. Good coaches push past &quot;I understand the
              concept&quot; to &quot;here&apos;s exactly how you&apos;ll apply it in your next 1:1 with Sarah.&quot;
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">The coach doesn&apos;t need your job title on their
              resume.</strong> A great executive coach doesn&apos;t need to have been a CEO. They need
              to understand leadership dynamics, organizational psychology, and how to help someone
              think through complexity. The expertise is in the coaching, not in the domain.
            </p>

            <QuoteBlock>
              A coach doesn&apos;t give you their playbook. They help you build yours.
            </QuoteBlock>
          </section>

          <SectionBreak />

          {/* ── Section 3: Mentoring Defined ── */}
          <section id="mentoring-defined">
            <SectionLabel>Mentoring</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              What mentoring <Kicker>actually is.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Mentoring is a relationship-driven exchange where a more experienced person shares
              knowledge, perspective, and advice with someone earlier in their journey. Unlike
              coaching, the value of a mentor comes specifically from their experience. They&apos;ve
              navigated the path you&apos;re on. They know the terrain.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              A great mentor tells you things nobody else will. &quot;That VP is going to block your
              proposal unless you get buy-in from finance first.&quot; &quot;The way you&apos;re positioning
              yourself for that promotion won&apos;t work in this culture. Here&apos;s what will.&quot; &quot;I made
              that exact mistake ten years ago. Here&apos;s what I learned.&quot;
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">
              What makes mentoring different
            </h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">It&apos;s relationship-based, not role-based.</strong> Mentoring
              relationships often form organically. Someone admires another person&apos;s career,
              asks for guidance, and a relationship develops. The best mentoring happens when
              there&apos;s genuine rapport and trust.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">It&apos;s advice-forward.</strong> Where a coach asks
              questions to help you find your own answer, a mentor is more likely to share theirs.
              &quot;Here&apos;s what I&apos;d do.&quot; &quot;Here&apos;s how I handled that.&quot; &quot;Here&apos;s what I wish someone had
              told me.&quot; The value is in the directness of the transfer.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">It&apos;s usually less structured.</strong> Most mentoring
              relationships don&apos;t have formal session cadences, goals, or accountability mechanisms.
              They&apos;re more fluid, more conversational, and more dependent on the chemistry between
              the two people.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">The mentor&apos;s experience is the product.</strong> A
              mentor who hasn&apos;t navigated similar challenges can&apos;t offer what a mentee needs. This
              is the opposite of coaching, where the process itself is the value regardless of the
              coach&apos;s industry background.
            </p>
          </section>

          <SectionBreak />

          {/* ── Section 4: Side by Side ── */}
          <section id="side-by-side">
            <SectionLabel>The Comparison</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              Side by side.
            </h2>

            <p className="mb-6 font-body text-gray-600 leading-relaxed">
              This isn&apos;t about one being &quot;better&quot; than the other. It&apos;s about understanding the
              differences so you use the right approach for the right situation.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-[0.95rem]">
                <thead>
                  <tr className="bg-boon-navy text-white">
                    <th className="px-5 py-3 text-left font-sans font-semibold text-sm" />
                    <th className="px-5 py-3 text-left font-sans font-semibold text-sm">Coaching</th>
                    <th className="px-5 py-3 text-left font-sans font-semibold text-sm">Mentoring</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(([dimension, coaching, mentoring], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-boon-off-white'}>
                      <td className="px-5 py-3 font-semibold text-boon-navy">{dimension}</td>
                      <td className="px-5 py-3 text-gray-500">{coaching}</td>
                      <td className="px-5 py-3 text-gray-500">{mentoring}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <SectionBreak />

          {/* ── Section 5: When to Use Coaching ── */}
          <section id="when-coaching">
            <SectionLabel>Use Cases</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              When coaching is <Kicker>the right call.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Coaching works best when a leader needs to change how they operate, not just what they
              know. It&apos;s the right investment when:
            </p>

            <div className="space-y-6 my-8">
              {COACHING_USE_CASES.map((item, i) => (
                <NumberedItem key={i} index={i + 1} title={item.title} desc={item.desc} color="blue" />
              ))}
            </div>
          </section>

          <SectionBreak />

          {/* ── Section 6: When to Use Mentoring ── */}
          <section id="when-mentoring">
            <SectionLabel>Use Cases</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              When mentoring is <Kicker>the right call.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Mentoring works best when a leader needs context, connections, or career wisdom that
              only comes from someone who&apos;s been in their shoes. It&apos;s the right approach when:
            </p>

            <div className="space-y-6 my-8">
              {MENTORING_USE_CASES.map((item, i) => (
                <NumberedItem key={i} index={i + 1} title={item.title} desc={item.desc} color="green" />
              ))}
            </div>
          </section>

          <SectionBreak />

          {/* ── Section 7: Why Both ── */}
          <section id="together">
            <SectionLabel>The Real Answer</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              Why the best programs <Kicker>use both.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              This isn&apos;t an either/or decision. The most effective leadership development programs
              layer coaching and mentoring together, because they address different dimensions of
              growth.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Think of it this way: coaching builds the skills. Mentoring provides the context. A
              new director might work with a coach on how to lead their first skip-level team,
              practice difficult conversations, and build their delegation muscle. At the same time,
              a mentor who&apos;s been a director at the company for five years helps them understand
              the political landscape, introduces them to the right people, and shares the mistakes
              they made along the way.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              The coaching changes how they lead. The mentoring accelerates how quickly they navigate
              the organization. Together, the effect compounds.
            </p>

            <Callout variant="green">
              <p className="text-[0.95rem] leading-relaxed text-boon-charcoal">
                <strong className="text-boon-navy">The integration principle:</strong> When coaching
                and mentoring are connected (the coach knows the mentee is working on organizational
                influence, the mentor knows the coaching is focused on delegation), both relationships
                become more effective. When they&apos;re siloed, you get redundancy and gaps. The best
                programs design for connection, not independence.
              </p>
            </Callout>

            {/* Visual: The spectrum */}
            <div className="my-10">
              <div className="bg-gradient-to-r from-boon-blue/10 via-boon-off-white to-boon-green/10 rounded-xl p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-center flex-1">
                    <span className="inline-block bg-boon-blue text-white text-xs font-bold px-3 py-1 rounded-full mb-2">COACHING</span>
                    <p className="text-xs text-gray-500">Process-driven</p>
                  </div>
                  <div className="text-center flex-1">
                    <span className="inline-block bg-boon-navy text-white text-xs font-bold px-3 py-1 rounded-full mb-2">BOTH</span>
                    <p className="text-xs text-gray-500">Compounding growth</p>
                  </div>
                  <div className="text-center flex-1">
                    <span className="inline-block bg-boon-green text-white text-xs font-bold px-3 py-1 rounded-full mb-2">MENTORING</span>
                    <p className="text-xs text-gray-500">Experience-driven</p>
                  </div>
                </div>
                <div className="h-3 rounded-full bg-gradient-to-r from-boon-blue via-boon-navy to-boon-green" />
                <div className="grid grid-cols-3 gap-4 mt-6 text-[0.8rem] text-gray-500">
                  <div>
                    <p className="mb-1">Behavior change</p>
                    <p className="mb-1">Skill building</p>
                    <p className="mb-1">Accountability</p>
                    <p className="mb-0">Measurable outcomes</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-1">Skills + context</p>
                    <p className="mb-1">Challenge + wisdom</p>
                    <p className="mb-1">Structured + relational</p>
                    <p className="mb-0">Faster, deeper growth</p>
                  </div>
                  <div className="text-right">
                    <p className="mb-1">Career navigation</p>
                    <p className="mb-1">Organizational wisdom</p>
                    <p className="mb-1">Network building</p>
                    <p className="mb-0">Knowledge transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionBreak />

          {/* ── Section 8: Common Mistakes ── */}
          <section id="common-mistakes">
            <SectionLabel>The Pitfalls</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              Common mistakes <Kicker>organizations make.</Kicker>
            </h2>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">
              Calling it &quot;coaching&quot; when it&apos;s really mentoring
            </h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Some organizations assign senior leaders as &quot;coaches&quot; to more junior ones. The intention
              is good. But what they&apos;re actually creating is a mentoring program. The senior leader
              shares advice from their experience. They don&apos;t use coaching methodology, they haven&apos;t
              been trained as coaches, and there&apos;s no structure for behavior change. Calling it
              coaching sets the wrong expectations for everyone involved.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">
              Expecting mentoring to fix performance issues
            </h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              If a leader is struggling with a specific skill gap, say, they can&apos;t give direct
              feedback, or they micromanage every task, a mentor who says &quot;I used to do that too,
              here&apos;s what I learned&quot; isn&apos;t enough. Changing ingrained patterns requires the structured
              practice, accountability, and real-time support that coaching provides.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">
              Launching a mentoring program and forgetting about it
            </h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Mentoring programs have a pattern: enthusiastic launch, strong first month, quiet
              decline, eventual abandonment. Without light-touch structure (check-ins on whether
              pairs are meeting, conversation guides to keep things productive, a clear end date or
              renewal point) most mentoring relationships fade once the initial energy wears off.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">
              Assuming mentors are interchangeable
            </h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Random matching rarely works. A mentoring relationship needs genuine rapport, relevant
              experience overlap, and chemistry. Organizations that pair people based on availability
              rather than fit end up with polite but unproductive conversations that neither person
              prioritizes.
            </p>

            <h3 className="font-sans text-xl font-semibold text-boon-navy mt-8 mb-3">
              Using coaching as a remediation tool
            </h3>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              &quot;We&apos;re putting you in coaching&quot; should never feel like a punishment. When coaching
              is only offered to struggling leaders, it carries a stigma that undermines the trust
              the relationship needs to work. The best organizations position coaching as something
              high-performers get, not something underperformers are assigned to.
            </p>
          </section>

          {/* Mid-page CTA */}
          <div className="bg-gradient-to-br from-boon-blue to-boon-deep-blue rounded-2xl p-8 md:p-10 text-center my-12 text-white">
            <h2 className="font-sans text-2xl md:text-[1.65rem] font-bold text-white mt-0 mb-2 tracking-tight">
              Coaching that&apos;s built into <KickerCoral>the system.</KickerCoral>
            </h2>
            <p className="text-white/85 max-w-lg mx-auto mb-6 text-[0.95rem]">
              Boon brings 1:1 coaching, manager development, executive support, and team workshops
              into one platform. Coaches matched to your people. Progress you can actually see.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-boon-coral hover:bg-boon-light-coral text-white font-semibold px-8 py-3 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/solutions"
              className="block mt-3 text-white/70 text-sm hover:text-white/90 transition-colors"
            >
              See how it works &rarr;
            </Link>
          </div>

          <SectionBreak />

          {/* ── Section 9: Boon's Approach ── */}
          <section id="boon-approach">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="font-sans text-3xl font-bold text-boon-navy tracking-tight mb-4">
              How Boon approaches <Kicker>coaching.</Kicker>
            </h2>

            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              Boon is a coaching company, not a mentoring platform. We believe deeply in the value
              of mentoring, and we encourage organizations to build internal mentoring programs
              alongside Boon. But what we do is coaching: structured, confidential, professionally
              delivered, and designed for measurable growth.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              A few things make Boon&apos;s coaching different from what most people expect:
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">Coaches who&apos;ve done the job.</strong> Our coaches
              aren&apos;t just certified. They&apos;re former executives, functional leaders, and operators
              who understand the decisions your people are actually facing. They bring coaching
              methodology <em>and</em> real-world context. It&apos;s the best of both worlds.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">Smart matching, not a marketplace.</strong> We
              don&apos;t hand employees a list of 500 coaches and say &quot;pick one.&quot; Matching factors in
              role, industry, seniority, coaching focus, and context. The right coach for a first-time
              engineering manager is different from the right coach for a VP of Sales, and our
              matching reflects that.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">Coaching at every level, not just the top.</strong> Most
              companies reserve coaching for executives. Boon&apos;s{' '}
              <Link href="/solutions/scale" className="text-boon-blue font-medium hover:underline">SCALE</Link>{' '}
              program makes 1:1 coaching accessible to everyone in the organization. First-time
              managers through{' '}
              <Link href="/solutions/grow" className="text-boon-blue font-medium hover:underline">GROW</Link>.
              Senior leaders through{' '}
              <Link href="/solutions/exec" className="text-boon-blue font-medium hover:underline">EXEC</Link>.
              And teams through{' '}
              <Link href="/solutions/together" className="text-boon-blue font-medium hover:underline">TOGETHER</Link>.
            </p>
            <p className="mb-5 font-body text-gray-600 leading-relaxed">
              <strong className="text-boon-navy">Visibility without surveillance.</strong> We track
              participation, competency growth, and development themes at the aggregate level, so
              organizations can see what&apos;s changing without compromising the confidentiality that
              makes coaching work. Managers see trajectory. Never session content.
            </p>
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
              Build a coaching program <KickerCoral>that compounds.</KickerCoral>
            </h2>
            <p className="text-white/85 max-w-lg mx-auto mb-6 text-[0.95rem]">
              110+ enterprise customers. 270+ certified coaches. One system from IC to C-suite.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-boon-coral hover:bg-boon-light-coral text-white font-semibold px-8 py-3 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Schedule a Conversation
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
