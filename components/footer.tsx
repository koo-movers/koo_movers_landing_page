import Link from "next/link";
import { Truck, Phone, Mail, MapPin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg">
                <Image
                  width={150}
                  height={70}
                  alt="Koo Movers Logo"
                  src="https://storage.googleapis.com/koomovers/koomovers-sm.png"
                />
              </div>
            </Link>
            <p className="text-background/80 text-sm leading-relaxed">
              Reliable delivery and logistics solutions across Nairobi. We
              understand the importance of approaching each delivery with care
              and professionalism.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/KooMovers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/koomoverssolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#rider-registration"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Become a Rider
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">
                  0798853066 / 0798853269
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">
                  info@koomoverssolutions.co.ke
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-heading text-lg mb-4">Operating Hours</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Monday - Friday: 8:00 AM - 9:00 PM</li>
              <li>Saturday: 8:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2025 Koo Movers Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
