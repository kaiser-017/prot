import { useState } from 'react';
import { FAQ_ITEMS } from '../data/portfolioData';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[#e5e7eb] bg-[#ffffff]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c65d3a] block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-[#171717] font-geist">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#525252] mt-2">
            Everything you need to know about working together, delivery timelines, and project guarantees.
          </p>
        </div>

        <div className="divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="text-base font-medium text-[#171717] group-hover:text-[#c65d3a] transition-colors">
                    {item.question}
                  </span>
                  <span className="p-1 rounded-full text-[#71717a] group-hover:text-[#171717] transition-colors shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8 text-sm text-[#525252] leading-relaxed animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
