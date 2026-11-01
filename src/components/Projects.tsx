import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { 
  TerminalSquare, 
  ExternalLink, 
  Award, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { label: `All Projects (${projects.length})`, value: 'all' },
    { label: 'AI & Vision', value: 'ai' },
    { label: 'Cybersecurity & Forensics', value: 'cyber' },
    { label: 'Clean Tech & Energy', value: 'cleantech' },
    { label: 'Full-Stack & Web', value: 'web' },
    { label: 'Social Impact', value: 'impact' }
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return project.id === 'marineguard-mcp' || project.id === 'ai-career-coach' || project.id === 'phyto';
    if (activeFilter === 'cyber') return project.id === 'wasp';
    if (activeFilter === 'cleantech') return project.id === 'urjaa' || project.id === 'marineguard-mcp';
    if (activeFilter === 'web') return project.id === 'phyto' || project.id === 'shopora' || project.id === 'amhi-kolhapuri' || project.id === 'gentelwell';
    if (activeFilter === 'impact') return project.id === 'gentelwell' || project.id === 'marineguard-mcp' || project.id === 'amhi-kolhapuri' || project.id === 'urjaa';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090f]">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
              <TerminalSquare className="w-3.5 h-3.5" />
              <span>03 // Featured Projects</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Applied Engineering & Built Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              From sonar-based AI object detection and digital forensics engines to full-stack e-commerce platforms and accessibility solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0a0e18] p-1.5 rounded-xl border border-white/10">
            {filterOptions.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === filter.value
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 || index === 1; // Give top two spotlight treatment
            return (
              <div
                key={project.id}
                className={`glass-card glass-card-interactive rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden relative group ${
                  isFeatured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Accent top gradient stripe */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor}`} />

                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                        {project.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-heading font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-4 font-medium">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Recognition Callout */}
                    {project.recognition && (
                      <div className="mb-5 p-3 rounded-xl bg-amber-950/20 border border-amber-500/25 flex items-start gap-2.5 text-xs text-amber-200">
                        <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-amber-300">Recognition: </span>
                          <span>{project.recognition}</span>
                        </div>
                      </div>
                    )}

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-white/[0.08] text-slate-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Technologies pills */}
                    <div className="pt-4 border-t border-white/[0.08] mb-5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Core Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/5 text-cyan-200/90"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                      >
                        <span>Deep Dive Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-900/80 border border-white/10 hover:border-slate-300 text-slate-300 hover:text-white transition-all"
                            title="View GitHub Repository"
                            aria-label={`GitHub repo for ${project.title}`}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold transition-all shadow-sm shadow-cyan-500/20"
                            title="View Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
