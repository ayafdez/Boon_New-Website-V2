'use client';

import { useState } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────

interface StatCard {
  iconSvg: string;
  iconBg: string;
  label: string;
  value: string;
  sub: string;
  color: string;
}

interface QuadCard {
  tag: string;
  tagColor: string;
  title: string;
  iconSvg: string;
  iconBg: string;
  borderColor: string;
  rows: [string, string, string?][];
  footer: string;
}

interface ProductData {
  color: string;
  iconBg: string;
  badgeText: string;
  badgeBg: string;
  badgeColor: string;
  iconSvg: string;
  pillIndex: number;
  stats: StatCard[];
  cards: QuadCard[];
}

// ── SVG helpers ────────────────────────────────────────────────────────────

const Icons = {
  grid: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  trendUp: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  ),
  bars: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="6" height="18" rx="1"/><rect x="9" y="8" width="6" height="13" rx="1"/><rect x="16" y="13" width="6" height="8" rx="1"/>
    </svg>
  ),
  star: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  users: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  user: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    </svg>
  ),
  calendar: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  clock: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  lock: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  file: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
    </svg>
  ),
  lightning: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  noteSmall: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
    </svg>
  ),
};

// ── Data ───────────────────────────────────────────────────────────────────

const C = {
  blue:   '#466FF6',
  deep:   '#365ABD',
  coral:  '#FF6D6A',
  lCoral: '#FF8D80',
  purple: '#C47ACC',
  gold:   '#FFC969',
  darkGold: '#a37400',
};

const TAB_COLORS = [C.blue, C.blue, C.lCoral, C.purple, C.gold];
const TAB_ICON_BGS = [
  'rgba(70,111,246,0.10)',
  'rgba(70,111,246,0.10)',
  'rgba(255,141,128,0.10)',
  'rgba(196,122,204,0.10)',
  'rgba(255,201,105,0.12)',
];

const TABS = [
  { name: 'Boon Platform', icon: Icons.grid },
  { name: 'Boon SCALE',    icon: Icons.trendUp, desc: '1:1 coaching for everyone, not just execs.' },
  { name: 'Boon GROW',     icon: Icons.bars,    desc: 'Cohort-based development for new and rising managers.' },
  { name: 'Boon EXEC',     icon: Icons.star,    desc: 'Strategic sparring for executive leadership.' },
  { name: 'Boon TOGETHER', icon: Icons.users,   desc: 'Team sessions that build shared language and capability.' },
];

