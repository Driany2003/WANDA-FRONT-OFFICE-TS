"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { ResultCardData } from "@/types"

interface ResultCardProps {
  result: ResultCardData
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <Card className="w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-3">
          <Image
            src={result.image || "/placeholder.svg"}
            alt={result.title}
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <h3 className="text-md font-semibold text-gray-900 mb-1">{result.title}</h3>
        <p className="text-sm text-gray-700 font-bold mb-2">{result.amount}</p>
        {result.time && <p className="text-xs text-gray-500">{result.time}</p>}
      </CardContent>
    </Card>
  )
}
