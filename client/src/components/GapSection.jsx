export default function GapSection({ gaps }) {
  if (!gaps?.length) return null;

  return (
    <div style={{
      background: "var(--card)", borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)", boxShadow: "var(--shadow)", overflow: "hidden"
    }}>
      <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid var(--border)" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Gap Analysis
        </span>
      </div>

      <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
        {gaps.map((gap, i) => (
          <div key={i} style={{
            background: "rgba(0,0,0,0.02)", borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border)", padding: "14px 18px",
            borderLeft: "3px solid rgba(0,0,0,0.15)"
          }}>
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", color: "var(--text-muted)",
              marginBottom: 6
            }}>
              {gap.dimension}
            </p>
            <p style={{ fontSize: 14, color: "var(--text-primary)", lineHeight: 1.75 }}>
              {gap.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}