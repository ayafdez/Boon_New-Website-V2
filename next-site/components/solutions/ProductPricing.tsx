import Link from 'next/link';

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#4CD995]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

interface PricingPoint {
  title: string;
  description: string;
}

interface ProductPricingProps {
  pricingPoints: PricingPoint[];
  ctaText?: string;
  ctaHref?: string;
  bottomLine?: string;
  bottomSubline?: string;
  accentColor?: string;
}

export function ProductPricing({
  pricingPoints,
  ctaText = 'Get a Quote',
  ctaHref = '/demo',
  bottomLine = 'No upfront fees.',
  bottomSubline = 'Launch in under 1 week',
  accentColor = '#466FF6',
}: ProductPricingProps) {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <p className="font-black text-[10px] tracking-widest uppercase mb-6" style={{ color: accentColor }}>
          Modern Pricing
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#2E353D] tracking-tighter leading-tight mb-8">
          Designed to fit real budgets.
        </h2>
        <p className="text-xl text-gray-500 font-medium leading-relaxed">
          Transparent pricing that works for people leaders and finance teams.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 lg:p-20 rounded-[32px] md:rounded-[80px] shadow-sm relative overflow-hidden">
        <div className="space-y-12 mb-16 relative z-10">
          {pricingPoints.map((item) => (
            <div key={item.title} className="flex gap-8">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6F8F0] flex items-center justify-center">
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-gray-50 gap-8 relative z-10">
          <div className="text-left">
            <p className="text-3xl font-black text-[#2E353D]">{bottomLine}</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">
              {bottomSubline}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl transition-all hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
