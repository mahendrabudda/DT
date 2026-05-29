export default function EvidenceList({ evidence }) {
  if (!evidence?.length) return null;

  return (
    <div style={{
      background: "var(--card)", borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)", boxShadow: "var(--shadow)", overflow: "hidden"
    }}>
      <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Extracted Evidence
        </span>
        <span style={{ fontSize: 12, color: "var(--text-muted)", background: "rgba(0,0,0,0.05)", padding: "3px 10px", borderRadius: 99 }}>
          {evidence.length} items
        </span>
      </div>

      <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
        {evidence.map((item, i) => (
          <div key={i} style={{
            background: "rgba(0,0,0,0.02)", borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border)", padding: "16px 18px"
          }}>
            <p style={{
              fontSize: 14, color: "var(--text-primary)", lineHeight: 1.75,
              fontStyle: "italic", marginBottom: 12,
              paddingLeft: 14, borderLeft: "2px solid rgba(0,0,0,0.15)"
            }}>
              "{item.quote}"
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: "3px 10px",
                borderRadius: 99, background: "rgba(0,0,0,0.06)",
                color: "var(--text-secondary)", letterSpacing: "0.02em"
              }}>{item.signal}</span>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: "3px 10px",
                borderRadius: 99, background: "var(--tag-blue-bg)",
                color: "var(--tag-blue-text)", letterSpacing: "0.02em"
              }}>{item.dimension}</span>
            </div>

            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {item.interpretation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}