import { useState } from "react";
import { analyzeTranscript } from "../services/api";
import TranscriptInput from "../components/TranscriptInput";
import ScoreSection from "../components/ScoreSection";
import EvidenceList from "../components/EvidenceList";
import KPISection from "../components/KPISection";
import GapSection from "../components/GapSection";
import FollowupQuestions from "../components/FollowupQuestions";

export default function Home() {
  const [transcript, setTranscript] = useState("");
  const [analysis, setAnalysis]     = useState(null);
  const [loading, setLoading]       = useState(false);

  const handleAnalyze = async () => {
    if (!transcript.trim()) { alert("Please paste a transcript."); return; }
    try {
      setLoading(true);
      setAnalysis(await analyzeTranscript(transcript));
    } catch (e) {
      console.error(e); alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* ── Full viewport, nothing overflows ── */
    <div style={{
      height: "100vh",
      overflow: "hidden",
      background: "var(--bg)",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        maxWidth: 1200,
        width: "100%",
        margin: "0 auto",
        padding: "3vh 20px 0",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>

        {/* ── NAV BAR ── */}
        <div className="anim d1" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32, flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "var(--accent)", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" fill="white" opacity="0.9"/>
                <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1" opacity="0.4"/>
              </svg>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
              Trinethra
            </span>
          </div>
          <span style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--text-muted)",
            background: "rgba(0,0,0,0.05)", padding: "5px 12px", borderRadius: 99,
          }}>
            DT Fellows
          </span>
        </div>

        {/* ── HERO ── */}
        <div className="anim d1" style={{ marginBottom: 28, flexShrink: 0 }}>
          <h1 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700,
            letterSpacing: "-0.03em", lineHeight: 1.15,
            color: "var(--text-primary)", marginBottom: 10,
          }}>
            Feedback Analyzer
          </h1>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 500 }}>
            Drop in a supervisor session transcript. Get back rubric scores,
            evidence, KPI mapping, gap analysis, and follow-up recommendations — instantly.
          </p>
        </div>

        {/* ── TWO-COLUMN LAYOUT when results exist ── */}
        <div style={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          gap: 20,
          paddingBottom: 24,
        }}>

          {/* LEFT — Transcript input (fixed, no scroll) */}
          <div className="anim d2" style={{
            flex: analysis ? "0 0 44%" : "1",
            transition: "flex 0.4s cubic-bezier(0.16,1,0.3,1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}>
            <TranscriptInput
              transcript={transcript}
              setTranscript={setTranscript}
              handleAnalyze={handleAnalyze}
              loading={loading}
              fillHeight  /* prop to tell TranscriptInput to stretch */
            />
          </div>

          {/* RIGHT — Results panel (scrollable) */}
          {analysis && (
            <div style={{
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              paddingRight: 4,
            }}>
              <div className="anim d1"><ScoreSection score={analysis.score} /></div>
              <div className="anim d2"><EvidenceList evidence={analysis.evidence} /></div>
              <div className="anim d3"><KPISection kpiMapping={analysis.kpiMapping} /></div>
              <div className="anim d4"><GapSection gaps={analysis.gaps} /></div>
              <div className="anim d5"><FollowupQuestions followUpQuestions={analysis.followUpQuestions} /></div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}