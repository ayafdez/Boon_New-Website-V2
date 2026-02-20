'use client';

import { useState } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────

type TabKey = 'without' | 'with';

interface TimelineRow {
  year: string;
  role: string;
  label: string;
  labelColor: string;
  labelBg: string;
  dotColor: string;
  dotShadow: string;
  connectorGradient?: string;
  desc?: string;
}

// ── Data ──────────────────────────────────────────────────────────────────

const WITHOUT_ROWS: TimelineRow[] = [
  { year: '2021', role: 'IC',      label: 'Onboarding webinar',     labelColor: '#8A8F98', labelBg: '#EEF0F3',                  dotColor: '#7C7F88', dotShadow: '0 2px 6px rgba(0,0,0,0.15)' },
  { year: '2023', role: 'Manager', label: 'Leadership 101 workshop', labelColor: '#8A8F98', labelBg: '#EEF0F3',                  dotColor: '#7C7F88', dotShadow: '0 2px 6px rgba(0,0,0,0.15)' },
  { year: '2025', role: 'VP',      label: 'Executive Coach',         labelColor: '#B06AF2', labelBg: 'rgba(239,217,255,0.65)',    dotColor: '#7C7F88', dotShadow: '0 2px 6px rgba(0,0,0,0.15)' },
];

const WITH_ROWS: TimelineRow[] = [
  {
    year: '2021', role: 'IC',      label: 'Boon SCALE', labelColor: '#466FF6', labelBg: 'rgba(70,111,246,0.10)',
    dotColor: '#466FF6', dotShadow: '0 4px 10px rgba(70,111,246,0.45)',
    connectorGradient: 'linear-gradient(180deg,#466FF6 0%,#FF8D80 100%)',
    desc: 'Builds Self-Awareness',
  },
  {
    year: '2023', role: 'Manager', label: 'Boon GROW',  labelColor: '#FF8D80', labelBg: 'rgba(255,141,128,0.15)',
    dotColor: '#FF8D80', dotShadow: '0 4px 10px rgba(255,141,128,0.45)',
    connectorGradient: 'linear-gradient(180deg,#FF8D80 0%,#D077D2 100%)',
    desc: 'Applies IC Insights To Leadership',
  },
  {
    year: '2025', role: 'VP',      label: 'Boon EXEC',  labelColor: '#D077D2', labelBg: 'rgba(208,119,210,0.12)',
    dotColor: '#D077D2', dotShadow: '0 4px 10px rgba(208,119,210,0.45)',
    desc: 'Accelerates With Strong Foundation',
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(70,111,246,0.10)', color: '#466FF6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, fontWeight: 900 }}>
      ✓
    </span>
  );
}

function XIcon() {
  return (
    <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, fontWeight: 900 }}>
      ✕
    </span>
  );
}

