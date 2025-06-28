import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    location: string;
    rating: number;
    comment: string;
    avatar: string;
  };
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <CardContent className="p-8">
          <div className="space-y-4">
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-golden text-xl">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-golden text-golden' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-warm-gray font-semibold">{testimonial.rating}.0</span>
            </div>

            {/* Comment */}
            <p className="text-gray-700 leading-relaxed italic">
              "{testimonial.comment}"
            </p>

            {/* Author */}
            <div className="flex items-center pt-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-warm-gray">{testimonial.location}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
