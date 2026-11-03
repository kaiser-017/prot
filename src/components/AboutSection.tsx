import { CLIENT_REVIEWS } from '../data/portfolioData';
import { Check, Star, Zap, UserCheck, Shield, Award } from 'lucide-react';

export default function AboutSection() {
  const comparison = [
    {
      feature: 'Point of Contact',
      me: 'Direct 1-on-1 with senior designer & developer',
      agency: 'Account manager / junior designer relay',
    },
    {
      feature: 'Average Turnaround',
      me: '7 to 21 business days from kickoff to live',
      agency: '8 to 16 weeks with bloated approval committees',
    },
    {
      feature: 'Conversion & Code',
      me: '100/100 Lighthouse, clean TypeScript, no bloated plugins',
      agency: 'Heavy third-party templates with slow load times',
    },
    {
      feature: 'Pricing Model',
      me: 'Guaranteed flat-rate milestone pricing',
      agency: 'Hidden scope creep & hourly billable retainers',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 border-b border-[#e5e7eb] bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#c65d3a]"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
              Craft & Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-[-0.03em] text-[#171717] font-geist">
            A designer who codes. A developer who obsesses over typography.
          </h2>
        </div>

        {/* 2-Column Split: Story & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-6 text-[#525252] leading-relaxed text-base">
            <p className="text-lg text-[#171717] font-medium leading-relaxed">
              Most digital projects fail for one simple reason: designers create mockups that developers cannot cleanly build, while developers build rigid interfaces that lack human taste.
            </p>
            <p>
              I eliminate that friction entirely. For over six years, I have operated as an independent creative developer and UI/UX architect, partnering directly with funded startup founders, luxury e-commerce brands, and visionary enterprises.
            </p>
            <p>
              Every project I take on begins with strategic conversion psychology—understanding exactly what your buyers need to see to trust you—and finishes with silky 60fps code that loads in under 500 milliseconds.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-xl">
                <div className="text-2xl font-bold text-[#171717] font-geist tabular-nums">6+</div>
                <div className="text-xs text-[#525252] mt-0.5">Years of Specialized Craft</div>
              </div>
              <div className="p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-xl">
                <div className="text-2xl font-bold text-[#171717] font-geist tabular-nums">$4.2M+</div>
                <div className="text-xs text-[#525252] mt-0.5">Client Revenue Generated</div>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-[#ffffff] border border-[#e5e7eb] rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-[#c65d3a]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
                  UI/UX & Product Design
                </h3>
              </div>
              <p className="text-xs text-[#525252] mb-3 leading-relaxed">
                Figma master design systems, wireframing, user onboarding flows, accessible design tokens, and editorial layout pacing.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono-code text-[11px] text-[#71717a]">
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Figma</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Auto-Layout</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Design Tokens</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Responsive Reflow</span>
              </div>
            </div>

            <div className="p-6 bg-[#ffffff] border border-[#e5e7eb] rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[#c65d3a]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
                  Modern Front-End Engineering
                </h3>
              </div>
              <p className="text-xs text-[#525252] mb-3 leading-relaxed">
                Strict TypeScript, React, Next.js, Tailwind CSS, Framer Motion, and WebGL animations with zero layout shift.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono-code text-[11px] text-[#71717a]">
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Next.js</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">React 19</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">TypeScript</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Tailwind CSS</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Framer Motion</span>
              </div>
            </div>

            <div className="p-6 bg-[#ffffff] border border-[#e5e7eb] rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#c65d3a]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
                  Conversion Rate Optimization (CRO) & SEO
                </h3>
              </div>
              <p className="text-xs text-[#525252] mb-3 leading-relaxed">
                100/100 Google Lighthouse performance, schema.org JSON-LD structured data, OpenGraph social cards, and PostHog analytics hooks.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono-code text-[11px] text-[#71717a]">
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Lighthouse 100</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">SEO Schema</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">A/B Testing</span>
                <span className="px-2 py-0.5 bg-[#f4f4f5] rounded">Core Web Vitals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Me vs An Agency Table */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-[#171717] mb-6">
            Why visionary founders choose an independent specialist
          </h3>
          <div className="overflow-x-auto border border-[#e5e7eb] rounded-xl bg-[#ffffff]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#fafafa] border-b border-[#e5e7eb] text-[#71717a] uppercase font-mono-code">
                <tr>
                  <th className="py-3 px-6">Metric</th>
                  <th className="py-3 px-6 text-[#171717] font-bold">Independent Specialist (Divu)</th>
                  <th className="py-3 px-6 text-[#71717a]">Traditional Design Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f4f4f5]">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-[#fafafa]/80 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#171717]">{row.feature}</td>
                    <td className="py-4 px-6 text-[#171717] font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{row.me}</span>
                    </td>
                    <td className="py-4 px-6 text-[#71717a]">{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Client Praise & Testimonials */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-[#171717]">
              Client Endorsements & Proof
            </h3>
            <div className="flex items-center gap-1 text-xs text-[#525252]">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-[#171717]">5.0</span>
              <span>across 30+ freelance handovers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 bg-[#ffffff] border border-[#e5e7eb] rounded-xl flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-semibold mb-3 border border-emerald-200">
                    {review.metricResult}
                  </div>
                  <p className="text-xs text-[#262626] leading-relaxed italic mb-6">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f4f4f5] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-xs uppercase font-geist">
                    {review.clientName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#171717]">
                      {review.clientName}
                    </h4>
                    <p className="text-[11px] text-[#71717a]">
                      {review.role} · {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
