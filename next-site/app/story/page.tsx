import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateServiceJsonLd } from '@/lib/seo';
import { FounderVideoPlayer } from '@/components/story/VideoPlayer';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Story',
  description:
    'Personal and professional growth finally belong together. Learn about Boon\'s journey from high-pressure finance to building scalable, human coaching across entire organizations.',
  path: '/story',
});

// Section Label Component
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#F4F7FF] text-[#466FF6] text-[10px] tracking-[0.2em] font-black px-4 py-2 rounded-full mb-8 uppercase border border-blue-100">
      {children}
    </div>
  );
}

const philosophyPillars = [
  {
    title: 'Performance requires awareness',
    description:
      "Without self-reflection, performance eventually collapses under its own weight. That's why every Boon engagement starts with 1:1 coaching, dedicated space to build the clarity that sustains high performance over time.",
  },
  {
    title: 'Organizational resilience is built or broken in the middle',
    description:
      "Strategy doesn't scale, behavior does. Boon Grow brings structured, cohort-based development to the managers and ICs who shape your culture every day.",
  },
  {
    title: 'Generic programs create insight. Personalized coaching creates behavior change.',
    description:
      "Workshops don't change how people work. Boon matches each participant with a coach who understands their context, and tracks progress over time, so development actually sticks.",
  },
];

const howWeWork = [
  {
    title: 'Remote-first culture',
    description: 'We prioritize work-life integration and trust our team to manage their own energy.',
  },
  {
    title: 'Emphasis on personal growth',
    description: 'We practice what we preach. Every employee has access to our coaching platform.',
  },
  {
    title: 'Supported, not extracted',
    description: "Our business is built on human capability. We invest in our coaches and our team's longevity.",
  },
  {
    title: 'Autonomy with accountability',
    description: 'We value owners who are comfortable with ambiguity and driven by outcomes.',
  },
];

const leadershipTeam = [
  { name: 'Alex Simmons', role: 'Co-Founder & CEO', initials: 'AS', desc: 'Systems thinker' },
  { name: 'Chris Henrichs', role: 'Co-Founder', initials: 'CH', desc: 'Operator-coach' },
  { name: 'Robin Axelrod', role: 'Clinical Advisor', initials: 'RA', desc: 'Clinical rigor' },
  { name: 'Jessica Taylor', role: 'Head of Coaching', initials: 'JT', desc: 'Coach network architect' },
];

