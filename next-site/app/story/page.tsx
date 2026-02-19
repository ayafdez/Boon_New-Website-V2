import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata, generateServiceJsonLd, siteUrl } from '@/lib/seo';
import { FounderVideoPlayer } from '@/components/story/VideoPlayer';
import { Globe, TrendingUp, Heart, Target, Users, Sparkles, Eye } from 'lucide-react';

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


const howWeWork = [
  {
    title: 'Remote-first',
    description: 'Built for distributed teams from day one. We prioritize work-life integration and trust our team to manage their own energy.',
    icon: Globe,
    color: '#466FF6',
  },
  {
    title: 'Personal growth',
    description: 'We practice what we preach. Every team member has access to coaching and development resources.',
    icon: TrendingUp,
    color: '#10B981',
  },
  {
    title: 'Humans over metrics',
    description: "Our business is built on human capability. We invest in our coaches and our team's longevity.",
    icon: Heart,
    color: '#FF6D6A',
  },
  {
    title: 'Autonomy with accountability',
    description: 'We value owners who are comfortable with ambiguity and driven by outcomes.',
    icon: Target,
    color: '#466FF6',
  },
];

const leadershipTeam = [
  { name: 'Alex Simmons', role: 'Co-Founder & CEO', initials: 'AS', desc: 'Systems thinker', image: 'https://storage.googleapis.com/boon-public-assets/AS%20LI%20Pic.jpeg' },
  { name: 'Chris Henrichs', role: 'Co-Founder', initials: 'CH', desc: 'Operator-coach', image: 'https://storage.googleapis.com/boon-public-assets/chris.jpeg' },
  { name: 'Caitlin Anderson', role: 'Sr. Director of Account Management', initials: 'CA', desc: 'Client partner', image: 'https://storage.googleapis.com/boon-public-assets/caitlin.jpeg' },
  { name: 'Alex Newman', role: 'Sr. Director of Partnerships', initials: 'AN', desc: 'Growth architect', image: 'https://storage.googleapis.com/boon-public-assets/newman.jpeg' },
  { name: 'Jamie Fuentes', role: 'Sr. Director of Coach Experience', initials: 'JF', desc: 'Coach advocate', image: 'https://storage.googleapis.com/boon-public-assets/jamie.jpeg' },
  { name: 'Zach Ragland', role: 'Chief of Staff', initials: 'ZR', desc: 'Operational backbone', image: 'https://storage.googleapis.com/boon-public-assets/zach.jpeg' },
];

