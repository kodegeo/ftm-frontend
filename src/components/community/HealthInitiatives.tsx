import { Apple, BookOpen, Users } from "lucide-react"
import { Card } from "../Card"
import { CardGrid } from "../CardGrid"

const initiatives = [
  {
    icon: Apple,
    title: "Healthy Starts Here",
    description:
      "Simple tips and recipes to help your family eat well without the stress. We make healthy choices feel natural.",
  },
  {
    icon: BookOpen,
    title: "Nutrition Guidance",
    description:
      "Friendly support from our team. Ask questions, get meal ideas, and find foods that work for your lifestyle.",
  },
  {
    icon: Users,
    title: "Community Food Education",
    description:
      "Free workshops and cooking demos. Learn new skills, share recipes, and connect with neighbors.",
  },
]

export function HealthInitiatives() {
  return (
    <section className="bg-[#F8FAF5] py-16 px-4">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-brand-green text-center"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Community Health & Wellness
        </h2>
        <p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          We're here to support your family's health journey with practical,
          friendly resources.
        </p>

        <CardGrid columns={3} className="gap-6">
          {initiatives.map((initiative) => (
            <Card
              key={initiative.title}
              className="p-8 h-full flex flex-col bg-white border-2 border-brand-green/10"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#E4F2E3] text-brand-green">
                <initiative.icon className="h-8 w-8" />
              </div>
              <h3
                className="text-xl font-bold mb-4 text-brand-green"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {initiative.title}
              </h3>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {initiative.description}
              </p>
            </Card>
          ))}
        </CardGrid>
      </div>
    </section>
  )
}

