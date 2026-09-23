import Image from "next/image"
import Link from "next/link"

const INSTAGRAM_URL = "https://www.instagram.com/wokeonpaper/"
const EMAIL = "wokeonpaper@gmail.com"

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <Image
            src="/brand/logo-reversed.png"
            alt="WokeOnPaper"
            width={480}
            height={497}
            className="footer-logo"
          />
          <p>
            Nonprofit satire media.
            <br />
            Serving social sector workers since 2025.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/memes">Memes</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
          <Link href="/participate">Participate</Link>
        </nav>

        <div className="footer-social">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="WokeOnPaper on Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="0.6" />
            </svg>
          </a>
          <a href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3.5 6.5 L 12 13 L 20.5 6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
