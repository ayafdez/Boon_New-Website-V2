import Link from 'next/link';
import Image from 'next/image';

interface ProductHeroProps {
  productName: string;
  accentColor: string;
  accentBg: string;
  headline: React.ReactNode;
  subtitle: string;
  tagline?: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  heroImage: string;
  heroImageAlt: string;
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  darkMode?: boolean;
}

export function ProductHero({
  productName,
  accentColor,
  accentBg,
  headline,
  subtitle,
  tagline,
  ctaPrimary,
  ctaSecondary,
  heroImage,
  heroImageAlt,
  badgeText,
  badgeIcon,
  darkMode = false,
}: ProductHeroProps) {
  return (
    <section
      className={`pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden ${
        darkMode ? 'bg-boon-navy' : ''
      }`}
    >
      {!darkMode && (
        <div className="absolute inset-0 bg-gradient-to-br from-boon-light-blue/30 via-white to-boon-soft-coral/15"></div>
      )}

      {/* Gradient blob - accent (top right) */}
      <div
        className="absolute -top-[10%] -right-[10%] w-[45%] h-[60%] pointer-events-none"
        style={{
          background: darkMode
            ? `radial-gradient(ellipse at center, ${accentColor}59 0%, ${accentColor}26 30%, transparent 70%)`
            : `radial-gradient(ellipse at center, ${accentColor}40 0%, ${accentColor}18 30%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      ></div>

      {/* Gradient blob - secondary (bottom left) */}
      <div
        className="absolute -bottom-[15%] -left-[10%] w-[40%] h-[50%] pointer-events-none"
        style={{
          background: darkMode
            ? `radial-gradient(ellipse at center, ${accentColor}40 0%, ${accentColor}1A 30%, transparent 70%)`
            : 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.25) 0%, rgba(70, 111, 246, 0.1) 30%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      ></div>

      {darkMode && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${accentColor}1F 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
          }}
        ></div>
      )}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-center relative z-10">
        <div>
          {productName && (
            <div
              className={`inline-flex items-center gap-2 text-[10px] tracking-widest font-extrabold px-4 py-2 rounded-full mb-10 uppercase ${
                darkMode
                  ? 'bg-white/10 text-white border border-white/5 text-[13px] tracking-[0.25em] px-10 py-5 mb-16'
                  : `border`
              }`}
              style={
                !darkMode
                  ? { backgroundColor: `${accentBg}`, color: accentColor, borderColor: `${accentColor}20` }
                  : undefined
              }
            >
              {!darkMode && (
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></span>
              )}
              {productName}
            </div>
          )}
          <h1
            className={`font-sans text-4xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[0.9] mb-10 max-w-5xl ${
              darkMode ? 'text-white' : 'text-[#2E353D]'
            }`}
          >
            {headline}
          </h1>
          <p
            className={`text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mb-4 ${
              darkMode ? 'text-white/40' : 'text-gray-500'
            }`}
          >
            {subtitle}
          </p>
          {tagline && (
            <p
              className={`text-lg font-medium italic leading-relaxed mb-12 max-w-xl ${
                darkMode ? 'text-white/30' : 'text-gray-400'
              }`}
            >
              {tagline}
            </p>
          )}
          {!tagline && <div className="mb-12"></div>}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href={ctaPrimary.href}
              className="px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg text-center text-white"
              style={{ backgroundColor: accentColor }}
            >
              {ctaPrimary.text}
            </Link>
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className={`border px-8 py-4 rounded-xl font-bold text-base transition-all text-center ${
                  darkMode
                    ? 'border-white/20 text-white hover:bg-white/5'
                    : 'border-gray-100 text-[#2E353D] hover:bg-gray-50'
                }`}
              >
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
        <div className="relative">
          <div
            className={`rounded-[80px] overflow-hidden shadow-2xl relative ${
              darkMode ? 'border border-white/5' : ''
            }`}
          >
            <Image
              src={heroImage}
              width={600}
              height={600}
              alt={heroImageAlt}
              className={`w-full h-full object-cover aspect-square ${
                darkMode ? 'opacity-70 grayscale hover:grayscale-0 transition-all duration-1000' : ''
              }`}
            />
            {darkMode && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E353D] via-transparent to-transparent"></div>
            )}
          </div>
          {badgeText && (
            <div className="absolute top-8 right-0 md:-right-16">
              <div className="bg-white/95 backdrop-blur-sm p-5 rounded-3xl shadow-2xl flex items-start gap-4 max-w-[320px]">
                {badgeIcon}
                <div>
                  <p className="text-sm font-bold text-boon-charcoal">{badgeText}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
