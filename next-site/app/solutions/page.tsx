import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateServiceJsonLd } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SystemArchitect } from '@/components/solutions/SystemArchitect';
import { AccordionSection } from '@/components/solutions/AccordionSection';
import { GlobalCTA } from '@/components/layout/GlobalCTA';

export const metadata: Metadata = generatePageMetadata({
  title: 'Solutions',
  description:
    'Boon is a unified talent development system. Coaching, leadership development, and executive support designed around where growth pressure shows up.',
  path: '/solutions',
});

const solutions = [
  {
    id: 'scale',
    name: 'Boon Scale',
    title: 'Democratized 1:1 Coaching',
    tagline: '"WHEN EVERYONE NEEDS SUPPORT—NOT JUST EXECS."',
    description:
      '1:1 coaching for everyone in your org, not just leadership. Employees book sessions when they need them, with coaches matched to their role and context.',
    startingPoint: 'You want broad, always-on support across the organization.',
    bestFor: 'All employees, large-scale culture shifts.',
    color: '#466FF6', // boon-blue
    badge: null,
  },
  {
    id: 'grow',
    name: 'Boon Grow',
    title: 'Leadership Development',
    tagline: '"WHEN YOUR MANAGERS ARE UNDERWATER."',
    description:
      'Cohort-based development for new and rising managers. A structured program that builds the skills most first-time managers never learned: feedback, delegation, and difficult conversations.',
    startingPoint: 'New managers or team leads are the biggest bottleneck.',
    bestFor: 'First-time managers, L&D cohorts, team leads.',
    color: '#FF6D6A', // boon-coral
    badge: 'Most common starting point',
  },
  {
    id: 'exec',
    name: 'Boon Exec',
    title: 'Executive Coaching',
    tagline: '"WHEN THE STAKES ARE HIGHEST."',
    description:
      'Confidential coaching for your senior leaders. A thinking partner for the decisions that ripple across the org.',
    startingPoint: 'Senior leaders need confidential, high-stakes support.',
    bestFor: 'C-Suite, VPs, Founders.',
    color: '#2E353D', // boon-charcoal
    badge: null,
  },
  {
    id: 'together',
    name: 'Boon Together',
    title: 'Collective Development',
    tagline: '"WHEN THE TEAM NEEDS TO GET ON THE SAME PAGE."',
    description:
      'Facilitated sessions for teams that need to align: offsites, department kickoffs, or moments of change. Builds shared language and momentum.',
    startingPoint: 'Alignment, shared language, or change moments matter most.',
    bestFor: 'Team offsites, department alignment, workshops.',
    color: '#FFC969', // boon-gold
    badge: 'Strategic entry point',
  },
];

