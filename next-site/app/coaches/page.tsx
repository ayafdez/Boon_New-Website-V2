import type { Metadata } from 'next';
import { generatePageMetadata, generateServiceJsonLd, siteUrl } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'For Coaches',
  description:
    'Boon selects ICF-certified coaches who\'ve held P&L responsibility, led teams through transformation, and operated at scale. Join a network that respects the craft of coaching.',
  path: '/coaches',
});

// Icon Components
function GreenCheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-8 h-8 text-boon-blue/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11 7H7a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a1 1 0 1 0 0 2h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4H6a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h4a1 1 0 1 0 0-2Zm10 0h-4a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a1 1 0 1 0 0 2h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-1a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h4a1 1 0 1 0 0-2Z" />
    </svg>
  );
}

// Data
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
    description: 'Clients can practice difficult conversations with AI simulation before doing them live. They rehearse with support, then execute with confidence.',
  },
  {
    title: 'Confidence tracking',
    description: 'Both you and your clients can see how self-reported confidence evolves over the engagement. Growth becomes visible, not just felt.',
  },
];

const scopeItems = [
  {
    label: 'Boon SCALE',
    description: 'Leadership effectiveness coaching for employees across the organization. High-touch development that actually scales.',
    accent: 'text-[#466FF6]',
    border: 'border-[#466FF6]/30',
  },
  {
    label: 'Boon GROW',
    description: 'Cohort-based development for managers making the transition from contributor to leader. Structured curriculum, peer learning, and 1:1 coaching combined.',
    accent: 'text-[#10B981]',
    border: 'border-[#10B981]/30',
  },
  {
    label: 'Boon EXEC',
    description: 'Senior-level sparring for executives navigating enterprise stakes, board dynamics, strategic ambiguity, and organizational transformation.',
    accent: 'text-white',
    border: 'border-white/30',
  },
  {
    label: 'Boon TOGETHER',
    description: 'Team workshops that address real friction points: alignment, communication, decision-making, trust. Facilitated sessions that create immediate traction.',
    accent: 'text-[#F59E0B]',
    border: 'border-[#F59E0B]/30',
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

const heroStats = [
  { value: '500+', label: 'Coaches' },
  { value: '100+', label: 'Organizations' },
  { value: 'ICF', label: 'Required' },
];

export default function CoachesPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon Coach Partnership Program',
    description:
      'Join a network of experienced coaches who deliver coaching inside a unified system with shared standards and measurable outcomes.',
    url: `${siteUrl}/coaches`,
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

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-boon-light-blue/50 text-boon-blue label-text text-[10px] px-4 py-2 rounded-full mb-10 border border-boon-light-blue">
              For Practitioners
            </div>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-[92px] font-bold leading-tight lg:leading-[0.85] tracking-tight mb-10">
              For coaches who&apos;ve <span className="text-boon-blue font-serif italic">done the work.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
              ICF-certified coaches with real operating experience, matched to leaders facing challenges you&apos;ve already navigated. Your craft, amplified by a platform that makes impact measurable.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://share.hsforms.com/1eMN4ewSoTMuYjlwM2aGH_Qcrsd5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-boon-blue text-white px-10 py-5 rounded-[15px] font-black text-xl shadow-xl shadow-blue-100 hover:bg-boon-deep-blue transition-all text-center"
              >
                Join the Boon coaching bench
              </a>
              <a
                href="#scope"
                className="border-2 border-gray-200 px-10 py-5 rounded-[15px] font-black text-xl hover:bg-gray-50 transition-all text-center"
              >
                See the scope
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-16 pt-10 border-t border-gray-200 flex justify-center gap-6 md:gap-12 lg:gap-20">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-boon-charcoal">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Clear Alignment */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8 text-boon-blue">
                Clear alignment. No games.
              </h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                If you&apos;ve worked with coaching platforms before, you know the tradeoffs. We&apos;ve built something different.
              </p>
            </div>

            {/* Comparison table */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left: What we don't do */}
              <div className="bg-[#F9FAFB] rounded-2xl p-6 md:p-10 border border-gray-100">
                <p className="font-black text-sm uppercase tracking-widest text-gray-400 mb-8">Other platforms</p>
                <div className="space-y-6">
                  {alignmentItems.map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-black">&times;</span>
                      <div>
                        <p className="font-black text-base mb-1">{item.title}</p>
                        <p className="text-gray-400 font-medium leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: What you get */}
              <div className="bg-white rounded-2xl p-6 md:p-10 border-2 border-boon-blue/20">
                <p className="font-black text-sm uppercase tracking-widest text-boon-blue mb-8">Boon</p>
                <div className="space-y-6">
                  {whatYouGetItems.map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <GreenCheckIcon />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Scope + Tools (merged dark section) */}
        <section id="scope" className="py-32 px-6 md:px-12 lg:px-24 bg-boon-navy text-white rounded-[60px] mx-4 md:mx-10 my-10 relative overflow-hidden">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          ></div>

          {/* Gradient blobs */}
          <div
            className="absolute top-[10%] right-[5%] w-[40%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.2) 0%, rgba(70, 111, 246, 0.05) 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          ></div>
          <div
            className="absolute bottom-[10%] left-[10%] w-[35%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.15) 0%, rgba(255, 141, 128, 0.05) 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          ></div>

          {/* Top: Scope */}
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-boon-green font-black text-[10px] tracking-widest uppercase mb-6">The Scope</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
                One platform. Many paths to impact.
              </h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                Boon coaches work across an integrated leadership system: executive coaching, manager development,
                frontline effectiveness, and team workshops all connected in a single platform.
              </p>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scopeItems.map((item) => (
                <div
                  key={item.label}
                  className={`p-8 bg-white/5 border ${item.border} rounded-2xl hover:bg-white/10 transition-all`}
                >
                  <div className={`text-xs font-black tracking-widest ${item.accent} uppercase mb-4`}>{item.label}</div>
                  <p className="text-white/60 font-medium leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto border-t border-white/10 my-20"></div>

            {/* Bottom: Tools */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-boon-gold font-black text-[10px] tracking-widest uppercase mb-6">Tools That Extend Your Reach</p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8 tracking-tighter">
                Your coaching, alive between sessions.
              </h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                Most coaching is confined to sessions, and the growth happens in between. Boon&apos;s platform keeps
                your work alive in your clients&apos; daily workflow.
              </p>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformFeatures.map((item) => (
                <div
                  key={item.title}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <h4 className="text-base font-black mb-3 text-white">{item.title}</h4>
                  <p className="text-white/50 font-medium leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Testimonials */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F8F9FC]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="text-boon-blue font-black text-[10px] tracking-widest uppercase mb-4">
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
                  className="bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col justify-between h-full hover:shadow-lg hover:border-boon-light-blue transition-all"
                >
                  <div>
                    <QuoteIcon />
                    <p className="text-lg font-medium text-boon-charcoal leading-relaxed mb-10 font-serif italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-black text-boon-charcoal uppercase tracking-widest">{testimonial.author}</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="bg-boon-navy py-20 md:py-40 px-6 text-white text-center relative overflow-hidden">
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
              <a
                href="https://share.hsforms.com/1eMN4ewSoTMuYjlwM2aGH_Qcrsd5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-boon-coral text-white px-8 py-4 md:px-12 md:py-6 rounded-[15px] font-sans font-bold text-lg md:text-lg shadow-2xl shadow-boon-coral/30 hover:scale-105 transition-all"
              >
                Apply to the Partnership
              </a>
              <p className="text-white/50 text-[11px] font-body font-bold uppercase tracking-[0.2em]">
                We review applications carefully. Not every coach is a fit.
              </p>
            </div>
            <div className="mt-16 text-[10px] font-body font-bold uppercase tracking-[0.3em] text-white/30">
              Current Review Cycle: Q1 2026 • Average response: 2-3 weeks
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
