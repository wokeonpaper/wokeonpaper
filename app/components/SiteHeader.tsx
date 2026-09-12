"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <Image
          src="/wokeonpaper/wop/logo.png"
          alt="WokeOnPaper"
          width={46}
          height={46}
          className="brand-logo"
          priority
        />
        <span className="brand-text">WokeOnPaper</span>
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
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/memes" onClick={() => setOpen(false)}>Memes</Link>
        <Link href="/stories" onClick={() => setOpen(false)}>Stories</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
      </nav>
    </header>
  )
}
