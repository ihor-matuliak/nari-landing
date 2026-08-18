import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Send, Lock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { nariConfig } from '../config/nariConfig';

export default function LightboxModal({ photo, onClose, onPrev, onNext }) {
  const { links } = nariConfig;
  const tgLink = links.find(l => l.id === 'telegram')?.url || 'https://t.me';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  const handleTelegramClick = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#06b6d4', '#ff007a', '#a855f7', '#38bdf8']
    });
  };

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/95 backdrop-blur-xl animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-dark-800/80 border border-white/10 text-white hover:bg-pink-500 transition-colors flex items-center justify-center z-50"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Button */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-800/80 border border-white/10 text-white hover:bg-cyan-500/80 transition-colors flex items-center justify-center z-50 shadow-lg"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-800/80 border border-white/10 text-white hover:bg-cyan-500/80 transition-colors flex items-center justify-center z-50 shadow-lg"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div className="relative max-w-lg w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl max-h-[70vh] flex items-center justify-center bg-dark-900">
          <img
            src={photo.src}
            alt={photo.title}
            className={`max-h-[65vh] w-auto object-contain rounded-2xl ${
              photo.isLocked ? 'filter blur-[5px] scale-105 opacity-90' : ''
            }`}
          />

          {/* Locked Overlay inside Modal */}
          {photo.isLocked && (
            <div className="absolute inset-0 bg-dark-950/65 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-cyan-500/40 mb-3 animate-bounce">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-1">
                Exclusive Teaser Set
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xs mb-4">
                Unlock the full high-resolution set and behind-the-scenes content in my official Telegram!
              </p>
              <a
                href={tgLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTelegramClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-dark-950 text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Send className="w-4 h-4 fill-dark-950" /> Unlock on Telegram
              </a>
            </div>
          )}
        </div>

        {/* Caption and Quick Actions below image */}
        <div className="mt-4 w-full flex items-center justify-between px-2 text-slate-200">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              {photo.title}
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                {photo.category}
              </span>
            </h4>
          </div>

          <a
            href={tgLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTelegramClick}
            className="text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-1.5 bg-cyan-500/20 px-3.5 py-2 rounded-xl border border-cyan-500/40 hover:bg-cyan-500 transition-colors"
          >
            <Send className="w-3.5 h-3.5" /> Telegram Channel
          </a>
        </div>
      </div>
    </div>
  );
}
