import Image from 'next/image'

const reveal =
  'opacity-0 translate-y-5 transition-all duration-[1400ms] ease-out group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100'

export function Hero() {
  return (
    <section className="relative h-svh min-h-[560px] overflow-hidden bg-cream [container-type:size]">
      <div className="hero-camera absolute inset-0">
        <Image
          src="/images/garden-scene.png"
          alt="Watercolour rose garden with a stone path leading to a fountain"
          fill
          priority
          sizes="(max-width: 480px) 100vw, 480px"
          className="object-cover object-bottom"
        />

        <div className="hero-walker absolute left-1/2 top-full w-full -translate-x-[75%] -translate-y-[93%]">
          <div
            aria-hidden="true"
            className="absolute left-[75%] top-[93%] h-[7%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(60,45,20,0.28),transparent)]"
          />
          <div className="hero-stride">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/couple.png"
              alt="The bride and groom walking hand in hand towards the fountain"
              width={1007}
              height={692}
              className="relative block h-auto w-full select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[34%] bg-gradient-to-b from-cream via-cream/70 to-transparent"
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
