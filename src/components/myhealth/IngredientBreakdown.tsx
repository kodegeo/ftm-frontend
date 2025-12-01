import { Card } from "../Card"
import { cn } from "../../lib/utils"

interface IngredientBreakdownProps {
  ingredients: Array<{
    name: string
    category?: string
    healthImpact?: string
  }>
  className?: string
}

export function IngredientBreakdown({
  ingredients,
  className,
}: IngredientBreakdownProps) {
  return (
    <Card className={cn(className)}>
      <h3 className="text-lg font-semibold mb-4">Ingredient Breakdown</h3>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center justify-between">
            <span>{ingredient.name}</span>
            {ingredient.healthImpact && (
              <span className="text-sm text-muted-foreground">
                {ingredient.healthImpact}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  )
}

