export interface Project {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  domain: string;
  category: 'All' | 'Productivity' | 'Finance';
  status: 'LIVE' | 'IN PROGRESS';
  problem: string;
  description: string;
  outcome: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
  };
  mockup: {
    statusBadge: string;
    title: string;
    subtitle: string;
    footerNote: string;
  };
}

export interface SkillItem {
  name: string;
  role: string;
  highlight?: boolean;
  category: 'Frontend' | 'Tools' | 'Focus Areas';
}

export interface RepositoryItem {
  name: string;
  description: string;
  language: string;
  updated: string;
  githubUrl: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  institution: string;
  location?: string;
  bullets: string[];
  tag?: string;
}

export interface SocialLinks {
  email: string;
  github: string;
}

export interface CurrentlyStrip {
  learning: string;
  building: string;
  openTo: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    shortName: string;
    role: string;
    subRole: string;
    transitId: string;
    origin: string;
    availability: string;
    specialization: string;
    stackFocus: string;
    heroHeadline: string;
    heroHeadlineAccent: string;
    heroBio: string;
    fullBio: string[];
    currently: CurrentlyStrip;
    images: {
      heroNightShot: string;
      classroomBanner: string;
      portraitCrimson: string;
    };
  };
  departureBoard: {
    departure: string;
    destination: string;
    track: string;
    status: string;
  };
  projects: Project[];
  repositories: RepositoryItem[];
  skills: SkillItem[];
  experienceEducation: TimelineItem[];
  socials: SocialLinks;
}
