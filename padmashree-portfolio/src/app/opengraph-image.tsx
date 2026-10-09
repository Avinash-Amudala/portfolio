import { ImageResponse } from "next/og";

export const alt =
  "Padmashree, FP&A and financial analysis. I build the models and the tools that produce the numbers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f6f7f8",
          padding: "64px 72px",
          color: "#13222b",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            color: "#61737d",
            textTransform: "uppercase",
          }}
        >
          Padmashree · FP&A &amp; Financial Analysis
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 600, maxWidth: 960 }}>
            I build the models, and the tools that produce them.
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#0e6e63", marginTop: 36 }}>
            Finance that builds its own tools.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#61737d",
          }}
        >
          <span>Sunnyvale, CA · open to relocation</span>
          <span>Chartered Accountant · MS Finance (STEM)</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
