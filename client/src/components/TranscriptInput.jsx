export default function TranscriptInput({ transcript, setTranscript, handleAnalyze, loading, fillHeight }) {
  return (
    <div style={{
      background: "var(--card)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow)",
      overflow: "hidden",
      /* stretch to fill the flex column when fillHeight prop is passed */
      display: "flex",
      flexDirection: "column",
      height: fillHeight ? "100%" : "auto",
    }}>

      {/* Header */}
      <div style={{
        padding: "16px 22px 14px",
        borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Transcript
        </span>
        {transcript.length > 0 && (
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
            {transcript.length.toLocaleString()} chars
          </span>
        )}
      </div>

      {/* Textarea — grows to fill remaining card height */}
      <textarea
        value={transcript}
        onChange={e => setTranscript(e.target.value)}
        placeholder="Paste the supervisor session transcript here…"
        spellCheck={false}
        style={{
          flex: 1,                  /* fills leftover height inside the card */
          width: "100%",
          display: "block",
          background: "transparent",
          resize: "none",
          outline: "none",
          border: "none",
          padding: "18px 22px",
          fontSize: 14,
          lineHeight: 1.85,
          color: "var(--text-primary)",
          fontFamily: "inherit",
          overflowY: "auto",        /* textarea itself scrolls if content is long */
        }}
      />

      {/* Footer */}
      <div style={{
        padding: "12px 18px",
        background: "rgba(0,0,0,0.02)",
        borderTop: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12,
        flexShrink: 0,
      }}>
        {loading && (
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Processing…</span>
        )}
        <button
          onClick={handleAnalyze}
          disabled={loading}
          style={{
            background: loading ? "var(--text-muted)" : "var(--accent)",
            color: "#fff",
            border: "none",
            borderRadius: "var(--radius-sm)",
            padding: "10px 24px",
            fontSize: 13, fontWeight: 600,
            letterSpacing: "-0.01em",
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", gap: 8,
            transition: "opacity 0.15s, transform 0.1s",
            fontFamily: "inherit",
          }}
          onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.82"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          onMouseDown={e => { if (!loading) e.currentTarget.style.transform = "scale(0.97)"; }}
          onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          {loading ? (
            <>
              <svg style={{ animation: "spin 0.8s linear infinite" }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              Analyzing
            </>
          ) : "Run Analysis →"}
        </button>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}