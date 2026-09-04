import {
  HeadlineOption,
  BioOption,
  CaseStudy,
  SitemapSection,
  AudienceProfile,
  TechStackComparisonItem,
  StrategyQuestion,
  ExperienceItem,
  Testimonial
} from '../types';

export const HEADLINE_OPTIONS: HeadlineOption[] = [
  {
    id: 'conversion-1',
    category: 'conversion',
    badge: 'Conversion-Optimized (Recommended)',
    title: 'Building High-Velocity Web Apps That Turn Traffic Into Revenue',
    subtitle: 'Staff Full-Stack Engineer & Product Builder specializing in Next.js, distributed TypeScript architectures, and zero-latency user experiences for venture-backed startups.',
    primaryCtaText: 'Explore Case Studies',
    secondaryCtaText: 'Schedule Intro Call',
    conversionRationale: 'Leads with business value and concrete outcomes ("Turn Traffic Into Revenue") rather than generic skills, immediately filtering for high-value clients and recruiters.'
  },
  {
    id: 'authority-1',
    category: 'authority',
    badge: 'Authority & Tech Lead',
    title: 'Architecting Scalable Systems For High-Growth Engineering Teams',
    subtitle: 'Over 8 years scaling distributed systems, cloud infrastructure, and enterprise design systems from 0 to 10M+ daily active requests with 99.99% uptime.',
    primaryCtaText: 'View Architecture Case Studies',
    secondaryCtaText: 'Download Technical Resume',
    conversionRationale: 'Focuses on seniority, scale, and risk reduction. Perfect for Director of Engineering, CTO, and Staff Engineer recruiting pipelines.'
  },
  {
    id: 'product-builder-1',
    category: 'product-builder',
    badge: 'Product & Design Engineer',
    title: 'Bridging Product Design & Production Engineering',
    subtitle: 'I turn complex business workflows into fluid, delightful, and hyper-performant digital interfaces. From Figma system tokens to production database queries.',
    primaryCtaText: 'See Interactive Work',
    secondaryCtaText: 'Get In Touch',
    conversionRationale: 'Appeals heavily to early-stage founders and product agencies who need generalist unicorn builders that eliminate handoff friction.'
  },
  {
    id: 'minimalist-1',
    category: 'minimalist',
    badge: 'Craft & Minimalist',
    title: 'Software Engineer Crafting Resilient Systems & Fluid Interfaces',
    subtitle: 'Obsessed with micro-interactions, clean abstractions, and sub-100ms response times. Currently open for select consulting engagements & advisory.',
    primaryCtaText: 'Selected Projects',
    secondaryCtaText: 'Read Philosophy',
    conversionRationale: 'Editorial, understated confidence. High credibility among senior engineering peers and design-led technology studios.'
  }
];

export const BIO_OPTIONS: BioOption[] = [
  {
    id: 'bio-recruiter',
    label: 'The 30-Second Recruiter Pitch',
    targetAudience: 'Tech Recruiters & Hiring Managers',
    content: 'Senior Full-Stack & Systems Engineer with 8+ years of experience shipping production web applications at scale. Core competencies include Next.js/React, TypeScript, Node.js microservices, PostgreSQL, and AWS/GCP cloud architectures. Previously led engineering initiatives reducing p99 latency by 45% and slashing cloud spend by $180k/yr. Driven by clean code, high team velocity, and measurable business impact.'
  },
  {
    id: 'bio-founder',
    label: 'The Startup Founder & Client Pitch',
    targetAudience: 'Founders, VCs & Agency Leads',
    content: 'I help high-growth startups transform ambitious product roadmaps into battle-tested, revenue-generating software. Rather than just writing tickets, I think like a product co-founder: scrutinizing user journeys, simplifying data models, and optimizing conversion funnels. Whether building your MVP from zero or modernizing a legacy tech stack for series-A scale, I deliver rapid results without technical debt.'
  },
  {
    id: 'bio-craft',
    label: 'Craft, Philosophy & Engineering Mindset',
    targetAudience: 'Design Engineers & Tech Leads',
    content: 'I believe the best software lives at the intersection of mechanical sympathy and aesthetic rigor. Code is fundamentally a liability—the art is delivering maximum leverage with minimum incidental complexity. When I build, I obsess over details: 60fps gesture physics, predictable cache invalidation, idempotent APIs, and ergonomic developer documentation.'
  }
];

