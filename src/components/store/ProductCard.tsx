import { Card } from "../Card"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface ProductCardProps {
  name: string
  price?: string
  image?: string
  description?: string
  className?: string
}

export function ProductCard({
  name,
  price,
  image,
  description,
  className,
}: ProductCardProps) {
  return (
    <Card className={cn(className)}>
      {image && (
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
        {price && (
          <p className="mt-4 text-xl font-bold">{price}</p>
        )}
        <Button className="mt-4 w-full">Add to Cart</Button>
      </div>
    </Card>
  )
}

