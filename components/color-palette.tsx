import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const swatches = [
  { name: 'Burgundy', hex: '#6B1E34' },
  { name: 'Blush', hex: '#D9A5B3' },
  { name: 'Mint', hex: '#B5D0BB' },
  { name: 'Sage Green', hex: '#8A9A6E' },
  { name: 'Olive', hex: '#4F6338' },
  { name: 'Champagne', hex: '#D9BF9F' },
  { name: 'Mocha', hex: '#7A4B36' },
  { name: 'Brown', hex: '#4A2C22' },
]

export function ColorPalette() {
  return (
    <section className="relative overflow-hidden bg-cream px-5 pb-20 pt-40 text-center">
      <Image
        src="/images/florals.png"
        alt=""
        width={1376}
        height={768}
        className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
      />

      <Reveal className="relative">
        <p className="font-script text-5xl leading-none text-burgundy">
          Victoria <span className="text-olive">&amp;</span> Benson
        </p>
        <div
          aria-hidden="true"
          className="mx-auto mt-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-14 bg-sage" />
          <span className="size-1.5 rotate-45 bg-burgundy" />
          <span className="h-px w-14 bg-sage" />
        </div>
        <p className="mt-5 text-lg tracking-[0.5em] text-burgundy-deep">
          9 . 1 . 27
        </p>
        <h2 className="mt-8 text-xs uppercase tracking-[0.5em] text-olive">
          Our Colour Palette
        </h2>
        <p className="mx-auto mt-4 max-w-[18rem] text-base italic text-burgundy-deep/70">
          Burgundy, pink and green. Please dress in these shades to celebrate
          with us.
        </p>
      </Reveal>

      <ul className="relative mt-10 grid grid-cols-4 gap-x-3 gap-y-8">
        {swatches.map((swatch, i) => (
          <li key={swatch.name}>
            <Reveal delay={i * 70} className="flex flex-col items-center">
              <div
                className="relative h-28 w-full overflow-hidden rounded-t-full shadow-[0_8px_14px_-6px_rgb(63_15_31/0.45)] ring-1 ring-white/80"
                style={{ backgroundColor: swatch.hex }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/20"
                />
              </div>
              <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.15em] text-burgundy-deep">
                {swatch.name}
              </p>
              <p className="mt-0.5 text-[9px] tracking-wider text-burgundy-deep/60">
                {swatch.hex}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
