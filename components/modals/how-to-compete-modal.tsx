"use client"

import { CustomModal } from "@/components/shared/custom-modal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface HowToCompeteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HowToCompeteModal({ isOpen, onClose }: HowToCompeteModalProps) {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="¿Cómo concursar?">
      <div className="space-y-6 text-center">
        <p className="text-gray-700">Sólo tienes que seguir éstos simples pasos para comenzar tu aventura:</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-sm font-bold text-white">1</span>
            </div>
            <p className="text-sm text-gray-700">
              Ingresa a Yape y <strong className="text-purple-600">realiza el depósito</strong> por el monto que desees
            </p>
          </Card>
          <Card className="p-4 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-sm font-bold text-white">2</span>
            </div>
            <p className="text-sm text-gray-700">
              Ingresa a la sección de transacciones y <strong className="text-purple-600">adjunta la constancia</strong>{" "}
              de recarga
            </p>
          </Card>
          <Card className="p-4 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-sm font-bold text-white">3</span>
            </div>
            <p className="text-sm text-gray-700">
              Nuestro equipo <strong className="text-purple-600">validará y recargará</strong> tus WC
            </p>
          </Card>
          <Card className="p-4 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-sm font-bold text-white">4</span>
            </div>
            <p className="text-sm text-gray-700">
              ¡Listo! <strong className="text-purple-600">selecciona el concurso</strong> de tu preferencia y que
              empiece la diversión
            </p>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-2 pt-4">
          <p className="text-gray-600">Recuerda que</p>
          <div className="flex items-center gap-2">
            <div className="w-16 h-8 bg-purple-100 rounded-md flex items-center justify-center">
              <span className="text-sm font-bold text-purple-600">1 Sol</span>
            </div>
            <span className="text-gray-600">=</span>
            <div className="w-16 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
              <span className="text-sm font-bold text-yellow-600">1 WC</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="px-6 py-2 text-purple-600 border-purple-600 bg-transparent"
          >
            Cancelar
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">Recargar</Button>
        </div>
      </div>
    </CustomModal>
  )
}
