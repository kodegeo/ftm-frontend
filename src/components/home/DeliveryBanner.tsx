import { Button } from "../ui/button"
import { Truck, Shield, Clock } from "lucide-react"

interface DeliveryBannerProps {
  onShopNowClick: () => void
}

export function DeliveryBanner({ onShopNowClick }: DeliveryBannerProps) {
  return (
    <section
      className="py-12 px-4"
      style={{
        backgroundColor: "#E8F5E9",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='%232C5923' fill-opacity='0.08'%3E%3Cpath d='M60 10c5 5-5 15-10 10s5-15 10-10zM20 70c7 3 3 12-2 10-5-2-3-12 2-10zM90 40c4 4-3 9-7 6-4-3 3-10 7-6zM40 100c6 6-4 12-8 8-4-4 4-12 8-8z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Text and icon */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <Truck className="h-10 w-10 text-brand-green" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-green mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                100% Secure and Fast delivery
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-brand-green" style={{ fontFamily: 'Arial, sans-serif' }}>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Fast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA Button */}
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
      </div>
    </section>
  )
}
