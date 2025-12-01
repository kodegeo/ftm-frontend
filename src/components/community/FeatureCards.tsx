import { HeartHandshake, Sprout, Sparkles, Users } from "lucide-react"
import { Card } from "../Card"
import { CardGrid } from "../CardGrid"

export function FeatureCards() {
  const features = [
    {
      icon: HeartHandshake,
      title: "Healthy Food for Every Household",
      body: "Fresh, familiar foods that fit real family budgets and everyday life.",
    },
    {
      icon: Sprout,
      title: "Supporting Local Growers & Makers",
      body: "Spotlighting farms, cooks, and creators from right here in our region.",
    },
    {
      icon: Sparkles,
      title: "Better Choices, Made Easy",
      body: "Simple labels, helpful suggestions, and meals that feel doable.",
    },
    {
      icon: Users,
      title: "Community at the Center",
      body: "Listening first, then building a store that reflects the Hill District.",
    },
  ]

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold mb-6 text-brand-green"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Our Promise to the Community
        </h2>
        <CardGrid columns={4} className="gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 h-full flex flex-col bg-[#F8FAF5]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E4F2E3] text-brand-green">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3
                className="text-lg font-semibold mb-2 text-brand-green"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {feature.body}
              </p>
            </Card>
          ))}
        </CardGrid>
      </div>
    </section>
  )
}


