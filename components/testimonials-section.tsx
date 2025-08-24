"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
type FeedbackUser = {
  first_name: string;
  last_name: string;
  is_corporate: boolean;
  role: string;
};

type Feedback = {
  message: string;
  rating: number;
  user: FeedbackUser;
};

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Feedback[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch("http://api.uat.koomoverssolutions.co.ke/feedback/list/latest");
        const data: Feedback[] = await res.json();

        // transform role dynamically based on is_corporate
        const transformed = data.map((fb) => ({
          ...fb,
          user: {
            ...fb.user,
            role: fb.user.is_corporate ? "Business Owner" : "Customer",
          },
        }));

        setTestimonials(transformed);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    };

    fetchFeedback();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-30 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-8">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied
              customers have to say about our services.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {testimonials.length === 0 ? (
              <>Loading...</>
            ) : (
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-secondary mb-4" />
                    <p className="text-card-foreground text-lg leading-relaxed mb-4">
                      "{testimonials[currentIndex].message}"
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[
                        ...Array(Math.floor(testimonials[currentIndex].rating)),
                      ].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-secondary text-secondary"
                        />
                      ))}
                      {testimonials[currentIndex].rating % 1 >= 0.5 && (
                        <Star className="h-5 w-5 text-secondary" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-heading text-lg text-card-foreground">
                        {testimonials[currentIndex].user.first_name}{" "}
                        {testimonials[currentIndex].user.last_name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonials[currentIndex].user.role}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevTestimonial}
                        className="border-border hover:bg-muted bg-transparent"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextTestimonial}
                        className="border-border hover:bg-muted bg-transparent"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground mb-4">
                  Stay Updated with Our Latest Services
                </h3>
                <p className="text-muted-foreground mb-6">
                  Sign up for our newsletter to receive updates, promotions, and
                  logistics tips from Koo Movers Solutions.
                </p>

                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get exclusive offers, discounts, and logistics insights
                    delivered to your inbox.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
