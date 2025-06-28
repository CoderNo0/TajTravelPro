import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Heart, Star } from "lucide-react";

export default function Contact() {
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
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Ready to embark on your Indian adventure? Contact us today and let's start planning your perfect journey through incredible India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Main Contact Info */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2 text-ocean-blue" />
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-ocean-blue" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Our Office</h4>
                        <p className="text-gray-600">{COMPANY_INFO.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-ocean-blue" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                        <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                        <p className="text-gray-600">{COMPANY_INFO.whatsapp} (WhatsApp)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-ocean-blue" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email Addresses</h4>
                        <p className="text-gray-600">{COMPANY_INFO.email}</p>
                        <p className="text-gray-600">{COMPANY_INFO.bookingEmail}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-ocean-blue" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600">{COMPANY_INFO.businessHours.weekdays}</p>
                        <p className="text-gray-600">{COMPANY_INFO.businessHours.weekends}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-ocean-blue" />
                    Why Choose Taj India Tours?
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" fill="currentColor" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert Local Guides</h4>
                        <p className="text-sm text-gray-600">Professional, English-speaking guides with deep local knowledge</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" fill="currentColor" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Personalized Experiences</h4>
                        <p className="text-sm text-gray-600">Customized itineraries tailored to your interests and preferences</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" fill="currentColor" />
                      <div>
                        <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                        <p className="text-sm text-gray-600">Round-the-clock assistance throughout your journey</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" fill="currentColor" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Best Value Guarantee</h4>
                        <p className="text-sm text-gray-600">Competitive pricing with no hidden costs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-2 text-ocean-blue" />
                    Follow Our Journey
                  </h3>
                  <div className="flex space-x-4">
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <i className="fab fa-facebook-f text-white text-xl"></i>
                    </a>
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                      <i className="fab fa-instagram text-white text-xl"></i>
                    </a>
                    <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                      <i className="fab fa-twitter text-white text-xl"></i>
                    </a>
                    <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                      <i className="fab fa-youtube text-white text-xl"></i>
                    </a>
                    <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                      <i className="fab fa-whatsapp text-white text-xl"></i>
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Follow us for travel inspiration, customer stories, and exclusive offers!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out our frequently asked questions or browse our tour packages for more information about traveling with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-ocean-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-blue/90 transition-colors"
              >
                View FAQ
              </button>
              <button 
                onClick={() => window.location.href = '/tours'}
                className="border border-ocean-blue text-ocean-blue px-6 py-3 rounded-lg font-semibold hover:bg-ocean-blue hover:text-white transition-colors"
              >
                Browse Tours
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