const PRODUCTS: (ProductData | null)[] = [
  null,
  // SCALE
  {
    color: C.blue, iconBg: 'rgba(70,111,246,0.10)',
    badgeText: 'SCALE Active', badgeBg: 'rgba(70,111,246,0.10)', badgeColor: C.blue,
    iconSvg: 'trendUp', pillIndex: 0,
    stats: [
      { iconSvg: 'user',     iconBg: 'rgba(70,111,246,0.10)',  label: 'Active Participants', value: '156',  sub: '+12 this month',  color: C.blue },
      { iconSvg: 'trendUp',  iconBg: 'rgba(54,90,189,0.10)',   label: 'Utilization Rate',    value: '68%',  sub: 'vs 54% avg',      color: C.deep },
      { iconSvg: 'clock',    iconBg: 'rgba(255,201,105,0.18)', label: 'Avg Sessions/User',   value: '11.2', sub: 'This quarter',    color: C.gold },
      { iconSvg: 'calendar', iconBg: 'rgba(196,122,204,0.13)', label: 'Sessions This Week',  value: '89',   sub: '89% attendance',  color: C.purple },
    ],
    cards: [
      { tag: 'SCALE', tagColor: C.blue, title: '1:1 Coaching',      iconSvg: 'user',     iconBg: 'rgba(70,111,246,0.10)', borderColor: 'rgba(70,111,246,0.22)', rows: [['Active participants','156'],['Utilization rate','68%'],['Avg sessions/user','11.2',C.blue]], footer: 'Top theme: Career progression clarity' },
      { tag: 'SCALE', tagColor: C.blue, title: 'Coach Matching',     iconSvg: 'star',     iconBg: 'rgba(70,111,246,0.10)', borderColor: 'rgba(70,111,246,0.22)', rows: [['Match score avg','94%'],['Coach satisfaction','4.8/5'],['Rematches','+3',C.blue]], footer: '28 coaches active this month' },
      { tag: 'SCALE', tagColor: C.blue, title: 'Session Insights',   iconSvg: 'clock',    iconBg: 'rgba(70,111,246,0.10)', borderColor: 'rgba(70,111,246,0.22)', rows: [['Avg duration','48 min'],['Goal completion','71%'],['Sentiment lift','+22%',C.blue]], footer: 'Top theme: Career progression clarity' },
      { tag: 'SCALE', tagColor: C.blue, title: 'Engagement Trends',  iconSvg: 'trendUp',  iconBg: 'rgba(70,111,246,0.10)', borderColor: 'rgba(70,111,246,0.22)', rows: [['Weekly bookings','34'],['Month growth','+18%'],['Repeat users','82%',C.blue]], footer: 'Booking rate up vs last month' },
    ],
  },
  // GROW
  {
    color: C.lCoral, iconBg: 'rgba(255,141,128,0.10)',
    badgeText: 'GROW Active', badgeBg: 'rgba(255,141,128,0.12)', badgeColor: C.lCoral,
    iconSvg: 'bars', pillIndex: 1,
    stats: [
      { iconSvg: 'user',     iconBg: 'rgba(255,141,128,0.12)', label: 'Active Cohorts',       value: '4',      sub: '+2 this quarter', color: C.lCoral },
      { iconSvg: 'bars',     iconBg: 'rgba(255,141,128,0.12)', label: 'Manager Confidence',   value: '+31%',   sub: 'vs baseline',     color: C.coral },
      { iconSvg: 'clock',    iconBg: 'rgba(255,201,105,0.18)', label: 'Sessions Completed',   value: '189',    sub: 'This cohort',     color: C.gold },
      { iconSvg: 'calendar', iconBg: 'rgba(196,122,204,0.13)', label: 'Cohort Progress',      value: 'Mo 4/6', sub: 'On track',        color: C.purple },
    ],
    cards: [
      { tag: 'GROW', tagColor: C.lCoral, title: 'Current Cohort',   iconSvg: 'bars',     iconBg: 'rgba(255,141,128,0.12)', borderColor: 'rgba(255,141,128,0.28)', rows: [['Cohort size','42 managers'],['Program progress','Month 4 of 6'],['Competency growth','+28%',C.lCoral]], footer: 'Next: Group session on giving feedback' },
      { tag: 'GROW', tagColor: C.lCoral, title: 'Skill Development', iconSvg: 'star',     iconBg: 'rgba(255,141,128,0.12)', borderColor: 'rgba(255,141,128,0.28)', rows: [['Feedback skills','+34%'],['Delegation','+28%'],['Difficult convos','+41%',C.lCoral]], footer: 'All skills tracking above benchmark' },
      { tag: 'GROW', tagColor: C.lCoral, title: 'Engagement',        iconSvg: 'user',     iconBg: 'rgba(255,141,128,0.12)', borderColor: 'rgba(255,141,128,0.28)', rows: [['Attendance rate','94%'],['Completion rate','88%'],['NPS score','+72',C.lCoral]], footer: 'Highest cohort NPS on record' },
      { tag: 'GROW', tagColor: C.lCoral, title: 'Next Cohort',       iconSvg: 'calendar', iconBg: 'rgba(255,141,128,0.12)', borderColor: 'rgba(255,141,128,0.28)', rows: [['Start date','Mar 3'],['Seats filled','31/40'],['Waitlisted','+8',C.lCoral]], footer: 'Applications close Feb 28' },
    ],
  },
  // EXEC
  {
    color: C.purple, iconBg: 'rgba(196,122,204,0.10)',
    badgeText: 'EXEC Active', badgeBg: 'rgba(196,122,204,0.12)', badgeColor: C.purple,
    iconSvg: 'star', pillIndex: 2,
    stats: [
      { iconSvg: 'user',     iconBg: 'rgba(196,122,204,0.13)', label: 'Exec Participants', value: '18',   sub: '+3 this month',      color: C.purple },
      { iconSvg: 'trendUp',  iconBg: 'rgba(196,122,204,0.13)', label: 'Retention Impact',  value: '+44%', sub: 'Year-over-year',     color: C.purple },
      { iconSvg: 'clock',    iconBg: 'rgba(255,201,105,0.18)', label: 'Avg Tenure',        value: '14mo', sub: 'Engagement length',  color: C.gold },
      { iconSvg: 'calendar', iconBg: 'rgba(70,111,246,0.10)',  label: 'Renewal Rate',      value: '89%',  sub: '+11% vs last yr',   color: C.blue },
    ],
    cards: [
      { tag: 'EXEC', tagColor: C.purple, title: 'Active Engagements', iconSvg: 'star',    iconBg: 'rgba(196,122,204,0.12)', borderColor: 'rgba(196,122,204,0.28)', rows: [['Active executives','18'],['Avg engagement','6 months'],['Decision confidence','+34%',C.purple]], footer: 'Latest: Board prep session with Sarah Chen' },
      { tag: 'EXEC', tagColor: C.purple, title: 'Coach Performance',  iconSvg: 'user',    iconBg: 'rgba(196,122,204,0.12)', borderColor: 'rgba(196,122,204,0.28)', rows: [['Satisfaction score','97%'],['Renewal rate','89%'],['NPS','+81',C.purple]], footer: 'Above industry avg across all metrics' },
      { tag: 'EXEC', tagColor: C.purple, title: 'Strategic Outcomes', iconSvg: 'trendUp', iconBg: 'rgba(196,122,204,0.12)', borderColor: 'rgba(196,122,204,0.28)', rows: [['Decision quality','+38%'],['Board readiness','82%'],['Strategic alignment','High',C.purple]], footer: 'Strong performance vs prior cohorts' },
      { tag: 'EXEC', tagColor: C.purple, title: 'Confidentiality',    iconSvg: 'lock',    iconBg: 'rgba(196,122,204,0.12)', borderColor: 'rgba(196,122,204,0.28)', rows: [['Anonymized reports','✓'],['No PII exposed','✓'],['Audit log','Active',C.purple]], footer: 'Visibility without surveillance' },
    ],
  },
  // TOGETHER
  {
    color: C.darkGold, iconBg: 'rgba(255,201,105,0.12)',
    badgeText: 'TOGETHER Active', badgeBg: 'rgba(255,201,105,0.15)', badgeColor: C.darkGold,
    iconSvg: 'users', pillIndex: 3,
    stats: [
      { iconSvg: 'users',    iconBg: 'rgba(255,201,105,0.18)', label: 'Teams Facilitated', value: '12',   sub: '+5 this quarter',   color: C.darkGold },
      { iconSvg: 'trendUp',  iconBg: 'rgba(255,201,105,0.18)', label: 'Alignment Score',   value: '+52%', sub: 'Post-workshop',      color: C.darkGold },
      { iconSvg: 'clock',    iconBg: 'rgba(70,111,246,0.10)',  label: 'Workshops Run',     value: '34',   sub: 'This year',          color: C.blue },
      { iconSvg: 'calendar', iconBg: 'rgba(196,122,204,0.13)', label: 'Total Participants',value: '96',   sub: 'Across all sessions', color: C.purple },
    ],
    cards: [
      { tag: 'TOGETHER', tagColor: C.darkGold, title: 'Team Workshops',     iconSvg: 'users',    iconBg: 'rgba(255,201,105,0.16)', borderColor: 'rgba(255,201,105,0.38)', rows: [['Sessions this quarter','34'],['Avg team size','11'],['Satisfaction','96%',C.darkGold]], footer: 'Upcoming: Post-merger integration workshop' },
      { tag: 'TOGETHER', tagColor: C.darkGold, title: 'Alignment Outcomes', iconSvg: 'trendUp',  iconBg: 'rgba(255,201,105,0.16)', borderColor: 'rgba(255,201,105,0.38)', rows: [['Pre/post alignment','+52%'],['Shared language','High'],['Momentum score','91%',C.darkGold]], footer: 'Teams report clarity post-session' },
      { tag: 'TOGETHER', tagColor: C.darkGold, title: 'Active Programs',    iconSvg: 'calendar', iconBg: 'rgba(255,201,105,0.16)', borderColor: 'rgba(255,201,105,0.38)', rows: [['Active programs','8 cohorts'],['Total participants','96'],['Team agreement','+31%',C.darkGold]], footer: '8 active cohorts across org' },
      { tag: 'TOGETHER', tagColor: C.darkGold, title: 'Upcoming Sessions',  iconSvg: 'calendar', iconBg: 'rgba(255,201,105,0.16)', borderColor: 'rgba(255,201,105,0.38)', rows: [['Next session','Feb 24'],['Focus','Post-merger'],['RSVP rate','89%',C.darkGold]], footer: 'Integration workshop — all leads invited' },
    ],
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function IconEl({ name, color, size = 13 }: { name: string; color?: string; size?: number }) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color || 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'trendUp': return <svg {...props}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
    case 'bars':    return <svg {...props}><rect x="2" y="3" width="6" height="18" rx="1"/><rect x="9" y="8" width="6" height="13" rx="1"/><rect x="16" y="13" width="6" height="8" rx="1"/></svg>;
    case 'star':    return <svg {...props}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
    case 'users':   return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'user':    return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>;
    case 'clock':   return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
    case 'calendar':return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
    case 'lock':    return <svg {...props}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case 'grid':    return <svg {...props}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
    default:        return <svg {...props}><circle cx="12" cy="12" r="10"/></svg>;
  }
}

