import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

// Load Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "AfriqueBeats | Premium Beats & Sounds from African Producers",
  description:
    "Discover exclusive beats from AfriqueBeats. Explore millions of tracks across genres, access premium content, and elevate your music production.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'