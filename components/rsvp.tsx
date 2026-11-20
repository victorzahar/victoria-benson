'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const contacts = [
  { name: 'Beckly', display: '+234 814 364 5400', tel: '2348143645400' },
  { name: 'Rachel', display: '+234 808 328 0792', tel: '2348083280792' },
]

const fieldClass =
  'mt-2 w-full rounded-sm border border-burgundy/25 bg-cream px-4 py-3 text-base text-burgundy-deep placeholder:text-burgundy-deep/40 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20'

const labelClass = 'block text-[11px] uppercase tracking-[0.3em] text-olive'

export function Rsvp() {
  const [contact, setContact] = useState(contacts[0].tel)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'RSVP – Victoria & Benson, 9th January 2027',
      `Name: ${data.get('name')}`,
      `Attendance: ${data.get('attendance')}`,
      `Number of guests: ${data.get('guests')}`,
      `Events: ${data.getAll('events').join(', ') || 'None selected'}`,
      data.get('note') ? `Note: ${data.get('note')}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(
      `https://wa.me/${contact}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section className="bg-blush-soft px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Kindly respond" title="RSVP" />
        <p className="mx-auto mt-6 max-w-[19rem] text-center text-base italic text-burgundy-deep/70">
          We would be honoured to celebrate with you. Please confirm your
          attendance below or speak with either contact.
        </p>
      </Reveal>

      <Reveal>
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-t-[5rem] border border-champagne bg-cream px-6 pb-8 pt-12"
        >
          <div>
            <label htmlFor="name" className={labelClass}>
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </div>

          <fieldset>
            <legend className={labelClass}>Will you attend?</legend>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {['Joyfully accept', 'Regretfully decline'].map((option, i) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center justify-center rounded-sm border border-burgundy/25 px-2 py-3 text-center text-sm has-[:checked]:border-burgundy has-[:checked]:bg-burgundy has-[:checked]:text-cream"
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    defaultChecked={i === 0}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className={labelClass}>Events</legend>
            <div className="mt-3 space-y-2">
              {['Traditional Wedding', 'White Wedding & Reception'].map(
                (option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 text-base text-burgundy-deep"
                  >
                    <input
                      type="checkbox"
                      name="events"
                      value={option}
                      className="size-4 accent-[#6b1e34]"
                    />
                    {option}
                  </label>
                ),
              )}
            </div>
          </fieldset>

          <div>
            <label htmlFor="guests" className={labelClass}>
              Number of guests
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              min={1}
              max={10}
              defaultValue={1}
              inputMode="numeric"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="note" className={labelClass}>
              A note for the couple
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              placeholder="Share your wishes"
              className={fieldClass}
            />
          </div>

          <fieldset>
            <legend className={labelClass}>Send my reply to</legend>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {contacts.map((c) => (
                <label
                  key={c.tel}
                  className="flex cursor-pointer items-center justify-center rounded-sm border border-olive/40 px-2 py-3 text-sm has-[:checked]:border-olive has-[:checked]:bg-olive has-[:checked]:text-cream"
                >
                  <input
                    type="radio"
                    name="contact"
                    checked={contact === c.tel}
                    onChange={() => setContact(c.tel)}
                    className="sr-only"
                  />
                  {c.name}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-sm bg-burgundy px-6 py-4 text-xs uppercase tracking-[0.35em] text-cream transition-colors hover:bg-burgundy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
          >
            Send RSVP via WhatsApp
          </button>
        </form>
      </Reveal>

      <Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-4">
          {contacts.map((c) => (
            <li key={c.tel}>
              <a
                href={`tel:+${c.tel}`}
                className="flex flex-col items-center rounded-t-full border border-olive/40 bg-olive px-2 pb-5 pt-8 text-center text-cream"
              >
                <Phone className="size-4 text-mint" aria-hidden="true" />
                <span className="mt-2 font-script text-3xl">{c.name}</span>
                <span className="mt-1 text-xs tracking-wider">{c.display}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-14 text-center">
        <p className="font-script text-5xl text-burgundy">Victoria &amp; Benson</p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.4em] text-olive">
          9th January 2027
        </p>
        <Image
          src="/images/florals.png"
          alt=""
          width={1376}
          height={768}
          className="pointer-events-none -mb-16 mt-4 h-auto w-full rotate-180 [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
        />
      </div>
    </section>
  )
}
