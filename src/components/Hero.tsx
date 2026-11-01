import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { TechConstellationCanvas } from './TechConstellationCanvas';
import { 
  ArrowDown, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  Shield, 
  Cpu,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-purple-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Eyebrow Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Computer Engineering Undergraduate // Innovator</span>
          </div>
        </div>

        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-3">
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08]">
                SHREYA <br />
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  BAMBARE
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-heading font-medium text-slate-300 tracking-wide flex items-center gap-2">
                <span className="text-cyan-400">/</span> {personalInfo.headline}
              </p>
            </div>

            <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroIntro}
            </p>

            {/* Quick Domain Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Artificial Intelligence
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-violet-400" /> Digital Forensics & Cyber
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                <Layers className="w-3.5 h-3.5 text-blue-400" /> Full-Stack Engineering
              </span>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-cyan-500/40 text-sm font-medium transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View My Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] text-sm font-medium transition-all"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Link Badges */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-slate-400">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-400 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Constellation Canvas Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <TechConstellationCanvas />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-8 flex flex-col items-center justify-center gap-2 text-slate-400">
        <a
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-xs font-mono tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label="Scroll down to About section"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-cyan-400/50">
            <div className="w-1.5 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
