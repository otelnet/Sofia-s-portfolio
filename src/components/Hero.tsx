import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Terminal, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Cpu, 
  Activity,
  Sliders
} from 'lucide-react';
import { HeadlineOption } from '../types';

interface HeroProps {
  currentHeadline: HeadlineOption;
  headlineOptions: HeadlineOption[];
  onSelectHeadline: (headline: HeadlineOption) => void;
  onOpenStudio: () => void;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentHeadline,
  headlineOptions,
  onSelectHeadline,
  onOpenStudio,
  onCopyEmail
}) => {
  const [activeTerminalTab, setActiveTerminalTab] = useState<'architecture' | 'telemetry'>('architecture');

  return (
    <section id="hero" className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" 
      />

      {/* Headline Switcher Controls (Interactive Demonstration for Planning) */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs bg-slate-900/80 p-1.5 rounded-xl border border-slate-800/80 max-w-2xl">
        <span className="flex items-center gap-1.5 text-slate-400 px-2 py-1 font-mono text-[11px]">
          <Sliders className="w-3.5 h-3.5 text-indigo-400" />
          Headline Archetype:
        </span>
        {headlineOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelectHeadline(opt)}
            className={`px-2.5 py-1 rounded-lg transition-all text-xs font-medium ${
              currentHeadline.id === opt.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {opt.badge.replace(/ \(Recommended\)/, '')}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Conversion Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Availability Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Q3/Q4 contracts & tech lead advisory</span>
          </div>

          {/* Primary High-Converting Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-100 leading-[1.14]">
            {currentHeadline.title}
          </h1>

          {/* Value Proposition Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            {currentHeadline.subtitle}
          </p>

          {/* Action Button Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              id="hero-explore-projects-btn"
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 active:translate-y-px"
            >
              <span>{currentHeadline.primaryCtaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              id="hero-schedule-call-btn"
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm transition-colors"
            >
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>{currentHeadline.secondaryCtaText}</span>
            </a>

            <button
              id="hero-view-blueprint-btn"
              onClick={onOpenStudio}
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-slate-400 hover:text-indigo-300 text-xs font-medium transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Inspect Site Blueprint</span>
            </button>
          </div>

          {/* Tech Stack Indicator */}
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <span className="text-slate-400">Core Stack:</span>
            <div className="flex flex-wrap gap-1.5">
              {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Docker'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300 font-mono text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Tech Architecture Terminal Preview */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-slate-800 bg-slate-950/80 shadow-2xl overflow-hidden backdrop-blur-sm">
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">alex-rivera-stack.ts</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-950/70 p-0.5 rounded border border-slate-800 text-[11px]">
                <button
                  onClick={() => setActiveTerminalTab('architecture')}
                  className={`px-2 py-0.5 rounded font-mono ${
                    activeTerminalTab === 'architecture' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  system.env
                </button>
                <button
                  onClick={() => setActiveTerminalTab('telemetry')}
                  className={`px-2 py-0.5 rounded font-mono ${
                    activeTerminalTab === 'telemetry' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  live.status
                </button>
              </div>
            </div>

            {/* Terminal Window Body */}
            <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed">
              {activeTerminalTab === 'architecture' ? (
                <div className="space-y-2 text-slate-300">
                  <p className="text-slate-400">// Production Specification</p>
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-indigo-400">role:</span>
                    <span className="text-slate-200">"Staff Product Engineer"</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-indigo-400">frontend:</span>
                    <span className="text-emerald-400">"Next.js 15 (App Router, Turbopack)"</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-indigo-400">styling:</span>
                    <span className="text-cyan-400">"Tailwind CSS v4 (Engineered tokens)"</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-indigo-400">backend_scale:</span>
                    <span className="text-slate-200">"PostgreSQL, Redis, ClickHouse"</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-indigo-400">throughput:</span>
                    <span className="text-amber-300 font-bold">"120,000 req/sec sustained"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-400">availability:</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      "Ready for contract & advisory"
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      Global Latency Monitors
                    </span>
                    <span className="text-emerald-400">ONLINE • 99.99%</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">iad1 (US East):</span>
                      <span className="text-slate-200">22ms (p95)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[94%]" />
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">sfo1 (US West):</span>
                      <span className="text-slate-200">28ms (p95)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[91%]" />
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">fra1 (Europe Central):</span>
                      <span className="text-slate-200">41ms (p95)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[88%]" />
                    </div>
                  </div>
                  <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Edge Worker Cache Hit Rate:</span>
                    <span className="text-indigo-400 font-semibold">97.8%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Window Footer */}
            <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified Production SLA
              </span>
              <span className="font-mono">v15.2.0-release</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Proof & Velocity Statistics Bar */}
      <div className="mt-16 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        <div className="flex flex-col">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight">
            $42M+
          </div>
          <div className="text-xs text-slate-400 mt-1">Processed In Platform GMV</div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight">
            64%
          </div>
          <div className="text-xs text-slate-400 mt-1">Average Incident MTTR Reduction</div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight">
            99.99%
          </div>
          <div className="text-xs text-slate-400 mt-1">Uptime SLA Maintained</div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight">
            8+ Yrs
          </div>
          <div className="text-xs text-slate-400 mt-1">Production Web Architecture</div>
        </div>
      </div>
    </section>
  );
};
