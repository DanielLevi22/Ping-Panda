import { cn } from "@/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
  children: ReactNode
}
export function Heading({className,children,...props}:HeadingProps) {
  return(
    <h1 className={cn("text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tighter text-zinc-800",className)}    {...props}>
      {children}
    </h1>
  )
}