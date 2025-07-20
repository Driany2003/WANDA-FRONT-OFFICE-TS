import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-lg w-full max-w-[1164px] h-[352px] mx-auto">
      {/* Background Image */}
      <Image
        src="/banner.png"
        alt="Banner promocional"
        fill
        className="object-cover"
        priority
      />
      
      {/* Content Overlay - Botón posicionado exactamente como en la imagen */}
      <div className="relative z-10 w-full h-full flex items-end justify-end pr-8 pb-8">
        <div className="text-center" >
          <Button 
            size="lg" 
            className="relative z-[1000] bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #DB086E 0%, #3A05DF 100%)',
              width: '319px',
              height: '40px',
              padding: '10px',
              gap: '10px',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Quiero ser suscriptor
          </Button>
        </div>
      </div>
    </section>
  )
}
