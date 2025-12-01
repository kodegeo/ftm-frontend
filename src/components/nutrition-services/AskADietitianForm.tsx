import { Card } from "../Card"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { cn } from "../../lib/utils"

interface AskADietitianFormProps {
  className?: string
  onSubmit?: (data: Record<string, unknown>) => void
}

export function AskADietitianForm({
  className,
  onSubmit,
}: AskADietitianFormProps) {
  return (
    <Card className={cn(className)}>
      <h3 className="text-lg font-semibold mb-4">Ask a Dietitian</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit?.({})
        }}
        className="space-y-4"
      >
        <div>
          <label className="text-sm font-medium">Your Question</label>
          <Textarea placeholder="Enter your question..." rows={4} />
        </div>
        <Button type="submit" className="w-full">
          Submit Question
        </Button>
      </form>
    </Card>
  )
}

