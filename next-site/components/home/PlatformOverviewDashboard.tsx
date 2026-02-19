import { TrendingUp, Users, Target, Calendar, Zap, MessageSquare } from 'lucide-react';

export function PlatformOverviewDashboard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 md:px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-boon-blue" />
            <span className="text-base font-sans font-bold text-boon-charcoal">
              Boon Platform
            </span>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-full bg-boon-green/15 font-body font-bold text-emerald-600">
            All Systems Active
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-8 bg-[#F8F9FC]">

        {/* Top Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <Users className="w-5 h-5" />, iconBg: 'bg-boon-blue/10', iconColor: 'text-boon-blue', label: 'Active Engagements', value: '247', valueColor: 'text-boon-blue', change: '+12% this quarter' },
            { icon: <TrendingUp className="w-5 h-5" />, iconBg: 'bg-boon-green/10', iconColor: 'text-boon-green', label: 'Avg NPS Score', value: '+87', valueColor: 'text-boon-green', change: 'Industry leading' },
            { icon: <Target className="w-5 h-5" />, iconBg: 'bg-boon-gold/10', iconColor: 'text-boon-gold', label: 'Competency Lift', value: '+23%', valueColor: 'text-amber-600', change: 'Across all programs' },
            { icon: <Calendar className="w-5 h-5" />, iconBg: 'bg-boon-purple/10', iconColor: 'text-boon-purple', label: 'Sessions This Week', value: '342', valueColor: 'text-boon-purple', change: '89% attendance' },
          ].map((metric, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${metric.iconBg} ${metric.iconColor}`}>
                  {metric.icon}
                </div>
                <p className="text-xs font-body text-slate-500">{metric.label}</p>
              </div>
              <div className={`text-3xl font-sans font-bold mb-1 ${metric.valueColor}`}>
                {metric.value}
              </div>
              <p className="text-xs font-body text-boon-green">{metric.change}</p>
            </div>
          ))}
        </div>

        {/* Product Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              tag: 'EXEC', tagColor: 'text-boon-purple', borderColor: 'border-boon-purple',
              title: 'Executive Coaching',
              icon: <Target className="w-6 h-6" />, iconBg: 'bg-boon-purple/10', iconColor: 'text-boon-purple',
              rows: [
                { label: 'Active executives', value: '24' },
                { label: 'Avg engagement', value: '6 months' },
                { label: 'Decision confidence', value: '+34%', badge: true },
              ],
              footerIcon: <MessageSquare className="w-4 h-4 text-slate-400" />,
              footer: 'Latest: Board prep session with Sarah Chen',
            },
            {
              tag: 'GROW', tagColor: 'text-boon-coral', borderColor: 'border-boon-coral',
              title: 'Leadership Programs',
              icon: <TrendingUp className="w-6 h-6" />, iconBg: 'bg-boon-coral/10', iconColor: 'text-boon-coral',
              rows: [
                { label: 'Current cohort', value: '42 managers' },
                { label: 'Program progress', value: 'Month 4 of 6' },
                { label: 'Competency growth', value: '+28%', badge: true },
              ],
              footerIcon: <Calendar className="w-4 h-4 text-slate-400" />,
              footer: 'Next: Group session on giving feedback',
            },
            {
              tag: 'SCALE', tagColor: 'text-boon-blue', borderColor: 'border-boon-blue',
              title: '1:1 Coaching',
              icon: <Users className="w-6 h-6" />, iconBg: 'bg-boon-blue/10', iconColor: 'text-boon-blue',
              rows: [
                { label: 'Active participants', value: '156' },
                { label: 'Utilization rate', value: '68%' },
                { label: 'Avg sessions/user', value: '11.2', badge: true },
              ],
              footerIcon: <Zap className="w-4 h-4 text-slate-400" />,
              footer: 'Top theme: Career progression clarity',
            },
            {
              tag: 'TOGETHER', tagColor: 'text-amber-600', borderColor: 'border-boon-gold',
              title: 'Team Workshops',
              icon: <Users className="w-6 h-6" />, iconBg: 'bg-boon-gold/10', iconColor: 'text-boon-gold',
              rows: [
                { label: 'Active programs', value: '8 cohorts' },
                { label: 'Total participants', value: '96' },
                { label: 'Team alignment', value: '+31%', badge: true },
              ],
              footerIcon: <MessageSquare className="w-4 h-4 text-slate-400" />,
              footer: 'Upcoming: Post-merger integration workshop',
            },
          ].map((product) => (
            <div key={product.tag} className={`bg-white rounded-xl p-6 border-2 transition-all hover:shadow-lg ${product.borderColor}`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className={`text-xs uppercase tracking-wider mb-1 font-body font-bold ${product.tagColor}`} style={{ letterSpacing: '0.08em' }}>
                    {product.tag}
                  </div>
                  <h3 className="text-lg font-sans font-bold text-boon-charcoal">
                    {product.title}
                  </h3>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${product.iconBg} ${product.iconColor}`}>
                  {product.icon}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {product.rows.map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm font-body text-slate-500">{row.label}</span>
                    {row.badge ? (
                      <span className="text-sm px-2 py-1 rounded-full bg-boon-green/15 font-body font-bold text-emerald-600">
                        {row.value}
                      </span>
                    ) : (
                      <span className="text-sm font-body font-bold text-boon-charcoal">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  {product.footerIcon}
                  <span className="text-xs font-body text-slate-500">{product.footer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Integration Indicator */}
        <div className="mt-6 p-4 rounded-xl border border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-boon-blue flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-body font-bold text-boon-charcoal mb-1">
                Cross-Product Insights Active
              </p>
              <p className="text-xs font-body text-slate-500">
                23 participants using multiple products &bull; Themes syncing across GROW and SCALE &bull; Manager alignment in progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
