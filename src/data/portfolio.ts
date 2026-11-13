import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Etteti Keerthana",
    monogram: "EK",
    shortName: "Keerthana",
    role: "First-year CSE (AI) student who builds websites with the help of AI",
    subRole: "NIAT // JOY UNIVERSITY",
    transitId: "EK-2026",
    origin: "NIAT x Joy University",
    availability: "Learning & Building",
    specialization: "CSE (AI) + Web",
    stackFocus: "React + AI-Assisted",
    heroHeadline: "Building websites with",
    heroHeadlineAccent: "the help of AI.",
    heroBio: "First-year CSE (AI) student who builds websites with the help of AI.",
    fullBio: [
      "I'm a first-year CSE (AI) student at NIAT, in collaboration with Joy University, where I learn practical, industry-focused skills.",
      "I love building websites with the help of AI and I'm interested in vibe coding—turning ideas into working web apps quickly and learning by building. I'm looking for opportunities to keep learning, build real projects, and grow as a developer."
    ],
    currently: {
      learning: "React, TypeScript & Tailwind CSS",
      building: "Websites with AI-assisted vibe coding",
      openTo: "Learning opportunities & starter projects"
    },
    images: {
      heroNightShot: "",
      portraitCrimson: "",
      classroomBanner: ""
    }
  },
  departureBoard: {
    departure: "2026 // NIAT x JOY UNIVERSITY",
    destination: "BUILDING WEBSITES WITH AI",
    track: "FIRST-YEAR CSE (AI)",
    status: "LEARNING & BUILDING"
  },
  projects: [
    {
      id: "task-flow",
      number: "PROJECT NO. 01",
      title: "TASK FLOW",
      domain: "task-flow-alpha-inky.vercel.app",
      category: "Productivity",
      status: "LIVE",
      problem: "Organizing daily tasks with clear priorities and due dates in a responsive interface.",
      description: "A to-do list app to organize tasks with priorities and due dates, with dark/light mode. Built with AI-assisted development.",
      outcome: "Deployed live on Vercel with priority levels, due dates, and dark/light mode switching.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://task-flow-alpha-inky.vercel.app/",
      githubUrl: "https://github.com/keerthanareddy283/Task-flow.git",
      metrics: {
        label1: "STACK",
        val1: "REACT + TS",
        label2: "THEME",
        val2: "DARK / LIGHT",
        label3: "BUILD",
        val3: "AI-ASSISTED"
      },
      mockup: {
        statusBadge: "LIVE ON VERCEL",
        title: "Task Flow",
        subtitle: "Organize tasks with priorities, due dates, and dark/light mode",
        footerNote: "BUILT WITH AI-ASSISTED DEVELOPMENT"
      }
    },
    {
      id: "expense-tracker",
      number: "PROJECT NO. 02",
      title: "EXPENSE TRACKER",
      domain: "expense-tracker-keerthi-8fd5.vercel.app",
      category: "Finance",
      status: "LIVE",
      problem: "Logging income and expenses and visualizing spending by category with clear charts.",
      description: "A personal finance dashboard to log income and expenses and view spending by category with charts. Built with AI-assisted development.",
      outcome: "Deployed live on Vercel with interactive spending category charts built using Recharts.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Vite"],
      liveUrl: "https://expense-tracker-keerthi-8fd5.vercel.app/",
      githubUrl: "https://github.com/keerthanareddy283/Expense-tracker.git",
      metrics: {
        label1: "CHARTS",
        val1: "RECHARTS",
        label2: "STACK",
        val2: "REACT + TS",
        label3: "BUILD",
        val3: "AI-ASSISTED"
      },
      mockup: {
        statusBadge: "LIVE ON VERCEL",
        title: "Expense Tracker",
        subtitle: "Log income and expenses and view spending by category with charts",
        footerNote: "BUILT WITH AI-ASSISTED DEVELOPMENT"
      }
    }
  ],
  repositories: [
    {
      name: "Task-flow",
      description: "To-do list web app for organizing tasks, priorities, and due dates with dark/light mode.",
      language: "React / TypeScript",
      updated: "2026",
      githubUrl: "https://github.com/keerthanareddy283/Task-flow.git"
    },
    {
      name: "Expense-tracker",
      description: "Personal finance dashboard for logging income and expenses with Recharts category charts.",
      language: "React / TypeScript",
      updated: "2026",
      githubUrl: "https://github.com/keerthanareddy283/Expense-tracker.git"
    }
  ],
  skills: [
    { name: "HTML", role: "Frontend", highlight: false, category: "Frontend" },
    { name: "CSS", role: "Frontend", highlight: false, category: "Frontend" },
    { name: "JavaScript", role: "Frontend", highlight: false, category: "Frontend" },
    { name: "React", role: "Frontend", highlight: true, category: "Frontend" },
    { name: "TypeScript", role: "Frontend", highlight: false, category: "Frontend" },
    { name: "Tailwind CSS", role: "Frontend", highlight: false, category: "Frontend" },
    { name: "Git", role: "Tools", highlight: false, category: "Tools" },
    { name: "GitHub", role: "Tools", highlight: false, category: "Tools" },
    { name: "VS Code", role: "Tools", highlight: false, category: "Tools" },
    { name: "Vercel", role: "Tools", highlight: false, category: "Tools" },
    { name: "Google AI Studio", role: "Tools", highlight: true, category: "Tools" },
    { name: "Vibe Coding", role: "AI-Assisted Dev", highlight: true, category: "Focus Areas" }
  ],
  experienceEducation: [
    {
      id: "education-btech",
      period: "2026 - present",
      role: "B.Tech CSE (AI)",
      institution: "NIAT in collaboration with Joy University",
      bullets: [
        "First-year student learning practical, industry-focused Computer Science Engineering (AI) skills.",
        "Building web applications with React, TypeScript, Tailwind CSS, and AI-assisted development."
      ],
      tag: "EDUCATION"
    }
  ],
  socials: {
    email: "keerthanareddyetteti709@gmail.com",
    github: "https://github.com/keerthanareddy283"
  }
};
