import { Link } from "react-router-dom"
import { getVisibleNavigationItems } from "../../lib/navigation-rules"
import type { VisibilityContext } from "../../lib/navigation-rules"
import { cn } from "../../lib/utils"

interface NavigationProps {
  context?: VisibilityContext
  className?: string
}

export function Navigation({ context, className }: NavigationProps) {
  const visibleItems = getVisibleNavigationItems(context)

  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {visibleItems.map((item) => {
        const isHighlighted = item.label === "Store" || item.label === "MyCommunity"
        return (
          <Link
            key={item.id}
            to={item.path}
            className="text-sm font-medium transition-colors hover:text-primary"
            style={isHighlighted ? { color: '#2c5923' } : {}}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
