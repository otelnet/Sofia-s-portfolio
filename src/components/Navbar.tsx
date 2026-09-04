import React from 'react';
import { Sparkles, Terminal, Mail, Calendar, Compass, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentView: 'portfolio' | 'studio';
  onToggleView: (view: 'portfolio' | 'studio') => void;
  onCopyEmail: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onToggleView,
  onCopyEmail
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b0f17]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/50 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-indigo-300 transition-colors">
                Alex Rivera
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Staff Product Engineer
              </span>
            </div>
          </a>
        </div>

        {/* Center Nav Links (when in portfolio mode) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#projects" className="hover:text-indigo-400 transition-colors">
            Case Studies
          </a>
          <a href="#capabilities" className="hover:text-indigo-400 transition-colors">
            Capabilities & Stack
          </a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors">
            Experience
          </a>
          <a href="#testimonials" className="hover:text-indigo-400 transition-colors">
            Endorsements
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">
            Contact & Booking
          </a>
        </nav>

        {/* View Switcher & Primary Action */}
        <div className="flex items-center gap-2.5">
          {/* Studio / Planner View Mode Switcher */}
          <div className="flex items-center bg-slate-900/90 p-0.5 rounded-lg border border-slate-800">
            <button
              id="nav-view-portfolio-btn"
              onClick={() => onToggleView('portfolio')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                currentView === 'portfolio'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Live Portfolio
            </button>
            <button
              id="nav-view-studio-btn"
              onClick={() => onToggleView('studio')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                currentView === 'studio'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              <span>Blueprint Studio</span>
            </button>
          </div>

          {/* Quick CTA */}
          <button
            id="nav-copy-email-btn"
            onClick={onCopyEmail}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 text-xs font-medium transition-colors"
            title="Copy email to clipboard"
          >
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>Copy Email</span>
          </button>
        </div>
      </div>
    </header>
  );
};
