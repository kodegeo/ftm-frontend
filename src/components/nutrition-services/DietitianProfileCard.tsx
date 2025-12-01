import { Card } from "../Card"
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface DietitianProfileCardProps {
  name: string
  credentials?: string
  specialties?: string[]
  image?: string
  className?: string
}

export function DietitianProfileCard({
  name,
  credentials,
  specialties,
  image,
  className,
}: DietitianProfileCardProps) {
  return (
    <Card className={cn(className)}>
      {image && (
        <img
          src={image}
          alt={name}
          className="h-32 w-full object-cover rounded-t-lg"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {credentials && (
          <p className="text-sm text-muted-foreground">{credentials}</p>
        )}
        {specialties && specialties.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
              >
                {specialty}
              </span>
            ))}
          </div>
        )}
        <Button className="mt-4 w-full">Book Appointment</Button>
      </div>
    </Card>
  )
}

