import React from 'react';
import { certificationsData } from '../data/portfolioData';
import type { Certification } from '../types';
import { 
  TerminalSquare, 
  Award, 
  Building2, 
  ArrowUpRight, 
  ExternalLink
} from 'lucide-react';

interface CertificationsProps {
  onSelectCert: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
              <TerminalSquare className="w-3.5 h-3.5" />
              <span>06 // Credentials & Accreditations</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Verified Certifications & Workshops
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Professional credentials in algorithms, mobile development, low-level design, and competitive coding from institutions like NPTEL/IIT Madras and Google for Developers.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/shreya-bambare-44338830a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300 hover:text-white hover:border-cyan-500/40 transition-all shrink-0"
          >
            <span>Additional on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-interactive p-6 rounded-2xl border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cert.issuer}</span>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-950/30 border border-emerald-500/30 text-emerald-300">
                    {cert.credentialBadge}
                  </span>
                </div>

                <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                  {cert.details}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {cert.skills.slice(0, 2).join(' • ')}
                  </span>

                  <button
                    onClick={() => onSelectCert(cert)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    <span>View Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