export const TOP_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexus-cloud-os',
    title: 'Nexus Cloud Observability Platform',
    tagline: 'Real-time telemetry and incident triage for distributed microservices',
    role: 'Lead Architect & Full-Stack Engineer',
    timeline: '4 Months (Q3-Q4 2025)',
    client: 'HyperScale Systems',
    category: 'Systems & Backend',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    mediaType: 'video',
    videoDuration: '02:45 Walkthrough',
    detailedCaseStudyUrl: '#nexus-cloud-os-deepdive',
    problem: {
      overview: 'Engineering teams spent an average of 45 minutes correlating logs, distributed traces, and Kubernetes pod health across multiple fragmented SaaS dashboards during outages.',
      keyPainPoints: [
        'Fragmented telemetry caused delayed mean time to resolution (MTTR) during tier-1 incidents.',
        'High network egress and third-party SaaS metric ingestion costs exceeding $32,000/month.',
        'Heavy browser lag when visualizing streaming WebSockets with >50,000 live metrics.'
      ]
    },
    solution: {
      overview: 'Engineered a unified, self-hosted telemetry console built with Next.js 15 App Router, ClickHouse time-series indexing, and a WebGL-accelerated canvas canvas for real-time timeline scrubbing.',
      architectureHighlights: [
        'Decoupled event pipeline processing 120,000 telemetry events/sec via Apache Kafka and Go ingestion workers.',
        'Virtual windowing and Web Workers for zero-frame-drop rendering of millions of data points in browser.',
        'Automated root-cause anomaly detection utilizing streaming heuristics to isolate anomalous service spikes in <10 seconds.'
      ],
      technicalDecisions: [
        'Chose ClickHouse over ElasticSearch for a 12x storage compression ratio and 4x faster aggregation queries.',
        'Implemented server-sent events (SSE) with HTTP/2 multiplexing instead of heavy bidirectional WebSockets for mobile network stability.'
      ]
    },
    tools: ['Next.js 15', 'TypeScript', 'ClickHouse', 'Tailwind CSS', 'Go', 'Docker', 'WebGL', 'Kafka'],
    outcomes: {
      metrics: [
        { label: 'MTTR Incident Reduction', value: '64%', change: 'Down from 45m to 16m', trend: 'down' },
        { label: 'Cloud Infrastructure Savings', value: '$180k/yr', change: 'Eliminated SaaS seats', trend: 'up' },
        { label: 'P95 Dashboard Load Time', value: '180ms', change: '5.2x faster than legacy', trend: 'down' },
        { label: 'Daily Active Engineers', value: '850+', change: '100% internal adoption', trend: 'up' }
      ],
      businessImpact: 'Eliminated reliance on three disjointed enterprise logging contracts, unified operational truth across 42 engineering squads, and cut monthly incident downtime by over 14 hours.'
    },
    liveDemoUrl: 'https://demo-nexus.example.com',
    githubUrl: 'https://github.com/example/nexus-telemetry',
    codeSnippet: {
      language: 'typescript',
      filename: 'useStreamingMetrics.ts',
      code: `export function useStreamingMetrics(streamUrl: string, bufferWindow = 500) {
  const [metrics, setMetrics] = useState<MetricPoint[]>([]);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Offload high-frequency stream aggregations to background Web Worker
    const worker = new Worker(new URL('./telemetryWorker.ts', import.meta.url));
    worker.postMessage({ type: 'CONNECT', url: streamUrl, windowMs: bufferWindow });

    worker.onmessage = (event: MessageEvent<MetricBatch>) => {
      requestAnimationFrame(() => {
        setMetrics((prev) => [...prev.slice(-1000), ...event.data.points]);
      });
    };

    return () => worker.terminate();
  }, [streamUrl, bufferWindow]);

  return { metrics };
}`
    }
  },
  {
    id: 'paypulse-fintech',
    title: 'PayPulse Global Payment Engine',
    tagline: 'Multi-rail cross-border payment router with sub-second settlement',
    role: 'Principal Full-Stack Engineer',
    timeline: '6 Months (2025)',
    client: 'PayPulse FinTech',
    category: 'Full-Stack',
    featuredImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    mediaType: 'video',
    videoDuration: '01:50 Demo',
    detailedCaseStudyUrl: '#paypulse-fintech-deepdive',
    problem: {
      overview: 'A cross-border commerce platform suffered an 18% checkout abandonment rate due to localized payment failures, rigid gateway retries, and opaque regulatory KYC steps.',
      keyPainPoints: [
        'Single gateway dependency caused cascading payment failures when provider APIs experienced downtime.',
        'High checkout friction with multi-step redirects dropping mobile conversions to 3.2%.',
        'Complex webhook state synchronization leading to dangerous race conditions in order fulfillment.'
      ]
    },
    solution: {
      overview: 'Built a fault-tolerant payment orchestration layer with dynamic multi-rail routing, idempotent payment state machines, and a clean headless React checkout component.',
      architectureHighlights: [
        'Idempotency-first transactional architecture using PostgreSQL row-level locks and Redis distributed locks.',
        'Smart failover engine automatically rerouting failed transactions to secondary gateways within 350ms without user intervention.',
        'Embedded lightweight checkout modal with 100% native mobile biometric payment support (Apple Pay, Google Pay).'
      ],
      technicalDecisions: [
        'Adopted Event Sourcing for the ledger to guarantee immutable financial audit trails and zero data corruption.',
        'Implemented Edge middleware for geo-routing checkout sessions to the closest regional database read replica.'
      ]
    },
    tools: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Stripe API', 'Zod'],
    outcomes: {
      metrics: [
        { label: 'Payment Success Rate', value: '99.4%', change: '+14.2% lift across 12 countries', trend: 'up' },
        { label: 'Annual Processed GMV', value: '$42M+', change: 'Handled Black Friday spikes', trend: 'up' },
        { label: 'Checkout Abandonment', value: '7.8%', change: 'Reduced from 18.0%', trend: 'down' },
        { label: 'P99 Transaction Latency', value: '410ms', change: 'Sub-second guarantee', trend: 'down' }
      ],
      businessImpact: 'Directly generated $3.8M in incremental captured revenue over 12 months by salvaging previously failed transactions and doubling mobile checkout completion.'
    },
    liveDemoUrl: 'https://paypulse.example.com',
    githubUrl: 'https://github.com/example/paypulse-engine',
    codeSnippet: {
      language: 'typescript',
      filename: 'paymentOrchestrator.ts',
      code: `export async function routePaymentTransaction(intent: PaymentIntent): Promise<PaymentResult> {
  const primaryGateway = selectOptimalGateway(intent.currency, intent.country);
  
  try {
    return await executeIdempotentCharge(primaryGateway, intent);
  } catch (error) {
    if (isRetryableGatewayFailure(error)) {
      const fallbackGateway = selectFallbackGateway(primaryGateway);
      telemetry.recordFailover(intent.id, primaryGateway, fallbackGateway);
      return await executeIdempotentCharge(fallbackGateway, intent);
    }
    throw error;
  }
}`
    }
  },
  {
    id: 'pulsedesign-system',
    title: 'PulseDesign SaaS Design System',
    tagline: 'Accessible, tokenized component library powering 6 web applications',
    role: 'Design Technologist & Lead Front-End Engineer',
    timeline: '3 Months (2025)',
    client: 'SaaS Suite Inc.',
    category: 'Design Engineering',
    featuredImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    mediaType: 'image',
    detailedCaseStudyUrl: '#pulsedesign-system-deepdive',
    problem: {
      overview: 'Six disparate engineering squads were recreating identical buttons, modals, and data grids with inconsistent UX patterns, zero WCAG compliance, and 3-week design-to-production cycles.',
      keyPainPoints: [
        'Severe UI inconsistency across the product suite leading to negative customer NPS and usability churn.',
        'Duplicate CSS and inconsistent component APIs ballooning client bundle sizes by 320KB.',
        'Failed accessibility audits risking enterprise government contract renewals.'
      ]
    },
    solution: {
      overview: 'Created an accessible, multi-brand design system with Figma token synchronization, Tailwind CSS v4 variables, Radix UI primitives, and automated visual regression testing.',
      architectureHighlights: [
        'Automated Style Dictionary pipeline compiling Figma design tokens directly into typed Tailwind classes and CSS variables.',
        'Over 45 production components with keyboard navigation, screen reader testing, and strict WCAG AAA color contrast.',
        'Interactive documentation portal featuring live code sandboxes, prop inspectors, and copy-pasteable CLI templates.'
      ],
      technicalDecisions: [
        'Used headless component primitives (Radix) to separate accessibility behaviors from aesthetic brand theming.',
        'Packaged the system as tree-shakeable ES modules with zero runtime CSS-in-JS overhead.'
      ]
    },
    tools: ['React 19', 'Tailwind CSS', 'Radix UI', 'Figma Tokens', 'Storybook', 'TypeScript', 'Playwright'],
    outcomes: {
      metrics: [
        { label: 'Feature Delivery Velocity', value: '4 Days', change: 'Down from 3 Weeks', trend: 'down' },
        { label: 'Frontend Bundle Savings', value: '48%', change: 'Removed duplicate dependencies', trend: 'down' },
        { label: 'WCAG 2.1 Compliance', value: '100%', change: 'Passed external enterprise audit', trend: 'up' },
        { label: 'Developer Satisfaction', value: '94%', change: 'Measured across 38 engineers', trend: 'up' }
      ],
      businessImpact: 'Accelerated quarterly roadmap delivery across all 6 product teams, unblocked a $1.2M enterprise healthcare renewal, and established unified brand equity.'
    },
    liveDemoUrl: 'https://pulsedesign.example.com',
    githubUrl: 'https://github.com/example/pulsedesign-system',
    codeSnippet: {
      language: 'typescript',
      filename: 'Button.tsx',
      code: `import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm active:translate-y-px',
        outline: 'border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-200',
        ghost: 'hover:bg-slate-800/60 text-slate-300 hover:text-white',
      },
      size: {
        sm: 'h-9 px-3.5 text-xs rounded-md',
        md: 'h-11 px-5 text-sm rounded-lg',
        lg: 'h-12 px-7 text-base rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);`
    }
  }
];

