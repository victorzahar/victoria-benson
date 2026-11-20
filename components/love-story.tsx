import { SectionHeading } from '@/components/section-heading'

const paragraphs = [
  'Who would have thought that an ordinary internship programme would turn out to be much more than just a journey of learning, working and gaining experience? Well, Benson and Ifeanyi certainly didn’t see this coming!',
  'They met during their internship, both focused on building their careers and probably just trying to get through the programme successfully. Little did they know that they were about to secure something far more valuable than an internship certificate — each other!',
  'What started as a simple friendship gradually blossomed into something beautiful. Through laughter, random conversations, shared moments and getting to know each other, their hearts found a connection neither of them had planned for. Somewhere along the way, friendship turned into love, and before they knew it, they had become each other’s favourite person (and probably each other’s biggest headache too!).',
  'Their journey has been about more than just falling in love. It has been about patience, understanding, laughter, growing together and choosing each other even on the days when love requires a little extra effort.',
  'Today, that beautiful journey brings them to the altar, where they are ready to exchange vows and begin a new chapter together. This time, there are no internship deadlines, no assessments and certainly no final examinations — just a lifetime commitment to love, cherish and annoy each other in the sweetest possible ways!',
  'From internship colleagues to lovers, best friends and now lifelong partners, what started as an ordinary encounter has become an extraordinary love story. And the best part? Their most exciting journey is only just beginning! ❤️',
]

export function LoveStory() {
  return (
    <section id="story" className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="How it began" title="Our Love Story" />
        <div className="mt-12 space-y-6 text-center text-lg leading-relaxed text-burgundy-deep/90 sm:text-xl">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:font-script first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-burgundy"
                  : undefined
              }
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
