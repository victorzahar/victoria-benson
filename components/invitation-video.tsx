import { SectionHeading } from '@/components/section-heading'

export function InvitationVideo() {
  return (
    <section className="bg-blush-soft px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="A message from us" title="Our Invitation" />
        <div className="mx-auto mt-12 max-w-sm overflow-hidden rounded-t-[8rem] border-8 border-cream bg-burgundy-deep shadow-xl">
          <video
            src="/media/video.mp4#t=0.1"
            controls
            playsInline
            preload="metadata"
            className="aspect-[9/16] w-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
