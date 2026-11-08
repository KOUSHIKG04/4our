export type Project = {
  title: string;
  discipline: string;
  image: string;
  imageAlt: string;
  href: string;
};

type Testimonial = { name: string; project: string; quote: string; avatar?: string; verified?: boolean };

// Publish only approved work. Missing contact details are deliberately left empty.
export const agency = {
  name: "4our",
  description: "4our is a creative and development agency bringing design, video editing, websites, and mobile applications together—from first idea to final detail.",
  logo: { src: "/brand/4our-logo.svg", width: 912, height: 421 },
  contact: { email: "", bookingUrl: "", enquiryEndpoint: "" },
  socials: [
    { name: "instagram", label: "Instagram", href: "" },
    { name: "facebook", label: "Facebook", href: "" },
    { name: "twitter", label: "X / Twitter", href: "" },
    { name: "linkedin", label: "LinkedIn", href: "" },
  ] as const,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  services: [
    {
      id: "design", title: "Design", line: "A look that feels like you.",
      description: "Give your ideas a visual language. We shape identities and prototype digital interfaces in Figma, keeping the brand consistent across screens.",
      deliverables: ["Visual identity", "UI & UX design", "Digital creatives"],
    },
    {
      id: "video", title: "Video editing", line: "Every cut has a purpose.",
      description: "Turn footage into a story worth watching. We use After Effects and DaVinci Resolve for motion, color, and finishing.",
      deliverables: ["Social & short-form", "Brand films", "Color & finishing"],
    },
    {
      id: "development",
      title: "Web & Mobile Development",
      description: "Websites, e-commerce interfaces, web apps, SaaS MVPs, and mobile and desktop apps built around your business. We bring React / React Native, Next.js, and TypeScript together with APIs, authentication, databases, payments, and real-time features. From Figma designs to launch, we handle the build and integrations, including Supabase and Razorpay.",
      deliverables: ["Marketing websites", "Web applications", "Mobile apps", "Responsive development"],
    },
    {
      id: "campaigns",
      title: "Creative & Campaigns",
      description: "Social and event posters, banners, thumbnails, brand assets, and presentation graphics shaped in Figma. We create AI-assisted ad content and manage Meta campaigns, including Instagram creatives and A/B testing to explore what connects with your audience.",
      deliverables: ["Social & event graphics", "Brand assets", "Meta campaigns", "A/B testing"],
    },
    {
      id: "consulting",
      title: "Consulting & Ongoing Support",
      description: "Get help with technical decisions, MVP planning, AI-assisted development, and vibe coding. We work with Figma prototypes and GitHub codebases to fix frontend issues, improve existing apps, and maintain websites and interfaces.",
      deliverables: ["Technical consultation", "MVP planning", "AI-assisted development", "Frontend fixes", "Website & UI maintenance"],
    },
  ],
  process: [
    { title: "Find the direction", description: "We talk through your goals, audience, references, and what the project needs to achieve." },
    { title: "Shape the idea", description: "We agree on a scope and explore the creative direction before committing to the details." },
    { title: "Make it happen", description: "We design, edit, or develop in focused stages, sharing work and gathering your feedback." },
    { title: "Refine & deliver", description: "We review the details together, make final refinements, and hand over the finished work." },
  ],
  projects: [] as Project[],
  testimonials: [] as Testimonial[],
};

export const navigation = [
  { label: "Services", href: "#services" },
  ...(agency.projects.length ? [{ label: "Work", href: "#work" }] : []),
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];
