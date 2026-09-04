export type PortfolioRole = 'fullstack' | 'design-engineer' | 'systems-architect' | 'ai-engineer';

export type HeadlineCategory = 'conversion' | 'authority' | 'product-builder' | 'minimalist';

export interface HeadlineOption {
  id: string;
  category: HeadlineCategory;
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  conversionRationale: string;
}

export interface BioOption {
  id: string;
  label: string;
  targetAudience: string;
  content: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  client: string;
  category: 'Full-Stack' | 'Systems & Backend' | 'Design Engineering';
  featuredImage: string;
  mediaType?: 'image' | 'video';
  videoDuration?: string;
  detailedCaseStudyUrl?: string;
  problem: {
    overview: string;
    keyPainPoints: string[];
  };
  solution: {
    overview: string;
    architectureHighlights: string[];
    technicalDecisions: string[];
  };
  tools: string[];
  outcomes: {
    metrics: MetricItem[];
    businessImpact: string;
  };
  liveDemoUrl?: string;
  githubUrl?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  linkedInUrl?: string;
}

export interface SitemapSection {
  id: string;
  sectionNumber: string;
  name: string;
  pageOrAnchor: string;
  targetGoal: string;
  keyElements: string[];
  psychologyNote: string;
}

export interface AudienceProfile {
  id: string;
  badge: string;
  title: string;
  idealRoleOrEntity: string;
  primaryGoal: string;
  frictionPoints: string[];
  keySignalsToConvert: string[];
  recommendedCta: string;
  recruiterTakeaway: string;
}

export interface TechStackComparisonItem {
  platform: string;
  tagline: string;
  bestFor: string;
  performanceScore: number;
  seoFlexibility: 'Maximum' | 'High' | 'Moderate' | 'Limited';
  customCodeFreedom: 'Full 100%' | 'High' | 'Restricted' | 'Sandboxed';
  conversionStrengths: string[];
  tradeoffs: string[];
  verdict: string;
  recommended: boolean;
}

export interface StrategyQuestion {
  id: string;
  question: string;
  context: string;
  recommendation: string;
  options: {
    label: string;
    value: string;
    impact: string;
  }[];
}
