import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateServiceJsonLd } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = generatePageMetadata({
  title: 'For Individuals - Professional Coaching',
  description:
    'Accelerate your growth as a leader. Boon gives every employee a professional coach, a personal development dashboard, and AI-powered tools to practice and track growth.',
  path: '/individuals',
});

// Icon Components
function CheckCircleIcon() {
  return (
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#466FF6] flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function DocumentIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-[#E6EDFF] flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-[#466FF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-[#E6EDFF] flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-[#466FF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </div>
  );
}

function ChatIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-[#E6EDFF] flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-[#466FF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </div>
  );
}

function SlackIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-[#E6EDFF] flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-[#466FF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    </div>
  );
}

function TargetIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-[#FFE8D6] flex items-center justify-center mb-6">
      <svg className="w-7 h-7 text-[#FF8D80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
  );
}

function PracticeIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-[#FFE8D6] flex items-center justify-center mb-6">
      <svg className="w-7 h-7 text-[#FF8D80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </div>
  );
}

function TrendIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-[#FFE8D6] flex items-center justify-center mb-6">
      <svg className="w-7 h-7 text-[#FF8D80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
  );
}

// Data
const opportunityMoments = [
  {
    title: 'High-Stakes Moments',
    description: 'Preparing for a difficult conversation, a critical presentation, or a decision that affects your team\'s trajectory.',
  },
  {
    title: 'Role Transitions',
    description: 'Moving from individual contributor to manager, stepping into a bigger scope, or leading a team through change.',
  },
  {
    title: 'Accelerating Your Trajectory',
    description: 'Building influence, developing executive presence, and positioning yourself for what\'s next.',
  },
];

const platformFeatures = [
  {
    icon: <DocumentIcon />,
    title: 'AI Session Analysis',
    description: 'After each session, see AI-generated summaries of your key themes and takeaways. Track what you\'re working on over time and watch your focus evolve as you grow.',
  },
  {
    icon: <ChartIcon />,
    title: 'Confidence Tracking',
    description: 'Visualize how your self-reported confidence changes across your coaching engagement. See the growth trajectory that\'s hard to notice day-to-day.',
  },
  {
    icon: <ChatIcon />,
    title: 'AI Roleplay',
    description: 'Practice difficult conversations before you have them. Rehearse giving tough feedback, negotiating a raise, or navigating a tense team dynamic with an AI simulation that helps you prepare.',
  },
  {
    icon: <SlackIcon />,
    title: 'Slack Integration',
    description: 'Your action items and commitments surface directly in Slack, so the work you do with your coach follows you into your daily workflow. No separate app to forget.',
  },
];

const competencies = [
  {
    title: 'Confidence & Decision-Making',
    description: 'Trusting your judgment in high-pressure moments. Moving forward when you don\'t have perfect information.',
  },
  {
    title: 'Influence & Communication',
    description: 'Navigating feedback, managing up, and building credibility across your organization.',
  },
  {
    title: 'Difficult Conversations',
    description: 'Addressing underperformance, delivering hard news, and resolving conflict without avoiding it.',
  },
  {
    title: 'Leading Through Ambiguity',
    description: 'Making progress when priorities shift, resources are constrained, or the path forward isn\'t clear.',
  },
  {
    title: 'Executive Presence',
    description: 'Showing up with the gravitas and clarity that gets you taken seriously in high-stakes rooms.',
  },
  {
    title: 'Career Strategy',
    description: 'Identifying your strengths, mapping your trajectory, and positioning yourself for the opportunities you want.',
  },
];

const howItWorksItems = [
  {
    icon: <TargetIcon />,
    title: 'Focus on Action',
    description: 'Every session is designed to leave you with a clear perspective or a practical next step. You\'re not just processing, you\'re building.',
  },
  {
    icon: <PracticeIcon />,
    title: 'Deliberate Practice',
    description: 'Use AI roleplay between sessions to rehearse what you\'re learning. Prepare for real conversations before they happen.',
  },
  {
    icon: <TrendIcon />,
    title: 'Visible Progress',
    description: 'Track your development over time through confidence metrics and session themes. See growth that\'s usually invisible.',
  },
];

