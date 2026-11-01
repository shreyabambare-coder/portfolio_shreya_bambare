import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Smartphone, 
  Globe, 
  Users2, 
  Award,
  TerminalSquare,
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      label: "B.Tech Undergraduate",
      desc: "Computer Engineering at D. Y. Patil Education Society (Class of 2029)",
      accent: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20"
    },
    {
      icon: Award,
      label: "Academic Merit",
      desc: "First Semester SGPA: 8.78 / 10 with strong foundations in mathematics and computing",
      accent: "text-amber-400 border-amber-500/20 bg-amber-950/20"
    },
    {
      icon: Code2,
      label: "Core Languages",
      desc: "Python (AI/Automation), C (Systems/DSA), and JavaScript (Modern Web)",
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20"
    },
    {
      icon: Globe,
      label: "Web Engineering",
      desc: "Building accessible web interfaces, responsive layouts, and RESTful architectures",
      accent: "text-blue-400 border-blue-500/20 bg-blue-950/20"
    },
    {
      icon: Smartphone,
      label: "Android Exposure",
      desc: "Completed Google for Developers 10-week virtual internship with Grade 'O' distinction",
      accent: "text-indigo-400 border-indigo-500/20 bg-indigo-950/20"
    },
    {
      icon: Cpu,
      label: "AI & Computer Vision",
      desc: "Trained YOLOv8 architectures on marine and sonar datasets for debris detection",
      accent: "text-sky-400 border-sky-500/20 bg-sky-950/20"
    },
    {
      icon: ShieldCheck,
      label: "Cybersecurity & Forensics",
      desc: "Hands-on NTFS MFT extraction, Windows Event log parsing, and Sigma threat hunting",
      accent: "text-purple-400 border-purple-500/20 bg-purple-950/20"
    },
    {
      icon: Users2,
      label: "Teamwork & Hackathons",
      desc: "Active participant in competitive hackathons (IIT Guwahati shortlisted, SIH internal selection, She Builds, innovation challenges)",
      accent: "text-rose-400 border-rose-500/20 bg-rose-950/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering with curiosity, precision, and purpose.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A look into my engineering background, technical compass, and drive to build impactful software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic narrative & philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

              <h3 className="font-heading font-semibold text-xl text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>The Story So Far</span>
              </h3>

              <div className="space-y-4 text-slate-300/90 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm <strong className="text-white font-medium">Shreya Hanmant Bambare</strong>, a Computer Engineering undergraduate with a strong interest in software engineering, artificial intelligence, cybersecurity, and innovative product development.
                </p>
                <p>
                  I enjoy exploring different domains of technology, understanding real-world problems, and building practical solutions through programming and collaborative development.
                </p>
                <p>
                  My journey includes developing web applications, contributing to AI-powered systems, exploring digital forensics, participating in hackathons, and working on projects with social impact.
                </p>
                <p className="text-cyan-200/90 font-medium border-l-2 border-cyan-400/60 pl-3 italic">
                  "I believe in continuous learning, experimentation, and turning ideas into meaningful technology."
                </p>
              </div>

              {/* Quick Academic Profile Snapshot */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Institution</span>
                  <span className="text-xs font-medium text-slate-200 block mt-0.5">D. Y. Patil Education Society</span>
                  <span className="text-[11px] text-slate-400">School of Engg. & Management</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">First Sem SGPA</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xl font-heading font-bold text-cyan-300">8.78</span>
                    <span className="text-xs text-slate-400 font-mono">/ 10</span>
                  </div>
                  <span className="text-[11px] text-emerald-400">First-Class Distinction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key technical highlights grid */}
          <div className="lg:col-span-6">
            <h3 className="font-heading font-semibold text-lg text-slate-200 mb-5 flex items-center gap-2">
              <span>Core Competency Pillars</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card glass-card-interactive p-4 rounded-xl border border-white/[0.08] flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border mb-3 ${item.accent}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-semibold text-sm text-white mb-1.5">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
