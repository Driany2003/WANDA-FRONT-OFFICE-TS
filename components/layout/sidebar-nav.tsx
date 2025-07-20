"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { CerrarSesion } from "@/components/icons/sidebar-icons"
import { SIDEBAR_ITEMS } from "@/lib/constants"

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <>
      <div className="flex-1 p-5" style={{ paddingTop: '72px' }}>
        <nav className="space-y-2">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon
            const IconBlanco = item.iconBlanco
            const isActive = pathname === item.href
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`w-full flex items-center gap-2.5 px-5 py-5 transition-colors ${
                  isActive ? "bg-white text-purple-600 shadow-md rounded-2xl" : "text-white/80 hover:bg-white/10 hover:text-white rounded-lg"
                }`}
              >
                {isActive ? <Icon /> : (IconBlanco ? <IconBlanco /> : <Icon />)}
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-5" style={{ paddingTop: '72px' }}>
        <button className="w-full flex items-center gap-2.5 px-5 py-5 transition-colors rounded-2xl" style={{ backgroundColor: '#EBE6FC' }}>
          <CerrarSesion />
          <span className="bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent font-semibold">Cerrar Sesión</span>
        </button>
      </div>
    </>
  )
}
