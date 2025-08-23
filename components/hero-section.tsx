import { Button, ButtonLink } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-30 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl lg:text-6xl text-foreground leading-tight">
                Delivering Happiness,{" "}
                <span className="text-primary">One Package</span> at a Time
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Join us for seamless same-day deliveries across Nairobi. Connect
                with reliable riders for fast, secure package delivery that you
                can trust.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink
                href="#customer-journey"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Request A Delivery
                <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonLink>
              <ButtonLink
                variant="outline"
                href="#rider-registration"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Become a Rider
              </ButtonLink>
            </div>

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="font-heading text-2xl text-foreground">2hrs</div>
                <div className="text-sm text-muted-foreground">Avg Delivery</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="font-heading text-2xl text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="font-heading text-2xl text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div> */}
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://storage.googleapis.com/koomovers/delivery-truck.png"
              alt="Koo Movers delivery rider"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
