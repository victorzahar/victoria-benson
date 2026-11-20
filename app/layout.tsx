import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Pinyon_Script } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const script = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Ifeanyi & Benson | 9th January 2027',
  description:
    'You are invited to the wedding of Ejimofor Ifeanyi Victoria and Benson Ehihon Umuenyen. Traditional wedding 8th January 2027, white wedding 9th January 2027, Lagos, Nigeria.',
}

export const viewport: Viewport = {
  themeColor: '#6b1e34',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable}`}>
      <body className="bg-cream font-serif lining-nums text-burgundy-deep antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
