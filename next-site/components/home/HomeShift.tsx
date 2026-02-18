import Image from 'next/image';
import Link from 'next/link';

export function HomeShift() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — Copy */}
        <div>
          <p className="label-text text-[10px] text-[#466FF6] mb-6 tracking-[0.25em]">
            The Boon Difference
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-black text-[#1A253B] leading-[1.05] tracking-tight mb-8">
            What if leadership development worked like a cohesive,{' '}
            <span className="font-serif italic text-[#466FF6]">customized system?</span>
          </h2>
          <p className="text-lg text-[#2E353D] font-sans font-bold leading-relaxed mb-8 max-w-lg">
            One streamlined solution that replaces the patchwork—coaching, cohorts, and team development, all connected.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              'One partner aligned to your culture, across every level',
              'Visibility into what\'s changing, without surveillance or guesswork',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#466FF6] flex-shrink-0" />
                <span className="text-base font-sans font-medium text-[#2E353D]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Diagram image */}
        <div className="relative w-full">
          <Image
            src="/hp_section3.png"
            alt="Before and after: fragmented vendors replaced by Boon's unified system with coverage across every level"
            width={720}
            height={720}
            className="w-full h-auto rounded-[35px]"
            priority
          />
        </div>

      </div>
    </section>
  );
}
