import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"

const recentItems = [
  { id: "1", name: "Cucumbers", image: "/images/cucumber-slices-01.jpg" },
  { id: "2", name: "Tomatoes", image: "/images/tomatoes-01.jpg" },
  { id: "3", name: "Bananas", image: "/images/bananas-01.jpg" },
  { id: "4", name: "Green Onions", image: "/images/green-onion-01.jpg" },
  { id: "5", name: "Yellow Peppers", image: "/images/yellow-pepper-01.jpg" },
  { id: "6", name: "Grapes", image: "/images/grapes.jpg" },
  { id: "7", name: "Apples", image: "/images/apple-01.jpg" },
  { id: "8", name: "Blackberries", image: "/images/blackberries-01.jpg" },
]

export function RecentViewed() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 6

  const visibleItems = recentItems.slice(startIndex, startIndex + itemsPerPage)

  const next = () => {
    setStartIndex((prev) => Math.min(prev + 1, recentItems.length - itemsPerPage))
  }

  const prev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-brand-green" style={{ fontFamily: 'Arial, sans-serif' }}>
          Your Recent Viewed
        </h2>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            disabled={startIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-4 overflow-hidden flex-1">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden relative group"
              >
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-center text-gray-600 px-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                      {item.name}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            disabled={startIndex >= recentItems.length - itemsPerPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

