import { MessageSquare } from "lucide-react"
import { Button } from "../ui/button"

export function FeedbackSection() {
  return (
    <section className="bg-[#E8F5E9] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-brand-green/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-brand-green"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Your Voice Shapes Our Store
              </h2>
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Tell us what you want on our shelves. Your feedback directly
                influences our product selection. We're building this store
                with you, for you.
              </p>
            </div>
          </div>
          <Button
            asChild
            className="w-full md:w-auto px-8 py-6 text-base font-semibold"
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
              Share Your Feedback
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

