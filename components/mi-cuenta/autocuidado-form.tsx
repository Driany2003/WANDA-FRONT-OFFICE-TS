"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AlertCircle } from "lucide-react"

export function AutocuidadoForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Límite de WC</h2>
      <p className="text-gray-600">
        Esta herramienta promueve el juego responsable y permite a cada suscriptor controlar el monto máximo de WC en un
        período determinado. Al configurar este límite, podrás disfrutar de una experiencia de juego más segura y
        gestionada, adaptada a tus preferencias personales.
      </p>

      <RadioGroup defaultValue="diario" className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="diario" id="diario" />
          <Label htmlFor="diario">Diario</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="semanal" id="semanal" />
          <Label htmlFor="semanal">Semanal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="mensual" id="mensual" />
          <Label htmlFor="mensual">Mensual</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="anual" id="anual" />
          <Label htmlFor="anual">Anual</Label>
        </div>
      </RadioGroup>

      <div className="w-40">
        <Input type="text" placeholder="WC 50" />
      </div>

      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2">Guardar límite</Button>

      <div className="flex items-center gap-2 text-red-500 text-sm">
        <AlertCircle className="w-4 h-4" />
        <span>Se enviará una alerta al momento de alcanzar el límite configurado</span>
      </div>
    </div>
  )
}
