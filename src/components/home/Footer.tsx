import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      {/* Newsletter section */}
      <section className="py-12 px-4 border-b border-white/20">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            SUBSCRIBE TO YOUR NEWSLETTER AND GET $10 DISCOUNT
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              style={{ fontFamily: 'Arial, sans-serif' }}
            />
            <Button className="bg-white text-brand-green hover:bg-gray-100" style={{ fontFamily: 'Arial, sans-serif' }}>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Service icons */}
      <section className="py-8 px-4 border-b border-white/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Return Policy</h4>
              <p className="text-sm text-white/80" style={{ fontFamily: 'Arial, sans-serif' }}>Easy returns within 30 days</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Free Shipping</h4>
              <p className="text-sm text-white/80" style={{ fontFamily: 'Arial, sans-serif' }}>On orders over $25.00</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Store Locator</h4>
              <p className="text-sm text-white/80" style={{ fontFamily: 'Arial, sans-serif' }}>Find a store near you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold mb-4 font-cooper text-lg">Family Tree</h4>
              <p className="text-sm text-white/80 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                Your Online Foods & Grocery
              </p>
              <p className="text-sm text-white/80 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                (000) 000-0000
              </p>
              <p className="text-sm text-white/80" style={{ fontFamily: 'Arial, sans-serif' }}>
                123 Main Street, City, State 12345
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>Useful Links</h4>
              <ul className="space-y-2 text-sm text-white/80" style={{ fontFamily: 'Arial, sans-serif' }}>
                <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/help-center" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/career" className="hover:text-white">Career</Link></li>
                <li><Link to="/policy" className="hover:text-white">Policy</Link></li>
                <li><Link to="/official" className="hover:text-white">Official</Link></li>
                <li><Link to="/sitemap" className="hover:text-white">Sitemap</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>Help Center</h4>
              <ul className="space-y-2 text-sm text-white/80" style={{ fontFamily: 'Arial, sans-serif' }}>
                <li><a href="#" className="hover:text-white">Payments</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Track Your Returns</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Checkout</a></li>
                <li><a href="#" className="hover:text-white">Other Issues</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold mb-4 font-cooper">Family Tree Market</h4>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-2"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
                <Button className="w-full bg-white text-brand-green hover:bg-gray-100" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Subscribe
                </Button>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-white/80">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-white/80">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-white/80">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-4 px-4 border-t border-white/20">
        <div className="container mx-auto text-center">
          <p className="text-sm text-white/80" style={{ fontFamily: 'Arial, sans-serif' }}>
            © 2025 Family Tree Food Market. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  )
}

