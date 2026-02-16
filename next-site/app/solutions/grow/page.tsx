import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateServiceJsonLd } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GrowSteps, GrowMeasurement, ProgramCopyButton } from '@/components/solutions/GrowInteractive';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon GROW - Leadership Development for Managers',
  description:
    'A structured, coaching-led development system built around real decisions, real conversations, and measurable behavior change for managers.',
  path: '/solutions/grow',
});

export default function GrowPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon GROW',
    description:
      'Structured leadership development for managers with measurable behavior change.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/solutions/grow`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawUnderline {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeInUpLate {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-underline { position: relative; display: inline-block; }
        .animate-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 2px;
          background: #FF8D80;
          animation: drawUnderline 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-badge { opacity: 0; animation: fadeInUpLate 0.6s ease-out 1.2s forwards; }
        .vignette { box-shadow: inset 0 0 100px rgba(0,0,0,0.1); }
      `}</style>

      <main className="bg-white overflow-hidden text-[#2E353D]">
        {/* 1. Hero Section */}
        <section className="pt-32 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-boon-light-blue/20 via-white to-boon-soft-coral/20"></div>

          {/* Animated floating gradient blob - Coral (top right) */}
          <div
            className="absolute -top-[10%] -right-[10%] w-[45%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.4) 0%, rgba(255, 141, 128, 0.15) 30%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          ></div>

          {/* Animated floating gradient blob - Blue (bottom left) */}
          <div
            className="absolute -bottom-[15%] -left-[10%] w-[40%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.25) 0%, rgba(70, 111, 246, 0.1) 30%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          ></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFF2F0] text-[#FF8D80] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-[#FF8D80]/10">
                <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full"></span>
                Boon Grow
              </div>
              <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-10 max-w-5xl animate-fade-in">
                Turn managers into leaders who can{' '}
                <span className="text-[#FF8D80]">actually lead</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl mb-16">
                A structured, coaching-led development system built around real decisions, real
                conversations, and measurable behavior change.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="flex flex-col items-center sm:items-start gap-3">
                  <Link
                    href="/demo"
                    className="bg-[#FF8D80] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-100 hover:bg-[#ff7a6b] transition-all text-center"
                  >
                    Book a conversation
                  </Link>
                  <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest sm:ml-4">
                    30 minutes. No sales pitch.
                  </p>
                </div>
                <Link
                  href="#grow-timeline"
                  className="border border-gray-100 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all text-center"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[64px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-gray-50 vignette">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
                  width={600}
                  height={750}
                  alt="Observational leadership moment"
                  className="w-full h-full object-cover grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute top-8 left-8 animate-badge">
                  <div className="bg-white/95 backdrop-blur-sm p-5 rounded-3xl shadow-xl flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF8D80] rounded-full"></div>
                    <p className="text-[10px] font-black text-[#2E353D] uppercase tracking-widest">
                      Cohort Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem Framing */}
        <section className="py-32 bg-boon-navy text-white px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Dotted texture overlay - fading from right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.15) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              maskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
            }}
          ></div>

          {/* Soft coral gradient glow */}
          <div
            className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.2) 0%, rgba(255, 141, 128, 0.1) 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          ></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
              Most managers are promoted without support. <br />
              <span className="animate-underline">GROW fixes that.</span>
            </h2>
            <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
              Traditional training is isolated and sporadic. GROW provides continuous support and
              helps navigate the transition where most new managers either level up or flame out.
            </p>
          </div>
        </section>

        {/* 3. The Diagnosis */}
        <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
          <div className="max-w-7xl mx-auto">
            <div className="w-full mb-20 border-l-4 border-[#FF8D80] pl-10 py-2">
              <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                The Diagnosis
              </p>
              <h2 className="text-4xl md:text-[68px] font-black leading-[1] tracking-tighter mb-6">
                Why traditional leadership training fails.
              </h2>
              <p className="text-gray-400 font-medium text-2xl leading-relaxed max-w-3xl">
                Most programs teach ideas. Very few change behavior.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  q: 'Too Abstract',
                  a: "Frameworks don't survive real conversations. GROW is built for implementation.",
                },
                {
                  q: 'Too Episodic',
                  a: "Growth doesn't happen in workshops. It happens through bi-weekly reflection.",
                },
                {
                  q: 'Too Evaluative',
                  a: 'Managers feel watched instead of supported. GROW is a safe space to fail and grow.',
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="bg-white p-12 rounded-[48px] shadow-sm border border-gray-100 transition-all hover:shadow-md"
                >
                  <h4 className="text-2xl font-black mb-6 tracking-tight text-slate-800">
                    {item.q}
                  </h4>
                  <div className="w-8 h-[2px] bg-[#FF8D80] mb-6 opacity-30"></div>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Who GROW Is Built For */}
        <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]/50">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
              Who It&apos;s For
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-16">
              Built for the managers{' '}
              <span className="font-serif italic">no one taught how to lead.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {[
                {
                  label: 'First-time managers',
                  desc: 'Promoted for being great at their old job. Never taught how to lead people.',
                },
                {
                  label: 'Rising leaders',
                  desc: "Have the potential but need structured development to get there \u2014 not just another workshop.",
                },
                {
                  label: 'Managers in transition',
                  desc: "Navigating a new team, a reorg, or a shift in scope where the old playbook doesn\u2019t work.",
                },
              ].map((persona) => (
                <div key={persona.label}>
                  <h4 className="text-lg md:text-xl font-black text-[#2E353D] mb-3">
                    {persona.label}
                  </h4>
                  <p className="text-base text-[#2E353D]/70 leading-relaxed">
                    {persona.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. The Antidote - How GROW builds resilient leaders */}
        <section className="py-48 px-6 md:px-12 lg:px-24 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              overline="The Antidote"
              title="How GROW builds resilient leaders."
              subtitle="A continuous loop of feedback and application that changes leadership behavior over time."
            />

            <GrowSteps />
          </div>
        </section>

        {/* 6. What GROW Actually Looks Like - 3-Phase Timeline */}
        <section id="grow-timeline" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
              What&apos;s Inside
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              What GROW actually looks like.
            </h2>
            <p className="text-lg text-[#2E353D]/60 font-medium mb-16 max-w-2xl">
              A 6-month program with a real arc &mdash; not 12 disconnected sessions.
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical timeline connector */}
              <div className="absolute top-0 bottom-0 left-4 md:left-5 w-px bg-[#466FF6]/20 hidden md:block"></div>

              <div className="space-y-12 md:space-y-16">
                {/* Phase 1: Foundation */}
                <div className="relative">
                  {/* Timeline node */}
                  <div className="absolute left-1.5 md:left-2.5 top-8 w-5 h-5 rounded-full bg-[#466FF6] border-4 border-white shadow-sm hidden md:block z-10"></div>

                  <div className="md:ml-16 bg-[#F0F3F7] rounded-3xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
                      <div>
                        <div className="flex items-baseline gap-4 mb-2">
                          <p className="text-[#466FF6] font-black text-sm tracking-[0.15em] uppercase">
                            Foundation
                          </p>
                          <p className="text-[#2E353D]/50 text-sm font-medium">Months 1-2</p>
                        </div>

                        <div className="mt-6 space-y-3 mb-8">
                          {[
                            'Baseline competency assessment',
                            'Coach matching based on role and context',
                            'Sessions 1\u20134: addressing the most immediate challenges',
                            'First manager alignment session',
                          ].map((item) => (
                            <div key={item} className="flex gap-3 items-start">
                              <span className="w-1.5 h-1.5 bg-[#466FF6] rounded-full mt-2 flex-shrink-0"></span>
                              <p className="text-[15px] font-bold text-[#2E353D]">{item}</p>
                            </div>
                          ))}
                        </div>

                        <p className="text-base text-[#2E353D]/70 leading-relaxed">
                          Your managers complete a baseline assessment across core leadership competencies.
                          They&apos;re matched with a coach who&apos;s done their job before &mdash; not a generalist
                          with a certification. The first sessions tackle what&apos;s most urgent: the feedback
                          conversation that went sideways, the direct report who&apos;s checked out, the delegation
                          problem that keeps coming back.
                        </p>
                      </div>

                      {/* Phase 1 Preview Placeholder */}
                      <div className="hidden lg:flex items-start justify-center pt-4">
                        <div className="w-full max-w-[360px] h-[240px] bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-3 text-gray-300">
                          <svg className="w-10 h-10 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                          </svg>
                          <span className="text-[10px] font-black uppercase tracking-widest">Session progress tracker</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2: Development */}
                <div className="relative">
                  {/* Timeline node */}
                  <div className="absolute left-1.5 md:left-2.5 top-8 w-5 h-5 rounded-full bg-[#466FF6] border-4 border-white shadow-sm hidden md:block z-10"></div>

                  <div className="md:ml-16 bg-[#F0F3F7] rounded-3xl p-8 md:p-12">
                    <div>
                      <div className="flex items-baseline gap-4 mb-2">
                        <p className="text-[#466FF6] font-black text-sm tracking-[0.15em] uppercase">
                          Development
                        </p>
                        <p className="text-[#2E353D]/50 text-sm font-medium">Months 3-4</p>
                      </div>

                      <div className="mt-6 space-y-3 mb-8">
                        {[
                          'Sessions 5\u20138: coaching shifts from reactive to proactive',
                          'Group coaching sessions bring the cohort together',
                          'Peer learning surfaces shared patterns',
                          'Manager alignment check-in',
                        ].map((item) => (
                          <div key={item} className="flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 bg-[#466FF6] rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-[15px] font-bold text-[#2E353D]">{item}</p>
                          </div>
                        ))}
                      </div>

                      <p className="text-base text-[#2E353D]/70 leading-relaxed max-w-3xl">
                        Group coaching brings the cohort together to work through shared challenges. This is
                        where managers discover they&apos;re not the only ones struggling with hard conversations
                        or letting go of individual contributor habits. The 1:1 coaching relationship deepens.
                        Sessions become less about putting out fires and more about building the reflexes that
                        prevent them.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phase 3: Acceleration */}
                <div className="relative">
                  {/* Timeline node */}
                  <div className="absolute left-1.5 md:left-2.5 top-8 w-5 h-5 rounded-full bg-[#466FF6] border-4 border-white shadow-sm hidden md:block z-10"></div>

                  <div className="md:ml-16 bg-[#F0F3F7] rounded-3xl p-8 md:p-12">
                    <div>
                      <div className="flex items-baseline gap-4 mb-2">
                        <p className="text-[#466FF6] font-black text-sm tracking-[0.15em] uppercase">
                          Acceleration
                        </p>
                        <p className="text-[#2E353D]/50 text-sm font-medium">Months 5-6</p>
                      </div>

                      <div className="mt-6 space-y-3 mb-8">
                        {[
                          'Sessions 9\u201312: new behaviors become default',
                          'Post-program competency assessment',
                          'Final manager alignment session',
                          'Cohort-level impact report delivered',
                        ].map((item) => (
                          <div key={item} className="flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 bg-[#466FF6] rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-[15px] font-bold text-[#2E353D]">{item}</p>
                          </div>
                        ))}
                      </div>

                      <p className="text-base text-[#2E353D]/70 leading-relaxed max-w-3xl">
                        Behavioral shifts compound. Managers aren&apos;t just remembering frameworks &mdash;
                        they&apos;re applying them without thinking about it. The post-assessment measures exactly
                        what changed, by how much, at the cohort level. Your HR sponsor gets a clear report on
                        impact. Not self-reported sentiment. Verified behavior change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Leadership Muscles / Competency Cards */}
        <section
          id="leadership-muscles"
          className="py-48 px-6 md:px-12 lg:px-24 bg-white rounded-[80px] mx-4 md:mx-10"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-[#FF8D80] font-black text-[10px] tracking-widest uppercase mb-4">
                Core Competencies
              </p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                The leadership muscles managers{' '}
                <span className="text-[#FF8D80]">need to build</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  t: 'Communication',
                  d: 'Being understood when it matters.',
                  e: 'Moving from talking to being understood across the team.',
                },
                {
                  t: 'Accountability',
                  d: 'Setting expectations and holding the line.',
                  e: 'Creating clarity without defaulting to micro-management.',
                },
                {
                  t: 'Delegation',
                  d: 'Building capability, not dependency.',
                  e: "Moving from 'doing' to enabling others to execute.",
                },
                {
                  t: 'Decision-making',
                  d: 'Acting with incomplete information.',
                  e: 'Navigating ambiguity with judgment and confidence.',
                },
                {
                  t: 'Feedback',
                  d: 'Turning observation into action.',
                  e: 'Constructing growth-oriented conversations that stick.',
                },
                {
                  t: 'Confidence',
                  d: 'Staying grounded under pressure.',
                  e: 'Stable presence during high-stakes organizational moments.',
                },
              ].map((muscle) => (
                <div
                  key={muscle.t}
                  className="bg-white p-12 rounded-[50px] border border-gray-100 hover:border-[#FF8D80]/20 hover:-translate-y-2 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="mb-12">
                    <h4 className="text-2xl font-black mb-4 group-hover:text-[#FF8D80] transition-colors tracking-tight">
                      {muscle.t}
                    </h4>
                    <p className="text-gray-500 font-medium leading-relaxed">{muscle.d}</p>
                    <p className="mt-6 text-xs text-gray-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 italic">
                      {muscle.e}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-slate-100 group-hover:bg-[#FF8D80]/40 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Program at a Glance */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                Program Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
                Program at a Glance
              </h2>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm relative overflow-visible">
              <ProgramCopyButton />
              <div className="p-6 md:p-10">
                <div className="divide-y divide-gray-100">
                  {[
                    { label: 'Duration', value: '6 months' },
                    { label: '1:1 Coaching Sessions', value: '12 sessions, 45 min each (2x/month)' },
                    { label: 'Group Coaching', value: 'Peer cohort sessions woven throughout the program' },
                    { label: 'Manager Alignment', value: "Sessions with your managers\u2019 managers to reinforce growth" },
                    { label: 'Focus Areas', value: '3-5 org-selected competencies (e.g., Feedback, Delegation, Communication)' },
                    { label: 'Measurement', value: 'Pre/post competency assessments + ongoing coach observation' },
                    { label: 'Coach Matching', value: 'Matched by role, context, and leadership challenges' },
                    { label: 'Time to Launch', value: 'Typically 2-3 weeks from kickoff' },
                  ].map((row) => (
                    <div key={row.label} className="flex flex-col sm:flex-row sm:items-center py-4 gap-1 sm:gap-8">
                      <div className="sm:w-[200px] flex-shrink-0 text-[15px] font-bold text-[#2E353D]">
                        {row.label}
                      </div>
                      <div className="text-[15px] text-[#2E353D]/80">
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-[#2E353D]/50 mt-6">
              Every program is configured to your org. This is a typical structure.
            </p>

            <div className="text-center mt-8">
              <Link
                href="/demo"
                className="inline-block bg-[#466FF6] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Measurement */}
        <section className="py-48 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
              <div>
                <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-8">
                  Measurement Integrity
                </p>
                <h2 className="text-5xl md:text-[80px] font-black leading-[0.85] mb-10 tracking-tighter text-slate-900">
                  Behavior change, <span className="text-[#FF8D80]">verified.</span>
                </h2>
                <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                  <p>Measurement only matters if it reflects how managers actually show up.</p>
                  <p>
                    Boon GROW measures change in specific, role-relevant leadership behaviors across
                    the lifecycle of the program.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-12 mt-16 pt-16 border-t border-slate-100">
                  <div>
                    <h4 className="text-sm font-black text-[#FF8D80] uppercase tracking-widest mb-6">
                      What we measure
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-sm font-bold text-slate-600">
                        <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                        Core leadership competencies
                      </li>
                      <li className="flex gap-3 text-sm font-bold text-slate-600">
                        <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                        Change over time at cohort level
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#FF8D80] uppercase tracking-widest mb-6">
                      Verification
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-sm font-bold text-slate-600">
                        <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                        Pre/Post assessments
                      </li>
                      <li className="flex gap-3 text-sm font-bold text-slate-600">
                        <span className="w-1.5 h-1.5 bg-[#FF8D80] rounded-full mt-2 flex-shrink-0"></span>
                        Ongoing coach observation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <GrowMeasurement />
            </div>
          </div>
        </section>

        {/* 10. Consolidation */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-50/50 border-2 border-dashed border-emerald-200 rounded-[48px] p-12 md:p-16 text-center">
              <p className="text-emerald-600 font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                Consolidation
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#2E353D] mb-8">
                GROW can do the work of 2-3 programs
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                GROW replaces the patchwork of workshops and peer circles. It consolidates new
                manager onboarding, ongoing development, and capability measurement into one
                continuous system.
              </p>
            </div>
          </div>
        </section>

        {/* 11. System Integration */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                Integration
              </p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#2E353D]">
                GROW is one part of a larger system.
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto mb-12">
              <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-200 hidden lg:block -translate-y-1/2 z-0"></div>

              <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    label: 'Boon SCALE',
                    desc: 'Always-on coaching for the entire organization.',
                    active: false,
                    arrow: '\u2190',
                  },
                  {
                    label: 'Boon GROW',
                    desc: 'Structured, measurable leadership development for managers.',
                    active: true,
                  },
                  {
                    label: 'Boon EXEC',
                    desc: 'Executive coaching for high-stakes leadership moments.',
                    active: false,
                    arrow: '\u2192',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`p-10 rounded-[40px] border transition-all flex flex-col justify-center relative min-h-[220px] ${
                      item.active
                        ? 'bg-[#FF8D80] text-white border-[#FF8D80] shadow-[0_40px_80px_-15px_rgba(255,141,128,0.3)] z-10 scale-105'
                        : 'bg-white text-[#2E353D] border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    {item.arrow && (
                      <div
                        className={`absolute top-1/2 ${
                          item.arrow === '\u2190' ? '-left-4' : '-right-4'
                        } hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-100 text-slate-300 text-sm font-black -translate-y-1/2 shadow-sm`}
                      >
                        {item.arrow}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <h4
                        className={`text-lg font-black mb-4 uppercase tracking-tight ${
                          item.active ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.label}
                      </h4>
                      <p
                        className={`text-sm font-medium leading-relaxed ${
                          item.active ? 'text-white/90' : 'text-slate-500'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white border border-slate-100 p-10 rounded-[48px] flex flex-col lg:flex-row items-center justify-between gap-10 hover:border-[#FDB022]/40 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDB022]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col relative z-10">
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-[#FDB022] transition-colors">
                    Boon TOGETHER
                  </h4>
                  <p className="text-sm font-medium text-slate-500 max-w-2xl mt-3 leading-relaxed">
                    Cohort and group experiences that reinforce GROW by turning individual coaching
                    into shared leadership behavior across your teams.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black text-[#FDB022] uppercase tracking-[0.3em] bg-[#FFF9E6] px-10 py-5 rounded-full border border-[#FDB022]/10 flex-shrink-0 relative z-10 shadow-sm">
                  <span className="w-2 h-2 bg-[#FDB022] rounded-full animate-pulse"></span>
                  Reinforcement Layer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Final CTA */}
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
              Build managers who <br />
              can <span className="text-boon-coral font-serif italic">lead people</span>.
            </h2>
            <p className="text-xl text-white/70 font-body font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
              A short conversation to see if GROW fits your organization.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-boon-coral text-white px-12 py-6 rounded-full font-sans font-bold text-2xl shadow-2xl shadow-boon-coral/30 hover:scale-105 transition-all"
            >
              Book a Strategy Call
            </Link>
            <div className="mt-12 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40">
              Structured Development • ICF Certified • Measurable Outcomes
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