function WithoutTimeline() {
  return (
    <div style={{ borderRadius: 22, padding: 10 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {WITHOUT_ROWS.map((row, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              borderRadius: 22, padding: '14px 16px',
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 10px 22px rgba(10,10,10,0.10)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}>
              <div style={{ width: 48, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: '#8C8F97', fontSize: 11, fontWeight: 600, lineHeight: 1.1 }}>
                <span>{row.year}</span>
                <span style={{ marginTop: 3 }}>{row.role}</span>
              </div>
              <div style={{ width: 18, flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: row.dotColor, boxShadow: row.dotShadow }} />
              </div>
              <div style={{ flex: 1, borderRadius: 999, padding: '9px 18px', background: row.labelBg, textAlign: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.65)' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: row.labelColor, whiteSpace: 'nowrap' }}>{row.label}</span>
              </div>
            </div>
            {/* Dashed connector */}
            {i < WITHOUT_ROWS.length - 1 && (
              <div style={{
                position: 'absolute', top: '100%', left: 83,
                width: 2, height: 20,
                backgroundImage: 'repeating-linear-gradient(to bottom, rgba(124,127,136,0.55) 0 4px, rgba(124,127,136,0) 4px 9px)',
                borderRadius: 999,
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WithTimeline() {
  return (
    <div style={{ borderRadius: 35, background: 'linear-gradient(180deg, rgba(246,248,255,0) 0%, rgba(70,111,246,0.20) 100%)', overflow: 'hidden' }}>
      <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: 35, padding: 10 }}>
        {WITH_ROWS.map((row, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, position: 'relative', padding: '16px 8px' }}>
            {/* Label */}
            <div style={{ width: 52, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: 'rgba(85,92,115,0.75)', fontSize: 11, fontWeight: 600, lineHeight: 1.2, paddingTop: 2 }}>
              <span>{row.year}</span>
              <span style={{ marginTop: 3 }}>{row.role}</span>
            </div>
            {/* Dot + connector */}
            <div style={{ position: 'relative', width: 24, flexShrink: 0, display: 'flex', justifyContent: 'center', paddingTop: 3 }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: row.dotColor, boxShadow: row.dotShadow, position: 'relative', zIndex: 1 }} />
              {row.connectorGradient && (
                <div style={{ position: 'absolute', top: 15, left: '50%', transform: 'translateX(-50%)', width: 4, height: 90, borderRadius: 999, background: row.connectorGradient }} />
              )}
            </div>
            {/* Badge */}
            <div style={{ flex: 1, paddingLeft: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 800, padding: '9px 14px', borderRadius: 999, textAlign: 'center', background: row.labelBg, color: row.labelColor }}>
                {row.label}
              </div>
              {row.desc && (
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(80,88,112,0.80)', marginTop: 4, lineHeight: 1.4, textAlign: 'center' }}>
                  {row.desc}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function BoonDifferenceSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('without');
  const isWithout = activeTab === 'without';

  return (
    <section style={{ background: '#f1f4f9', padding: 'clamp(36px,6vw,80px) clamp(16px,4vw,40px)', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* Tab switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(32px,5vw,48px)' }}>
          <div style={{ display: 'flex', borderBottom: '1.5px solid #e2e8f0' }}>
            {(['without', 'with'] as TabKey[]).map(key => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: 'clamp(8px,1.5vw,12px) clamp(16px,3vw,32px)',
                  fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
                  border: 'none', background: 'none', cursor: 'pointer',
                  textTransform: 'uppercase',
                  color: activeTab === key ? '#2e353d' : '#b0b8c8',
                  borderBottom: `2px solid ${activeTab === key ? '#466FF6' : 'transparent'}`,
                  marginBottom: -1.5,
                  transition: 'all 0.18s',
                }}
              >
                {key === 'without' ? 'WITHOUT BOON' : 'WITH BOON'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(280px,45%,1fr) 1fr', gap: 'clamp(32px,6vw,80px)', alignItems: 'center' }} className="bd-layout">

          {/* Left copy */}
          <div>
            <h3 style={{ fontSize: 'clamp(18px,2.5vw,22px)', fontWeight: 700, marginBottom: 14, lineHeight: 1.3, color: isWithout ? '#2e353d' : '#466FF6' }}>
              {isWithout ? "Maria's fragmented journey" : "Maria's continuous journey"}
            </h3>
            <p style={{ fontSize: 'clamp(12px,1.5vw,14px)', color: '#64748b', marginBottom: 28, lineHeight: 1.65 }}>
              {isWithout
                ? 'No development for years. Then suddenly, premium coaching with no foundation to build on.'
                : 'Scaffolded development from day one. Each stage builds on the last.'}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {isWithout ? (
                <>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#475569', fontWeight: 500 }}><XIcon />Generic, one-off trainings</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#475569', fontWeight: 500 }}><XIcon />Not personalized</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#475569', fontWeight: 500 }}><XIcon />Nothing to build on</li>
                </>
              ) : (
                <>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#475569', fontWeight: 500 }}><CheckIcon />Development from day one</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#475569', fontWeight: 500 }}><CheckIcon />Growth compounds over time</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#475569', fontWeight: 500 }}><CheckIcon />Context carries forward</li>
                </>
              )}
            </ul>
          </div>

          {/* Right: photo + timeline widget */}
          <div style={{ position: 'relative', paddingTop: 'clamp(0px,8vw,128px)' }} className="bd-right">
            {/* Photo placeholder */}
            <div style={{
              width: '100%', aspectRatio: '4/3', borderRadius: 24,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#94a3b8', fontSize: 13, fontWeight: 600,
              background: isWithout
                ? 'linear-gradient(135deg,#dde3ee 0%,#c0cad8 100%)'
                : 'linear-gradient(135deg,#e8eeff 0%,#c5d3f7 100%)',
            }}>
              Photo placeholder
            </div>

            {/* Timeline widget — desktop overlaps, mobile stacks below */}
            <div style={{ position: 'absolute', top: 40, right: -200, width: 400 }} className="bd-shell">
              {isWithout ? <WithoutTimeline /> : <WithTimeline />}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .bd-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .bd-right {
            padding-top: 0 !important;
          }
          .bd-shell {
            position: static !important;
            width: 100% !important;
            right: auto !important;
            top: auto !important;
            margin-top: 20px;
          }
        }
        @media (max-width: 600px) {
          .bd-shell {
            padding: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
