"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Bell, DollarSign, Percent } from "lucide-react"
import { NOTIFICATIONS_DATA } from "@/lib/constants"
import { AllNotificationsModal } from "./all-notifications-modal"
import { MensajeIcon } from "@/components/icons/header-icons"
import type { Notification } from "@/types"

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>(NOTIFICATIONS_DATA)
  const [isAllNotificationsModalOpen, setIsAllNotificationsModalOpen] = useState(false)

  const unreadCount = notifications.filter((n) => !n.isRead).length
  const recentNotifications = notifications.slice(0, 3) // Show up to 3 recent notifications

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "recharge":
        return <DollarSign className="w-5 h-5 text-purple-600" />
      case "promotion":
        return <Percent className="w-5 h-5 text-purple-600" />
      default:
        return <Bell className="w-5 h-5 text-purple-600" />
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative rounded-full">
            <MensajeIcon />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {unreadCount}
              </span>
            )}
            <span className="sr-only">Notificaciones</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 p-4" align="end" forceMount>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Notificaciones</h3>
            <Button variant="link" className="text-purple-600 h-auto p-0" onClick={markAllAsRead}>
              Marcar todo como leído
            </Button>
          </div>
          <div className="space-y-3">
            {recentNotifications.length > 0 ? (
              recentNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    !notification.isRead ? "bg-purple-50" : "bg-gray-50"
                  }`}
                >
                  <div className="flex-shrink-0">{getNotificationIcon(notification.type)}</div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                      <span>{notification.time}</span>
                      {!notification.isRead && (
                        <Button
                          variant="link"
                          className="h-auto p-0 text-purple-600"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Marcar como leído
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center">No hay notificaciones recientes.</p>
            )}
          </div>
          <DropdownMenuSeparator className="my-4" />
          <Button
            className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white hover:from-gradient-start hover:to-gradient-end"
            onClick={() => setIsAllNotificationsModalOpen(true)}
          >
            Ver todos los mensajes
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>

      <AllNotificationsModal
        isOpen={isAllNotificationsModalOpen}
        onClose={() => setIsAllNotificationsModalOpen(false)}
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </>
  )
}
