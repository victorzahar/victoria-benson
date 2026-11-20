'use client'

import { useEffect, useState } from 'react'

const WEDDING = new Date('2027-01-09T00:00:00+01:00').getTime()

function remaining() {
  const diff = Math.max(0, WEDDING - Date.now())
  return {
    Days: Math.floor(diff / 86_400_000),
    Hours: Math.floor((diff / 3_600_000) % 24),
    Minutes: Math.floor((diff / 60_000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof remaining> | null>(null)

  useEffect(() => {
    setTime(remaining())
    const id = setInterval(() => setTime(remaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      role="timer"
      aria-label="Countdown to the white wedding"
      className="mt-10 grid grid-cols-4 gap-3 sm:gap-6"
    >
      {(['Days', 'Hours', 'Minutes', 'Seconds'] as const).map((unit) => (
        <div
          key={unit}
          className="flex w-16 flex-col items-center rounded-t-full border border-blush/50 bg-burgundy-deep/40 px-2 pb-3 pt-5 backdrop-blur-sm sm:w-24 sm:pt-7"
        >
          <span className="text-2xl tabular-nums sm:text-4xl">
            {time ? String(time[unit]).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-blush sm:text-xs">
            {unit}
          </span>
        </div>
      ))}
    </div>
  )
}
