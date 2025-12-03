import { useState } from "react"
import { Link } from "react-router-dom"
import { getVisibleNavigationItems } from "../../lib/navigation-rules"
import type { VisibilityContext } from "../../lib/navigation-rules"
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
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <nav className="flex flex-col p-4">
            {visibleItems.map((item) => {
              const isStoreOrCommunity = item.label === "Store" || item.label === "MyCommunity"
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`py-3 px-4 text-base font-medium transition-colors ${
                    isStoreOrCommunity 
                      ? "text-brand-green hover:text-brand-green/80 font-semibold" 
                      : "text-gray-700 hover:text-primary"
                  }`}
                  style={{ fontFamily: 'Arial, sans-serif' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}

