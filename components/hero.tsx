import Image from 'next/image'

const reveal =
  'opacity-0 translate-y-5 transition-all duration-[1400ms] ease-out group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100'

export function Hero() {
  return (
    <section className="relative h-svh min-h-[560px] overflow-hidden bg-cream">
      <Image
        src="/images/hero-couple.png"
        alt="Illustration of the bride and groom walking hand in hand through a rose garden towards a stone fountain"
        fill
        priority
        sizes="(max-width: 480px) 100vw, 480px"
        className="object-cover object-bottom transition-transform duration-[18000ms] ease-out [transform-origin:53%_46%] group-data-[open=true]:scale-[1.16]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-cream via-cream/80 to-transparent"
      />

      <div className="relative flex flex-col items-center px-6 pt-12 text-center">
        <p
          className={`text-[10px] uppercase tracking-[0.45em] text-olive delay-[700ms] ${reveal}`}
        >
          Together with their families
        </p>

        <h1
          className={`mt-4 font-script text-[2.6rem] leading-none text-burgundy delay-[1000ms] ${reveal}`}
        >
          Ifeanyi <span className="text-champagne">&amp;</span> Benson
        </h1>

        <div
          className={`mt-5 flex items-center gap-3 delay-[1400ms] ${reveal}`}
        >
          <span aria-hidden="true" className="h-px w-10 bg-champagne" />
          <p className="text-[11px] uppercase tracking-[0.4em] text-burgundy-deep/80">
            9 January 2027
          </p>
          <span aria-hidden="true" className="h-px w-10 bg-champagne" />
        </div>
      </div>

      <a
        href="#details"
        className={`absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-1 rounded-2xl bg-cream/85 px-5 py-2.5 text-[10px] uppercase tracking-[0.4em] text-burgundy shadow-lg shadow-black/10 backdrop-blur delay-[2200ms] ${reveal}`}
      >
        Scroll down
        <span
          aria-hidden="true"
          className="h-6 w-px animate-pulse bg-gradient-to-b from-champagne to-transparent"
        />
      </a>
    </section>
  )
}
