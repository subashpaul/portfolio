import { ImageResponse } from "next/og";

export const alt = "Subash Paul, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f2ded8", color: "#263c35", padding: 80 }}>
        <div style={{ display: "flex", width: 96, height: 96, alignItems: "center", justifyContent: "center", border: "4px solid #b94a32", color: "#b94a32", fontSize: 44, fontWeight: 700, borderRadius: 8 }}>SP</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1.05 }}>Subash Paul</div>
          <div style={{ fontSize: 40, marginTop: 20, color: "#52635b" }}>Systems Engineer · Full-stack web, workflow tools, CI/CD</div>
        </div>
        <div style={{ display: "flex", width: 320, height: 6, background: "#b94a32" }} />
      </div>
    ),
    size,
  );
}
