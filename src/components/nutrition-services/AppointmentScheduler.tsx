import { Card } from "../Card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { cn } from "../../lib/utils"

interface AppointmentSchedulerProps {
  className?: string
  onSubmit?: (data: Record<string, unknown>) => void
}

export function AppointmentScheduler({
  className,
  onSubmit,
}: AppointmentSchedulerProps) {
  return (
    <Card className={cn(className)}>
      <h3 className="text-lg font-semibold mb-4">Schedule Appointment</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit?.({})
        }}
        className="space-y-4"
      >
        <div>
          <label className="text-sm font-medium">Date</label>
          <Input type="date" />
        </div>
        <div>
          <label className="text-sm font-medium">Time</label>
          <Input type="time" />
        </div>
        <Button type="submit" className="w-full">
          Schedule
        </Button>
      </form>
    </Card>
  )
}

