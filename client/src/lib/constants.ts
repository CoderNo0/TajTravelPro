export const COMPANY_INFO = {
  name: "Taj India Tours",
  tagline: "Discover India's Heritage",
  phone: "+91 11 1234 5678",
  whatsapp: "+91 98765 43210",
  email: "info@tajindiatours.com",
  bookingEmail: "bookings@tajindiatours.com",
  address: "123 Heritage Lane, Connaught Place, New Delhi - 110001, India",
  businessHours: {
    weekdays: "Monday - Saturday: 9:00 AM - 7:00 PM",
    weekends: "Sunday: 10:00 AM - 5:00 PM"
  }
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/tajindiatours",
  instagram: "https://instagram.com/tajindiatours",
  twitter: "https://twitter.com/tajindiatours",
  youtube: "https://youtube.com/tajindiatours",
  whatsapp: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`
};

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "/contact" }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah & John Mitchell",
    location: "United States",
    rating: 5,
    comment: "The Golden Triangle tour exceeded all our expectations! The guide was incredibly knowledgeable, and seeing the Taj Mahal at sunrise was magical. Every detail was perfectly planned.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    location: "Spain",
    rating: 5,
    comment: "Incredible spiritual journey through Varanasi and Rishikesh. The team arranged everything perfectly, from accommodations to local experiences. Truly life-changing!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    location: "United Kingdom",
    rating: 5,
    comment: "The Rajasthan heritage tour was spectacular! Palace stays, camel safaris, and cultural performances - every moment was memorable. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 4,
    name: "Yuki & Takeshi Tanaka",
    location: "Japan",
    rating: 5,
    comment: "Kerala backwaters experience was beyond amazing! The houseboat was luxurious and the natural beauty was breathtaking. Perfect for our anniversary celebration.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 5,
    name: "Maria Gonzalez",
    location: "Mexico",
    rating: 5,
    comment: "Fantastic family trip! The kids loved the cultural experiences and we adults appreciated the historical insights. Great balance of adventure and education.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 6,
    name: "David Chen",
    location: "Australia",
    rating: 5,
    comment: "Professional service from start to finish. The attention to detail and local knowledge made this an unforgettable journey through incredible India. Will definitely book again!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "What's included in the Golden Triangle tour package?",
    answer: "Our Golden Triangle package includes accommodation in 3-4 star hotels, all transportation in air-conditioned vehicles, professional English-speaking guide, entrance fees to monuments, daily breakfast, and airport transfers. Optional lunch and dinner can be added based on your preference."
  },
  {
    id: 2,
    question: "Is it safe for solo female travelers?",
    answer: "Absolutely! We take special care of solo female travelers with verified accommodations, trusted guides, and 24/7 support. Many solo women have traveled with us safely and had wonderful experiences. We can also arrange group tours if you prefer traveling with others."
  },
  {
    id: 3,
    question: "What's the best time to visit India?",
    answer: "The best time depends on your destination. For the Golden Triangle (Delhi, Agra, Jaipur), October to March offers pleasant weather. For Kerala, October to February is ideal. For Goa, November to March is perfect. We'll help you plan based on your specific destinations and preferences."
  },
  {
    id: 4,
    question: "Do you provide vegetarian food options?",
    answer: "Yes! India offers excellent vegetarian cuisine, and we ensure all dietary requirements are met. Whether you're vegetarian, vegan, or have specific allergies, we'll arrange appropriate meals at restaurants and hotels. Just let us know your preferences during booking."
  },
  {
    id: 5,
    question: "What if I need to cancel my booking?",
    answer: "We understand plans can change. Cancellations 30+ days before departure receive 80% refund, 15-29 days receive 50% refund, and 7-14 days receive 25% refund. Within 7 days, no refund is available. We recommend travel insurance for additional protection."
  },
  {
    id: 6,
    question: "Can you customize tours for special occasions?",
    answer: "Absolutely! We specialize in customizing tours for honeymoons, anniversaries, birthdays, and other special occasions. We can arrange romantic dinners, cultural performances, spa treatments, and special decorations to make your celebration memorable."
  }
];
