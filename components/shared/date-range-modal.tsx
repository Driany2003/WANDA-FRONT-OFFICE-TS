"use client"

import { CustomModal } from "@/components/shared/custom-modal"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface DateRangeModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectDates: (startDate: Date, endDate: Date) => void
}

export function DateRangeModal({ isOpen, onClose, onSelectDates }: DateRangeModalProps) {
  // Dummy state for calendar selection
  const [selectedDates, setSelectedDates] = useState<Date[]>([])

  const handleSelect = () => {
    // In a real app, you'd get the actual selected start and end dates from the calendar
    // For now, we'll use dummy dates or just close the modal
    onSelectDates(new Date(), new Date()) // Placeholder
    onClose()
  }

  const handleReset = () => {
    setSelectedDates([])
    // Reset calendar view if needed
  }

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Selecciona una fecha">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Calendar 1 (October 2024) */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="font-semibold text-purple-600">Octubre 2024</span>
              <Button variant="ghost" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-7 text-center text-sm gap-2">
              {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((day) => (
                <span key={day} className="font-medium text-gray-500">
                  {day}
                </span>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <span
                  key={`oct-${day}`}
                  className={`p-2 rounded-full cursor-pointer ${
                    day === 1 || day === 15 ? "bg-purple-100 text-purple-600 font-bold" : "text-gray-700"
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Calendar 2 (November 2024) */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="font-semibold text-purple-600">Noviembre 2024</span>
              <Button variant="ghost" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-7 text-center text-sm gap-2">
              {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((day) => (
                <span key={day} className="font-medium text-gray-500">
                  {day}
                </span>
              ))}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                <span key={`nov-${day}`} className="p-2 rounded-full text-gray-700 cursor-pointer">
                  {day}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button variant="link" onClick={handleReset} className="text-purple-600">
            Resetear
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="px-6 py-2 text-purple-600 border-purple-600 bg-transparent"
            >
              Cancelar
            </Button>
            <Button onClick={handleSelect} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">
              Seleccionar
            </Button>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
