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
        <p className="font-extrabold text-[10px] tracking-widest uppercase mb-6" style={{ color: accentColor }}>
          Modern Pricing
        </p>
        <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9] mb-8">
          Designed to fit real budgets.
        </h2>
        <p className="text-xl text-gray-500 font-medium leading-relaxed">
          Transparent pricing that works for people leaders and finance teams.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 lg:p-20 rounded-[20px] md:rounded-[20px] shadow-sm relative overflow-hidden">
        <div className="space-y-12 mb-16 relative z-10">
          {pricingPoints.map((item) => (
            <div key={item.title} className="flex gap-8">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6F8F0] flex items-center justify-center">
                <CheckIcon />
              </div>
              <div>
                <h3 className="font-sans text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-gray-50 gap-8 relative z-10">
          <div className="text-left">
            <p className="text-3xl font-bold text-boon-charcoal">{bottomLine}</p>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-300">
              {bottomSubline}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: accentColor }}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
