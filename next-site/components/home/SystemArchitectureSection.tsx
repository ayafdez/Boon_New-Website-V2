import Link from 'next/link';

const SYSTEM_ICONS = {
  SCALE: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  GROW: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  EXEC: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  TOGETHER: (
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const systemItems = [
  {
    id: 'scale',
    name: 'SCALE',
    icon: SYSTEM_ICONS.SCALE,
    desc: '1:1 coaching for everyone—not just execs.',
    color: '#466FF6', // boon-blue
  },
  {
    id: 'grow',
    name: 'GROW',
    icon: SYSTEM_ICONS.GROW,
    desc: 'Cohort-based development for new and rising managers.',
    color: '#FF6D6A', // boon-coral
  },
  {
    id: 'exec',
    name: 'EXEC',
    icon: SYSTEM_ICONS.EXEC,
    desc: 'Strategic sparring for executive leadership.',
    color: '#2E353D', // boon-charcoal
  },
  {
    id: 'together',
    name: 'TOGETHER',
    icon: SYSTEM_ICONS.TOGETHER,
    desc: 'Team sessions that build shared language and capability.',
    color: '#FFC969', // boon-gold
  },
];

export function SystemArchitectureSection() {
  return (
    <section className="py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-boon-light-blue/10 to-boon-soft-coral/10"></div>

      {/* Decorative gradient blob */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-boon-blue/10 to-boon-coral/10 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-6xl mx-auto">
          {/* Section label - H6 */}
          <h6 className="label-text text-[10px] text-boon-blue mb-8">
            The System Architecture
          </h6>
          
          {/* Main section heading - H2 */}
          <h2 className="font-sans text-6xl md:text-[110px] font-bold text-boon-charcoal mb-12 tracking-tight leading-[0.9]">
            One leadership system. <br />
            <span className="font-serif italic">Not four disconnected programs.</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-body font-medium text-gray-500 leading-relaxed max-w-4xl mx-auto">
            Boon unifies coaching, manager development, executive support, and shared capability into a
            single system designed to compound as organizations scale.
          </h6>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {systemItems.map((item) => (
            <Link
              key={item.id}
              href={`/solutions/${item.id}`}
              className="p-14 bg-boon-off-white rounded-[35px] text-left border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all h-full flex flex-col justify-between group overflow-hidden relative"
            >
              <div
                className="absolute top-10 left-14 w-10 h-[2px]"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="pt-6">
                <div className="text-boon-charcoal mb-12 group-hover:scale-110 group-hover:text-boon-blue transition-all origin-left">
                  {item.icon}
                </div>
                {/* Card title - H3 */}
                <h3 className="font-sans text-3xl font-bold mb-3">
                  Boon <span style={{ color: item.color }}>{item.name}</span>
                </h3>
                <p className="text-gray-500 font-body font-medium text-base leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-16 flex items-center gap-2 label-text text-[10px] text-gray-300 group-hover:text-boon-blue transition-colors">
                Explore Pillar <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
