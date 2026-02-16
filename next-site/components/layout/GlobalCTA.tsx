import Link from 'next/link';

export function GlobalCTA() {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-boon-navy text-white text-center relative overflow-hidden">
      {/* Overlapping gradient blobs */}
      <div
        className="absolute top-[10%] right-[5%] w-[40%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(70, 111, 246, 0.3) 0%, rgba(70, 111, 246, 0.1) 40%, transparent 70%)',
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

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-sans text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[0.9]">
          Built for how people <span className="font-serif italic text-boon-coral">actually grow</span>.
        </h2>
        <p className="text-xl mb-16 text-white/70 font-body font-medium max-w-2xl mx-auto leading-relaxed">
          Boon is leadership infrastructure designed around human behavior, not tools or programs.
          So growth holds up as organizations scale.
        </p>
        <Link
          href="/demo"
          className="inline-block bg-boon-coral text-white px-12 py-6 rounded-[15px] font-sans font-bold text-2xl hover:scale-105 transition-all shadow-2xl shadow-boon-coral/30"
        >
          Schedule a Conversation
        </Link>
      </div>
    </section>
  );
}
