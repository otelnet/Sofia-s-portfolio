import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-indigo-400 text-xs font-mono font-medium mb-2">
            // SOCIAL PROOF & ENDORSEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Client & Leadership Testimonials
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-xl">
            Direct feedback from VPs of Engineering, startup founders, and heads of product on technical execution, velocity, and communication.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>100% Verified Production Engagements</span>
        </div>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => {
          // Generate initials for clean avatar placeholder
          const initials = item.author
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2);

          return (
            <div
              key={item.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              {/* Subtle Background Quote Mark */}
              <Quote 
                aria-hidden="true" 
                className="absolute top-6 right-6 w-10 h-10 text-slate-800/40 pointer-events-none group-hover:text-indigo-500/10 transition-colors" 
              />

              <div className="relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-mono text-slate-400 ml-2">Verified</span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-slate-300 text-sm leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author & Client Attribution */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-slate-100 truncate">
                    {item.author}
                  </div>
                  <div className="text-xs text-indigo-400 font-medium truncate">
                    {item.role}
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {item.company}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
