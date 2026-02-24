const testimonials = [
  {
    quote: 'One of the things that set Boon apart was how personalized their match process was. Boon was one of the only solutions that truly combined personal and professional development.',
    name: 'Alicia Kiser',
    role: 'EVP of Human Resources, M3 Insurance',
  },
  {
    quote: 'What surprised me most was how coaching connected the dots between personal well-being and professional performance. Employees were not just more productive. They were more present, more collaborative, and more invested in our mission.',
    name: 'Lisa Sordilla',
    role: 'Chief People Officer, Energage',
  },
];

export function SolutionsTestimonials() {
  return (
    <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="label-text text-[10px] text-boon-blue mb-6">What Our Clients Say</p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.9] text-boon-charcoal mb-6">
            Trusted by HR leaders building <span className="font-serif italic text-boon-blue">real cultures</span>.
          </h2>
          <p className="text-base md:text-lg font-body font-medium text-gray-500 max-w-2xl mx-auto">
            See what leaders are saying about their experience with Boon.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-8 rounded-[20px] bg-boon-off-white border border-slate-200 transition-all hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current text-boon-coral" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-base font-body text-slate-600 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="pt-6 border-t border-slate-200">
                <div className="text-sm font-body font-semibold text-boon-charcoal">{t.name}</div>
                <div className="text-xs font-body text-slate-400 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
