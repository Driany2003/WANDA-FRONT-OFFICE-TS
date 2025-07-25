"use client"

import { Badge } from "@/components/ui/badge"

interface StatusIconProps {
  status: string
  className?: string
}

export function StatusIcon({ status, className = "" }: StatusIconProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "En proceso":
        return {
          icon: "icon-en-proceso",
          bgColor: "bg-[#6137E5]",
          textColor: "text-[#FBFBFB]",
          borderColor: "border-[#6137E5]",
          hoverBgColor: "hover:bg-[#4A2BB8]",
          hoverBorderColor: "hover:border-[#4A2BB8]"
        }
      case "Cerrado":
        return {
          icon: "icon-cerrado",
          bgColor: "bg-[#FBFBFB]",
          textColor: "text-[#6137E5]",
          borderColor: "border-[#6137E5]",
          hoverBgColor: "hover:bg-[#6137E5]",
          hoverTextColor: "hover:text-[#FBFBFB]",
          hoverBorderColor: "hover:border-[#6137E5]"
        }
      default:
        return {
          icon: "icon-en-proceso",
          bgColor: "bg-gray-100",
          textColor: "text-gray-600",
          borderColor: "border-gray-200",
          hoverBgColor: "hover:bg-gray-200",
          hoverBorderColor: "hover:border-gray-300"
        }
    }
  }

  const config = getStatusConfig(status)

  return (
    <Badge 
      className={`${config.bgColor} ${config.textColor} ${config.borderColor} ${config.hoverBgColor} ${config.hoverBorderColor} ${config.hoverTextColor || ''} border px-3 py-1 rounded-full flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${className}`}
    >
      <svg className="w-4 h-4">
        <use href={`/iconos.svg#${config.icon}`} />
      </svg>
      <span className="text-center font-medium">{status}</span>
    </Badge>
  )
} 