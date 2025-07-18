"use client"

import Image from "next/image"
import {Card, CardContent} from "@/components/ui/card"
import {Users, Clock, Play} from "lucide-react"
import type {GameCardData} from "@/types"
import Link from "next/link"

interface GameCardProps {
    game: GameCardData,
    onConcursar?: () => void
}

export function GameCard({game, onConcursar}: GameCardProps) {
    return (
        <Link href={`/concursos/${game.id}`} className="block">
            <Card
                className="w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative w-full h-40 overflow-hidden">
                    <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        fill
                        className="object-cover w-full h-full"
                    />
                    {game.type === "animalitos" && game.nextDrawTime && (
                        <div
                            className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3"/>
                            Próximo sorteo {game.nextDrawTime}
                        </div>
                    )}
                    {game.type === "contest" && game.liveStatus && (
                        <div
                            className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                            <Play className="w-3 h-3"/>
                            {game.liveStatus}
                        </div>
                    )}
                </div>
                <CardContent className="p-4 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{game.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-3">
                        <Users className="w-4 h-4 mr-2"/>
                        <span>{game.participants} participantes</span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
