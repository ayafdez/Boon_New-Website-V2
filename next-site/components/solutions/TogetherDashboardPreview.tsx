import { Users, Heart, TrendingUp, Target, CheckCircle2, Circle, Sparkles, Handshake, Globe, Rocket, type LucideIcon } from 'lucide-react';

const SESSIONS = [
  { number: 1, title: 'Kickoff Workshop', completed: true },
  { number: 2, title: 'Group Coaching 1', completed: true },
  { number: 3, title: 'Skills Workshop', completed: true },
  { number: 4, title: 'Group Coaching 2', completed: true },
  { number: 5, title: 'Advanced Skills', completed: false },
  { number: 6, title: 'Closing & Integration', completed: false },
];

const THEMES: { Icon: LucideIcon; text: string; priority: 'high' | 'medium' }[] = [
  { Icon: Target, text: 'Need for clearer strategic direction from leadership', priority: 'high' },
  { Icon: Handshake, text: 'Cross-functional collaboration barriers across silos', priority: 'high' },
  { Icon: TrendingUp, text: 'Managing rapid growth while maintaining culture', priority: 'medium' },
  { Icon: Globe, text: 'Remote/hybrid team communication challenges', priority: 'medium' },
  { Icon: Rocket, text: 'Career path visibility and development opportunities', priority: 'medium' },
];

const IMPACT_METRICS = [
  { label: 'Team Alignment', before: 3.2, after: 4.1, change: 28 },
  { label: 'Psychological Safety', before: 3.8, after: 4.3, change: 13 },
  { label: 'Strategic Clarity', before: 2.9, after: 3.8, change: 31 },
  { label: 'Cross-Team Collaboration', before: 3.1, after: 3.9, change: 26 },
];

export function TogetherDashboardPreview() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
      {/* Header */}
      <div className="p-4 md:p-8 border-b border-slate-200 bg-[#F0F3F7]">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-2xl font-bold text-[#2E353D] mb-1">
              Ascend Leadership Development
            </h3>
            <p className="text-sm text-slate-500">
              Sep 30, 2024 - Mar 30, 2025 &middot; 6-Month Cohort Program
            </p>
          </div>
          <div className="px-4 py-2 rounded-full bg-[#FFC969]/15">
            <span className="text-sm font-bold text-amber-600">
              In Progress
            </span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 md:p-8 border-b border-slate-100">
        <div className="text-center">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-[#466FF6]/10">
            <Users className="w-6 h-6 text-[#466FF6]" />
          </div>
          <div className="text-3xl font-bold text-[#2E353D] mb-1">24</div>
          <p className="text-xs text-slate-500">Participants</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-[#6CD893]/10">
            <Heart className="w-6 h-6 text-[#6CD893]" />
          </div>
          <div className="text-3xl font-bold text-[#2E353D] mb-1">94%</div>
          <p className="text-xs text-slate-500">Avg Satisfaction</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-[#FFC969]/10">
            <TrendingUp className="w-6 h-6 text-[#FFC969]" />
          </div>
          <div className="text-3xl font-bold text-[#2E353D] mb-1">89%</div>
          <p className="text-xs text-slate-500">Avg Attendance</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-[#C47ACC]/10">
            <Target className="w-6 h-6 text-[#C47ACC]" />
          </div>
          <div className="text-3xl font-bold text-[#2E353D] mb-1">4/6</div>
          <p className="text-xs text-slate-500">Sessions Complete</p>
        </div>
      </div>

      {/* Session Progress */}
      <div className="p-4 md:p-8 border-b border-slate-100 bg-[#FAFBFC]">
        <h4 className="text-sm uppercase tracking-wider font-bold text-slate-500 mb-4">
          Program Progress
        </h4>
        <div className="grid grid-cols-3 sm:flex sm:items-center gap-3">
          {SESSIONS.map((session) => (
            <div key={session.number} className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {session.completed ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6CD893]" />
                ) : (
                  <Circle className="w-5 h-5 shrink-0 text-slate-300" />
                )}
                <span className={`text-xs ${session.completed ? 'font-semibold text-[#2E353D]' : 'font-normal text-slate-400'}`}>
                  Session {session.number}
                </span>
              </div>
              <div className={`h-2 rounded-full ${session.completed ? 'bg-[#6CD893]' : 'bg-slate-200'}`} />
              <p className="text-xs mt-1 text-slate-500">
                {session.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Themes Surfacing */}
      <div className="p-4 md:p-8 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#FFC969]">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#2E353D]">
              Themes Surfacing
            </h4>
            <p className="text-sm text-slate-500">
              AI-generated insights from session feedback
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {THEMES.map((theme) => (
            <div
              key={theme.text}
              className={`flex items-start gap-3 p-4 rounded-lg transition-all hover:shadow-md ${
                theme.priority === 'high' ? 'bg-[#FFC969]/[0.08]' : 'bg-slate-50'
              }`}
            >
              <theme.Icon className={`w-5 h-5 shrink-0 mt-0.5 ${theme.priority === 'high' ? 'text-[#D97706]' : 'text-slate-400'}`} />
              <div className="flex-1">
                <p className="text-base text-[#2E353D]">{theme.text}</p>
              </div>
              {theme.priority === 'high' && (
                <span className="text-xs px-2 py-1 rounded-full shrink-0 bg-[#FFC969] font-bold text-amber-900">
                  High Priority
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Impact Measurement */}
      <div className="p-4 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#6CD893]/15">
            <TrendingUp className="w-6 h-6 text-[#6CD893]" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#2E353D]">
              Measured Impact
            </h4>
            <p className="text-sm text-slate-500">
              Pre vs Post program assessment
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {IMPACT_METRICS.map((metric) => (
            <div key={metric.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-[#2E353D]">
                  {metric.label}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-500">
                    {metric.before.toFixed(1)} → {metric.after.toFixed(1)}
                  </span>
                  <span className="text-sm px-2 py-1 rounded-full bg-[#6CD893]/15 font-bold text-emerald-600">
                    +{metric.change}%
                  </span>
                </div>
              </div>
              <div className="relative h-2 rounded-full bg-slate-200">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#6CD893] to-[#FFC969]"
                  style={{ width: `${(metric.after / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
