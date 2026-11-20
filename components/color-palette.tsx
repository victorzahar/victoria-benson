import { SectionHeading } from '@/components/section-heading'

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
    <section className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeading eyebrow="Colour of the day" title="Our Colour Palette" />
        <p className="mx-auto mt-6 max-w-xl text-lg italic text-burgundy-deep/70">
          Burgundy, pink and green. Please dress in these shades to celebrate with us.
        </p>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
          {swatches.map((swatch) => (
            <li key={swatch.name} className="flex flex-col items-center">
              <div
                className="relative h-44 w-full max-w-32 overflow-hidden rounded-t-full shadow-[0_6px_14px_-4px_rgb(63_15_31/0.35)] ring-1 ring-white/70 sm:h-52"
                style={{ backgroundColor: swatch.hex }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/20"
                />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em]">
                {swatch.name}
              </p>
              <p className="mt-1 text-xs tracking-wider text-burgundy-deep/60">
                {swatch.hex}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
