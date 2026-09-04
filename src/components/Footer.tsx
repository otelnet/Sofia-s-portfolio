import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#080b11] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-sm font-semibold text-slate-200">Alex Rivera</span>
            <span className="text-xs text-slate-400 ml-2 font-mono">• Built with Next.js & Tailwind</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Case Studies</a>
          <a href="#capabilities" className="hover:text-indigo-400 transition-colors">Stack</a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
