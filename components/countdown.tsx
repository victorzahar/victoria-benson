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
      className="mt-10 grid grid-cols-4 gap-3"
    >
      {(['Days', 'Hours', 'Minutes', 'Seconds'] as const).map((unit) => (
        <div
          key={unit}
          className="flex flex-col items-center rounded-t-full border border-burgundy/30 bg-blush-soft px-1 pb-3 pt-6"
        >
          <span className="text-2xl tabular-nums text-burgundy">
            {time ? String(time[unit]).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-olive">
            {unit}
          </span>
        </div>
      ))}
    </div>
  )
}