export default function StoryPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Our Story - Boon Leadership Development',
    description:
      'From high finance to human development. Learn how Boon delivers scalable, human coaching across entire organizations.',
    url: `${siteUrl}/story`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-white text-boon-charcoal overflow-hidden">
        {/* 1. Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-sans text-3xl md:text-5xl lg:text-[80px] font-bold leading-tight lg:leading-[0.9] tracking-tight mb-8 max-w-4xl">
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
                href="/solutions"
                className="inline-flex items-center gap-2 text-boon-charcoal font-bold text-lg underline underline-offset-4 hover:text-boon-blue transition-colors"
              >
                See How It Works <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Founder Story Section */}
        <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <FounderVideoPlayer />
            <div>
              <SectionLabel>Why Boon Exists</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
                A transition from high finance <br /> to{' '}
                <span className="text-[#FF6D6A] font-serif italic">human development</span>.
              </h2>
              <div className="space-y-6 text-gray-500 text-lg font-medium leading-relaxed">
                <p className="text-[#2E353D] font-bold">
                  Systems that optimize for output and ignore the people doing the work always fail.
                </p>
                <p>
                  Alex Simmons spent the early part of his career in finance. Performance was measured relentlessly. Leadership capability wasn&apos;t measured at all. When burnout hit, a coach helped him shift from reaction to intention, and revealed a structural failure in how organizations develop leaders.
                </p>
                <p>
                  Coaching worked, but only for the few. Boon was built to change that: not as a coaching marketplace, but as a system with the structure, visibility, and accountability that real organizations need to develop leaders at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Built Section */}
        <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-12 lg:p-20">
            <div className="text-center">
              <SectionLabel>What We Built</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
                A leadership system, not a{' '}
                <span className="text-[#FF6D6A] font-serif italic">coaching vendor</span>.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
                1:1 coaching, cohort programs, executive advising, and team workshops, all connected through a single platform. HR and L&D leaders get real visibility into participation, engagement, and outcomes. Employees get consistent, high-quality development that meets them where they are.
              </p>
              <p className="text-lg font-black mb-12">
                One system. Every level. Full visibility.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-black mb-3">Replaces fragmented programs</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    One operating layer instead of four disconnected vendors.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-black mb-3">Scales with your org</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    From first-time managers to senior executives, wherever your org is and wherever it&apos;s going.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-black mb-3">Visible to decision-makers</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Dashboards and reporting that show what&apos;s working, without compromising coach-client confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 4. Vision Section */}
        <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 text-center bg-boon-navy relative overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}></div>
          {/* Blue blob top-right */}
          <div className="absolute top-[10%] right-[5%] w-[40%] h-[60%] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.3) 0%, rgba(70, 111, 246, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}></div>
          {/* Coral blob bottom-left */}
          <div className="absolute bottom-[10%] left-[10%] w-[45%] h-[55%] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.25) 0%, rgba(255, 141, 128, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-[84px] font-black leading-tight lg:leading-[0.95] tracking-tighter text-white">
              &ldquo;A more resilient world built by people who can think clearly, lead others, and{' '}
              <span className="text-[#FF6D6A] font-serif italic">hold under pressure</span>.&rdquo;
            </h2>
          </div>
        </section>

        {/* 5. Impact Section */}
        <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <SectionLabel>Impact</SectionLabel>
            <div className="grid md:grid-cols-3 gap-8 w-full mt-10 text-center">
              <div className="p-10 bg-white rounded-2xl border-2 border-[#466FF6] hover:shadow-lg transition-shadow" style={{ backgroundColor: 'rgba(70, 111, 246, 0.03)' }}>
                <div className="text-5xl font-black text-[#466FF6] mb-4">100+</div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                  Organizations, from Series A to Fortune 500
                </p>
              </div>
              <div className="p-10 bg-white rounded-2xl border-2 border-emerald-500 hover:shadow-lg transition-shadow" style={{ backgroundColor: 'rgba(16, 185, 129, 0.03)' }}>
                <div className="text-5xl font-black text-emerald-500 mb-4">Thousands</div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                  Leaders developed across every level
                </p>
              </div>
              <div className="p-10 bg-white rounded-2xl border-2 border-[#FF6D6A] hover:shadow-lg transition-shadow" style={{ backgroundColor: 'rgba(255, 109, 106, 0.03)' }}>
                <div className="text-5xl font-black text-[#FF6D6A] mb-4">Real visibility</div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                  Into engagement, progress, and outcomes
                </p>
              </div>
            </div>
            <p className="mt-16 text-gray-400 max-w-3xl text-center font-medium leading-relaxed">
              We focus on long-term credibility over growth hype. Every Boon engagement is tracked. Every outcome is visible to the people who need to see it, without compromising the trust between coach and client.
            </p>
          </div>
        </section>

        {/* 6. How We Work Section */}
        <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>Our Values</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                How we work reflects{' '}
                <span className="text-[#FF6D6A] font-serif italic">how we coach</span>
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                We run Boon the way we build it, because how we operate is proof of what we believe.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howWeWork.map((item) => (
                <div key={item.title} className="text-center group">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 8. Leadership Team Section */}
        <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <SectionLabel>Leadership</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                The team behind the{' '}
                <span className="text-[#FF6D6A] font-serif italic">mission</span>.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Operators, coaches, and builders, united by the belief that leadership development should be as rigorous as the work it supports.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {leadershipTeam.map((leader) => (
                <div key={leader.name} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-8 overflow-hidden bg-gray-50 flex items-center justify-center text-gray-200 font-black text-4xl border border-gray-100 md:grayscale md:hover:grayscale-0 transition-all cursor-pointer">
                    {'image' in leader && leader.image ? (
                      <Image src={leader.image} alt={leader.name} width={192} height={192} className="w-full h-full object-cover" />
                    ) : (
                      leader.initials
                    )}
                  </div>
                  <h3 className="text-xl font-black mb-1">{leader.name}</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Closing CTA Section */}
        <section className="py-24 md:py-48 px-6 text-center bg-boon-navy relative overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}></div>
          {/* Blue blob top-right */}
          <div className="absolute top-[10%] right-[5%] w-[40%] h-[60%] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.3) 0%, rgba(70, 111, 246, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}></div>
          {/* Coral blob bottom-left */}
          <div className="absolute bottom-[10%] left-[10%] w-[45%] h-[55%] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.25) 0%, rgba(255, 141, 128, 0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-sans text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">
              Growth isn&apos;t a perk,{' '}
              <span className="text-boon-blue font-serif italic">it&apos;s our passion.</span>
            </h2>
            <p className="text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
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
                className="inline-flex items-center gap-2 text-white font-bold text-lg underline underline-offset-4 hover:text-blue-300 transition-colors"
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
