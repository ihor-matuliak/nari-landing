import React from 'react';
import { CheckCircle2, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { nariConfig } from '../config/nariConfig';

export default function HeroSection() {
  const { model } = nariConfig;

  return (
    <section className="relative w-full pt-8 pb-4 sm:pt-12 sm:pb-6 px-4 flex flex-col items-center text-center">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-neon-pink/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Avatar Container with Animated Glow Ring */}
      <div className="relative group mb-5">
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 opacity-80 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-ring" />
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-pink-500 to-purple-500 shadow-2xl">
          <img
            src={model.avatar}
            alt={model.name}
            className="w-full h-full object-cover rounded-full border-2 border-dark-950 shadow-inner group-hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
          {/* Online Pulse Indicator */}
          <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 flex items-center gap-1.5 bg-dark-950/90 border border-emerald-500/40 px-2.5 py-1 rounded-full shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-semibold text-emerald-400 tracking-tight">
              {model.status}
            </span>
          </div>
        </div>
      </div>

      {/* Model Name & Tagline */}
      <div className="flex items-center gap-2 justify-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight gradient-text-vip">
          {model.name}
        </h1>
        <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 fill-cyan-400/20 flex-shrink-0" />
      </div>

      <p className="text-sm font-semibold text-pink-400 mt-1 tracking-wide uppercase">
        {model.handle} • {model.tagline}
      </p>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 max-w-lg">
        {model.badges.map((badge, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-dark-800/80 border border-white/10 text-slate-200 backdrop-blur-sm shadow-sm hover:border-cyan-500/30 transition-colors"
          >
            {badge.icon === 'badge-check' && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
            {badge.icon === 'sparkles' && <Sparkles className="w-3.5 h-3.5 text-pink-400" />}
            {badge.icon === 'shield-check' && <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />}
            {badge.text}
          </span>
        ))}
      </div>

      {/* Bio Description */}
      <p className="text-slate-300 text-sm sm:text-base max-w-lg mt-4 leading-relaxed font-light px-2">
        {model.bio}
      </p>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-xl mx-auto mt-6">
        {model.stats.map((stat, index) => (
          <div
            key={index}
            className="glass-panel rounded-xl p-2.5 text-center border border-white/5 hover:border-cyan-500/20 transition-colors"
          >
            <div className="text-base sm:text-lg font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-white">
              {stat.value}
            </div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
