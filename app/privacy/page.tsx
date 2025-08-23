import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: August 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We collect the following information from riders and customers:</p>

                <h4 className="font-semibold mt-4 mb-2">For All Users:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>First name and last name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Profile image (optional)</li>
                  <li>Date of birth (optional)</li>
                  <li>Source of income (optional)</li>
                  <li>Employment status (optional)</li>
                  <li>Industry information (optional)</li>
                </ul>

                <h4 className="font-semibold mt-4 mb-2">For Rider Verification:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Rider ID or passport copy</li>
                  <li>Insurance documentation</li>
                  <li>Good conduct certificate</li>
                  <li>Courier owner's ID (if applicable)</li>
                  <li>Vehicle logbook</li>
                  <li>Driver's license</li>
                  <li>Motorcycle images</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We use your personal information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide and improve our delivery services</li>
                  <li>Verify rider credentials and ensure platform safety</li>
                  <li>Process payments and handle transactions</li>
                  <li>Communicate with you about your deliveries</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Prevent fraud and ensure platform security</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">3. Location Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>GPS and location services will be used to facilitate deliveries. We collect location data to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Match customers with nearby riders</li>
                  <li>Provide real-time delivery tracking</li>
                  <li>Optimize delivery routes</li>
                  <li>Ensure accurate pickup and delivery locations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">4. Data Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We do not sell or misuse personal data. We may share your information only:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>With riders to facilitate deliveries</li>
                  <li>With payment processors to handle transactions</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">5. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">7. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <ul className="list-none space-y-1">
                  <li>
                    <strong>Email:</strong> support@koomoverssolutions.co.ke
                  </li>
                  <li>
                    <strong>Phone:</strong> 0797459368 / 0797459276
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
