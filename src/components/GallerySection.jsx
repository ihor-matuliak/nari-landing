import React, { useState } from 'react';
import { Image as ImageIcon, Heart, Sparkles, Lock, ZoomIn, Send } from 'lucide-react';
import { nariConfig } from '../config/nariConfig';

export default function GallerySection({ onSelectPhoto }) {
  const { gallery } = nariConfig;
  const [activeCategory, setActiveCategory] = useState('All');
  const [likesState, setLikesState] = useState(
    gallery.reduce((acc, item) => ({ ...acc, [item.id]: item.likes }), {})
  );
  const [likedItems, setLikedItems] = useState({});

  const categories = ['All', 'Glamour', 'Cosplay', 'VIP Exclusive'];

  const filteredPhotos = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  const handleLike = (e, id) => {
    e.stopPropagation();
    if (likedItems[id]) {
      setLikesState(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setLikedItems(prev => ({ ...prev, [id]: false }));
    } else {
      setLikesState(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setLikedItems(prev => ({ ...prev, [id]: true }));
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-6" id="gallery">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-pink-500" /> Photo Teasers & Gallery
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Click any photo to preview or unlock exclusive sets in Telegram
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20'
                : 'bg-dark-800/80 text-slate-400 hover:text-white hover:bg-dark-700 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
        {filteredPhotos.map((photo) => {
          const isLiked = likedItems[photo.id];
          return (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer glass-panel border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
            >
              {/* Photo Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  photo.isLocked ? 'filter blur-[4px] scale-105 opacity-85' : ''
                }`}
                loading="lazy"
              />

              {/* Locked Overlay or Subtle Hover Overlay */}
              {photo.isLocked ? (
                <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/60 flex items-center justify-center text-cyan-300 mb-1.5 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                    VIP Teaser
                  </span>
                  <span className="text-[9px] text-slate-300 mt-0.5 opacity-90 flex items-center gap-1 justify-center">
                    <Send className="w-2.5 h-2.5" /> Unlock in Telegram
                  </span>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5" />
              )}

              {/* Category Badge */}
              <div className="absolute top-2 left-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-dark-950/80 backdrop-blur-md text-slate-200 border border-white/10">
                  {photo.category}
                </span>
              </div>

              {/* Like / Heart Button */}
              <button
                onClick={(e) => handleLike(e, photo.id)}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-dark-950/70 backdrop-blur-md border border-white/10 text-slate-300 hover:text-pink-400 hover:scale-110 active:scale-90 transition-transform flex items-center gap-1 z-10"
                aria-label="Like photo"
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-pink-500 text-pink-500' : ''}`} />
                <span className="text-[10px] font-medium pr-0.5">{likesState[photo.id]}</span>
              </button>

              {/* Bottom Title Bar */}
              <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent">
                <p className="text-xs font-semibold text-white truncate drop-shadow">
                  {photo.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
