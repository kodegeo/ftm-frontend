import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"

interface ProgressUpdate {
  id: string
  title: string
  image?: string
}

const updates: ProgressUpdate[] = [
  {
    id: "1",
    title: "Flooring Installed",
    image: "/images/progress-placeholder-1.jpg",
  },
  {
    id: "2",
    title: "Refrigeration Setup",
    image: "/images/progress-placeholder-2.jpg",
  },
  {
    id: "3",
    title: "Produce Section Taking Shape",
    image: "/images/progress-placeholder-3.jpg",
  },
  {
    id: "4",
    title: "Checkout Counters Installed",
    image: "/images/progress-placeholder-4.jpg",
  },
  {
    id: "5",
    title: "Lighting & Signage Up",
    image: "/images/progress-placeholder-5.jpg",
  },
  {
    id: "6",
    title: "Final Touches",
    image: "/images/progress-placeholder-6.jpg",
  },
]

export function ProgressUpdates() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerView = 3

  const visibleUpdates = updates.slice(startIndex, startIndex + itemsPerView)

  const next = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, updates.length - itemsPerView)
    )
  }

  const prev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-brand-green text-center"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Building Progress
        </h2>
        <p
          className="text-center text-gray-600 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Watch our store come together. We're getting closer to opening day!
        </p>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            disabled={startIndex === 0}
            className="flex-shrink-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {visibleUpdates.map((update) => (
              <div
                key={update.id}
                className="rounded-lg overflow-hidden shadow-md bg-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-brand-green/20 to-brand-green/5 relative">
                  {update.image ? (
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">🏗️</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white">
                  <h3
                    className="text-sm font-semibold text-brand-green text-center"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {update.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            disabled={startIndex >= updates.length - itemsPerView}
            className="flex-shrink-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

