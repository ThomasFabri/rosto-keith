import Image from "next/image"

export function BeforeAfterSection() {
  return (
    <section className="bg-[#5a5a5a] py-8 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-light text-white mb-12">
          Em apenas <span className="font-bold">5 dias</span>:
        </h2>

        {/* Before/After Container */}
        <div className="relative">
          {/* Before/After Images */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* ANTES */}
              <div className="flex flex-col">
                <div className="bg-[#5a5a5a] text-white text-center py-3 font-bold text-lg md:text-xl">ANTES</div>
                <div className="relative aspect-[4/4] bg-white">
                  <Image src="/antes.jpg" alt="Desenho antes do curso" fill className="object-contain p-2" />
                </div>
              </div>

              {/* DEPOIS */}
              <div className="flex flex-col">
                <div className="bg-[#5a5a5a] text-white text-center py-3 font-bold text-lg md:text-xl">DEPOIS</div>
                <div className="relative aspect-[4/4] bg-white">
                  <Image src="/depois.jpg" alt="Desenho depois do curso" fill className="object-contain p-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card - Overlapping */}
          <div className="relative -mt-8 md:-mt-18 mx-auto max-w-4xl px-4">
            <div className="bg-[#ff6b35] rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-6 p-2 md:px-4">
              {/* Photo with Badge */}
              <div className="hidden md:block relative flex-shrink-0 order-1 md:order-2">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
                  <Image src="/Thomas.jpg" alt="Thomas Stralotto" fill className="object-cover" />
                </div>
                {/* Badge Icon */}
                <div className="absolute -bottom-1 -right-4 w-10 h-10 md:w-10 md:h-8">
                  <img src="a.png" alt="" />
                </div>
              </div>

              {/* Quote Text */}
              <div className="flex-1 text-center md:text-left order-2 md:order-1">
                <p className="text-white text-sm md:text-2xl italic font-light leading-relaxed">
                  &quot;Esse foi o primeiro desenho que tive coragem de mostrar para a minha família&quot;
                </p>
                <p className="text-white text-sm md:text-base">-Thomas Straiotto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
