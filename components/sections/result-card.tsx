"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { ResultCardData } from "@/types"

interface ResultCardProps {
  result: ResultCardData
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <Card className="w-[204px] h-[200px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={result.image || "/placeholder.svg"}
          alt={result.title}
          fill
          className="object-cover w-full h-full"
        />
        {/* Título en la cabecera */}
        <div className="absolute top-0 left-0 right-0 bg-[#FEFEFE] text-[#333333] px-3 py-2">
          <h3 className="text-base font-medium">{result.title}</h3>
        </div>
        {result.time && (
          <div className="absolute bottom-2 left-2 bg-white text-[#890277] text-xs px-3 py-1 rounded-full font-medium">
            {result.time}
          </div>
        )}
      </div>
    </Card>
  )
}
