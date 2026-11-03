import { useState, useEffect } from 'react';
import { validateInquiryForm } from '../utils/estimator';
import { ProjectScopeType } from '../types/portfolio';
import { Mail, Copy, Check, Calendar, ArrowUpRight, Send, Sparkles, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  prefilledScopeData?: {
    scope: ProjectScopeType;
    scopeLabel: string;
    addons: string[];
    range: string;
    deliveryTime: string;
  } | null;
  onClearPrefilledScope?: () => void;
}

export default function ContactSection({ prefilledScopeData, onClearPrefilledScope }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState<string>('Landing Page');
  const [budget, setBudget] = useState<string>('$3,000 – $6,000');
  const [timeline, setTimeline] = useState<string>('2 – 3 Weeks');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [dismissedScope, setDismissedScope] = useState(false);

  const contactEmail = 'techhellrm017@gmail.com';

  // Apply prefilled scope if received from Estimator
  useEffect(() => {
    if (prefilledScopeData) {
      setDismissedScope(false);
      setProjectType(prefilledScopeData.scopeLabel);
      setBudget(prefilledScopeData.range);
      setTimeline(prefilledScopeData.deliveryTime);
      setMessage(
        `Hi Divu, I calculated an estimate for a ${prefilledScopeData.scopeLabel} with ${
          prefilledScopeData.addons.length > 0
            ? prefilledScopeData.addons.join(', ')
            : 'standard deliverables'
        }. Expected launch in ${prefilledScopeData.deliveryTime}. I'd love to discuss kicking off this project!`
      );
    }
  }, [prefilledScopeData]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm({ name, email, message });
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1.5px] bg-[#c65d3a]"></span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                  Let's Talk
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.05] tracking-[-0.03em] text-[#171717] font-geist">
                Let's create something great.
              </h2>
              <p className="text-base text-[#525252] mt-4 leading-relaxed">
                Whether you need a high-converting landing page from scratch, a complete web app UI overhaul, or a dedicated creative developer for your product launch—I am ready to help.
              </p>
            </div>

            {/* Live Availability Badge */}
            <div className="p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <div className="text-xs font-semibold text-[#171717]">
                    Current Availability: Open
                  </div>
                  <div className="text-[11px] text-[#71717a]">
                    Booking new client projects starting next month
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono-code font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                2 Spots Open
              </span>
            </div>

            {/* Direct 1-Click Copy Email Pill */}
            <div className="p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-xl">
              <span className="text-xs text-[#71717a] block mb-1.5 font-medium">
                Direct Inquiries:
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-mono-code font-semibold text-[#171717] truncate">
                  {contactEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-[#f4f4f5] hover:bg-[#e4e4e7] text-xs font-medium text-[#171717] rounded-md transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Book a 15-Min Discovery Call */}
            <div className="p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#faede8] text-[#c65d3a] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#171717]">
                    15-Minute Discovery Video Call
                  </h4>
                  <p className="text-[11px] text-[#71717a]">
                    Discuss goals, feasibility, and immediate feedback
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowCallModal(true)}
                className="px-3 py-1.5 bg-[#171717] hover:bg-[#333333] text-white text-xs font-medium rounded-full transition-colors flex items-center gap-1"
              >
                <span>Book Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#e5e7eb] rounded-2xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-[#171717] font-geist">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#525252] max-w-md mx-auto">
                  Thank you for reaching out, <span className="font-semibold text-[#171717]">{name}</span>. I review all project briefs personally and will respond with a tailored proposal and next steps within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-2 text-xs font-medium border border-[#171717] rounded-full hover:bg-[#171717] hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {prefilledScopeData && !dismissedScope && (
                  <div className="p-3 bg-[#faede8] border border-[#f5d0c5] rounded-lg flex items-center justify-between text-xs text-[#c65d3a]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      Estimator Scope Applied: {prefilledScopeData.scopeLabel} ({prefilledScopeData.range})
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setDismissedScope(true);
                        onClearPrefilledScope?.();
                      }}
                      className="text-[11px] underline cursor-pointer hover:text-[#b85331]"
                    >
                      Reset
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Your Name or Brand *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Chen"
                      className={`w-full px-4 py-2.5 bg-[#ffffff] border rounded-lg text-sm text-[#171717] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#e5e7eb]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-4 py-2.5 bg-[#ffffff] border rounded-lg text-sm text-[#171717] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#e5e7eb]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#ffffff] border border-[#e5e7eb] rounded-lg text-xs text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717]"
                    >
                      <option value="Landing Page">High-Converting Landing Page</option>
                      <option value="Multi-Page Website">Multi-Page Brand Website</option>
                      <option value="Web Application">Web Application UI/UX</option>
                      <option value="UI/UX Redesign">Conversion Overhaul & Redesign</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Target Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#ffffff] border border-[#e5e7eb] rounded-lg text-xs text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717]"
                    >
                      <option value="$2,000 – $4,000">$2,000 – $4,000 USD</option>
                      <option value="$4,000 – $8,000">$4,000 – $8,000 USD</option>
                      <option value="$8,000 – $15,000">$8,000 – $15,000 USD</option>
                      <option value="$15,000+">$15,000+ Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#ffffff] border border-[#e5e7eb] rounded-lg text-xs text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717]"
                    >
                      <option value="Urgent (1-2 weeks)">Expedited (1 – 2 weeks)</option>
                      <option value="Standard (2-4 weeks)">Standard (2 – 4 weeks)</option>
                      <option value="Next Quarter">Flexible / Next Quarter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                    Project Vision & Goals *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product, current conversion challenges, target launch date, or link to your existing site..."
                    className={`w-full px-4 py-3 bg-[#ffffff] border rounded-lg text-sm text-[#171717] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all resize-none ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#e5e7eb]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-[#71717a]">
                    ⚡ Response within 24 hours guaranteed
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 h-11 bg-[#171717] hover:bg-[#333333] text-white font-medium text-sm rounded-full transition-all duration-200 shadow-md cursor-pointer active:scale-[0.98]"
                  >
                    <span>Send Project Brief</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Discovery Call Booking Modal */}
      {showCallModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="w-full max-w-md bg-[#ffffff] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#e5e7eb] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5e7eb]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#c65d3a]" />
                <h3 className="text-base font-semibold text-[#171717]">
                  Book Discovery Call
                </h3>
              </div>
              <button
                onClick={() => setShowCallModal(false)}
                className="text-[#71717a] hover:text-[#171717] text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#525252] leading-relaxed">
              Let's spend 15 minutes reviewing your current website, conversion goals, and architectural requirements. No sales pressure—just clear strategic advice.
            </p>

            <div className="space-y-3 font-mono-code text-xs">
              <div className="p-3 bg-[#fafafa] border border-[#e5e7eb] rounded-lg flex items-center justify-between">
                <span>Next Available Slots:</span>
                <span className="text-emerald-700 font-semibold">Tomorrow at 2:00 PM EST</span>
              </div>
              <div className="p-3 bg-[#fafafa] border border-[#e5e7eb] rounded-lg flex items-center justify-between">
                <span>Duration:</span>
                <span>15 Minutes · Google Meet</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setShowCallModal(false);
                  alert('Thank you! Calendar invite confirmation has been reserved. Please submit the form to connect directly.');
                }}
                className="flex-1 py-2.5 bg-[#171717] text-white text-xs font-medium rounded-full hover:bg-[#333333] transition-colors"
              >
                Confirm Time Slot
              </button>
              <button
                onClick={() => setShowCallModal(false)}
                className="px-4 py-2.5 border border-[#e5e7eb] text-xs font-medium rounded-full hover:bg-[#f4f4f5] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
