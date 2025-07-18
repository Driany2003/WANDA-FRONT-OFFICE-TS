"use client"
import { usePathname } from "next/navigation"
import { SidebarNav } from "./sidebar-nav"
import Link from "next/link"
import Image from "next/image"
import { Home, Trophy, Wallet, User, Settings } from "lucide-react"
import type { SidebarItem } from "@/types"

const sidebarItems: SidebarItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
  { id: "concursos", label: "Concursos", icon: Trophy, href: "/concursos" },
  { id: "transacciones", label: "Transacciones", icon: Wallet, href: "/transacciones" },
  { id: "mi-cuenta", label: "Mi Cuenta", icon: User, href: "/mi-cuenta" },
  { id: "ajustes", label: "Ajustes", icon: Settings, href: "/ajustes" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gradient-to-b from-gradient-start to-gradient-end text-white flex-shrink-0 hidden lg:flex flex-col">
      <div className="flex items-center justify-center h-16">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Image 
            src="/wanda-logo.svg" 
            alt="Wanda Logo" 
            width={48} 
            height={48} 
            className="drop-shadow-lg"
          />
          <span className="sr-only">Gaming Platform</span>
        </Link>
      </div>
      <SidebarNav />
    </aside>
  )
}
