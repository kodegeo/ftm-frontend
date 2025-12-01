import { Card } from "../Card"
import { cn } from "../../lib/utils"

interface TasteProfileChartProps {
  profile?: {
    sweet?: number
    salty?: number
    sour?: number
    bitter?: number
    umami?: number
  }
  className?: string
}

export function TasteProfileChart({
  profile,
  className,
}: TasteProfileChartProps) {
  const defaultProfile = {
    sweet: 50,
    salty: 50,
    sour: 50,
    bitter: 50,
    umami: 50,
  }

  const data = profile || defaultProfile

  return (
    <Card className={cn(className)}>
      <h3 className="text-lg font-semibold mb-4">Taste Profile</h3>
      <div className="space-y-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <div className="flex justify-between mb-1">
              <span className="text-sm capitalize">{key}</span>
              <span className="text-sm">{value}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

