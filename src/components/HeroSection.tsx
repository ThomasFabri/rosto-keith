import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 leading-tight">
            Desenhe seu <span className="font-semibold text-gray-800">primeiro rosto proporcional</span> em 5 dias
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Como criar seu primeiro rosto proporcional <span className="font-semibold text-gray-800">em casa</span>, só
            com <span className="font-semibold text-gray-800">lápis e papel</span>. Mesmo que você ache que não tem
            habilidade.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg font-medium rounded-lg shadow-lg transition-all"
            >
              Começar hoje
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <Image src="/1.png" alt="Retrato em preto e branco de perfil" fill className="object-contain" priority />
        </div>
      </div>
    </section>
  )
}
