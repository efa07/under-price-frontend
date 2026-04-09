import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Under Price Convenience Store | Big Savings, Just a Few Steps Down',
  description: 'Your neighborhood essential for snacks, drinks, household items, and everything in between. Located in downtown Toronto.',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }, { url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {/* {process.env.NODE_ENV === 'production' && <Analytics />} */}
      </body>
    </html>
  )
}
