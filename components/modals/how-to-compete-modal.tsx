"use client"

import { CustomModal } from "@/components/shared/custom-modal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface HowToCompeteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HowToCompeteModal({ isOpen, onClose }: HowToCompeteModalProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 780)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <CustomModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="¿Cómo concursar?" 
      className={`h-auto min-h-[600px] max-h-[95vh] mx-auto ${isLargeScreen ? 'w-[780px]' : 'max-w-[95vw]'}`}
    >
      <div className="space-y-3 sm:space-y-6 text-center flex flex-col items-center justify-center flex-1 px-7 sm:px-0">
        <p className="text-gray-700 text-sm">Sólo tienes que seguir éstos simples pasos para comenzar tu aventura:</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3 justify-items-center w-full max-w-[700px]">
          <Card className="px-1 py-2 sm:px-4 sm:py-4 flex flex-col items-center justify-center text-center w-full max-w-[170px] sm:max-w-[180px] h-[180px] sm:h-[200px] shadow-md hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-sm">
              <span className="text-sm font-bold text-white">1</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Ingresa a Yape y <strong className="text-purple-600">realiza el depósito</strong> por el monto que desees
            </p>
          </Card>
          <Card className="px-1 py-2 sm:px-4 sm:py-4 flex flex-col items-center justify-center text-center w-full max-w-[170px] sm:max-w-[180px] h-[180px] sm:h-[200px] shadow-md hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-sm">
              <span className="text-sm font-bold text-white">2</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Ingresa a la sección de transacciones y <strong className="text-purple-600">adjunta la constancia</strong>{" "}
              de recarga
            </p>
          </Card>
          <Card className="px-1 py-2 sm:px-4 sm:py-4 flex flex-col items-center justify-center text-center w-full max-w-[170px] sm:max-w-[180px] h-[180px] sm:h-[200px] shadow-md hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-sm">
              <span className="text-sm font-bold text-white">3</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Nuestro equipo <strong className="text-purple-600">validará y recargará</strong> tus WC
            </p>
          </Card>
          <Card className="px-1 py-2 sm:px-4 sm:py-4 flex flex-col items-center justify-center text-center w-full max-w-[170px] sm:max-w-[180px] h-[180px] sm:h-[200px] shadow-md hover:shadow-lg transition-shadow">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-sm">
              <span className="text-sm font-bold text-white">4</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              ¡Listo! <strong className="text-purple-600">selecciona el concurso</strong> de tu preferencia y que
              empiece la diversión
            </p>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-2 pt-1 sm:pt-4">
          <p className="text-gray-600 text-xs sm:text-sm font-normal">Recuerda que</p>
          <div 
            className="flex items-center gap-1 sm:gap-2 shadow-sm justify-center"
            style={{
              width: 'clamp(120px, 80vw, 162px)',
              height: 'clamp(50px, 8vh, 60px)',
              borderRadius: '16px',
              padding: '8px',
              background: 'linear-gradient(90deg, #EBE6FC 0%, #FBFBFB 100%)'
            }}
          >
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <span 
                className="text-xs font-bold"
                style={{
                  background: 'linear-gradient(90deg, #DB086E 0%, #3A05DF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                1 Sol
              </span>
            </div>
            <span className="text-gray-600 text-xs sm:text-sm">=</span>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <span 
                className="text-xs font-bold"
                style={{
                  background: 'linear-gradient(90deg, #DB086E 0%, #3A05DF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                1 WC
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-4 sm:gap-2 pt-1 sm:pt-4 w-full max-w-[300px] sm:max-w-none">
          <Button
            onClick={onClose}
            className="px-9 gap-2 sm:px-6 py-2 sm:py-2 text-red-600 border border-gray-300 bg-white shadow-md hover:bg-gray-50 text-sm sm:text-base"
          >
            Cancelar
          </Button>
          <Button 
            className="px-9 sm:px-6 py-2 sm:py-2 text-white shadow-md text-sm sm:text-base"
            style={{
              background: 'linear-gradient(90deg, #DB086E 0%, #3A05DF 100%)'
            }}
          >
            Recargar
          </Button>
        </div>
      </div>
    </CustomModal>
  )
}
