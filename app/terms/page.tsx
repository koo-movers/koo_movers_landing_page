import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl text-foreground mb-4">Terms and Conditions</h1>
            <p className="text-muted-foreground">Last updated: August 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Koo Movers Solutions is a company incorporated under the Companies Act, 2015 of Kenya. Koo Movers provide Same day deliveries within Nairobi subject to these Terms and
                  Conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">2. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By creating an account using the App or by engaging a rider/riders through the App you agree to
                  getting into a binding agreement between Koo Movers Solutions and the Sender or/and other customers of
                  Koo Movers Solutions.
                </p>
                <p>
                  Koo Movers reserve the right to revise this Terms and Conditions at any time without prior notice.
                  Continued use of the App after updates constitutes your acceptance of the revised Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">3. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Koo Movers allows users to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Request Same-day deliveries</li>
                  <li>Select delivery locations and available riders</li>
                  <li>Track delivery progress</li>
                  <li>Receive digital proof of delivery</li>
                </ul>
                <p className="font-semibold">
                  NOTE: KOO is a platform to connect users with riders. KOO does not directly perform the delivery
                  services but facilitates them through its platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">4. Payment and Fees</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Users agree to pay all applicable delivery fees as indicated in the App.</li>
                  <li>Prices are subject to change and may vary based on location, urgency, and package size.</li>
                  <li>
                    Payment methods accepted: M-PESA, VISA, MASTERCARD, and other mobile money platforms as indicated in
                    the App.
                  </li>
                  <li>
                    All payments are non-refundable unless delivery is cancelled before dispatch or if the service fails
                    due to an issue on KOO MOVER'S end.
                  </li>
                </ul>
                <p className="font-semibold">
                  NOTE: A cancellation done after a rider has already picked a consignment but is yet to dispatch it
                  shall attract a cancellation fees of at least KSH 100. This is meant to compensate the rider.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">5. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>As a user you agree to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide accurate pickup and delivery information</li>
                  <li>Ensure packages are safe, legal and do not contain prohibited or hazardous items</li>
                  <li>Be available at the delivery location or designate someone for a pickup</li>
                  <li>Treat riders respectfully and avoid misuse of the platform</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">6. Cash on Delivery (COD) Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    KOO MOVERS offers a COD collection service via the App, where we collect cash on behalf of clients
                    at the point of delivery.
                  </li>
                  <li>All COD transactions are subjected to a 1% service fee of the total COD amount.</li>
                  <li>Customers will be prompted by our Riders via the App to make payment through Mpesa.</li>
                  <li>
                    COD payment shall only happen at the point of collection by the recipient. Our riders will not
                    collect hard cash.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">7. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>For inquiries, complaints or feedback:</p>
                <ul className="list-none space-y-1">
                  <li>
                    <strong>Email:</strong> info@koomoverssolutions.co.ke
                  </li>
                  <li>
                    <strong>Phone:</strong> 0798853066 / 0798853269
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
