import './globals.css'
import type { Metadata } from 'next'
import {Russo_One} from 'next/font/google'
const russo_One = Russo_One({
  weight:'400',
  subsets:["latin"],

})
export const metadata: Metadata = {
  title: 'Dhanush Prabakaran',
  description: 'TECH Blog website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={russo_One.className}>{children}</body>
    </html>
  )
}