function StatCardEl({ stat }: { stat: StatCard }) {
  return (
    <div style={{ background: 'white', borderRadius: 20, padding: '16px 14px', border: '1px solid rgba(0,0,0,0.07)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: stat.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <IconEl name={stat.iconSvg} color={stat.color} size={13} />
        </div>
        <span style={{ fontSize: 11, color: '#8C9AB0', fontWeight: 500, lineHeight: 1.3 }}>{stat.label}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, color: stat.color, marginBottom: 4 }}>{stat.value}</div>
      <div style={{ fontSize: 11, fontWeight: 500, color: stat.color }}>{stat.sub}</div>
    </div>
  );
}

function QCardEl({ card, showTag }: { card: QuadCard; showTag: boolean }) {
  return (
    <div style={{ borderRadius: 20, padding: 18, border: `1.5px solid ${card.borderColor}`, background: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          {showTag && (
            <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: card.tagColor, marginBottom: 5 }}>{card.tag}</div>
          )}
          <div style={{ fontSize: 15, fontWeight: 800, color: '#2E353D', fontFamily: "'DM Sans', sans-serif" }}>{card.title}</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: card.iconBg, color: card.tagColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <IconEl name={card.iconSvg} color={card.tagColor} size={16} />
        </div>
      </div>
      {card.rows.map(([label, val, trendColor], i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
          <span style={{ fontSize: 12, color: '#6B7A8D' }}>{label}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: trendColor || '#2E353D' }}>{val}</span>
        </div>
      ))}
      <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#8C9AB0' }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
        {card.footer}
      </div>
    </div>
  );
}

