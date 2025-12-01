import { cn } from "../../lib/utils"

interface ConditionTagProps {
  condition: string
  severity?: "mild" | "moderate" | "severe"
  className?: string
}

export function ConditionTag({
  condition,
  severity,
  className,
}: ConditionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-sm font-medium bg-secondary text-secondary-foreground",
        className
      )}
    >
      {condition}
      {severity && (
        <span className="ml-2 text-xs text-muted-foreground">
          ({severity})
        </span>
      )}
    </span>
  )
}

