import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import LinksSection from './components/LinksSection';
import GallerySection from './components/GallerySection';
import LightboxModal from './components/LightboxModal';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import FloatingBar from './components/FloatingBar';
import Footer from './components/Footer';
import { nariConfig } from './config/nariConfig';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { gallery, model } = nariConfig;

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = gallery.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    setSelectedPhoto(gallery[prevIndex]);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = gallery.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % gallery.length;
    setSelectedPhoto(gallery[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col justify-between selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* ===== LUXURY BACKGROUND LAYER ===== */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Cover Photo Ambient Backdrop */}
        <div className="absolute top-0 inset-x-0 h-[480px] sm:h-[600px] overflow-hidden opacity-30">
          <img
            src={model.cover}
            alt=""
            className="w-full h-full object-cover object-top filter blur-md scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-dark-950/80 to-dark-950" />
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/25 via-purple-600/20 to-transparent rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[35%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-[65%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[110px]" />
        <div className="absolute bottom-[-5%] left-1/3 w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[100px]" />
      </div>

      {/* Main Container */}
      <main className="relative z-10 flex-1 w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <HeroSection />

        {/* VIP Links & Social Hub */}
        <LinksSection />

        {/* Interactive Teaser Gallery (9 photos) */}
        <GallerySection onSelectPhoto={setSelectedPhoto} />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      {/* Mobile Sticky Floating Bar */}
      <FloatingBar />
    </div>
  );
}
