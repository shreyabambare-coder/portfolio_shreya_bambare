import React from 'react';
import { journeyMilestones } from '../data/portfolioData';
import { 
  TerminalSquare, 
  GraduationCap, 
  Award, 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  ShieldCheck, 
  Cpu, 
  Trophy, 
  Terminal, 
  Sparkles,
  Zap
} from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'GraduationCap':
        return GraduationCap;
      case 'Award':
        return Award;
      case 'Globe':
        return Globe;
      case 'Smartphone':
        return Smartphone;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Cpu':
        return Cpu;
      case 'Trophy':
        return Trophy;
      case 'Terminal':
        return Terminal;
      case 'Zap':
        return Zap;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>08 // Trajectory & Milestones</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
            My Journey in Engineering & Innovation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A chronological roadmap reflecting continuous exploration, rapid skill acquisition, and competitive hackathon participation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10 my-8">
          {journeyMilestones.map((item, index) => {
            const IconComponent = getIcon(item.iconType);
            return (
              <div key={index} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0b0f19] border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 shadow-md shadow-cyan-500/20 transition-all">
                  <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Content Card */}
                <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.05] border border-white/10 text-slate-300">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
