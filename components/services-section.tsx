import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  MapPin,
  Package,
  Truck,
  Calendar,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Same Day Delivery",
    description:
      "Fast delivery within Nairobi ensuring your items reach their destination quickly and safely.",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "Local Moving",
    description:
      "Efficient and reliable local moving services to make your relocation stress-free.",
    color: "text-secondary",
  },
  {
    icon: Package,
    title: "Parcel & Documents",
    description:
      "Secure delivery services for parcels and documents with safe handling and timely delivery.",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Dedicated Services",
    description:
      "Tailored delivery services for your specific needs, providing reliability and security.",
    color: "text-secondary",
  },
  {
    icon: Calendar,
    title: "Next Day Delivery",
    description:
      "Guaranteed next-day delivery for non-urgent packages with peace of mind.",
    color: "text-primary",
  },
  {
    icon: FileText,
    title: "Cash on Delivery",
    description:
      "COD collection service where we collect cash on behalf of clients at delivery point.",
    color: "text-secondary",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-30 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            What We Can Do For You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive delivery and logistics solutions tailored to meet your
            needs across Nairobi and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="font-heading text-xl text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
