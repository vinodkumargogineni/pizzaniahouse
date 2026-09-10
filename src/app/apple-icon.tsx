import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#14100e",
          color: "#f26722",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1 }}>P</div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 4,
            color: "#f8f2e7",
            marginTop: 6,
          }}
        >
          HOUSE
        </div>
      </div>
    ),
    size,
  );
}
