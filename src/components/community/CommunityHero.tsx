import { Button } from "../ui/button"

interface CommunityHeroProps {
  onScrollToEvents?: () => void
}

export function CommunityHero({ onScrollToEvents }: CommunityHeroProps) {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/community-hero-placeholder.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl text-white">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-cooper mb-4 leading-tight"
            style={{ color: "#afe899" }}
          >
            Welcome to the Family Tree Community
          </h1>
          <p
            className="text-base md:text-lg mb-8 max-w-xl"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Where neighbors, food, and culture come together in the Hill
            District.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="px-6 py-3 text-base font-semibold"
              style={{
                backgroundColor: "#f09440",
                color: "white",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfakcuPuXv_OX6gmHOV0vH5JJrcHUayHUPHkAFZVnCQ-UzuJA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Newsletter
              </a>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-3 text-base font-semibold border-white text-white bg-white/10 hover:bg-white/20"
              style={{ fontFamily: "Arial, sans-serif" }}
              onClick={onScrollToEvents}
            >
              Upcoming Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


