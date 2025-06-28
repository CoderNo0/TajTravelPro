import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import TourCard from "@/components/tour-card";
import BookingForm from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TOUR_PACKAGES, TourPackage } from "@/lib/tour-data";
import { Search, Filter, MapPin } from "lucide-react";

const CATEGORIES = [
  { value: "all", label: "All Tours" },
  { value: "Heritage", label: "Heritage Tours" },
  { value: "Spiritual", label: "Spiritual Tours" },
  { value: "Nature", label: "Nature Tours" },
  { value: "Beach", label: "Beach Tours" }
];

const DURATIONS = [
  { value: "all", label: "Any Duration" },
  { value: "1-3", label: "1-3 Days" },
  { value: "4-6", label: "4-6 Days" },
  { value: "7+", label: "7+ Days" }
];

const PRICE_RANGES = [
  { value: "all", label: "Any Price" },
  { value: "0-20000", label: "Under ₹20,000" },
  { value: "20000-40000", label: "₹20,000 - ₹40,000" },
  { value: "40000+", label: "Above ₹40,000" }
];

export default function Tours() {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const handleBookNow = (tour: TourPackage) => {
    setSelectedTour(tour);
  };

  const filteredTours = TOUR_PACKAGES.filter(tour => {
    // Search filter
    if (searchTerm && !tour.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !tour.destinations.some(dest => dest.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }

    // Category filter
    if (categoryFilter !== "all" && tour.category !== categoryFilter) {
      return false;
    }

    // Duration filter
    if (durationFilter !== "all") {
      const days = parseInt(tour.duration);
      if (durationFilter === "1-3" && (days < 1 || days > 3)) return false;
      if (durationFilter === "4-6" && (days < 4 || days > 6)) return false;
      if (durationFilter === "7+" && days < 7) return false;
    }

    // Price filter
    if (priceFilter !== "all") {
      if (priceFilter === "0-20000" && tour.price > 20000) return false;
      if (priceFilter === "20000-40000" && (tour.price < 20000 || tour.price > 40000)) return false;
      if (priceFilter === "40000+" && tour.price < 40000) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
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
              Explore Our Tour Packages
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Discover carefully crafted journeys through India's most incredible destinations. From heritage tours to spiritual adventures, find your perfect travel experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search tours or destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  {DURATIONS.map(duration => (
                    <SelectItem key={duration.value} value={duration.value}>
                      {duration.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  {PRICE_RANGES.map(price => (
                    <SelectItem key={price.value} value={price.value}>
                      {price.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredTours.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No tours found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all tours.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setDurationFilter("all");
                  setPriceFilter("all");
                }}
                className="bg-ocean-blue hover:bg-ocean-blue/90"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <>
              <motion.div 
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredTours.length} Tour{filteredTours.length !== 1 ? 's' : ''} Found
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour, index) => (
                  <TourCard 
                    key={tour.id} 
                    tour={tour} 
                    index={index}
                    onBookNow={handleBookNow}
                  />
                ))}
              </div>
            </>
          )}
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
    </div>
  );
}
