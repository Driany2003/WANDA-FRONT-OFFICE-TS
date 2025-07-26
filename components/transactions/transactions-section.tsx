"use client"

import { useState } from "react"
import {
  RecargasDegradadoIcon, RecargasIcon,
  RetiroDegradadoIcon, RetiroIcon
} from "@/components/icons"
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
  
  }
  
  
  return (
    <div className="space-y-6 p-[50px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" >Transacciones</h1>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-600">Rango de fecha</span>
          <DateRangeSelect onSelectChange={handleDateRangeChange} />
        </div>
      </div>

      {/* Pestañas principales */}
      <Tabs value={activeTransactionTab} onValueChange={setActiveTransactionTab} className="w-full">
        <TabsList className="flex w-full justify-start gap-8 mb-6 bg-transparent border-none shadow-none">
          <TabsTrigger
            value="recargas"
            className="flex items-center gap-3 text-base font-semibold text-gray-600 data-[state=active]:text-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:bg-clip-text data-[state=active]:from-[#DB086E] data-[state=active]:to-[#3A05DF] data-[state=active]:relative data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#DB086E] data-[state=active]:after:to-[#3A05DF] bg-transparent border-none shadow-none hover:bg-transparent data-[state=active]:shadow-none"
          >
            {activeTransactionTab === "recargas" ? <RecargasDegradadoIcon /> : <RecargasIcon />}
            Recargas
          </TabsTrigger>
          <TabsTrigger
            value="retiros"
            className="flex items-center gap-3 text-base font-semibold text-gray-600 data-[state=active]:text-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:bg-clip-text data-[state=active]:from-[#DB086E] data-[state=active]:to-[#3A05DF] data-[state=active]:relative data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#DB086E] data-[state=active]:after:to-[#3A05DF] bg-transparent border-none shadow-none hover:bg-transparent data-[state=active]:shadow-none"
          >
            {activeTransactionTab === "retiros" ? <RetiroDegradadoIcon /> : <RetiroIcon />}
            Retiros
          </TabsTrigger>
        </TabsList>

        {/* Contenido de Recargas */}
        <TabsContent value="recargas" className="space-y-6">
          {/* Sub-pestañas para Recargas */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveSubTab("depositos")}
              className={`w-[90px] h-6 px-1 rounded-[50px] font-medium transition-all duration-200 text-sm ${
                activeSubTab === "depositos" 
                  ? "bg-[#890277] text-white shadow-md" 
                  : "bg-[#FEFEFE] text-gray-600 hover:text-gray-800 border border-gray-200"
              }`}
              style={{
                boxShadow: activeSubTab === "depositos" ? '0 4px 20px rgba(219, 8, 110, 0.15)' : '0 2px 8px rgba(219, 8, 110, 0.15)'
              }}
            >
              Depósitos
            </button>
            <button
              onClick={() => setActiveSubTab("recargas")}
              className={`w-[90px] h-6 px-1 rounded-[50px] font-medium transition-all duration-200 text-sm ${
                activeSubTab === "recargas" 
                  ? "bg-[#890277] text-white shadow-md" 
                  : "bg-[#FEFEFE] text-gray-600 hover:text-gray-800 border border-gray-200"
              }`}
              style={{
                boxShadow: activeSubTab === "recargas" ? '0 4px 20px rgba(219, 8, 110, 0.15)' : '0 2px 8px rgba(219, 8, 110, 0.15)'
              }}
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
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveWithdrawalTab("solicitud")}
              className={`w-[90px] h-6 px-1 rounded-[50px] font-medium transition-all duration-200 text-sm ${
                activeWithdrawalTab === "solicitud" 
                  ? "bg-[#890277] text-white shadow-md" 
                  : "bg-[#FEFEFE] text-gray-600 hover:text-gray-800 border border-gray-200"
              }`}
              style={{
                boxShadow: activeWithdrawalTab === "solicitud" ? '0 4px 20px rgba(219, 8, 110, 0.15)' : '0 2px 8px rgba(219, 8, 110, 0.15)'
              }}
            >
              Solicitud
            </button>
            <button
              onClick={() => setActiveWithdrawalTab("retiros")}
              className={`w-[90px] h-6 px-1 rounded-[50px] font-medium transition-all duration-200 text-sm ${
                activeWithdrawalTab === "retiros" 
                  ? "bg-[#890277] text-white shadow-md" 
                  : "bg-[#FEFEFE] text-gray-600 hover:text-gray-800 border border-gray-200"
              }`}
              style={{
                boxShadow: activeWithdrawalTab === "retiros" ? '0 4px 20px rgba(219, 8, 110, 0.15)' : '0 2px 8px rgba(219, 8, 110, 0.15)'
              }}
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
