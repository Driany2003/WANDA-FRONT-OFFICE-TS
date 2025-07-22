"use client"

import { useRouter, useSearchParams } from "next/navigation" // Import useSearchParams
import { Button } from "@/components/ui/button"
import { ResultCard } from "@/components/sections/result-card"
import { DateRangeSelect } from "@/components/shared/date-range-select"
import { RESULTS_DATA } from "@/lib/constants"
import { useState, useMemo } from "react" // Import useMemo
import { RegresarFlecha, Animalito, Tiktok } from "@/components/icons/concursos-icons"

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
        <div className="flex flex-col gap-2">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="p-0">
            <div>
              <RegresarFlecha />
            </div>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 mb-10 mt-7">Resultados</h1>
          <div className="flex items-center gap-2 mb-5">
            <Animalito/>
            <h2 className="text-lg font-medium bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent">
              {resultType === "animalitos" ? "Animalitos online" : "Concursos"}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <span className="text-sm text-gray-600">Selecciona una opción</span>
          <div className="w-[230px] h-[40px]">
            <DateRangeSelect onSelectChange={handleDateRangeChange} selectedValue={selectedDateRange} />
          </div>
        </div>
      </div>

      {/* Display filtered results */}
      <section>
        <div className=" flex gap-7 overflow-x-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => (
              <ResultCard key={result.id} result={result} />
            ))
          ) : (
            <p className="text-gray-600 col-span-full">No hay resultados disponibles para esta categoría.</p>
          )}
        </div>
      </section>

      {/* Botón flotante de TikTok */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="w-[82px] h-[82px] flex items-center justify-center" 
          onClick={() => window.open('https://www.tiktok.com/@wanda', '_blank')}
        >
          <Tiktok />
        </button>
      </div>
    </div>
  )
}
