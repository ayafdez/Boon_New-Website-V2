import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd, siteUrl } from '@/lib/seo';
import { Sparkles, TrendingUp, Target, Users, CheckCircle2 } from 'lucide-react';
import { TogetherDashboardPreview } from '@/components/solutions/TogetherDashboardPreview';
import { ProblemSection } from '@/components/solutions/ProblemSection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon TOGETHER - Team Coaching & Leadership Offsites',
  description:
    'Facilitated workshops and cohort experiences that build team alignment with measured outcomes. A connected system for leadership offsites, team coaching, and collective development.',
  path: '/solutions/together',
  ogDescription: 'Replace fragmented offsites with a connected system. Facilitated workshops, cohort experiences, and team coaching with measured outcomes.',
});

const PROBLEM_CARDS = [
  { label: 'SL', title: 'Siloed Learning', desc: 'Individual coaching builds skills but not shared operating standards across teams.' },
  { label: 'AF', title: 'Alignment Friction', desc: 'Cross-functional friction increases as each leader develops a different playbook.' },
  { label: 'CD', title: 'Cultural Drift', desc: 'Without shared language, leadership quality varies wildly across the organization.' },
  { label: 'FI', title: 'Fragmented Interventions', desc: 'Multiple external facilitators, ad-hoc offsites, and disconnected team-building efforts.' },
];



const FORMAT_CARDS = [
  {
    format: 'Group Coaching',
    duration: '6-month cohort',
    size: '4-8 per cohort',
    borderColor: 'border-t-[#FDB022]',
    checkColor: 'text-[#FDB022]',
    includes: ['Monthly 90-min sessions', 'Pre/post wellbeing assessment', 'Slack integration for themes', 'Individual progress tracking'],
  },
  {
    format: 'Team Workshops',
    duration: 'Single or multi-day',
    size: '15-45 participants',
    borderColor: 'border-t-[#4CD995]',
    checkColor: 'text-[#4CD995]',
    includes: ['Custom content design', 'Expert facilitation', 'Pre-work and follow-up', 'Synthesis report with themes'],
  },
  {
    format: 'Leadership Offsites',
    duration: '2-3 days',
    size: '10-30 leaders',
    borderColor: 'border-t-[#C47ACC]',
    checkColor: 'text-[#C47ACC]',
    includes: ['Strategic alignment sessions', 'Team building activities', 'Individual coaching sessions', 'Action planning and follow-up'],
  },
];

const DIFFERENTIATOR_CARDS = [
  { title: 'Connected to Coaching', desc: 'Group sessions feed into 1:1 coaching and vice versa. Themes surface across both, so nothing gets lost.', iconBg: 'bg-[#FDB022]', Icon: Sparkles },
  { title: 'Measured Impact', desc: 'Pre/post assessments track shifts in team coordination, communication, and decision quality over time.', iconBg: 'bg-[#4CD995]', Icon: TrendingUp },
  { title: 'Custom from Scratch', desc: 'No off-the-shelf curriculum. Every session is designed around your team\'s real dynamics and challenges.', iconBg: 'bg-[#466FF6]', Icon: Target },
  { title: 'Infrastructure, Not Events', desc: 'We build systems that outlast the engagement. Shared language, shared standards, shared expectations.', iconBg: 'bg-[#C47ACC]', Icon: Users },
];



const PRICING_POINTS = [
  { title: 'Custom Engagement Pricing', desc: 'Every TOGETHER engagement is designed around your team. Pricing reflects scope, cohort size, and duration.' },
  { title: 'All-Inclusive Delivery', desc: 'Facilitation, design, assessment tools, and follow-up are included. No hidden consulting fees.' },
  { title: 'Flexible Formats', desc: 'From single-day offsites to multi-month cohort programs. Structure adapts to your needs.' },
];

const FAQ_ITEMS = [
  { q: 'How is TOGETHER different from a team offsite?', a: 'Offsites are events. TOGETHER is a system. We design the experience, facilitate the hard conversations, and measure what shifts afterward. The offsite might be part of it, but it\'s connected to pre-work, follow-up, and ongoing coaching.' },
  { q: 'Can TOGETHER work alongside individual coaching?', a: 'Yes, and it\'s better when it does. Individual coaching builds personal capability. TOGETHER builds the shared layer. When both are active, development compounds faster because the language and standards are consistent.' },
  { q: 'What size teams does TOGETHER work for?', a: 'We\'ve run TOGETHER engagements for leadership teams of 8 and cohorts of 60+. The format adapts. Group coaching works well at 6-12. Offsites can scale larger. Manager Circles typically run 8-15.' },
  { q: 'How do you measure the impact of group development?', a: 'Pre/post assessments on team coordination, communication patterns, and decision-making alignment. Facilitator observations track qualitative shifts session over session. You get a clear before-and-after view.' },
];