// ── Platform dashboard (tab 0) ─────────────────────────────────────────────

const PLATFORM_STATS: StatCard[] = [
  { iconSvg: 'user',     iconBg: 'rgba(70,111,246,0.10)',  label: 'Active Engagements', value: '247',  sub: '+12% this quarter', color: C.blue },
  { iconSvg: 'trendUp',  iconBg: 'rgba(34,197,94,0.10)',   label: 'Avg NPS Score',      value: '+87',  sub: 'Industry leading',   color: '#22c55e' },
  { iconSvg: 'clock',    iconBg: 'rgba(255,201,105,0.18)', label: 'Competency Lift',    value: '+23%', sub: 'Across all programs',color: C.gold },
  { iconSvg: 'calendar', iconBg: 'rgba(196,122,204,0.13)', label: 'Sessions This Week', value: '342',  sub: '89% attendance',     color: C.purple },
];

const PLATFORM_CARDS: QuadCard[] = [
  { tag: 'EXEC',     tagColor: C.purple,   title: 'Executive Coaching',  iconSvg: 'star',     iconBg: 'rgba(196,122,204,0.12)', borderColor: 'rgba(196,122,204,0.30)', rows: [['Active executives','24'],['Avg engagement','6 months'],['Decision confidence','+34%',C.purple]], footer: 'Latest: Board prep session with Sarah Chen' },
  { tag: 'GROW',     tagColor: C.lCoral,   title: 'Leadership Programs', iconSvg: 'trendUp',  iconBg: 'rgba(255,141,128,0.12)', borderColor: 'rgba(255,141,128,0.30)', rows: [['Current cohort','42 managers'],['Program progress','Month 4 of 6'],['Competency growth','+28%',C.lCoral]], footer: 'Next: Group session on giving feedback' },
  { tag: 'SCALE',    tagColor: C.blue,     title: '1:1 Coaching',        iconSvg: 'user',     iconBg: 'rgba(70,111,246,0.10)',  borderColor: 'rgba(70,111,246,0.25)',  rows: [['Active participants','156'],['Utilization rate','68%'],['Avg sessions/user','11.2',C.blue]], footer: 'Top theme: Career progression clarity' },
  { tag: 'TOGETHER', tagColor: '#b8860b',  title: 'Team Workshops',      iconSvg: 'users',    iconBg: 'rgba(255,201,105,0.16)', borderColor: 'rgba(255,201,105,0.45)', rows: [['Active programs','8 cohorts'],['Total participants','96'],['Team alignment','+31%','#b8860b']], footer: 'Upcoming: Post-merger integration workshop' },
];

