// All portfolio content lives in this file. Edit it and redeploy to update the site.
import { AiOutlineApi } from "react-icons/ai";
import { BsTerminal } from "react-icons/bs";
import { FaCubes, FaDatabase, FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiAmazons3,
  SiAzuredevops,
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiLua,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import images from "./images";

export const profile = {
  name: "Deepak Rathore",
  // Hero intro, typed out one block at a time. `kind` sets the style and speed.
  intro: [
    { kind: "title", text: "👋 Hi, I'm Deepak!" },
    {
      kind: "body",
      text: "I'm a senior software engineer who enjoys turning messy real-world problems into simple, reliable software. 🛠️ For 6 years I've built APIs, dashboards and integrations for startups, and today I help retailers give returns and excess inventory a second life through nonprofits.\u00A0🌱",
    },
    {
      kind: "body",
      text: "When I'm not shipping features, I'm digging into open source\u00A0🧩 or debugging something that \"should work\".\u00A0🐛",
    },
    { kind: "cta", text: "📬 Let's connect!", href: "#contact" },
  ],
  summary:
    "Full-stack engineer with 6 years building web apps and APIs in Go, Node.js, TypeScript, React/Next.js, and PostgreSQL. Experienced with the Shopify Admin GraphQL API, webhook integrations, and returns, logistics, and supply-chain workflows.",
  email: "dsrdeepak8@gmail.com",
  phone: "+91 7742798638",
  location: "Jaipur, Rajasthan, India",
  linkedin: "https://www.linkedin.com/in/deepak-singh-rathore-a100aa181/",
  github: "https://github.com/Deepak123bharat",
  resume:
    "https://drive.google.com/file/d/1ejO5-Wxhy-2q0xiWJzmHyxOvfFvQpobq/view?usp=sharing",
};

// `id` is the section anchor; `label` is the text shown in the navbar.
export const navItems = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "work", label: "projects" },
  { id: "contact", label: "contact" },
];

export const abouts = [
  {
    title: "Full-Stack Engineer",
    description:
      "Six years shipping web apps and APIs end to end with Go, Node.js, TypeScript, React, and Next.js.",
    image: images.about04,
  },
  {
    title: "Commerce & Logistics",
    description:
      "Shopify apps on the Admin GraphQL API and real-time webhooks, automating returns, refunds, exchanges, and deliveries.",
    image: images.about01,
  },
  {
    title: "APIs & Data",
    description:
      "GraphQL and REST APIs and microservices backed by PostgreSQL, Redis, and MongoDB, tested and shipped through CI.",
    image: images.about02,
  },
  {
    title: "Open Source",
    description:
      "Two-time Google Summer of Code intern, and worked with Microsoft's Roslyn team on the open-source C# compiler.",
    image: images.openSource,
  },
];

