"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const WITHDRAWAL_DATA = [
  {
    id: 1,
    fecha: "25/09/2024",
    plataforma: "Yape",
    numero: "*** *** *00",
    retiro: 20,
    estado: "Pendiente"
  },
  {
    id: 2,
    fecha: "15/09/2024",
    plataforma: "Cuenta",
    numero: "*** ******* *08",
    retiro: 30,
    estado: "Aprobado"
  }
]

export function WithdrawalsSection() {
  return (
    <div className="space-y-6">
      {/* Header con botón de refrescar */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <RotateCcw className="w-5 h-5" />
        </Button>
      </div>

      {/* Tabla de retiros */}
      <div className="overflow-hidden rounded-t-xl" style={{ boxShadow: '0 4px 20px rgba(219, 8, 110, 0.15)' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FEFEFE]" style={{ boxShadow: '0 2px 10px rgba(219, 8, 110, 0.08)' }}>
              <tr>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Plataforma
                </th>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Número
                </th>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Retiro
                </th>
                <th className="px-6 py-3 text-center text-base font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#FBFBFB]">
              {WITHDRAWAL_DATA.map((transaction, index) => (
                <tr 
                  key={transaction.id} 
                  className="bg-[#FBFBFB]"
                  style={{ 
                    borderBottom: index < WITHDRAWAL_DATA.length - 1 ? '1px solid #A4A4A4' : 'none'
                  }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700 text-center">{transaction.fecha}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700 text-center">{transaction.plataforma}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700 text-center">{transaction.numero}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center items-center gap-2">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                        WC
                      </Badge>
                      <span className="text-sm font-normal text-gray-700">{transaction.retiro}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center">
                      <Badge 
                        variant="outline" 
                        className={
                          transaction.estado === "Aprobado" 
                            ? "bg-purple-600 text-white border-purple-600" 
                            : "bg-purple-50 text-purple-700 border-purple-200"
                        }
                      >
                        {transaction.estado}
                      </Badge>
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
