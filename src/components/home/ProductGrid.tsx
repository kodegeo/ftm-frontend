import { useState } from "react"
import { Card } from "../Card"
import { Button } from "../ui/button"
import { Heart } from "lucide-react"
import { Modal } from "../Modal"

interface Product {
  id: string
  name: string
  description: string
  price: string
  rating?: number
  image?: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Fresh Orange Juice",
    description: "100% pure orange juice",
    price: "$4.99",
    rating: 4.5,
    image: "/images/orange-juice.jpg",
  },
  {
    id: "2",
    name: "Chai Original Concentrate",
    description: "Makes great tasting chai tea",
    price: "$7.99",
    rating: 4.8,
    image: "/images/chai-tea.jpeg",
  },
  {
    id: "3",
    name: "Medium Roast Coffee",
    description: "Fresh roasted coffee beans",
    price: "$12.99",
    rating: 4.7,
    image: "/images/ground-coffee.jpeg",
  },
  {
    id: "4",
    name: "Frozen Organic Strawberries",
    description: "Great for smoothies and toppings",
    price: "$7.99",
    rating: 4.6,
    image: "/images/organic-strawberry-smoothie.jpeg",
  },
]

export function ProductGrid() {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null)

  return (
    <>
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square bg-gray-200 relative">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400" style={{ fontFamily: 'Arial, sans-serif' }}>Product Image</span>
                    </div>
                  )}
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-100">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {product.name}
                  </h3>
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                        {product.rating}
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-green" style={{ fontFamily: 'Arial, sans-serif' }}>
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-brand-green hover:bg-[#1f3f18] text-white"
                      style={{ fontFamily: 'Arial, sans-serif' }}
                      onClick={() => setOpenModalIndex(index)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Order Now - same as FeatureStrip */}
      {products.map((product, index) => (
        <Modal
          key={product.id}
          open={openModalIndex === index}
          onOpenChange={(open) => {
            if (!open) {
              setOpenModalIndex(null)
            }
          }}
          title="Online Ordering Coming Soon!"
          image="/images/order-now.png"
        >
          <p style={{ fontFamily: 'Arial, sans-serif' }}>
            You'll be able to order fresh groceries for pickup or delivery once the store opens. Join our community list to get notified when online ordering launches.
          </p>
        </Modal>
      ))}
    </>
  )
}
