import React from 'react';
import { achievements } from '../data/portfolioData';
import { TerminalSquare, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#06080d]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-amber-500/5 via-cyan-500/5 to-indigo-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>04 // Recognition & Honors</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Competitive & Academic Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Demonstrated engineering leadership through hackathons, university capstone project honors, and competitive innovation challenges.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-interactive p-6 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle number watermark */}
              <div className="absolute -top-3 -right-2 font-heading font-extrabold text-6xl text-white/[0.03] select-none pointer-events-none group-hover:text-cyan-500/10 transition-colors">
                {item.number}
              </div>

              <div>
                {/* Top Badge and Number */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono border font-medium ${item.accent}`}>
                    {item.badgeText}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    #{item.number}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="font-heading font-bold text-lg text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {item.subtitle}
                </p>

                {/* Detailed description */}
                <p className="text-xs text-slate-300/90 leading-relaxed mb-4">
                  {item.details}
                </p>
              </div>

              {/* Bottom Project Link if applicable */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-slate-400">{item.organization}</span>
                {item.project && (
                  <span className="text-cyan-400 font-medium">{item.project}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification transparency banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] flex items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All recognitions reflect verified project submissions, internal selection records, and official collegiate rankings.</span>
          </div>
          <span className="hidden sm:inline text-slate-400">Zero Fabricated Honors</span>
        </div>
      </div>
    </section>
  );
};
