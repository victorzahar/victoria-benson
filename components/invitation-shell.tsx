'use client'

import { useEffect, useState } from 'react'

type Phase = 'closed' | 'flap' | 'leaving' | 'open'

export function InvitationShell({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>('closed')
  const locked = phase !== 'open'

  useEffect(() => {
    document.documentElement.style.overflow = locked ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [locked])

  function openInvitation() {
    if (phase !== 'closed') return
    setPhase('flap')
    window.setTimeout(() => setPhase('leaving'), 1100)
    window.setTimeout(() => setPhase('open'), 2600)
  }

  const flapOpen = phase !== 'closed'
  const started = phase === 'leaving' || phase === 'open'

  return (
    <>
      <div
        data-open={started}
        className="group relative mx-auto min-h-svh w-full max-w-[480px] bg-cream shadow-2xl shadow-black/40"
      >
        {children}
      </div>

      {phase !== 'open' && (
        <div className="pointer-events-none fixed inset-0 z-50 flex justify-center overflow-hidden">
          <div
            className={`pointer-events-auto relative h-full w-full max-w-[480px] overflow-hidden bg-[#efe3cb] transition-transform duration-[1400ms] ease-in-out [perspective:1400px] ${
              phase === 'leaving' ? 'translate-y-full' : 'translate-y-0'
            }`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(184,148,70,0.35) 1px, transparent 0)',
                backgroundSize: '22px 22px',
              }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 drop-shadow-[0_-8px_14px_rgba(80,55,15,0.18)]"
            >
              <div
                className="absolute inset-0 bg-[#f7efdf]"
                style={{
                  clipPath:
                    'polygon(0 30%, 50% 62%, 100% 30%, 100% 100%, 0 100%)',
                }}
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex h-[38%] flex-col items-center justify-end gap-2 pb-12 text-center">
              <p className="font-script text-3xl text-burgundy">
                Ifeanyi &amp; Benson
              </p>
              <p className="text-[10px] uppercase tracking-[0.45em] text-burgundy-deep/60">
                9th January 2027
              </p>
              <p className="mt-4 text-sm italic text-burgundy-deep/60">
                Tap the seal to open
              </p>
            </div>

            <div
              className={`absolute inset-x-0 top-0 h-[62%] origin-top transition-transform duration-[1000ms] ease-in-out [backface-visibility:hidden] ${
                flapOpen ? 'z-10' : 'z-30'
              }`}
              style={{
                transform: flapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              }}
            >
              <div
                className="absolute inset-0 drop-shadow-[0_10px_14px_rgba(80,55,15,0.22)]"
                aria-hidden="true"
              >
                <div
                  className="size-full bg-[#fbf5e8]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                />
              </div>
              <div className="relative flex flex-col items-center pt-16 text-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-olive">
                  You are invited
                </p>
                <p className="mt-3 font-script text-4xl text-burgundy">
                  to our wedding
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={openInvitation}
              aria-label="Open the wedding invitation"
              className={`absolute left-1/2 top-[62%] z-40 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#f3dc92,#cba24c_55%,#8a6420)] shadow-xl shadow-black/40 ring-2 ring-[#e9cf86]/70 transition-all duration-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy ${
                flapOpen
                  ? 'pointer-events-none scale-125 opacity-0'
                  : 'animate-pulse'
              }`}
            >
              <span className="flex size-[72px] items-center justify-center rounded-full border border-[#7a5718]/50 font-script text-3xl text-[#6e4d14] [text-shadow:0_1px_0_rgba(255,243,200,0.7)]">
                I&amp;B
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
