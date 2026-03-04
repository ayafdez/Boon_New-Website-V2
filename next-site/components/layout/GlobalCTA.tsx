import Link from 'next/link';

export function GlobalCTA() {
  return (
    <section
      className="py-24 md:py-48 px-6 text-center relative overflow-hidden"
      style={{ background: 'radial-gradient(rgb(68, 102, 221) 0%, rgb(51, 85, 204) 35%, rgb(31, 45, 93) 65%, rgb(17, 24, 39) 100%)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[0.95] mb-8">
          <span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-2">
            <span>Built to help people</span>
            <span className="inline-flex items-center">
              {[
                'https://storage.googleapis.com/boon-public-assets/lisa%20s.jpeg',
                'https://storage.googleapis.com/boon-public-assets/hamy.jpg',
                'https://storage.googleapis.com/boon-public-assets/nick.png',
              ].map((src, i) => (
                <span
                  key={i}
                  className="inline-block rounded-full overflow-hidden border-2 border-white/30"
                  style={{ width: 48, height: 48, marginLeft: i === 0 ? 0 : -12 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </span>
              ))}
            </span>
          </span>

          <span className="block mb-2">and teams</span>

          <span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="font-serif italic font-normal">actually grow.</span>
            <span className="inline-flex items-center">
              {[
                'https://storage.googleapis.com/boon-public-assets/amykellylauer.jpg',
                'https://storage.googleapis.com/boon-public-assets/Olga%20Volgin_New.png',
              ].map((src, i) => (
                <span
                  key={i}
                  className="inline-block rounded-full overflow-hidden border-2 border-white/30"
                  style={{ width: 48, height: 48, marginLeft: i === 0 ? 0 : -12 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </span>
              ))}
            </span>
          </span>
        </h2>

        <p className="text-base md:text-lg text-white/60 font-body font-medium mb-12 max-w-lg mx-auto leading-relaxed">
          Boon delivers leadership infrastructure designed around real human behavior. Ready for a better leadership system? Get in touch today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/demo"
            className="bg-boon-coral text-white px-8 py-4 rounded-xl font-sans font-bold text-base shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            Book a Strategy Call
          </Link>
          <Link
            href="/solutions"
            className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-sans font-bold text-base hover:bg-white/15 transition-all"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
