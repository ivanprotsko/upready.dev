import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

export function createOgImage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          padding: "60px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient accent */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top border accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: title.length > 50 ? "42px" : "52px",
              fontWeight: 700,
              color: "#e5e7eb",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              display: "flex",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "22px",
              color: "#9ca3af",
              lineHeight: 1.5,
              maxWidth: "800px",
              display: "flex",
            }}
          >
            {description.length > 120
              ? description.slice(0, 117) + "..."
              : description}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(75, 85, 99, 0.4)",
            paddingTop: "24px",
          }}
        >
          {/* Logo / Brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background:
                  "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              U
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#e5e7eb",
                display: "flex",
              }}
            >
              upready.dev
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "16px",
              color: "#6b7280",
              display: "flex",
            }}
          >
            We fix what AI builds.
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
