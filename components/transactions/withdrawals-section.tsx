"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-gray-900">Fecha</TableHead>
              <TableHead className="font-semibold text-gray-900">Plataforma</TableHead>
              <TableHead className="font-semibold text-gray-900">Número</TableHead>
              <TableHead className="font-semibold text-gray-900">Retiro</TableHead>
              <TableHead className="font-semibold text-gray-900">Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {WITHDRAWAL_DATA.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="text-gray-700">{transaction.fecha}</TableCell>
                <TableCell className="text-gray-700">{transaction.plataforma}</TableCell>
                <TableCell className="text-gray-700">{transaction.numero}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                      WC
                    </Badge>
                    <span className="text-gray-700">{transaction.retiro}</span>
                  </div>
                </TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
