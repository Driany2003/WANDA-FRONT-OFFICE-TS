"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CustomModal } from "@/components/shared/custom-modal"
import type { PromotionDetails } from "@/types"

interface PromotionDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  promotion: PromotionDetails
}

export function PromotionDetailsModal({ isOpen, onClose, promotion }: PromotionDetailsModalProps) {
  if (!promotion) return null

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={promotion.title}>
      <div className="space-y-6">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500">
          {promotion.breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {crumb} {index < promotion.breadcrumbs.length - 1 && <span className="mx-1">{`>`}</span>}
            </span>
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={promotion.image || "/placeholder.svg"}
            alt={promotion.title}
            width={250}
            height={250}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Title and Description */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">¡Llévate un 2x1 para ti y un amigo!</h2>
        <p className="text-gray-700 text-center">{promotion.description}</p>

        {/* How to Participate */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Cómo Participar?</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {promotion.howToParticipate.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Terms and Conditions */}
        <a href={promotion.termsLink} className="text-purple-600 hover:underline text-sm block text-center">
          Aplican términos y condiciones
        </a>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="px-6 py-2 text-purple-600 border-purple-600 bg-transparent"
          >
            Cancelar
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">Solicitar</Button>
        </div>
      </div>
    </CustomModal>
  )
}
