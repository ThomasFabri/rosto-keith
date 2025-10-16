import Image from "next/image";

export function FaqSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start py-16 md:py-24 px-6 md:px-12">
        {/* Imagem colada na borda esquerda */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[520px] -ml-6 md:-ml-12">
          <Image
            src="/3.png"
            alt="Retrato desenhado"
            fill
            className="object-contain object-left md:object-left-top"
            priority
          />
        </div>

        {/* FAQ Content */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16 text-left">
          <h2 className="text-center md:text-left text-3xl md:text-5xl font-semibold text-gray-700 mb-10">
            FAQ
          </h2>

          <div className="space-y-10">
            {/* Item 1 */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/e.png"
                  alt="Ícone de dúvida"
                  width={28}
                  height={28}
                  className="mt-1 flex-shrink-0"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  Preciso já saber desenhar?
                </h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed pl-[40px]">
                Não. O Desafio foi feito justamente para quem está começando ou
                para quem já desenha e quer melhorar. Você vai aprender tudo
                passo a passo, de forma simples e prática.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/f.png"
                  alt="Ícone de materiais"
                  width={28}
                  height={28}
                  className="mt-1 flex-shrink-0"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  Preciso de materiais caros?
                </h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed pl-[40px]">
                De jeito nenhum. Tudo o que você precisa é de lápis grafite,
                papel e borracha. Ferramentas simples, que qualquer pessoa pode
                ter em casa.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/g.png"
                  alt="Ícone de vídeo"
                  width={28}
                  height={28}
                  className="mt-1 flex-shrink-0"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  É ao vivo ou gravado?
                </h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed pl-[40px]">
                As aulas já estão gravadas, para você assistir quando quiser.
                Assim você pode pausar, voltar e rever cada etapa no seu próprio
                ritmo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
