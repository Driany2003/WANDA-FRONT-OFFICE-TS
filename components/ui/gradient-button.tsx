"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function GradientButton({ 
  children, 
  onClick, 
  className = "", 
  disabled = false,
  type = "button"
}: GradientButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-gradient-to-r from-[#DB086E] to-[#3A05DF] text-[#FBFBFB] font-semibold text-sm w-[138px] h-[40px] rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </Button>
  )
} 