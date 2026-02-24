interface TippingPointsProps {
  productName: string;
  accentColor: string;
  items: string[];
}

export function TippingPoints({ productName, accentColor, items }: TippingPointsProps) {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-emerald-400 pl-8 mb-12">
          <p className="text-emerald-600 font-extrabold text-[10px] tracking-widest uppercase mb-4">
            Tipping Points
          </p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9]">
            {productName} is right for you if...
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-[32px] border border-gray-100 flex items-start gap-4"
            >
              <div
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: accentColor }}
              ></div>
              <p className="text-[#2E353D] font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
