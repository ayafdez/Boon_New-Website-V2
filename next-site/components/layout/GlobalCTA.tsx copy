import Link from 'next/link';

const COACH_AVATARS = [
  { src: 'https://randomuser.me/api/portraits/men/32.jpg', alt: 'Boon coach' },
  { src: 'https://randomuser.me/api/portraits/women/44.jpg', alt: 'Boon coach' },
  { src: 'https://randomuser.me/api/portraits/men/76.jpg', alt: 'Boon coach' },
];

export function GlobalCTA() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 text-white text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1e2f52 0%, #1A253B 50%, #162040 100%)' }}
    >
      {/* Grid line pattern — matches homepage hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blue glow — top right */}
      <div
        className="absolute top-0 right-[10%] w-[45%] h-[70%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.28) 0%, rgba(70, 111, 246, 0.08) 50%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Coral glow — bottom left */}
      <div
        className="absolute bottom-0 left-[5%] w-[40%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 109, 106, 0.2) 0%, rgba(255, 109, 106, 0.06) 50%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Headline with inline avatars */}
        <h2 className="font-sans text-3xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.05] mb-6">
          Built for how people{' '}
          <span className="inline-flex items-center gap-3 whitespace-nowrap">
            <span className="font-serif italic text-white">actually grow.</span>
            {/* Overlapping coach avatars */}
            <span className="inline-flex items-center -space-x-3 ml-1 align-middle">
              {COACH_AVATARS.map((avatar, i) => (
                <span
                  key={i}
                  className="relative inline-block rounded-full overflow-hidden border-2 border-[#1A253B]"
                  style={{
                    width: 48,
                    height: 48,
                    zIndex: COACH_AVATARS.length - i,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </span>
              ))}
            </span>
          </span>
        </h2>

        <p className="text-base md:text-lg text-white/65 font-body font-medium leading-relaxed max-w-xl mx-auto mb-12">
          Boon is leadership infrastructure designed around human behavior, not tools or programs. So growth holds up as organizations scale.
        </p>

        <Link
          href="/demo"
          className="inline-block bg-boon-coral text-white px-8 py-4 rounded-xl font-sans font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-boon-coral/30"
        >
          Schedule a Conversation
        </Link>

      </div>
    </section>
  );
}
