import Image from "next/image"

export function ArtistSection() {
  return (
    <section className="bg-[#f5f1e8] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image src="/4.png" alt="Keith Nunes desenhando" fill className="object-cover" priority />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Logo and Title */}
            <div className="flex items-center gap-4 mb-8">
              <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#ff6b35]" fill="currentColor">
                <path d="M45 15c-3.5 0-6.5 2-8 5-1.5-3-4.5-5-8-5-5 0-9 4-9 9 0 8 17 20 17 20s17-12 17-20c0-5-4-9-9-9z" />
                <ellipse cx="32" cy="45" rx="18" ry="8" opacity="0.3" />
                <path d="M20 25l3-8 3 8-3 2zm8 0l3-8 3 8-3 2zm8 0l3-8 3 8-3 2z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-light text-gray-700 tracking-wide">O ARTISTA</h2>
            </div>

            {/* Introduction Text */}
            <div className="space-y-4 text-gray-700">
              <p className="italic text-base md:text-lg leading-relaxed">
                &quot;Sou Keith Nunes, artista e professor, já ajudei milhares de alunos no Brasil e no exterior a destravar
                no desenho e transformar seus traços em realismo.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Criei esse desafio para você que sempre sonhou em desenhar rostos proporcionais, mas acha que não tem
                dom.
              </p>

              {/* Bold Quote */}
              <p className="text-lg md:text-xl font-bold text-gray-600 mt-6 leading-relaxed">
                Desenhar é método e esse método está ao seu alcance.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
