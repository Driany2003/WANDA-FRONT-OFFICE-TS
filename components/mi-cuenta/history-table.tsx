"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw } from "lucide-react"
import type { HistoryEntry } from "@/types"

interface HistoryTableProps {
  data: HistoryEntry[]
}

export function HistoryTable({ data }: HistoryTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "En proceso":
      case "Procesando":
      case "Activada":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">{status}</Badge>
      case "Completado":
      case "Aprobado":
      case "Ganado":
      case "Canjeada":
        return <Badge className="bg-green-100 text-green-800 border-green-200">{status}</Badge>
      case "Perdido":
      case "Cancelado":
      case "Expirada":
        return <Badge className="bg-red-100 text-red-800 border-red-200">{status}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

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
      <div className="overflow-hidden rounded-t-xl" style={{ boxShadow: '0 4px 20px rgba(219, 8, 110, 0.15)' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FEFEFE]" style={{ boxShadow: '0 2px 10px rgba(219, 8, 110, 0.08)' }}>
              <tr>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider min-w-[120px]">
                  Operación
                </th>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Cantidad WC
                </th>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#FBFBFB]">
              {data.map((item, index) => (
                <tr 
                  key={item.id} 
                  className="bg-[#FBFBFB]"
                  style={{ 
                    borderBottom: index < data.length - 1 ? '1px solid #A4A4A4' : 'none'
                  }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-900 text-center min-w-[120px]">{item.operation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-900 text-center">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">WC</span>
                      </div>
                      <span className="text-sm font-normal text-gray-900">{item.amount}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center">
                      {getStatusBadge(item.status)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
