import Image from 'next/image';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  headline: string;
  subtitle: string;
  steps: Step[];
  dashboardImage?: string;
  dashboardCaption?: string;
  dashboardElement?: React.ReactNode;
  accentColor?: string;
}

export function HowItWorks({
  headline,
  subtitle,
  steps,
  dashboardImage,
  dashboardCaption,
  dashboardElement,
  accentColor = '#466FF6',
}: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1.5fr] gap-24 items-center">
        <div>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9] mb-4">
            {headline}
          </h2>
          <p className="text-xl text-gray-500 font-medium mb-16">
            {subtitle}
          </p>
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 md:gap-8 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all"
                  style={{
                    borderColor: accentColor,
                    color: accentColor,
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="font-sans text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed max-w-md">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {dashboardElement ? (
          <div className="relative">
            {dashboardElement}
            {dashboardCaption && (
              <p className="text-center text-gray-500 italic font-medium mt-6 text-sm">
                {dashboardCaption}
              </p>
            )}
          </div>
        ) : dashboardImage ? (
          <div className="relative">
            <div className="rounded-[20px] overflow-hidden bg-white shadow-2xl">
              <Image
                src={dashboardImage}
                width={800}
                height={600}
                alt="Product Dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
            {dashboardCaption && (
              <p className="text-center text-gray-500 italic font-medium mt-6 text-sm">
                {dashboardCaption}
              </p>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