export default function StoryPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Our Story - Boon Leadership Development',
    description:
      'From high finance to human development. Learn how Boon delivers scalable, human coaching across entire organizations.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/story`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-white text-boon-charcoal overflow-hidden">
        {/* 1. Hero Section */}
        <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-sans text-5xl md:text-[80px] font-bold leading-[0.9] tracking-tight mb-8 max-w-4xl">
              Coaching that improves performance by prioritizing{' '}
              <span className="text-boon-blue font-serif italic">people</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl mb-12">
              We believe everyone can benefit from professional coaching. So we built the infrastructure to enable that.
              A single system, calibrated to your goals.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/demo"
                className="inline-block bg-[#466FF6] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-boon-charcoal font-bold text-lg underline underline-offset-4 hover:text-boon-blue transition-colors"
              >
                See How It Works <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Founder Story Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <FounderVideoPlayer />
            <div>
              <SectionLabel>Why Boon Exists</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
                A transition from high finance <br /> to human development.
              </h2>
              <div className="space-y-6 text-gray-500 text-lg font-medium leading-relaxed">
                <p className="text-[#2E353D] font-bold">
                  Systems that optimize for output and ignore the people doing the work always fail. You can learn this the easy way or the hard way.
                </p>
                <p>
                  Alex Simmons spent the early part of his career in the high-stakes world of finance. It was a system
                  optimized for output, not durability. Performance was measured relentlessly. Leadership capability
                  wasn&apos;t measured at all.
                </p>
                <p>
                  Like many in high-growth environments, the weight of the work eventually led to burnout. It was a
                  turning point that felt both personal and structural. During this period, Alex found a coach, a
                  professional partner who helped him navigate the transition from reaction to intention.
                </p>
                <p>
                  That experience revealed a structural failure in how organizations develop leaders. Coaching worked,
                  but only for the few. Everyone else was expected to figure it out on their own, under pressure.
                </p>
                <p>
                  Boon was built to bridge that gap. But bridging it meant building more than a coaching
                  network. It meant building a system, with the structure, visibility, and accountability that
                  real organizations need to develop leaders at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Built Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto border-2 border-dashed border-green-300 rounded-3xl bg-[#F6FBF6] p-12 md:p-20">
            <div className="text-center">
              <SectionLabel>What We Built</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
                A leadership system, not a coaching vendor.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-6">
                Boon is a unified leadership development system, not a coaching marketplace, a workshop catalog, or a wellness perk.
              </p>
              <p className="text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
                It includes 1:1 coaching, cohort-based programs, executive advising, and team workshops, all connected through a single platform. HR and L&D leaders get real visibility into participation, engagement, and outcomes. Employees get consistent, high-quality development that meets them where they are.
              </p>
              <p className="text-lg font-black mb-12">
                One system. Every level. Full visibility.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-lg font-black mb-3">Replaces fragmented programs</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    No more juggling vendors, workshops, and ad-hoc initiatives. Boon consolidates leadership development into one operating layer.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-lg font-black mb-3">Scales with your org</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    From first-time managers to senior executives, Boon flexes to meet your organization wherever it is, and wherever it&apos;s going.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-lg font-black mb-3">Visible to decision-makers</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Dashboards and reporting give you the insight you need, without compromising coach-client confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Philosophy Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel>The Philosophy</SectionLabel>
            <h3 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter">Growth requires grounding.</h3>
            <div className="grid md:grid-cols-3 gap-12 text-left">
              {philosophyPillars.map((pillar, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-black mb-4">{pillar.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Vision Section */}
        <section className="py-48 px-6 md:px-12 lg:px-24 text-center bg-white relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-[84px] font-black leading-[0.95] tracking-tighter">
              &ldquo;A more resilient world built by people who can think clearly, lead others, and{' '}
              <span className="text-[#466FF6]">hold under pressure</span>.&rdquo;
            </h2>
          </div>
          <div className="mt-20 w-px h-32 bg-gray-100 mx-auto"></div>
        </section>

        {/* 5. Impact Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <SectionLabel>Impact</SectionLabel>
            <div className="grid md:grid-cols-3 gap-12 w-full mt-10 text-center">
              <div className="p-12 bg-white rounded-[50px] shadow-sm border border-gray-100">
                <div className="text-6xl font-black text-[#466FF6] mb-4">100+</div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                  Organizations, from Series A to Fortune 500
                </p>
              </div>
              <div className="p-12 bg-white rounded-[50px] shadow-sm border border-gray-100">
                <div className="text-6xl font-black text-[#466FF6] mb-4">Thousands</div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                  Leaders developed across every level
                </p>
              </div>
              <div className="p-12 bg-white rounded-[50px] shadow-sm border border-gray-100">
                <div className="text-6xl font-black mb-4">
                  <span className="text-[#466FF6]">Real</span><br />
                  <span className="text-[#466FF6]">visibility</span>
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                  Into engagement, progress, and outcomes
                </p>
              </div>
            </div>
            <p className="mt-16 text-gray-400 max-w-3xl text-center font-medium leading-relaxed">
              We focus on long-term credibility over growth hype. Every Boon engagement is tracked. Every outcome is visible to the people who need to see it, without compromising the trust between coach and client. That&apos;s how we prove impact, not just promise it.
            </p>
          </div>
        </section>

        {/* 6. How We Work Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                How we work reflects how we coach.
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12">
                We run Boon the way we build it, because how we operate is proof of what we believe.
              </p>
              <ul className="space-y-8">
                {howWeWork.map((item) => (
                  <li key={item.title} className="flex gap-6 group">
                    <div className="mt-1 w-6 h-6 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:border-[#466FF6] transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#466FF6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/5] bg-gray-50 rounded-[80px] overflow-hidden flex items-center justify-center p-20">
              <div className="w-full h-full bg-white rounded-[60px] shadow-inner border border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 text-gray-300">
                <svg
                  className="w-24 h-24 opacity-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-[10px] font-black uppercase tracking-widest">Illustration: Remote Synergy</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonial Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#E6EDFF]/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-12 opacity-20">&ldquo;</div>
            <p className="text-2xl md:text-4xl font-black leading-tight mb-12 tracking-tight">
              &ldquo;The most authentic professional environment I&apos;ve ever been part of. We don&apos;t hide from
              the hard parts of scaling—we coach through them.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-[#466FF6] rounded-full mb-2"></div>
              <p className="text-sm font-black uppercase tracking-widest text-[#2E353D]">Sarah Henderson</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Operations Lead</p>
            </div>
          </div>
        </section>

        {/* 8. Leadership Team Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <SectionLabel>Leadership</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">The team behind the mission.</h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Operators, coaches, and builders, united by the belief that leadership development should be as rigorous as the work it supports.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {leadershipTeam.map((leader) => (
                <div key={leader.name} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-50 rounded-full mb-8 flex items-center justify-center text-gray-200 font-black text-4xl border border-gray-100 grayscale hover:grayscale-0 transition-all cursor-pointer">
                    {leader.initials}
                  </div>
                  <h4 className="text-xl font-black mb-1">{leader.name}</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{leader.role}</p>
                  <p className="text-[#466FF6] text-[10px] font-black uppercase tracking-widest italic">{leader.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Closing CTA Section */}
        <section className="py-48 px-6 text-center border-t border-gray-50 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-boon-light-blue/10 to-boon-soft-coral/15"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-sans text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Growth isn&apos;t a perk,{' '}
              <span className="text-boon-blue font-serif italic">it&apos;s our passion.</span>
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
              If you&apos;re building something that matters, your leaders need more than a workshop and a wish. Let&apos;s talk about what a real system looks like.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/demo"
                className="inline-block bg-[#466FF6] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-boon-charcoal font-bold text-lg underline underline-offset-4 hover:text-boon-blue transition-colors"
              >
                Explore Our Programs <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