const privacyItems = [
  {
    title: 'Confidential Conversations',
    description: 'Your sessions are a protected space. Your coach will never share specifics with your manager or HR.',
  },
  {
    title: 'Anonymous Reporting',
    description: 'Employers only see high-level patterns, like "40% of participants are working on communication skills."',
  },
  {
    title: 'Your Choice',
    description: 'Coaching is entirely opt-in. You decide when to start, what to work on, and when you\'re done.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Access the Portal',
    description: 'Log in through your company\'s custom link or SSO. No setup, no approvals needed.',
  },
  {
    number: '02',
    title: 'Match with a Coach',
    description: 'Answer a few questions about your goals. We\'ll match you with a certified coach who\'s been where you\'re going.',
  },
  {
    number: '03',
    title: 'Book Your First Session',
    description: 'Choose a time that works. Most sessions are 30-45 minutes via video. Come with whatever\'s on your mind.',
  },
];

export default function IndividualsPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon Coaching for Individuals',
    description:
      'Access high-caliber coaching through your organization. Confidential support for your leadership journey.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/individuals`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-white text-boon-charcoal overflow-hidden">
        {/* 1. Hero Section */}
        <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
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
              Professional Coaching
            </div>
            <h1 className="font-sans text-6xl md:text-[92px] font-bold leading-[0.85] tracking-tight mb-10 max-w-5xl">
              Accelerate your growth <br />
              as a <span className="text-boon-blue font-serif italic">leader.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mb-16">
              Boon gives every employee a professional coach, a personal development dashboard,
              and AI-powered tools to practice and track growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/demo"
                className="bg-[#466FF6] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all text-center"
              >
                Find Your Coach
              </Link>
              <a
                href="#how-it-works"
                className="border border-gray-200 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all text-center"
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* 2. The Reality Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-4xl">
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Reality</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-12 tracking-tighter">
              Leadership doesn&apos;t come with a manual.
            </h2>
            <div className="space-y-8 text-gray-500 text-lg font-medium leading-relaxed">
              <p>
                You got promoted because you were great at your job. Now the job is different.
                You&apos;re navigating team dynamics, making decisions with incomplete information,
                and having conversations no one trained you for.
              </p>
              <p>
                Most people figure it out alone through trial and error, late-night overthinking, or
                advice from people who don&apos;t know the full picture.
              </p>
              <p>
                Boon gives you something better: a professional coach who&apos;s been where you&apos;re
                going, and a platform that helps you grow between sessions.
              </p>
            </div>
          </div>
        </section>

        {/* 3. The Opportunity Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">The Opportunity</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
                A dedicated partner for the moments that matter.
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                A coach doesn&apos;t give you answers. They help you find better ones, faster. You&apos;ll
                build the judgment, presence, and skills that compound throughout your career.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {opportunityMoments.map((item) => (
                <div key={item.title} className="p-10 bg-[#F9FAFB] rounded-[35px] border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-black mb-4">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Your Growth Platform Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">Your Growth Platform</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
              Coaching that continues between sessions.
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              Most coaching disappears the moment the call ends. Boon&apos;s employee portal
              keeps your development visible, actionable, and moving forward.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {platformFeatures.map((item) => (
              <div key={item.title} className="p-10 bg-[#F9FAFB] rounded-[35px] border border-gray-100 shadow-sm">
                {item.icon}
                <h4 className="text-xl font-black mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Real Development - Competencies Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">Real Development</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                Competencies that drive leadership effectiveness.
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl">
                Coaching isn&apos;t vague self-improvement. It&apos;s focused work on the capabilities that
                determine how far and how fast you grow.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {competencies.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-6 p-8 bg-gray-50 rounded-[32px] border border-gray-100 hover:bg-white hover:border-[#466FF6]/20 transition-all group"
                >
                  <CheckCircleIcon />
                  <div>
                    <h4 className="text-xl font-black mb-2 group-hover:text-[#466FF6] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 font-medium leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. How It Works Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#2E353D] text-white rounded-[60px] mx-4 md:mx-10 my-10" id="how-it-works">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">How It Works</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
              A structured system designed for results.
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              Boon coaching is not therapy, and it&apos;s not a performance review. It&apos;s a
              professional relationship focused on building your capabilities and accelerating
              your growth.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {howItWorksItems.map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center">{item.icon}</div>
                <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                <p className="text-white/40 font-medium leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Trust By Design - Privacy Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-24 items-start">
            <div>
              <p className="text-[#466FF6] font-black text-[10px] tracking-widest uppercase mb-6">Trust By Design</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                Confidential by default. Growth-focused by design.
              </h2>
              <div className="space-y-6 text-gray-500 text-lg font-medium leading-relaxed">
                <p>
                  Your coaching conversations are private. Your manager and HR never see what
                  you discuss. That&apos;s non-negotiable because trust is the foundation.
                </p>
                <p>
                  What your organization sees is aggregate, anonymized data: overall
                  participation, themes across the company, and whether the investment is
                  working. Nothing about you individually.
                </p>
              </div>
            </div>
            <div className="bg-[#F9FAFB] p-10 md:p-12 rounded-[35px] space-y-8">
              {privacyItems.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <CheckCircleIcon />
                  <div>
                    <h4 className="text-xl font-black mb-2">{item.title}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Next Steps Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeading overline="Next Steps" title="Start in five minutes." />
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto text-center mb-16 -mt-8">
              If your company offers Boon, you&apos;re a few clicks away from your first session.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center p-12 bg-gray-50 rounded-[60px]">
                  <div className="w-16 h-16 rounded-full bg-[#466FF6] text-white flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-blue-100">
                    {step.number}
                  </div>
                  <h5 className="text-2xl font-black mb-4">{step.title}</h5>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Not Available Yet Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-4xl">
            <p className="text-[#FF8D80] font-black text-[10px] tracking-widest uppercase mb-6">Not Available Yet?</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tighter">
              Bring Boon to your organization.
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10 max-w-xl">
              If your company doesn&apos;t offer Boon, you can help change that. We&apos;ve made it
              easy to share Boon with your HR or L&D team, and we&apos;ll take it from there.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-[#466FF6] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all mb-12"
            >
              Share Boon with Your HR Team
            </Link>
            <div className="bg-[#F9FAFB] p-10 rounded-[32px] border border-gray-100 max-w-2xl">
              <p className="text-gray-500 font-medium leading-relaxed text-sm">
                Organizations choose Boon because it&apos;s not just coaching, it&apos;s a leadership development
                system. One platform for 1:1 coaching, cohort programs, executive development, and team
                workshops. Real-time dashboards for HR. Manager visibility without breaking confidentiality.
                If your company is serious about developing leaders, they should see what Boon offers.
              </p>
            </div>
          </div>
        </section>

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

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-sans text-5xl md:text-[84px] font-bold tracking-tight leading-[0.85] mb-12">
              Your growth <span className="text-boon-blue font-serif italic">compounds.</span>
            </h2>
            <p className="text-xl text-white/70 font-body font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
              Every conversation builds judgment, confidence, and capability that stays with you.
              If your organization offers Boon, this is your investment to claim.
            </p>
            <Link
              href="/demo"
              className="inline-block bg-white text-boon-navy px-12 py-6 rounded-full font-sans font-bold text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              Find Your Coach
            </Link>
            <div className="mt-12 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40">
              Confidential • ICF Certified • AI-Powered Platform
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
