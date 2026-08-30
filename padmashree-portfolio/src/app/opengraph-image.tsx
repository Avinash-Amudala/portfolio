import { ImageResponse } from "next/og";

export const alt =
  "Padmashree, manufacturing and operations finance. I build the cost models and the tools that produce them.";
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
          Padmashree · Manufacturing and Operations Finance
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 600, maxWidth: 960 }}>
            I build the cost models, and the tools that produce them.
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 32, marginTop: 40 }}>
            <div style={{ fontSize: 56, fontWeight: 700, color: "#0e6e63" }}>
              12x to 2x
            </div>
            <div style={{ fontSize: 24, color: "#3a4a53", maxWidth: 540 }}>
              Read an hours-per-unit swing on a minimum volume and it collapses.
            </div>
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
