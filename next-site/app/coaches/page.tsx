import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata, generateServiceJsonLd } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = generatePageMetadata({
  title: 'For Coaches',
  description:
    'Boon selects ICF-certified coaches who\'ve held P&L responsibility, led teams through transformation, and operated at scale. Join a network that respects the craft of coaching.',
  path: '/coaches',
});

// Icon Components
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#466FF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function GreenCheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-10 h-10 text-[#466FF6]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V12C2.017 12.5523 1.56928 13 1.017 13H-0.983C-1.53528 13 -1.983 12.5523 -1.983 12V9C-1.983 7.34315 -0.63985 6 1.017 6H7.017C8.67385 6 10.017 7.34315 10.017 9V15C10.017 17.7614 7.77843 20 5.017 20H2.017V21Z" />
    </svg>
  );
}

// Data
const partnershipBenefits = [
  {
    title: 'Matched to your experience',
    description: 'We pair you with leaders facing the exact challenges you\'ve navigated. Industry context, leadership stakes, and working style all factor into the match, not just calendar availability.',
  },
  {
    title: 'Full organizational context',
    description: 'You coach with clarity on culture, business constraints, team dynamics, and what success actually looks like. No more working in the dark.',
  },
  {
    title: 'Your judgment, our infrastructure',
    description: 'No scripts. No performative frameworks. We trust your training and give you tools that make your approach more effective, not tools that replace it.',
  },
];

const platformFeatures = [
  {
    title: 'AI session insights',
    description: 'After each conversation, your client sees an AI-generated summary of key themes and takeaways. They retain more. You repeat yourself less.',
  },
  {
    title: 'Action items in Slack',
    description: 'The commitments your clients make in session surface directly in their workflow. Goals don\'t get buried in a separate app they forget to check.',
  },
  {
    title: 'Roleplay between sessions',
    description: 'Clients can practice difficult conversations with AI simulation before doing them live. Feedback delivery, negotiation scenarios, challenging team dynamics: they rehearse with support, then execute with confidence.',
  },
  {
    title: 'Confidence tracking',
    description: 'Both you and your clients can see how self-reported confidence evolves over the engagement. Growth becomes visible, not just felt.',
  },
];

const scopeItems = [
  {
    label: 'Boon EXEC',
    description: 'Senior-level sparring for executives navigating enterprise stakes, board dynamics, strategic ambiguity, and organizational transformation.',
  },
  {
    label: 'Boon GROW',
    description: 'Cohort-based development for managers making the transition from contributor to leader. Structured curriculum, peer learning, and 1:1 coaching combined.',
  },
  {
    label: 'Boon SCALE',
    description: 'Leadership effectiveness coaching for employees across the organization. High-touch development that actually scales.',
  },
  {
    label: 'Boon TOGETHER',
    description: 'Team workshops that address real friction points: alignment, communication, decision-making, trust. Facilitated sessions that create immediate traction.',
  },
];

const barItems = [
  {
    title: 'Certified expertise',
    description: 'ICF accreditation (ACC, PCC, or MCC) is foundational, not optional. We verify credentials and expect ongoing professional development.',
  },
  {
    title: 'Real operating context',
    description: 'You\'ve owned a number, managed a P&L, led through transformation, or operated at scale inside real organizations. You\'ve felt the weight of decisions that have consequences.',
  },
  {
    title: 'Executive presence',
    description: 'The ability to hold space with senior leaders calmly and credibly. You\'re not intimidated by title, scope, or ambiguity.',
  },
  {
    title: 'Clear boundaries',
    description: 'Strong judgment around where coaching ends and therapy, consulting, or training begins. You know your lane and you stay in it.',
  },
];

const alignmentItems = [
  {
    title: 'Not a Marketplace',
    description: 'We don\'t focus on high-volume \'matches.\' We focus on selective, high-quality engagements with leaders you\'re genuinely right for.',
  },
  {
    title: 'No Selling Access',
    description: 'We don\'t sell access or pressure you to convert. We compensate you fairly for judgment, presence, and results.',
  },
  {
    title: 'Not a Scripted Service',
    description: 'We don\'t dictate methodology or require performative frameworks. We provide context and infrastructure; you provide the craft.',
  },
];

const whatYouGetItems = [
  'Selective matching with clients facing challenges you\'ve actually navigated',
  'Full organizational context before you start: culture, constraints, success criteria',
  'A platform that extends your impact between sessions without adding admin work',
  'Fair compensation that reflects the value of experienced practitioners',
  'A community of colleagues who share your commitment to rigorous development',
];

