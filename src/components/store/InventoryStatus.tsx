import { cn } from "../../lib/utils"

interface InventoryStatusProps {
  inStock: boolean
  quantity?: number
  className?: string
}

export function InventoryStatus({
  inStock,
  quantity,
  className,
}: InventoryStatusProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "h-2 w-2 rounded-full",
          inStock ? "bg-green-500" : "bg-red-500"
        )}
      />
      <span className="text-sm">
        {inStock
          ? quantity
            ? `${quantity} in stock`
            : "In stock"
          : "Out of stock"}
      </span>
    </div>
  )
}

