import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code, 
  Layout, 
  Brain, 
  Terminal, 
  TerminalSquare, 
  Search, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Layout':
        return Layout;
      case 'Brain':
        return Brain;
      case 'Terminal':
      default:
        return Terminal;
    }
  };

  const filteredCategories = skillCategories
    .filter(cat => selectedCategory === 'all' || cat.name === selectedCategory)
    .map(cat => ({
      ...cat,
      skills: cat.skills.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.note && s.note.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }))
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#06080e]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
              <TerminalSquare className="w-3.5 h-3.5" />
              <span>02 // Technical Skills</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Categorized Stack & Engineering Arsenal
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Verified technical proficiencies across algorithms, full-stack architectures, systems, and specialized tooling.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, Git)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 transition-all font-mono"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.07]'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.name
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.07]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = getCategoryIcon(category.icon);
            return (
              <div
                key={category.name}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                          {category.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} verified technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/30 hover:bg-slate-900 transition-all flex flex-col justify-center"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="font-medium text-xs text-slate-100">
                            {skill.name}
                          </span>
                        </div>
                        {skill.note && (
                          <span className="text-[11px] text-slate-400 mt-1 pl-5.5 font-mono leading-tight">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>No fabricated percentages</span>
                  <span className="text-cyan-400/80">Applied in live repositories</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Domain Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-purple-950/20 to-slate-900/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Domain Specializations: Forensics & Computer Vision</h4>
              <p className="text-xs text-slate-400">YOLOv8 sonar detection, NTFS Master File Table analysis, Sigma rule hunting, and preliminary health telemetry.</p>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 shrink-0"
          >
            <span>See Project Implementations</span> &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
