import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import SideNav from "@/components/NavigationOrb"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TerraDrop - Reforest the Earth with Drones",
  description: "Nonprofit organization using drone technology to plant trees and restore deforested land.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
          <SideNav />
          <main className="min-h-screen ml-16">{children}</main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
