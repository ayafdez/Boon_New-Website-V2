import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateServiceJsonLd } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon EXEC - Executive Coaching for Senior Leaders',
  description:
    'A confidential space for senior leaders navigating decisions where clarity, consequence, and timing matter. Precision in high-stakes leadership.',
  path: '/solutions/exec',
});

// Icon components
function BoundaryIcon() {
  return (
    <svg className="w-6 h-6 text-[#2E353D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M4 8V4h4m8 0h4v4m0 8v4h-4m-8 0H4v-4" />
      <rect x="9" y="9" width="6" height="6" strokeDasharray="1 1" />
    </svg>
  );
}

function PrecisionIcon() {
  return (
    <svg className="w-6 h-6 text-[#2E353D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 2v20M2 12h20" strokeOpacity="0.1" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

function LeverageIcon() {
  return (
    <svg className="w-6 h-6 text-[#2E353D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M3 16h18" />
      <path d="M11 16l1-2 1 2h-2z" fill="currentColor" />
      <circle cx="5" cy="10" r="1.5" />
      <circle cx="19" cy="4" r="1.5" />
      <path d="M5 11.5L19 5.5" strokeDasharray="2 2" />
    </svg>
  );
}

function MinimalIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center mb-12 border border-gray-100 bg-white shadow-sm rounded-lg transition-all duration-500 group-hover:border-[#466FF6]/30 group-hover:scale-110">
      <div className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
        {children}
      </div>
    </div>
  );
}

export default function ExecPage() {
  const jsonLd = generateServiceJsonLd({
    name: 'Boon EXEC',
    description:
      'A confidential space for senior leaders navigating high-stakes decisions. Precision in executive leadership.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/solutions/exec`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-white text-[#2E353D] overflow-hidden">
        {/* 1. Hero Section */}
        <section className="bg-boon-navy pt-40 pb-44 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Animated floating gradient blob - Blue (top right) */}
          <div
            className="absolute -top-[10%] -right-[10%] w-[45%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.35) 0%, rgba(70, 111, 246, 0.15) 30%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          ></div>

          {/* Animated floating gradient blob - Coral (bottom left) */}
          <div
            className="absolute -bottom-[15%] -left-[10%] w-[40%] h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.25) 0%, rgba(255, 141, 128, 0.1) 30%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          ></div>

          {/* Dotted texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.12) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
            }}
          ></div>

          <Image
            src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png"
            width={800}
            height={800}
            className="absolute -bottom-44 -right-44 w-2/3 opacity-10 pointer-events-none select-none z-0"
            alt=""
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center relative z-10">
            <div>
              <div className="inline-flex items-center bg-white/10 text-white font-black text-[13px] tracking-[0.25em] px-10 py-5 rounded-full mb-16 uppercase border border-white/5 shadow-inner">
                Boon EXEC
              </div>
              <h1 className="text-6xl md:text-[108px] font-black text-white leading-[0.78] tracking-tighter mb-16 max-w-5xl">
                Precision in <br />
                high-stakes <span className="text-[#466FF6] italic font-serif">leadership</span>.
              </h1>
              <p className="text-xl md:text-2xl text-white/40 font-medium leading-relaxed max-w-2xl mb-24">
                Strategic coaching for executives navigating decisions where clarity, consequence,
                and organizational impact converge.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/demo"
                  className="bg-[#466FF6] text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-900/40 text-center"
                >
                  Initiate a Confidential Inquiry
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block h-full min-h-[600px]">
              <div className="relative w-full h-full min-h-[400px] bg-[#1A1F24] overflow-hidden rounded-[35px] shadow-2xl border border-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000"
                  width={800}
                  height={600}
                  alt="High-stakes leadership calibration"
                  className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E353D] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Executive Reality */}
        <section className="py-48 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-44">
              <p className="text-[#466FF6] font-black text-[10px] tracking-[0.4em] uppercase mb-10">
                The Context
              </p>
              <h2 className="text-4xl md:text-7xl font-black leading-[1.02] mb-14 tracking-tighter">
                At the top, decisions get harder but feedback gets softer.
              </h2>
              <div className="space-y-12 text-gray-500 text-xl font-medium leading-relaxed max-w-2xl">
                <p>
                  At the senior level, decisions are rarely simple. Leaders are dealing with
                  ambiguity, time constraints, and asymmetric information. Boon EXEC equips leaders
                  with the skills for navigating high-stakes circumstances. And unlike standalone
                  coaching, Exec connects to how your entire leadership team is developing, ensuring
                  coherence from C-suite to frontline.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-[#466FF6] font-black text-[10px] tracking-[0.4em] uppercase mb-2">
                The pressure points that show up behind closed doors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  t: 'Leadership Isolation',
                  d: 'The higher the role, the fewer people a leader can speak to with total candor.',
                },
                {
                  t: 'Decision Fatigue',
                  d: 'Continuous high-impact choices require an intentional space for calibration.',
                },
                {
                  t: 'Cultural Gravity of Leadership',
                  d: 'Senior leaders set the tone. Their development is an organizational imperative.',
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="p-12 border border-gray-100 rounded-[56px] hover:shadow-2xl hover:border-transparent transition-all group bg-white"
                >
                  <div className="w-1.5 h-1.5 bg-gray-100 rounded-full mb-10 group-hover:bg-[#466FF6] transition-colors"></div>
                  <h4 className="text-2xl font-black mb-6 transition-colors tracking-tight leading-tight text-[#1A1F24] group-hover:text-[#466FF6]">
                    {item.t}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2b. What EXEC Replaces */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-50/50 border-2 border-dashed border-emerald-200 rounded-[48px] p-12 md:p-16 text-center">
              <p className="text-emerald-600 font-black text-[10px] tracking-[0.4em] uppercase mb-6">
                What EXEC Replaces
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#2E353D] mb-8">
                EXEC is one layer of a coordinated leadership program
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Most executive coaching is ad-hoc—a trusted name, an occasional check-in, no
                connection to broader leadership development. Boon Exec is part of a larger
                leadership system, coordinated and applied with intention to drive maximum impact.
              </p>
            </div>
          </div>
        </section>

        {/* 3. The Philosophy */}
        <section className="py-48 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]/50 relative overflow-hidden">
          <Image
            src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(1).png"
            width={800}
            height={800}
            className="absolute -top-32 -right-32 w-1/2 opacity-[0.08] pointer-events-none select-none z-0 rotate-12"
            alt=""
            aria-hidden="true"
          />
          <div className="max-w-5xl mx-auto text-center mb-40 relative z-10">
            <SectionHeading
              overline="The Philosophy"
              title="Strategic sparring. Not remediation."
              subtitle="Executive growth is not about fixing deficits; it's about pressure-testing judgment before it shows up in the organization."
            />
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-24 relative z-10">
            {[
              {
                icon: <BoundaryIcon />,
                t: 'Absolute Discretion',
                d: 'Privacy is our foundation. Every engagement is protected by rigorous confidentiality protocols.',
              },
              {
                icon: <PrecisionIcon />,
                t: 'Operator Depth',
                d: 'Matched with elite coaches who have spent decades in senior leadership roles themselves.',
              },
              {
                icon: <LeverageIcon />,
                t: 'Focus on Leverage',
                d: 'We focus on the cognitive skills that drive outsized results: presence, influence, and calm under pressure.',
              },
            ].map((item) => (
              <div key={item.t} className="text-center group">
                <div className="flex justify-center">
                  <MinimalIcon>{item.icon}</MinimalIcon>
                </div>
                <h4 className="text-3xl font-black mb-8 tracking-tight group-hover:scale-[1.02] transition-transform duration-500">
                  {item.t}
                </h4>
                <p className="text-gray-500 font-medium leading-relaxed px-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Focus Areas - Outcomes */}
        <section className="py-48 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <p className="text-[#466FF6] font-black text-[10px] tracking-[0.4em] uppercase mb-10">
                Outcomes
              </p>
              <div className="inline-block relative">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter pb-4">
                  Leverage, not hand-holding.
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#466FF6]"></div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  t: 'Leading Through Ambiguity',
                  d: 'Developing internal stability to steer teams through organizational shifts and rapid scaling.',
                },
                {
                  t: 'Influence Without Erosion of Trust',
                  d: 'Sharpening the ability to manage board dynamics and drive consensus.',
                },
                {
                  t: 'Sustained Executive Effectiveness',
                  d: 'Building resilience to maintain peak performance without personal depletion.',
                },
                {
                  t: 'Decision Clarity Under Pressure',
                  d: 'A structured environment to vet strategic plans before execution.',
                },
              ].map((area) => (
                <div
                  key={area.t}
                  className="flex gap-12 p-16 bg-gray-50/50 rounded-[72px] border border-gray-100 hover:bg-white hover:border-[#466FF6]/20 transition-all group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-[#466FF6] opacity-30 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black mb-6 group-hover:text-[#466FF6] transition-colors tracking-tight leading-tight">
                      {area.t}
                    </h4>
                    <p className="text-gray-500 font-medium text-lg leading-relaxed">{area.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. The Coherent System */}
        <section className="py-36 px-6 md:px-12 lg:px-24 bg-boon-navy text-white relative overflow-hidden">
          {/* Dotted texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.12) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              maskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
            }}
          ></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
              One system. Coherent growth at every level.
            </h3>
            <div className="max-w-3xl mx-auto mb-24">
              <p className="text-white/15 text-xl font-medium leading-relaxed mb-6">
                Boon EXEC integrates with SCALE and GROW to ensure leadership speaks a common
                language across levels.
              </p>
              <p className="text-white/40 font-bold italic">
                This ensures leadership development compounds across levels instead of fragmenting
                into disconnected tools.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16">
              {['Boon SCALE', 'Boon GROW', 'Boon TOGETHER'].map((prod, idx) => (
                <div key={prod} className="flex items-center gap-6">
                  <div className="flex items-center gap-5 text-white/50 font-black text-[12px] tracking-[0.4em] uppercase">
                    <div className="w-1.5 h-1.5 bg-[#466FF6] rounded-full"></div> {prod}
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:flex items-center gap-2 opacity-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <div className="w-8 h-px bg-white"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why Boon EXEC - The Standard */}
        <section className="py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          <Image
            src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(3).png"
            width={800}
            height={800}
            className="absolute -bottom-32 -left-32 w-1/2 opacity-10 pointer-events-none select-none z-0"
            alt=""
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <SectionHeading overline="The Standard" title="What an executive engagement looks like." />
            <div className="grid md:grid-cols-3 gap-12 w-full mt-24">
              {[
                {
                  t: 'Vetted Matches',
                  d: "Every match starts with a structured diagnostic—mapping your operating style, industry context, and the specific leadership edges you're sharpening. You'll meet coaches who've held roles like yours, not just coached people in them. And if the fit isn't right, we rematch within 48 hours.",
                },
                {
                  t: 'Measured Outcomes',
                  d: "Progress isn't a feeling—it's tracked. Our Resilience Index™ captures shifts in decision quality, influence capacity, and pressure tolerance across your engagement. Quarterly summaries give you and your sponsor clear signals on movement, without exposing session content.",
                },
                {
                  t: 'Flexible Engagement',
                  d: "Engage support for as long as it provides value, without rigid contract locks or transactional overhead. Scale up during high-stakes transitions, dial back when you've got momentum. The structure flexes around your operating reality, not our revenue model.",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="p-16 border border-gray-100 rounded-[35px] bg-white hover:shadow-xl transition-all"
                >
                  <h5 className="text-2xl font-black mb-8 tracking-tight leading-tight">{item.t}</h5>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Final CTA */}
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
              Get clarity when <br />
              <span className="text-[#466FF6] font-serif italic">the stakes are highest</span>.
            </h2>
            <p className="text-xl text-white/70 font-body font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
              Ready to talk through the decision in front of you?
            </p>
            <Link
              href="/demo"
              className="inline-block bg-boon-coral text-white px-12 py-6 rounded-[15px] font-sans font-bold text-2xl shadow-2xl shadow-boon-coral/30 hover:scale-105 transition-all"
            >
              Book a Strategy Call
            </Link>
            <div className="mt-12 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40">
              Strictly Confidential • ICF Certified • Global Network
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
