import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export default function Navbar({ onOpenContact, onOpenEstimator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#ffffff]/90 backdrop-blur-md border-b border-[#e5e7eb] shadow-[0_1px_8px_rgba(0,0,0,0.03)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Display Face, Single Element) */}
        <a
          href="#"
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-[#171717] font-semibold text-xl tracking-tight transition-transform duration-200 active:scale-95"
        >
          <span className="font-geist tracking-[-0.05em] text-2xl font-bold text-[#171717]">
            DIVU
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#c65d3a]"></span>
          <span className="hidden sm:inline-block text-xs font-normal text-[#525252] tracking-normal">
            Digital Studio
          </span>
        </a>

        {/* Zone 2: 4-5 Navigation Links (Clean single line, subtle hover) */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#525252]">
          <a
            href="#work"
            className="hover:text-[#171717] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Work
          </a>
          <a
            href="#process"
            className="hover:text-[#171717] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Process
          </a>
          <a
            href="#about"
            className="hover:text-[#171717] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            About
          </a>
          <a
            href="#estimator"
            onClick={(e) => {
              e.preventDefault();
              onOpenEstimator();
            }}
            className="hover:text-[#171717] transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 text-[#171717]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c65d3a]" />
            <span>Scope & Pricing</span>
          </a>
          <a
            href="#faq"
            className="hover:text-[#171717] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Black pill button-primary) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 h-[40px] bg-[#171717] text-[#ffffff] font-medium text-[14px] rounded-full transition-all duration-200 hover:bg-[#333333] hover:shadow-sm active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#171717] hover:bg-[#f4f4f5] rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] border-b border-[#e5e7eb] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-base font-medium text-[#171717]">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f4f4f5] hover:text-[#c65d3a] transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f4f4f5] hover:text-[#c65d3a] transition-colors"
            >
              Creative Workflow
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f4f4f5] hover:text-[#c65d3a] transition-colors"
            >
              About & Philosophy
            </a>
            <a
              href="#estimator"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="py-2 border-b border-[#f4f4f5] hover:text-[#c65d3a] transition-colors flex items-center justify-between"
            >
              <span>Project Scope & Estimator</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#faede8] text-[#c65d3a]">Instant</span>
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f4f4f5] hover:text-[#c65d3a] transition-colors"
            >
              Frequently Asked Questions
            </a>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full h-11 bg-[#171717] text-[#ffffff] font-medium text-sm rounded-full flex items-center justify-center gap-2 hover:bg-[#333333] transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
