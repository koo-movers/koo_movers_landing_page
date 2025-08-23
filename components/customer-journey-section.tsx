import { User, Package, CreditCard, CheckCircle, Download } from "lucide-react";
import { ButtonLink } from "./ui/button";

export function CustomerJourneySection() {
  const steps = [
    {
      icon: User,
      title: "Register as Customer",
      description:
        "Create your account with accurate information and verify your phone number to get started with Koo Movers.",
    },
    {
      icon: Package,
      title: "Request a Delivery",
      description:
        "Select pickup and delivery locations, choose your preferred rider, and provide package details for same-day delivery.",
    },
    {
      icon: CreditCard,
      title: "Make Payment",
      description:
        "Pay securely using M-PESA, VISA, MasterCard, or other mobile money platforms.",
    },
    {
      icon: CheckCircle,
      title: "Receive Your Package",
      description:
        "Track your delivery in real-time and receive digital proof of delivery once your package arrives safely.",
    },
  ];

  return (
    <section className="py-30 bg-muted" id="customer-journey">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            How to Send Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your packages delivered across Nairobi in just a few simple
            steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <ButtonLink
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Download className="mr-2 h-5 w-5" />
            Download App
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
