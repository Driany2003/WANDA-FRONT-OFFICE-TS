"use client"

import { useState } from "react"
import { CreditCard, Upload, Download, HandCoins } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangeSelect } from "@/components/shared/date-range-select"
import { DepositForm } from "./deposit-form"
import { RechargeHistory } from "./recharge-history"
import { WithdrawalsSection } from "./withdrawals-section"
import { WithdrawalRequest } from "@/components/transactions/withdrawal-request"

export function TransactionsSection() {
  const [activeTransactionTab, setActiveTransactionTab] = useState("recargas")
  const [activeSubTab, setActiveSubTab] = useState("depositos")
  const [activeWithdrawalTab, setActiveWithdrawalTab] = useState("solicitud")

  const handleDateRangeChange = (value: string) => {
    console.log("Selected date range for Transactions:", value)
    // Implement filtering logic here based on the selected value
  }

  return (
    <div className="space-y-6 p-[50px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CreditCard className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Transacciones</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Rango de fecha</span>
          <DateRangeSelect onSelectChange={handleDateRangeChange} />
        </div>
      </div>

      {/* Pestañas principales */}
      <Tabs value={activeTransactionTab} onValueChange={setActiveTransactionTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-6 bg-gray-100 rounded-lg p-1">
          <TabsTrigger
            value="recargas"
            className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:rounded-md"
          >
            <Upload className="w-4 h-4" />
            Recargas
          </TabsTrigger>
          <TabsTrigger
            value="retiros"
            className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:rounded-md"
          >
            <HandCoins className="w-4 h-4" />
            Retiros
          </TabsTrigger>
        </TabsList>

        {/* Contenido de Recargas */}
        <TabsContent value="recargas" className="space-y-6">
          {/* Sub-pestañas para Recargas */}
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveSubTab("depositos")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeSubTab === "depositos" ? "bg-purple-600 text-white" : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Depósitos
            </button>
            <button
              onClick={() => setActiveSubTab("recargas")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeSubTab === "recargas" ? "bg-purple-600 text-white" : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Recargas
            </button>
          </div>

          {/* Contenido de las sub-pestañas */}
          {activeSubTab === "depositos" && <DepositForm />}
          {activeSubTab === "recargas" && <RechargeHistory />}
        </TabsContent>

        {/* Contenido de Retiros */}
        <TabsContent value="retiros" className="space-y-6">
          {/* Sub-pestañas para Retiros */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveWithdrawalTab("solicitud")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeWithdrawalTab === "solicitud" 
                  ? "bg-purple-600 text-white" 
                  : "bg-gray-100 text-purple-600 hover:bg-gray-200"
              }`}
            >
              Solicitud
            </button>
            <button
              onClick={() => setActiveWithdrawalTab("retiros")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeWithdrawalTab === "retiros" 
                  ? "bg-purple-600 text-white" 
                  : "bg-gray-100 text-purple-600 hover:bg-gray-200"
              }`}
            >
              Retiros
            </button>
          </div>

          {/* Contenido de las sub-pestañas de retiros */}
          {activeWithdrawalTab === "solicitud" && <WithdrawalRequest />}
          {activeWithdrawalTab === "retiros" && <WithdrawalsSection />}
        </TabsContent>
      </Tabs>
    </div>
  )
}
