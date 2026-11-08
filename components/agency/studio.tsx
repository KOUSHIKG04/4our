import Image from "next/image";
import "./studio.css";

const tools = {
  Figma: "figma",
  "After Effects": "after-effects",
  "DaVinci Resolve": "davinci-resolve",
  React: "react",
  "React / React Native": "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  GitHub: "github",
  Supabase: "supabase-color",
  Razorpay: "razorpay-color",
  Meta: "meta-color",
  Instagram: "instagram-color",
} as const;

type Tool = keyof typeof tools;

function ToolIcon({ name }: { name: Tool }) {
  return <Image src={`/tools/${tools[name]}.svg`} alt="" width={24} height={24} />;
}

export function ServiceDescription({ text }: { text: string }) {
  return (
    <p>
      {text.split(/(Figma|After Effects|DaVinci Resolve|React \/ React Native|React|Next\.js|TypeScript|GitHub|Supabase|Razorpay|Meta|Instagram)/g).map((part, index) =>
        Object.hasOwn(tools, part) ? (
          <span className="service-inline-tool" key={index}><ToolIcon name={part as Tool} />{part}</span>
        ) : part
      )}
    </p>
  );
}

export { StudioSection } from "./studio-section";
export { TestimonialsSection } from "./testimonials-section";
