import Image from "next/image"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-col">
        <Image
          src="/wop/logo.png"
          alt="WokeOnPaper"
          width={72}
          height={72}
          className="footer-logo"
        />
        <p>Nonprofit satire media. Serving social sector workers since 2025.</p>
      </div>

      <div className="footer-col">
        <p className="footer-title">Explore</p>
        <Link href="/memes">Memes</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/about">About</Link>
      </div>

      <div className="footer-col">
        <p className="footer-title">Connect</p>
        <a href="https://www.instagram.com/wokeonpaper/" target="_blank" rel="noopener noreferrer">
          @wokeonpaper on Instagram
        </a>
        <a href="mailto:wokeonpaper@gmail.com">wokeonpaper@gmail.com</a>
      </div>
    </footer>
  )
}
