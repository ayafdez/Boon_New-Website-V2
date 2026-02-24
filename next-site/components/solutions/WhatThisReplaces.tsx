interface WhatThisReplacesProps {
  productName: string;
  headline: string;
  bodyText: string;
}

export function WhatThisReplaces({ productName, headline, bodyText }: WhatThisReplacesProps) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-emerald-50/50 border-l-4 border-emerald-400 rounded-[48px] p-12 md:p-16">
          <p className="text-emerald-600 font-extrabold text-[10px] tracking-widest uppercase mb-6">
            What {productName} Replaces
          </p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9] mb-8">
            {headline}
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">
            {bodyText}
          </p>
        </div>
      </div>
    </section>
  );
}
