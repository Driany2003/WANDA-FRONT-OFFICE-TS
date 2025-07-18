"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ProfileData } from "@/types"

interface ProfileFormProps {
  data: ProfileData
}

export function ProfileForm({ data }: ProfileFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Editar</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Datos personales</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="tiktokUser">Usuario TikTok</Label>
            <Input id="tiktokUser" defaultValue={data.tiktokUser} placeholder="Ingresa tu usuario de TikTok" />
          </div>
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" defaultValue={data.name} />
          </div>
          <div>
            <Label htmlFor="lastName">Apellido</Label>
            <Input id="lastName" defaultValue={data.lastName} />
          </div>
          <div>
            <Label htmlFor="documentId">Documento de identidad</Label>
            <Input id="documentId" defaultValue={data.documentId} />
          </div>
          <div>
            <Label htmlFor="birthDate">Fecha de nacimiento</Label>
            <Input id="birthDate" defaultValue={data.birthDate} />
          </div>
          <div>
            <Label htmlFor="cellphone">Celular</Label>
            <Input id="cellphone" defaultValue={data.cellphone} />
          </div>
          <div>
            <Label htmlFor="nationality">Nacionalidad</Label>
            <Select defaultValue={data.nationality}>
              <SelectTrigger>
                <SelectValue placeholder="Elige una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Peruana">Peruana</SelectItem>
                <SelectItem value="Otra">Otra</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="city">Ciudad</Label>
            <Select defaultValue={data.city}>
              <SelectTrigger>
                <SelectValue placeholder="Elige una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Lima">Lima</SelectItem>
                <SelectItem value="Arequipa">Arequipa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="district">Distrito</Label>
            <Select defaultValue={data.district}>
              <SelectTrigger>
                <SelectValue placeholder="Elige una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Miraflores">Miraflores</SelectItem>
                <SelectItem value="San Isidro">San Isidro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" defaultValue={data.email} />
          </div>
          <div>
            <Label htmlFor="gender">Género</Label>
            <Select defaultValue={data.gender}>
              <SelectTrigger>
                <SelectValue placeholder="Elige una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Masculino">Masculino</SelectItem>
                <SelectItem value="Femenino">Femenino</SelectItem>
                <SelectItem value="Otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="ppe">PPE</Label>
            <Input id="ppe" defaultValue={data.ppe} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Datos bancarios</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="mobileWallet">Billetera móvil disponible</Label>
            <Select defaultValue={data.mobileWallet}>
              <SelectTrigger>
                <SelectValue placeholder="Elige una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yape">Yape</SelectItem>
                <SelectItem value="Plin">Plin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="mobileWalletPhone">Celular asociado a la billetera móvil</Label>
            <Input
              id="mobileWalletPhone"
              defaultValue={data.mobileWalletPhone}
              placeholder="Ingresa el número asociado"
            />
          </div>
          <div>
            <Label htmlFor="bankInstitution">Institución bancaria</Label>
            <Select defaultValue={data.bankInstitution}>
              <SelectTrigger>
                <SelectValue placeholder="Elige una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BCP">BCP</SelectItem>
                <SelectItem value="BBVA">BBVA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="bankAccountNumber">Número de cuenta bancaria</Label>
            <Input id="bankAccountNumber" defaultValue={data.bankAccountNumber} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
