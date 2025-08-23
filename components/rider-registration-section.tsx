import { Card, CardContent } from "@/components/ui/card";
import { Button, ButtonLink } from "@/components/ui/button";
import {
  Download,
  FileCheck,
  UserCheck,
  DollarSign,
  Users,
  Gift,
} from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download App",
    description:
      "Download the Koo Movers app from App Store or Google Play Store.",
  },
  {
    icon: UserCheck,
    title: "Register as Rider",
    description:
      "Create your rider account with accurate personal information.",
  },
  {
    icon: FileCheck,
    title: "Upload Documents",
    description:
      "Submit required verification documents including ID, license, and insurance.",
  },
  {
    icon: UserCheck,
    title: "Account Verification",
    description:
      "Wait for our team to verify your documents and approve your account.",
  },
  {
    icon: DollarSign,
    title: "Complete Delivery",
    description:
      "Start accepting delivery requests and complete your first delivery.",
  },
  {
    icon: Gift,
    title: "Earn & Refer",
    description:
      "Earn money from deliveries and get bonuses for referring other riders.",
  },
];

export function RiderRegistrationSection() {
  return (
    <section id="rider-registration" className="py-30 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            How Riders Earn with Koo Movers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our network of reliable riders and start earning money with
            flexible delivery opportunities across Nairobi.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 font-heading text-sm">
                  {index + 1}
                </div>
                <h3 className="font-heading text-lg text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl lg:text-3xl text-foreground mb-4">
              Ready to Start Earning?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of riders already earning with Koo Movers. Flexible
              hours, competitive rates, and reliable support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
