import { Card } from "../Card"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface SurveyCardProps {
  title: string
  description?: string
  responses?: number
  className?: string
}

export function SurveyCard({
  title,
  description,
  responses,
  className,
}: SurveyCardProps) {
  return (
    <Card className={cn(className)}>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
        {responses !== undefined && (
          <p className="mt-2 text-sm text-muted-foreground">
            {responses} responses
          </p>
        )}
        <Button className="mt-4 w-full">Take Survey</Button>
      </div>
    </Card>
  )
}

