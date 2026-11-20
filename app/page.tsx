import { ColorPalette } from '@/components/color-palette'
import { Cover } from '@/components/cover'
import { Events } from '@/components/events'
import { Families } from '@/components/families'
import { InvitationShell } from '@/components/invitation-shell'
import { LoveStory } from '@/components/love-story'
import { Rsvp } from '@/components/rsvp'

export default function Page() {
  return (
    <InvitationShell>
      <main>
        <Cover />
        <LoveStory />
        <Families />
        <Events />
        <ColorPalette />
        <Rsvp />
      </main>
    </InvitationShell>
  )
}
