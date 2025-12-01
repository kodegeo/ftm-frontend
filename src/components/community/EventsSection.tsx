import { Calendar, MapPin } from "lucide-react"
import { Card } from "../Card"
import { Button } from "../ui/button"
import { CardGrid } from "../CardGrid"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image?: string
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Grand Opening Celebration",
    date: "TBD",
    time: "TBD",
    location: "1850 Centre Ave.",
    description: "Join us for food samples, live music, and meet your neighbors. We're officially open!",
    image: "/images/grand-opening.png",
  },
  {
    id: "2",
    title: "Cooking Demo: Healthy Family Meals",
    date: "TBD",
    time: "TBD",
    location: "Community Kitchen",
    description: "Learn quick, budget-friendly recipes that your whole family will love.",
    image: "/images/cooking-demo.png",
  },
  {
    id: "3",
    title: "Local Vendor Showcase",
    date: "TBD",
    time: "TBD",
    location: "Store Parking Lot",
    description: "Meet the local farmers and makers who supply our store. Free samples and special deals!",
    image: "/images/vendor-showcase.png",
  },
  {
    id: "4",
    title: "Community Garden Planning Session",
    date: "TBD",
    time: "TBD",
    location: "Community Center",
    description: "Help us plan our community garden. All community skill levels are welcomed!",
    image: "/images/community-gardening.png",
  },
]

export function EventsSection() {
  return (
    <section id="events" className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-brand-green text-center"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          What's Happening in the Hill District?
        </h2>
        <p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Join us for events, workshops, and community gatherings. All are welcome!
        </p>

        <CardGrid columns={4} className="gap-6">
          {mockEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden h-full flex flex-col">
              <div className="aspect-video bg-gray-200 relative">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-green/20 to-brand-green/5">
                    <Calendar className="h-12 w-12 text-brand-green/40" />
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3
                  className="text-xl font-bold mb-3 text-brand-green"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span style={{ fontFamily: "Arial, sans-serif" }}>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span style={{ fontFamily: "Arial, sans-serif" }}>
                      {event.location}
                    </span>
                  </div>
                  <p
                    className="text-sm text-gray-700 mt-3"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {event.description}
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full mt-auto"
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
                    RSVP
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </CardGrid>
      </div>
    </section>
  )
}