const testimonials = [
  {
    quote: 'I\'m paired with leaders facing the exact stakes I spent my career navigating. For the first time, the matching actually reflects my experience.',
    author: 'Elena R.',
    role: 'Executive Leadership Coach',
  },
  {
    quote: 'The AI session summaries changed everything. My clients come back having actually retained what we discussed. That continuity used to be the hardest part.',
    author: 'David K.',
    role: 'ACC Certified Coach',
  },
  {
    quote: 'I can see themes across my entire client portfolio now. It\'s changed how I think about what\'s working and where I need to push harder.',
    author: 'Michael P.',
    role: 'PCC Certified Coach',
  },
  {
    quote: 'The operational freedom matters, but what surprised me is how much the platform extends my impact. Goals showing up in Slack, roleplay between sessions: my work doesn\'t disappear when the call ends.',
    author: 'Sarah T.',
    role: 'MCC Certified Coach',
  },
];

const supportItems = [
  {
    title: 'Admin freedom',
    description: 'Scheduling, session notes, billing, and client communication: managed entirely by the Boon team. You do the coaching. We do the rest.',
  },
  {
    title: 'Fair compensation',
    description: 'Transparent rates that reflect the value of experienced practitioners. No pressure to upsell or convert. Your job is to coach well, not to sell.',
  },
  {
    title: 'Impact visibility',
    description: 'Aggregated insights show how your coaching is moving the needle across clients: confidence trends, theme patterns, engagement data, without ever exposing what happens in session.',
  },
  {
    title: 'Community depth',
    description: 'Access to a global network of peers who share your commitment to rigorous practice. Peer consultation, professional development, and colleagues who understand the work.',
  },
];

