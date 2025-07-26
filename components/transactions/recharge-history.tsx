"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WCIcon } from "@/components/icons/header-icons"

export function RechargeHistory() {
  return (
    <div className="space-y-6">
      {/* Botón de refrescar */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <RotateCcw className="w-5 h-5" />
        </Button>
      </div>

      {/* Tabla de recargas */}
      <div className="overflow-hidden rounded-t-xl" style={{ boxShadow: '0 4px 20px rgba(219, 8, 110, 0.15)' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#FEFEFE]" style={{ boxShadow: '0 2px 10px rgba(219, 8, 110, 0.08)' }}>
              <tr>
                <th className="px-6 py-3 text-center text-[16px] font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-center text-[16px] font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Recargas
                </th>
                <th className="px-6 py-3 text-center text-[16px] font-medium text-[#1C1C1C] uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#FBFBFB]">
              <tr className="bg-[#FBFBFB]" style={{ borderBottom: '1px solid #A4A4A4' }}>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] font-normal text-[#333333] text-center">25/09/2024</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center items-center gap-2">
                    <WCIcon />
                    <span className="text-[14px] font-normal text-[#333333]">20</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <Badge className="bg-[#FBFBFB] text-[#6137E5] border border-[#6137E5] hover:bg-[#FBFBFB] hover:text-[#6137E5] hover:border-[#6137E5]">En proceso</Badge>
                  </div>
                </td>
              </tr>
              <tr className="bg-[#FBFBFB]">
                <td className="px-6 py-4 whitespace-nowrap text-[14px] font-normal text-[#333333] text-center">24/09/2024</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center items-center gap-2">
                    <WCIcon />
                    <span className="text-[14px] font-normal text-[#333333]">40</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <Badge className="bg-[#6137E5] text-[#FBFBFB] border border-[#6137E5] hover:bg-[#6137E5] hover:text-[#FBFBFB] hover:border-[#6137E5]">Aprobado</Badge>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
