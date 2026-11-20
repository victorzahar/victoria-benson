import Image from 'next/image'
import { Countdown } from '@/components/countdown'

export function Hero() {
  return (
    <header className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-cream">
      <Image
        src="/media/hands.jpg"
        alt="The couple holding hands, with an engagement ring on her finger"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_58%] grayscale"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-burgundy-deep/90 via-burgundy/75 to-burgundy-deep/95"
      />

      <p className="text-xs uppercase tracking-[0.5em] text-blush sm:text-sm">
        Together with their families
      </p>

      <h1 className="mt-8 font-script text-6xl leading-tight sm:text-8xl md:text-9xl">
        <span className="block">Ifeanyi</span>
        <span className="block text-4xl text-blush sm:text-6xl">&amp;</span>
        <span className="block">Benson</span>
      </h1>

      <div className="mt-8 flex items-center gap-4 text-sm uppercase tracking-[0.4em] sm:text-base">
        <span className="h-px w-10 bg-blush/70 sm:w-20" />
        <span>9 . 1 . 27</span>
        <span className="h-px w-10 bg-blush/70 sm:w-20" />
      </div>

      <p className="mt-4 text-lg italic text-blush sm:text-xl">
        St. Luke&apos;s Anglican Church, Ojo, Lagos
      </p>

      <Countdown />

      <a
        href="#story"
        className="mt-12 rounded-full border border-blush/60 px-8 py-3 text-xs uppercase tracking-[0.35em] transition-colors hover:bg-blush hover:text-burgundy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
      >
        Our Story
      </a>
    </header>
  )
}
