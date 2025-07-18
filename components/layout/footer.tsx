import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 w-full">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-purple-600 mb-4">Nuestros sponsors</h3>
            <div className="flex gap-3">
              <Image src="/sponsor-1.png" alt="Sponsor 1" width={48} height={48} className="rounded-lg bg-gray-100" />
              <Image src="/sponsor-2.png" alt="Sponsor 2" width={48} height={48} className="rounded-lg bg-gray-100" />
              <Image src="/sponsor-3.png" alt="Sponsor 3" width={48} height={48} className="rounded-lg bg-gray-100" />
            </div>

            <h3 className="font-semibold text-purple-600 mb-4 mt-8">Medios de pago</h3>
            <div className="flex gap-3 mb-6">
              <Image src="/yape-logo.png" alt="Yape" width={48} height={32} className="rounded bg-gray-100" />
              <Image src="/plin-logo.png" alt="Plin" width={48} height={32} className="rounded bg-gray-100" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-purple-600 mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-600 text-purple-600">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 text-purple-600">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>

            <h4 className="font-semibold text-purple-600 mb-4 mt-8">Síguenos en</h4>
            <div className="flex gap-3">
              <Image src="/tiktok-logo.png" alt="TikTok" width={32} height={32} className="rounded-full bg-gray-100" />
              <Image
                src="/instagram-logo.png"
                alt="Instagram"
                width={32}
                height={32}
                className="rounded-full bg-gray-100"
              />
              <Image
                src="/facebook-logo.png"
                alt="Facebook"
                width={32}
                height={32}
                className="rounded-full bg-gray-100"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-purple-600 mb-4">Centro de ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-600 text-purple-600">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 text-purple-600">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 text-purple-600">
                  Política de cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 text-purple-600">
                  Libro de reclamaciones
                </a>
              </li>
            </ul>
          </div>

          <div></div>
        </div>

        <div className="bg-gradient-to-r from-gradient-start to-gradient-end mt-8 pt-8 text-center">
          <p className="text-sm text-white">© 2024 Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
