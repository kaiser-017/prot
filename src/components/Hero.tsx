import { useState } from 'react';
import { ArrowUpRight, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { PORTFOLIO_HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onViewWork: () => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onViewWork, onOpenEstimator, onOpenContact }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroVisuals = [
    {
      id: 1,
      badge: 'ARCHITECTURAL RIGOR',
      title: 'Form & Space',
      sub: 'Minimalist editorial aesthetics with spatial geometry.',
      accent: '#C65D3A',
      type: 'arch',
    },
    {
      id: 2,
      badge: 'HIGH CONVERSION',
      title: 'Conversion UX',
      sub: 'Psychological layout pacing engineered to 2x inbound pipeline.',
      accent: '#171717',
      type: 'conversion',
    },
    {
      id: 3,
      badge: 'FLUID ENGINEERING',
      title: 'Silky 60fps Code',
      sub: 'Zero layout shift, 100/100 Lighthouse score & instant load speeds.',
      accent: '#525252',
      type: 'speed',
    },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroVisuals.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroVisuals.length) % heroVisuals.length);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#e5e7eb]">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#faede8] rounded-full blur-3xl opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Split Grid: Left Column Typography, Right Column Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            {/* Category Kicker in Terracotta (#C65D3A) matching design board */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c65d3a]">
                {PORTFOLIO_HERO_DATA.kicker}
              </span>
              <span className="text-xs text-[#a1a1aa]">/</span>
              <span className="text-xs font-medium text-[#71717a] tracking-wider uppercase">
                Landing Pages & UI/UX
              </span>
            </div>

            {/* Headline Display: Geist Sans 64px, Light-weight, Tight tracking */}
            <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] font-normal leading-[1.02] tracking-[-0.05em] text-[#171717] mb-7 text-balance font-geist">
              {PORTFOLIO_HERO_DATA.titleLine1}{' '}
              <br className="hidden sm:inline" />
              {PORTFOLIO_HERO_DATA.titleLine2}{' '}
              <br className="hidden sm:inline" />
              <span className="relative inline-block">
                <span>{PORTFOLIO_HERO_DATA.titleLine3}</span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#c65d3a] ml-1.5 align-baseline"></span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl font-normal leading-relaxed text-[#525252] max-w-xl mb-9">
              {PORTFOLIO_HERO_DATA.supporting}
            </p>

            {/* CTAs: Primary Pill Button & Secondary Pill Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-6 h-[42px] bg-[#171717] text-[#ffffff] font-medium text-[15px] rounded-full transition-all duration-200 hover:bg-[#333333] hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 px-6 h-[42px] bg-transparent text-[#171717] border border-[#171717] font-medium text-[15px] rounded-full transition-all duration-200 hover:bg-[#171717] hover:text-[#ffffff] active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#c65d3a]" />
                <span>Estimate Scope & Cost</span>
              </button>

              <button
                onClick={onOpenContact}
                className="text-sm font-medium text-[#525252] hover:text-[#171717] underline underline-offset-4 transition-colors px-2 py-1"
              >
                Book Discovery Call
              </button>
            </div>

            {/* Availability Pill */}
            <div className="mt-8 flex items-center gap-2.5 text-xs text-[#525252]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50"></span>
              <span>Accepting select freelance client projects for Q2 / Q3</span>
            </div>
          </div>

          {/* Right Column: Editorial Architectural Visual composition from Board */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* The Outer Frame with Travertine / Terracotta tones */}
            <div className="relative w-full aspect-[4/4.5] max-w-[480px] rounded-[16px] overflow-hidden bg-[#f5f3ee] border border-[#e5e2da] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between text-xs text-[#71717a] border-b border-[#e5e2da] pb-3">
                <span className="font-mono-code uppercase tracking-wider text-[11px] text-[#c65d3a] font-medium">
                  {heroVisuals[activeSlide].badge}
                </span>
                <div className="flex items-center gap-1.5 font-mono-code text-[11px]">
                  <span>0{activeSlide + 1}</span>
                  <span className="text-[#a1a1aa]">/</span>
                  <span className="text-[#a1a1aa]">03</span>
                </div>
              </div>

              {/* Dynamic Center Artwork matching the architectural aesthetic from the board */}
              <div className="relative my-auto w-full h-[260px] flex items-center justify-center overflow-hidden rounded-lg">
                {activeSlide === 0 && (
                  /* Slide 1: Architectural Arch & Terracotta Ramp with Walker */
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Concentric thin compass lines */}
                    <div className="absolute w-[240px] h-[240px] rounded-full border border-[#d9d5cb] opacity-60 pointer-events-none" />
                    <div className="absolute w-[170px] h-[170px] rounded-full border border-dashed border-[#c65d3a]/40 pointer-events-none animate-[spin_60s_linear_infinite]" />

                    {/* Terracotta sculptural curved block */}
                    <div className="relative w-[190px] h-[220px] bg-gradient-to-tr from-[#b85331] via-[#c65d3a] to-[#d87857] rounded-t-[90px] rounded-b-xl shadow-xl overflow-hidden flex flex-col justify-end p-4 border border-[#e5e2da]">
                      {/* Architectural shadow plane */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
                      {/* Diagonal architectural light cast */}
                      <div className="absolute -top-12 -right-8 w-32 h-64 bg-white/20 transform rotate-45 blur-[1px]" />

                      {/* Walking silhouette */}
                      <div className="relative z-10 flex items-center justify-center mb-4">
                        <svg className="w-12 h-16 text-[#ffffff] drop-shadow-md" viewBox="0 0 24 32" fill="currentColor">
                          <circle cx="12" cy="4" r="3" />
                          <path d="M10 8h4l2 9-3 1-1-6-2 8-3-1 2-8-2-3z" />
                        </svg>
                      </div>

                      <div className="relative z-10 text-[11px] text-white/90 text-center font-mono-code tracking-widest uppercase">
                        Digital Craft
                      </div>
                    </div>
                  </div>
                )}

                {activeSlide === 1 && (
                  /* Slide 2: High Conversion Blueprint */
                  <div className="relative w-full h-full p-4 flex flex-col justify-center">
                    <div className="bg-[#ffffff] rounded-lg border border-[#e5e7eb] p-4 shadow-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-[#f4f4f5]">
                        <span className="text-xs font-semibold text-[#171717]">Conversion Architecture</span>
                        <span className="text-[11px] font-mono-code text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          +240% Lift
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-3/4 bg-[#171717] rounded-full" />
                        <div className="h-2 w-1/2 bg-[#e5e7eb] rounded-full" />
                        <div className="h-2 w-5/6 bg-[#e5e7eb] rounded-full" />
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#f4f4f5] flex items-center justify-between text-xs text-[#525252]">
                        <span>Cold Traffic</span>
                        <span className="font-medium text-[#171717]">→ Qualified Lead</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeSlide === 2 && (
                  /* Slide 3: Engineering Benchmark */
                  <div className="relative w-full h-full p-4 flex flex-col justify-center">
                    <div className="bg-[#171717] text-[#fafafa] rounded-lg p-5 shadow-lg font-mono-code text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-[#333333]">
                        <span className="text-[#a1a1aa]">Lighthouse 100/100</span>
                        <span className="text-emerald-400">PASSED</span>
                      </div>
                      <div className="mt-3 space-y-1.5 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-[#a1a1aa]">Performance</span>
                          <span className="text-emerald-400 font-bold">100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#a1a1aa]">Accessibility</span>
                          <span className="text-emerald-400 font-bold">100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#a1a1aa]">Best Practices</span>
                          <span className="text-emerald-400 font-bold">100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#a1a1aa]">SEO Optimization</span>
                          <span className="text-emerald-400 font-bold">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Caption & Controls */}
              <div className="pt-4 border-t border-[#e5e2da] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-[#171717]">
                    {heroVisuals[activeSlide].title}
                  </h4>
                  <p className="text-[11px] text-[#525252] truncate max-w-[240px]">
                    {heroVisuals[activeSlide].sub}
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevSlide}
                    aria-label="Previous slide"
                    className="p-1.5 rounded-full border border-[#d9d5cb] bg-white text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    aria-label="Next slide"
                    className="p-1.5 rounded-full border border-[#d9d5cb] bg-white text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width proof strip below split (Claim-to-Proof Adjacency, Tabular Numerals) */}
        <div className="mt-16 pt-8 border-t border-[#e5e7eb] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PORTFOLIO_HERO_DATA.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#171717] tabular-nums font-geist">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-[#171717] mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-[#71717a] mt-0.5">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
