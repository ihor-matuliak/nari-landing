# Design Spec: Nari VIP Landing Page

## Executive Summary
Nari VIP Landing Page is a mobile-first, high-converting interactive showcase and digital hub for the adult creator / content model Nari. It provides seamless access to her OnlyFans, Fansly, Telegram VIP, Instagram, X (Twitter), TikTok, and Throne Wishlist, featuring real photos, a teaser gallery with lightbox, voice note teaser, limited-time promo countdown, fan reviews, and FAQ in a Dark Luxury & Neon Glam aesthetic.

---

## 1. Visual Style & Aesthetic Direction
- **Theme:** Dark Luxury & Neon Glam (Obsidian Black `#07070a`, Neon Magenta `#ff007a`, Electric Violet `#8b5cf6`, Amber Gold `#f59e0b`).
- **Surface Styling:** Glassmorphism cards (`rgba(18, 18, 28, 0.75)` with `backdrop-filter: blur(16px)` and subtle glowing borders).
- **Typography:** Modern clean sans-serif (Inter / Plus Jakarta Sans) paired with luxury gradient headings.
- **Micro-Interactions:** Hover/tap elevation, neon pulse indicators, sound wave animation, smooth image zoom on click.

---

## 2. Information Architecture & Layout Structure

### 2.1 Hero Section
- **Avatar & Status:** High-res avatar of Nari enclosed in an animated gradient ring with a live pulse indicator (*"Online Now"*).
- **Badges:** *"Verified Creator"*, *"Top 0.1% Global"*, *"18+ Exclusive"*.
- **Name & Bio:** "Nari" with tagline, subtext, and quick location/interests badges.
- **Interactive Audio Teaser:** Playable audio preview bar with animated waveform simulation and "Listen to my voice" button.

### 2.2 VIP Links Hub (Conversion Engine)
- **Primary CTA 1 (OnlyFans):** Large high-priority card with pulsing neon border, `-50% OFF Limited Offer` promo badge, live countdown timer, and direct link.
- **Primary CTA 2 (Fansly):** High-priority card with `Exclusive VIP Drops` badge.
- **Secondary Channels:** Telegram VIP Club, Instagram, X (Twitter), TikTok, and Throne Wishlist with branded icons and distinct hover styles.

### 2.3 Interactive Teaser Gallery
- **Grid Layout:** Responsive 2-column on mobile, 3-column on tablet/desktop.
- **Real Photos:** Integrates the 9 provided photos from `nari_images/`.
- **Categories Filter:** `All`, `Glamour`, `Lingerie`, `Cosplay`, `VIP Teaser`.
- **VIP Lock Overlay:** Selected teaser photos feature a sleek blur effect with an "Unlock Full Set on OnlyFans" CTA button.
- **Full Lightbox:** Tap to expand high-resolution photos with swipe navigation, zoom, and close buttons.

### 2.4 Social Proof & Fan Reviews
- Testimonial cards featuring authentic feedback from VIP subscribers (5-star ratings, verified badges, fan quotes).

### 2.5 FAQ & Trust Accordion
- Expandable Q&A covering:
  1. What content is on OnlyFans vs Fansly?
  2. How fast do you reply to DMs?
  3. Are custom requests available?
  4. Privacy and billing anonymity.

### 2.6 Floating Sticky Bar & Footer
- Mobile sticky bottom quick-action bar with instant "Join VIP OnlyFans" button.
- 18+ age verification disclaimer, DMCA notice, copyright, and social links.

---

## 3. Technology Stack & Directory Structure
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + Custom CSS Variables + Lucide React Icons
- **Responsiveness:** Mobile-first (360px – 1920px+ viewport support, minimum 48px touch targets, safe area inset padding)
- **Asset Pipeline:** Images organized in `public/images/`

### Project Tree
```
├── public/
│   └── images/              # The 9 Nari photos copied and structured
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Top navigation and audio teaser
│   │   ├── HeroSection.jsx  # Avatar, badges, bio, online status
│   │   ├── LinksSection.jsx # VIP Cards (OF, Fansly) & Social Links
│   │   ├── PromoTimer.jsx   # Countdown timer component
│   │   ├── GallerySection.jsx # 9-image responsive teaser gallery & filters
│   │   ├── LightboxModal.jsx  # Fullscreen photo viewer
│   │   ├── ReviewsSection.jsx # Subscriber testimonials
│   │   ├── FaqSection.jsx   # Accordion Q&A
│   │   ├── FloatingBar.jsx  # Mobile sticky VIP CTA
│   │   └── Footer.jsx       # 18+ disclaimer & copyright
│   ├── config/
│   │   └── nariConfig.js    # Single source of truth for all links, texts, photos
│   ├── App.jsx              # Main page orchestration
│   ├── index.css            # Tailwind + luxury neon tokens
│   └── main.jsx             # React root
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 4. Centralized Data Schema (`src/config/nariConfig.js`)
Config structure exports:
- `model`: Name, handle, status, bio, tags, avatar image.
- `promo`: Discount text, expiresAt timestamp, active toggle.
- `links`: Array of social platforms (title, subtitle, icon, url, badge, highlight).
- `gallery`: Array of photo items (id, src, title, category, isLocked).
- `reviews`: Array of fan testimonials.
- `faq`: Array of question/answer pairs.

---

## 5. Verification & Acceptance Criteria
- [x] Tested across mobile viewports (375px, 390px, 414px) and desktop (1280px+).
- [x] All 9 photos correctly rendered in teaser gallery and lightbox.
- [x] All social links fully clickable and open in external tabs (`target="_blank" rel="noopener noreferrer"`).
- [x] Interactive audio simulation and countdown timer function seamlessly.
- [x] Zero layout shifts, no horizontal scrollbars on mobile devices.
