import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'True Hearts - The Ultimate App for Men',
  description: 'True Hearts combines love calculators, file sharing, games, lottery and more. Built specifically for men who want it all.',
  keywords: 'love calculator, file sharing, games, lottery, men app, true hearts',
  openGraph: {
    title: 'True Hearts - The Ultimate App for Men',
    description: 'True Hearts combines love calculators, file sharing, games, lottery and more. Built specifically for men who want it all.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
