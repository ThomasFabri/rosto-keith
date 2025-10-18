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
              <img src="b.png" alt="" className="w-25 md:w-30"/>
              <h2 className="text-3xl md:text-4xl font-light text-gray-700 tracking-wide">O ARTISTA</h2>
            </div>

            {/* Introduction Text */}
            <div className="space-y-4 text-gray-900 max-w-md">
              <p className="italic text-base md:text-2xl leading-relaxed">
                &quot;Sou Keith Nunes, artista e professor, já ajudei milhares de alunos no Brasil e no exterior a destravar
                no desenho e transformar seus traços em realismo.
              </p>

              <p className="italic text-base md:text-2xl leading-relaxed">
                Criei esse desafio para você que sempre sonhou em desenhar rostos proporcionais, mas acha que não tem
                dom.
              </p>

              {/* Bold Quote */}
              <p className="text-lg md:text-3xl font-bold text-gray-600 mt-6 leading-relaxed">
                Desenhar é método e esse método está ao seu alcance.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
