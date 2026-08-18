import React from 'react';
import { Star, MessageSquareHeart, CheckCircle2 } from 'lucide-react';
import { nariConfig } from '../config/nariConfig';

export default function ReviewsSection() {
  const { reviews } = nariConfig;

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-6" id="reviews">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
            <MessageSquareHeart className="w-5 h-5 text-pink-500" /> VIP Fan Reviews
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Real feedback from active VIP subscribers
          </p>
        </div>
        <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-amber-400">4.99 / 5.0</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="glass-panel rounded-2xl p-4 border border-white/5 hover:border-pink-500/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{rev.avatar}</span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">{rev.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-[10px] font-semibold text-pink-400 uppercase tracking-wider">
                    {rev.tier}
                  </span>
                </div>
              </div>

              {/* Star Rating & Date */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5">{rev.date}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              "{rev.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
