import Link from 'next/link';
import Image from 'next/image';

export function LeadershipIntelligence() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left — Image */}
        <div className="w-full">
          <Image
            src="/competencygrowth.png"
            alt="Competency Growth dashboard showing aggregate cohort performance"
            width={800}
            height={800}
            className="w-full h-auto rounded-[35px]"
            style={{ objectFit: 'contain' }}
            priority
          />
          <p className="text-xs text-gray-400 font-sans mt-4">
            Aggregated cohort deltas measured across coached leaders over time.
          </p>
        </div>

        {/* Right — Copy */}
        <div>
          <p className="label-text text-[10px] text-[#466FF6] mb-6 tracking-[0.25em]">
            Boon&apos;s Data and Insights
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-black text-[#1A253B] leading-[1.05] tracking-tight mb-8">
            See what&apos;s actually{' '}
            <span className="font-serif italic text-[#466FF6]">changing.</span>
          </h2>
          <div className="space-y-6 max-w-xl">
            <p className="text-lg text-gray-500 font-sans font-normal leading-relaxed">
              Track participation, progress, and growth across your leadership population—without compromising confidentiality.
            </p>
            <p className="text-lg text-[#1A253B] font-sans font-bold leading-relaxed">
              Give your exec team the data they need to see development is working.
            </p>
            <div className="pt-2">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#466FF6] underline underline-offset-4 hover:gap-4 transition-all"
              >
                See how leadership signal compounds over time →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
