import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gradient-start to-gradient-end text-white relative overflow-hidden rounded-lg">
      <div className="px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">¡Accede a increíbles promociones!</h1>
            <p className="text-lg text-purple-100">
              Suscríbete ahora y sé el primero en enterarte de nuestras mejores promociones, bonos exclusivos y
              concursos especiales.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Quiero suscribirme
            </Button>
          </div>
          <div className="relative">
            <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center mx-auto">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Promociones"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
