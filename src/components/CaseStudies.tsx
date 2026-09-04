import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  TrendingDown, 
  Layers, 
  Cpu, 
  Check, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({
  caseStudies,
  onSelectCaseStudy
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Systems & Backend', 'Full-Stack', 'Design Engineering'];

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-medium mb-2">
            <span>// PROOF OF EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Case Studies
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-xl">
            A structured breakdown of high-impact engineering challenges solved across venture-backed startups and high-scale systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Cards (The 4-Pillar Format) */}
      <div className="space-y-10">
        {filteredStudies.map((study, index) => (
          <article
            key={study.id}
            id={`case-study-${study.id}`}
            className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 transition-all p-6 sm:p-8 backdrop-blur-xs hover:border-slate-700 shadow-xl"
          >
            {/* Card Top Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold flex items-center justify-center">
                  0{index + 1}
                </span>
                <span className="text-xs font-mono text-indigo-400 font-medium">
                  {study.category}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400">
                  {study.client}
                </span>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                {study.role}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mt-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {study.title}
                </h3>
                <p className="mt-2 text-base text-slate-300">
                  {study.tagline}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all active:translate-y-px"
                >
                  <span>Detailed Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Media Placeholder: Image or Video Mockup Showcase */}
            <div className="mt-6 relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[21/9] sm:aspect-[24/9] w-full group/media">
              <img
                src={study.featuredImage}
                alt={study.title}
                className="w-full h-full object-cover object-center opacity-70 group-hover/media:opacity-90 group-hover/media:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Media Browser Chrome Header */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production Deployment</span>
                </div>

                <div className="flex items-center gap-2">
                  {study.mediaType === 'video' ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 backdrop-blur-md border border-indigo-500/40 text-indigo-300 text-[11px] font-mono">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      {study.videoDuration || 'Video Walkthrough'}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-slate-300 text-[11px] font-mono">
                      High-Resolution Visual
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Media Bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span className="text-slate-200 font-semibold">{study.client}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{study.timeline}</span>
                </div>

                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-xs font-mono transition-colors"
                >
                  <span>Launch Interactive Sandbox</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Structured 4-Pillar Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Pillar 1 & 2: The Problem & Solution Breakdown */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    The Problem & Inefficiency
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.problem.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Engineering Solution & Architecture
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.solution.overview}
                  </p>
                </div>

                {/* Tech Badges */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {study.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/80 text-slate-300 text-xs font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pillar 4: Measurable Outcomes & Trigger */}
              <div className="md:col-span-5 flex flex-col justify-between h-full bg-slate-950/70 p-5 rounded-xl border border-slate-800/90">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Measurable Outcomes & ROI
                  </h4>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.outcomes.metrics.slice(0, 4).map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                        <div className="text-[11px] text-slate-400 truncate">{m.label}</div>
                        <div className="text-xl font-bold font-mono text-slate-100 mt-0.5">
                          {m.value}
                        </div>
                        {m.change && (
                          <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 truncate">
                            {m.trend === 'down' ? (
                              <TrendingDown className="w-3 h-3 text-emerald-400 shrink-0" />
                            ) : (
                              <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
                            )}
                            <span>{m.change}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    "{study.outcomes.businessImpact}"
                  </p>
                </div>

                {/* Card Action Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    <span>Read Deep Dive & Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    Interactive sandbox included
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
