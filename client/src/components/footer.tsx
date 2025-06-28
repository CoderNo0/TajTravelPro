import { Link } from "wouter";
import { COMPANY_INFO, SOCIAL_LINKS, NAVIGATION_ITEMS } from "@/lib/constants";
import { Church, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-ocean-blue to-sunset-orange rounded-lg flex items-center justify-center">
                <Church className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">{COMPANY_INFO.name}</h3>
                <p className="text-xs text-gray-400">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience the magic of India with our carefully crafted tours. From the iconic Golden Triangle to spiritual journeys and beach escapes, we create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ocean-blue transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ocean-blue transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ocean-blue transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ocean-blue transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tour Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/tours?category=heritage" className="text-gray-300 hover:text-white transition-colors">Golden Triangle</Link></li>
              <li><Link href="/tours?category=heritage" className="text-gray-300 hover:text-white transition-colors">Rajasthan Heritage</Link></li>
              <li><Link href="/tours?category=spiritual" className="text-gray-300 hover:text-white transition-colors">Spiritual Tours</Link></li>
              <li><Link href="/tours?category=nature" className="text-gray-300 hover:text-white transition-colors">Kerala Backwaters</Link></li>
              <li><Link href="/tours?category=beach" className="text-gray-300 hover:text-white transition-colors">Goa Beaches</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Custom Tours</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-ocean-blue mt-1 flex-shrink-0" size={16} />
                <p className="text-gray-300 text-sm">{COMPANY_INFO.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-ocean-blue flex-shrink-0" size={16} />
                <p className="text-gray-300 text-sm">{COMPANY_INFO.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-ocean-blue flex-shrink-0" size={16} />
                <p className="text-gray-300 text-sm">{COMPANY_INFO.email}</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fab fa-whatsapp text-emerald-500"></i>
                <p className="text-gray-300 text-sm">{COMPANY_INFO.whatsapp}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved. | Designed with ❤️ for incredible experiences.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">We Accept</p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                <i className="fab fa-cc-visa text-blue-500"></i>
              </div>
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                <i className="fab fa-cc-mastercard text-red-500"></i>
              </div>
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                <i className="fab fa-cc-paypal text-blue-400"></i>
              </div>
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                <i className="fab fa-cc-amex text-blue-600"></i>
              </div>
              <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-white font-bold">
                UPI
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
