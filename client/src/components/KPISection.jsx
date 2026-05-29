export default function KPISection({ kpiMapping }) {
  if (!kpiMapping?.length) return null;

  return (
    <div style={{
      background: "var(--card)", borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)", boxShadow: "var(--shadow)", overflow: "hidden"
    }}>
      <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          KPI Mapping
        </span>
        <span style={{ fontSize: 12, color: "var(--text-muted)", background: "rgba(0,0,0,0.05)", padding: "3px 10px", borderRadius: 99 }}>
          {kpiMapping.length} KPIs
        </span>
      </div>

      <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
        {kpiMapping.map((item, i) => (
          <div key={i} style={{
            background: "rgba(0,0,0,0.02)", borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border)", padding: "14px 18px"
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em", lineHeight: 1.4 }}>
                {item.kpi}
              </p>
              <span style={{
                flexShrink: 0, fontSize: 11, fontWeight: 600,
                padding: "3px 10px", borderRadius: 99,
                background: "var(--tag-green-bg)", color: "var(--tag-green-text)",
                letterSpacing: "0.02em", marginTop: 2
              }}>{item.systemOrPersonal}</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {item.evidence}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}