export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  contribution?: string;
  githubUrl?: string;
  liveUrl?: string;
  recognition?: string;
  highlights: string[];
  accentColor: string;
}

export interface Achievement {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  organization: string;
  project?: string;
  details: string;
  category: 'hackathon' | 'academic' | 'cybersecurity' | 'innovation';
  badgeText: string;
  accent: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  sponsor: string;
  duration: string;
  grade: string;
  description: string[];
  skillsGained: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialBadge: string;
  details: string;
  duration?: string;
  category: string;
  skills: string[];
  verificationAvailable: boolean;
  linkText?: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  iconType: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}
