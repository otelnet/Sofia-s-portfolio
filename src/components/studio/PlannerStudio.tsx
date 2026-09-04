import React, { useState } from 'react';
import { 
  Compass, 
  Layout, 
  FileText, 
  Code2, 
  Layers, 
  Check, 
  Copy, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Sliders, 
  ExternalLink,
  Flame,
  Award,
  BookOpen,
  Send,
  Eye,
  Users,
  Target,
  ShieldAlert,
  Play,
  Mail
} from 'lucide-react';
import { 
  SITEMAP_SECTIONS, 
  HEADLINE_OPTIONS, 
  BIO_OPTIONS, 
  TECH_STACK_COMPARISON, 
  STARTER_CODE_NEXTJS_HERO,
  STARTER_CODE_DYNAMIC_SHOWCASE,
  STARTER_CODE_NEXTJS_CONTACT_FORM,
  AUDIENCE_PROFILES,
  STRATEGY_QUESTIONS
} from '../../data/portfolioData';
import { HeadlineOption, BioOption } from '../../types';

interface PlannerStudioProps {
  currentHeadline: HeadlineOption;
  onApplyHeadline: (headline: HeadlineOption) => void;
  activeBioId: string;
  onApplyBio: (id: string) => void;
  onCloseStudio: () => void;
  onNotify: (msg: string) => void;
}

