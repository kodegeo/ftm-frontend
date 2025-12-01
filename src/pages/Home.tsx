import { useState } from "react"
import { HeroSection } from "../components/HeroSection"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { StoreFilterBar } from "../components/home/StoreFilterBar"
import { FeatureStrip } from "../components/home/FeatureStrip"
import { ProductGrid } from "../components/home/ProductGrid"
import { DeliveryBanner } from "../components/home/DeliveryBanner"
import { RecommendationsCarousel } from "../components/home/RecommendationsCarousel"
import { RecentViewed } from "../components/home/RecentViewed"
import { ServicesSection } from "../components/home/ServicesSection"
import { Footer } from "../components/home/Footer"
import { Modal } from "../components/Modal"

const HERO_IMAGE = "/banners/hero-main.jpg"

export function Home() {
  const [isGetARideModalOpen, setIsGetARideModalOpen] = useState(false)

  return (
    <div>
        <HeroSection
        title="OFFERS FRESH AND HEALTHY FOODS"
        subtitle="Fresh food, healthy choices, and a market designed for our community..."
        image={HERO_IMAGE}
        >
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="px-8 py-6 text-base font-semibold"
            style={{ 
              backgroundColor: '#f09440',
              color: 'white',
              fontFamily: 'Arial, sans-serif',
              border: 'none'
            }}
          >
            <Link to="/store/hill-district">Shop Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-8 py-6 text-base font-semibold"
            style={{ 
              borderColor: 'white',
              color: 'white',
              fontFamily: 'Arial, sans-serif',
              backgroundColor: 'transparent'
            }}
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfakcuPuXv_OX6gmHOV0vH5JJrcHUayHUPHkAFZVnCQ-UzuJA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
            </a>
          </Button>
        </div>
      </HeroSection>

      <StoreFilterBar />
      <FeatureStrip />
      <ProductGrid />
      <DeliveryBanner onShopNowClick={() => setIsGetARideModalOpen(true)} />

      {/* Promotional Banner */}
      <section
        className="relative py-12 px-4 text-white overflow-hidden"
        style={{ backgroundColor: "#2C5923" }}
      >
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="block w-full h-20"
          >
            <path
              fill="#2C5923"
              d="M0,32 C360,80 1080,-10 1440,40 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        {/* Produce watermark */}
        <div className="absolute right-0 top-0 h-full opacity-[0.07] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400">
            <g stroke="#FFFFFF" strokeWidth="2" fill="none">
              <path d="M200 40c25 10 40 30 40 55s-15 50-40 60-40-20-40-45 15-65 40-70z" />
              <path d="M120 200c15-10 40-10 55 0s10 35-5 45-45 5-55-10 0-30 5-35z" />
              <path d="M260 260c20-5 40 10 45 25s-10 35-30 35-40-15-40-30 10-25 25-30z" />
            </g>
          </svg>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            FRESH FOOD DELIVERY <br/> FOR THOSE ON THE HILL WHO NEED IT
          </h2>
          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base font-semibold"
            style={{ fontFamily: 'Arial, sans-serif' }}
            onClick={() => setIsGetARideModalOpen(true)}
          >
            <span>Shop Now</span>
          </Button>
        </div>
      </section>

      {/* Get a Ride Modal for non-hero \"Shop Now\" buttons */}
      <Modal
        open={isGetARideModalOpen}
        onOpenChange={setIsGetARideModalOpen}
        title="Transportation Support Coming!"
        image="/images/get-a-ride.png"
      >
        <p style={{ fontFamily: 'Arial, sans-serif' }}>
          We're exploring rideshare partnerships and community transport options to make grocery access easier. Tell us what you'd like to see.
        </p>
      </Modal>

      <RecommendationsCarousel />
      <RecentViewed />
      <ServicesSection />

      {/* Seller Onboarding Section */}
      <section className="bg-[#E8F5E9] py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                OPEN YOUR STORE ON FAMILY TREE & REACH MILLIONS OF BUYERS ALL OVER THE WORLD
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl">📱</span>
              </div>
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base font-semibold"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                <Link to="https://9atnn8n9kak.typeform.com/to/PWXtQFTI">Interested in Becoming a Local Seller</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
