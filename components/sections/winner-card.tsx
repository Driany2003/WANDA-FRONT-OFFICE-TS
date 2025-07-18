"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import type { WinnerData } from "@/types"

interface WinnerCardProps {
  winner: WinnerData
}

export function WinnerCard({ winner }: WinnerCardProps) {
  return (
    <Card className="w-full max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="relative w-20 h-20 mb-4">
          <Image
            src={winner.avatar || "/placeholder.svg"}
            alt={winner.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-purple-500"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{winner.name}</h3>
        <div className="flex items-center justify-center text-gray-600 mb-3">
          <Quote className="w-4 h-4 mr-1 text-purple-600" />
          <p className="text-sm italic">{winner.quote}</p>
        </div>
        <p className="text-xs text-gray-500">{winner.date}</p>
      </CardContent>
    </Card>
  )
}
