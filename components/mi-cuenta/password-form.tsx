"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, AlertCircle } from "lucide-react"

export function PasswordForm() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Cambiar contraseña</h2>
      <p className="text-gray-600">
        Una contraseña segura contribuye a evitar el acceso no autorizado a tu cuenta en la plataforma.
      </p>

      {/* Contraseña actual */}
      <div>
        <Label htmlFor="current-password">Contraseña</Label>
        <div className="relative">
          <Input
            id="current-password"
            type={showCurrentPassword ? "text" : "password"}
            placeholder="********"
            className="pr-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      <a href="#" className="text-purple-600 hover:underline text-sm">
        Olvidé mi contraseña
      </a>

      {/* Nueva contraseña */}
      <div>
        <Label htmlFor="new-password">Nueva contraseña</Label>
        <div className="relative">
          <Input
            id="new-password"
            type={showNewPassword ? "text" : "password"}
            placeholder="********"
            className="pr-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          La contraseña debe contener al menos {`{8}`} caracteres, {`{1}`} letra mayúscula, {`{1}`} número y {`{1}`}
          carácter especial
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="auto-change" />
        <Label htmlFor="auto-change" className="text-sm text-gray-700">
          Solicitar automáticamente el cambio de contraseña cada 120 días
        </Label>
      </div>

      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2">Cambiar</Button>
    </div>
  )
}
