import Image from "next/image"

export function BeforeAfterSection() {
  return (
    <section className="bg-[#5a5a5a] py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-light text-white mb-12">
          Em apenas <span className="font-bold">5 dias</span>:
        </h2>

        {/* Before/After Container */}
        <div className="relative">
          {/* Before/After Images */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="grid grid-cols-2">
              {/* ANTES */}
              <div className="flex flex-col">
                <div className="bg-[#5a5a5a] text-white text-center py-3 font-bold text-lg md:text-xl">ANTES</div>
                <div className="relative aspect-[3/4] bg-white">
                  <Image src="/antes.jpg" alt="Desenho antes do curso" fill className="object-contain p-4" />
                </div>
              </div>

              {/* DEPOIS */}
              <div className="flex flex-col">
                <div className="bg-[#5a5a5a] text-white text-center py-3 font-bold text-lg md:text-xl">DEPOIS</div>
                <div className="relative aspect-[3/4] bg-white">
                  <Image src="/depois.jpg" alt="Desenho depois do curso" fill className="object-contain p-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card - Overlapping */}
          <div className="relative -mt-16 mx-auto max-w-4xl px-4">
            <div className="bg-[#ff6b35] rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-4 p-6 md:p-8">
              {/* Quote Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-white text-lg md:text-2xl italic font-light leading-relaxed mb-2">
                  &quot;Esse foi o primeiro desenho que tive coragem de mostrar para a minha família&quot;
                </p>
                <p className="text-white text-sm md:text-base">-Thomas Stralotto</p>
              </div>

              {/* Photo with Badge */}
              <div className="relative flex-shrink-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
                  <Image src="/Thomas.jpg" alt="Thomas Stralotto" fill className="object-cover" />
                </div>
                {/* Badge Icon */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#ff6b35] drop-shadow-lg">
                    <circle cx="12" cy="12" r="10" fill="#ff8c5a" stroke="#ff6b35" strokeWidth="2" />
                    <path d="M12 6L13.5 10.5L18 12L13.5 13.5L12 18L10.5 13.5L6 12L10.5 10.5L12 6Z" fill="#ff6b35" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
