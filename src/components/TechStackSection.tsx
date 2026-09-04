import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Cloud, 
  Palette, 
  Zap, 
  ShieldCheck, 
  Layers, 
  CheckCircle2,
  Terminal,
  FileText
} from 'lucide-react';
import { BioOption } from '../types';

interface TechStackSectionProps {
  bioOptions: BioOption[];
  activeBioId: string;
  onSelectBio: (id: string) => void;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  bioOptions,
  activeBioId,
  onSelectBio
}) => {
  const activeBio = bioOptions.find((b) => b.id === activeBioId) || bioOptions[0];

  const pillars = [
    {
      title: 'Frontend Architecture',
      icon: Code2,
      description: 'Zero-latency single page applications, SSR/SSG pipelines, and fluid 60fps micro-interactions.',
      technologies: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'WebGL / Canvas', 'State Machines'],
      stat: '<50ms TTFB globally'
    },
    {
      title: 'Backend & Distributed Systems',
      icon: Server,
      description: 'High-throughput APIs, event-driven data streaming, and idempotent transaction state machines.',
      technologies: ['Node.js', 'Go', 'PostgreSQL (pgvector)', 'ClickHouse', 'Redis', 'Apache Kafka / SSE'],
      stat: '120k events/sec processed'
    },
    {
      title: 'Cloud Infra & DevOps',
      icon: Cloud,
      description: 'Containerized microservices, edge computing runtimes, and observable CI/CD deployments.',
      technologies: ['Docker', 'Kubernetes', 'AWS (ECS, Lambda, RDS)', 'GCP Cloud Run', 'Terraform', 'Prometheus'],
      stat: '99.99% uptime target'
    },
    {
      title: 'Product & Design Systems',
      icon: Palette,
      description: 'Tokenized component design systems bridging Figma specs with accessible production code.',
      technologies: ['Figma Tokens', 'Radix UI Primitives', 'Storybook', 'WCAG AAA Compliance', 'Motion', 'Design Engineering'],
      stat: '4-day feature ship cycle'
    }
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="mb-12">
        <div className="text-indigo-400 text-xs font-mono font-medium mb-2">
          // CAPABILITIES & TECHNICAL MATRIX
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Engineering Architecture & Philosophy
        </h2>
        <p className="mt-3 text-slate-400 text-base max-w-2xl">
          A full-stack capability matrix built on mechanical sympathy, zero-compromise performance, and relentless execution speed.
        </p>
      </div>

      {/* About Me Bio Pitch Switcher (Interactive for Plan & Recruiters) */}
      <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
              About Me • Audience-Tailored Bio
            </span>
            <h3 className="text-xl font-bold text-slate-100 mt-1">
              Who I Am & How I Create Leverage
            </h3>
          </div>

          {/* Bio Audience Buttons */}
          <div className="flex flex-wrap gap-1.5 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
            {bioOptions.map((bio) => (
              <button
                key={bio.id}
                onClick={() => onSelectBio(bio.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeBio.id === bio.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {bio.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <div className="inline-block px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
            Target Audience: {activeBio.targetAudience}
          </div>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {activeBio.content}
          </p>
        </div>
      </div>

      {/* 4 Capability Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                  {pillar.stat}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-100">{pillar.title}</h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 mb-2 font-medium">
                  Primary Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-slate-800/90 border border-slate-700/60 text-slate-200 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guiding Principles */}
      <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
            <Zap className="w-4 h-4" />
            <span>01 • Velocity Is A Moat</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            Shipping working software to production in hours beats debating hypothetical edge cases for weeks.
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>02 • Outlaw Fragility</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            Strict TypeScript boundaries, idempotent API retries, and comprehensive end-to-end tests prevent 3 AM pager alerts.
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
            <Layers className="w-4 h-4" />
            <span>03 • Outcomes Over Code</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            Code is a liability; software exists to generate revenue, lower operational costs, and delight users.
          </p>
        </div>
      </div>
    </section>
  );
};
