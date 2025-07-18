"use client"

import { useRouter, useSearchParams } from "next/navigation" // Import useSearchParams
import { Button } from "@/components/ui/button"
import { ChevronLeft, BarChart } from "lucide-react"
import { ResultCard } from "@/components/sections/result-card"
import { DateRangeSelect } from "@/components/shared/date-range-select"
import { RESULTS_DATA } from "@/lib/constants"
import { useState, useMemo } from "react" // Import useMemo

export default function ResultadosPage() {
  const router = useRouter()
  const searchParams = useSearchParams() // Get search params
  const resultType = searchParams.get("type") // Get the 'type' parameter

  const [selectedDateRange, setSelectedDateRange] = useState("hoy")

  const handleDateRangeChange = (value: string) => {
    setSelectedDateRange(value)
    console.log("Selected date range for Results Page:", value)
    // Implement filtering logic here based on the selected value
  }

  // Filter results based on the 'type' query parameter
  const filteredResults = useMemo(() => {
    if (resultType === "animalitos") {
      return RESULTS_DATA.filter((result) => result.type === "Animalitos")
    }
    if (resultType === "concursos") {
      return RESULTS_DATA.filter((result) => result.type === "Concursos")
    }
    return RESULTS_DATA // Show all if no type or invalid type is specified
  }, [resultType])

  return (
    <div className="space-y-6 p-[50px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Resultados</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Selecciona una opción</span>
          <DateRangeSelect onSelectChange={handleDateRangeChange} selectedValue={selectedDateRange} />
        </div>
      </div>

      {/* Display filtered results */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <BarChart className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            {resultType === "animalitos"
              ? "Animalitos online"
              : resultType === "concursos"
                ? "Concursos"
                : "Todos los resultados"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => <ResultCard key={result.id} result={result} />)
          ) : (
            <p className="text-gray-600 col-span-full">No hay resultados disponibles para esta categoría.</p>
          )}
        </div>
      </section>
    </div>
  )
}
