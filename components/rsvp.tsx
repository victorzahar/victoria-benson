import { Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const contacts = [
  { name: 'Beckly', display: '+234 814 364 5400', tel: '+2348143645400' },
  { name: 'Rachel', display: '+234 808 328 0792', tel: '+2348083280792' },
]

export function Rsvp() {
  return (
    <section id="rsvp" className="bg-olive px-6 py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Kindly respond" title="RSVP" tone="light" />
        <p className="mx-auto mt-8 max-w-xl text-center text-lg italic text-cream/85">
          We would be honoured to celebrate with you. Please confirm your attendance with either contact below.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {contacts.map((contact) => (
            <li key={contact.tel}>
              <a
                href={`tel:${contact.tel}`}
                className="group flex flex-col items-center rounded-sm border border-blush/50 bg-burgundy-deep/30 px-6 py-8 text-center transition-colors hover:bg-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
              >
                <Phone className="size-5 text-blush" aria-hidden="true" />
                <span className="mt-3 font-script text-4xl">{contact.name}</span>
                <span className="mt-2 text-xl tracking-wide">{contact.display}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
