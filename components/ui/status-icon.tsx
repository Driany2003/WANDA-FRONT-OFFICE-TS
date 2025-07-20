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
          bgColor: "bg-purple-600",
          textColor: "text-white",
          borderColor: "border-purple-600"
        }
      case "Cerrado":
        return {
          icon: "icon-cerrado",
          bgColor: "bg-white",
          textColor: "text-purple-600",
          borderColor: "border-purple-600"
        }
      default:
        return {
          icon: "icon-en-proceso",
          bgColor: "bg-gray-100",
          textColor: "text-gray-600",
          borderColor: "border-gray-200"
        }
    }
  }

  const config = getStatusConfig(status)

  return (
    <Badge 
      className={`${config.bgColor} ${config.textColor} ${config.borderColor} border px-3 py-1 rounded-full flex items-center gap-2 ${className}`}
    >
      <svg className="w-4 h-4">
        <use href={`/iconos.svg#${config.icon}`} />
      </svg>
      {status}
    </Badge>
  )
} 