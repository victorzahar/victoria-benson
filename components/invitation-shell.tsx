'use client'

import { useEffect, useState } from 'react'

type Phase = 'closed' | 'flap' | 'reveal' | 'open'

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
    window.setTimeout(() => setPhase('reveal'), 1300)
    window.setTimeout(() => setPhase('open'), 2300)
  }

  const flapOpen = phase !== 'closed'

  return (
    <>
      <div className="mx-auto min-h-svh w-full max-w-[480px] bg-cream shadow-2xl shadow-black/40">
        {children}
      </div>

      {phase !== 'open' && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-burgundy-deep px-4 transition-opacity duration-1000 ${
            phase === 'reveal' ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 15%, #8e2c47 0, transparent 45%), radial-gradient(circle at 85% 85%, #4f6338 0, transparent 40%)',
            }}
          />

          <p className="relative text-center text-xs uppercase tracking-[0.5em] text-blush">
            You are invited
          </p>

          <button
            type="button"
            onClick={openInvitation}
            aria-label="Open the wedding invitation"
            className="relative aspect-[4/3] w-[min(88vw,380px)] [perspective:1100px] focus-visible:outline-none"
          >
            <span className="absolute inset-0 rounded-sm bg-[#e4d2b8] shadow-2xl shadow-black/50" />

            <span
              className={`absolute inset-x-5 bottom-4 top-4 z-10 flex flex-col items-center justify-center rounded-sm border border-champagne/70 bg-cream text-burgundy transition-transform duration-700 ease-out ${
                flapOpen ? '-translate-y-24 delay-500' : ''
              }`}
            >
              <span className="font-script text-4xl">Ifeanyi &amp; Benson</span>
              <span className="mt-2 text-[10px] uppercase tracking-[0.4em] text-olive">
                9th January 2027
              </span>
            </span>

            <span
              className="absolute inset-0 z-20 bg-[#efe1cb]"
              style={{
                clipPath: 'polygon(0 0, 50% 56%, 100% 0, 100% 100%, 0 100%)',
              }}
            />

            <span
              className={`absolute inset-x-0 top-0 h-[58%] origin-top bg-[#f7ecda] transition-transform duration-700 ease-in-out ${
                flapOpen ? 'z-[5]' : 'z-30'
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: flapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              }}
            />

            <span
              className={`absolute left-1/2 top-[48%] z-40 flex size-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#a8344f,#6b1e34_55%,#3f0f1f)] shadow-lg shadow-black/50 ring-2 ring-[#8e2c47]/60 transition-all duration-500 ${
                flapOpen ? 'scale-75 opacity-0' : 'animate-pulse'
              }`}
            >
              <span className="flex size-[58px] items-center justify-center rounded-full border border-blush/50 font-script text-3xl text-blush">
                I&amp;B
              </span>
            </span>
          </button>

          <p className="relative text-center text-sm italic tracking-wide text-blush/80">
            Tap the seal to open
          </p>
        </div>
      )}
    </>
  )
}