export const SITEMAP_SECTIONS: SitemapSection[] = [
  {
    id: 'sec-hero',
    sectionNumber: '01',
    name: 'Hero Section (The First 5-Second Hook)',
    pageOrAnchor: '#hero',
    targetGoal: 'Instantly clarify what you do, who you do it for, and prove immediate credibility before they bounce.',
    keyElements: [
      'Availability Status Pill with active pulse ping (e.g., "Available for Q3/Q4 contracts & high-impact roles")',
      'Outcome-Driven Primary Headline (focusing on business value, speed, or revenue)',
      'Specific 2-sentence Subtitle (quantifying stack and target archetype)',
      'Dual High-Contrast CTAs: Primary ("Explore Case Studies") & Secondary ("Schedule Intro Call")',
      'Proof Bar / Velocity Ticker: 3-4 marquee statistics (e.g., "$42M+ GMV Processed", "99.9% Uptime", "8+ Yrs Experience")'
    ],
    psychologyNote: 'Visitors make a sub-conscious stay-or-leave judgment in 2.8 seconds. Stating your exact value proposition with quantifiable proof immediately lowers recruiter cognitive load.'
  },
  {
    id: 'sec-social-proof',
    sectionNumber: '02',
    name: 'Credibility Bar & Tech Stacks',
    pageOrAnchor: '#stack',
    targetGoal: 'Establish technical depth and enterprise credibility through familiar, high-standard technologies.',
    keyElements: [
      'Curated Stack Icons: Next.js 15, TypeScript, React 19, Tailwind CSS, PostgreSQL, Node, AWS, Docker',
      'Client / Venture logos or past company badges',
      'Short credibility stamp: "Trusted by founders and high-growth engineering teams"'
    ],
    psychologyNote: 'Technical hiring managers look for stack compatibility immediately. Visual badges act as effortless heuristic shortcuts.'
  },
  {
    id: 'sec-case-studies',
    sectionNumber: '03',
    name: 'Featured Case Studies (Proof of Mastery)',
    pageOrAnchor: '#projects',
    targetGoal: 'Demonstrate deep problem-solving skills, engineering rigor, and real commercial outcomes.',
    keyElements: [
      'Strict limit to Top 3 best, highly detailed projects (never dump 15 trivial school exercises)',
      'Structured 4-pillar narrative: The Pain/Problem, The Architectural Solution, The Tech Stack, and Measurable Outcomes',
      'Visual metric chips with trend percentages (e.g., "64% MTTR reduction", "$180k cost cut")',
      'Deep Dive Modal with code snippets, architecture flow, and live interactive demo preview',
      'Direct links to GitHub repositories and live URLs'
    ],
    psychologyNote: 'Recruiters and founders don’t hire people who just write code; they hire people who solve expensive problems. The 4-pillar format proves you understand business ROI.'
  },
  {
    id: 'sec-capabilities',
    sectionNumber: '04',
    name: 'Capabilities & Technical Depth Matrix',
    pageOrAnchor: '#capabilities',
    targetGoal: 'Demonstrate holistic competency across frontend, distributed backend, cloud infra, and UX product design.',
    keyElements: [
      'Four structured capability pillars: Frontend Architecture, Backend & Distributed Systems, Cloud & DevOps, Product & UI/UX',
      'Key architectural principles (e.g., "Performance as a feature", "Zero-trust type safety", "Idempotent pipelines")',
      'Experience timeline highlighting company roles and tangible achievements'
    ],
    psychologyNote: 'Confirms that your knowledge isn’t surface-level and that you understand system design trade-offs.'
  },
  {
    id: 'sec-testimonials',
    sectionNumber: '05',
    name: 'Social Proof & Endorsements',
    pageOrAnchor: '#testimonials',
    targetGoal: 'De-risk the hiring decision through peer and leadership verification.',
    keyElements: [
      '2-3 high-impact testimonials from Engineering Directors, Startup Founders, or Product Managers',
      'Clear author attribution with name, verified role, company, and LinkedIn link',
      'Quotes that highlight both technical execution and collaborative ownership'
    ],
    psychologyNote: 'Third-party validation eliminates perceived risk and validates that you are pleasant, reliable, and communicative to work with.'
  },
  {
    id: 'sec-contact',
    sectionNumber: '06',
    name: 'Conversion-Focused Contact & Booking',
    pageOrAnchor: '#contact',
    targetGoal: 'Eliminate friction for reaching out and convert interest into scheduled calls or inquiries.',
    keyElements: [
      'Dual conversion paths: Quick 15-Minute Intro Call Booking widget OR Direct Inquiry Form',
      'One-click "Copy Email to Clipboard" button with instant feedback toast',
      'Timezone & availability widget ("Current Local Time: PST / Responds within 4 hours")',
      'Inquiry type selector (Contract / Project, Full-time Role, Technical Advisory)'
    ],
    psychologyNote: 'Giving visitors an option between a calendar booking and a low-commitment copy-email maximizes conversion for both fast-moving founders and cautious recruiters.'
  }
];

