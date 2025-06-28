import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DESTINATIONS } from "@/lib/tour-data";
import { Expand } from "lucide-react";

const FILTER_OPTIONS = [
  { value: "all", label: "All Destinations" },
  { value: "heritage", label: "Heritage Sites" },
  { value: "nature", label: "Natural Beauty" },
  { value: "spiritual", label: "Spiritual Places" }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredDestinations = activeFilter === "all" 
    ? DESTINATIONS 
    : DESTINATIONS.filter(dest => dest.category === activeFilter);

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore India's Wonders
          </motion.h2>
          <motion.p 
            className="text-lg text-warm-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From ancient monuments to natural wonders, discover the diverse landscapes and rich cultural heritage that make India truly incredible.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setLightboxImage(destination.image)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-playfair text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm">{destination.location}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Expand className="text-white" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl max-h-[80vh]">
              <img 
                src={lightboxImage} 
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
