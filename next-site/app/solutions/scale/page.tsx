import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateServiceJsonLd } from '@/lib/seo';
import { ScaleFAQ } from '@/components/solutions/ScaleFAQ';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon SCALE - 1:1 Coaching for Every Employee',
  description:
    'A confidential, usage-based coaching benefit designed for employees at every level, not just the top 5 percent. Democratized 1:1 coaching at scale.',
  path: '/solutions/scale',
});

const LOGOS = [
  'https://storage.googleapis.com/boon-public-assets/72andsunny.png',
  'https://storage.googleapis.com/boon-public-assets/doner.png',
  'https://storage.googleapis.com/boon-public-assets/censys.png',
  'https://storage.googleapis.com/boon-public-assets/consensys.png',
  'https://storage.googleapis.com/boon-public-assets/circle.png',
  'https://storage.googleapis.com/boon-public-assets/makeawish.png',
  'https://storage.googleapis.com/boon-public-assets/m3.png',
  'https://storage.googleapis.com/boon-public-assets/mastery.jpg',
  'https://storage.googleapis.com/boon-public-assets/heartland.png',
  'https://storage.googleapis.com/boon-public-assets/polen.png',
  'https://storage.googleapis.com/boon-public-assets/MAL.jpg',
  'https://storage.googleapis.com/boon-public-assets/usta.png',
  'https://storage.googleapis.com/boon-public-assets/nuvei.png',
  'https://storage.googleapis.com/boon-public-assets/vita.png',
  'https://storage.googleapis.com/boon-public-assets/mack.jpg',
];

function IconWrapper({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#2E353D] ${className}`}>
      {children}
    </div>
  );
}

function CheckIcon({ className = 'text-blue-600' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.848 4.474 10.741 10.12 11.354a11.99 11.99 0 0010.12-11.354c0-1.308-.21-2.568-.598-3.748A11.959 11.959 0 0113.5 2.714z"
      />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 01-.75-.75v-4.25m16.5 0a3 3 0 00-3-3H7.125a3 3 0 00-3 3m16.5 0V9A2.25 2.25 0 0018 6.75H6A2.25 2.25 0 003.75 9v5.15"
      />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5" />
    </svg>
  );
}

