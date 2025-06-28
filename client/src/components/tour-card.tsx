import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, MapPin } from "lucide-react";
import { TourPackage } from "@/lib/tour-data";

interface TourCardProps {
  tour: TourPackage;
  index?: number;
  onBookNow?: (tour: TourPackage) => void;
}

export default function TourCard({ tour, index = 0, onBookNow }: TourCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={tour.image} 
            alt={tour.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            {tour.badge && (
              <Badge 
                className={`text-white ${
                  tour.badge === 'Popular' ? 'bg-sunset-orange' :
                  tour.badge === 'Extended' ? 'bg-golden' :
                  tour.badge === 'Heritage' ? 'bg-royal-purple' :
                  tour.badge === 'Spiritual' ? 'bg-emerald-500' :
                  tour.badge === 'Nature' ? 'bg-emerald-600' :
                  'bg-ocean-blue'
                }`}
              >
                {tour.badge}
              </Badge>
            )}
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-black/50 text-white border-none">
              <Clock className="w-3 h-3 mr-1" />
              {tour.duration}
            </Badge>
          </div>
          
          {/* Rating Overlay */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            <Star className="w-4 h-4 fill-golden text-golden" />
            <span className="font-semibold">{tour.rating}</span>
            <span className="text-gray-300">({tour.reviewCount})</span>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>
              <p className="text-warm-gray mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {tour.shortDescription}
              </p>
              <p className="text-gray-600 text-sm line-clamp-2">{tour.description}</p>
            </div>
            
            {/* Tour Highlights */}
            <div className="space-y-2">
              {tour.highlights.slice(0, 3).map((highlight, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                  {highlight}
                </div>
              ))}
            </div>

            {/* Tour Details */}
            <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Max {tour.maxGroupSize}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span>
                  <span>{tour.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="text-2xl font-bold text-ocean-blue">{formatPrice(tour.price)}</span>
                <span className="text-sm text-warm-gray">/person</span>
                {tour.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    {formatPrice(tour.originalPrice)}
                  </div>
                )}
              </div>
              <Button 
                className="bg-ocean-blue text-white hover:bg-ocean-blue/90 transition-colors"
                onClick={() => onBookNow?.(tour)}
              >
                Book Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
