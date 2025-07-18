"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Mis concursos</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Rango de fecha</span>
          <DateRangeSelect onSelectChange={handleDateRangeChange} />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
          <TabsTrigger value="en-proceso">En proceso</TabsTrigger>
          <TabsTrigger value="cerrado">Cerrado</TabsTrigger>
          <TabsTrigger value="todos">Todos</TabsTrigger>
        </TabsList>

        <TabsContent value="en-proceso">
          <ContestTable data={enProceso} title="Concursos en proceso" />
        </TabsContent>

        <TabsContent value="cerrado">
          <ContestTable data={cerrados} title="Concursos cerrados" />
        </TabsContent>

        <TabsContent value="todos">
          <ContestTable data={todos} title="Todos los concursos" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
