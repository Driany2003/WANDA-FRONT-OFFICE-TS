"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { DateRangeSelect } from "@/components/shared/date-range-select"
import { ContestTable } from "@/components/shared/contest-table"
import { CONTEST_TABLE_DATA } from "@/lib/constants"

export default function MisConcursosPage() {
  const [activeTab, setActiveTab] = useState("en-proceso")

  // Filtrar datos para simular "mis concursos"
  const enProceso = CONTEST_TABLE_DATA.filter((item) => item.estado === "En proceso")
  const cerrados = CONTEST_TABLE_DATA.filter((item) => item.estado === "Cerrado")
  const todos = CONTEST_TABLE_DATA // Mostrar todos los concursos

  const handleDateRangeChange = (value: string) => {
    console.log("Selected date range for Mis Concursos:", value)
    // Implement filtering logic here based on the selected value
  }

  return (
    <div className="space-y-6 p-[50px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mis concursos</h1>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-600">Rango de fecha</span>
          <DateRangeSelect onSelectChange={handleDateRangeChange} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("en-proceso")}
          className={`w-[90px] h-6 px-1 rounded-[50px] font-medium transition-all duration-200 text-sm ${
            activeTab === "en-proceso"
              ? "bg-[#890277] text-white shadow-md"
              : "bg-[#FEFEFE] text-gray-600 hover:text-gray-800 border border-gray-200"
          }`}
        >
          En proceso
        </button>
        <button
          onClick={() => setActiveTab("cerrado")}
          className={`w-[90px] h-6 px-1 rounded-[50px] font-medium transition-all duration-200 text-sm ${
            activeTab === "cerrado"
              ? "bg-[#890277] text-white shadow-md"
              : "bg-[#FEFEFE] text-gray-600 hover:text-gray-800 border border-gray-200"
          }`}
        >
          Cerrado
        </button>
        <button
          onClick={() => setActiveTab("todos")}
          className={`w-[90px] h-6 px-1 rounded-[50px] font-medium transition-all duration-200 text-sm ${
            activeTab === "todos"
              ? "bg-[#890277] text-white shadow-md"
              : "bg-[#FEFEFE] text-gray-600 hover:text-gray-800 border border-gray-200"
          }`}
        >
          Todos
        </button>
      </div>

      {/* Contenido de las pestañas */}
      {activeTab === "en-proceso" && (
        <ContestTable data={enProceso} title="Concursos en proceso" showStatus={false} showReward={true} />
      )}
      
      {activeTab === "cerrado" && (
        <ContestTable data={cerrados} title="Concursos cerrados" showStatus={false} showReward={true} />
      )}
      
      {activeTab === "todos" && (
        <ContestTable data={todos} title="Todos los concursos" showStatus={true} showReward={false} />
      )}
    </div>
  )
}
