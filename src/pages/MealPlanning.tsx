import { HeroSection } from "../components/HeroSection"
import { SectionHeader } from "../components/SectionHeader"
import { CardGrid } from "../components/CardGrid"
import { RecipeCard } from "../components/meal-planning/RecipeCard"
import { RecipeNutritionPanel } from "../components/meal-planning/RecipeNutritionPanel"
import { MealPlannerCalendar } from "../components/meal-planning/MealPlannerCalendar"
import { AddAllToCart } from "../components/meal-planning/AddAllToCart"

export function MealPlanning() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection
        title="Meal Planning"
        subtitle="Plan your meals with recipes and grocery integration"
        image="/images/meal-planning.png"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <MealPlannerCalendar />
        </div>
        <div>
          <RecipeNutritionPanel
            nutrition={{
              calories: 450,
              protein: 25,
              carbs: 50,
              fat: 15,
              fiber: 8,
            }}
          />
        </div>
      </div>

      <SectionHeader
        title="Featured Recipes"
        description="Discover new recipes to add to your meal plan"
      />

      <CardGrid columns={3}>
        <RecipeCard
          title="Mediterranean Quinoa Bowl"
          prepTime="30 min"
          servings={4}
        />
        <RecipeCard
          title="Grilled Salmon with Vegetables"
          prepTime="25 min"
          servings={2}
        />
        <RecipeCard
          title="Vegetarian Stir Fry"
          prepTime="20 min"
          servings={3}
        />
      </CardGrid>

      <div className="mt-8 flex justify-center">
        <AddAllToCart itemCount={12} />
      </div>
    </div>
  )
}


