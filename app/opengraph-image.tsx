import { ImageResponse } from "next/og";

export const alt = "US Digital Solutions — digital solutions, built for business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#151a2d",
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", width: "56px", height: "56px", alignItems: "center", justifyContent: "center", borderRadius: "16px",         background: "#101832", color: "#ffffff", fontSize: "32px", fontWeight: 700 }}>
          US
        </div>
        <div style={{ display: "flex", fontSize: "28px", fontWeight: 700, letterSpacing: "-1px" }}>US Digital Solutions</div>
      </div>
      <div style={{ display: "flex", maxWidth: "930px", flexDirection: "column", gap: "22px" }}>
        <div style={{ display: "flex", color: "#0b2344", fontSize: "19px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase" }}>
          Digital solutions, built for business.
        </div>
        <div style={{ display: "flex", fontSize: "76px", fontWeight: 700, letterSpacing: "-4px", lineHeight: 1.05 }}>
          Software that moves your business forward.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#657089", fontSize: "21px" }}>
        <span>Web · Backend · Mobile · SaaS</span>
        <span style={{ color: "#0b2344", fontWeight: 700 }}>your-domain.com</span>
      </div>
    </div>,
    { ...size },
  );
}
