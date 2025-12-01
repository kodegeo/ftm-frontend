import { Card } from "../Card"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface Product {
  id: string
  name: string
  price: string
  image?: string
}

const products: Product[] = [
  { id: "1", name: "Chicken Deli Jumbo Pk", price: "$12.99", image: "/images/chicken-pk.jpg" },
  { id: "2", name: "Leg Loin Steak", price: "$18.99", image: "/images/loin-steak.jpg" },
  { id: "3", name: "Corn Yellow", price: "$3.99", image: "/images/corn-yellow.jpg" },
  { id: "4", name: "Grapes", price: "$5.99", image: "/images/grapes.jpg" },
  { id: "5", name: "Organic Red Tomato", price: "$4.99" },
  { id: "6", name: "Orange", price: "$2.99" },
  { id: "7", name: "Organic Red Stock", price: "$6.99" },
  { id: "8", name: "Banana Juice", price: "$3.99" },
]

export function RecommendationsCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 4

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage)

  const next = () => {
    setStartIndex((prev) => Math.min(prev + itemsPerPage, products.length - itemsPerPage))
  }

  const prev = () => {
    setStartIndex((prev) => Math.max(0, prev - itemsPerPage))
  }

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-brand-green" style={{ fontFamily: 'Arial, sans-serif' }}>
            Recommendations
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={startIndex >= products.length - itemsPerPage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <Card key={product.id} className="p-4">
              <div className="aspect-square bg-gray-200 rounded mb-2 flex items-center justify-center">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
                ) : (
                  <span className="text-gray-400 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>Image</span>
                )}
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                {product.name}
              </h3>
              <p className="text-brand-green font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
                {product.price}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

