import { Button } from "../ui/button"
import { Mail } from "lucide-react"

export function NewsletterStrip() {
  return (
    <section
      className="py-12 px-4"
      style={{ backgroundColor: "#2C5923" }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Mail className="h-6 w-6 text-white" />
          <h2
            className="text-2xl md:text-3xl font-bold text-white"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Stay Connected with Family Tree
          </h2>
        </div>
        <p
          className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Get updates on events, store progress, and opening announcements.
          Join our community list today!
        </p>
        <Button
          asChild
          className="px-8 py-6 text-base font-semibold"
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
      </div>
    </section>
  )
}

