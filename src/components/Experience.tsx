import React from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  TerminalSquare, 
  Award, 
  Calendar, 
  Building2, 
  CheckCircle2
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>05 // Industry Training & Internship</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Verified Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Structured software development training with recognized institutions, emphasizing production practices and architecture.
          </p>
        </div>

        {/* Experience Showcase */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-2xl border border-white/15 p-6 sm:p-10 relative overflow-hidden shadow-2xl hover:border-cyan-500/40 transition-all"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left meta information */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    <Award className="w-3.5 h-3.5" />
                    <span>Grade O (Outstanding Recognition)</span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    {exp.role}
                  </h3>

                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center gap-2 text-cyan-300 font-medium">
                      <Building2 className="w-4 h-4 shrink-0 text-cyan-400" />
                      <span>{exp.organization}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{exp.duration} (10 Weeks Intensive)</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                      Core Competencies Acquired
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-cyan-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right detailed bullet points */}
                <div className="lg:col-span-7 bg-slate-900/50 p-6 sm:p-7 rounded-xl border border-white/5 space-y-3.5">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Responsibilities & Deliverables
                  </span>

                  {exp.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                      <div className="w-5 h-5 rounded-md bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
