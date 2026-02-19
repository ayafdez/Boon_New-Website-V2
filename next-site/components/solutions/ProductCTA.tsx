import Link from 'next/link';
import Image from 'next/image';

interface ProductCTAProps {
  headline: React.ReactNode;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  trustBadges?: string;
  accentBlobColor?: string;
}

export function ProductCTA({
  headline,
  subtitle,
  ctaText = 'Book a Strategy Call',
  ctaHref = '/demo',
  trustBadges,
  accentBlobColor = 'rgba(70, 111, 246, 0.3)',
}: ProductCTAProps) {
  return (
    <section className="bg-boon-navy py-20 md:py-40 px-6 text-white text-center relative overflow-hidden">
      {/* Overlapping gradient blobs */}
      <div
        className="absolute top-[10%] right-[5%] w-[40%] h-[60%] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${accentBlobColor} 0%, ${accentBlobColor.replace(/[\d.]+\)$/, '0.1)')} 40%, transparent 70%)`,
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

      <Image
        src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png"
        width={800}
        height={800}
        className="absolute -bottom-44 -right-44 w-1/2 opacity-[0.12] pointer-events-none select-none z-0"
        alt=""
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-sans text-2xl md:text-4xl lg:text-[84px] font-bold tracking-tight leading-tight lg:leading-[0.85] mb-12">
          {headline}
        </h2>
        <p className="text-xl text-white/70 font-body font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link
          href={ctaHref}
          className="inline-block bg-boon-coral text-white px-8 py-4 md:px-12 md:py-6 rounded-[15px] font-sans font-bold text-lg md:text-lg shadow-2xl shadow-boon-coral/30 hover:scale-105 transition-all"
        >
          {ctaText}
        </Link>
        {trustBadges && (
          <div className="mt-12 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/40">
            {trustBadges}
          </div>
        )}
      </div>
    </section>
  );
}
