import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';
import { nariConfig } from '../config/nariConfig';

export default function PromoTimer() {
  const { promo } = nariConfig;
  if (!promo.enabled) return null;

  // Initialize countdown timer (e.g. 47 hours 59 mins 59 secs)
  const [timeLeft, setTimeLeft] = useState({
    hours: promo.hoursLeft || 48,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = num => String(num).padStart(2, '0');

  return (
    <div className="w-full max-w-xl mx-auto my-4 p-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 shadow-lg shadow-pink-500/20">
      <div className="bg-dark-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-500 flex-shrink-0 animate-bounce">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                {promo.badgeText}
              </span>
              <span className="text-xs font-semibold text-amber-400">
                {promo.discount} VIP SALE
              </span>
            </div>
            <p className="text-sm font-medium text-slate-200 mt-0.5">
              {promo.subtitle}
            </p>
          </div>
        </div>

        {/* Countdown digits */}
        <div className="flex items-center gap-1.5 flex-shrink-0 bg-dark-950/80 px-3 py-1.5 rounded-xl border border-white/5">
          <Clock className="w-3.5 h-3.5 text-pink-400 mr-1" />
          <div className="flex items-center gap-1 text-sm font-mono font-bold text-white">
            <span className="bg-dark-800 px-1.5 py-0.5 rounded text-pink-400">{formatNumber(timeLeft.hours)}</span>
            <span className="text-pink-500">:</span>
            <span className="bg-dark-800 px-1.5 py-0.5 rounded text-pink-400">{formatNumber(timeLeft.minutes)}</span>
            <span className="text-pink-500">:</span>
            <span className="bg-dark-800 px-1.5 py-0.5 rounded text-pink-400">{formatNumber(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
