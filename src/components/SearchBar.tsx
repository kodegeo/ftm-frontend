import { Input } from "./ui/input"
import { cn } from "../lib/utils"
import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder?: string
  className?: string
  onSearch?: (value: string) => void
}

export function SearchBar({
  placeholder = "Search...",
  className,
  onSearch,
}: SearchBarProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-10"
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  )
}

