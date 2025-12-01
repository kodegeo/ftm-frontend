import { HeroSection } from "../components/HeroSection"
import { SectionHeader } from "../components/SectionHeader"
import { CardGrid } from "../components/CardGrid"
import { IngredientBreakdown } from "../components/myhealth/IngredientBreakdown"
import { HealthRiskBadge } from "../components/myhealth/HealthRiskBadge"
import { ConditionTag } from "../components/myhealth/ConditionTag"

export function MyHealth() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection
        title="MyHealth"
        subtitle="Ingredient intelligence and health insights for every product"
      />

      <SectionHeader
        title="Health Insights"
        description="Understand the health impact of ingredients"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <IngredientBreakdown
          ingredients={[
            { name: "Whole Wheat Flour", healthImpact: "High fiber" },
            { name: "Olive Oil", healthImpact: "Heart healthy" },
            { name: "Sea Salt", healthImpact: "Natural source" },
          ]}
        />
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Health Risk Assessment</h3>
            <HealthRiskBadge level="low" label="Low Risk" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Relevant Conditions</h3>
            <div className="flex flex-wrap gap-2">
              <ConditionTag condition="Diabetes" severity="mild" />
              <ConditionTag condition="Heart Disease" severity="moderate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

