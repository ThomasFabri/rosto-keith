import Image from "next/image"

export function ChallengeSection() {
  return (
    <section className="bg-white py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-[#5a5a5a] tracking-tight">O DESAFIO</h2>

            {/* Main description with icon */}
            <div className="flex gap-4 items-start">
              <Image src="/a.png" alt="Badge icon" width={60} height={60} className="flex-shrink-0" />
              <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
                Um curso rápido e prático que vai fazer você entender o que realmente sustenta o realismo: as proporções
                certas.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4 pl-2">
              <div className="flex gap-3 items-center">
                <Image src="/c.png" alt="Results icon" width={50} height={50} className="flex-shrink-0" />
                <p className="text-gray-600 uppercase tracking-wide text-sm md:text-xl">Resultados em 5 dias</p>
              </div>

              <div className="flex gap-3 items-center">
                <Image src="/d.png" alt="Beginner icon" width={50} height={50} className="flex-shrink-0" />
                <p className="text-gray-600 uppercase tracking-wide text-sm md:text-xl">
                  100% adaptado para iniciantes
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-xl font-bold">Clique e comece hoje mesmo</p>
                <svg
                  className="w-8 h-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </div>
              <a href="https://pay.hotmart.com/P102174850Y?bid=1760832603385" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full transition-colors shadow-lg">
                  Quero desenhar um rosto proporcional
                </button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <Image
              src="/2.png"
              alt="Portrait drawing example"
              width={600}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
