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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="label-text text-[10px] text-[#466FF6] mb-6 tracking-[0.25em]">
            Boon&apos;s Coaching Bench
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-black text-[#1A253B] leading-[1.05] tracking-tight mb-6">
            Coaches who&apos;ve{' '}
            <span className="font-serif italic text-[#466FF6]">done the job before.</span>
          </h2>
          <p className="text-base text-gray-500 font-sans font-normal leading-relaxed">
            A Few of Our Operators
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {FEATURED_COACHES.map((coach, idx) => (
            <div key={idx} className="flex flex-col gap-5">
              {/* Photo */}
              <div className="rounded-[35px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src={coach.img}
                  alt={coach.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-sans text-2xl font-black text-[#466FF6] mb-1">
                  {coach.name}
                </h3>
                <p className="label-text text-[10px] text-[#1A253B] tracking-[0.15em] mb-1">
                  {coach.title}
                </p>
                <p className="text-xs font-sans text-gray-400 mb-4">{coach.details}</p>
                <p className="text-[#2E353D] text-sm font-sans font-normal leading-relaxed">
                  &quot;{coach.quote}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <p className="text-[#466FF6] font-sans font-semibold text-sm">
          Vetted and matched so that every coach brings relevant operational experience to the table.
        </p>

      </div>
    </section>
  );
}
