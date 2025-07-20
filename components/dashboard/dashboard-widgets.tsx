"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, TrendingDown, MoreVertical } from "lucide-react"
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Button } from "@/components/ui/button"
import type { DashboardStats } from "@/types"

interface DashboardWidgetsProps {
  stats: DashboardStats
}

export function DashboardWidgets({ stats }: DashboardWidgetsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Concursos Widget */}
      <Card className="lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-purple-600" />
            Concursos
          </CardTitle>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-4 h-4 text-muted-foreground" />
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
          {/* Donut Chart Placeholder */}
          <div className="flex items-center justify-center relative w-32 h-32 shrink-0">
            <div className="w-full h-full rounded-full border-6 border-purple-200"></div>
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full border-6 border-purple-600"
              style={{
                clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-medium text-gray-600">Total</span>
              <span className="text-xl font-bold text-gray-900">{stats.concursos.total}%</span>
            </div>
          </div>

          <div className="space-y-3 w-full">
            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-500">Concursos</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-md bg-purple-50">
                <div className="w-2 h-2 bg-purple-600 rounded"></div>
                <span className="text-xs text-gray-800 font-medium">{stats.concursos.carritos}% Carritos</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md bg-purple-50">
                <div className="w-2 h-2 bg-purple-300 rounded"></div>
                <span className="text-xs text-gray-800 font-medium">{stats.concursos.cartas}% Cartas</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wrapper for Recompensas and Pérdidas */}
      <div className="grid grid-cols-1 gap-6 lg:col-span-2">
        {/* Recompensas Widget */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              Recompensas
            </CardTitle>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-4 h-4 text-muted-foreground" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <span className="text-sm text-purple-600 font-medium">WC</span>
            </div>

            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={stats.recompensas}>
                  <XAxis
                    dataKey="day"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Bar
                    dataKey="value"
                    fill="#A78BFA" // purple-400
                    radius={[4, 4, 0, 0]}
                    // Example of highlighting a specific day, if needed
                    // fill={(data) => (data.day === "Ju" ? "#7C3AED" : "#A78BFA")}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Pérdidas Widget */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-purple-600" />
              Pérdidas
            </CardTitle>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-4 h-4 text-muted-foreground" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <span className="text-sm text-purple-600 font-medium">WC</span>
            </div>

            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={stats.perdidas}>
                  <XAxis
                    dataKey="day"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Bar
                    dataKey="value"
                    fill="#A78BFA" // purple-400
                    radius={[4, 4, 0, 0]}
                    // Example of highlighting a specific day, if needed
                    // fill={(data) => (data.day === "Ju" ? "#7C3AED" : "#A78BFA")}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
