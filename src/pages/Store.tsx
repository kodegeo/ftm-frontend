import { HeroSection } from "../components/HeroSection"
import { SectionHeader } from "../components/SectionHeader"
import { CardGrid } from "../components/CardGrid"
import { SearchBar } from "../components/SearchBar"
import { ProductCard } from "../components/store/ProductCard"
import { MessageSquare } from "lucide-react"

export function Store() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Store"
        subtitle="Browse our curated selection of products"
        image="/images/store.png"
      />

      {/* Welcome Message & QR Code Section */}
      <section 
        className="py-16 px-4"
        style={{
          backgroundColor: "#E8F5E9",
          backgroundImage: "url('/banners/background-light-green-print.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Welcome Message */}
              <div className="bg-white/95 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <h2 
                    className="text-3xl md:text-4xl font-bold text-brand-green"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    Welcome to the Hill District
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <p className="text-lg leading-relaxed font-medium">
                    Family Tree Food Market is coming to the Hill District, and we're honored to serve this proud, historic community.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Before we open our doors, we want to hear directly from you. Your voice will shape what we offer — from the foods we stock to the services we build.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold text-brand-green">
                    Please take a moment to complete our Community Voice Survey and help us create a market that truly reflects the Hill.
                  </p>
                </div>
              </div>

              {/* Right: QR Code */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-brand-green/20">
                  <img 
                    src="/images/qr-code.png" 
                    alt="Community Voice Survey QR Code" 
                    className="w-64 h-64 mx-auto"
                  />
                </div>
                <p 
                  className="mt-6 text-center text-lg font-semibold text-brand-green max-w-xs"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  Scan to complete the Community Voice Survey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Products Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-8">
            <SearchBar placeholder="Search products..." />
          </div>

          <SectionHeader
            title="Featured Products"
            description="Discover our handpicked selection"
          />

          <CardGrid columns={4}>
            <ProductCard
              name="Organic Apples"
              price="$4.99/lb"
              description="Fresh, organic apples from local farms"
            />
            <ProductCard
              name="Whole Grain Bread"
              price="$3.49"
              description="Freshly baked whole grain bread"
            />
            <ProductCard
              name="Organic Spinach"
              price="$2.99"
              description="Fresh organic spinach"
            />
            <ProductCard
              name="Wild Caught Salmon"
              price="$12.99/lb"
              description="Sustainable wild-caught salmon"
            />
          </CardGrid>
        </div>
      </section>
    </div>
  )
}

