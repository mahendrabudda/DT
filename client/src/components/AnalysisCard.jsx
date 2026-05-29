export default function AnalysisCard({ label, count, children }) {
  return (
    <div style={{
      background: "var(--card)", borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)", boxShadow: "var(--shadow)", overflow: "hidden"
    }}>
      <div style={{
        padding: "20px 24px 16px", borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {label}
        </span>
        {count != null && (
          <span style={{ fontSize: 12, color: "var(--text-muted)", background: "rgba(0,0,0,0.05)", padding: "3px 10px", borderRadius: 99 }}>
            {count}
          </span>
        )}
      </div>
      <div style={{ padding: "16px 24px" }}>
        {children}
      </div>
    </div>
  );
}