export const TECH_STACK_COMPARISON: TechStackComparisonItem[] = [
  {
    platform: 'Next.js (App Router) + Tailwind CSS',
    tagline: 'The Gold Standard for Tech Founders & Full-Stack Engineers',
    bestFor: 'Senior developers, full-stack engineers, and startups demanding maximum performance, SEO, and custom interactive demos.',
    performanceScore: 98,
    seoFlexibility: 'Maximum',
    customCodeFreedom: 'Full 100%',
    conversionStrengths: [
      'Zero-compromise page speed: Server Components yield sub-50ms TTFB and perfect 100 Core Web Vitals.',
      'Showcase real technical mastery: Your portfolio itself is proof of your modern engineering competence.',
      'Embed live interactive web applications, real-time APIs, and custom WebGL/canvas sandboxes without platform limits.',
      'Complete ownership with zero monthly subscription lock-in (deploy free on Vercel or Cloud Run).'
    ],
    tradeoffs: [
      'Requires frontend code maintenance rather than a no-code visual canvas.',
      'Longer initial setup time compared to 1-click template builders.'
    ],
    verdict: 'Best in class. If you are applying for high-paying engineering or product roles at tech startups, using Next.js + Tailwind is the most convincing proof of capability.',
    recommended: true
  },
  {
    platform: 'Framer',
    tagline: 'The Visual Playground for UI/UX & Product Designers',
    bestFor: 'Pure visual designers, brand strategists, and freelancers who want canvas-style drag-and-drop animation without writing code.',
    performanceScore: 84,
    seoFlexibility: 'High',
    customCodeFreedom: 'Restricted',
    conversionStrengths: [
      'Stunning physics-based layout transitions and scroll-driven animation tools out of the box.',
      'Fast visual authoring and rapid prototyping directly from Figma designs.',
      'Built-in CMS for simple blog posts or project collections.'
    ],
    tradeoffs: [
      'Cannot run server-side code, real backend API endpoints, or complex algorithmic web app logic.',
      'Monthly recurring subscription fees and proprietary platform lock-in.',
      'Client-heavy JavaScript runtime can lead to sluggish Lighthouse mobile scores.'
    ],
    verdict: 'Ideal for visual designers, but lacks technical credibility for engineers seeking software roles.',
    recommended: false
  },
  {
    platform: 'Webflow',
    tagline: 'The Enterprise Agency & Marketing Standard',
    bestFor: 'Marketing agencies, content-heavy corporate portals, and non-technical clients needing visual editing controls.',
    performanceScore: 79,
    seoFlexibility: 'High',
    customCodeFreedom: 'Sandboxed',
    conversionStrengths: [
      'Visual CSS box-model editor with robust client-facing editor mode.',
      'Extensive agency ecosystem and reliable hosted infrastructure.'
    ],
    tradeoffs: [
      'Expensive monthly hosting tiers for custom domain and CMS collections.',
      'Awkward workflow for integrating custom React components or dynamic application state.',
      'Generic code output that doesn’t showcase software engineering depth.'
    ],
    verdict: 'Great for marketing agencies, but overpriced and poorly suited for showcasing software engineering prowess.',
    recommended: false
  }
];