const TRUST_LOGOS = [
  { src: 'https://storage.googleapis.com/boon-public-assets/censys.png', name: 'Censys' },
  { src: 'https://storage.googleapis.com/boon-public-assets/consensys.png', name: 'Consensys' },
  { src: 'https://storage.googleapis.com/boon-public-assets/circle.png', name: 'Circle' },
  { src: 'https://storage.googleapis.com/boon-public-assets/makeawish.png', name: 'Make-A-Wish' },
  { src: 'https://storage.googleapis.com/boon-public-assets/mastery.jpg', name: 'Mastery Logistics' },
  { src: 'https://storage.googleapis.com/boon-public-assets/heartland.png', name: 'Heartland' },
  { src: 'https://storage.googleapis.com/boon-public-assets/polen.png', name: 'Polen Capital' },
  { src: 'https://storage.googleapis.com/boon-public-assets/m3.png', name: 'M3 Insurance' },
];

export default function TogetherPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon TOGETHER',
    description: 'Facilitated workshops and cohort-based experiences for team alignment.',
    url: `${siteUrl}/solutions/together`,
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Together', path: '/solutions/together' },
  ]);

  const faqJsonLd = generateFAQJsonLd(
    FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a }))
  );

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <main className="bg-white">

      {/* ── Section 1: Hero ── */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Gradient blobs */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[60%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(253, 176, 34, 0.15) 0%, rgba(253, 176, 34, 0.06) 40%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[50%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.1) 0%, rgba(70, 111, 246, 0.04) 40%, transparent 70%)' }}
        />
        {/* Dotted texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(253, 176, 34, 0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FDB022]/10 text-[#FDB022] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase">
              Boon TOGETHER
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[76px] font-black text-[#2E353D] leading-tight lg:leading-[0.88] tracking-tighter mb-8 max-w-xl">
              Build infrastructure, not <span className="text-[#FDB022] italic font-serif">one-off events</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-lg mb-4">
              Group coaching, team workshops, and leadership offsites, all connected to your 1:1 coaching system, custom-designed for your hardest challenges, and measured with pre/post impact data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="bg-[#FDB022] text-white px-10 py-5 rounded-[15px] font-black text-lg hover:opacity-90 transition-all shadow-xl text-center"
              >
                Start a Conversation About Alignment
              </Link>
              <a
                href="#formats"
                className="border-2 border-gray-200 text-[#2E353D] px-10 py-5 rounded-[15px] font-black text-lg hover:border-gray-300 transition-all text-center"
              >
                See Formats
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaborating in a modern workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Case for Connection ── */}
      <ProblemSection
        overline="The Case for Connection"
        headline={<>High-performing individuals can still create a low-performing system.</>}
        bodyText="When development happens in silos, teams struggle to coordinate under pressure, especially during growth, change, or conflict. Boon TOGETHER creates shared language, shared standards, and shared expectations so your leaders actually operate like one team."
        accentColor="#FDB022"
        cards={PROBLEM_CARDS}
      />

      {/* ── Section 3: What Together Replaces ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative brackets */}
          <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none">
            <svg viewBox="0 0 32 200" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M30 2 C10 2, 2 20, 2 40 L2 160 C2 180, 10 198, 30 198" stroke="#4CD995" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none">
            <svg viewBox="0 0 32 200" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M2 2 C22 2, 30 20, 30 40 L30 160 C30 180, 22 198, 2 198" stroke="#4CD995" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="px-16 py-12">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FDB022] mb-6">
              What TOGETHER Replaces
            </p>
            <h3 className="text-3xl md:text-5xl font-black text-[#2E353D] tracking-tight leading-tight mb-6">
              Stop stitching together offsites, workshops, and facilitators.
            </h3>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              You&apos;re paying three vendors to do what one system should handle. TOGETHER consolidates facilitation, measurement, and follow-through into a single engagement your team actually feels.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: What Makes Us Different ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#1A1F24] relative overflow-hidden">
        {/* Dotted texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(253, 176, 34, 0.12) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
          }}
        />
        {/* Gold gradient glow */}
        <div
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(253, 176, 34, 0.2) 0%, rgba(253, 176, 34, 0.1) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FDB022]/10 text-[#FDB022] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase">
            What makes us different
          </div>
          <h2 className="text-4xl md:text-[64px] font-black text-white tracking-tight leading-[0.9] mb-6 max-w-4xl mx-auto">
            Not just <span className="italic font-serif text-white/40 line-through decoration-white/60">another workshop vendor</span>
          </h2>
          <p className="text-lg text-white/50 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
            Most group development is disconnected from individual coaching, generic in design, and impossible to measure. We built TOGETHER to fix all three.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIATOR_CARDS.map((card) => (
              <div key={card.title} className="text-left">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.iconBg}`}>
                  <card.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-black text-white mb-3">{card.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── Section 6: Flexible Formats ── */}
      <section id="formats" className="py-32 px-6 md:px-12 lg:px-24 bg-[#F9FAFB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FDB022] mb-6">
            Flexible Formats
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Three formats. One connected system.
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
            Every format connects to your coaching infrastructure. Choose one or combine all three based on what your team actually needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {FORMAT_CARDS.map((card) => (
              <div key={card.format} className={`bg-white rounded-2xl p-8 border border-gray-100 text-left border-t-4 ${card.borderColor}`}>
                <h3 className="text-lg font-black text-[#2E353D] mb-2">{card.format}</h3>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-gray-400 font-medium">{card.duration}</span>
                  <span className="text-gray-200">|</span>
                  <span className="text-sm text-gray-400 font-medium">{card.size}</span>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#2E353D]/40 mb-4">What&apos;s Included</p>
                <ul className="space-y-3">
                  {card.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${card.checkColor}`} />
                      <span className="text-sm text-gray-500 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Program Portal ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FDB022] mb-6">
              Program Portal
            </p>
            <h2 className="text-4xl md:text-[64px] font-black text-[#2E353D] tracking-tight leading-[0.9] mb-6 max-w-4xl mx-auto">
              See what&apos;s <span className="italic font-serif">actually happening</span>.
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
              AI-generated insights surface themes across sessions. Pre/post data measures what shifted. Your portal shows it all in real time, so you never have to wonder if the investment is working.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <TogetherDashboardPreview />
          </div>
        </div>
      </section>

      {/* ── Section 9: Works with Your Coaching Stack ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-[64px] font-black text-[#2E353D] tracking-tight leading-[0.9] mb-6">
            Works with your <span className="text-[#FDB022] italic font-serif">entire coaching stack</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
            Together isn&apos;t standalone, it&apos;s part of Boon&apos;s full platform
          </p>
          <div className="rounded-[28px] border-2 border-[#FDB022]/20 bg-[#FFFBF0] p-8 md:p-12">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
              {/* Together card */}
              <div className="rounded-2xl border-2 border-[#FDB022]/30 bg-white p-8 text-left flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#FDB022]/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#FDB022]" />
                </div>
                <h3 className="text-xl font-black text-[#2E353D] mb-2">You&apos;re here: Together</h3>
                <p className="text-gray-500 font-medium mb-6">Group coaching, workshops, offsites</p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FDB022]" />
                    <span className="text-sm text-[#2E353D] font-medium">Custom content design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FDB022]" />
                    <span className="text-sm text-[#2E353D] font-medium">Multi-month cohorts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FDB022]" />
                    <span className="text-sm text-[#2E353D] font-medium">Pre/post measurement</span>
                  </li>
                </ul>
              </div>
              {/* Cross-sell cards */}
              <div className="flex flex-col gap-4">
                <Link href="/solutions/scale" className="flex-1 flex flex-col justify-center rounded-2xl border border-gray-200 bg-white p-6 text-left hover:border-[#466FF6]/30 hover:shadow-md transition-all">
                  <p className="text-base font-black text-[#466FF6] mb-1">+ Scale</p>
                  <p className="text-sm text-gray-500">Add ongoing 1:1 coaching for participants</p>
                </Link>
                <Link href="/solutions/grow" className="flex-1 flex flex-col justify-center rounded-2xl border border-gray-200 bg-white p-6 text-left hover:border-[#FF8D80]/30 hover:shadow-md transition-all">
                  <p className="text-base font-black text-[#FF8D80] mb-1">+ Grow</p>
                  <p className="text-sm text-gray-500">Structure workshops into leadership development tracks</p>
                </Link>
                <Link href="/solutions/exec" className="flex-1 flex flex-col justify-center rounded-2xl border border-gray-200 bg-white p-6 text-left hover:border-[#C47ACC]/30 hover:shadow-md transition-all">
                  <p className="text-base font-black text-[#C47ACC] mb-1">+ Exec</p>
                  <p className="text-sm text-gray-500">Dedicated executive coaching for senior leaders</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Section 13: Pricing ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F9FAFB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FDB022] mb-6">
            Modern Pricing
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] tracking-tight leading-tight mb-6">
            Designed to fit real budgets.
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
            Transparent pricing that works for people leaders and finance teams.
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-[28px] border border-gray-100 p-10 md:p-12 text-left mb-10 shadow-sm">
            {PRICING_POINTS.map((point, i) => (
              <div key={point.title} className={i > 0 ? 'mt-8 pt-8 border-t border-gray-100' : ''}>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4CD995]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-5" stroke="#4CD995" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#2E353D] mb-1">{point.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div>
              <p className="text-lg font-black text-[#2E353D]">Custom-designed for your team.</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                Engagements start within 2-3 weeks
              </p>
            </div>
            <Link
              href="/demo"
              className="bg-[#FDB022] text-white px-10 py-4 rounded-[15px] font-black text-lg hover:opacity-90 transition-all shadow-xl"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 14: Trust + Testimonials ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Trust logos */}
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-10 text-center">
            Trusted by people-first organizations
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap mb-20 opacity-40">
            {TRUST_LOGOS.map((logo, i) => (
              <Image key={i} src={logo.src} alt={`${logo.name} logo`} width={100} height={32} className="h-8 w-auto object-contain grayscale" />
            ))}
          </div>

          {/* Testimonials */}
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#466FF6] mb-1 text-center">
            Testimonials
          </p>
          <div className="flex justify-center mb-10">
            <div className="w-8 h-0.5 bg-[#466FF6] rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Facilitator Perspective */}
            <div className="bg-[#F9FAFB] rounded-2xl p-10 border border-gray-100">
              <blockquote className="text-lg text-[#2E353D] font-medium leading-relaxed mb-8">
                &ldquo;The biggest shift we see is in the second month. Teams stop performing alignment and start practicing it. That&apos;s when the pre/post data starts moving.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4CD995]/20" />
                <div>
                  <p className="font-bold text-[#2E353D] text-sm">Boon Facilitator</p>
                  <p className="text-gray-400 text-xs">Cohort Lead, TOGETHER Program</p>
                </div>
              </div>
            </div>
            {/* Results */}
            <div className="bg-[#F9FAFB] rounded-2xl p-10 border border-gray-100">
              <blockquote className="text-lg text-[#2E353D] font-medium leading-relaxed mb-8">
                &ldquo;After a 6-month engagement, 87% of participants reported improved cross-functional collaboration. Manager feedback consistency improved by 34% across teams.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDB022]/20" />
                <div>
                  <p className="font-bold text-[#2E353D] text-sm">TOGETHER Program Results</p>
                  <p className="text-gray-400 text-xs">Pre/Post Assessment Data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 15: FAQ ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#2E353D] tracking-tight leading-tight mb-12 text-center">
            FAQs
          </h2>
          <div className="divide-y divide-gray-200">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-base md:text-lg font-bold text-[#2E353D] pr-8">{item.q}</h3>
                  <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-gray-500 leading-relaxed mt-4 pr-12">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 16: Final CTA ── */}
      <section className="mx-4 md:mx-8 mb-8">
        <div className="bg-[#1A1F24] rounded-[40px] py-24 md:py-32 px-6 text-center relative overflow-hidden">
          {/* Overlapping gradient blobs */}
          <div
            className="absolute top-[10%] right-[15%] w-[40%] h-[60%] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(253, 176, 34, 0.25) 0%, rgba(253, 176, 34, 0.1) 40%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-[10%] left-[10%] w-[35%] h-[50%] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.2) 0%, rgba(255, 141, 128, 0.08) 40%, transparent 70%)' }}
          />
          {/* Grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-[80px] font-black text-white mb-6 tracking-tighter leading-[0.88]">
              Growth is better when it&apos;s <span className="text-[#FDB022] italic font-serif">shared</span>.
            </h2>
            <p className="text-lg text-white/50 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Every Boon TOGETHER engagement is custom-designed around your team&apos;s real dynamics, not generic content.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-[#FDB022] text-white px-14 py-6 rounded-[15px] font-black text-xl hover:opacity-90 transition-all shadow-2xl"
            >
              Book a Strategy Call
            </Link>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mt-10">
              Facilitated by ICF Certified Coaches &middot; Systemic Design &middot; Global Delivery
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
