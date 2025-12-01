import {
  Modal as UIModal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "./ui/modal"
import { Button } from "./ui/button"
import { X } from "lucide-react"

interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  image?: string
  children: React.ReactNode
}

export function Modal({ open, onOpenChange, title, image, children }: ModalProps) {
  return (
    <UIModal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="bg-white">
        {title && (
          <ModalHeader className="p-6 pb-4 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <ModalTitle className="text-2xl font-semibold text-brand-green pr-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                {title}
              </ModalTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange?.(false)}
                className="h-8 w-8 rounded-full hover:bg-gray-100 flex-shrink-0"
              >
                <X className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </ModalHeader>
        )}
        <ModalBody className="p-6">
          {image && (
            <div className="mb-6 flex justify-center">
              <img 
                src={image} 
                alt={title || "Feature illustration"} 
                className="max-w-full h-auto max-h-64 object-contain"
              />
            </div>
          )}
          <div className="text-brand-green leading-relaxed text-base" style={{ fontFamily: 'Arial, sans-serif' }}>
            {children}
          </div>
        </ModalBody>
      </ModalContent>
    </UIModal>
  )
}
