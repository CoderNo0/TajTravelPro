import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DESTINATIONS } from "@/lib/tour-data";
import { Expand, MapPin, Camera } from "lucide-react";

const FILTER_OPTIONS = [
  { value: "all", label: "All Destinations" },
  { value: "heritage", label: "Heritage Sites" },
  { value: "nature", label: "Natural Beauty" },
  { value: "spiritual", label: "Spiritual Places" }
];

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<{src: string, title: string, location: string} | null>(null);

  const filteredDestinations = activeFilter === "all" 
    ? DESTINATIONS 
    : DESTINATIONS.filter(dest => dest.category === activeFilter);

  const openLightbox = (destination: typeof DESTINATIONS[0]) => {
    setLightboxImage({
      src: destination.image,
      title: destination.name,
      location: destination.location
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-ocean-blue to-sunset-orange">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-4">
              Incredible India Destinations
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              From ancient monuments to natural wonders, discover the diverse landscapes and rich cultural heritage that make India truly incredible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Introduction */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore India's Wonders
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto mb-8">
              Each destination tells a unique story of India's incredible heritage, natural beauty, and spiritual significance. Click on any image to explore in detail.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {FILTER_OPTIONS.map((option) => (
              <Button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeFilter === option.value
                    ? "bg-ocean-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option.label}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openLightbox(destination)}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-playfair text-xl font-bold">{destination.name}</h3>
                      <p className="text-sm flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {destination.location}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Expand className="text-white" size={20} />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className={`text-white ${
                          destination.category === 'heritage' ? 'bg-royal-purple' :
                          destination.category === 'nature' ? 'bg-emerald-600' :
                          destination.category === 'spiritual' ? 'bg-golden' :
                          'bg-ocean-blue'
                        }`}
                      >
                        {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Destination Details */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {filteredDestinations.map((destination, index) => (
              <Card key={`detail-${destination.id}`} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-bold text-gray-900 mb-1">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-warm-gray mb-2 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {destination.location}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16 p-8 bg-gradient-to-r from-ocean-blue/5 to-sunset-orange/5 rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Camera className="w-12 h-12 text-ocean-blue mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore These Destinations?
            </h3>
            <p className="text-lg text-warm-gray mb-6 max-w-2xl mx-auto">
              Let us create a personalized itinerary that covers your favorite destinations. Our expert guides will ensure you experience the very best of each location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-ocean-blue to-sunset-orange text-white hover:shadow-lg"
                onClick={() => window.location.href = '/tours'}
              >
                Browse Tour Packages
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                onClick={() => window.location.href = '/contact'}
              >
                Plan Custom Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[80vh] bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <img 
                src={lightboxImage.src} 
                alt={lightboxImage.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-warm-gray flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {lightboxImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
