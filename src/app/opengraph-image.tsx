import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Avinash Amudala — AI Systems & Telecom Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #05060f 0%, #0a0d1f 55%, #101030 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow accents */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.28), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#05060f",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            AA
          </div>
          <div
            style={{
              color: "#7dd3fc",
              fontSize: 26,
              letterSpacing: 4,
              display: "flex",
            }}
          >
            AVINASH-AMUDALA.COM
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            Avinash Amudala
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#94a3b8",
              display: "flex",
            }}
          >
            AI Systems & Telecom Engineer · Nokia
          </div>
        </div>

        {/* Bottom chips */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Creator of MCP-Telecom", "60+ tools · 7 vendors", "On PyPI"].map(
            (chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  padding: "12px 24px",
                  borderRadius: 9999,
                  border: "1px solid rgba(148,163,184,0.35)",
                  background: "rgba(148,163,184,0.08)",
                  color: "#cbd5e1",
                  fontSize: 24,
                }}
              >
                {chip}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
