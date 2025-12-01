import * as React from "react"
import { cn } from "../../lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./card"

interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface ModalContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const ModalContext = React.createContext<ModalContextValue | undefined>(undefined)

const Modal = ({ open = false, onOpenChange, children }: ModalProps) => {
  const [internalOpen, setInternalOpen] = React.useState(open)
  const isOpen = open !== undefined ? open : internalOpen
  const handleOpenChange = onOpenChange || setInternalOpen

  React.useEffect(() => {
    if (open !== undefined) {
      setInternalOpen(open)
    }
  }, [open])

  if (!isOpen) return null

  return (
    <ModalContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/70"
          onClick={() => handleOpenChange(false)}
        />
        <div className="relative z-50 w-full max-w-md">{children}</div>
      </div>
    </ModalContext.Provider>
  )
}

const ModalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card 
    ref={ref} 
    className={cn(
      "w-full bg-white rounded-2xl shadow-2xl border-0",
      "max-w-[480px] mx-auto",
      className
    )} 
    style={{
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    }}
    {...props} 
  />
))
ModalContent.displayName = "ModalContent"

const ModalHeader = CardHeader
const ModalTitle = CardTitle
const ModalBody = CardContent

export { Modal, ModalContent, ModalHeader, ModalTitle, ModalBody }

