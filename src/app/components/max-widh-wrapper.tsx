import { cn } from "@/utils"
import type { ReactNode } from "react"

interface MaxWidthWrapperProps {
  className?: string
  children: ReactNode
}

export function MaxWidthWrapper({children, className}: MaxWidthWrapperProps) {
  return (
    <div className={cn('h-full mx-auto w-full max-w-screen-lg px-2.5 md:px-20', className) }>
      {children}
    </div>
  )
}