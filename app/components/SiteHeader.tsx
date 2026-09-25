"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/memes", label: "Memes" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <Image
          src="/brand/logo-primary.png"
          alt="WokeOnPaper"
          width={600}
          height={592}
          className="brand-logo"
          priority
        />
      </Link>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={open ? "nav-bar open" : "nav-bar"} />
        <span className={open ? "nav-bar open" : "nav-bar"} />
        <span className={open ? "nav-bar open" : "nav-bar"} />
      </button>

      <nav className={open ? "main-nav open" : "main-nav"}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "active" : undefined}
            aria-current={isActive(link.href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
