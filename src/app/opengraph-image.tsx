import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — builder, systems thinker, APM candidate`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time, so there's no binary OG asset in the repo and no
 * external image request. Deliberately uses the runtime's default font rather
 * than fetching a webfont during the build.
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
          backgroundColor: "#14181F",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              border: "1px solid #D4A34A",
              color: "#D4A34A",
              borderRadius: 999,
              padding: "6px 16px",
              fontSize: 20,
              letterSpacing: 2,
            }}
          >
            v3.0
          </div>
          <div style={{ display: "flex", color: "#8FA9C4", fontSize: 20, letterSpacing: 3 }}>
            CURRENTLY SHIPPING
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#EDE9E0", fontSize: 92, fontWeight: 700 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", width: 160, height: 3, backgroundColor: "#D4A34A", marginTop: 26 }} />
          <div
            style={{
              display: "flex",
              color: "#B0AEAA",
              fontSize: 34,
              lineHeight: 1.35,
              marginTop: 30,
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
            justifyContent: "space-between",
            color: "#8FA9C4",
            fontSize: 21,
            letterSpacing: 2,
            borderTop: "1px solid #212A35",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex" }}>CS @ CSU DOMINGUEZ HILLS</div>
          <div style={{ display: "flex" }}>APM CANDIDATE · 2026</div>
        </div>
      </div>
    ),
    size,
  );
}
