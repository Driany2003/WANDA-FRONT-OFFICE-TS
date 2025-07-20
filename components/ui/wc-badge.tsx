"use client"

interface WcBadgeProps {
  value: number
  className?: string
}

export function WcBadge({ value, className = "" }: WcBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full ${className}`}>
      <svg className="w-4 h-4">
        <use href="/iconos.svg#icon-wc" />
      </svg>
      <span className="font-medium">{value}</span>
    </div>
  )
} 