import { Card } from "../Card"
import { cn } from "../../lib/utils"

interface MealPlannerCalendarProps {
  className?: string
}

export function MealPlannerCalendar({
  className,
}: MealPlannerCalendarProps) {
  return (
    <Card className={cn(className)}>
      <h3 className="text-lg font-semibold mb-4">Meal Planner</h3>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square border rounded-md p-2 text-center text-sm"
          >
            Day {i + 1}
          </div>
        ))}
      </div>
    </Card>
  )
}

