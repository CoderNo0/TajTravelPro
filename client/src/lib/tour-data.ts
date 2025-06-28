export interface TourPackage {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  destinations: string[];
  duration: string;
  price: number;
  originalPrice?: number;
  category: string;
  badge?: string;
  image: string;
  highlights: string[];
  includes: string[];
  rating: number;
  reviewCount: number;
  maxGroupSize: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  bestTime: string[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "golden-triangle-3d",
    name: "Golden Triangle Classic",
    shortDescription: "Delhi • Agra • Jaipur",
    description: "Experience India's most iconic destinations including the magnificent Taj Mahal, historic Red Fort, and royal palaces of Jaipur.",
    destinations: ["Delhi", "Agra", "Jaipur"],
    duration: "3 Days",
    price: 12999,
    category: "Heritage",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    highlights: [
      "Taj Mahal sunrise visit",
      "Amber Fort & City Palace",
      "Professional guide included"
    ],
    includes: [
      "3-4 star hotel accommodation",
      "Air-conditioned transportation",
      "Professional English-speaking guide",
      "Entrance fees to monuments",
      "Daily breakfast",
      "Airport transfers"
    ],
    rating: 4.9,
    reviewCount: 247,
    maxGroupSize: 12,
    difficulty: "Easy",
    bestTime: ["October", "November", "December", "January", "February", "March"]
  },
  {
    id: "golden-triangle-5d",
    name: "Golden Triangle Deluxe",
    shortDescription: "Delhi • Agra • Jaipur • Fatehpur Sikri",
    description: "An extended journey through India's heritage with luxury accommodations, cultural experiences, and additional historical sites.",
    destinations: ["Delhi", "Agra", "Jaipur", "Fatehpur Sikri"],
    duration: "5 Days",
    price: 24999,
    category: "Heritage",
    badge: "Extended",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    highlights: [
      "4-star hotel accommodations",
      "Fatehpur Sikri ghost city",
      "Traditional Rajasthani dinner"
    ],
    includes: [
      "4-star luxury hotel accommodation",
      "Private air-conditioned vehicle",
      "Expert local guides",
      "All entrance fees",
      "Daily breakfast & 2 dinners",
      "Cultural performances"
    ],
    rating: 4.8,
    reviewCount: 189,
    maxGroupSize: 8,
    difficulty: "Easy",
    bestTime: ["October", "November", "December", "January", "February", "March"]
  },
  {
    id: "rajasthan-heritage",
    name: "Rajasthan Heritage Tour",
    shortDescription: "Jaipur • Jodhpur • Udaipur • Pushkar",
    description: "Explore the royal heritage of Rajasthan with magnificent palaces, desert landscapes, and vibrant cultural experiences.",
    destinations: ["Jaipur", "Jodhpur", "Udaipur", "Pushkar"],
    duration: "7 Days",
    price: 45999,
    category: "Heritage",
    badge: "Heritage",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    highlights: [
      "Palace hotel stay in Udaipur",
      "Camel safari in Thar Desert",
      "Folk dance performances"
    ],
    includes: [
      "Heritage palace hotels",
      "Private luxury transportation",
      "Professional heritage guides",
      "All meals included",
      "Camel safari experience",
      "Cultural shows & performances"
    ],
    rating: 4.9,
    reviewCount: 156,
    maxGroupSize: 10,
    difficulty: "Moderate",
    bestTime: ["October", "November", "December", "January", "February"]
  },
  {
    id: "spiritual-journey",
    name: "Spiritual Journey",
    shortDescription: "Varanasi • Bodhgaya • Sarnath • Rishikesh",
    description: "Discover India's spiritual heritage visiting sacred temples, meditation centers, and participating in traditional ceremonies.",
    destinations: ["Varanasi", "Bodhgaya", "Sarnath", "Rishikesh"],
    duration: "6 Days",
    price: 32999,
    category: "Spiritual",
    badge: "Spiritual",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    highlights: [
      "Ganga Aarti ceremony",
      "Yoga & meditation sessions",
      "Buddhist monastery visits"
    ],
    includes: [
      "Spiritual retreat accommodations",
      "Sacred site transportation",
      "Spiritual guides",
      "Vegetarian meals",
      "Yoga sessions",
      "Meditation classes"
    ],
    rating: 4.8,
    reviewCount: 198,
    maxGroupSize: 15,
    difficulty: "Easy",
    bestTime: ["October", "November", "December", "January", "February", "March"]
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    shortDescription: "Alleppey • Kumarakom • Cochin • Munnar",
    description: "Experience God's Own Country with serene backwaters, spice plantations, and traditional houseboat stays.",
    destinations: ["Alleppey", "Kumarakom", "Cochin", "Munnar"],
    duration: "5 Days",
    price: 28999,
    category: "Nature",
    badge: "Nature",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    highlights: [
      "Luxury houseboat cruise",
      "Spice plantation tour",
      "Ayurvedic spa treatment"
    ],
    includes: [
      "Luxury houseboat accommodation",
      "Resort stays in Munnar",
      "All transportation",
      "Local cuisine meals",
      "Spice plantation tours",
      "Ayurvedic treatments"
    ],
    rating: 4.7,
    reviewCount: 167,
    maxGroupSize: 8,
    difficulty: "Easy",
    bestTime: ["October", "November", "December", "January", "February"]
  },
  {
    id: "goa-beach",
    name: "Goa Beach Experience",
    shortDescription: "North Goa • South Goa • Old Goa",
    description: "Relax on pristine beaches, explore Portuguese colonial architecture, and enjoy vibrant nightlife in India's beach paradise.",
    destinations: ["North Goa", "South Goa", "Old Goa"],
    duration: "4 Days",
    price: 18999,
    category: "Beach",
    badge: "Beach",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    highlights: [
      "Beach resort accommodation",
      "Water sports activities",
      "Portuguese heritage tour"
    ],
    includes: [
      "Beachfront resort stay",
      "Airport transfers",
      "Water sports activities",
      "Heritage site visits",
      "Beach dining experiences",
      "Sunset cruise"
    ],
    rating: 4.6,
    reviewCount: 134,
    maxGroupSize: 12,
    difficulty: "Easy",
    bestTime: ["November", "December", "January", "February", "March"]
  }
];

export const DESTINATIONS = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    category: "heritage",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    description: "The iconic symbol of love and one of the Seven Wonders of the World"
  },
  {
    id: "red-fort",
    name: "Red Fort",
    location: "Delhi",
    category: "heritage",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    description: "Historic fortified palace that served as the main residence of the Mughal emperors"
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    category: "heritage",
    image: "https://images.unsplash.com/photo-1599661046827-dacde6199834?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    description: "Palace of Winds with its distinctive honeycomb architecture"
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    category: "nature",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    description: "Serene network of canals, rivers, and lakes with traditional houseboats"
  },
  {
    id: "ganga-aarti",
    name: "Ganga Aarti",
    location: "Varanasi, Uttar Pradesh",
    category: "spiritual",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    description: "Sacred evening ceremony on the banks of the holy Ganges River"
  },
  {
    id: "himalayas",
    name: "Himalayas",
    location: "Uttarakhand",
    category: "nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    description: "Majestic mountain range with snow-capped peaks and pristine valleys"
  },
  {
    id: "lotus-temple",
    name: "Lotus Temple",
    location: "Delhi",
    category: "spiritual",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    description: "Architectural marvel shaped like a lotus flower, open to all religions"
  },
  {
    id: "goa-beaches",
    name: "Goa Beaches",
    location: "Goa",
    category: "nature",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    description: "Golden sandy beaches with palm trees and vibrant coastal culture"
  }
];
