import { Button } from "../ui/button"
import { Shield, Clock } from "lucide-react"

interface DeliveryBannerProps {
  onShopNowClick: () => void
}

export function DeliveryBanner({ onShopNowClick }: DeliveryBannerProps) {
  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundColor: "#E8F5E9",
        backgroundImage: "url('/banners/background-light-green-print.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl bg-white/95 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-green mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
              100% Secure and Fast Delivery
            </h3>
            <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              Get your fresh groceries delivered safely and quickly to your door. We're committed to bringing quality food to your community.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
              <div className="flex items-center gap-2 text-brand-green">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-brand-green" />
                </div>
                <span className="font-semibold text-brand-green">Secure</span>
              </div>
              <div className="flex items-center gap-2 text-brand-green">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-brand-green" />
                </div>
                <span className="font-semibold text-brand-green">Fast</span>
              </div>
            </div>
            <Button
              className="px-8 py-6 text-base font-semibold"
              onClick={onShopNowClick}
              style={{ 
                backgroundColor: '#f09440',
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                border: 'none'
              }}
            >
              Shop Now
            </Button>
          </div>

          {/* Right: Delivery guy illustration */}
          <div className="flex-shrink-0 w-full md:w-auto md:max-w-md">
            <div className="relative">
              <img 
                src="/images/delivery-guy.png" 
                alt="Delivery person with groceries" 
                className="w-full h-auto max-w-md mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
