import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestimonialCardProps {
  clientName: string;
  clientLogo: string;
  industry: string;
  testimonial: string;
  rating: number;
  contactPerson: string;
  size?: "small" | "medium" | "large";
}

export default function TestimonialCard({ 
  clientName, 
  clientLogo, 
  industry, 
  testimonial, 
  rating, 
  contactPerson,
  size = "medium"
}: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8"
  };

  const textSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      <CardContent className={sizeClasses[size]}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                <img 
                  src={clientLogo} 
                  alt={clientName} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{clientName}</h3>
                <Badge variant="outline" className="text-xs mt-1">
                  {industry}
                </Badge>
              </div>
            </div>
            <Quote className="h-6 w-6 text-muted-foreground" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {renderStars(rating)}
          </div>

          {/* Testimonial */}
          <blockquote className={`${textSizes[size]} text-muted-foreground italic leading-relaxed`}>
            "{testimonial}"
          </blockquote>

          {/* Contact Person */}
          <div className="text-sm text-muted-foreground">
            — {contactPerson}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