export default function SolutionsPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon Leadership Development System',
    description: 'Unified talent development system with coaching, leadership development, and executive support.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/solutions`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 border-b border-gray-50 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-boon-light-blue/30 via-white to-boon-soft-coral/15"></div>

          {/* Floating gradient blob - Coral (top right) */}
          <div
            className="absolute -top-[10%] -right-[10%] w-[45%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.35) 0%, rgba(255, 141, 128, 0.15) 30%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          ></div>

          {/* Floating gradient blob - Blue (bottom left) */}
          <div
            className="absolute -bottom-[15%] -left-[10%] w-[40%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.3) 0%, rgba(70, 111, 246, 0.1) 30%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          ></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-boon-light-blue/50 text-boon-blue label-text text-[10px] px-4 py-2 rounded-full mb-10 border border-boon-light-blue">
              How Boon Works
            </div>
            <h1 className="font-sans text-6xl md:text-[92px] font-bold text-boon-charcoal leading-[0.9] tracking-tight mb-10 max-w-5xl">
              One system. Configured to solve your <span className="font-serif italic text-boon-blue">problems</span>.
            </h1>
            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl text-gray-500 font-body font-medium leading-relaxed mb-6">
                Boon brings coaching, leadership development, and executive support into a single system. Customize your program based on where your organization is feeling the strain.
              </p>
              <p className="text-lg md:text-xl text-boon-blue font-body font-bold tracking-tight border-l-2 border-boon-blue pl-6 py-1">
                Start by fixing what&apos;s broken today, then adapt to solve new problems tomorrow.
              </p>
            </div>
          </div>
        </section>

        <SystemArchitect />

        {/* Why a System Matters */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-boon-navy relative overflow-hidden">
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

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <h6 className="label-text text-[10px] text-boon-coral mb-6">
                The Case for Integration
              </h6>
              <h2 className="font-sans text-4xl md:text-6xl font-bold text-white leading-tight mb-8 tracking-tight">
                Fragmented support is no support at all.
              </h2>
              <div className="space-y-8 text-gray-400 text-lg font-body font-medium leading-relaxed">
                <p>
                  When you&apos;re juggling four vendors for coaching, manager training, exec support, and team facilitation, nothing connects. Context gets lost. Adoption drops. And you can&apos;t show what&apos;s actually working.
                </p>
                <p className="text-white">
                  Boon keeps a continuous thread. When someone gets promoted, their coach relationship and development history come with them. No starting over.
                </p>
              </div>
            </div>
            <div className="bg-boon-charcoal p-12 rounded-[60px] border border-gray-700">
              <div className="space-y-10">
                {[
                  { t: 'Seamless Continuity', d: 'When someone gets promoted, their development journey continues. No reset.' },
                  { t: 'Depth of Impact', d: 'Habits that stick, not insights that fade after a workshop.' },
                  { t: 'Strategic Alignment', d: 'One partner who knows your culture, not four vendors who don\'t talk to each other.' },
                ].map((point) => (
                  <div key={point.t} className="border-b border-gray-700 pb-6 last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-boon-coral"></div>
                      <h4 className="font-sans text-lg font-bold text-white">{point.t}</h4>
                    </div>
                    <p className="text-sm text-gray-400 font-body font-medium pl-5">{point.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-boon-light-blue/10 to-boon-soft-coral/10"></div>

          {/* Decorative gradient blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-boon-blue/5 to-boon-coral/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
            <SectionHeading
              overline="Our Philosophy"
              title="Growth is a utility, not an event."
              subtitle="Leadership development shouldn't be a one-off afterthought. Boon is thoughtfully designed, easy to measure, and always-on."
            />
          </div>

          <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
            <h4 className="label-text text-[10px] text-boon-blue mb-4">
              The Unified Ecosystem
            </h4>
            <div className="w-12 h-0.5 bg-boon-blue mx-auto"></div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-24 relative z-10">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="group relative bg-boon-off-white p-16 rounded-[60px] border border-gray-100 hover:border-current transition-all flex flex-col justify-between min-h-[550px]"
                style={{ '--hover-color': solution.color } as React.CSSProperties}
              >
                <div
                  className="absolute top-10 left-16 w-8 h-[2px]"
                  style={{ backgroundColor: solution.color }}
                ></div>
                {solution.badge && (
                  <div
                    className="absolute -top-4 right-10 text-white text-[9px] font-body font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg"
                    style={{ backgroundColor: solution.color }}
                  >
                    {solution.badge}
                  </div>
                )}
                <div>
                  <div
                    className="label-text text-[10px] mb-10"
                    style={{ color: solution.color }}
                  >
                    {solution.name}
                  </div>
                  <h3 className="font-sans text-4xl font-bold text-boon-charcoal mb-4">{solution.title}</h3>
                  <p
                    className="text-sm font-serif italic mb-8"
                    style={{ color: solution.color }}
                  >
                    {solution.tagline}
                  </p>
                  <p className="text-gray-500 font-body font-medium leading-relaxed mb-8">{solution.description}</p>
                  <div className="space-y-4 border-t border-gray-200 pt-8">
                    <div className="text-sm font-body font-semibold text-boon-charcoal">
                      <span
                        className="label-text text-[10px] block mb-1"
                        style={{ color: solution.color }}
                      >
                        Common starting point when:
                      </span>
                      {solution.startingPoint}
                    </div>
                    <div className="text-sm font-body font-semibold text-boon-charcoal">
                      <span className="label-text text-[10px] text-gray-400 block mb-1">
                        Best for:
                      </span>
                      {solution.bestFor}
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <p className="text-[9px] font-body font-medium text-gray-300 uppercase tracking-widest mb-4">
                    Part of the Boon system. Designed to integrate and expand over time.
                  </p>
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="flex items-center gap-3 label-text text-[10px] group-hover:gap-5 transition-all"
                    style={{ color: solution.color }}
                  >
                    Learn about {solution.name.split(' ')[1]} <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <AccordionSection />
        </section>

        {/* Getting Started */}
        <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-boon-off-white via-white to-boon-light-blue/20"></div>

          {/* Decorative gradient blob */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-boon-soft-coral/20 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
            <h6 className="label-text text-[10px] text-boon-blue mb-6">
              Getting Started
            </h6>
            <h2 className="font-sans text-5xl md:text-7xl font-bold text-boon-charcoal tracking-tight leading-[0.9]">
              What to expect <span className="font-serif italic text-boon-blue">next</span>.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                num: '01',
                title: 'Book a Demo',
                desc: 'Tell us about your team and where you want to see change. We\'ll walk you through the system and show how companies like yours use Boon.',
              },
              {
                num: '02',
                title: 'Get a Quote',
                desc: 'We\'ll build a custom proposal based on your goals, team size, and timeline. No templated packages—just what you need.',
              },
              {
                num: '03',
                title: 'See Results',
                desc: 'Once live, you\'ll see engagement data and growth signals within weeks. We partner with you to iterate and expand as impact compounds.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white p-12 rounded-[35px] border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-boon-blue/10 flex items-center justify-center mx-auto mb-8">
                  <span className="label-text text-[14px] text-boon-blue">{step.num}</span>
                </div>
                <h3 className="font-sans text-2xl font-bold text-boon-charcoal mb-4">{step.title}</h3>
                <p className="text-gray-500 font-body font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <GlobalCTA />
      </main>
    </>
  );
}
