import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  TerminalSquare, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Building2, 
  CheckCircle2
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#07090f]">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-indigo-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>07 // Academic Foundation</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Education & Coursework
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Undergraduate Computer Engineering curriculum grounding theoretical foundations in algorithms, mathematical rigor, and engineering principles.
          </p>
        </div>

        {/* Education Profile Card */}
        <div className="glass-card rounded-2xl border border-white/15 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Degree & University Meta */}
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  {educationData.degree}
                </h3>
                <p className="text-base text-cyan-300 font-medium mt-1">
                  {educationData.major}
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-300 pt-2">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white block">{educationData.institution}</span>
                    <span className="text-xs text-slate-400">{educationData.campus}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{educationData.graduationYear}</span>
                </div>
              </div>

              {/* SGPA Badge */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    First Semester Score
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-heading font-extrabold text-cyan-300">8.78</span>
                    <span className="text-xs font-mono text-slate-400">/ 10 SGPA</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                  First-Class
                </div>
              </div>
            </div>

            {/* Coursework & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Key Completed & In-Progress Coursework</span>
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {educationData.coursework.map((course) => (
                    <div
                      key={course}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] flex items-center gap-2.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-xs font-medium text-slate-200">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Collegiate Engagements & Highlights
                </span>
                {educationData.academicHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
