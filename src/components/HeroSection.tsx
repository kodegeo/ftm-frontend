import type { ReactNode } from "react"

export type HeroSectionProps = {
  title: string
  subtitle?: string
  image: string
  children?: ReactNode
}

export function HeroSection({ title, subtitle, image, children }: HeroSectionProps) {
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
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Brand Name */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-cooper leading-tight mb-4"
            style={{ 
              color: '#afe899',
              fontFamily: "'Cooper Black', serif"
            }}
          >
            <span className="block">FAMILY TREE</span>
            <span className="block">FOOD MARKET</span>
          </h1>

          {/* Title (replaces tagline) */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span className="block" style={{ color: 'white' }}>
              {title}
            </span>
          </h2>

          {/* Subtitle (replaces description) */}
          {subtitle && (
            <p
              className="text-base md:text-lg mb-6 max-w-lg leading-relaxed"
              style={{ fontFamily: 'Arial, sans-serif', color: '#afe899' }}
            >
              {subtitle}
            </p>
          )}

          {/* Buttons */}
          {children}
        </div>
      </div>
    </section>
  )
}
