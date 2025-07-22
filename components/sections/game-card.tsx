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
                className="w-[319px] h-[200px] mx-auto overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        fill
                        className="object-cover w-full h-full"
                    />
                    {/* Título en la cabecera */}
                    <div className="absolute top-0 left-0 right-0 bg-[#FEFEFE] text-[#333333] px-3 py-2">
                        <h3 className="text-base font-medium">{game.title}</h3>
                    </div>
                    {game.type === "animalitos" && game.nextDrawTime && (
                        <div
                            className="absolute bottom-2 left-2 bg-white text-[#890277] text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium">
                            <Clock className="w-3 h-3"/>
                            Próximo sorteo {game.nextDrawTime}
                        </div>
                    )}
                    {game.type === "contest" && game.liveStatus && (
                        <div
                            className="absolute bottom-2 left-2 bg-white text-[#890277] text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium">
                            <Play className="w-3 h-3"/>
                            En vivo
                        </div>
                    )}
                </div>
            </Card>
        </Link>
    )
}
