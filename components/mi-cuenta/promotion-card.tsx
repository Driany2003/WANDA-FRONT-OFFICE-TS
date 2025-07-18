"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import type { PromotionCardData } from "@/types"

interface PromotionCardProps extends PromotionCardData {
  onViewDetails: (promotion: PromotionCardData) => void
}

export function PromotionCard({ title, image, details, onViewDetails }: PromotionCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          onClick={() => onViewDetails({ title, image, details, id: details.id })}
        >
          Ver información
        </Button>
      </div>
    </Card>
  )
}
