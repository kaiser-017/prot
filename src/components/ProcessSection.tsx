import { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProcessSectionProps {
  onOpenEstimator: () => void;
}

export default function ProcessSection({ onOpenEstimator }: ProcessSectionProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 md:py-32 border-b border-[#e5e7eb] bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#c65d3a]"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
              Process & Transparency
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-[-0.03em] text-[#171717] font-geist">
            From strategic discovery to high-converting launch.
          </h2>
          <p className="text-base text-[#525252] mt-3">
            No messy handoffs, no endless meetings. A lean, transparent 4-stage sprint designed to take your digital presence from concept to live deployment with zero friction.
          </p>
        </div>

        {/* 4-Step Interactive Navigation Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeStepIndex === idx
                  ? 'bg-[#ffffff] border-[#171717] shadow-sm'
                  : 'bg-[#fafafa] border-[#e5e7eb] hover:bg-[#ffffff] hover:border-[#d4d4d8]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-code text-xs font-bold text-[#c65d3a]">
                  {step.number}
                </span>
                <span className="text-[11px] font-mono-code text-[#71717a] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {step.timeline}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[#171717]">
                {step.title}
              </h3>
              <p className="text-xs text-[#525252] mt-1 line-clamp-1">
                {step.phase}
              </p>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Container */}
        <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-2xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details & Key Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#171717] text-white flex items-center justify-center font-mono-code text-xs font-bold">
                {activeStep.number}
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c65d3a]">
                  {activeStep.phase}
                </span>
                <h3 className="text-2xl font-semibold text-[#171717]">
                  {activeStep.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-[#171717] font-medium leading-relaxed">
              "{activeStep.tagline}"
            </p>

            <p className="text-sm text-[#525252] leading-relaxed">
              {activeStep.description}
            </p>

            {/* Key collaborative actions */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#71717a] mb-3">
                Key Actions in this Stage
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStep.keyActions.map((action, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#171717]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c65d3a] mt-1.5 shrink-0" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tangible Deliverables Card */}
          <div className="lg:col-span-5 bg-[#fafafa] border border-[#e5e7eb] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e7eb]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#171717]">
                  Guaranteed Deliverables
                </span>
                <span className="text-xs font-mono-code text-[#71717a]">
                  {activeStep.timeline}
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {activeStep.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-[#171717]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e5e7eb] flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-[#525252]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-surprise milestone signoff</span>
              </div>

              <button
                onClick={onOpenEstimator}
                className="text-xs font-medium text-[#171717] hover:text-[#c65d3a] flex items-center gap-1"
              >
                <span>Check timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
