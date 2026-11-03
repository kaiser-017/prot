export interface Project {
  id: string;
  title: string;
  category: 'landing' | 'webapp' | 'uiux';
  categoryLabel: string;
  client: string;
  year: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  liveUrl: string;
  featured: boolean;
  color: string;
  accentColor: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  previewType: 'bloom' | 'nexora' | 'monolith' | 'aura' | 'vanguard' | 'kinetic';
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  timeline: string;
  tagline: string;
  description: string;
  deliverables: string[];
  keyActions: string[];
}

export interface ClientReview {
  id: string;
  clientName: string;
  role: string;
  company: string;
  project: string;
  quote: string;
  metricResult: string;
  avatarSeed: string;
}

export type ProjectScopeType = 'landing' | 'website' | 'webapp' | 'redesign';
export type TimelineType = 'fast' | 'standard' | 'flexible';

export interface EstimatorAddon {
  id: string;
  label: string;
  description: string;
  price: number;
  days: number;
}

export interface EstimatorCalculation {
  basePriceMin: number;
  basePriceMax: number;
  addonTotal: number;
  totalMin: number;
  totalMax: number;
  estimatedDaysMin: number;
  estimatedDaysMax: number;
  formattedRange: string;
  formattedTimeline: string;
}
