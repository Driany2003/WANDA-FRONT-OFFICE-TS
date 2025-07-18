"use client"

import { Button } from "@/components/ui/button"
import { Search, Gift, ChevronRight } from "lucide-react"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { NotificationsDropdown } from "@/components/modals/notifications-dropdown" // Import the new component

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="w-5 h-5" />
          </Button>
          <div className="hidden lg:flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <NotificationsDropdown /> {/* New Notifications Dropdown */}
          <Button variant="outline" size="sm">
            <Gift className="w-4 h-4 mr-2" />
            Concursar ahora
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">15</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  )
}
