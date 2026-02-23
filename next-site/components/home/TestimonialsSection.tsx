import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    title: 'Boon is a Game Changer',
    quote: 'My coach helps me stay accountable and creates space for meaningful conversations around what matters most. As CPO, I\'m proud to offer Boon to our employees. It\'s consistently one of our most appreciated benefits.',
    name: 'Lisa S.',
    role: 'Chief People Officer, Energage',
    headshot: 'https://storage.googleapis.com/boon-public-assets/lisa%20s.jpeg',
    highlight: 'Most appreciated benefit',
  },
  {
    title: 'Truly Transformative',
    quote: 'I\'ve worked with my coach for almost two years and it\'s been truly transformative. Her thoughtful questions push me to reflect deeply and practice new ways of leading. Coaching has helped me discover insights that continue to shape both my professional and personal life.',
    name: 'HaMy V.',
    role: 'Chief Operating Officer, Teaching Lab',
    headshot: 'https://storage.googleapis.com/boon-public-assets/hamy.jpg',
    highlight: 'Deep, lasting impact',
  },
  {
    title: 'Seamless, Supportive, and Strategic',
    quote: 'Boon has quickly become a core pillar of our total rewards package. Support feels less like a vendor and more like a trusted thought partner. I\'ve built a strong partnership with my own coach through dozens of sessions that are consistently authentic, insightful, and transformative.',
    name: 'Nick D.',
    role: 'HR Director, OpenUp Resources',
    headshot: 'https://storage.googleapis.com/boon-public-assets/nick.png',
    highlight: 'Core to total rewards',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section section-py bg-white">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-boon-off-white border border-slate-200">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-boon-coral" />
                ))}
              </div>
              <span className="text-sm font-body font-bold text-boon-charcoal ml-2">
                5.0 on G2
              </span>
            </div>
          </div>

          <h2 className="font-sans text-3xl md:text-5xl lg:text-[74px] font-bold tracking-tight leading-[0.95] md:leading-[0.9] text-boon-charcoal mb-6">
            Don&apos;t just take <span className="font-serif italic text-boon-blue">our word</span> for it
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-body font-medium max-w-3xl mx-auto">
            See what leaders are saying about their experience with Boon
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3col">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col p-6 md:p-8 rounded-2xl bg-boon-off-white border border-slate-200 transition-all hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-current text-boon-coral" />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-sans font-bold text-boon-charcoal leading-tight mb-4">
                {testimonial.title}
              </h3>

              {/* Quote */}
              <div className="flex-1 mb-6">
                <p className="text-sm font-body text-slate-600 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Highlight Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-semibold text-boon-blue bg-boon-blue/10">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Reviewer Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <Image
                  src={testimonial.headshot}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-body font-semibold text-boon-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-xs font-body text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
