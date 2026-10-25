export const site = {
  name: "US Digital Solutions",
  shortName: "US Digital Solutions",
  tagline: "Digital solutions, built for business.",
  description:
    "A reliable software development partner for ambitious US startups, small businesses, and digital agencies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://usdigitalsolutions.dev",
  email: "umarshahid7558@gmail.com",
  phone: "+1 (555) 000-0000",
  location: "Lahore, Pakistan · US-friendly hours (EST/PST overlap)",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "https://cal.com/umar-shahid-ylcuq7/30min",
  calendarConfigured:
    !(process.env.NEXT_PUBLIC_CALENDAR_URL ?? "https://cal.com/umar-shahid-ylcuq7/30min").includes("your-team/intro"),
};

export const services = [
  {
    number: "01",
    title: "Web development",
    description: "Fast, accessible websites and web apps that turn more of your visitors into customers.",
    icon: "globe",
    deliverables: ["Marketing sites and dashboards", "Frontend architecture", "Performance and accessibility"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description: "Secure, dependable systems built to support the way your business actually works.",
    icon: "server",
    deliverables: ["Java and Spring Boot services", "API design and integrations", "Cloud-ready infrastructure"],
  },
  {
    number: "03",
    title: "Mobile apps",
    description: "Useful mobile experiences that feel intuitive from the first tap to the thousandth.",
    icon: "smartphone",
    deliverables: ["iOS and Android applications", "Cross-platform development", "App Store launch support"],
  },
  {
    number: "04",
    title: "SaaS products",
    description: "Go from a promising idea to a product your customers are glad to pay for.",
    icon: "layers",
    deliverables: ["MVP planning and delivery", "Subscriptions and billing", "Product iteration and scaling"],
  },
  {
    number: "05",
    title: "Dedicated developers",
    description: "Add experienced, communicative engineers to your team without the hiring slowdown.",
    icon: "users",
    deliverables: ["Full-stack and backend engineers", "Flexible team extensions", "Daily collaboration and updates"],
  },
];

export const processSteps = [
  { title: "Discovery", description: "We get clear on your goals, users, constraints, and what success looks like." },
  { title: "Design", description: "We shape a practical plan and experience before investing in the build." },
  { title: "Development", description: "We build in focused sprints, sharing progress and inviting feedback early." },
  { title: "Launch", description: "We test, deploy, and help your team feel confident on day one." },
  { title: "Support", description: "We stay close after launch to improve, maintain, and grow your product." },
];

export const technologies = ["TypeScript", "React", "Next.js", "React Native", "Flutter", "Java", "Spring Boot", "Node.js", "AWS", "PostgreSQL"];

export const engagementModels = [
  {
    title: "Fixed scope",
    description: "You have a well-defined project. We scope, price, and deliver it — no surprises.",
    icon: "layers",
    ideal: "MVPs, redesigns, specific features",
  },
  {
    title: "Monthly retainer",
    description: "An ongoing team that ships every sprint. Great for products that are always evolving.",
    icon: "users",
    ideal: "Growing SaaS, product iteration",
  },
  {
    title: "Dedicated engineers",
    description: "Add one or more engineers to your existing team. You direct the work, we supply the talent.",
    icon: "code",
    ideal: "Team extensions, agency overflow",
  },
];

export const testimonials = [
  {
    quote:
      "US Digital Solutions felt like an extension of our team from week one. They brought structure to a complex build and delivered a product our customers love.",
    name: "Jordan Lee",
    role: "Founder, Fieldnote",
    initials: "JL",
    linkedin: "https://linkedin.com/in/jordan-lee",
  },
  {
    quote:
      "Clear communication, thoughtful engineering, and no surprises. We went from backlog to a confident launch without slowing down our business.",
    name: "Morgan Davis",
    role: "Managing Partner, Goodwell Digital",
    initials: "MD",
    linkedin: "https://linkedin.com/in/morgan-davis",
  },
];

export const projects = [
  {
    name: "Fieldnote",
    category: "SaaS · Operations",
    summary: "Giving distributed field teams a simpler way to capture work and keep clients in the loop.",
    problem: "Teams relied on disconnected spreadsheets and status updates to coordinate daily work.",
    solution: "We designed and built a collaborative web platform with mobile-ready workflows and clear reporting.",
    result: "Teams cut daily status-update overhead by ~3 hours and client satisfaction scores rose from 6.2 to 8.7/10 within the first quarter.",
    metric: "3 hrs saved / day",
    tech: ["Next.js", "TypeScript", "Java", "PostgreSQL"],
    color: "from-[#10284e] to-[#1b477d]",
    mark: "F",
  },
  {
    name: "Goodwell",
    category: "Agency · Team extension",
    summary: "Helping an independent digital agency take on bigger client projects with confidence.",
    problem: "A growing pipeline made it difficult to meet delivery dates with the in-house team alone.",
    solution: "We paired experienced engineers with their team and established a shared, predictable sprint rhythm.",
    result: "The agency onboarded 4 new enterprise clients in 6 months and reduced missed sprint commitments from 40% to under 8%.",
    metric: "4 new clients in 6 months",
    tech: ["React", "Node.js", "AWS", "Figma"],
    color: "from-[#0c1b2e] to-[#163454]",
    mark: "G",
  },
  {
    name: "Meridian",
    category: "Small business · E-commerce",
    summary: "Making a premium home-goods brand's online storefront feel as considered as its products.",
    problem: "The older store was hard to manage and made browsing and checkout unnecessarily cumbersome.",
    solution: "We rebuilt the storefront with a flexible content system and a fast, accessible shopping experience.",
    result: "Page load time dropped from 6.4 s to 1.1 s; checkout conversion increased by 34% in the first two months post-launch.",
    metric: "+34% checkout conversion",
    tech: ["Next.js", "Shopify", "TypeScript", "Vercel"],
    color: "from-[#101a29] to-[#25405c]",
    mark: "M",
  },
];