export default function CoachesPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon Coach Partnership Program',
    description:
      'Join a network of experienced coaches who deliver coaching inside a unified system with shared standards and measurable outcomes.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/coaches`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-white text-boon-charcoal overflow-hidden">
        {/* 1. Hero Section */}
        <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 border-b border-gray-50 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-boon-light-blue/30 via-white to-boon-soft-coral/15"></div>

          {/* Animated floating gradient blob - Coral (top right) */}
          <div
            className="absolute -top-[10%] -right-[10%] w-[45%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.35) 0%, rgba(255, 141, 128, 0.15) 30%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          ></div>

          {/* Animated floating gradient blob - Blue (bottom left) */}
          <div
            className="absolute -bottom-[15%] -left-[10%] w-[40%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.3) 0%, rgba(70, 111, 246, 0.1) 30%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          ></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-boon-light-blue/50 text-boon-blue label-text text-[10px] px-4 py-2 rounded-full mb-10 border border-boon-light-blue">
              For Practitioners
            </div>
            <h1 className="font-sans text-6xl md:text-[92px] font-bold leading-[0.85] tracking-tight mb-10 max-w-5xl">
              For coaches who&apos;ve <span className="text-boon-blue font-serif italic">done the work.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
              Boon selects ICF-certified coaches who&apos;ve held P&L responsibility, led teams through transformation,
              and operated at scale. We match you with business leaders facing challenges you&apos;ve already navigated
              and give you a product that makes the impact of your coaching easy to measure.
            </p>
            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              <Link
                href="/demo"
                className="bg-[#466FF6] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all text-center"
              >
                Join the Boon coaching bench
              </Link>
              <a
                href="#the-bar"
                className="border border-gray-200 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all text-center"
              >
                Our Coaching Standards
              </a>
            </div>
          </div>
        </section>

        {/* 2. The Partnership */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Partnership</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
                Your coaching, amplified.
              </h2>
              <div className="space-y-8 text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
                <p>
                  We don&apos;t treat coaches like interchangeable contractors. At Boon, you operate like a strategic
                  partner in organizational development. Our product makes matches based on real client context and
                  places you in engagements for long-term impact. We handle the operational overhead so you can focus
                  on the work that actually matters.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {partnershipBenefits.map((item) => (
                <div
                  key={item.title}
                  className="p-10 bg-[#F9FAFB] border border-gray-100 rounded-[40px] shadow-sm"
                >
                  <h4 className="text-xl font-black mb-4">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. The Platform */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-4xl mb-20">
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Platform</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
              Tools that extend your reach.
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              Most coaching is confined to sessions, and the growth happens in between. Boon&apos;s platform keeps
              your work alive in your clients&apos; daily workflow and gives you visibility into patterns you
              couldn&apos;t see before.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {platformFeatures.map((item) => (
              <div
                key={item.title}
                className="p-10 bg-[#F9FAFB] border border-gray-100 rounded-[40px] shadow-sm"
              >
                <h4 className="text-xl font-black mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. The Scope */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#2E353D] text-white rounded-[60px] mx-4 md:mx-10 my-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Scope</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
              One platform. Many paths to impact.
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              Boon coaches work across an integrated leadership system: executive coaching, manager development,
              frontline effectiveness, and team workshops all connected in a single platform. Your expertise flows
              where it&apos;s needed. You see how your work connects to the bigger organizational picture.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scopeItems.map((item) => (
              <div
                key={item.label}
                className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all"
              >
                <div className="text-xs font-black tracking-widest text-[#466FF6] uppercase mb-4">{item.label}</div>
                <p className="text-white/60 font-medium leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. The Bar */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white" id="the-bar">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Bar</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
                Rigor meets real-world experience.
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                We&apos;re selective about who joins the Boon coaching bench. Our coaches have both the credentials
                and the operating experience to work with leaders facing material challenges.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {barItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#F9FAFB] p-10 rounded-[40px] border border-gray-100"
                >
                  <h5 className="text-xl font-black mb-4">{item.title}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Clear Alignment */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
            <div className="rounded-[80px] overflow-hidden grayscale brightness-75 aspect-[4/5] shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
                alt="Professional Focus"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8 text-[#466FF6]">
                Clear alignment. <br />
                No games.
              </h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12">
                If you&apos;ve worked with coaching platforms before, you know the tradeoffs. Volume over fit.
                Administrative burden. Pressure to upsell. We&apos;ve built something different.
              </p>
              <div className="space-y-10 mb-16">
                {alignmentItems.map((item) => (
                  <div key={item.title} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-6 h-6 text-[#466FF6] font-black">
                      &times;
                    </div>
                    <div>
                      <h6 className="text-xl font-black mb-2 text-[#466FF6]">{item.title}</h6>
                      <p className="text-gray-400 font-medium leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-10">
                <p className="font-black text-lg mb-6">What you get instead:</p>
                <div className="space-y-4">
                  {whatYouGetItems.map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <GreenCheckIcon />
                      <p className="text-gray-500 font-medium leading-relaxed text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-4">
                From the Bench
              </p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                Built by practitioners, for practitioners.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="bg-[#F9FAFB] p-10 rounded-[40px] border border-gray-100 flex flex-col justify-between h-full"
                >
                  <div>
                    <QuoteIcon />
                    <p className="text-lg font-medium text-[#2E353D] leading-relaxed mb-10 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#2E353D] uppercase tracking-widest">{testimonial.author}</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Support */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">Support</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
                Get the support you need to do your best work.
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                We handle the operational overhead so you can focus on the work. But we also give you tools that
                make your practice more effective, not just more efficient.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {supportItems.map((item) => (
                <div key={item.title} className="group">
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    <CheckIcon />
                  </div>
                  <h5 className="text-xl font-black mb-4">{item.title}</h5>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Final CTA */}
        <section className="bg-boon-navy py-40 px-6 text-white text-center relative overflow-hidden">
          {/* Overlapping gradient blobs */}
          <div
            className="absolute top-[10%] right-[5%] w-[40%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.3) 0%, rgba(70, 111, 246, 0.1) 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          ></div>
          <div
            className="absolute bottom-[10%] left-[10%] w-[45%] h-[55%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.25) 0%, rgba(255, 141, 128, 0.1) 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          ></div>

          {/* Subtle grid line pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          ></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-sans text-5xl md:text-[84px] font-bold tracking-tight leading-[0.85] mb-12">
              Do your <span className="text-boon-coral font-serif italic">best work</span>, supported.
            </h2>
            <p className="text-xl text-white/70 font-body font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
              We are always looking for experienced practitioners who share our belief in democratized, high-quality
              coaching.
            </p>
            <div className="flex flex-col items-center gap-6 justify-center">
              <Link
                href="/demo"
                className="bg-boon-coral text-white px-12 py-6 rounded-full font-sans font-bold text-2xl shadow-2xl shadow-boon-coral/30 hover:scale-105 transition-all"
              >
                Apply to the Partnership
              </Link>
              <p className="text-white/50 text-[11px] font-body font-bold uppercase tracking-[0.2em]">
                We review applications carefully. Not every coach is a fit.
              </p>
            </div>
            <div className="mt-16 text-[10px] font-body font-bold uppercase tracking-[0.3em] text-white/30">
              Current Review Cycle: Q1 2025 • Average response: 2-3 weeks
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
