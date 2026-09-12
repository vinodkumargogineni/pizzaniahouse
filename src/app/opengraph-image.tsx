import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

const logoData = await readFile(join(process.cwd(), "public/logo.png"), "base64");
const logoSrc = `data:image/jpeg;base64,${logoData}`;

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
            "radial-gradient(120% 120% at 15% 0%, #33271f 0%, #14100e 60%)",
          color: "#f8f2e7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 260,
              height: 86,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f8f2e7",
              borderRadius: 18,
              padding: "14px 18px",
            }}
          >
            <img
              src={logoSrc}
              alt={site.name}
              width={226}
              height={75}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{site.tagline}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 800, lineHeight: 1.05 }}>
            Good food
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 108, fontWeight: 800, lineHeight: 1.05 }}>
            <span style={{ color: "#f26722" }}>always</span>
            <span>wins.</span>
          </div>
        </div>

        <div style={{ fontSize: 30, color: "#ddd1bd" }}>
          Pizzas · Hoagies · Burgers · Catering — Cranberry Township, PA
        </div>
      </div>
    ),
    size,
  );
}
