import Link from 'next/link';

// Boon logo mark SVG (the 4-petal shape from the "After" card)
function BoonMark() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-12 h-12">
      <path
        d="M40 8 C40 8 56 24 56 40 C56 56 40 72 40 72 C40 72 24 56 24 40 C24 24 40 8 40 8Z"
        fill="white"
        opacity="0.3"
      />
      <path
        d="M8 40 C8 40 24 24 40 24 C56 24 72 40 72 40 C72 40 56 56 40 56 C24 56 8 40 8 40Z"
        fill="white"
        opacity="0.3"
      />
      <circle cx="40" cy="40" r="6" fill="white" opacity="0.9" />
    </svg>
  );
}

// Dashed SVG wave connector between bubbles
function DashedWave() {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      className="w-full h-6"
      preserveAspectRatio="none"
    >
      <path
        d="M0 12 C20 4, 40 20, 60 12 C80 4, 100 20, 120 12"
        stroke="#466FF6"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.35"
      />
    </svg>
  );
}

const levels = [
  { label: 'IC',       size: 56,  highlight: false },
  { label: 'Manager',  size: 64,  highlight: false },
  { label: 'Director', size: 72,  highlight: false },
  { label: 'VP',       size: 84,  highlight: false },
  { label: 'Exec',     size: 100, highlight: true  },
];

export function HomeShift() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Copy ── */}
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
          <ul className="space-y-4">
            {[
              'One partner aligned to your culture, across every level',
              "Visibility into what's changing, without surveillance or guesswork",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#466FF6] flex-shrink-0" />
                <span className="text-base font-sans font-medium text-[#2E353D]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Coded diagram ── */}
        <div className="bg-[#EEF2FA] rounded-[35px] p-10 border border-[#E0E7F5]">

          {/* Before / After */}
          <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-[#D0DAF0]">

            {/* Before */}
            <div className="flex flex-col gap-3">
              <p className="label-text text-[10px] text-[#8899BB] tracking-[0.2em] text-center mb-1">Before</p>
              <div className="grid grid-cols-2 gap-2">
                {['Vendor', 'Vendor', 'Vendor', 'Vendor'].map((v, i) => (
                  <div
                    key={i}
                    className="bg-[#D6E0F5] text-[#5A78C0] text-xs font-sans font-semibold px-4 py-3 rounded-[14px] text-center"
                  >
                    {v}
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="flex flex-col gap-3">
              <p className="label-text text-[10px] text-[#8899BB] tracking-[0.2em] text-center mb-1">After</p>
              <div className="bg-[#466FF6] rounded-[20px] aspect-square w-full max-w-[160px] mx-auto flex items-end justify-end p-4 relative overflow-hidden">
                {/* 4-petal sparkle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-x-[0.35] blur-[2px]" />
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-y-[0.35] blur-[2px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full opacity-80" />
                    </div>
                  </div>
                </div>
                {/* OO mark bottom right */}
                <div className="relative z-10 text-white font-sans font-black text-xl leading-none tracking-tighter opacity-90">
                  <span className="block">OO</span>
                  <div className="w-5 h-0.5 bg-white/60 mt-0.5 ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-sm font-sans font-black text-[#466FF6] mb-8">
            Too many. Zero integration.
          </p>

          {/* Divider */}
          <div className="border-t border-[#D0DAF0] mb-8" />

          {/* Coverage */}
          <div>
            <p className="label-text text-[10px] text-[#8899BB] tracking-[0.2em] text-center mb-6">
              Coverage Across Every Level
            </p>

            {/* Bubble row */}
            <div className="flex items-end justify-between gap-0 mb-3">
              {levels.map((level, idx) => (
                <div key={level.label} className="flex flex-col items-center flex-1">
                  <div
                    className={`rounded-full flex items-center justify-center transition-all ${
                      level.highlight ? 'bg-[#466FF6]' : 'bg-[#B8CBEE]'
                    }`}
                    style={{ width: level.size, height: level.size }}
                  >
                    <div
                      className={`rounded-full ${level.highlight ? 'bg-white' : 'bg-[#466FF6]'}`}
                      style={{ width: 10, height: 10 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dashed connectors — single SVG spanning full width */}
            <div className="px-6 -mt-10 mb-2 pointer-events-none">
              <DashedWave />
            </div>

            {/* Labels */}
            <div className="flex justify-between mt-2">
              {levels.map((level) => (
                <div key={level.label} className="flex-1 text-center">
                  <span className="text-[11px] font-sans font-medium text-[#6B7D9E]">{level.label}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-sans font-black text-[#466FF6] mt-6">
              Same system. Same coaches. Continuous thread.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
