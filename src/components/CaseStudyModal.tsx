import React, { useState } from 'react';
import { 
  X, 
  ArrowUpRight, 
  Github, 
  Check, 
  Copy, 
  TrendingDown, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Code2, 
  Play, 
  Sparkles,
  Activity,
  CreditCard,
  Palette
} from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onCopySnippet: (code: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onCopySnippet
}) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'code' | 'interactive-demo'>('case-study');
  const [copied, setCopied] = useState(false);

  // Simulated interactive demo states for each project
  const [telemetryZoom, setTelemetryZoom] = useState(1);
  const [paymentCurrency, setPaymentCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'settled'>('idle');
  const [designTheme, setDesignTheme] = useState<'indigo' | 'emerald' | 'cyan'>('indigo');

  if (!caseStudy) return null;

  const handleCopy = () => {
    if (caseStudy.codeSnippet) {
      onCopySnippet(caseStudy.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const simulatePayment = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('settled');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d131f] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
              {caseStudy.category}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Client: <strong className="text-slate-200">{caseStudy.client}</strong> • {caseStudy.timeline}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'case-study'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Full Case Study
            </button>
            <button
              onClick={() => setActiveTab('interactive-demo')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'interactive-demo'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-3.5 h-3.5 text-indigo-400" />
              <span>Live Architecture Demo</span>
            </button>
            {caseStudy.codeSnippet && (
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'code'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Source Code ({caseStudy.codeSnippet.filename})</span>
              </button>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-2">
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 font-mono"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repo</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {activeTab === 'case-study' && (
            <>
              {/* Title & Tagline */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  {caseStudy.title}
                </h2>
                <p className="mt-2 text-slate-300 text-base">
                  {caseStudy.tagline}
                </p>
              </div>

              {/* Marquee Outcome Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                {caseStudy.outcomes.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs text-slate-400">{m.label}</span>
                    <span className="text-2xl font-bold text-slate-100 font-mono mt-0.5">
                      {m.value}
                    </span>
                    {m.change && (
                      <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                        {m.trend === 'down' ? (
                          <TrendingDown className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                        )}
                        {m.change}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Pillar 1: The Problem & Pain Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center font-mono">
                    01
                  </span>
                  <h3 className="text-lg font-semibold text-slate-100">The Problem & System Inefficiencies</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-8">
                  {caseStudy.problem.overview}
                </p>
                <div className="pl-8 space-y-2 mt-3">
                  {caseStudy.problem.keyPainPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400/80 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 2: The Solution & Technical Architecture */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center font-mono">
                    02
                  </span>
                  <h3 className="text-lg font-semibold text-slate-100">The Architectural Solution & Engineering Decisions</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-8">
                  {caseStudy.solution.overview}
                </p>
                
                <div className="pl-8 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
                      Architecture Highlights
                    </h4>
                    {caseStudy.solution.architectureHighlights.map((arch, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
                      Key Trade-offs & Decisions
                    </h4>
                    {caseStudy.solution.technicalDecisions.map((decision, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Cpu className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{decision}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pillar 3: Tools & Technologies Used */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center font-mono">
                    03
                  </span>
                  <h3 className="text-lg font-semibold text-slate-100">Stack & Tooling Ecosystem</h3>
                </div>
                <div className="pl-8 flex flex-wrap gap-2">
                  {caseStudy.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 text-xs font-mono font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pillar 4: Commercial Outcomes & ROI */}
              <div className="space-y-3 pt-2 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center font-mono">
                    04
                  </span>
                  <h3 className="text-lg font-semibold text-slate-100">Measurable Commercial Impact</h3>
                </div>
                <div className="pl-8 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-slate-200 text-sm leading-relaxed">
                  <p className="text-emerald-300 font-medium mb-1">Business ROI:</p>
                  {caseStudy.outcomes.businessImpact}
                </div>
              </div>
            </>
          )}

          {/* Tab 2: Interactive Architecture Simulation */}
          {activeTab === 'interactive-demo' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    Interactive Live Concept Demo
                  </h3>
                  <p className="text-xs text-slate-400">
                    Simulating the core mechanism implemented for {caseStudy.title}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-mono">
                  Sandbox Active
                </span>
              </div>

              {/* Case 1: Nexus Telemetry Simulator */}
              {caseStudy.id === 'nexus-cloud-os' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <span>Live ClickHouse Event Buffer (120,000 evt/s)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setTelemetryZoom(1)}
                        className={`px-2 py-1 rounded text-xs font-mono ${telemetryZoom === 1 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                      >
                        1x Realtime
                      </button>
                      <button
                        onClick={() => setTelemetryZoom(5)}
                        className={`px-2 py-1 rounded text-xs font-mono ${telemetryZoom === 5 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                      >
                        5x Scrub
                      </button>
                    </div>
                  </div>

                  <div className="h-40 bg-slate-900/80 rounded-lg border border-slate-800 p-3 flex items-end gap-1.5 overflow-hidden">
                    {[42, 38, 45, 55, 62, 50, 48, 70, 89, 95, 80, 52, 45, 40, 48, 52, 60, 44, 41, 43, 49, 58, 64, 45, 42].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                        <div 
                          className={`w-full rounded-t transition-all ${
                            height > 80 ? 'bg-rose-500' : height > 60 ? 'bg-amber-400' : 'bg-indigo-500'
                          }`}
                          style={{ height: `${height * 1.3}px` }}
                        />
                        <span className="text-[9px] text-slate-500 font-mono hidden sm:inline">
                          {i % 5 === 0 ? `${i}s` : ''}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                      <div className="text-slate-400">Stream Ingestion</div>
                      <div className="text-emerald-400 font-bold mt-1">118,420 eps</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                      <div className="text-slate-400">Query Latency</div>
                      <div className="text-indigo-400 font-bold mt-1">14ms</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                      <div className="text-slate-400">Worker Heap Memory</div>
                      <div className="text-slate-200 font-bold mt-1">42.8 MB</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Case 2: PayPulse Payment Router Simulator */}
              {caseStudy.id === 'paypulse-fintech' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CreditCard className="w-4 h-4 text-emerald-400" />
                      <span>Simulated Idempotent Multi-Rail Gateway</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                        <button
                          key={curr}
                          onClick={() => setPaymentCurrency(curr)}
                          className={`px-2.5 py-1 rounded text-xs font-mono ${
                            paymentCurrency === curr ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Order Payload:</span>
                      <span className="font-mono text-slate-200">#ORD-9428-TX (Captured at Edge)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Selected Route:</span>
                      <span className="font-mono text-emerald-400">Stripe Primary [Failover: Adyen Tier-2]</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Total Charge Amount:</span>
                      <span className="text-base font-bold text-slate-100 font-mono">
                        {paymentCurrency === 'USD' ? '$249.00' : paymentCurrency === 'EUR' ? '€229.00' : '£195.00'}
                      </span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={simulatePayment}
                        disabled={paymentStatus === 'processing'}
                        className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white font-medium text-xs transition-all shadow-md"
                      >
                        {paymentStatus === 'processing'
                          ? 'Simulating Multi-Rail Settlement (350ms)...'
                          : paymentStatus === 'settled'
                          ? 'Transaction Settled (284ms) — Click to Repeat'
                          : 'Trigger Sub-Second Checkout Charge'}
                      </button>
                    </div>

                    {paymentStatus === 'settled' && (
                      <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-between">
                        <span>Idempotency Hash: 8f4b...199a Verified</span>
                        <span>0ms Chargeback Risk</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Case 3: PulseDesign Component Simulator */}
              {caseStudy.id === 'pulsedesign-system' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Palette className="w-4 h-4 text-indigo-400" />
                      <span>Figma Token Synchronizer & Accessibility Sandbox</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {(['indigo', 'emerald', 'cyan'] as const).map((color) => (
                        <button
                          key={color}
                          onClick={() => setDesignTheme(color)}
                          className={`px-2.5 py-1 rounded text-xs font-mono capitalize ${
                            designTheme === color ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center gap-4">
                    <button
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                        designTheme === 'indigo'
                          ? 'bg-indigo-600 text-white'
                          : designTheme === 'emerald'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-cyan-600 text-white'
                      }`}
                    >
                      Primary Action
                    </button>
                    <button className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 text-xs font-medium hover:bg-slate-700">
                      Secondary Outline
                    </button>
                    <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                      WCAG AAA: 7.8:1 Contrast
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Source Code Snippet */}
          {activeTab === 'code' && caseStudy.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>{caseStudy.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed">
                <code>{caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            Case study prepared for tech hiring leaders and startup founders
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