export const STARTER_CODE_NEXTJS_HERO = `// app/page.tsx (Next.js 15 App Router + Tailwind CSS)
import Link from 'next/link';
import { ArrowUpRight, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* Subtle Background Radial Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" 
      />

      <div className="relative z-10 flex flex-col items-start">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for Q3/Q4 contracts & tech lead roles
        </div>

        {/* High-Converting Outcome Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100 max-w-3xl leading-[1.12]">
          Building high-velocity web apps that turn traffic into <span className="text-indigo-400">measurable revenue</span>.
        </h1>

        {/* Value Proposition Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Staff Full-Stack Engineer specializing in Next.js 15, distributed TypeScript 
          systems, and zero-latency user experiences for venture-backed startups.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/20 active:translate-y-px"
          >
            Explore Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-medium text-sm transition-all"
          >
            Schedule 15-Min Intro
          </Link>
        </div>

        {/* Proof & Velocity Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-100 font-mono">$42M+</div>
            <div className="text-xs text-slate-400 mt-1">Processed In Platform GMV</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-100 font-mono">64%</div>
            <div className="text-xs text-slate-400 mt-1">Average MTTR Reduction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-100 font-mono">99.99%</div>
            <div className="text-xs text-slate-400 mt-1">Uptime SLA Maintained</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-100 font-mono">8+ Yrs</div>
            <div className="text-xs text-slate-400 mt-1">Production Engineering</div>
          </div>
        </div>
      </div>
    </section>
  );
}`;

