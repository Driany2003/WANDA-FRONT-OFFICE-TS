"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DateRangeModal } from "./date-range-modal"
import type { DateRangeSelectProps } from "@/types"

export function DateRangeSelect({ onSelectChange, selectedValue }: DateRangeSelectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleValueChange = (value: string) => {
    if (value === "ultimos-3-meses") {
      setIsModalOpen(true)
    }
    onSelectChange(value)
  }

  const handleSelectDates = (startDate: Date, endDate: Date) => {
    console.log("Fechas seleccionadas:", startDate, endDate)
    // Here you would typically update a state or context with the selected date range
    // For this example, we just log and close the modal
  }

  return (
    <>
      <Select onValueChange={handleValueChange} value={selectedValue}>
        <SelectTrigger className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
          <SelectValue placeholder="Selecciona una opción" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hoy">Hoy</SelectItem>
          <SelectItem value="ultima-semana">Última semana</SelectItem>
          <SelectItem value="ultimo-mes">Último mes</SelectItem>
          <SelectItem value="ultimos-3-meses">Últimos 3 meses</SelectItem>
        </SelectContent>
      </Select>

      <DateRangeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSelectDates={handleSelectDates} />
    </>
  )
}
