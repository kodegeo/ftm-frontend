import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface AddToCartButtonProps {
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export function AddToCartButton({
  disabled,
  className,
  onClick,
}: AddToCartButtonProps) {
  return (
    <Button
      className={cn(className)}
      disabled={disabled}
      onClick={onClick}
    >
      Add to Cart
    </Button>
  )
}