export const STARTER_CODE_DYNAMIC_SHOWCASE = `// components/ProjectShowcase.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play, ExternalLink, Code2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tagline: string;
  category: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  videoDuration?: string;
  tags: string[];
  caseStudySlug: string;
  metrics?: { label: string; value: string }[];
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: 'nexus-telemetry',
    title: 'Nexus Observability Cloud',
    description: 'High-throughput telemetry ingestion engine processing 120k events/sec with sub-second incident root-cause detection.',
    tagline: 'Real-time observability platform for distributed systems',
    category: 'Systems & Backend',
    mediaType: 'video',
    mediaUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    videoDuration: '02:45 Demo',
    tags: ['Next.js 15', 'TypeScript', 'ClickHouse', 'Kafka', 'Tailwind CSS'],
    caseStudySlug: '/case-studies/nexus-observability',
    metrics: [
      { label: 'MTTR Incident Reduction', value: '64%' },
      { label: 'Cloud Savings', value: '$180k/yr' }
    ]
  },
  {
    id: 'paypulse-engine',
    title: 'PayPulse Multi-Rail Payment Gateway',
    description: 'Zero-downtime payment router with automated multi-gateway failover, handling $42M+ in cross-border GMV with sub-second settlement.',
    tagline: 'Fault-tolerant financial checkout orchestration',
    category: 'Full-Stack',
    mediaType: 'video',
    mediaUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    videoDuration: '01:50 Walkthrough',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API'],
    caseStudySlug: '/case-studies/paypulse-engine',
    metrics: [
      { label: 'Payment Success Rate', value: '99.4%' },
      { label: 'Annual GMV', value: '$42M+' }
    ]
  },
  {
    id: 'pulsedesign-system',
    title: 'PulseDesign Multi-Brand Component System',
    description: 'Accessible, tokenized React component library adopted across 6 web applications, cutting design-to-ship cycle from 3 weeks to 4 days.',
    tagline: 'Tokenized component architecture and WCAG AAA library',
    category: 'Design Engineering',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['React 19', 'Tailwind CSS', 'Radix UI', 'Figma Tokens'],
    caseStudySlug: '/case-studies/pulsedesign-system',
    metrics: [
      { label: 'Ship Velocity', value: '4 Days' },
      { label: 'Bundle Savings', value: '48%' }
    ]
  }
];

export default function DynamicProjectShowcase() {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Systems & Backend', 'Full-Stack', 'Design Engineering'];

  const filtered = filter === 'All' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* Header with Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
            // SELECTED PRODUCTION BUILDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-1">
            Dynamic Project Showcase
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-lg">
            Production case studies with technical architecture, real-world constraints, and measurable business impact.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={\`px-3 py-1.5 rounded-lg text-xs font-medium transition-all \${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }\`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-indigo-500/5"
          >
            {/* Media Container / Placeholder (Image or Video Mockup) */}
            <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-slate-800/80">
              <img
                src={project.mediaUrl}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Media Badge (Video Demo or Image) */}
              <div className="absolute top-3 left-3">
                {project.mediaType === 'video' ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-indigo-300 text-[11px] font-mono">
                    <Play className="w-3 h-3 fill-indigo-400 text-indigo-400" />
                    {project.videoDuration || 'Interactive Demo'}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 text-[11px] font-mono">
                    High-Res Mockup
                  </span>
                )}
              </div>

              {/* Category Pill */}
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-[11px] font-mono">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Metrics Highlights if available */}
              {project.metrics && (
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/80">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                      <div className="text-sm font-bold font-mono text-emerald-400">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tooling Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Case Study Detailed Link */}
              <div className="pt-4 border-t border-slate-800/80">
                <Link
                  href={project.caseStudySlug}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold transition-all group-hover:border-indigo-500"
                >
                  <span>Read Detailed Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}`;

