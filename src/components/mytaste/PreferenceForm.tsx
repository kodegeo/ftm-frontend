import { Card } from "../Card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { cn } from "../../lib/utils"

interface PreferenceFormProps {
  onSubmit?: (data: Record<string, unknown>) => void
  className?: string
}

export function PreferenceForm({
  onSubmit,
  className,
}: PreferenceFormProps) {
  return (
    <Card className={cn(className)}>
      <h3 className="text-lg font-semibold mb-4">Update Preferences</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit?.({})
        }}
        className="space-y-4"
      >
        <div>
          <label className="text-sm font-medium">Sweetness</label>
          <Input type="range" min="0" max="100" defaultValue="50" />
        </div>
        <div>
          <label className="text-sm font-medium">Saltiness</label>
          <Input type="range" min="0" max="100" defaultValue="50" />
        </div>
        <Button type="submit" className="w-full">
          Save Preferences
        </Button>
      </form>
    </Card>
  )
}

