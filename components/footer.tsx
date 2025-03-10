import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-primary">AfriqueBeats</h3>
            <p className="text-gray-300">
              Discover exclusive beats from Africa's top producers. Elevate your sound with our premium collection.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/browse" className="hover:text-primary transition-colors">
                  Browse Beats
                </Link>
              </li>
              <li>
                <Link href="/charts" className="hover:text-primary transition-colors">
                  Top Charts
                </Link>
              </li>
              <li>
                <Link href="/genres" className="hover:text-primary transition-colors">
                  Genres
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>info@afriquebeats.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p>© {currentYear} AfriqueBeats | Raise Arise Solutions Limited. All Rights Reserved.</p>
          <p className="mt-2 text-gray-400 flex items-center justify-center gap-1">
            <span>Made with</span>
            <Heart size={14} className="text-red-500" />
            <span>in Africa</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

