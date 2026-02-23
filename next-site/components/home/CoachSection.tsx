import Image from 'next/image';

const FEATURED_COACHES = [
  {
    name: 'Amy Kelly Lauer',
    title: 'FORMER SVP/GM AT SEPHORA',
    details: 'Old Navy, Banana Republic, Gap',
    quote: "I help operators stop carrying decisions they shouldn't have to make alone.",
    img: 'https://storage.googleapis.com/boon-public-assets/amykellylauer.jpg',
  },
  {
    name: 'Colin Cosgrove',
    title: 'FORMER HEAD OF COMPLIANCE AT GOOGLE',
    details: '11 years at Google',
    quote: 'I coach GTM leaders to scale without losing their human edge.',
    img: 'https://storage.googleapis.com/boon-public-assets/Colin%20Cosgrove.png',
  },
  {
    name: 'Olga Volgin',
    title: 'PRINCIPAL ENG MANAGER AT MICROSOFT',
    details: '20 years in Azure UX',
    quote: 'I coach leaders promoted for results who were never taught how to lead people.',
    img: 'https://storage.googleapis.com/boon-public-assets/Olga%20Volgin_New.png',
  },
];

export function CoachSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-boon-off-white via-white to-boon-light-blue/20"></div>

      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-boon-soft-coral/20 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label-text text-[10px] text-boon-blue mb-8">
            Boon&apos;s Coaching Bench
          </p>
          <h2 className="font-sans text-2xl md:text-4xl lg:text-[44px] font-bold text-boon-charcoal mb-8 tracking-tight leading-[0.9]">
            Coaches who&apos;ve done the <span className="font-serif italic text-boon-blue">job before</span>.
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-body font-medium leading-relaxed max-w-4xl mx-auto">
            Boon matches your people with coaches who&apos;ve done the job: former execs, functional leaders, and operators who understand the decisions your team is actually facing.
          </p>
        </div>

        {/* Coaches Label */}
        <p className="label-text text-[10px] text-gray-400 text-center mb-10">
          A Few of Our Operators
        </p>

        {/* Coach Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {FEATURED_COACHES.map((coach, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-5 md:p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square rounded-2xl bg-gray-100 mb-6 overflow-hidden relative">
                <Image
                  src={coach.img}
                  alt={coach.name}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover"
                />
              </div>
              <h4 className="font-sans text-2xl font-bold text-boon-charcoal mb-1">{coach.name}</h4>
              <p className="label-text text-xs text-boon-blue mb-1">
                {coach.title}
              </p>
              <p className="text-xs font-body text-gray-400 mb-4">{coach.details}</p>
              <p className="text-gray-600 text-sm font-serif italic leading-relaxed">
                &quot;{coach.quote}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <p className="text-center text-gray-500 font-body font-medium">
          Vetted and matched so that every coach brings relevant operational experience to the table.
        </p>
      </div>
    </section>
  );
}
