"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, AlertCircle, Coins, ChevronUp } from "lucide-react"
import Image from "next/image"

const PAYMENT_METHODS = [
  {
    id: 1,
    name: "Billetera móvil - Yape 938 000 000",
    type: "Yape",
    logo: "/yape.png",
    time: "Depósito efectivo en 1 hora",
    color: "bg-green-500"
  },
  {
    id: 2,
    name: "Cuenta bancaria - BCP ************08",
    type: "BCP",
    logo: "/bcp.png",
    time: "Depósito efectivo en 4 horas",
    color: "bg-blue-500"
  }
]

const WITHDRAWAL_AMOUNTS = [20, 30, 40, 50]

export function WithdrawalRequest() {
  const [selectedAmount, setSelectedAmount] = useState(20)
  const [customAmount, setCustomAmount] = useState("20")
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null)

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount(amount.toString())
  }

  const toggleMethod = (methodId: number) => {
    setExpandedMethod(expandedMethod === methodId ? null : methodId)
  }

  return (
    <div className="space-y-6">
      {/* Métodos de pago registrados */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Métodos de pago registrados</h3>
        <div className="space-y-3">
          {PAYMENT_METHODS.map((method) => (
            <Card key={method.id} className={`w-[1026px] ${expandedMethod === method.id ? "min-h-[72px]" : "h-[72px]"} p-4 pb-4 bg-[#FEFEFE] ${expandedMethod === method.id ? '' : ''}`} style={{ 
              boxShadow: expandedMethod === method.id ? '0 4px 20px rgba(219, 8, 110, 0.19)' : 'none'
            }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={method.logo || "/placeholder.svg"}
                    alt={method.type}
                    width={32}
                    height={32}
                    className="rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{method.name}</p>
                    <p className="text-sm text-gray-600">{method.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    Modificar medio de pago
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleMethod(method.id)}
                    className="p-2"
                  >
                    {expandedMethod === method.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Formulario expandible */}
              {expandedMethod === method.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">WC</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">WC a retirar</h4>
                      </div>

                      {/* Botones de cantidad predefinida */}
                      <div className="flex gap-2 mb-4">
                        {WITHDRAWAL_AMOUNTS.map((amount) => (
                          <Button
                            key={amount}
                            variant={selectedAmount === amount ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAmountSelect(amount)}
                            className={selectedAmount === amount ? "bg-purple-600 hover:bg-purple-700" : ""}
                          >
                            {amount}
                          </Button>
                        ))}
                      </div>

                      {/* Campo de entrada personalizada */}
                      <div className="mb-4">
                        <Input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full"
                          placeholder="Ingresa el monto"
                        />
                      </div>

                      {/* Botón de solicitar */}
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 text-lg font-semibold">
                        Solicitar
                      </Button>

                      {/* Mensaje de advertencia */}
                      <div className="flex items-center gap-2 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-sm text-red-700">
                          Recuerda que debes contar con un mínimo acumulado de WC 20 para realizar tus retiros
                        </p>
                      </div>
                    </div>

                    {/* Información adicional */}
                    <div className="lg:col-span-1">
                      <Card className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Recuerda que</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                            1 Sol
                          </Badge>
                          <span className="text-gray-600">=</span>
                          <Badge variant="outline" className="bg-white text-gray-800 border-gray-200">
                            1 WC
                          </Badge>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 