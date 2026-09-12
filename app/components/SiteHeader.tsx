import Image from "next/image"
import Link from "next/link"

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
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

      <nav className="main-nav">
        <Link href="/">Home</Link>
        <Link href="/memes">Memes</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}
