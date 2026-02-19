import { Target, TrendingUp, Rocket, Users, CheckCircle2 } from 'lucide-react';

export function GrowProgramTimeline() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-4">
          <p className="text-[#FF8D80] font-black text-[10px] tracking-[0.4em] uppercase mb-6">
            What&apos;s Inside
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter mb-4">
            How GROW builds resilient leaders.
          </h2>
          <p className="text-lg text-[#2E353D]/60 font-medium max-w-2xl">
            A continuous loop of coaching, practice, and measurement that changes behavior over time.
          </p>
        </div>

        {/* Metric Badges */}
        <div className="flex flex-wrap gap-3 mb-16">
          <div className="bg-[#F0F3F7] rounded-full px-4 py-2">
            <span className="text-sm font-medium text-[#2E353D]/70">
              Customized to <span className="font-bold text-[#FF8D80]">your org&apos;s goals</span>
            </span>
          </div>
          <div className="bg-[#F0F3F7] rounded-full px-4 py-2">
            <span className="text-sm font-medium text-[#2E353D]/70">
              <span className="font-bold text-[#FF8D80]">+20%</span> competency growth
            </span>
          </div>
          <div className="bg-[#F0F3F7] rounded-full px-4 py-2">
            <span className="text-sm font-medium text-[#2E353D]/70">
              <span className="font-bold text-[#FF8D80]">6</span> month program
            </span>
          </div>
        </div>

        {/* Manager Alignment Banner */}
        <div className="mb-8">
          <div className="bg-[#F0F3F7] border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#466FF6] rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#2E353D]">Optional Manager Alignment</h4>
                <p className="text-xs text-[#2E353D]/50 font-medium">
                  Ensure managers above your cohort understand what&apos;s being developed and how to reinforce new behaviors
                </p>
              </div>
            </div>
            <span className="text-[10px] font-black tracking-widest uppercase text-[#2E353D]/40 bg-white px-3 py-1.5 rounded-full border border-slate-200 flex-shrink-0">
              Optional
            </span>
          </div>
        </div>

        {/* Three Phase Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              accent: '#466FF6',
              accentLight: 'from-blue-50 to-blue-100',
              borderColor: 'border-blue-200',
              icon: <Target className="w-6 h-6 text-white" />,
              phase: 'Foundation',
              range: 'Months 1-2',
              summary: 'Find urgent challenges and align your focus.',
              sessions: [1, 2, 3, 4],
              sessionLabel: 'Sessions 1-4',
              bullets: [
                'Baseline competency assessment',
                'Role-based coach matching',
                'Tackle top 1-2 real challenges',
                'Focus on the "right now" theory',
                'First manager alignment session',
              ],
            },
            {
              accent: '#8B5CF6',
              accentLight: 'from-purple-50 to-purple-100',
              borderColor: 'border-purple-200',
              icon: <TrendingUp className="w-6 h-6 text-white" />,
              phase: 'Development',
              range: 'Months 3-4',
              summary: 'From reactive to proactive growth.',
              sessions: [5, 6, 7, 8],
              sessionLabel: 'Sessions 5-8',
              bullets: [
                'Sessions 5-8 coaching deepens',
                'Group cohort sessions begin',
                'Peer learning surfaces patterns',
                'Manager alignment check-in',
              ],
            },
            {
              accent: '#FF8D80',
              accentLight: 'from-red-50 to-orange-50',
              borderColor: 'border-[#FF8D80]/30',
              icon: <Rocket className="w-6 h-6 text-white" />,
              phase: 'Acceleration',
              range: 'Months 5-6',
              summary: 'New behaviors become the default.',
              sessions: [9, 10, 11, 12],
              sessionLabel: 'Sessions 9-12',
              bullets: [
                'Sessions 9-12 reinforcement',
                'Post-program competency assessment',
                'Final manager alignment session',
                'Cohort-level impact delivered',
              ],
            },
          ].map((card) => (
            <div
              key={card.phase}
              className={`bg-white rounded-2xl border ${card.borderColor} overflow-hidden`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${card.accentLight} p-6 border-b ${card.borderColor}`}>
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: card.accent }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-black tracking-[0.2em] uppercase mb-1"
                      style={{ color: card.accent }}
                    >
                      {card.phase}
                    </p>
                    <p className="text-xl font-black text-[#2E353D]">{card.range}</p>
                  </div>
                </div>
                <p className="text-sm text-[#2E353D]/60 font-medium italic">{card.summary}</p>
                <div className="mt-4 bg-white/80 border border-slate-200 rounded-lg px-3 py-1.5 inline-flex items-center gap-2">
                  <div className="flex gap-1">
                    {card.sessions.map((num) => (
                      <div
                        key={num}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: card.accent }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#2E353D]/60">{card.sessionLabel}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="space-y-3">
                  {card.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: card.accent }}
                      />
                      <span className="text-[14px] text-[#2E353D]/70 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
