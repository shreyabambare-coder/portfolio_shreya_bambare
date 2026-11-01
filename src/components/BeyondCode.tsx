import React from 'react';
import { beyondCodeInterests } from '../data/portfolioData';
import { 
  TerminalSquare, 
  Compass, 
  Puzzle, 
  Microscope, 
  Users, 
  HeartHandshake, 
  Sparkles 
} from 'lucide-react';

export const BeyondCode: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'Puzzle':
        return Puzzle;
      case 'Microscope':
        return Microscope;
      case 'Users':
        return Users;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="beyond-code" className="py-24 relative overflow-hidden bg-[#07090f]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>09 // Perspectives & Philosophy</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Beyond Code: Mindset & Drives
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            What motivates my curiosity when the terminal closes — from exploring emergent paradigms to architecting solutions that prioritize human impact.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beyondCodeInterests.map((interest, idx) => {
            const IconComponent = getIcon(interest.icon);
            return (
              <div
                key={idx}
                className="glass-card glass-card-interactive p-6 rounded-2xl border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {interest.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Continuous Exploration</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
