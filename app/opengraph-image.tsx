import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "4our — Design, video editing, websites, and mobile applications.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/4our-logo.png"));
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#282828", color: "#ffffff", display: "flex", flexDirection: "column", padding: "64px", justifyContent: "space-between" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "40px" }}><div style={{ width: "440px", height: "230px", display: "flex", position: "relative", overflow: "hidden" }}>
      {/* Original PNG pixels and aspect ratio are preserved. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="4our" src={`data:image/png;base64,${logo.toString("base64")}`} width={880} height={872} style={{ position: "absolute", left: "-220px", top: "-321px" }} />
    </div><div style={{ fontSize: "70px", lineHeight: 1.05, display: "flex", flexDirection: "column" }}><span>From first spark</span><span style={{ color: "#ff5c00" }}>to full impact.</span></div></div>
    <div style={{ display: "flex", borderTop: "1px solid #626262", paddingTop: "32px", fontSize: "26px", justifyContent: "space-between" }}><span>Design / Video / Web / Mobile</span><span style={{ color: "#ff5c00" }}>Creative & development agency</span></div>
  </div>, size);
}
