"use client";
import './globals.scss'
import { Inter } from 'next/font/google'
import ReduxAndChakraProviders from "@/components/ReduxAndChakraProviders";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxAndChakraProviders children={children} />
      </body>
    </html>

  )
}
