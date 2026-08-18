import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { nariConfig } from '../config/nariConfig';

export default function Footer() {
  const { model } = nariConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-xl mx-auto px-4 pt-6 pb-24 sm:pb-12 text-center text-slate-400 text-xs border-t border-white/5 mt-8">
      {/* Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-dark-800 border border-white/5 text-[11px] font-bold text-cyan-400">
          <ShieldCheck className="w-3.5 h-3.5" /> Official Verified Page
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-dark-800 border border-white/5 text-[11px] font-medium text-slate-300">
          All Rights Reserved
        </span>
      </div>

      <p className="text-[11px] text-slate-400 max-w-md mx-auto leading-relaxed mb-4">
        Official digital landing hub for {model.name} ({model.handle}). All media content is copyrighted.
      </p>

      <div className="flex items-center justify-center gap-1.5 text-slate-400 font-medium">
        <span>© {currentYear} {model.name}.</span>
        <span>•</span>
        <span className="flex items-center gap-1 text-pink-400">
          Designed with <Heart className="w-3 h-3 fill-pink-500 text-pink-500" /> for fans
        </span>
      </div>
    </footer>
  );
}
