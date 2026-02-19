import { TrendingUp, Users, Zap, Heart } from 'lucide-react';

export function BoonScaleDashboard() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://storage.googleapis.com/boon-public-assets/Icon_Blue.png"
              alt="Boon"
              className="w-8 h-8"
            />
            <span className="text-sm text-slate-600 font-sans">
              Scale Dashboard
            </span>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 font-sans">Q1 2026 Cohort</p>
            <p className="text-sm text-slate-900 font-sans">43 Active Participants</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-8">
        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-600 font-sans">Adoption Rate</p>
                <p className="text-xs text-green-600 font-sans">+1.8% from last month</p>
              </div>
            </div>
            <div className="text-4xl text-blue-600 mb-1 font-serif font-bold">32.3%</div>
            <p className="text-xs text-slate-600 font-sans">of eligible employees</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-600 font-sans">Avg Engagement</p>
                <p className="text-xs text-green-600 font-sans">+0.4 sessions/user</p>
              </div>
            </div>
            <div className="text-4xl text-purple-600 mb-1 font-serif font-bold">11.9</div>
            <p className="text-xs text-slate-600 font-sans">sessions per user</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-600 font-sans">Net Promoter Score</p>
                <p className="text-xs text-green-600 font-sans">Excellent</p>
              </div>
            </div>
            <div className="text-4xl text-green-600 mb-1 font-serif font-bold">+94</div>
            <p className="text-xs text-slate-600 font-sans">90 total responses</p>
          </div>
        </div>

        {/* Wellbeing Impact */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-slate-700" />
              <h3 className="text-xl font-serif">Wellbeing Impact</h3>
            </div>
            <div className="bg-slate-100 border border-slate-300 rounded-full px-3 py-1">
              <span className="text-xs text-slate-700 font-sans">Last 90 days</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 font-sans mb-4">
            Comparing baseline (welcome survey) to post-session feedback
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Job Satisfaction', baseline: '7.3', current: '8.3', change: '+15%' },
              { label: 'Productivity', baseline: '7.3', current: '8.6', change: '+17%' },
              { label: 'Work-Life Balance', baseline: '6.8', current: '7.6', change: '+11%' },
            ].map((metric) => (
              <div key={metric.label} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-xs text-slate-600 font-sans mb-3">{metric.label}</p>
                <div className="flex items-end gap-3 mb-2">
                  <div className="text-center">
                    <div className="text-2xl text-slate-400 mb-1 font-serif font-semibold">{metric.baseline}</div>
                    <p className="text-xs text-slate-500 font-sans">Baseline</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mb-2">
                    <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="text-center">
                    <div className="text-2xl text-slate-900 mb-1 font-serif font-semibold">{metric.current}</div>
                    <p className="text-xs text-slate-500 font-sans">Current</p>
                  </div>
                </div>
                <div className="bg-green-100 border border-green-300 rounded px-2 py-1 inline-flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-700" />
                  <span className="text-xs text-green-700 font-sans">{metric.change} change</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Coaching Themes */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-serif">Top Coaching Themes</h3>
            <div className="bg-slate-100 border border-slate-300 rounded-full px-3 py-1">
              <span className="text-xs text-slate-700 font-sans">Last 90 days</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Leadership & Management', pct: 57, color: 'bg-blue-500' },
              { name: 'Mental Well-being', pct: 55, color: 'bg-purple-500' },
              { name: 'Communication', pct: 28, color: 'bg-green-500' },
            ].map((theme) => (
              <div key={theme.name}>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-sm text-slate-700 font-sans">{theme.name}</span>
                  <span className="text-xs text-slate-500 font-sans">{theme.pct}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className={`${theme.color} rounded-full h-2`} style={{ width: `${theme.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
