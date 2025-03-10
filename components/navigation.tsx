"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Music } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const routes = [
  { name: "Home", path: "/" },
  { name: "Browse Beats", path: "/browse" },
  { name: "Top Charts", path: "/charts" },
  { name: "Genres", path: "/genres" },
  { name: "Pricing", path: "/pricing" },
  { name: "Reviews", path: "/reviews" },
  { name: "Analytics", path: "/analytics" },
  { name: "Contact Us", path: "/contact" },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Music size={32} className="text-primary" />
          <span className="text-2xl font-bold font-poppins">AfriqueBeats</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {routes.map((route) => (
              <li key={route.path}>
                <Link href={route.path} className="font-medium hover:text-primary transition-colors">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md">
          <div className="container-custom py-4">
            <ul className="flex flex-col gap-4">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="font-medium block py-2 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

