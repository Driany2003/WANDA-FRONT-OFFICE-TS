import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
})

export const metadata: Metadata = {
  title: "Wanda - Concursos y Animalitos",
  description: "Plataforma de concursos y juegos online con increíbles promociones",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 overflow-hidden">
              <Header />
              <div className="container mx-auto px-4 lg:px-6 py-8">{children}</div>
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
