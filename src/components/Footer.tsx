import { ArrowUp, Github, Twitter, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ffffff] border-t border-[#e5e7eb] py-14 text-xs text-[#525252]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#f4f4f5]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-geist text-xl font-bold tracking-tight text-[#171717]">
                DIVU
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c65d3a]"></span>
              <span className="text-xs text-[#71717a]">
                Independent Creative Developer & UI/UX Designer
              </span>
            </div>
            <p className="text-xs text-[#71717a] mt-2 max-w-md">
              Engineering high-converting digital storefronts, bespoke SaaS interfaces, and memorable landing pages for ambitious founders.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className="text-[#71717a] hover:text-[#171717] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[#71717a] hover:text-[#171717] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#71717a] hover:text-[#171717] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 border border-[#e5e7eb] rounded-full hover:bg-[#f4f4f5] text-[#171717] transition-colors flex items-center justify-center ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#a1a1aa] font-mono-code">
          <div>
            © {new Date().getFullYear()} Divu. All rights reserved. Vercel Minimal Architecture.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#525252]">
              <Globe className="w-3 h-3 text-[#c65d3a]" />
              EST (UTC-5) · Operating Worldwide
            </span>
            <span>·</span>
            <span className="text-[#525252]">100/100 Core Web Vitals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
