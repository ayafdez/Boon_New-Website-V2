import { useState } from "react";

const products = [
  {
    id: "scale",
    tag: "Boon SCALE",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    color: "#466FF6",
    bgLight: "rgba(70,111,246,0.08)",
    tagline: "1:1 coaching for everyone—not just execs",
    description: "Employees book sessions when they need them, with coaches matched to their role and context. Coverage from IC to senior leadership.",
    stats: [
      { label: "Active Engagements", value: "247", change: "+87", positive: true },
      { label: "Completion Rate", value: "+23%", change: "vs last quarter", positive: true },
      { label: "Sessions This Week", value: "342", change: "Month-to-date", positive: null },
    ],
    dashboard: {
      title: "Executive Coaching",
      rows: [
        { name: "Active sessions", val: "24", trend: "+8%" },
        { name: "Program adherence", val: "91%", trend: "+4%" },
        { name: "Session confidence", val: "88%", trend: "+6%" },
      ],
      tag: "↑ 28% above Boon Benchmarks",
      tagColor: "#466FF6",
    },
    dashboard2: {
      title: "Leadership Programs",
      rows: [
        { name: "Cohort count", val: "3" },
        { name: "Program score", val: "87%" },
        { name: "Onboarding growth", val: "+18%" },
      ],
      tag: "↑ 41 messages Month-to-d",
      tagColor: "#466FF6",
    },
  },
  {
    id: "grow",
    tag: "Boon GROW",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="18" rx="1"/><rect x="9" y="8" width="6" height="13" rx="1"/><rect x="16" y="13" width="6" height="8" rx="1"/>
      </svg>
    ),
    color: "#FF8D80",
    bgLight: "rgba(255,141,128,0.08)",
    tagline: "When your managers are underwater",
    description: "Cohort-based development for new and rising managers. Builds feedback, delegation, and the difficult conversations most first-time managers never learned.",
    stats: [
      { label: "Active Cohorts", value: "4", change: "+2 this quarter", positive: true },
      { label: "Manager Confidence", value: "+31%", change: "vs baseline", positive: true },
      { label: "Sessions Completed", value: "189", change: "This cohort", positive: null },
    ],
    dashboard: {
      title: "1:1 Coaching",
      rows: [
        { name: "New participants", val: "N/A", trend: "" },
        { name: "Utilization rate", val: "N/A", trend: "" },
        { name: "Avg sessions", val: "N/A", trend: "" },
      ],
      tag: "No data available yet",
      tagColor: "#FF8D80",
    },
    dashboard2: {
      title: "Team Workshops",
      rows: [
        { name: "Participants", val: "64" },
        { name: "Satisfaction", val: "94%" },
        { name: "Team agreement", val: "+29%" },
      ],
      tag: "↑ 8 cohorts",
      tagColor: "#FF8D80",
    },
  },
  {
    id: "exec",
    tag: "Boon EXEC",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: "#D077D2",
    bgLight: "rgba(208,119,210,0.08)",
    tagline: "When the stakes are highest",
    description: "Confidential coaching for senior leaders. A thinking partner for the decisions that ripple across the org—no filters, no performance management.",
    stats: [
      { label: "Exec Participants", value: "18", change: "+3 this month", positive: true },
      { label: "Retention Impact", value: "+44%", change: "year-over-year", positive: true },
      { label: "Avg Tenure", value: "14mo", change: "Engagement length", positive: null },
    ],
    dashboard: {
      title: "Executive Coaching",
      rows: [
        { name: "Active engagements", val: "18", trend: "+3" },
        { name: "Satisfaction score", val: "97%", trend: "+2%" },
        { name: "Renewal rate", val: "89%", trend: "+11%" },
      ],
      tag: "↑ Above industry avg",
      tagColor: "#D077D2",
    },
    dashboard2: {
      title: "Leadership Programs",
      rows: [
        { name: "Strategic alignment", val: "High" },
        { name: "Decision quality", val: "+38%" },
        { name: "Board readiness", val: "82%" },
      ],
      tag: "↑ Strong performance",
      tagColor: "#D077D2",
    },
  },
  {
    id: "together",
    tag: "Boon TOGETHER",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: "#FFC969",
    bgLight: "rgba(255,201,105,0.10)",
    tagline: "When the team needs to get on the same page",
    description: "Facilitated sessions for teams that need to align: offsites, department kickoffs, or moments of change. Builds shared language and momentum.",
    stats: [
      { label: "Teams Facilitated", value: "12", change: "+5 this quarter", positive: true },
      { label: "Alignment Score", value: "+52%", change: "post-workshop", positive: true },
      { label: "Workshops Run", value: "34", change: "This year", positive: null },
    ],
    dashboard: {
      title: "Team Workshops",
      rows: [
        { name: "Sessions this quarter", val: "34", trend: "+12" },
        { name: "Avg team size", val: "11", trend: "" },
        { name: "Satisfaction score", val: "96%", trend: "+4%" },
      ],
      tag: "↑ Highest rated program",
      tagColor: "#FFC969",
    },
    dashboard2: {
      title: "Alignment Programs",
      rows: [
        { name: "Pre/post alignment", val: "+52%" },
        { name: "Shared language", val: "High" },
        { name: "Momentum score", val: "91%" },
      ],
      tag: "↑ Teams report clarity",
      tagColor: "#FFC969",
    },
  },
];