export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "LiquiDonate",
    location: "Oakland, CA, USA (Remote)",
    period: "Sep 2025 – Present",
    product: "Returns Direct (Shopify app) · Retailer & Nonprofit Dashboard",
    points: [
      "Built features for a Shopify app (Go + Next.js) that automates merchant returns, refunds, and exchanges via the Shopify Admin GraphQL API and real-time webhooks.",
      "Rebuilt the retailer and nonprofit dashboard in Next.js 15, setting up its App Router architecture with TypeScript, Apollo Client, and NextAuth, and shipped marketplace, checkout, fulfillment, and bulk CSV/Excel donation import flows.",
      "Integrated Bungii's delivery API and webhooks to keep delivery data and statuses in sync.",
      "Built a manual returns flow that auto-matches returned items to nonprofits and creates EasyPost shipping labels, plus self-serve FedEx pickup scheduling and admin tools to manage pickups.",
      "Implemented return-fraud scoring in the Shopify returns portal, rating returns 0–100 on empty-box history, refund value, return frequency, and shared addresses, with the top reasons shown to merchants.",
      "Parallelized the Go test suite in CI across 4 Ginkgo workers, each with its own PostgreSQL database template-cloned from a single migrated copy so every worker gets an identical schema.",
    ],
    tech: [
      "Go (Gin, gqlgen, GORM)",
      "GraphQL",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Shopify Admin API",
      "GCP",
    ],
  },
  {
    role: "Software Engineer (Vendor at Microsoft)",
    company: "Tech Mahindra · Client: Microsoft",
    location: "Hyderabad, India",
    period: "Aug 2024 – Aug 2025",
    product: "Roslyn (.NET compiler platform)",
    points: [
      "Worked with the Roslyn team on the open-source C# compiler and developer tooling in Visual Studio 2022.",
      "Automated GitHub issue triage for the Roslyn repo using GitHub Actions, improving issue management.",
    ],
    tech: ["C#", ".NET", "SQL", "Azure DevOps", "GitHub Actions"],
  },
  {
    role: "Full Stack Developer",
    company: "Suuchi Inc.",
    location: "Remote, US",
    period: "Jan 2024 – Jul 2024",
    product: "Suuchi GRID (supply chain platform)",
    points: [
      "Built user-friendly UIs and backend APIs for Grid, Suuchi's supply chain platform.",
      "Worked closely with the product team to translate PRDs into effective client solutions.",
    ],
    tech: ["Node.js", "TypeScript", "React", "Angular", "PostgreSQL", "Jenkins"],
  },
  {
    role: "Full Stack Developer",
    company: "GoKwik",
    location: "Bangalore, India",
    period: "Jan 2023 – Jan 2024",
    product: "GoKwik Merchant Dashboard",
    points: [
      "Led the integration of GoKwik's RTO (return-to-origin) API into the FYND commerce platform via a FYND extension, owning the roadmap and deadlines with cross-functional teams.",
      "Built scalable Node.js APIs and React interfaces for kwik.ai.",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "MongoDB", "Redis", "AWS S3", "Jenkins"],
  },
  {
    role: "Software Development Engineer",
    company: "Global Satellite Engineering",
    location: "Remote, US",
    period: "Sep 2020 – Nov 2022",
    product: "GSatTrack (satellite and GSM tracking)",
    points: [
      "Improved scalability and responsiveness of GSatTrack, a web-based satellite and GSM tracking platform, by designing and building microservices in Node.js and .NET, cutting deployment time by 20%.",
      "Ensured back-end reliability with unit tests for processing, connectivity, and database interactions.",
    ],
    tech: [
      "Node.js",
      ".NET",
      "ASP.NET MVC",
      "SQL",
      "REST APIs",
      "React",
      "JavaScript",
      "Microservices",
    ],
  },
];

export const openSource = [
  {
    title: "Google Summer of Code Intern",
    org: "LabLua",
    period: "May 2021 – Aug 2021",
    description:
      "Split LuaRocks, Lua's package manager, into 7 standalone modules (file system, tar, zip, patch, OS detection, and more) with Teal type definitions and Busted unit tests.",
    link: "https://github.com/Deepak123bharat/lablua-submission",
  },
  {
    title: "Google Summer of Code Intern",
    org: "Lua-GL",
    period: "May 2019 – Aug 2019",
    description:
      "Built interactive editing features for Lua-GL, a Lua library for schematic and diagram editors: connectors with auto-routing, port and grid snapping, shape selection, and grouping.",
    link: "https://github.com/rigeda/lua-gl",
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "Shri Mata Vaishno Devi University",
    period: "2017 – 2021",
    detail: "CGPA 8.1/10",
  },
];

export const awards = [
  "Completed 1,000 hours of practical learning in Masai's Full Stack Web Development program, certified for outstanding results and conduct, and led a 5-member team on its projects.",
  "Mentored students at Code Club SMVDU in data structures and algorithms, from basics to advanced.",
];

