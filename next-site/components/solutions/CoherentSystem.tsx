import Link from 'next/link';

interface CoherentSystemProps {
  currentProduct: 'scale' | 'grow' | 'exec' | 'together';
  accentColor: string;
  headline?: string;
  subtitle?: string;
}

const PRODUCTS = [
  { key: 'exec', label: 'Boon EXEC', desc: 'Senior alignment', href: '/solutions/exec' },
  { key: 'grow', label: 'Boon GROW', desc: 'Manager cohort standards', href: '/solutions/grow' },
  { key: 'scale', label: 'Boon SCALE', desc: 'System-wide language', href: '/solutions/scale' },
  { key: 'together', label: 'Boon TOGETHER', desc: 'Collective alignment', href: '/solutions/together' },
];

export function CoherentSystem({ currentProduct, accentColor, headline, subtitle }: CoherentSystemProps) {
  return (
    <section className="py-36 px-6 md:px-12 lg:px-24 bg-boon-navy text-white relative overflow-hidden">
      {/* Dotted texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(70, 111, 246, 0.12) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at right, black 0%, transparent 70%)',
        }}
      ></div>

      {/* Soft gradient glow */}
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${accentColor}26 0%, ${accentColor}14 40%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h3 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.9] mb-8">
          {headline || 'One system. Coherent growth at every level.'}
        </h3>
        <div className="max-w-3xl mx-auto mb-24">
          <p className="text-white/20 text-xl font-medium leading-relaxed mb-6">
            {subtitle || 'Leadership development compounds across levels when it is connected, not fragmented into disconnected tools.'}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {PRODUCTS.filter((p) => p.key !== currentProduct).map((prod, idx, arr) => (
            <div key={prod.key} className="flex items-center gap-6">
              <Link
                href={prod.href}
                className="flex items-center gap-5 text-white/50 font-bold text-[12px] tracking-[0.4em] uppercase hover:text-white/80 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
                {prod.label}
              </Link>
              {idx < arr.length - 1 && (
                <div className="hidden md:flex items-center gap-2 opacity-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <div className="w-8 h-px bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
