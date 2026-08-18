/**
 * Nari Official Landing Page Configuration
 * Single source of truth for all links, bio, photos, reviews, and FAQs.
 */

export const nariConfig = {
  model: {
    name: "Nari",
    handle: "@y2kqueeen",
    tagline: "Official Digital Hub & Socials",
    bio: "Hey sweetie! Welcome to my official space ✨ Check out all my exclusive social channels, daily updates, and behind-the-scenes content below.",
    avatar: "/images/5.png",
    cover: "/images/6.png",
    status: "Online Now",
    location: "Official Creator",
    likes: "Aesthetic • Cosplay • Glamour • Daily Life",
    stats: [
      { label: "Community", value: "50K+" },
      { label: "Photos & Media", value: "900+" },
      { label: "Updates", value: "Daily" },
      { label: "Direct Chat", value: "Active" }
    ],
    badges: [
      { text: "Verified Model", icon: "badge-check", color: "from-blue-500 to-cyan-400" },
      { text: "Official Hub", icon: "sparkles", color: "from-pink-500 to-purple-500" },
      { text: "Exclusive Drops", icon: "shield-check", color: "from-cyan-400 to-blue-600" }
    ]
  },

  // Priority Call-to-Actions & Links
  links: [
    {
      id: "telegram",
      title: "Telegram Channel",
      subtitle: "Main community channel • Daily private drops, news & chat",
      url: "https://t.me/+HTW7kd7_ZVk0ZGRi",
      badge: "MAIN HUB 🔥",
      highlight: true,
      glowColor: "cyan",
      type: "primary",
      actionText: "Join Telegram"
    },
    {
      id: "stacked",
      title: "Stacked Official",
      subtitle: "Exclusive VIP feed, videos & premium sets",
      url: "https://www.stacked.com/@y2kqueeen?lang=en",
      badge: "EXCLUSIVE",
      highlight: true,
      glowColor: "purple",
      type: "primary",
      actionText: "View Profile"
    },
    {
      id: "instagram",
      title: "Instagram",
      subtitle: "Stories, aesthetic shoots & daily lifestyle",
      url: "https://www.instagram.com/y2kqueeen",
      badge: "@y2kqueeen",
      glowColor: "pink",
      type: "social",
      actionText: "Follow"
    },
    {
      id: "twitter",
      title: "X (Twitter)",
      subtitle: "Daily thoughts, photo drops & updates",
      url: "https://x.com/y2kqueeen",
      badge: "@y2kqueeen",
      glowColor: "slate",
      type: "social",
      actionText: "Follow on X"
    }
  ],

  // 9 High-Res Photos Showcase with Teasers
  gallery: [
    {
      id: 1,
      src: "/images/5.png",
      title: "Velvet Elegance",
      category: "VIP Exclusive",
      isLocked: true,
      likes: 1420
    },
    {
      id: 2,
      src: "/images/6.png",
      title: "Night Glow",
      category: "Glamour",
      isLocked: false,
      likes: 1890
    },
    {
      id: 3,
      src: "/images/15.png",
      title: "Private Studio Shoot",
      category: "VIP Exclusive",
      isLocked: true,
      likes: 2340
    },
    {
      id: 4,
      src: "/images/16.png",
      title: "Silk & Shadow",
      category: "VIP Exclusive",
      isLocked: true,
      likes: 1650
    },
    {
      id: 5,
      src: "/images/18.png",
      title: "Golden Hour Vibes",
      category: "Cosplay",
      isLocked: true,
      likes: 3100
    },
    {
      id: 6,
      src: "/images/27.png",
      title: "Midnight Look",
      category: "Cosplay",
      isLocked: false,
      likes: 2190
    },
    {
      id: 7,
      src: "/images/32.png",
      title: "VIP Exclusive Cut",
      category: "VIP Exclusive",
      isLocked: true,
      likes: 4200
    },
    {
      id: 8,
      src: "/images/34.png",
      title: "Late Night Aesthetic",
      category: "Glamour",
      isLocked: false,
      likes: 1980
    },
    {
      id: 9,
      src: "/images/43.png",
      title: "Full Set Preview",
      category: "VIP Exclusive",
      isLocked: true,
      likes: 3870
    }
  ],

  // Reviews from real followers
  reviews: [
    {
      id: 1,
      author: "Alex M.",
      avatar: "👑",
      rating: 5,
      date: "Recent",
      text: "Her Telegram drops and photo sets are incredible quality. Best creator community out there!",
      tier: "Telegram Member"
    },
    {
      id: 2,
      author: "Daniel K.",
      avatar: "✨",
      rating: 5,
      date: "Recent",
      text: "Such great aesthetic taste and consistent quality across all platforms. Love the vibes!",
      tier: "Verified Fan"
    },
    {
      id: 3,
      author: "Marcus V.",
      avatar: "🔥",
      rating: 5,
      date: "Recent",
      text: "Top tier shoots and always active. Definitely follow her on Instagram and Telegram!",
      tier: "Community Member"
    }
  ],

  // Frequently Asked Questions
  faq: [
    {
      question: "Where is the main content and daily updates posted?",
      answer: "The primary hub is my Telegram channel where I post exclusive daily updates, polls, and announcements. You can also follow my Instagram and X (@y2kqueeen) for daily stories and photo shoots."
    },
    {
      question: "How often are new photos and updates published?",
      answer: "I post fresh stories, photos, and updates almost every day across my social channels."
    },
    {
      question: "How can I contact or collaborate with Nari?",
      answer: "You can reach out via direct message on Instagram (@y2kqueeen) or through the official Telegram channel."
    }
  ]
};
