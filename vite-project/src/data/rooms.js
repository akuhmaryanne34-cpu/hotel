const rooms = [
  {
    id: 1,
    name: "Ocean Deluxe Suite",
    price: 250,
    featured: true,
    description:
      "A luxurious ocean-facing suite with private balcony and panoramic sea views.",
    amenities: ["WiFi", "King Bed", "Ocean View", "Private Balcony"],
    images: ["/room-1.jpg", "/room1-2.jpg", "/room1-3.jpg", "/room1.jpg"],
  },
  {
    id: 2,
    name: "Executive Skyline Room",
    price: 200,
    featured: true,
    description:
      "Modern executive room with skyline views and premium workspace.",
    amenities: ["WiFi", "Queen Bed", "City View", "Work Desk"],
    images: ["/room2.jpg", "/room2-1.jpg", "/room2-3.jpg", "/room2-4.jpg"],
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: 450,
    featured: true,
    description:
      "Our most exclusive suite offering unmatched luxury and private lounge.",
    amenities: ["WiFi", "King Bed", "Private Lounge", "Jacuzzi"],
    images: ["/room2-4.jpg", "/room4-2.jpg", "/room1-3.jpg", "/room2-1.jpg"],
  },
  {
    id: 4,
    name: "Classic Comfort Room",
    price: 120,
    featured: true,
    description:
      "Cozy and elegant room designed for ultimate comfort and relaxation.",
    amenities: ["WiFi", "Queen Bed", "Garden View"],
    images: ["/room4.jpg", "/room4-1.jpg", "/room4-2.jpg", "/room4-3.jpg"],
  },
  {
    id: 5,
    name: "Luxury Garden Suite",
    price: 280,
    featured: true,
    description:
      "Spacious suite surrounded by lush gardens and natural lighting.",
    amenities: ["WiFi", "King Bed", "Garden View", "Private Terrace"],
    images: ["/room5.jpg", "/room2-3.jpg", "/room1-3.jpg", "/room2-4.jpg"],
  },
  {
    id: 6,
    name: "Romantic Honeymoon Suite",
    price: 320,
    featured: true,
    description:
      "Perfect for couples, featuring candle-lit ambiance and luxury spa bath.",
    amenities: ["WiFi", "King Bed", "Spa Bath", "Ocean View"],
    images: ["/room6.jpg", "/room1-1.jpg", "/room2-3.jpg", "/room2-4.jpg"],
  },



  {
    id: 7,
    name: "Business Elite Room",
    price: 180,
    featured: false,
    description: "Ideal for business travelers with productivity setup.",
    amenities: ["WiFi", "Work Desk", "Smart TV"],
    images: ["/room7-1.jpg", "/room7-2.jpg", "/room7-3.jpg", "/room7-4.jpg"],
  },
  {
    id: 8,
    name: "Family Comfort Suite",
    price: 260,
    featured: false,
    description: "Spacious family-friendly suite with twin rooms.",
    amenities: ["WiFi", "2 Queen Beds", "Mini Bar"],
    images: ["/room8-1.jpg", "/room8-2.jpg", "/room8-3.jpg", "/room8-4.jpg"],
  },
  {
    id: 9,
    name: "Penthouse Luxury Suite",
    price: 500,
    featured: false,
    description: "Top-floor penthouse with private rooftop access.",
    amenities: ["WiFi", "King Bed", "Private Pool"],
    images: ["/room9-1.jpg", "/room9-2.jpg", "/room9-3.jpg", "/room9-4.jpg"],
  },
  {
    id: 10,
    name: "Minimalist Studio Room",
    price: 100,
    featured: false,
    description: "Simple and modern room with minimalist design.",
    amenities: ["WiFi", "Queen Bed"],
    images: [
      "/room10-1.jpg",
      "/room10-2.jpg",
      "/room10-3.jpg",
      "/room10-4.jpg",
    ],
  },
];

export default rooms;
