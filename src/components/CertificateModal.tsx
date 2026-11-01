import { useEffect } from 'react';
import type { Certification } from '../types';
import { 
  X, 
  Award, 
  Building2, 
  ShieldCheck, 
  ExternalLink, 
  Calendar
} from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-[#0c101a] border border-white/15 rounded-2xl shadow-2xl z-10 p-6 sm:p-8 text-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-slate-400 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Credential Header Visual */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 mb-6 flex flex-col items-center text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4 shadow-lg shadow-cyan-500/20">
            <Award className="w-7 h-7" />
          </div>

          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 mb-2">
            {cert.credentialBadge}
          </span>

          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white max-w-md">
            {cert.title}
          </h3>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-2">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{cert.issuer}</span>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="space-y-4">
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
              Course & Curriculum Scope
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3.5 rounded-xl border border-white/5">
              {cert.details}
            </p>
          </div>

          {cert.duration && (
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Program Duration: {cert.duration}</span>
            </div>
          )}

          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Verified Focus Areas
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Academic Credential</span>
            </div>
            <a
              href="https://www.linkedin.com/in/shreya-bambare-44338830a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
