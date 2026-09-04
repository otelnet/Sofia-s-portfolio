import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="text-indigo-400 text-xs font-mono font-medium mb-2">
          // TRACK RECORD & LEADERSHIP
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Production Experience
        </h2>
        <p className="mt-3 text-slate-400 text-base max-w-xl">
          A progression of shipping high-impact software, scaling engineering teams, and reducing organizational latency.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
        {experience.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Bullet Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:border-indigo-400 group-hover:scale-110 transition-all shadow-md" />

            {/* Role Card */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {item.role}
                  </h3>
                  <div className="text-indigo-400 text-sm font-medium mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 hidden sm:flex">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-4 space-y-2.5">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Skills used */}
              <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/50 text-slate-400 text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
