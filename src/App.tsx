import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { CertificateModal } from './components/CertificateModal';
import { Education } from './components/Education';
import { JourneyTimeline } from './components/JourneyTimeline';
import { BeyondCode } from './components/BeyondCode';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import type { Project, Certification } from './types';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="min-h-screen bg-[#06080d] text-[#e2e8f0] relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Achievements />
        <Experience />
        <Certifications onSelectCert={(cert) => setSelectedCert(cert)} />
        <Education />
        <JourneyTimeline />
        <BeyondCode />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}

export default App;
