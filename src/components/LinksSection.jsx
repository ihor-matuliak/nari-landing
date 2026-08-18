import React from 'react';
import { 
  Sparkles, 
  Send,
  ArrowUpRight,
  Flame,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { nariConfig } from '../config/nariConfig';
import { 
  TelegramIcon,
  StackedIcon,
  InstagramIcon, 
  TwitterXIcon 
} from './SocialIcons';

export default function LinksSection() {
  const { links } = nariConfig;

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#ff007a', '#a855f7', '#38bdf8']
    });
  };

  const getPlatformIcon = (id) => {
    switch (id) {
      case 'telegram':
        return <TelegramIcon className="w-8 h-8 text-white" />;
      case 'stacked':
        return <StackedIcon className="w-7 h-7 text-white" />;
      case 'instagram':
        return <InstagramIcon className="w-5 h-5 text-pink-400" />;
      case 'twitter':
        return <TwitterXIcon className="w-5 h-5 text-slate-200" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-4 sm:py-6" id="social-links">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-400" /> Official Channels & Socials
        </h2>
        <span className="text-xs text-slate-400 font-medium">Direct Links</span>
      </div>

      <div className="flex flex-col gap-3.5">
        {links.map((link) => {
          if (link.type === 'primary') {
            const isTG = link.id === 'telegram';
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className={`relative group block rounded-2xl p-[1.5px] transition-all duration-300 hover:scale-[1.015] active:scale-[0.99] ${
                  isTG 
                    ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/25' 
                    : 'bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 hover:shadow-xl hover:shadow-purple-500/25'
                }`}
              >
                <div className="relative bg-dark-900/90 group-hover:bg-dark-900/75 backdrop-blur-xl rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                  {/* Left Icon & Details */}
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                      isTG 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/30' 
                        : 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-purple-500/30'
                    }`}>
                      {getPlatformIcon(link.id)}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                          {link.title}
                        </h3>
                        {link.badge && (
                          <span className={`text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-full shadow-sm ${
                            isTG 
                              ? 'bg-cyan-500 text-dark-950 font-bold animate-pulse' 
                              : 'bg-purple-600 text-white'
                          }`}>
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-snug line-clamp-1">
                        {link.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    <span className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform group-hover:translate-x-0.5 ${
                      isTG
                        ? 'bg-cyan-600 group-hover:bg-cyan-500 text-white'
                        : 'bg-purple-600 group-hover:bg-purple-500 text-white'
                    }`}>
                      {link.actionText} <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <div className="sm:hidden w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            );
          }

          // Social Links (Instagram, X)
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-interactive rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-pink-500/40 transition-colors">
                  {getPlatformIcon(link.id)}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-pink-300 transition-colors truncate">
                      {link.title}
                    </h3>
                    {link.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {link.subtitle}
                  </p>
                </div>
              </div>

              <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-pink-500/20 group-hover:text-pink-400 flex items-center justify-center text-slate-400 flex-shrink-0 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
