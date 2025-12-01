import { Card } from "../Card"
import { cn } from "../../lib/utils"

interface SubstituteRecommendationsProps {
  substitutes: Array<{
    id: string
    name: string
    reason?: string
  }>
  className?: string
}

export function SubstituteRecommendations({
  substitutes,
  className,
}: SubstituteRecommendationsProps) {
  return (
    <Card className={cn(className)}>
      <h3 className="text-lg font-semibold mb-4">Suggested Substitutes</h3>
      <ul className="space-y-2">
        {substitutes.map((substitute) => (
          <li key={substitute.id} className="flex items-center justify-between">
            <span>{substitute.name}</span>
            {substitute.reason && (
              <span className="text-sm text-muted-foreground">
                {substitute.reason}
              </span>
            )}
          )}
        </li>
      ))}
    </Card>
  )
}

