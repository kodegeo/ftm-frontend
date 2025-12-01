import { Card } from "../Card"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface RecipeCardProps {
  title: string
  image?: string
  prepTime?: string
  servings?: number
  className?: string
}

export function RecipeCard({
  title,
  image,
  prepTime,
  servings,
  className,
}: RecipeCardProps) {
  return (
    <Card className={cn(className)}>
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
          {prepTime && <span>{prepTime}</span>}
          {servings && <span>{servings} servings</span>}
        </div>
        <Button className="mt-4 w-full">View Recipe</Button>
      </div>
    </Card>
  )
}