const PILL_LABELS = ['SCALE', 'GROW', 'EXEC', 'TOGETHER'];

// ── Main Component ─────────────────────────────────────────────────────────

export function SystemArchitectureSection() {
  const [activeTab, setActiveTab] = useState(0);
  const product = PRODUCTS[activeTab];

  return (
    <section style={{ padding: 'clamp(56px,8vw,100px) clamp(16px,4vw,40px)', background: '#F0F3F7', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px,5vw,64px)' }}>
          <p style={{ fontSize: '0.625rem', fontWeight: 800, letterSpacing: '0.18em', color: C.blue, textTransform: 'uppercase', marginBottom: 20, fontFamily: "'Inter', sans-serif" }}>
            THE SYSTEM ARCHITECTURE
          </p>
          <h2 className="font-sans text-2xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[0.9]" style={{ color: '#2E353D', margin: '0 0 8px' }}>
            One leadership system.{' '}
            <span style={{ fontFamily: "'DM Serif Text', serif", fontStyle: 'italic', fontWeight: 400, color: C.blue }}>
              Not four disconnected programs.
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: '#64748B', maxWidth: 600, margin: '28px auto 0', lineHeight: 1.65, fontWeight: 500 }}>
            Boon unifies coaching, manager development, executive support, and shared capability into a single system designed to compound as organizations scale.
          </p>
        </div>

        {/* Layout: tabs + dashboard */}
        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(220px,25vw,300px) 1fr', gap: 'clamp(20px,2.5vw,28px)', alignItems: 'start' }} className="sa-layout">
          
          {/* Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TABS.map((tab, i) => {
              const isActive = activeTab === i;
              const color = TAB_COLORS[i];
              // Split "Boon SCALE" → prefix "Boon" + name "SCALE"
              const parts = tab.name.split(' ');
              const prefix = parts[0]; // "Boon"
              const productName = parts.slice(1).join(' '); // "SCALE", "GROW", etc.

              return (
                <div
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    borderRadius: 16,
                    padding: '18px 20px',
                    cursor: 'pointer',
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(70,111,246,0.07) 0%, rgba(255,141,128,0.06) 100%)'
                      : 'white',
                    boxShadow: isActive
                      ? '0 2px 16px rgba(70,111,246,0.10)'
                      : '0 1px 4px rgba(46,53,61,0.07)',
                    border: isActive ? '1px solid rgba(70,111,246,0.15)' : '1px solid rgba(0,0,0,0.06)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {/* Row: name + chevron */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      fontSize: '1.0625rem',
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#2E353D',
                      fontWeight: 400,
                    }}>
                      {prefix}{' '}
                      <strong style={{ fontWeight: 800 }}>{productName}</strong>
                    </span>
                    {/* Chevron — up when active, down when inactive */}
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke={isActive ? '#2E353D' : '#C0C8D8'} strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{ flexShrink: 0, transition: 'transform 0.2s ease', transform: isActive ? 'rotate(0deg)' : 'rotate(180deg)' }}
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </div>

                  {/* Expanded content */}
                  {isActive && (
                    <div style={{ marginTop: 10 }}>
                      {tab.desc && (
                        <p style={{
                          fontSize: '0.8125rem',
                          color: '#64748B',
                          lineHeight: 1.55,
                          marginBottom: 14,
                          fontFamily: "'Inter', sans-serif",
                        }}>
                          {tab.desc}
                        </p>
                      )}
                      {i > 0 && (
                        <a href="#" style={{
                          fontSize: '0.6875rem',
                          fontWeight: 800,
                          color: color,
                          letterSpacing: '0.06em',
                          textDecoration: 'none',
                          textTransform: 'uppercase' as const,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                          fontFamily: "'Inter', sans-serif",
                        }}>
                          Explore Pillar →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dashboard */}
          <div style={{ background: 'rgb(248,249,252)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 24px rgba(46,53,61,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}>
            
            {/* Topbar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', background: 'white', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: product ? product.iconBg : 'rgba(70,111,246,0.10)',
                  color: product ? product.color : C.blue,
                }}>
                  <IconEl name={product ? product.iconSvg : 'grid'} color={product ? product.color : C.blue} size={14} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#2E353D', fontFamily: "'DM Sans', sans-serif" }}>
                  Boon Platform
                </span>
              </div>
              <span style={{
                fontSize: 10, fontWeight: 700, padding: '4px 11px', borderRadius: 999, letterSpacing: '0.03em',
                color: product ? product.badgeColor : '#16a34a',
                background: product ? product.badgeBg : 'rgba(22,163,74,0.10)',
              }}>
                {product ? product.badgeText : 'All Systems Active'}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: '18px 22px 22px' }}>
              {/* Stat row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 16 }} className="sa-stat-row">
                {(product ? product.stats : PLATFORM_STATS).map((s, i) => (
                  <StatCardEl key={i} stat={s} />
                ))}
              </div>

              {/* Quad grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                {(product ? product.cards : PLATFORM_CARDS).map((c, i) => (
                  <QCardEl key={i} card={c} showTag={!product} />
                ))}
              </div>

              {/* Bottom bar */}
              {!product ? (
                <div style={{ background: '#EEF2FF', borderRadius: 20, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: C.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {Icons.lightning}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#2E353D', marginBottom: 2, fontFamily: "'DM Sans', sans-serif" }}>Cross-Product Insights Active</div>
                    <div style={{ fontSize: 11, color: '#64748B', lineHeight: 1.5 }}>
                      23 participants using multiple products &bull; Themes syncing across GROW and SCALE &bull; Manager alignment in progress
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ marginTop: 12, padding: '10px 14px', background: '#F8F9FC', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 11, color: '#8C9AB0', fontWeight: 600 }}>Cross-Product Insights Active</span>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
                    {PILL_LABELS.map((label, pi) => {
                      const isActivePill = pi === product.pillIndex;
                      return (
                        <span key={pi} style={{
                          fontSize: 9, fontWeight: 800, padding: '3px 8px', borderRadius: 999,
                          letterSpacing: '0.05em',
                          background: isActivePill ? product.color : '#E8ECF4',
                          color: isActivePill ? 'white' : '#8C9AB0',
                        }}>{label}</span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 899px) {
          .sa-layout {
            grid-template-columns: 1fr !important;
          }
          .sa-layout > div:first-child {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto;
            border-bottom: 1.5px solid rgba(0,0,0,0.08);
            padding-bottom: 0;
            gap: 0;
            scrollbar-width: none;
          }
          .sa-layout > div:first-child::-webkit-scrollbar { display: none; }
          .sa-stat-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .sa-stat-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
