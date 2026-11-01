import React, { useEffect } from 'react';
import { personalInfo, educationData, experienceData, projects, achievements } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Mail, 
  GraduationCap, 
  Award, 
  Briefcase, 
  FileText 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d121f] border border-white/20 rounded-2xl shadow-2xl z-10 p-6 sm:p-10 text-slate-200">
        {/* Floating Action Controls */}
        <div className="sticky -top-2 -right-2 flex items-center justify-end gap-2 pb-4 pt-1 z-20 bg-[#0d121f]/90 backdrop-blur-md">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Close resume preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Resume Container */}
        <div id="printable-resume" className="space-y-6 text-slate-200">
          {/* Header */}
          <div className="border-b border-white/15 pb-6">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-cyan-300 font-mono mt-1">
              Computer Engineering Undergraduate & Software Developer
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.email}
              </span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 underline"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 underline"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-semibold text-white text-sm">
                  {educationData.degree} in {educationData.major}
                </span>
                <span className="text-xs font-mono text-cyan-300 font-medium">
                  {educationData.graduationYear}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {educationData.institution} – {educationData.campus}
              </p>
              <p className="text-xs font-mono text-emerald-400 font-medium">
                {educationData.sgpa}
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                <strong>Relevant Coursework:</strong> {educationData.coursework.join(', ')}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Professional Training & Internship
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-semibold text-white text-sm">{exp.role}</span>
                  <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-cyan-300">
                  <span>{exp.organization}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-mono font-medium">{exp.grade}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Selected Technical Projects
            </h2>

            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-semibold text-white text-sm">{p.title}</span>
                    <span className="text-[11px] font-mono text-slate-400">{p.badge}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                  {p.recognition && (
                    <p className="text-[11px] font-mono text-amber-300">
                      Recognition: {p.recognition}
                    </p>
                  )}
                  <p className="text-[11px] font-mono text-cyan-300">
                    <strong>Tech:</strong> {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs space-y-1.5 text-slate-300">
              <p><strong>Languages:</strong> Python, C, JavaScript</p>
              <p><strong>Web & Mobile:</strong> HTML, CSS, JavaScript, React, Vite, Flutter, FastAPI, MySQL, Responsive Design</p>
              <p><strong>CS Fundamentals:</strong> Data Structures & Algorithms, Object-Oriented Programming, Low-Level Design, Computational Thinking</p>
              <p><strong>Developer Tools:</strong> Git, GitHub, VS Code, Android Studio</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Honors & Recognitions
            </h2>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 space-y-1">
              {achievements.map((a) => (
                <div key={a.id} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono">[{a.number}]</span>
                  <span><strong>{a.title}</strong> – {a.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