export const STARTER_CODE_NEXTJS_CONTACT_FORM = `// components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, User, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Client-Side Validation Function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Required Name Validation
    if (!trimmedName) {
      newErrors.name = 'Full name is required.';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Required & Valid Email Format Validation (Regex)
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    // Required Message Validation
    if (!trimmedMessage) {
      newErrors.message = 'Message content is required.';
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate asynchronous API dispatch
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      setErrors({});
    } catch (err) {
      console.error('Submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl backdrop-blur-md">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">Message Dispatched!</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your inquiry has been sent directly to my prioritized inbox. You will receive a reply within 4 hours.
          </p>
          <button
            onClick={handleReset}
            className="mt-4 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-100">Start a Conversation</h3>
            <p className="text-xs text-slate-400">
              Have a project in mind or looking to hire? Drop me a brief note below.
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="form-name" className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Full Name</span> <span className="text-rose-400">*</span>
            </label>
            <input
              id="form-name"
              type="text"
              placeholder="e.g. Alex Henderson"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className={\`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors \${
                errors.name 
                  ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10' 
                  : 'border-slate-700 focus:border-indigo-500'
              }\`}
            />
            {errors.name && (
              <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="form-email" className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Email Address</span> <span className="text-rose-400">*</span>
            </label>
            <input
              id="form-email"
              type="email"
              placeholder="e.g. alex@company.io"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className={\`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors \${
                errors.email 
                  ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10' 
                  : 'border-slate-700 focus:border-indigo-500'
              }\`}
            />
            {errors.email && (
              <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="form-message" className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
              <span>Project Scope & Goals</span> <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="form-message"
              rows={4}
              placeholder="Tell me about what you are building, the engineering timeline, or the technical requirements..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              className={\`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors resize-none \${
                errors.message 
                  ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10' 
                  : 'border-slate-700 focus:border-indigo-500'
              }\`}
            />
            {errors.message && (
              <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message}</p>
            )}
          </div>

          {/* Bottom Security & Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              Direct transmission. No marketing mailing lists.
            </span>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-medium text-sm transition-all shadow-md active:translate-y-px"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Validating & Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}`;

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    id: 'audience-founders',
    badge: 'High Conversion Potential',
    title: 'Startup Founders & Early-Stage CEOs',
    idealRoleOrEntity: 'Pre-Seed to Series-B Startup Founders, Non-Technical Co-Founders, Venture Studios',
    primaryGoal: 'Find an autonomous, senior builder who can take product concepts from 0 to 1 rapidly without requiring a bloated agency or four separate contractors.',
    frictionPoints: [
      'Fear of hiring engineers who over-engineer or bikeshed rather than shipping revenue-generating features.',
      'Frustration with poor communication, missed launch dates, and brittle code that breaks under load.',
      'Limited runway: Needs high return-on-investment (ROI) per dollar spent on engineering.'
    ],
    keySignalsToConvert: [
      'Business-driven metrics (e.g. "$42M+ GMV processed", "+14.2% checkout conversion lift").',
      'Full-stack versatility: from Figma UI tokens to PostgreSQL schema optimizations and cloud deploy.',
      'Pragmatism: "Velocity is a moat" and "Eliminating technical debt before it manifests".'
    ],
    recommendedCta: 'Schedule 15-Minute Intro Video Call or Direct Email',
    recruiterTakeaway: 'Positions you as a high-leverage product co-founder in an engineering body.'
  },
  {
    id: 'audience-eng-leaders',
    badge: 'Technical Risk Reduction',
    title: 'Engineering Directors, VPs of Eng & CTOs',
    idealRoleOrEntity: 'Scale-up Engineering Leadership, Staff+ Hiring Managers, Architecture Review Boards',
    primaryGoal: 'De-risk complex architectural initiatives, eliminate bottlenecks, and bring in staff-level seniority capable of mentoring squads and solving hard p99 latency or scaling problems.',
    frictionPoints: [
      'Skeptical of "portfolio fluff" that only shows toy apps, basic CRUD dashboards, or unverified claims.',
      'Fear of introducing fragile architectural patterns that increase pager duty incident fatigue.',
      'Need to verify trade-off reasoning (e.g. why ClickHouse vs. Postgres, why SSE vs. WebSockets).'
    ],
    keySignalsToConvert: [
      '4-Pillar Case Studies demonstrating architectural trade-offs, system diagrams, and failure modes.',
      'Production SLAs: 99.99% uptime, 64% MTTR reduction during incidents, p95 latency reductions.',
      'Inspectable code snippets, clean TypeScript types, and deep observability instrumentation.'
    ],
    recommendedCta: 'Explore Architectural Case Studies or Inspect Source Snippets',
    recruiterTakeaway: 'Proves staff-level maturity and ability to make long-term architectural bets.'
  },
  {
    id: 'audience-recruiters',
    badge: 'Fast Pipeline Match',
    title: 'Technical Recruiters & Talent Partners',
    idealRoleOrEntity: 'In-House Tech Recruiters, Executive Search Firms, Staff/Principal Pipeline Managers',
    primaryGoal: 'Quickly qualify whether the candidate matches strict scorecard requirements (years of experience, core tech stack, seniority level, availability) in under 30 seconds.',
    frictionPoints: [
      'Ambiguous portfolios where it is impossible to tell what the engineer actually owned vs. what the team did.',
      'Hidden contact details requiring endless multi-step forms or dead LinkedIn links.',
      'No clear indication of availability (freelance, contract, or full-time) or timezone.'
    ],
    keySignalsToConvert: [
      'Clear 30-Second Recruiter Pitch Bio and visible "8+ Years Production Engineering" badge.',
      'Prominent live availability status ("Available for Q3/Q4 contracts & tech lead roles").',
      'One-click direct email copy button and direct resume download link.',
      'Strict core tech stack tags matching ATS keywords (Next.js, TypeScript, Node.js, AWS, Postgres).'
    ],
    recommendedCta: 'Copy Direct Email or Download Technical Resume',
    recruiterTakeaway: 'Ensures zero bounce rate from busy recruiters scanning 50 candidate tabs in parallel.'
  }
];

