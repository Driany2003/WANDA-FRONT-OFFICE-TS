"use client"

import { CustomModal } from "@/components/shared/custom-modal"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface DateRangeModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectDates: (startDate: Date, endDate: Date) => void
}

export function DateRangeModal({ isOpen, onClose, onSelectDates }: DateRangeModalProps) {
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())

  
  const handleClose = () => {
    setSelectedDates([])
    onClose()
  }

  const handleSelect = () => {
    if (selectedDates.length >= 2) {
      onSelectDates(selectedDates[0], selectedDates[1])
      onClose() 
    }
  }

  const handleReset = () => {
    setSelectedDates([])
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return
    
    if (selectedDates.length === 0) {
      setSelectedDates([date])
    } else if (selectedDates.length === 1) {
      if (date < selectedDates[0]) {
        setSelectedDates([date, selectedDates[0]])
      } else {
        setSelectedDates([selectedDates[0], date])
      }
    } else {
      setSelectedDates([date])
    }
  }

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose} title="Selecciona una fecha">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Calendar 1 */}
          <div className="border border-gray-200 rounded-lg p-4">
            <Calendar
              mode="range"
              selected={{
                from: selectedDates[0],
                to: selectedDates[1]
              }}
              onSelect={(range) => {
                if (range?.from) {
                  handleDateSelect(range.from)
                }
                if (range?.to) {
                  handleDateSelect(range.to)
                }
              }}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              locale={es}
              className="w-full"
              classNames={{
                months: "flex flex-col space-y-4",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center text-center",
                caption_label: "text-base font-medium text-[#3A05DF] capitalize",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-[#3A05DF]",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-[#890277] rounded-md w-9 font-normal text-base capitalize",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-gray-400 hover:text-gray-700",
                day_selected: "bg-red-600 text-white hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "day-outside text-gray-400 aria-selected:bg-accent/50 aria-selected:text-gray-400",
                day_disabled: "text-gray-400 opacity-50",
                day_range_middle: "aria-selected:bg-red-100 aria-selected:text-red-600",
                day_hidden: "invisible",
              }}
              components={{
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
              }}
            />
          </div>

          {/* Calendar 2 */}
          <div className="border border-gray-200 rounded-lg p-4">
            <Calendar
              mode="range"
              selected={{
                from: selectedDates[0],
                to: selectedDates[1]
              }}
              onSelect={(range) => {
                if (range?.from) {
                  handleDateSelect(range.from)
                }
                if (range?.to) {
                  handleDateSelect(range.to)
                }
              }}
              month={new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)}
              onMonthChange={(date) => setCurrentMonth(new Date(date.getFullYear(), date.getMonth() - 1))}
              locale={es}
              className="w-full"
              classNames={{
                months: "flex flex-col space-y-4",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center text-center",
                caption_label: "text-base font-medium text-[#3A05DF] capitalize",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-[#3A05DF]",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-[#890277] rounded-md w-9 font-normal text-base capitalize",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-gray-400 hover:text-gray-700",
                day_selected: "bg-red-600 text-white hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "day-outside text-gray-400 aria-selected:bg-accent/50 aria-selected:text-gray-400",
                day_disabled: "text-gray-400 opacity-50",
                day_range_middle: "aria-selected:bg-red-100 aria-selected:text-red-600",
                day_hidden: "invisible",
              }}
              components={{
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
              }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button variant="link" onClick={handleReset} className="text-purple-600 p-0 h-auto">
            Resetear
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handleClose}
              className="px-6 py-2 text-red-600 border-gray-300 bg-white hover:bg-gray-50"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSelect} 
              disabled={selectedDates.length < 2}
              className="px-6 py-2 text-white"
              style={{
                background: 'linear-gradient(90deg, #DB086E 0%, #3A05DF 100%)'
              }}
            >
              Seleccionar
            </Button>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
