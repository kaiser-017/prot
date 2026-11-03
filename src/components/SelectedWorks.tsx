import { useState } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';
import ProjectMockupView from './ProjectMockupView';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
  onOpenEstimator: () => void;
}

export default function SelectedWorks({ onSelectProject, onOpenEstimator }: SelectedWorksProps) {
  const [filter, setFilter] = useState<'all' | 'landing' | 'webapp' | 'uiux'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="work" className="py-20 md:py-32 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header matching design board: "— Selected Works" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#c65d3a]"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                Selected Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-[-0.03em] text-[#171717] font-geist">
              Crafted for brands that demand measurable conversion.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEstimator}
              className="text-sm font-medium text-[#c65d3a] hover:text-[#b85331] inline-flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Need a custom build? Calculate estimate →</span>
            </button>
          </div>
        </div>

        {/* Filter Controls (Segmented clean functional buttons, zero-pill discipline) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer ${
              filter === 'all'
                ? 'bg-[#171717] text-[#ffffff] shadow-sm'
                : 'bg-[#f4f4f5] text-[#525252] hover:text-[#171717] hover:bg-[#e4e4e7]'
            }`}
          >
            All Works ({PROJECTS_DATA.length})
          </button>
          <button
            onClick={() => setFilter('landing')}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer ${
              filter === 'landing'
                ? 'bg-[#171717] text-[#ffffff] shadow-sm'
                : 'bg-[#f4f4f5] text-[#525252] hover:text-[#171717] hover:bg-[#e4e4e7]'
            }`}
          >
            Landing Pages
          </button>
          <button
            onClick={() => setFilter('webapp')}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer ${
              filter === 'webapp'
                ? 'bg-[#171717] text-[#ffffff] shadow-sm'
                : 'bg-[#f4f4f5] text-[#525252] hover:text-[#171717] hover:bg-[#e4e4e7]'
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setFilter('uiux')}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer ${
              filter === 'uiux'
                ? 'bg-[#171717] text-[#ffffff] shadow-sm'
                : 'bg-[#f4f4f5] text-[#525252] hover:text-[#171717] hover:bg-[#e4e4e7]'
            }`}
          >
            UI/UX & Design Systems
          </button>
        </div>

        {/* Projects Grid: 3 columns on large desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#ffffff] rounded-[12px] border border-[#e5e7eb] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#171717]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Visual Mockup Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="relative aspect-[16/11] w-full overflow-hidden border-b border-[#e5e7eb] cursor-pointer bg-[#fafafa]"
              >
                <ProjectMockupView project={project} />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                  <span className="px-3.5 py-1.5 bg-[#ffffff] text-[#171717] text-xs font-medium rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Interactive Preview</span>
                  </span>
                </div>
              </div>

              {/* Card Content & Metadata */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators (anti-slop rule) */}
                  <div className="flex items-center gap-2 text-xs text-[#71717a] mb-2 font-mono-code">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-xl font-medium text-[#171717] group-hover:text-[#c65d3a] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#c65d3a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="text-sm text-[#525252] mt-2 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Key Metric & Deliverables */}
                <div className="mt-6 pt-4 border-t border-[#f4f4f5] flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#71717a]">Verified Outcome:</span>
                    <span className="text-xs font-semibold text-[#171717] bg-[#f4f4f5] px-2 py-0.5 rounded">
                      {project.metric}
                    </span>
                  </div>

                  {/* Action Buttons: Live Interactive Frame / Case Study */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#171717] text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Also trigger preview modal if clicked for full experience
                      }}
                      className="w-full py-2 bg-[#171717] hover:bg-[#333333] text-[#ffffff] text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
