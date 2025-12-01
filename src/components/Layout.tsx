import { Outlet, Link } from "react-router-dom"
import { Navigation } from "./navigation/Navigation"
import { MobileNavigation } from "./navigation/MobileNavigation"
import { cn } from "../lib/utils"

interface LayoutProps {
  className?: string
}

export function Layout({ className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/Product Logo.png" 
              alt="Family Tree Food Market" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>
          <div className="hidden md:block">
            <Navigation />
          </div>
          <MobileNavigation />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Family Tree Market. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

