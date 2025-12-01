import { Card } from "../Card"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface EventCardProps {
  title: string
  date?: string
  location?: string
  description?: string
  className?: string
}

export function EventCard({
  title,
  date,
  location,
  description,
  className,
}: EventCardProps) {
  return (
    <Card className={cn(className)}>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {date && (
          <p className="mt-2 text-sm text-muted-foreground">Date: {date}</p>
        )}
        {location && (
          <p className="text-sm text-muted-foreground">Location: {location}</p>
        )}
        {description && (
          <p className="mt-2 text-sm">{description}</p>
        )}
        <Button className="mt-4">Learn More</Button>
      </div>
    </Card>
  )
}

