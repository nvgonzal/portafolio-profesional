import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

export const alt = `${profile.displayName}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#f3efe6",
        color: "#15140f",
      }}
    >
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          padding: "8px 20px",
          border: "4px solid #d9381e",
          color: "#b82a13",
          fontSize: 30,
          transform: "rotate(-1.5deg)",
        }}
      >
        {`${profile.yearsOfExperience} años de experiencia`}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -3 }}>
          {profile.displayName}
        </div>
        <div style={{ fontSize: 52, color: "#5a5548", marginTop: 8 }}>
          {profile.role}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          paddingTop: 20,
          borderTop: "2px solid #15140f",
          fontSize: 30,
        }}
      >
        CRM/ERP · Integraciones de APIs · {profile.location}
      </div>
    </div>,
    size,
  );
}