function DashboardMockup({ product }) {
  const p = product;
  return (
    <div style={{
      background: "white",
      borderRadius: 20,
      padding: "20px",
      boxShadow: "0 2px 24px rgba(46,53,61,0.08)",
      border: "1px solid rgba(0,0,0,0.06)",
      width: "100%",
      fontFamily: "Inter, sans-serif",
    }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: p.bgLight, display: "flex", alignItems: "center", justifyContent: "center", color: p.color }}>
            {p.icon}
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#2E353D", fontFamily: "DM Sans, sans-serif" }}>Boon Platform</span>
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: p.color, background: p.bgLight, padding: "4px 10px", borderRadius: 999, letterSpacing: "0.04em" }}>
          All Programs Active
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
        {[
          { icon: "👤", label: "Total Engagement", val: p.stats[0].value, sub: p.stats[0].label },
          { icon: "↗", label: "Day Vs Yest.", val: p.stats[0].change, sub: "+9 hrs" },
          { icon: "✓", label: "Completion%", val: p.stats[1].value, sub: "vs last quarter" },
          { icon: "📅", label: "Session This Week", val: p.stats[2].value, sub: "Month-to-date" },
        ].map((s, i) => (
          <div key={i} style={{ background: "#F8F9FC", borderRadius: 12, padding: "12px 10px" }}>
            <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
            <div style={{ fontSize: 9, color: "#8C9AB0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#2E353D", fontFamily: "DM Sans, sans-serif" }}>{s.val}</div>
            <div style={{ fontSize: 10, color: p.color, fontWeight: 600, marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Two dashboard cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[p.dashboard, p.dashboard2].map((d, di) => (
          <div key={di} style={{ background: "#F8F9FC", borderRadius: 14, padding: "14px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2E353D", marginBottom: 10, fontFamily: "DM Sans, sans-serif" }}>{d.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {d.rows.map((r, ri) => (
                <div key={ri} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, color: "#6B7A8D" }}>{r.name}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#2E353D" }}>{r.val}</span>
                    {r.trend && <span style={{ fontSize: 10, color: d.tagColor, fontWeight: 600 }}>{r.trend}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, fontSize: 10, fontWeight: 700, color: d.tagColor, background: `${d.tagColor}15`, borderRadius: 6, padding: "4px 8px", display: "inline-block" }}>
              {d.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ marginTop: 12, padding: "10px 12px", background: "#F8F9FC", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, color: "#8C9AB0" }}>Cross-Product Insights Active</span>
        <div style={{ display: "flex", gap: 6 }}>
          {["SCALE", "GROW", "EXEC", "TOGETHER"].map((t, i) => (
            <span key={i} style={{
              fontSize: 9, fontWeight: 800, padding: "3px 7px", borderRadius: 999,
              background: product.id === t.toLowerCase() ? p.color : "#E8ECF4",
              color: product.id === t.toLowerCase() ? "white" : "#8C9AB0",
              letterSpacing: "0.05em",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SystemArchitectureSection() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section style={{
      background: "#F0F3F7",
      padding: "100px 40px",
      fontFamily: "Inter, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&family=DM+Serif+Text:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap');
        .tab-item { transition: all 0.22s ease; }
        .tab-item:hover { transform: translateX(4px); }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.18em", color: "#466FF6", textTransform: "uppercase", marginBottom: 16, fontFamily: "Inter, sans-serif" }}>
            THE SYSTEM ARCHITECTURE
          </div>
          <h2 style={{ fontFamily: "DM Sans, sans-serif", fontSize: 44, fontWeight: 800, color: "#2E353D", lineHeight: 1.15, margin: "0 0 8px" }}>
            One leadership system.
          </h2>
          <h2 style={{ fontFamily: "DM Serif Text, serif", fontSize: 44, fontStyle: "italic", fontWeight: 400, color: "#466FF6", lineHeight: 1.15, margin: "0 0 20px" }}>
            Not four disconnected programs.
          </h2>
          <p style={{ fontSize: 15, color: "#64748B", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Boon unifies coaching, manager development, executive support, and shared capability into a single system designed to compound as organizations scale.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 32, alignItems: "start" }}>

          {/* Left — tab list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {products.map((prod, i) => {
              const isActive = active === i;
              return (
                <div
                  key={prod.id}
                  className="tab-item"
                  onMouseEnter={() => setActive(i)}
                  style={{
                    borderRadius: 18,
                    padding: "18px 20px",
                    cursor: "pointer",
                    background: isActive ? "white" : "transparent",
                    boxShadow: isActive ? "0 4px 24px rgba(46,53,61,0.10)" : "none",
                    border: isActive ? `1px solid rgba(0,0,0,0.05)` : "1px solid transparent",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: isActive ? prod.bgLight : "rgba(0,0,0,0.04)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: isActive ? prod.color : "#8C9AB0",
                      flexShrink: 0,
                      transition: "all 0.22s ease",
                    }}>
                      {prod.icon}
                    </div>
                    <div>
                      <div style={{
                        fontSize: 14, fontWeight: 800,
                        color: isActive ? prod.color : "#2E353D",
                        fontFamily: "DM Sans, sans-serif",
                        transition: "color 0.22s ease",
                      }}>
                        {prod.tag}
                      </div>
                      {isActive && (
                        <div style={{ fontSize: 12, color: "#64748B", marginTop: 2, lineHeight: 1.4 }}>
                          {prod.tagline}
                        </div>
                      )}
                    </div>
                  </div>
                  {isActive && (
                    <p style={{ fontSize: 13, color: "#64748B", margin: "12px 0 0", lineHeight: 1.6, paddingLeft: 48 }}>
                      {prod.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right — dashboard */}
          <div style={{ transition: "opacity 0.2s ease" }}>
            <DashboardMockup product={p} />
          </div>

        </div>
      </div>
    </section>
  );
}
