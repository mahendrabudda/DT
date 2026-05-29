export default function FollowupQuestions({ followUpQuestions }) {
  if (!followUpQuestions?.length) return null;

  return (
    <div style={{
      background: "var(--card)", borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)", boxShadow: "var(--shadow)", overflow: "hidden"
    }}>
      <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Follow-up Questions
        </span>
        <span style={{ fontSize: 12, color: "var(--text-muted)", background: "rgba(0,0,0,0.05)", padding: "3px 10px", borderRadius: 99 }}>
          {followUpQuestions.length} questions
        </span>
      </div>

      <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
        {followUpQuestions.map((item, i) => (
          <div key={i} style={{
            background: "rgba(0,0,0,0.02)", borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border)", padding: "16px 18px"
          }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{
                flexShrink: 0, width: 22, height: 22, borderRadius: 6,
                background: "rgba(0,0,0,0.07)", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, color: "var(--text-secondary)",
                marginTop: 2
              }}>
                {i + 1}
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
                {item.question}
              </p>
            </div>

            <div style={{ paddingLeft: 34 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Target gap
                </span>
                <span style={{ fontSize: 11, color: "var(--text-secondary)", background: "var(--tag-amber-bg)", color: "var(--tag-amber-text)", fontWeight: 600, padding: "2px 8px", borderRadius: 99 }}>
                  {item.targetGap}
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {item.lookingFor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}