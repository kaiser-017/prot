import { useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import ProjectMockupView from './ProjectMockupView';
import { X, ExternalLink, Monitor, Tablet, Smartphone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookSimilar: (project: Project) => void;
}

export default function ProjectModal({ project, onClose, onBookSimilar }: ProjectModalProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#ffffff] rounded-[16px] shadow-2xl border border-[#e5e7eb] flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center justify-between gap-4 bg-[#fafafa]">
          <div className="flex items-center gap-3">
            <h3 id="modal-project-title" className="text-lg font-semibold text-[#171717] font-geist">
              {project.title}
            </h3>
            <span className="text-xs text-[#71717a] font-mono-code hidden sm:inline">
              {project.client} · {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Device Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-[#f4f4f5] p-1 rounded-lg border border-[#e4e4e7]">
              <button
                onClick={() => setDeviceMode('desktop')}
                aria-label="Desktop viewport preview"
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceMode === 'desktop' ? 'bg-white shadow-sm text-[#171717]' : 'text-[#71717a] hover:text-[#171717]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                aria-label="Tablet viewport preview"
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceMode === 'tablet' ? 'bg-white shadow-sm text-[#171717]' : 'text-[#71717a] hover:text-[#171717]'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                aria-label="Mobile viewport preview"
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceMode === 'mobile' ? 'bg-white shadow-sm text-[#171717]' : 'text-[#71717a] hover:text-[#171717]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#171717] text-white rounded-full hover:bg-[#333333] transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-1.5 text-[#525252] hover:text-[#171717] hover:bg-[#f4f4f5] rounded-full transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Interactive Device Viewport Simulation */}
          <div className="w-full bg-[#f4f4f5] rounded-xl p-4 sm:p-6 border border-[#e5e7eb] flex items-center justify-center">
            <div
              className={`transition-all duration-300 w-full overflow-hidden shadow-lg border border-[#e5e7eb] rounded-lg ${
                deviceMode === 'desktop'
                  ? 'max-w-full h-[360px]'
                  : deviceMode === 'tablet'
                  ? 'max-w-[540px] h-[360px]'
                  : 'max-w-[320px] h-[400px]'
              }`}
            >
              <ProjectMockupView project={project} interactive={true} />
            </div>
          </div>

          <div className="flex items-center justify-center text-xs text-[#71717a] -mt-4">
            <span>Interactive sandbox preview — test live controls, inputs & interactions above</span>
          </div>

          {/* Key Metric Highlight Strip */}
          <div className="p-5 bg-[#fafafa] border border-[#e5e7eb] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c65d3a]">
                Measured Business Impact
              </span>
              <div className="text-2xl sm:text-3xl font-semibold text-[#171717] mt-0.5">
                {project.metric}
              </div>
              <p className="text-xs text-[#525252] mt-0.5">
                {project.metricLabel}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookSimilar(project);
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#171717] text-white text-xs font-medium rounded-full hover:bg-[#333333] transition-colors whitespace-nowrap self-start sm:self-center"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c65d3a]" />
              <span>Build A Similar Solution</span>
            </button>
          </div>

          {/* Case Study Deep Dive: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#171717] mb-2">
                The Strategic Challenge
              </h4>
              <p className="text-sm text-[#525252] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#171717] mb-2">
                The Engineering & UX Solution
              </h4>
              <p className="text-sm text-[#525252] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#f4f4f5]">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#71717a] mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#171717]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#71717a] mb-3">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded bg-[#f4f4f5] text-[#171717] border border-[#e5e7eb] font-mono-code"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Client Testimonial if available */}
          {project.testimonial && (
            <div className="p-6 rounded-xl bg-[#fdfbfa] border border-[#faede8]">
              <p className="text-sm italic text-[#292524] leading-relaxed mb-4">
                "{project.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c65d3a] text-white flex items-center justify-center text-xs font-bold">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#171717]">
                    {project.testimonial.author}
                  </div>
                  <div className="text-[11px] text-[#71717a]">
                    {project.testimonial.role} · {project.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-[#e5e7eb] bg-[#fafafa] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-[#525252] hover:text-[#171717] font-medium"
          >
            ← Back to Works
          </button>

          <button
            onClick={() => {
              onClose();
              onBookSimilar(project);
            }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#171717] text-white text-xs font-medium rounded-full hover:bg-[#333333] transition-colors"
          >
            <span>Discuss This Project Type</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
