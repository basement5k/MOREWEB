import './globals.css'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Landing Page",
  description: "A landing page with DexScreener chart and custom buttons",
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

