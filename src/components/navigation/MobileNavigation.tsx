import { useState } from "react"
import { Link } from "react-router-dom"
import { getVisibleNavigationItems, VisibilityContext } from "../../lib/navigation-rules"
import { cn } from "../../lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"

interface MobileNavigationProps {
  context?: VisibilityContext
  className?: string
}

export function MobileNavigation({ context, className }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const visibleItems = getVisibleNavigationItems(context)

  return (
    <div className={cn("md:hidden", className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">
          <nav className="flex flex-col p-4">
            {visibleItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="py-2 px-4 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

