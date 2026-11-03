import { useState, useMemo } from 'react';
import { ProjectScopeType, TimelineType } from '../types/portfolio';
import {
  calculateProjectEstimate,
  AVAILABLE_ADDONS,
  SCOPE_CONFIGS,
  TIMELINE_MULTIPLIERS,
} from '../utils/estimator';
import { Sparkles, Check, Clock, ArrowRight, DollarSign, Layers } from 'lucide-react';

interface ProjectEstimatorProps {
  onApplyEstimate: (scopeData: {
    scope: ProjectScopeType;
    scopeLabel: string;
    addons: string[];
    timeline: TimelineType;
    range: string;
    deliveryTime: string;
  }) => void;
}

export default function ProjectEstimator({ onApplyEstimate }: ProjectEstimatorProps) {
  const [selectedScope, setSelectedScope] = useState<ProjectScopeType>('landing');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['motion', 'seo_cro']);
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineType>('standard');

  const estimate = useMemo(() => {
    return calculateProjectEstimate(selectedScope, selectedAddonIds, selectedTimeline);
  }, [selectedScope, selectedAddonIds, selectedTimeline]);

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApply = () => {
    const scopeLabel = SCOPE_CONFIGS[selectedScope]?.label || 'Landing Page';
    const addonNames = AVAILABLE_ADDONS.filter((a) => selectedAddonIds.includes(a.id)).map(
      (a) => a.label
    );

    onApplyEstimate({
      scope: selectedScope,
      scopeLabel,
      addons: addonNames,
      timeline: selectedTimeline,
      range: estimate.formattedRange,
      deliveryTime: estimate.formattedTimeline,
    });
  };

  return (
    <section id="estimator" className="py-20 md:py-32 border-b border-[#e5e7eb] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faede8] text-[#c65d3a] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Project Scope & Budget Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-[-0.03em] text-[#171717] font-geist">
            Transparent pricing. Zero surprises.
          </h2>
          <p className="text-base text-[#525252] mt-3">
            Configure your deliverables to receive an instant, accurate investment bracket and realistic delivery timeline for your upcoming project.
          </p>
        </div>

        {/* 2-Column Grid: Left Configuration, Right Real-time Estimate Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope & Feature Selectors (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Project Scope */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center font-mono-code">
                  1
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
                  Select Project Scope
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(SCOPE_CONFIGS) as ProjectScopeType[]).map((key) => {
                  const cfg = SCOPE_CONFIGS[key];
                  const isSelected = selectedScope === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedScope(key)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-[#171717] bg-[#fafafa] shadow-sm'
                          : 'border-[#e5e7eb] bg-[#ffffff] hover:border-[#d4d4d8]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-[#171717]">
                          {cfg.label}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#171717] bg-[#171717]' : 'border-[#d4d4d8]'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                      </div>
                      <p className="text-xs text-[#525252] leading-relaxed">
                        {cfg.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Delivery Speed */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center font-mono-code">
                  2
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
                  Select Delivery Pace
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(TIMELINE_MULTIPLIERS) as TimelineType[]).map((tKey) => {
                  const tCfg = TIMELINE_MULTIPLIERS[tKey];
                  const isSelected = selectedTimeline === tKey;
                  return (
                    <button
                      key={tKey}
                      onClick={() => setSelectedTimeline(tKey)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-[#171717] bg-[#fafafa] shadow-sm'
                          : 'border-[#e5e7eb] bg-[#ffffff] hover:border-[#d4d4d8]'
                      }`}
                    >
                      <span className="text-xs font-semibold text-[#171717] block">
                        {tCfg.label}
                      </span>
                      <span className="text-[11px] text-[#71717a] mt-1 block">
                        {tKey === 'fast'
                          ? 'Priority sprint turnaround'
                          : tKey === 'flexible'
                          ? '5% flexible schedule discount'
                          : 'Standard milestone pace'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center font-mono-code">
                  3
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
                  Optional Capabilities & Add-ons
                </h3>
              </div>

              <div className="space-y-2.5">
                {AVAILABLE_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-4 transition-all duration-150 cursor-pointer ${
                        isChecked
                          ? 'border-[#171717] bg-[#fafafa]'
                          : 'border-[#e5e7eb] bg-[#ffffff] hover:border-[#d4d4d8]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 ${
                            isChecked ? 'border-[#171717] bg-[#171717]' : 'border-[#d4d4d8]'
                          }`}
                        >
                          {isChecked && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                        <div>
                          <span className="text-xs font-medium text-[#171717] block">
                            {addon.label}
                          </span>
                          <span className="text-[11px] text-[#71717a] block mt-0.5">
                            {addon.description}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono-code font-semibold text-[#171717]">
                          +${addon.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Real-time Proposal Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-[#fdfbfa] border-2 border-[#171717] rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#e5e7eb]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c65d3a]">
                Live Scope Estimate
              </span>
              <span className="text-xs font-mono-code text-[#71717a]">
                USD / Guaranteed Flat Rate
              </span>
            </div>

            {/* Estimated Price Range Display */}
            <div className="py-6">
              <span className="text-xs text-[#525252] block">
                Estimated Investment Range:
              </span>
              <div className="text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight mt-1 tabular-nums font-geist">
                {estimate.formattedRange}
              </div>
              <p className="text-xs text-[#71717a] mt-1">
                Based on scope, selected addons & chosen turnaround pace.
              </p>
            </div>

            {/* Delivery Timeline Breakdown */}
            <div className="p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-xl flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c65d3a]" />
                <span className="text-xs text-[#525252]">Estimated Launch:</span>
              </div>
              <span className="text-xs font-mono-code font-bold text-[#171717]">
                {estimate.formattedTimeline}
              </span>
            </div>

            {/* Inclusions Summary */}
            <div className="space-y-2 mb-8 text-xs text-[#525252]">
              <div className="flex items-center gap-2 text-[#171717]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bespoke Figma UI/UX Design & High-Fidelity Prototype</span>
              </div>
              <div className="flex items-center gap-2 text-[#171717]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production TypeScript + Tailwind front-end (100/100 speed)</span>
              </div>
              <div className="flex items-center gap-2 text-[#171717]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>30-Day Post-Launch Bug-Free Warranty & Full Git Handover</span>
              </div>
            </div>

            {/* Primary Action Button: Lock in Scope & Send Inquiry */}
            <button
              onClick={handleApply}
              className="w-full h-12 bg-[#171717] hover:bg-[#333333] text-white font-medium text-sm rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-[0.98]"
            >
              <span>Lock in This Scope & Inquire</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-[11px] text-[#71717a] mt-3">
              Applies this scope configuration directly to the contact form below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