export const STRATEGY_QUESTIONS: StrategyQuestion[] = [
  {
    id: 'audience',
    question: 'Who is your absolute #1 priority visitor to convert?',
    context: 'Different audiences require radically different page framing.',
    recommendation: 'For tech startups, lead with business metrics and high-scale architecture rather than just code syntax.',
    options: [
      { label: 'Startup Founders & CEOs', value: 'founders', impact: 'Prioritizes speed to market, cost reduction, and business ROI.' },
      { label: 'Tech Recruiters & Talent Partners', value: 'recruiters', impact: 'Prioritizes clear titles, stack keywords, years of experience, and resume link.' },
      { label: 'Engineering Directors / CTOs', value: 'engineering-leaders', impact: 'Prioritizes architectural decisions, trade-offs, testing, and system scalability.' },
      { label: 'Freelance & Agency Clients', value: 'clients', impact: 'Prioritizes client testimonials, fixed deliverables, and calendar booking.' }
    ]
  },
  {
    id: 'cta-focus',
    question: 'What is the single most valuable action a visitor can take on your site?',
    context: 'Having 5 conflicting CTAs drops total conversions by up to 40%.',
    recommendation: 'Use "Explore Case Studies" as primary hero CTA to build trust first, backed by a persistent "Schedule Intro" or "Copy Email" header trigger.',
    options: [
      { label: 'Book a 15-Minute Intro Call (Calendly)', value: 'calendar', impact: 'Best for freelancers and consultants looking to close clients quickly.' },
      { label: 'Deep Dive Into Case Studies', value: 'case-studies', impact: 'Best for engineering roles where proving technical depth precedes any interview.' },
      { label: 'Download Technical Resume PDF', value: 'resume', impact: 'Best for enterprise recruiter pipelines requiring ATS submissions.' },
      { label: 'Direct Email Inquiry', value: 'email', impact: 'Lowest friction option with highest response rate from senior executives.' }
    ]
  },
  {
    id: 'aesthetic-vibe',
    question: 'Which visual tone matches your target positioning?',
    context: 'Visual presentation sets visitor expectations regarding your compensation tier.',
    recommendation: 'Dark Mode Tech with crisp 1px borders is the highest converting aesthetic for developer and AI startup portfolios in 2025/2026.',
    options: [
      { label: 'Dark Mode Tech (Slate & Indigo)', value: 'dark-tech', impact: 'Positions you as a serious systems engineer, cloud architect, or high-growth builder.' },
      { label: 'Clean Studio Light (Architectural)', value: 'clean-light', impact: 'Clean, high-contrast, editorial typography favored by elite design agencies.' },
      { label: 'Bold High-Contrast Minimalist', value: 'bold-minimal', impact: 'High-density, monospaced typography signaling deep craftsmanship and efficiency.' }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'HyperScale Systems',
    role: 'Staff Software Engineer',
    period: '2023 - Present',
    location: 'San Francisco, CA (Remote)',
    highlights: [
      'Architected distributed telemetry console processing 120k events/sec with sub-200ms query latency.',
      'Spearheaded internal migration to Next.js App Router and Edge runtime, reducing global TTFB by 42%.',
      'Mentored 12 mid-level and senior engineers on event-driven architecture and performance profiling.'
    ],
    skills: ['Next.js', 'ClickHouse', 'TypeScript', 'Apache Kafka', 'Distributed Systems']
  },
  {
    company: 'Veloce Commerce',
    role: 'Senior Product Engineer',
    period: '2021 - 2023',
    location: 'New York, NY',
    highlights: [
      'Led the checkout rebuild yielding a 14.2% conversion rate increase across 1.4 million monthly shoppers.',
      'Implemented automated multi-gateway fallback mechanism cutting payment failure losses by $3.8M/yr.',
      'Authored reusable design token package adopted by 4 cross-functional product squads.'
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe API', 'Redis']
  },
  {
    company: 'Studio Craft Labs',
    role: 'Front-End Developer & UI Engineer',
    period: '2019 - 2021',
    location: 'Austin, TX',
    highlights: [
      'Built 18 custom client web applications using React, GraphQL, and micro-frontend architectures.',
      'Achieved consistent 98+ Lighthouse scores across all client production deployments.',
      'Collaborated closely with founders from initial Figma sketches to series-A production launches.'
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Figma', 'Jest']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'One of the rare engineers who genuinely understands business metrics. When they redesigned our telemetry system, they didn’t just write clean code—they saved us $180,000 in recurring SaaS bills and cut our outage triage time by over half.',
    author: 'Marcus Vance',
    role: 'VP of Engineering',
    company: 'HyperScale Systems'
  },
  {
    id: 'test-2',
    quote: 'They stepped into our checkout flow right before our biggest sales quarter. The payment failover architecture they implemented processed over $40M without a single glitch. Hands down the highest ROI contractor we’ve ever engaged.',
    author: 'Elena Rostova',
    role: 'Co-Founder & COO',
    company: 'PayPulse FinTech'
  },
  {
    id: 'test-3',
    quote: 'An absolute unicorn at the intersection of design engineering and backend reliability. Our design-to-ship cycle dropped from 3 weeks to 4 days after they deployed our tokenized component system.',
    author: 'Devon Lee',
    role: 'Head of Product',
    company: 'SaaS Suite Inc.'
  }
];
