import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronUp } from "lucide-react";
import Hero from "@/components/hero";
import TourCard from "@/components/tour-card";
import TestimonialCard from "@/components/testimonial-card";
import Gallery from "@/components/gallery";
import FAQ from "@/components/faq";
import ContactForm from "@/components/contact-form";
import BookingForm from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TOUR_PACKAGES, TourPackage } from "@/lib/tour-data";
import { TESTIMONIALS, COMPANY_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Link } from "wouter";

export default function Home() {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show featured tours (first 6)
  const featuredTours = TOUR_PACKAGES.slice(0, 6);

  const handleBookNow = (tour: TourPackage) => {
    setSelectedTour(tour);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Tours Section */}
      <section id="tours" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Tour Packages
            </motion.h2>
            <motion.p 
              className="text-lg text-warm-gray max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover India's most captivating destinations with our carefully curated tour packages, designed to showcase the country's rich heritage and natural beauty.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                index={index}
                onBookNow={handleBookNow}
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/tours">
              <Button className="bg-gradient-to-r from-ocean-blue to-sunset-orange text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View All Tours <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-ocean-blue/5 to-sunset-orange/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Our Travelers Say
            </motion.h2>
            <motion.p 
              className="text-lg text-warm-gray max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Don't just take our word for it. Here's what our satisfied customers have to say about their incredible journeys with Taj India Tours.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-ocean-blue mb-2">500+</div>
              <div className="text-warm-gray">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ocean-blue mb-2">4.9</div>
              <div className="text-warm-gray">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ocean-blue mb-2">15+</div>
              <div className="text-warm-gray">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ocean-blue mb-2">10+</div>
              <div className="text-warm-gray">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-ocean-blue to-sunset-orange relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.4'><circle cx='30' cy='30' r='3'/></g></svg>")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to embark on your Indian adventure? Contact us today and let's start planning your perfect journey through incredible India.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="font-playfair text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Our Office</h4>
                      <p className="text-white/80">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone Number</h4>
                      <p className="text-white/80">{COMPANY_INFO.phone}</p>
                      <p className="text-white/80">{COMPANY_INFO.whatsapp} (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Address</h4>
                      <p className="text-white/80">{COMPANY_INFO.email}</p>
                      <p className="text-white/80">{COMPANY_INFO.bookingEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-clock text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                      <p className="text-white/80">{COMPANY_INFO.businessHours.weekdays}</p>
                      <p className="text-white/80">{COMPANY_INFO.businessHours.weekends}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="font-playfair text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <i className="fab fa-facebook-f text-white text-xl"></i>
                  </a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <i className="fab fa-instagram text-white text-xl"></i>
                  </a>
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <i className="fab fa-twitter text-white text-xl"></i>
                  </a>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <i className="fab fa-youtube text-white text-xl"></i>
                  </a>
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <i className="fab fa-whatsapp text-white text-xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={!!selectedTour} onOpenChange={() => setSelectedTour(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl">
              Book {selectedTour?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedTour && (
            <BookingForm 
              selectedTour={selectedTour.id}
              onSuccess={() => setSelectedTour(null)}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-ocean-blue to-sunset-orange text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
        >
          <ChevronUp className="w-6 h-6 mx-auto" />
        </motion.button>
      )}
    </div>
  );
}
