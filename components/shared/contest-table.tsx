"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RotateCcw } from "lucide-react"
import type { ContestTableData } from "@/types"
import { DateRangeSelect } from "./date-range-select"
import { StatusIcon } from "@/components/ui/status-icon"
import { WcBadge } from "@/components/ui/wc-badge"

interface ContestTableProps {
  data: ContestTableData[]
  title?: string
}

export function ContestTable({ data, title = "Historial" }: ContestTableProps) {
  return (
    <div className="space-y-6">
      {/* Header con filtro de fecha */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tabla */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Concurso
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  WC usadas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recompensa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  N° de opciones
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.concurso}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.fecha}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <WcBadge value={item.wcUsadas} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <WcBadge value={item.recompensa} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.numOpciones}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusIcon status={item.estado} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
