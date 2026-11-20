import { CalendarDays, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const events = [
  {
    title: 'Traditional Wedding',
    day: 'Friday',
    date: '8th January, 2027',
    venues: [
      { label: 'Venue', lines: ['The Bride’s Family Compound'] },
    ],
  },
  {
    title: 'White Wedding',
    day: 'Saturday',
    date: '9th January, 2027',
    venues: [
      {
        label: 'Church Service',
        lines: [
          'St. Luke’s Anglican Church',
          '25b Akinropo Close, Igbo-elerin, Ojo',
          'Lagos State, Nigeria',
        ],
      },
      {
        label: 'Reception',
        lines: [
          'Suru Hotel and Suites',
          'No 2/4 Iludun Street, along Martins Street',
        ],
      },
    ],
  },
]

export function Events() {
  return (
    <section className="bg-burgundy px-6 py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Save the dates" title="The Celebrations" tone="light" />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-sm border border-blush/40 bg-burgundy-deep/40 p-8 text-center sm:p-10"
            >
              <h3 className="font-script text-4xl text-blush sm:text-5xl">
                {event.title}
              </h3>
              <p className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-blush">
                <CalendarDays className="size-4" aria-hidden="true" />
                {event.day}
              </p>
              <p className="mt-2 text-2xl">{event.date}</p>

              <div className="mt-8 space-y-6 border-t border-blush/30 pt-8">
                {event.venues.map((venue) => (
                  <div key={venue.label}>
                    <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-blush">
                      <MapPin className="size-4" aria-hidden="true" />
                      {venue.label}
                    </p>
                    <p className="mt-3 space-y-1 text-lg leading-relaxed">
                      {venue.lines.map((line, i) => (
                        <span key={line} className={i === 0 ? 'block text-xl font-medium' : 'block text-cream/80'}>
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
