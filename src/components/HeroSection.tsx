import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="1.png"
          alt="Retrato em preto e branco de perfil"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 leading-tight max-w-3xl">
          Desenhe seu <span className="font-semibold">primeiro rosto proporcional</span> em 5 dias
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
          Como criar seu primeiro rosto proporcional <span className="font-semibold">em casa</span>, só
          com <span className="font-semibold">lápis e papel</span>. Mesmo que você ache que não tem
          habilidade.
        </p>

        <div className="mt-8">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-medium rounded-lg shadow-lg transition-all w-full sm:w-auto"
          >
            Começar hoje
          </Button>
        </div>
      </div>
    </section>
  )
}