// `darkColor` replaces `color` in dark mode for brand colors too dark to see there.
export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#E8B600" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "SQL", icon: FaDatabase, color: "#336791", darkColor: "#8FB3DD" },
      { name: "C#", icon: SiCsharp, color: "#9B4F96" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "Lua", icon: SiLua, color: "#2C2D72", darkColor: "#A5A8F0" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#149ECA" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "REST APIs", icon: AiOutlineApi, color: "var(--secondary-color)" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4", darkColor: "#A48BF5" },
      { name: "Microservices", icon: FaCubes, color: "var(--secondary-color)" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "SQL Server", icon: SiMicrosoftsqlserver, color: "#CC2927" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "AWS S3", icon: SiAmazons3, color: "#569A31" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Azure DevOps", icon: SiAzuredevops, color: "#0078D7" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Jira", icon: SiJira, color: "#0052CC", darkColor: "#4C9AFF" },
      { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
      { name: "Claude Code", icon: BsTerminal, color: "#D97757" },
    ],
  },
];

export const projectFilters = [
  "All",
  "Professional",
  "Open-Source",
  "Web App",
  "Mobile App",
];

// Projects without an `image` render as a colored tile using `icon` and `accent`.
export const projects = [
  {
    title: "Returns Direct",
    description:
      "Shopify app (Go + Next.js) that automates merchant returns, refunds, and exchanges via the Shopify Admin GraphQL API and real-time webhooks, with 0–100 return-fraud scoring.",
    tags: ["Professional"],
    icon: SiShopify,
    accent: "#5E8E3E",
    projectLink: "https://returns.liquidonate.com/login",
  },
  {
    title: "LiquiDonate Dashboard",
    description:
      "Retailer and nonprofit dashboard rebuilt in Next.js 15 with TypeScript, Apollo Client, and NextAuth: marketplace, checkout, fulfillment, and bulk CSV/Excel donation imports.",
    tags: ["Professional"],
    icon: SiNextdotjs,
    accent: "#111827",
    projectLink: "https://dashboard.liquidonate.com/",
  },
  {
    title: "Roslyn (.NET Compiler Platform)",
    description:
      "Worked with Microsoft's Roslyn team on the open-source C# compiler and Visual Studio 2022 tooling, and automated GitHub issue triage with GitHub Actions.",
    tags: ["Professional", "Open-Source"],
    icon: SiDotnet,
    accent: "#512BD4",
    codeLink: "https://github.com/dotnet/roslyn",
  },
  {
    title: "Lua-GL (GSoC 2019)",
    description:
      "Interactive editing for a Lua schematic and diagram library: connectors with auto-routing, port and grid snapping, shape selection, and grouping.",
    tags: ["Open-Source"],
    image: images.luaGl,
    projectLink: "https://lua-gl.rigeda.org/",
    codeLink: "https://github.com/rigeda/lua-gl",
  },
  {
    title: "Lua-GL Web App",
    description: "Web application and documentation site for the Lua-GL library.",
    tags: ["Open-Source", "Web App"],
    image: images.luaGlWeb,
    projectLink: "https://lua-gl.rigeda.org/",
    codeLink: "https://github.com/rigeda/webforluagl",
  },
  {
    title: "MyNetDiary Clone",
    description: "Web app to track health and diet, built as a weight-loss assistant.",
    tags: ["Web App"],
    image: images.myNetDiary,
    projectLink: "https://steady-kringle-714474.netlify.app/",
    codeLink: "https://github.com/Pranesh1221/Masai-MyNetDiary-Project",
  },
  {
    title: "SMVDU Club",
    description:
      "A starting point for new students with information about every SMVDU club (Code Club, AI Circle, and more).",
    tags: ["Web App"],
    image: images.smvduClub,
    projectLink: "https://smvduclub.github.io/main_page/",
    codeLink: "https://github.com/smvduclub/main_page/graphs/contributors",
  },
  {
    title: "Image Compression App",
    description: "Android app that compresses images to a required file size.",
    tags: ["Mobile App"],
    image: images.imageCompression,
    codeLink: "https://github.com/Deepak123bharat/Image-Compression-Android-App",
  },
  {
    title: "LuaRocks Refactor (GSoC 2021)",
    description:
      "Split LuaRocks, Lua's package manager, into 7 standalone modules with Teal type definitions and Busted unit tests.",
    tags: ["Open-Source"],
    image: images.luarocks,
    codeLink: "https://github.com/Deepak123bharat/lablua-submission",
  },
];
