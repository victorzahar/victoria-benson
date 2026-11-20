import { ColorPalette } from '@/components/color-palette'
import { Events } from '@/components/events'
import { Families } from '@/components/families'
import { Hero } from '@/components/hero'
import { InvitationVideo } from '@/components/invitation-video'
import { LoveStory } from '@/components/love-story'
import { Rsvp } from '@/components/rsvp'

export default function Page() {
  return (
    <>
      <Hero />
      <main>
        <LoveStory />
        <Families />
        <Events />
        <ColorPalette />
        <InvitationVideo />
        <Rsvp />
      </main>
      <footer className="bg-burgundy-deep px-6 py-12 text-center text-cream">
        <p className="font-script text-5xl">Ifeanyi &amp; Benson</p>
        <p className="mt-3 text-xs uppercase tracking-[0.4em] text-blush">
          9th January 2027
        </p>
      </footer>
    </>
  )
}
