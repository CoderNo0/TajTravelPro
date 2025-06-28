import { useState } from "react";
import { motion } from "framer-motion";
import BookingForm from "./booking-form";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const stats = [
    { value: "500+", label: "Happy Travelers" },
    { value: "15+", label: "Tour Packages" },
    { value: "5★", label: "Customer Rating" }
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&h=1080')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="text-white space-y-6 lg:space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-playfair text-4xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover India's
              <span className="text-golden block">Golden Triangle</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg lg:text-xl text-gray-200 max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the magnificent heritage of Delhi, Agra, and Jaipur with our expertly crafted tours. From the iconic Taj Mahal to royal palaces of Rajasthan.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-sunset-orange to-golden text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Tours
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                onClick={() => setShowVideo(true)}
              >
                Watch Video <Play className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-golden">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Taj India Tours Experience"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
