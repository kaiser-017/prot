import { useState } from 'react';
import { Project, ProjectScopeType, TimelineType } from './types/portfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import ProjectModal from './components/ProjectModal';
import ProcessSection from './components/ProcessSection';
import ProjectEstimator from './components/ProjectEstimator';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Image, X } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledScopeData, setPrefilledScopeData] = useState<{
    scope: ProjectScopeType;
    scopeLabel: string;
    addons: string[];
    range: string;
    deliveryTime: string;
  } | null>(null);
  const [showWorkflowBoard, setShowWorkflowBoard] = useState(false);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyEstimate = (data: {
    scope: ProjectScopeType;
    scopeLabel: string;
    addons: string[];
    timeline: TimelineType;
    range: string;
    deliveryTime: string;
  }) => {
    setPrefilledScopeData(data);
    scrollToContact();
  };

  const handleBookSimilar = (project: Project) => {
    setPrefilledScopeData({
      scope: project.category === 'webapp' ? 'webapp' : 'landing',
      scopeLabel: `${project.title} style (${project.categoryLabel})`,
      addons: ['Custom Motion Animations', 'Conversion Funnel Optimization'],
      range: '$3,200 – $6,000 USD',
      deliveryTime: '2 – 3 Weeks',
    });
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#171717] flex flex-col font-sans selection:bg-[#171717] selection:text-[#ffffff]">
      {/* Navigation */}
      <Navbar
        onOpenContact={scrollToContact}
        onOpenEstimator={scrollToEstimator}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero (Impact First & Editorial Visual) */}
        <Hero
          onViewWork={scrollToWork}
          onOpenEstimator={scrollToEstimator}
          onOpenContact={scrollToContact}
        />

        {/* 2. Selected Works (Visual Focus & Live Links) */}
        <SelectedWorks
          onSelectProject={setSelectedProject}
          onOpenEstimator={scrollToEstimator}
        />

        {/* 3. Process Section (Transparency & Timeline) */}
        <ProcessSection onOpenEstimator={scrollToEstimator} />

        {/* 4. Interactive Freelance Estimator (High-Converting Lead Generator) */}
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 5. About & Philosophy (Craft, Skills & Testimonials) */}
        <AboutSection />

        {/* 6. FAQ Section */}
        <FaqSection />

        {/* 7. Contact Section (Lead Capture & Conversion) */}
        <ContactSection
          prefilledScopeData={prefilledScopeData}
          onClearPrefilledScope={() => setPrefilledScopeData(null)}
        />
      </main>

      {/* Project Case Study & Live Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookSimilar={handleBookSimilar}
      />

      {/* Footer */}
      <Footer />

      {/* Quick Access to Original Workflow Design Board */}
      <div className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => setShowWorkflowBoard(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#ffffff] hover:bg-[#f4f4f5] text-[#171717] text-xs font-medium rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e5e7eb] transition-all hover:scale-105 active:scale-95"
          title="Inspect the workflow design sheet"
        >
          <Image className="w-3.5 h-3.5 text-[#c65d3a]" />
          <span>Workflow Sheet</span>
        </button>
      </div>

      {/* Workflow Design Sheet Lightbox */}
      {showWorkflowBoard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative max-w-5xl w-full bg-[#fafafa] rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-2xl flex flex-col max-h-[92vh]">
            <div className="px-6 py-3 border-b border-[#e5e7eb] flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-[#171717]">
                  DIVU Portfolio — Original Workflow Design Sheet (Vercel Minimal)
                </span>
              </div>
              <button
                onClick={() => setShowWorkflowBoard(false)}
                className="p-1.5 rounded-full hover:bg-[#f4f4f5] text-[#171717]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-[#f4f4f5]">
              <img
                src="/assets/aistudio/DIVU_Portfolio_Workflow_Design_Board_c1c69ef1.png"
                alt="DIVU Portfolio Workflow Design Sheet"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
