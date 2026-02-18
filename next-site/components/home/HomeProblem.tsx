import Image from 'next/image';

const problems = [
  {
    number: '1',
    label: 'Fragmented',
    headline: "You're managing four vendors for one job.",
    subline: 'No one owns the system.',
    body: 'Organizations stitch together coaching, training, assessments, and wellbeing tools. None of them talk to each other. Progress stalls because responsibility is diffused.',
    quote: '"We have five vendors and still can\'t tell you what\'s working."',
  },
  {
    number: '2',
    label: 'Lopsided',
    headline: 'Executives get coaching. Everyone else gets a workshop and a prayer.',
    subline: 'The middle is carrying the load.',
    body: 'Most solutions are designed for a handful of senior leaders. Managers and emerging leaders — the people actually running the business — get generic training or nothing at all.',
    quote: '"Our top 5% gets coaching. The other 95% gets a workshop link."',
  },
  {
    number: '3',
    label: 'Invisible',
    headline: "Your CEO asks what's changing. You don't have an answer.",
    subline: 'The middle is carrying the load.',
    body: 'HR leaders are asked to defend spend without real insight into behavior change, adoption, or momentum. Data lives in silos. Outcomes are inferred, not observed.',
    quote: '"The board wants ROI. I have engagement scores."',
  },
];

export function HomeProblem() {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-24">
      {/* Background image */}
      <Image
        src="/hp_2sectionbg.png"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="label-text text-[10px] text-[#466FF6] mb-6 tracking-[0.25em]">
            The Problem
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight max-w-3xl">
            Leadership development fails{' '}
            <span className="font-serif italic text-[#466FF6]">
              for three predictable reasons.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.number}
              className={`rounded-[35px] p-8 border border-white/10 flex flex-col gap-6 transition-all duration-300 hover:border-[#466FF6]/40 ${
                i === 0
                  ? 'bg-[#1e2c45]/80 backdrop-blur-sm'
                  : 'bg-[#1a2540]/60 backdrop-blur-sm'
              }`}
            >
              {/* Label row */}
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#466FF6] flex items-center justify-center text-white text-xs font-black font-sans flex-shrink-0">
                  {p.number}
                </span>
                <span className="label-text text-[10px] text-[#466FF6] tracking-[0.2em]">
                  {p.label}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-sans text-xl font-black text-white leading-snug">
                {p.headline}
              </h3>

              {/* Subline */}
              <p className="text-white/40 text-sm font-sans font-medium">
                {p.subline}
              </p>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Body */}
              <p className="text-white/70 text-sm font-sans font-bold leading-relaxed">
                {p.body}
              </p>

              {/* Quote */}
              <blockquote className="border-l-2 border-white/20 pl-4">
                <p className="text-white/40 text-sm font-serif italic leading-relaxed">
                  {p.quote}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
