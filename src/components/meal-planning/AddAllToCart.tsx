import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface AddAllToCartProps {
  itemCount?: number
  className?: string
  onClick?: () => void
}

export function AddAllToCart({
  itemCount,
  className,
  onClick,
}: AddAllToCartProps) {
  return (
    <Button className={cn(className)} onClick={onClick}>
      Add All to Cart {itemCount ? `(${itemCount} items)` : ""}
    </Button>
  )
}

