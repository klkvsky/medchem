import { ImageResponse } from "next/og";
import { siteConfig } from "./seo";

export const alt = "MedChem — R&D-решения для Life Sciences";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#FAFAFA",
          background:
            "radial-gradient(120% 90% at 78% 72%, #878691 0%, #A1A2A9 34%, #ADB9BC 66%, #A3AEA7 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 36, letterSpacing: 1, textTransform: "uppercase" }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.95,
              letterSpacing: -2,
              textTransform: "uppercase",
            }}
          >
            Проектируем будущее фармацевтики
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.25, maxWidth: 900 }}>
            Drug discovery, chemoinformatics, CADD и AI-платформы для R&D
          </div>
        </div>
      </div>
    ),
    size,
  );
}
