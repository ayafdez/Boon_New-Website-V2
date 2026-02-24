'use client';

export function PlatformIntelligence() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-boon-off-white/50 via-white to-white"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="label-text text-[10px] text-boon-blue mb-6">Platform Intelligence</p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold text-boon-charcoal tracking-tight leading-[0.9] mb-6">
            Built into the tools your team already uses.
          </h2>
          <p className="text-lg text-gray-500 font-body font-medium max-w-3xl mx-auto leading-relaxed">
            Real-time development insights, Slack-native nudges, and manager dashboards that surface leadership signal without adding work.
          </p>
        </div>

        {/* UI Mockup Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Growth Areas Card */}
          <div className="bg-boon-off-white rounded-[20px] p-8 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div className="label-text text-[10px] text-gray-400">Growth Areas</div>
              <div className="text-[9px] font-body font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">Live</div>
            </div>
            <div className="space-y-5">
              {[
                { label: 'Confidence in Decision-Making', pct: 85, color: 'bg-boon-blue' },
                { label: 'Navigating Difficult Conversations', pct: 72, color: 'bg-boon-blue' },
                { label: 'Strategic Prioritization', pct: 68, color: 'bg-boon-gold' },
                { label: 'Cross-Functional Influence', pct: 61, color: 'bg-boon-coral' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-body font-semibold text-boon-charcoal">{item.label}</span>
                    <span className="text-xs font-body font-bold text-boon-charcoal">{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-gray-400 font-body font-medium mt-6">
              Anonymized, aggregated across coached population.
            </p>
          </div>

          {/* Slack Integration Cards */}
          <div className="space-y-8">
            {/* Coach Match Notification */}
            <div className="bg-boon-off-white rounded-[20px] p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#4A154B] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                  </svg>
                </div>
                <div className="label-text text-[10px] text-gray-400">Slack Integration</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-boon-blue flex items-center justify-center">
                    <span className="text-white text-[8px] font-body font-bold">B</span>
                  </div>
                  <span className="text-sm font-sans font-bold text-boon-charcoal">New Coach Match</span>
                </div>
                <p className="text-xs text-gray-500 font-body leading-relaxed mb-3">
                  Your coach <span className="font-semibold text-boon-charcoal">Keith Cocking</span> has been matched based on your role and development goals.
                </p>
                <div className="flex gap-2">
                  <span className="text-[9px] font-body font-bold text-boon-blue bg-boon-blue/10 px-3 py-1 rounded-full">View Profile</span>
                  <span className="text-[9px] font-body font-bold text-boon-charcoal bg-gray-100 px-3 py-1 rounded-full">Book First Session</span>
                </div>
              </div>
            </div>

            {/* Action Items Notification */}
            <div className="bg-boon-off-white rounded-[20px] p-8 border border-gray-100 shadow-sm">
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-boon-blue flex items-center justify-center">
                    <span className="text-white text-[8px] font-body font-bold">B</span>
                  </div>
                  <span className="text-sm font-sans font-bold text-boon-charcoal">Action Items from Session</span>
                </div>
                <div className="space-y-3 mb-4">
                  {[
                    'Practice active listening in next 1:1',
                    'Schedule skip-level conversation',
                    'Draft 30-day development plan',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-gray-200 flex-shrink-0"></div>
                      <span className="text-xs text-gray-600 font-body">{item}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[9px] font-body font-semibold text-gray-400">Due: Feb 28</span>
              </div>
            </div>
          </div>

          {/* KPI Dashboard Card */}
          <div className="bg-boon-off-white rounded-[20px] p-8 border border-gray-100 shadow-sm flex flex-col">
            <div className="label-text text-[10px] text-gray-400 mb-8">Manager Dashboard</div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Active Sessions', value: '847', sub: 'this quarter' },
                { label: 'Utilization', value: '73%', sub: 'of available hours' },
                { label: 'Coachee NPS', value: '78', sub: 'rolling 90-day' },
                { label: 'Coach Rating', value: '4.8', sub: 'avg satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
                  <div className="text-2xl font-sans font-bold text-boon-charcoal tracking-tight">{stat.value}</div>
                  <div className="label-text text-[9px] text-boon-blue mt-1">{stat.label}</div>
                  <div className="text-[8px] text-gray-400 font-body font-medium mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 mt-auto">
              <div className="label-text text-[9px] text-gray-400 mb-3">Team Development Trend</div>
              <div className="flex items-end gap-1 h-16">
                {[35, 42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      backgroundColor:
                        i >= 10 ? '#466FF6' : i >= 8 ? 'rgba(70,111,246,0.7)' : 'rgba(70,111,246,0.25)',
                    }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[8px] text-gray-400 font-body font-medium">Jan</span>
                <span className="text-[8px] text-gray-400 font-body font-medium">Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
