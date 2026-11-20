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
    <section className="bg-blush-soft px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Joined by love" title="Our Families" />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {sides.map((side) => (
            <article
              key={side.role}
              className="rounded-t-[10rem] border border-burgundy/20 bg-cream px-8 pb-10 pt-16 text-center shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-olive">
                {side.role}
              </p>
              <h3 className="mt-3 font-script text-4xl text-burgundy sm:text-5xl">
                {side.name}
              </h3>
              <p className="mt-8 text-xs uppercase tracking-[0.35em] text-burgundy/60">
                Son / Daughter of
              </p>
              <ul className="mt-4 space-y-6">
                {side.parents.map((parent) => (
                  <li key={parent.name}>
                    <p className="text-xl font-medium">{parent.name}</p>
                    <p className="mt-1 italic text-burgundy-deep/70">
                      of {parent.origin}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