export const PlannerStudio: React.FC<PlannerStudioProps> = ({
  currentHeadline,
  onApplyHeadline,
  activeBioId,
  onApplyBio,
  onCloseStudio,
  onNotify
}) => {
  const [activeTab, setActiveTab] = useState<'audience' | 'sitemap' | 'copywriting' | 'case-study-template' | 'tech-stack' | 'strategy'>('audience');
  const [selectedCodeSnippet, setSelectedCodeSnippet] = useState<'hero' | 'showcase' | 'contact'>('hero');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Strategy answer state
  const [strategyAnswers, setStrategyAnswers] = useState<Record<string, string>>({
    audience: 'founders',
    'cta-focus': 'case-studies',
    'aesthetic-vibe': 'dark-tech'
  });

  const getActiveCode = () => {
    switch (selectedCodeSnippet) {
      case 'hero':
        return STARTER_CODE_NEXTJS_HERO;
      case 'showcase':
        return STARTER_CODE_DYNAMIC_SHOWCASE;
      case 'contact':
        return STARTER_CODE_NEXTJS_CONTACT_FORM;
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopiedCode(true);
    onNotify('Code component copied to clipboard!');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const caseStudyMarkdownTemplate = `# [Project Name] — [One-line Tagline]

**Role:** [e.g. Lead Architect & Full-Stack Engineer]
**Timeline:** [e.g. 3 Months (Q2 2025)]
**Client / Company:** [e.g. Series-A FinTech Startup]
**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, Redis

## 1. Problem Statement
* **The Context:** [Brief context of the problem]
* **Key Pain Points:**
  - Pain Point 1: [e.g. 18% checkout bounce rate due to slow API gateway]
  - Pain Point 2: [e.g. $32,000/mo cloud spend on redundant microservices]
  - Pain Point 3: [e.g. 3-week design handoff delay]

## 2. Engineering Solution & Architecture
* **Overview:** [How you solved it architecturally]
* **Technical Decisions:**
  - Decision 1: [e.g. Migrated to Edge Middleware for sub-20ms geo-routing]
  - Decision 2: [e.g. Idempotent Redis distributed locking to avoid double-charges]

## 3. Tools & Technologies Deployed
* Frontend: Next.js 15 App Router, React 19, Tailwind CSS v4, Motion
* Backend & Data: Node.js, PostgreSQL, ClickHouse, Docker
* Observability: OpenTelemetry, Grafana

## 4. Measurable Business Outcomes & ROI
* **Metric 1:** +14.2% lift in conversion rate
* **Metric 2:** $180,000/yr saved in eliminated SaaS dependencies
* **Metric 3:** p95 latency reduced from 1.2s to 180ms
* **Qualitative Impact:** [e.g. Unblocked $1.2M enterprise contract renewal]
`;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(caseStudyMarkdownTemplate);
    setCopiedTemplate(true);
    onNotify('Case Study Markdown template copied to clipboard!');
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <div className="py-10 px-4 sm:px-6 max-w-6xl mx-auto space-y-8 animate-in fade-in">
      {/* Studio Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
            <Compass className="w-4 h-4" />
            <span>PORTFOLIO ARCHITECTURE & BLUEPRINT STUDIO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            The High-Converting Portfolio Blueprint
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Every section, headline archetype, case study template, and Next.js starter snippet mapped to maximize conversion rates for tech startups and senior engineering roles.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onCloseStudio}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all active:translate-y-px"
          >
            <Eye className="w-4 h-4" />
            <span>View Live Portfolio</span>
          </button>
        </div>
      </div>

      {/* Studio Tab Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
        <button
          onClick={() => setActiveTab('audience')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'audience'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>1. Target Audience Profiles</span>
        </button>

        <button
          onClick={() => setActiveTab('sitemap')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'sitemap'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layout className="w-3.5 h-3.5" />
          <span>2. Site Structure & Funnel</span>
        </button>

        <button
          onClick={() => setActiveTab('copywriting')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'copywriting'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>3. Copywriting & Headlines</span>
        </button>

        <button
          onClick={() => setActiveTab('case-study-template')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'case-study-template'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>4. Case Study Framework</span>
        </button>

        <button
          onClick={() => setActiveTab('tech-stack')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'tech-stack'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>5. Tech Stack & Starter Code</span>
        </button>

        <button
          onClick={() => setActiveTab('strategy')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'strategy'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>6. Clarifying Questions & Strategy</span>
        </button>
      </div>

      {/* TAB 1: TARGET AUDIENCE PROFILES */}
      {activeTab === 'audience' && (
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-100 mb-1">
                Target Audience Profiles & Visitor Psychology
              </h2>
              <p className="text-xs text-slate-400">
                Tailoring your portfolio to the exact motivations, fears, and scorecard criteria of the 3 key visitor archetypes.
              </p>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono shrink-0">
              3 High-Intent Profiles Defined
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {AUDIENCE_PROFILES.map((profile) => (
              <div
                key={profile.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[11px] font-mono font-medium">
                      {profile.badge}
                    </span>
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{profile.title}</h3>
                    <p className="text-xs text-indigo-400 font-mono mt-0.5">
                      {profile.idealRoleOrEntity}
                    </p>
                  </div>

                  {/* Primary Goal */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5 mb-1.5">
                      <Target className="w-3.5 h-3.5 text-emerald-400" />
                      Primary Goal When Visiting
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {profile.primaryGoal}
                    </p>
                  </div>

                  {/* Key Friction Points / Doubts */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5 mb-2">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                      Friction Points & Doubts
                    </span>
                    <ul className="space-y-1.5">
                      {profile.frictionPoints.map((f, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Signals Needed to Convert */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5 mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Proof & Signals Needed to Convert
                    </span>
                    <ul className="space-y-1.5">
                      {profile.keySignalsToConvert.map((sig, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{sig}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommended CTA */}
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400">
                    <span className="text-slate-300 font-semibold">Recommended CTA: </span>
                    {profile.recommendedCta}
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-[11px] text-indigo-300 italic">
                    Takeaway: {profile.recruiterTakeaway}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 1: SITEMAP & SECTION BREAKDOWN */}
      {activeTab === 'sitemap' && (
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold text-slate-100 mb-1">
              High-Converting Tech Portfolio Funnel
            </h2>
            <p className="text-xs text-slate-400">
              Unlike generic resume pages that overwhelm visitors with chronological lists, this single-page layout guides recruiters and founders through an intentional psychological conversion flow.
            </p>
          </div>

          <div className="space-y-6">
            {SITEMAP_SECTIONS.map((sec) => (
              <div
                key={sec.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-indigo-600/20 text-indigo-400 font-mono text-xs font-bold">
                      {sec.sectionNumber}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100">{sec.name}</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{sec.pageOrAnchor}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono mb-2">
                      Primary Objective
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {sec.targetGoal}
                    </p>

                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mt-4 mb-2">
                      Key Structural Elements
                    </h4>
                    <ul className="space-y-1.5">
                      {sec.keyElements.map((el, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono mb-2 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5" />
                        <span>Conversion Psychology</span>
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed italic">
                        "{sec.psychologyNote}"
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                      Implemented live in active showcase
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: COPYWRITING & HEADLINES */}
      {activeTab === 'copywriting' && (
        <div className="space-y-8">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold text-slate-100 mb-1">
              Battle-Tested Headline Archetypes
            </h2>
            <p className="text-xs text-slate-400">
              Click "Apply to Live Portfolio" on any headline to test how it dynamically alters the hero section of your site.
            </p>
          </div>

          {/* Headline Archetypes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HEADLINE_OPTIONS.map((headline) => {
              const isSelected = currentHeadline.id === headline.id;
              return (
                <div
                  key={headline.id}
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-indigo-950/20 border-indigo-500/80 shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium">
                        {headline.badge}
                      </span>
                      {isSelected && (
                        <span className="text-xs text-emerald-400 font-mono font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Active On Site
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 leading-snug">
                      "{headline.title}"
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {headline.subtitle}
                    </p>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs text-slate-400">
                      <span className="font-semibold text-slate-300">Why this works: </span>
                      {headline.conversionRationale}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="text-[11px] font-mono text-slate-400">
                      CTA: {headline.primaryCtaText}
                    </div>

                    <button
                      onClick={() => {
                        onApplyHeadline(headline);
                        onNotify(`Applied "${headline.badge}" to hero section!`);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                    >
                      {isSelected ? 'Applied' : 'Apply to Live Site'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* About Me Bio Options */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-100">
                Audience-Specific "About Me" Bio Variations
              </h3>
              <span className="text-xs text-indigo-400 font-mono">
                Optimal Length: 50–75 words
              </span>
            </div>

            <div className="space-y-4">
              {BIO_OPTIONS.map((bio) => {
                const isSelected = activeBioId === bio.id;
                const wordCount = bio.content.trim().split(/\s+/).length;
                return (
                  <div
                    key={bio.id}
                    className={`p-5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-indigo-950/20 border-indigo-500/60'
                        : 'bg-slate-900/40 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-200">{bio.label}</h4>
                          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[11px]">
                            {wordCount} words
                          </span>
                        </div>
                        <span className="text-xs font-mono text-indigo-400">Target: {bio.targetAudience}</span>
                      </div>
                      <button
                        onClick={() => {
                          onApplyBio(bio.id);
                          onNotify(`Applied "${bio.label}" to About Me section!`);
                        }}
                        className={`px-3 py-1 rounded-md text-xs font-medium ${
                          isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {isSelected ? 'Active Bio' : 'Use This Bio'}
                      </button>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{bio.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CASE STUDY FRAMEWORK */}
      {activeTab === 'case-study-template' && (
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-100 mb-1">
                The 4-Pillar Case Study Template
              </h2>
              <p className="text-xs text-slate-400">
                The exact formula that convinces startup founders and tech recruiters you are an elite problem-solver.
              </p>
            </div>

            <button
              onClick={handleCopyTemplate}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shrink-0 transition-colors shadow-md"
            >
              {copiedTemplate ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedTemplate ? 'Copied Template!' : 'Copy Markdown Template'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-rose-400">PILLAR 01</span>
              <h3 className="text-sm font-bold text-slate-200">The Problem</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Detail the business pain, user friction, or technical bottleneck before your involvement. Quantify the losses (e.g. latency, bounce rates, dev delays).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-400">PILLAR 02</span>
              <h3 className="text-sm font-bold text-slate-200">The Architecture</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Explain the system solution and engineering trade-offs. Why did you choose ClickHouse over Postgres? Why did you choose Edge middleware over standard Node?
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400">PILLAR 03</span>
              <h3 className="text-sm font-bold text-slate-200">The Stack</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                List the specific libraries, frameworks, cloud services, and protocols used so technical interviewers can immediately assess capability.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">PILLAR 04</span>
              <h3 className="text-sm font-bold text-slate-200">Commercial ROI</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Highlight 2-4 hard quantitative outcomes: percentage conversion lift, dollars saved in AWS bills, reduction in MTTR, or latency improvements.
              </p>
            </div>
          </div>

          {/* Markdown Code View */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>project-case-study-template.md</span>
              <span className="text-indigo-400">Ready to copy into your README or CMS</span>
            </div>
            <pre className="text-xs text-slate-300 font-mono overflow-x-auto p-4 rounded-lg bg-slate-900/80 leading-relaxed">
              <code>{caseStudyMarkdownTemplate}</code>
            </pre>
          </div>
        </div>
      )}

      {/* TAB 4: TECH STACK & STARTER CODE */}
      {activeTab === 'tech-stack' && (
        <div className="space-y-8">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold text-slate-100 mb-1">
              Tech Stack Evaluation: Next.js + Tailwind vs No-Code Alternatives
            </h2>
            <p className="text-xs text-slate-400">
              Why custom Next.js + Tailwind CSS outperforms Framer and Webflow for engineers and tech startup portfolios.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_STACK_COMPARISON.map((item) => (
              <div
                key={item.platform}
                className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  item.recommended
                    ? 'bg-indigo-950/20 border-indigo-500/70 shadow-xl'
                    : 'bg-slate-900/40 border-slate-800'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-semibold ${
                      item.recommended ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.recommended ? '★ Recommended Stack' : 'Alternative'}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Perf: <strong className="text-slate-200">{item.performanceScore}/100</strong>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{item.platform}</h3>
                    <p className="text-xs text-slate-400 mt-1">{item.tagline}</p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-400">SEO & SSR:</span>
                      <span className="text-slate-200 font-mono">{item.seoFlexibility}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-slate-400">Code Freedom:</span>
                      <span className="text-slate-200 font-mono">{item.customCodeFreedom}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                      Conversion Strengths:
                    </span>
                    <ul className="mt-1.5 space-y-1">
                      {item.conversionStrengths.slice(0, 3).map((st, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <p className="text-[11px] text-slate-400 italic leading-relaxed">
                    {item.verdict}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Starter Next.js 15 + Tailwind Code Implementations */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-100">
                  Ready-to-Deploy Next.js 15 + Tailwind CSS Components
                </h3>
                <p className="text-xs text-slate-400">
                  Select a production-ready component below to inspect and copy into your Next.js project.
                </p>
              </div>

              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shrink-0 shadow-md"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>
                  {copiedCode 
                    ? 'Copied Source!' 
                    : `Copy ${selectedCodeSnippet === 'hero' ? 'Hero' : selectedCodeSnippet === 'showcase' ? 'Project Showcase' : 'Contact Form'}`}
                </span>
              </button>
            </div>

            {/* Code Snippet Selector Pills */}
            <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800/80">
              <button
                onClick={() => setSelectedCodeSnippet('hero')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCodeSnippet === 'hero'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>1. Hero Component</span>
              </button>

              <button
                onClick={() => setSelectedCodeSnippet('showcase')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCodeSnippet === 'showcase'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>2. Dynamic Project Showcase (Image/Video)</span>
              </button>

              <button
                onClick={() => setSelectedCodeSnippet('contact')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCodeSnippet === 'contact'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>3. Functional Contact Form (Client Validation)</span>
              </button>
            </div>

            {/* Component Metadata Banner */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400">
              <span>
                File: {selectedCodeSnippet === 'hero' ? 'components/HeroSection.tsx' : selectedCodeSnippet === 'showcase' ? 'components/ProjectShowcase.tsx' : 'components/ContactForm.tsx'}
              </span>
              <span className="text-indigo-400">
                {selectedCodeSnippet === 'hero' 
                  ? 'Zero layout shift • App Router ready'
                  : selectedCodeSnippet === 'showcase'
                  ? 'Video demo & image placeholders • Category filters'
                  : 'Regex email check • Required fields • Instant feedback'}
              </span>
            </div>

            <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed max-h-96">
              <code>{getActiveCode()}</code>
            </pre>
          </div>
        </div>
      )}

      {/* TAB 5: STRATEGY QUESTIONS & CUSTOMIZER */}
      {activeTab === 'strategy' && (
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-lg font-bold text-slate-100 mb-1">
              Clarifying Questions & Portfolio Positioning Advisor
            </h2>
            <p className="text-xs text-slate-400">
              Answers to common strategy trade-offs to ensure your portfolio converts at the highest tier.
            </p>
          </div>

          <div className="space-y-6">
            {STRATEGY_QUESTIONS.map((q) => (
              <div
                key={q.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-100">{q.question}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{q.context}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt) => {
                    const isSelected = strategyAnswers[q.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setStrategyAnswers({ ...strategyAnswers, [q.id]: opt.value });
                          onNotify(`Updated strategy priority: ${opt.label}`);
                        }}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-indigo-950/40 border-indigo-500 shadow-sm'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-bold ${isSelected ? 'text-indigo-300' : 'text-slate-200'}`}>
                            {opt.label}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {opt.impact}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200">Expert Recommendation: </span>
                    <span className="text-slate-400">{q.recommendation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
