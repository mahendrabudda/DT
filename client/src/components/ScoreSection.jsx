export default function ScoreSection({ score }) {
  if (!score) return null;

  const pct = Math.min(100, Math.max(0, (parseFloat(score.value) / 4) * 100));

  return (
    <div style={{
      background: "var(--card)", borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)", boxShadow: "var(--shadow)", overflow: "hidden"
    }}>
      <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid var(--border)" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Rubric Score
        </span>
      </div>

      <div style={{ padding: "24px" }}>
        {/* Score row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
          <div style={{
            width: 68, height: 68, borderRadius: 16,
            background: "var(--accent)", display: "flex",
            flexDirection: "column", alignItems: "center", justifyContent: "center",
            flexShrink: 0
          }}>
            <span style={{ fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
              {score.value}
            </span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4, letterSpacing: "-0.02em" }}>
              {score.label}
            </p>
            <span style={{
              fontSize: 12, fontWeight: 500, color: "var(--text-secondary)",
              background: "rgba(0,0,0,0.05)", padding: "3px 10px",
              borderRadius: 99
            }}>
              {score.band}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ height: 5, background: "rgba(0,0,0,0.07)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${pct}%`,
              background: "var(--accent)", borderRadius: 99,
              transition: "width 0.8s cubic-bezier(0.16,1,0.3,1)"
            }} />
          </div>
        </div>

        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8 }}>
          {score.justification}
        </p>
      </div>
    </div>
  );
}