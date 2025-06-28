import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEmailJS } from "@/hooks/use-emailjs";
import { TOUR_PACKAGES } from "@/lib/tour-data";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, Users, MapPin, Phone, Mail, User } from "lucide-react";

const bookingSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  tourPackage: z.string().min(1, "Please select a tour package"),
  checkIn: z.string().min(1, "Please select a check-in date"),
  travelers: z.string().min(1, "Please select number of travelers"),
  specialRequests: z.string().optional()
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  selectedTour?: string;
  onSuccess?: () => void;
}

export default function BookingForm({ selectedTour, onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { sendBooking } = useEmailJS();
  const queryClient = useQueryClient();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      tourPackage: selectedTour || "",
      checkIn: "",
      travelers: "",
      specialRequests: ""
    }
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      const response = await apiRequest('POST', '/api/bookings', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Generate booking ID
      const bookingId = `TIT-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      
      // Find selected tour for pricing
      const selectedTourData = TOUR_PACKAGES.find(tour => tour.id === data.tourPackage);
      const travelers = parseInt(data.travelers);
      const totalAmount = selectedTourData ? (selectedTourData.price * travelers).toString() : "0";
      
      // Save booking to database
      const bookingData = {
        ...data,
        bookingId,
        totalAmount: parseInt(totalAmount),
        status: 'pending'
      };
      
      await createBookingMutation.mutateAsync(bookingData);
      
      // Send email notification
      const emailData = {
        to_email: 'bookings@tajindiatours.com',
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        tour_package: selectedTourData?.name || data.tourPackage,
        check_in: data.checkIn,
        travelers: data.travelers,
        message: data.specialRequests || 'No special requests',
        booking_id: bookingId,
        total_amount: new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 0
        }).format(parseInt(totalAmount))
      };
      
      await sendBooking(emailData);
      
      // Reset form
      form.reset();
      onSuccess?.();
      
    } catch (error) {
      console.error('Booking submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="pb-4">
          <CardTitle className="font-playfair text-2xl font-bold text-gray-900 flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-ocean-blue" />
            Quick Booking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Contact Fields */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tour Selection */}
              <FormField
                control={form.control}
                name="tourPackage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Tour Package</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a package" />
                        </SelectTrigger>
                        <SelectContent>
                          {TOUR_PACKAGES.map((tour) => (
                            <SelectItem key={tour.id} value={tour.id}>
                              {tour.name} - {tour.duration}
                            </SelectItem>
                          ))}
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date and Travelers */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="checkIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Check-in Date
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="travelers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Travelers
                      </FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Number" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Person</SelectItem>
                            <SelectItem value="2">2 People</SelectItem>
                            <SelectItem value="3">3 People</SelectItem>
                            <SelectItem value="4">4 People</SelectItem>
                            <SelectItem value="5">5 People</SelectItem>
                            <SelectItem value="6">6 People</SelectItem>
                            <SelectItem value="7">7 People</SelectItem>
                            <SelectItem value="8">8 People</SelectItem>
                            <SelectItem value="9">9 People</SelectItem>
                            <SelectItem value="10">10+ People</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Special Requests */}
              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any special requirements, dietary restrictions, or preferences..."
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-ocean-blue to-sunset-orange text-white py-4 text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                disabled={isSubmitting || createBookingMutation.isPending}
              >
                {isSubmitting || createBookingMutation.isPending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  "Get Quote & Book Now"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
