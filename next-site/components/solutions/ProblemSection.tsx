import Image from 'next/image';

interface ProblemCard {
  label: string;
  title: string;
  desc: string;
}

interface ProblemSectionProps {
  overline: string;
  headline: React.ReactNode;
  bodyText: string;
  cards: ProblemCard[];
  accentColor?: string;
}

export function ProblemSection({
  overline,
  headline,
  bodyText,
  cards,
  accentColor = '#FF8D80',
}: ProblemSectionProps) {
  return (
    <section className="bg-boon-navy py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Dotted texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
        }}
      ></div>

      {/* Soft gradient glow from bottom-left */}
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${accentColor}33 0%, ${accentColor}1A 40%, transparent 70%)`,
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
          <p
            className="font-extrabold text-[10px] tracking-widest uppercase mb-6"
            style={{ color: accentColor }}
          >
            {overline}
          </p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[0.9] mb-8">
            {headline}
          </h2>
          <div className="space-y-6 text-white/60 text-lg font-medium leading-relaxed max-w-lg">
            <p>{bodyText}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[40px] hover:bg-white/10 transition-all group"
            >
              <div className="mb-8" style={{ color: accentColor }}>
                <div className="w-10 h-10 border-2 border-current rounded-xl flex items-center justify-center font-bold text-xs">
                  {item.label}
                </div>
              </div>
              <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/40 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
