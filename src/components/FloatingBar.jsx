import React, { useState, useEffect } from 'react';
import { Send, ArrowUpRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { nariConfig } from '../config/nariConfig';

export default function FloatingBar() {
  const { links } = nariConfig;
  const tgLink = links.find(l => l.id === 'telegram')?.url || 'https://t.me';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.9 },
      colors: ['#06b6d4', '#ff007a', '#a855f7', '#38bdf8']
    });
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Quick action Telegram bar" className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-gradient-to-t from-dark-950 via-dark-950/95 to-transparent backdrop-blur-md safe-bottom-padding flex justify-center animate-slideUp">
      <div className="w-full max-w-md p-[1.5px] rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-2xl shadow-cyan-500/25">
        <a
          href={tgLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center justify-between gap-3 bg-dark-900/95 hover:bg-dark-900/80 rounded-2xl px-4 py-3 text-white transition-all active:scale-98"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Send className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight">Join Telegram Channel</span>
                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-cyan-500 text-dark-950">
                  FREE
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Daily private updates & photo drops
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors">
            <span>Join</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </aside>
  );
}
