import { useEffect } from 'react';
import type { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Award, 
  CheckCircle, 
  AlertCircle, 
  Terminal
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0b0f19] border border-white/15 rounded-2xl shadow-2xl z-10 p-6 sm:p-8 text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-slate-400 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-cyan-400/90 font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Recognition Banner if present */}
        {project.recognition && (
          <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-amber-950/30 to-amber-900/10 border border-amber-500/30 flex items-start gap-3 text-amber-200 text-xs">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-amber-300">Verified Recognition:</span>
              <span>{project.recognition}</span>
            </div>
          </div>
        )}

        {/* Links row */}
        <div className="flex flex-wrap items-center gap-3 mt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium border border-white/15 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold transition-all shadow-md shadow-cyan-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Deployment</span>
            </a>
          )}
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-medium">
              <AlertCircle className="w-4 h-4" />
              <span>PROBLEM STATEMENT</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>PROPOSED SOLUTION</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Key Engineering Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contribution Note if present */}
        {project.contribution && (
          <div className="mt-6 p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-xs text-slate-300 space-y-1">
            <span className="font-mono text-cyan-300 block font-semibold text-[11px] uppercase">
              Role & Contribution Context
            </span>
            <p className="leading-relaxed">{project.contribution}</p>
          </div>
        )}

        {/* Technologies Badges */}
        <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
            Technologies & Frameworks
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
