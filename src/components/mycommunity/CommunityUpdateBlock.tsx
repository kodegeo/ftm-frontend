import { Card } from "../Card"
import { cn } from "../../lib/utils"

interface CommunityUpdateBlockProps {
  title: string
  content: string
  date?: string
  className?: string
}

export function CommunityUpdateBlock({
  title,
  content,
  date,
  className,
}: CommunityUpdateBlockProps) {
  return (
    <Card className={cn(className)}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {date && (
            <span className="text-sm text-muted-foreground">{date}</span>
          )}
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </Card>
  )
}

