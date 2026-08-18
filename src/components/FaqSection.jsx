import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { nariConfig } from '../config/nariConfig';

export default function FaqSection() {
  const { faq } = nariConfig;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-6" id="faq">
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-pink-500" /> Frequently Asked Questions
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Everything you need to know about joining my VIP club
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {faq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-colors glass-panel border ${
                isOpen ? 'border-pink-500/40 bg-dark-900/90' : 'border-white/5'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 flex items-center justify-between gap-3 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                  <Sparkles className={`w-3.5 h-3.5 flex-shrink-0 ${isOpen ? 'text-pink-400' : 'text-slate-500'}`} />
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-pink-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-white/5 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
