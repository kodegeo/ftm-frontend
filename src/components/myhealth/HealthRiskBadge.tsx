import { cn } from "../../lib/utils"

interface HealthRiskBadgeProps {
  level: "low" | "medium" | "high"
  label?: string
  className?: string
}

export function HealthRiskBadge({
  level,
  label,
  className,
}: HealthRiskBadgeProps) {
  const styles = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        styles[level],
        className
      )}
    >
      {label || `${level} risk`}
    </span>
  )
}

