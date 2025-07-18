"use client"

import { Button } from "@/components/ui/button"
import { BarChart3 } from "lucide-react"
import { DashboardWidgets } from "@/components/dashboard/dashboard-widgets"
import { DASHBOARD_STATS } from "@/lib/constants"
import { DateRangeSelect } from "@/components/shared/date-range-select"

export default function DashboardPage() {
  const handleDateRangeChange = (value: string) => {
    console.log("Selected date range for Dashboard:", value)
    // Implement filtering logic here based on the selected value
  }

  return (
    <div className="space-y-6 p-[50px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Rango de fecha</span>
            <DateRangeSelect onSelectChange={handleDateRangeChange} />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Generar reporte</Button>
        </div>
      </div>

      {/* Dashboard Widgets */}
      <DashboardWidgets stats={DASHBOARD_STATS} />
    </div>
  )
}
