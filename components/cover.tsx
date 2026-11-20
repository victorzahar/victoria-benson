import Image from 'next/image'
import { Countdown } from '@/components/countdown'
import { Reveal } from '@/components/reveal'

export function Cover() {
  return (
    <section id="details" className="relative overflow-hidden bg-cream pb-20">
      <Image
        src="/images/florals.png"
        alt=""
        width={1376}
        height={768}
        className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      />

      <div className="relative px-6 pt-48 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.5em] text-olive">
            We are getting married
          </p>
          <h2 className="mt-4 font-script text-6xl leading-none text-burgundy">
            Save the Date
          </h2>
          <p className="mx-auto mt-6 max-w-[18rem] text-[11px] uppercase leading-relaxed tracking-[0.3em] text-burgundy-deep/70">
            Ejimofor Ifeanyi Victoria
            <br />
            &amp; Benson Ehihon Umuenyen
          </p>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto mt-10 h-80 w-60 overflow-hidden rounded-t-full border border-champagne p-2">
            <Image
              src="/media/hands.jpg"
              alt="Two hands held together, with an engagement ring on the bride's finger"
              width={660}
              height={1168}
              className="size-full rounded-t-full object-cover grayscale"
            />
          </div>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-4 text-burgundy">
          <span className="h-px w-12 bg-champagne" />
          <span className="text-sm uppercase tracking-[0.5em]">9 . 1 . 27</span>
          <span className="h-px w-12 bg-champagne" />
        </div>
        <p className="mt-3 text-lg italic text-burgundy-deep/80">
          Saturday, 9th January 2027
        </p>
        <p className="mt-1 text-sm text-burgundy-deep/60">
          St. Luke&apos;s Anglican Church, Ojo, Lagos
        </p>

        <Countdown />
      </div>
    </section>
  )
}
