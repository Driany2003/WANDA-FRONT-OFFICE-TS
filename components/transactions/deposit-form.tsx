"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Upload, ChevronDown, ChevronUp } from "lucide-react"

export function DepositForm() {
  const [expandedMethod, setExpandedMethod] = useState<string | null>(null)

  const toggleMethod = (method: string) => {
    setExpandedMethod(expandedMethod === method ? null : method)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Billetera móvil</h3>

        {/* Selector de método de pago - Yape */}
        <Card className="p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Yape"
                  width={24}
                  height={24}
                  className="rounded"
                />
              </div>
              <span className="font-medium text-gray-900">Yape</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => toggleMethod("yape")}
              className="p-2"
            >
              {expandedMethod === "yape" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Formulario expandible para Yape */}
          {expandedMethod === "yape" && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              {/* Instrucciones paso a paso */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  Recomendamos realizar tus depósitos desde el número de teléfono que usaste para registrarte en la plataforma
                  y seguir los siguientes pasos para una recarga exitosa:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="p-4 text-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-sm font-bold text-white">1</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Ingresa a Yape, <strong>realiza el depósito</strong> por el monto que deseas al número de teléfono o al
                      código QR dispuesto en la pantalla
                    </p>
                  </Card>

                  <Card className="p-4 text-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-sm font-bold text-white">2</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Vuelve a la plataforma para seleccionar o ingresar el <strong>monto de recarga</strong> que has
                      realizado en Yape
                    </p>
                  </Card>

                  <Card className="p-4 text-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-sm font-bold text-white">3</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Por último, adjunta en la casilla <strong>constancia de recarga</strong> el comprobante del depósito y
                      recarga tus WC
                    </p>
                  </Card>

                  <Card className="p-4 text-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-sm font-bold text-white">4</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      <strong>¡Prepárate!</strong> Nuestro equipo validará y recargará tus WC.
                    </p>
                  </Card>
                </div>
              </div>

              {/* Monto de recarga */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">S/</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Monto de recarga</h4>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      S/ 20.00
                    </Button>
                    <Button variant="outline" size="sm">
                      S/ 30.00
                    </Button>
                    <Button variant="outline" size="sm">
                      S/ 40.00
                    </Button>
                    <Button variant="outline" size="sm">
                      S/ 100.00
                    </Button>
                  </div>
                  <div className="text-sm text-gray-600">
                    Recuerda que <span className="text-purple-600">1 Sol = 1 WC</span>
                  </div>
                </div>

                <div className="w-40">
                  <input
                    type="text"
                    placeholder="S/ 30.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Constancia de recarga */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">📄</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Constancia de recarga</h4>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <input type="file" className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="flex items-center justify-center gap-2 text-gray-500">
                          <Upload className="w-5 h-5" />
                          <span>Selecciona un archivo</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-20 h-20 bg-black">
                        {/* QR Code placeholder */}
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <span className="text-white text-xs">QR</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">978 000 546</p>
                  </div>
                </div>
              </div>

              {/* Botón Recargar */}
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 mb-6">Recargar</Button>
            </div>
          )}
        </Card>

        {/* Plin option */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Plin"
                  width={24}
                  height={24}
                  className="rounded"
                />
              </div>
              <span className="font-medium text-gray-900">Plin</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => toggleMethod("plin")}
              className="p-2"
            >
              {expandedMethod === "plin" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Formulario expandible para Plin */}
          {expandedMethod === "plin" && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Formulario de depósito para Plin - Funcionalidad similar a Yape
              </p>
              {/* Aquí puedes agregar el mismo formulario que Yape pero adaptado para Plin */}
              <div className="text-center py-8">
                <p className="text-gray-500">Formulario de Plin en desarrollo</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
