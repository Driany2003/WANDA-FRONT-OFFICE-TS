"use client"

import { useState } from "react"

export function useNavigation() {
  const [activeSection, setActiveSection] = useState("concursos")
  const [activeTransactionTab, setActiveTransactionTab] = useState("recargas")
  const [activeSubTab, setActiveSubTab] = useState("depositos")

  return {
    activeSection,
    setActiveSection,
    activeTransactionTab,
    setActiveTransactionTab,
    activeSubTab,
    setActiveSubTab,
  }
}
