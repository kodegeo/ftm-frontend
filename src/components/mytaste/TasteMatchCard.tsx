import { Card } from "../Card"
import { cn } from "../../lib/utils"

interface TasteMatchCardProps {
  productName: string
  matchScore: number
  reason?: string
  className?: string
}

export function TasteMatchCard({
  productName,
  matchScore,
  reason,
  className,
}: TasteMatchCardProps) {
  return (
    <Card className={cn(className)}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">{productName}</h3>
        <span className="text-sm font-medium">{matchScore}% match</span>
      </div>
      {reason && (
        <p className="text-sm text-muted-foreground">{reason}</p>
      )}
    </Card>
  )
}

