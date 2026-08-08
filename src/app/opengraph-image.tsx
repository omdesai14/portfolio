import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Computer Science student, CSU Dominguez Hills`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time, so there's no binary OG asset in the repo and no
 * external image request. Uses the runtime's default sans rather than fetching
 * a webfont during the build.
 */
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
          backgroundColor: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#8A6A1E", fontSize: 22, letterSpacing: 3 }}>
          PORTFOLIO
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#1A1A1A", fontSize: 88, fontWeight: 700 }}>
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              color: "#1A1A1A",
              fontSize: 34,
              lineHeight: 1.35,
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            I build systems that people actually use — then stay close enough to
            find out why.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#62625F",
            fontSize: 22,
            borderTop: "1px solid #E3E3E0",
            paddingTop: 26,
          }}
        >
          Computer Science · CSU Dominguez Hills
        </div>
      </div>
    ),
    size,
  );
}
