import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white w-full">
      {/* Main footer content */}
      <div className="container mx-auto px-4 lg:px-6 py-12">
        {/* Top row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Nuestros sponsors */}
          <div>
            <h3 className="font-semibold bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent mb-4 text-[18px]">
              Nuestros sponsors
            </h3>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2 shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-xs font-bold text-gray-700">GAMING</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2 shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-xs font-bold text-gray-700">IMPACT</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2 shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-xs font-bold text-gray-700">ENERGIA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna vacía */}
          <div></div>

          {/* Plataforma y Centro de ayuda juntos al extremo derecho */}
          <div className="flex gap-14 md:justify-self-end">
            {/* Plataforma */}
            <div>
              <h3 className="font-semibold bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent mb-4 text-[18px]">
                Plataforma
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-semibold text-[14px] bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-[14px] bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300">
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Centro de ayuda */}
            <div>
              <h3 className="font-semibold bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent mb-4 text-[18px]">
                Centro de ayuda
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-semibold text-[14px] bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-[14px] bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-[14px] bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300">
                    Política de cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-[14px] bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300">
                    Libro de reclamaciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Medios de pago y Síguenos en juntos */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-48">
            {/* Medios de pago */}
            <div>
              <h3 className="font-semibold bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent mb-4 text-[18px]">
                Medios de pago
              </h3>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#4C1D95] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="text-white font-bold text-sm">S/</span>
                  <span className="text-white font-bold text-xs ml-1">yape</span>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="text-white font-bold text-sm">plin</span>
                </div>
              </div>
            </div>

            {/* Síguenos en */}
            <div className=" justify-self-start gap-10">
              <h3 className="font-semibold bg-gradient-to-r from-[#DB086E] to-[#3A05DF] bg-clip-text text-transparent mb-4 text-[18px]">
                Síguenos en
              </h3>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar with gradient */}
      <div className="bg-gradient-to-r from-[#DB086E] to-[#3A05DF] py-4">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p className="text-[#FEFEFE] flex items-center justify-center gap-2 font-medium text-[15px]">
            <span className="text-lg">©</span>
            <span>Todos los derechos reservados</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
