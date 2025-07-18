"use client"

import { useState } from "react"
import { User, Percent, History, Shield, Lock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PromotionCard } from "@/components/mi-cuenta/promotion-card"
import { ProfileForm } from "@/components/mi-cuenta/profile-form"
import { HistoryTable } from "@/components/mi-cuenta/history-table"
import { AutocuidadoForm } from "@/components/mi-cuenta/autocuidado-form"
import { PasswordForm } from "@/components/mi-cuenta/password-form" // Importar el nuevo componente
import { PromotionDetailsModal } from "@/components/mi-cuenta/promotion-details-modal" // Importar el modal de detalles
import { DateRangeSelect } from "@/components/shared/date-range-select" // Importar el DateRangeSelect
import {
  PROMOTIONS_DATA,
  PROFILE_DATA,
  HISTORY_TRANSACTIONS_DATA,
  HISTORY_CONTESTS_DATA,
  HISTORY_PROMOTIONS_DATA,
} from "@/lib/constants"
import type { PromotionCardData } from "@/types"

export default function MiCuentaPage() {
  const [activeMainTab, setActiveMainTab] = useState("perfil")
  const [activePromotionsSubTab, setActivePromotionsSubTab] = useState("activas")
  const [activeHistorySubTab, setActiveHistorySubTab] = useState("transacciones")

  // State para el modal de promociones
  const [isPromotionModalOpen, setIsPromotionModalOpen] = useState(false)
  const [selectedPromotion, setSelectedPromotion] = useState<PromotionCardData | null>(null)

  const handleViewPromotionDetails = (promotion: PromotionCardData) => {
    setSelectedPromotion(promotion)
    setIsPromotionModalOpen(true)
  }

  const handleDateRangeChange = (value: string) => {
    console.log("Selected date range for Mi Cuenta:", value)
    // Implement filtering logic here based on the selected value
  }

  return (
    <div className="space-y-6 p-[50px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Mi cuenta</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Rango de fecha</span>
          <DateRangeSelect onSelectChange={handleDateRangeChange} />
        </div>
      </div>

      {/* Pestañas principales */}
      <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6 border-b border-gray-200">
          <TabsTrigger
            value="perfil"
            className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            <User className="w-4 h-4" />
            Perfil
          </TabsTrigger>
          <TabsTrigger
            value="promociones"
            className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            <Percent className="w-4 h-4" />
            Promociones
          </TabsTrigger>
          <TabsTrigger
            value="historial"
            className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            <History className="w-4 h-4" />
            Historial
          </TabsTrigger>
          <TabsTrigger
            value="autocuidado"
            className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            <Shield className="w-4 h-4" />
            Autocuidado
          </TabsTrigger>
          <TabsTrigger
            value="contrasena"
            className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            <Lock className="w-4 h-4" />
            Contraseña
          </TabsTrigger>
        </TabsList>

        {/* Contenido de Perfil */}
        <TabsContent value="perfil" className="space-y-6">
          <ProfileForm data={PROFILE_DATA} />
        </TabsContent>

        {/* Contenido de Promociones */}
        <TabsContent value="promociones" className="space-y-6">
          {/* Sub-pestañas para Promociones */}
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActivePromotionsSubTab("activas")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activePromotionsSubTab === "activas"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Activas
            </button>
            <button
              onClick={() => setActivePromotionsSubTab("vencidas")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activePromotionsSubTab === "vencidas"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Vencidas
            </button>
            <button
              onClick={() => setActivePromotionsSubTab("solicitadas")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activePromotionsSubTab === "solicitadas"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Solicitadas
            </button>
          </div>

          {/* Contenido de las sub-pestañas de Promociones */}
          {activePromotionsSubTab === "activas" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROMOTIONS_DATA.map((promo) => (
                <PromotionCard key={promo.id} {...promo} onViewDetails={handleViewPromotionDetails} />
              ))}
            </div>
          )}
          {activePromotionsSubTab === "vencidas" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Datos de promociones vencidas */}
              <p className="text-gray-600">No hay promociones vencidas.</p>
            </div>
          )}
          {activePromotionsSubTab === "solicitadas" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Datos de promociones solicitadas */}
              <p className="text-gray-600">No hay promociones solicitadas.</p>
            </div>
          )}
        </TabsContent>

        {/* Contenido de Historial */}
        <TabsContent value="historial" className="space-y-6">
          {/* Sub-pestañas para Historial */}
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveHistorySubTab("transacciones")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeHistorySubTab === "transacciones"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Transacciones
            </button>
            <button
              onClick={() => setActiveHistorySubTab("concursos")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeHistorySubTab === "concursos" ? "bg-purple-600 text-white" : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Concursos
            </button>
            <button
              onClick={() => setActiveHistorySubTab("promociones")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeHistorySubTab === "promociones"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Promociones
            </button>
          </div>

          {/* Contenido de las sub-pestañas de Historial */}
          {activeHistorySubTab === "transacciones" && <HistoryTable data={HISTORY_TRANSACTIONS_DATA} />}
          {activeHistorySubTab === "concursos" && <HistoryTable data={HISTORY_CONTESTS_DATA} />}
          {activeHistorySubTab === "promociones" && <HistoryTable data={HISTORY_PROMOTIONS_DATA} />}
        </TabsContent>

        {/* Contenido de Autocuidado */}
        <TabsContent value="autocuidado" className="space-y-6">
          <AutocuidadoForm />
        </TabsContent>

        {/* Contenido de Contraseña */}
        <TabsContent value="contrasena" className="space-y-6">
          <PasswordForm />
        </TabsContent>
      </Tabs>

      {/* Modal de detalles de promoción */}
      {selectedPromotion && (
        <PromotionDetailsModal
          isOpen={isPromotionModalOpen}
          onClose={() => setIsPromotionModalOpen(false)}
          promotion={selectedPromotion.details}
        />
      )}
    </div>
  )
}
