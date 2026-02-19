import Link from 'next/link';
import Image from 'next/image';

interface Benefit {
  title: string;
  desc: string;
}

interface BoonDifferenceProps {
  accentColor: string;
  overline?: string;
  headline: string;
  bodyText: string;
  benefits: Benefit[];
  ctaText: string;
  ctaHref?: string;
}

export function BoonDifference({
  accentColor,
  overline = 'The Boon Difference',
  headline,
  bodyText,
  benefits,
  ctaText,
  ctaHref = '/demo',
}: BoonDifferenceProps) {
  return (
    <section
      className="py-32 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden"
      style={{ backgroundColor: accentColor }}
    >
      <Image
        src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png"
        width={800}
        height={800}
        className="absolute -bottom-32 -right-32 w-1/2 opacity-[0.12] pointer-events-none select-none z-0"
        alt=""
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-24 items-center relative z-10">
        <div className="grid md:grid-cols-2 gap-y-20 gap-x-16 border-t border-white/20 pt-20">
          {benefits.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-black mb-6">{item.title}</h3>
              <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[#4CD995] font-black text-[10px] tracking-widest uppercase mb-6">
            {overline}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight lg:leading-[0.9] tracking-tighter mb-10">
            {headline}
          </h2>
          <p className="text-xl text-white/70 font-medium mb-12 leading-relaxed">
            {bodyText}
          </p>
          {ctaHref.startsWith('http') ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-2xl"
              style={{ color: accentColor }}
            >
              {ctaText}
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="inline-block bg-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-2xl"
              style={{ color: accentColor }}
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
