import Image from 'next/image';

interface ProductProofProps {
  overline: string;
  headline: React.ReactNode;
  bodyText: string;
  images: { src: string; alt: string }[];
  accentColor?: string;
}

export function ProductProof({
  overline,
  headline,
  bodyText,
  images,
  accentColor = '#466FF6',
}: ProductProofProps) {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-center">
          <div>
            <p
              className="font-extrabold text-[10px] tracking-widest uppercase mb-8"
              style={{ color: accentColor }}
            >
              {overline}
            </p>
            <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9] mb-8">
              {headline}
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
              {bodyText}
            </p>
          </div>
          <div className="space-y-8">
            {images.map((img) => (
              <div key={img.src} className="rounded-[48px] overflow-hidden bg-[#F0F3F7] shadow-lg">
                <Image
                  src={img.src}
                  width={800}
                  height={500}
                  alt={img.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
