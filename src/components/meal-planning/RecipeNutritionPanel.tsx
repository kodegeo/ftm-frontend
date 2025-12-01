import { Card } from "../Card"
import { cn } from "../../lib/utils"

interface RecipeNutritionPanelProps {
  nutrition: {
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    fiber?: number
  }
  className?: string
}

export function RecipeNutritionPanel({
  nutrition,
  className,
}: RecipeNutritionPanelProps) {
  return (
    <Card className={cn(className)}>
      <h3 className="text-lg font-semibold mb-4">Nutrition Information</h3>
      <div className="space-y-2">
        {nutrition.calories && (
          <div className="flex justify-between">
            <span>Calories</span>
            <span className="font-medium">{nutrition.calories}</span>
          </div>
        )}
        {nutrition.protein && (
          <div className="flex justify-between">
            <span>Protein</span>
            <span className="font-medium">{nutrition.protein}g</span>
          </div>
        )}
        {nutrition.carbs && (
          <div className="flex justify-between">
            <span>Carbs</span>
            <span className="font-medium">{nutrition.carbs}g</span>
          </div>
        )}
        {nutrition.fat && (
          <div className="flex justify-between">
            <span>Fat</span>
            <span className="font-medium">{nutrition.fat}g</span>
          </div>
        )}
        {nutrition.fiber && (
          <div className="flex justify-between">
            <span>Fiber</span>
            <span className="font-medium">{nutrition.fiber}g</span>
          </div>
        )}
      </div>
    </Card>
  )
}

