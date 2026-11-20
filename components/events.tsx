import { CalendarDays, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const events = [
  {
    title: 'Traditional Wedding',
    day: 'Friday',
    date: '8th January, 2027',
    places: [
      {
        label: 'Venue',
        name: 'The Bride’s Family Compound',
        address: 'Delta State, Nigeria',
        map: null,
      },
    ],
  },
  {
    title: 'White Wedding',
    day: 'Saturday',
    date: '9th January, 2027',
    places: [
      {
        label: 'Church Service',
        name: 'St. Luke’s Anglican Church',
        address: '25b Akinropo Close, Igbo-elerin, Ojo, Lagos State, Nigeria',
        map: 'https://www.google.com/maps/search/?api=1&query=St.+Luke%27s+Anglican+Church+25b+Akinropo+Close+Igbo-elerin+Ojo+Lagos',
      },
      {
        label: 'Reception',
        name: 'Suru Hotel and Suites',
        address: 'No 2/4 Iludun Street, along Martins Street',
        map: 'https://www.google.com/maps/search/?api=1&query=Suru+Hotel+and+Suites+Iludun+Street+Martins+Street+Lagos',
      },
    ],
  },
]

export function Events() {
  return (
    <section className="bg-blush-soft px-5 py-20">
      <Reveal>
        <SectionHeading eyebrow="Save the dates" title="Order of Events" />
      </Reveal>

      <div className="mt-12 space-y-8">
        {events.map((event) => (
          <Reveal key={event.title}>
            <article className="rounded-t-[7rem] border border-champagne bg-cream p-2 shadow-sm">
              <div className="rounded-t-[6.6rem] border border-burgundy/25 px-6 pb-9 pt-14 text-center">
                <h3 className="font-script text-4xl text-burgundy">
                  {event.title}
                </h3>
                <p className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-olive">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  {event.day}
                </p>
                <p className="mt-1 text-xl text-burgundy-deep">{event.date}</p>

                <div className="mx-auto my-6 h-px w-20 bg-sage" />

                <ul className="space-y-6">
                  {event.places.map((place) => (
                    <li key={place.label}>
                      <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-olive">
                        <MapPin className="size-4" aria-hidden="true" />
                        {place.label}
                      </p>
                      <p className="mt-2 text-lg text-burgundy-deep">
                        {place.name}
                      </p>
                      <p className="mx-auto max-w-[16rem] text-sm italic text-burgundy-deep/65">
                        {place.address}
                      </p>
                      {place.map && (
                        <a
                          href={place.map}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block border-b border-burgundy/40 pb-0.5 text-[11px] uppercase tracking-[0.3em] text-burgundy hover:text-olive"
                        >
                          Get directions
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
