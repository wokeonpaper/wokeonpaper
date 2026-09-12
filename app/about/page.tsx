import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About",
  description: "The story behind WokeOnPaper.",
}

export default function AboutPage() {
  return (
    <main>
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
        </Link>

        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/memes">Memes</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="memes-intro">
        <p className="eyebrow">ABOUT</p>
        <h1>Satire, for people who've sat through one too many strategy workshops.</h1>
        <p className="memes-intro-text">
          WokeOnPaper is a satirical media project about the social sector —
          the work, the funding, the jargon, and everything that happens when
          a beautiful theory of change meets real life. We poke fun at the
          system because we care about the people doing the actual work
          inside it.
        </p>
      </section>

      <footer className="site-footer">
        <div>
          <Image
            src="/wokeonpaper/wop/logo.png"
            alt="WokeOnPaper"
            width={90}
            height={90}
            className="footer-logo"
          />
        </div>

        <div>
          <p className="footer-title">WokeOnPaper</p>
          <p>Nonprofit satire media. Serving social sector workers since 2025.</p>
          <a href="mailto:wokeonpaper@gmail.com">wokeonpaper@gmail.com</a>
        </div>
      </footer>
    </main>
  )
}