export default function ScalePage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon SCALE',
    description:
      'A confidential, usage-based coaching benefit designed for employees at every level. Democratized 1:1 coaching at scale.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/solutions/scale`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <main className="bg-white overflow-hidden">
        {/* 1. Hero Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
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

          <Image
            src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(1).png"
            width={800}
            height={800}
            className="absolute -top-24 -right-24 w-1/2 opacity-10 pointer-events-none select-none z-0"
            alt=""
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E6EDFF] text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase">
                <span className="w-1.5 h-1.5 bg-[#466FF6] rounded-full"></span>
                Introducing Boon Scale
              </div>
              <h1 className="text-6xl md:text-[84px] font-black text-[#2E353D] leading-[0.9] tracking-tighter mb-8">
                1:1 coaching for every employee.
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-4 max-w-xl">
                A confidential, usage-based coaching benefit designed for employees at every level, not just the top 5
                percent.
              </p>
              <p className="text-lg text-gray-400 font-medium italic leading-relaxed mb-12 max-w-xl">
                Because your people shouldn&apos;t have to wait for a crisis, or a promotion, to get support in their roles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#how-it-works"
                  className="bg-[#466FF6] text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  See How Boon SCALE Works <span className="text-xl">→</span>
                </Link>
                <Link
                  href="#pricing"
                  className="border border-gray-100 text-[#2E353D] px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all text-center"
                >
                  View Pricing & Use Cases
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[35px] overflow-hidden shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
                  width={600}
                  height={600}
                  alt="Human-centric coaching interaction"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute top-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-5 rounded-[35px] shadow-2xl flex items-start gap-4 max-w-[320px]">
                    <div className="w-10 h-10 bg-[#E6F8F0] rounded-full flex items-center justify-center flex-shrink-0 text-[#4CD995]">
                      <CheckIcon className="text-[#4CD995]" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#2E353D]">Session Completed</p>
                      <p className="text-xs text-gray-400 italic font-medium">
                        &quot;Feeling much clearer on my goals.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Tension (Dark Section) */}
        <section className="bg-boon-navy py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
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

          {/* Soft coral gradient glow from bottom-left */}
          <div
            className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.2) 0%, rgba(255, 141, 128, 0.1) 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          ></div>

          <Image
            src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(5).png"
            width={800}
            height={800}
            className="absolute -top-32 -left-32 w-1/2 opacity-[0.12] pointer-events-none select-none z-0 rotate-45"
            alt=""
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-20 items-center relative z-10">
            <div>
              <p className="text-[#FF8D80] font-black text-[10px] tracking-widest uppercase mb-6">Why Other Coaching Solutions Fail</p>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-10 tracking-tighter">
                HR Leaders are being asked to do the impossible.
              </h2>
              <div className="space-y-6 text-white/60 text-lg font-medium leading-relaxed max-w-lg">
                <p>
                  Professional development is typically reserved for the top 5 percent, leaving the remaining workforce
                  to navigate growth on their own.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: 'TM',
                  title: 'Talent Mismatch',
                  desc: 'Coaching options are either too clinical or too generic to stick.',
                },
                {
                  label: 'CP',
                  title: 'Cost-Prohibitive',
                  desc: 'Traditional coaching costs hundreds per hour per person.',
                },
                {
                  label: 'LE',
                  title: 'Low Engagement',
                  desc: 'EAPs routinely see engagement below 5 percent.',
                },
                {
                  label: 'OH',
                  title: 'Operationally Heavy',
                  desc: 'Internal programs take months to design and manage.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 p-10 rounded-[35px] hover:bg-white/10 transition-all group"
                >
                  <div className="mb-8 text-[#FF8D80]">
                    <div className="w-10 h-10 border-2 border-current rounded-xl flex items-center justify-center font-black text-xs">
                      {item.label}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Democratizing Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          <Image
            src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(3).png"
            width={800}
            height={800}
            className="absolute -bottom-32 -left-32 w-1/2 opacity-10 pointer-events-none select-none z-0"
            alt=""
            aria-hidden="true"
          />
          <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter leading-tight mb-4">
              Boon delivers democratized coaching at scale.
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              A single coaching system that meets every employee where they are.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: 'Available to everyone',
                icon: <UserIcon />,
                desc: 'Employees choose when and why to use coaching, keeping sessions relevant.',
              },
              {
                title: 'Strictly Confidential',
                icon: <ShieldIcon />,
                desc: "Managers never see session content. HR receives aggregate insights and themes (like 'communication' and 'time management'), never individual details.",
              },
              {
                title: 'Usage-Based',
                icon: <ZapIcon />,
                desc: 'Only pay for completed sessions. Stop wasting spend on unused licenses.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <IconWrapper className="mb-10">{card.icon}</IconWrapper>
                <h3 className="text-3xl font-black mb-6">{card.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Process Section */}
        <section id="how-it-works" className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1.5fr] gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-[#2E353D] leading-tight mb-4">
                A seamless experience for HR teams and employees.
              </h2>
              <p className="text-xl text-gray-500 font-medium mb-16">
                We handle the complexity so you can focus on your people.
              </p>

              <div className="space-y-12">
                {[
                  {
                    n: '01',
                    t: 'Enroll & Launch',
                    d: 'Add employees via HRIS sync or CSV. Most organizations are live within 5 business days.',
                  },
                  {
                    n: '02',
                    t: 'Matching & 1:1 Delivery',
                    d: 'We match based on coaching specialty, industry background, and availability. Employees book directly with no coordination required from HR.',
                  },
                  {
                    n: '03',
                    t: 'Insights & Impact',
                    d: 'Your dashboard shows adoption rates, engagement trends, and aggregated coaching themes. Export-ready for leadership reviews.',
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {step.n}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2">{step.t}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed max-w-md">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[48px] overflow-hidden bg-white shadow-2xl">
                <Image
                  src="https://storage.googleapis.com/boon-public-assets/boon_dash_2.png"
                  width={800}
                  height={600}
                  alt="Boon Dashboard Experience"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-gray-500 italic font-medium mt-6 text-sm">
                Track adoption rates, engagement trends, and coaching themes across your organization in real time.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Whole Person Support */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter leading-tight mb-8">
              One resource for the whole person.
            </h2>
            <p className="text-xl text-gray-500 font-medium">
              Coaching that supports people as humans, not just roles.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-16 px-6">
            <p className="text-lg font-bold text-[#466FF6] leading-relaxed italic">
              Employees don&apos;t need to choose between personal and professional growth. Neither does your
              organization.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-[#F4F7FF] p-16 rounded-[60px] border border-blue-50/50">
              <IconWrapper className="mb-10 bg-white">
                <BriefcaseIcon />
              </IconWrapper>
              <h3 className="text-3xl font-black mb-12">Professional Growth</h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {[
                  'Managing up and across',
                  'Career pathing',
                  'Time management',
                  'Leadership confidence',
                  'Conflict resolution',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#2E353D]">
                    <CheckIcon /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#FFF8F6] p-16 rounded-[60px] border border-orange-50/50">
              <IconWrapper className="mb-10 bg-white text-orange-600">
                <ActivityIcon />
              </IconWrapper>
              <h3 className="text-3xl font-black mb-12">Personal Wellbeing</h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {[
                  'Stress management',
                  'Work-life boundaries',
                  'Interpersonal skills',
                  'Sustaining energy over time',
                  'Resilience training',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#2E353D]">
                    <CheckIcon /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
            Employees don&apos;t need to &quot;qualify&quot; for sessions. If they have a goal or a challenge, they have
            a coach.
          </div>
        </section>

        {/* 6. Strategic Tool (Blue ROI Section) */}
        <section className="bg-blue-600 py-32 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
          <Image
            src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png"
            width={800}
            height={800}
            className="absolute -bottom-32 -right-32 w-1/2 opacity-[0.12] pointer-events-none select-none z-0"
            alt=""
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-24 items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-y-20 gap-x-16 border-t border-white/20 pt-20">
              {[
                {
                  t: 'High Engagement',
                  d: 'Utilization rates are consistently higher than traditional EAPs and benefits. Boon sees 30-40% monthly utilization vs. 3-5% for typical EAPs.',
                },
                {
                  t: 'Confidential Data',
                  d: "Aggregate trend reporting reveals what's driving engagement and retention, safely.",
                },
                { t: 'Zero Admin', d: 'We manage matching, scheduling, and billing end to end. Your team spends less than 2 hours/month on Boon administration.' },
                {
                  t: 'Instant Scale',
                  d: 'Supports hundreds or thousands of employees without adding headcount. One HR generalist can support 2,000 employees on Boon.',
                },
              ].map((item) => (
                <div key={item.t}>
                  <h4 className="text-2xl font-black mb-6">{item.t}</h4>
                  <p className="text-white/60 font-medium leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[#4CD995] font-black text-[10px] tracking-widest uppercase mb-6">The Boon Difference</p>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-10">
                A strategic lever for retention and engagement.
              </h2>
              <p className="text-xl text-white/70 font-medium mb-12 leading-relaxed">
                Boon SCALE is not a perk. It is an investment in your people&apos;s ability to navigate complexity,
                change, and growth.
              </p>
              <Link
                href="/demo"
                className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-2xl"
              >
                Download the HR Impact Report
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Modern Pricing */}
        <section id="pricing" className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-blue-600 font-black text-[10px] tracking-widest uppercase mb-6">Modern Pricing</p>
            <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter leading-tight mb-8">
              Designed to fit real budgets.
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Usage-based pricing that works for people leaders and finance teams.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[35px] shadow-sm relative overflow-hidden">
            <div className="space-y-12 mb-16 relative z-10">
              {[
                { t: 'Usage-Based Model', d: 'Pay only for completed sessions. No unused licenses.' },
                { t: 'Predictable Monthly Billing', d: 'Fixed session pricing keeps budgets predictable as you scale.' },
                { t: 'No Long-Term Lock-in', d: 'Flexible agreements aligned to growth and seasonality.' },
              ].map((item) => (
                <div key={item.t} className="flex gap-8">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6F8F0] flex items-center justify-center text-[#4CD995]">
                    <CheckIcon className="text-[#4CD995]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-2">{item.t}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-gray-50 gap-8 relative z-10">
              <div className="text-left">
                <p className="text-3xl font-black text-[#2E353D]">No upfront fees.</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                  Launch in under 1 week
                </p>
              </div>
              <Link
                href="/demo"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Trusted By - Animated Scroller */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-12 text-center">
                Trusted by people-first organizations
              </p>

              <div className="relative overflow-hidden group py-4">
                <div className="flex whitespace-nowrap">
                  <div className="flex items-center gap-20 animate-scroll pr-20">
                    {[...LOGOS, ...LOGOS].map((logo, idx) => (
                      <Image
                        key={idx}
                        src={logo}
                        width={80}
                        height={44}
                        alt="Partner Logo"
                        className="h-10 md:h-11 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-500 flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
                {/* Fade masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#F4F7FF] p-16 rounded-[60px]">
                <p className="text-xl font-bold text-[#2E353D] leading-relaxed mb-12 italic">
                  &quot;Boon SCALE has fundamentally changed how we support our mid-level managers. Utilization rates
                  are 6x higher than our previous EAP, and they finally have a safe place to grow.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                  <div>
                    <p className="text-sm font-black">Sarah Jenkins</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      VP of People, Global Logistics Co.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-16 rounded-[60px]">
                <p className="text-xl font-bold text-[#2E353D] leading-relaxed mb-12 italic">
                  &quot;The ROI was obvious within the first quarter. We saw engagement up 24% among managers and
                  coaching is now our #1 highest-rated benefit.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF8D80] rounded-full"></div>
                  <div>
                    <p className="text-sm font-black">Michael Chen</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Director of L&D, Fintech Startup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <ScaleFAQ />

        {/* 10. Final CTA */}
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

          <Image
            src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png"
            width={800}
            height={800}
            className="absolute -bottom-44 -right-44 w-1/2 opacity-[0.12] pointer-events-none select-none z-0"
            alt=""
            aria-hidden="true"
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-sans text-5xl md:text-[84px] font-bold tracking-tight leading-[0.85] mb-12">
              Support every employee without blowing up your budget.
            </h2>
            <p className="text-xl text-white/70 font-body font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
              A short conversation to understand your organization and see if Boon SCALE is a fit. No pressure. No
              obligation.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-boon-coral text-white px-12 py-6 rounded-[15px] font-sans font-bold text-2xl shadow-2xl shadow-boon-coral/30 hover:scale-105 transition-all"
            >
              Book a Strategy Call
            </Link>
            <div className="mt-12 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40">
              Usage-Based • ICF Certified • Instantly Scalable
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
