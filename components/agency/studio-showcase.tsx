import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import type { CSSProperties } from "react";

const tools = {
  "davinci-resolve": { name: "DaVinci Resolve", color: "#303030" },
  "after-effects": { name: "Adobe After Effects", color: "#9999ff" },
  "adobe-premiere": { name: "Adobe Premiere Pro", color: "#9999ff" },
  "aws-cloudfront": { name: "Amazon CloudFront", color: "#8c4fff" },
  figma: { name: "Figma", color: "#F24E1E" },
  react: { name: "React", color: "#61DAFB" },
  nextdotjs: { name: "Next.js", color: "var(--foreground)" },
  typescript: { name: "TypeScript", color: "#3178C6" },
  supabase: { name: "Supabase", color: "#3ECF8E" },
  mongodb: { name: "MongoDB", color: "#47A248" },
  github: { name: "GitHub", color: "var(--foreground)" },
  vercel: { name: "Vercel", color: "var(--foreground)" },
  razorpay: { name: "Razorpay", color: "#3395FF" },
  n8n: { name: "n8n", color: "#EA4B71" },
  zapier: { name: "Zapier", color: "#FF4F00" },
  notion: { name: "Notion", color: "var(--foreground)" },
  gmail: { name: "Gmail", color: "#EA4335" },
  whatsapp: { name: "WhatsApp", color: "#25D366" },
  telegram: { name: "Telegram", color: "#26A5E4" },
  instagram: { name: "Instagram", color: "#FF426C" },
  meta: { name: "Meta", color: "#0866FF" },
  googlesheets: { name: "Google Sheets", color: "#34A853" },
};
type Tool = keyof typeof tools;
const rows: Tool[][] = [
  [
    "figma",
    "react",
    "nextdotjs",
    "typescript",
    "github",
    "vercel",
    "aws-cloudfront",
    "supabase",
    "mongodb",
  ],
  [
    "whatsapp",
    "n8n",
    "googlesheets",
    "gmail",
    "telegram",
    "zapier",
    "notion",
    "razorpay",
    "react",
  ],
  [
    "davinci-resolve",
    "after-effects",
    "adobe-premiere",
    "meta",
    "instagram",
    "razorpay",
    "figma",
    "supabase",
    "github",
    "mongodb",
    "vercel",
    "typescript",
  ],
];
const workflows: { title: string; text: string; tools: Tool[] }[] = [
  {
    title: "From design to a working product",
    text: "Turn a Figma idea into a React experience, connected with Supabase.",
    tools: ["figma", "react", "supabase"],
  },
  {
    title: "An enquiry. A connected workflow.",
    text: "Connect WhatsApp enquiries to n8n workflows and Google Sheets.",
    tools: ["whatsapp", "n8n", "googlesheets"],
  },
  {
    title: "Creative, campaigns & commerce",
    text: "Bring Meta campaigns, Instagram content and Razorpay payments into the plan.",
    tools: ["meta", "instagram", "razorpay"],
  },
];
const fullColorTools: ReadonlySet<Tool> = new Set([
  "figma", "nextdotjs", "typescript", "davinci-resolve", "after-effects", "adobe-premiere", "aws-cloudfront",
]);

function ToolLogo({ id }: { id: Tool }) {
  if (fullColorTools.has(id)) {
    return <Image className="studio-tool-logo studio-tool-logo--image" data-tool={id} src={`/tools/${id}.svg`} alt={tools[id].name} width={32} height={32} />;
  }

  return (
    <span
      className="studio-tool-logo"
      role="img"
      aria-label={tools[id].name}
      style={{
        color: tools[id].color,
        maskImage: "url(/tools/" + id + ".svg)",
      }}
    />
  );
}
function WorkflowText({ text }: { text: string }) {
  const byName = Object.entries(tools) as [
    Tool,
    { name: string; color: string },
  ][];
  const pattern =
    /(Figma|React|Supabase|WhatsApp|n8n|Google Sheets|Meta|Instagram|Razorpay)/g;
  return (
    <>
      {text.split(pattern).map((part, i) => {
        const match = byName.find(([, tool]) => tool.name === part);
        return match ? (
          <span className="studio-tool-chip" key={i}>
            <ToolLogo id={match[0]} />
            <span className="studio-shimmer-text">{part}</span>
          </span>
        ) : (
          <span className="studio-shimmer-text" key={i}>
            {part}
          </span>
        );
      })}
    </>
  );
}

export function StudioShowcase() {
  return (
    <figure
      className="studio-showcase studio-integrations"
      aria-label="Illustrative tools and workflows for design, development and automation"
    >
      <div
        className="studio-tool-scene"
        tabIndex={0}
        aria-label="Illustrative integration examples."
      >
        <div className="studio-logo-rows" aria-hidden="true">
          {rows.map((row, index) => (
            <div className="studio-logo-lane" key={index}>
              <div
                className="studio-logo-track"
                style={
                  { "--lane-duration": 36 + index * 7 + "s" } as CSSProperties
                }
              >
                {[0, 1].map((copy) => (
                  <div className="studio-logo-group" key={copy}>
                    {row.map((id) => {
                      const phase = workflows.findIndex((workflow) =>
                        workflow.tools.includes(id),
                      );
                      return (
                        <span
                          key={id}
                          className={
                            phase >= 0 ? "studio-tool is-lifted" : "studio-tool"
                          }
                          style={
                            {
                              "--lift-delay":
                                (phase === 0 ? 0 : (phase - 3) * 5) + "s",
                            } as CSSProperties
                          }
                        >
                          <ToolLogo id={id} />
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="studio-workflow-box">
          <div className="studio-workflow-content">
            {workflows.map(({ title, text }, index) => (
              <div
                className="studio-workflow-example"
                key={title}
                style={
                  {
                    "--example-delay":
                      (index === 0 ? 0 : (index - 3) * 5) + "s",
                  } as CSSProperties
                }
              >
                <h4 className="sr-only">{title}</h4>
                <p>
                  <WorkflowText text={text} />
                </p>
              </div>
            ))}
          </div>
          <div className="studio-workflow-footer">
            <span className="studio-workflow-dots" aria-hidden="true">
              {workflows.map((_, index) => (
                <i
                  key={index}
                  style={
                    {
                      "--example-delay":
                        (index === 0 ? 0 : (index - 3) * 5) + "s",
                    } as CSSProperties
                  }
                />
              ))}
            </span>
            <a href="#contact" data-slot="button" className={buttonVariants({ size: "sm", className: "four-header-contact studio-workflow-action" })}>
                <span className="studio-workflow-action-text">
                  Request service
                </span>
            </a>
          </div>
        </div>
      </div>
      <figcaption>
        Illustrative workflows. We choose the tools around your project.
      </figcaption>
    </figure>
  );
}
