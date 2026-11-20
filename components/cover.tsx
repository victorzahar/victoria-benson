import Image from 'next/image'
import { Countdown } from '@/components/countdown'

export function Cover() {
  return (
    <section className="relative overflow-hidden bg-cream pb-16">
      <Image
        src="/images/florals.png"
        alt=""
        width={1376}
        height={768}
        priority
        className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      />

      <div className="relative px-6 pt-52 text-center">
        <p className="text-[11px] uppercase tracking-[0.5em] text-olive">
          Together with their families
        </p>

        <h1 className="mt-5 text-burgundy">
          <span className="block font-script text-7xl leading-none">Ifeanyi</span>
          <span className="my-1 block font-script text-4xl text-olive">&amp;</span>
          <span className="block font-script text-7xl leading-none">Benson</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[18rem] text-[11px] uppercase leading-relaxed tracking-[0.3em] text-burgundy-deep/70">
          Ejimofor Ifeanyi Victoria
          <br />
          &amp; Benson Ehihon Umuenyen
        </p>

        <div className="relative mx-auto mt-10 h-80 w-60 overflow-hidden rounded-t-full border border-burgundy/30 p-2">
          <Image
            src="/media/hands.jpg"
            alt="Two hands held together, with an engagement ring on the bride's finger"
            width={660}
            height={1168}
            className="size-full rounded-t-full object-cover grayscale"
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-burgundy">
          <span className="h-px w-12 bg-sage" />
          <span className="text-sm uppercase tracking-[0.5em]">9 . 1 . 27</span>
          <span className="h-px w-12 bg-sage" />
        </div>
        <p className="mt-3 text-lg italic text-burgundy-deep/80">
          Saturday, 9th January 2027
        </p>
        <p className="mt-1 text-sm text-burgundy-deep/60">
          St. Luke&apos;s Anglican Church, Ojo, Lagos
        </p>

        <Countdown />

        <a
          href="#story"
          className="mt-12 inline-flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-olive"
        >
          Scroll down
          <span
            aria-hidden="true"
            className="h-10 w-px animate-pulse bg-gradient-to-b from-olive to-transparent"
          />
        </a>
      </div>
    </section>
  )
}
