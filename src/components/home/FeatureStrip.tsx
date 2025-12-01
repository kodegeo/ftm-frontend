import { useState } from "react"
import { ShoppingCart, UtensilsCrossed, Newspaper, Car } from "lucide-react"
import { Modal } from "../Modal"

interface Feature {
  icon: React.ReactNode
  title: string
  modalTitle: string
  modalBody: string
  image: string
}

const features: Feature[] = [
  { 
    icon: <ShoppingCart className="h-8 w-8" />, 
    title: "ORDER NOW",
    modalTitle: "Online Ordering Coming Soon!",
    modalBody: "You'll be able to order fresh groceries for pickup or delivery once the store opens. Join our community list to get notified when online ordering launches.",
    image: "/images/order-now.png"
  },
  { 
    icon: <UtensilsCrossed className="h-8 w-8" />, 
    title: "WHAT'S FOR DINNER",
    modalTitle: "Dinner Ideas Are On the Way!",
    modalBody: "We're preparing weekly meal ideas and simple recipes to help families save time and eat well. Get early access by joining our community list.",
    image: "/images/whats-for-dinner.png"
  },
  { 
    icon: <Newspaper className="h-8 w-8" />, 
    title: "WEEKLY ADS",
    modalTitle: "Weekly Deals Coming Soon!",
    modalBody: "Family Tree Food Market will offer weekly specials and savings to help stretch your budget. Sign up to be notified when deals go live.",
    image: "/images/weekly-ads.png"
  },
  { 
    icon: <Car className="h-8 w-8" />, 
    title: "GET A RIDE",
    modalTitle: "Transportation Support Coming!",
    modalBody: "We're exploring rideshare partnerships and community transport options to make grocery access easier. Tell us what you'd like to see.",
    image: "/images/get-a-ride.png"
  },
]

export function FeatureStrip() {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null)

  return (
    <>
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <button
                key={feature.title}
                onClick={() => setOpenModalIndex(index)}
                className="flex flex-col items-center justify-center p-4 bg-brand-green rounded-lg hover:bg-[#1f3f18] transition-colors text-white cursor-pointer"
              >
                <div className="mb-2">{feature.icon}</div>
                <span className="text-sm font-semibold text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {feature.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for each feature */}
      {features.map((feature, index) => (
        <Modal
          key={feature.title}
          open={openModalIndex === index}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModalIndex(null)
            }
          }}
          title={feature.modalTitle}
          image={feature.image}
        >
          <p style={{ fontFamily: 'Arial, sans-serif' }}>{feature.modalBody}</p>
        </Modal>
      ))}
    </>
  )
}
