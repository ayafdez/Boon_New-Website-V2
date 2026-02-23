import Image from 'next/image';
import Link from 'next/link';

export function LeadershipIntelligence() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-boon-soft-coral/10 via-white to-boon-light-blue/15"></div>

      {/* Soft radial gradient accent - left side */}
      <div
        className="absolute top-[20%] -left-[5%] w-[45%] h-[70%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 141, 128, 0.25) 0%, rgba(204, 217, 255, 0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      ></div>

      {/* Secondary blue accent - bottom right */}
      <div
        className="absolute -bottom-[10%] -right-[5%] w-[35%] h-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.15) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 lg:gap-32 items-center relative z-10">

        {/* LEFT — image */}
        <div className="relative w-full">
          <Image
            src="/competency growth.png"
            alt="Competency Growth Chart"
            width={1400}
            height={1400}
            quality={100}
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* RIGHT — text */}
        <div>
          <p className="label-text text-[10px] text-boon-blue mb-10">
            Boon&apos;s Data and Insights
          </p>
          <h2 className="font-sans text-2xl md:text-4xl lg:text-[44px] font-bold text-boon-charcoal mb-12 tracking-tight leading-[0.9]">
            See what&apos;s actually <span className="font-serif italic text-boon-blue">changing</span>.
          </h2>
          <div className="space-y-8 max-w-xl">
            <p className="text-base md:text-lg text-boon-charcoal font-body font-semibold leading-relaxed">
              Leverage AI-powered insights to give your exec team the data they need to see development in action.
            </p>
            <div className="pt-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-body font-bold text-boon-blue hover:gap-4 transition-all uppercase tracking-widest"
              >
                See how leadership signal compounds over time <span>→</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
