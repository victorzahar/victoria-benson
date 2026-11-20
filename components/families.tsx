import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const sides = [
  {
    role: 'The Bride',
    name: 'Ejimofor Ifeanyi Victoria',
    parents: [
      {
        name: 'Mr John Ejimofor',
        origin: 'Aniocha South LGA, Ubulu-Unor, Delta State',
      },
      {
        name: 'Mrs Patricia Onyebuchi Ejimofor',
        origin: 'Oshimili North LGA, Ibusa, Delta State',
      },
    ],
  },
  {
    role: 'The Groom',
    name: 'Benson Ehihon Umuenyen',
    parents: [
      {
        name: 'Mr Bernard Ehihon Umuenyen',
        origin: 'Abhuru-Ewatto, Esan South East LGA, Edo State',
      },
      {
        name: 'Mrs Deborah Ibhade Umuenyen',
        origin: 'Iruekpen-Ekpoma, Esan West LGA, Edo State',
      },
    ],
  },
]

export function Families() {
  return (
    <section className="bg-cream px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Joined by love" title="Our Families" />
      </Reveal>
      <div className="mt-12 space-y-8">
        {sides.map((side) => (
          <Reveal key={side.role}>
            <article className="rounded-t-[8rem] border border-burgundy/25 bg-blush-soft px-6 pb-9 pt-14 text-center">
              <p className="text-[11px] uppercase tracking-[0.4em] text-olive">
                {side.role}
              </p>
              <h3 className="mt-3 font-script text-4xl leading-tight text-burgundy">
                {side.name}
              </h3>
              <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-burgundy-deep/60">
                Son / Daughter of
              </p>
              <ul className="mt-4 space-y-4">
                {side.parents.map((parent) => (
                  <li key={parent.name}>
                    <p className="text-lg text-burgundy-deep">{parent.name}</p>
                    <p className="text-sm italic text-burgundy-deep/60">
                      of {parent.origin}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
