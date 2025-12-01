import type { ReactNode } from "react"

type HeroSectionProps = {
  tagline: string
  description: string
  image: string
  children?: ReactNode
}

export function HeroSection({ tagline, description, image, children }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] lg:min-h-[700px]">
      {/* Background image with brightness filter */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${image})`,
          filter: 'brightness(1.2) contrast(1.1) saturate(1.1)'
        }}
      />
      
      {/* Lighter overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <div className="max-w-2xl">
          
          {/* Brand Name - Cooper font, #afe899 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-cooper leading-tight mb-4" style={{ color: '#afe899' }}>
            <span className="block">FAMILY TREE</span>
            <span className="block">FOOD MARKET</span>
          </h1>

          {/* Tagline - Arial, "FRESH" and "HEALTHY" in #f09440, rest in white */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* Line 1: "OFFERS FRESH AND" */}
            <span className="block">
              {tagline.split(" ").slice(0, 3).map((word, index) => {
                const upper = word.toUpperCase()
                const isHighlight = upper === "FRESH"
                
                return (
                  <span
                    key={index}
                    style={{ 
                      color: isHighlight ? '#f09440' : 'white',
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    {word}{index < 2 ? " " : ""}
                  </span>
                )
              })}
            </span>
            {/* Line 2: "HEALTHY FOODS" */}
            <span className="block">
              {tagline.split(" ").slice(3).map((word, index) => {
                const upper = word.toUpperCase()
                const isHighlight = upper === "HEALTHY"
                
                return (
                  <span
                    key={index}
                    style={{ 
                      color: isHighlight ? '#f09440' : 'white',
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    {word}{index < tagline.split(" ").slice(3).length - 1 ? " " : ""}
                  </span>
                )
              })}
            </span>
          </h2>

          {/* Description - Arial, #afe899 */}
          <p className="text-base md:text-lg mb-6 max-w-lg leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', color: '#afe899' }}>
            {description}
          </p>

          {/* Buttons */}
          {children}
        </div>
      </div>
    </section>
  )
}
