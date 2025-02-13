import './globals.css'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'MORE BASED',
  description: 'MORE CLANKER MORE BASED MORE COMMUNITY MORE GROWTH',
  openGraph: {
    title: 'MORE BASED',
    description: 'MORE CLANKER MORE BASED MORE COMMUNITY MORE GROWTH',
    images: [
      {
        url: '/images/Dex Profile Image $MORE.jpg', // Add your image path here
        width: 1200,
        height: 630,
        alt: 'MORE BASED Preview Image',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#f5f5f5]">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

