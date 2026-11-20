export function SectionHeading({
  eyebrow,
  title,
  tone = 'dark',
}: {
  eyebrow: string
  title: string
  tone?: 'dark' | 'light'
}) {
  const light = tone === 'light'
  return (
    <div className="text-center">
      <p
        className={`text-xs uppercase tracking-[0.5em] ${light ? 'text-blush' : 'text-olive'}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-script text-5xl sm:text-7xl ${light ? 'text-cream' : 'text-burgundy'}`}
      >
        {title}
      </h2>
      <div
        aria-hidden="true"
        className="mx-auto mt-6 flex items-center justify-center gap-3"
      >
        <span className={`h-px w-16 ${light ? 'bg-blush/60' : 'bg-sage'}`} />
        <span className={`size-1.5 rotate-45 ${light ? 'bg-blush' : 'bg-burgundy'}`} />
        <span className={`h-px w-16 ${light ? 'bg-blush/60' : 'bg-sage'}`} />
      </div>
    </div>
  )
}
