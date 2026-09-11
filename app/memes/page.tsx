import Image from "next/image"
import Link from "next/link"
import { memes } from "@/data/memes"

export const metadata = {
  title: "Memes | WokeOnPaper",
  description:
    "Satire, humour and uncomfortable questions from the social sector.",
}

export default function MemesPage() {
  return (
    <main className="memes-index-page">
      <header className="site-header">
        <Link href="/" className="brand">
          <Image
            src="/wop/logo.png"
            alt="WokeOnPaper"
            width={105}
            height={48}
            priority
          />
        </Link>

        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/memes">Memes</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="memes-intro">
        <p className="eyebrow">THE WOKE ON PAPER ARCHIVE</p>

        <h1>50 memes. Many uncomfortable questions.</h1>

        <p className="memes-intro-text">
          A growing collection of satire about work, funding, power,
          communication and the everyday absurdities of the social sector.
        </p>
      </section>

      <section className="meme-grid">
        {memes.map((meme) => (
          <Link
            key={meme.id}
            href={`/memes/${meme.id}`}
            className="meme-card"
          >
            <div className="meme-card-image">
              <Image
                src={meme.image}
                alt={meme.title}
                width={800}
                height={800}
              />
            </div>

            <div className="meme-card-content">
              <span className="meme-card-number">
                {String(meme.id).padStart(2, "0")}
              </span>

              <span className="meme-card-category">
                {meme.category}
              </span>

              <h2>{meme.title}</h2>

              <p>{meme.subheading}</p>

              <span className="read-meme">
                Read the take →
              </span>
            </div>
          </Link>
        ))}
      </section>

      <footer className="site-footer">
        <div>
          <Image
            src="/wop/logo.png"
            alt="WokeOnPaper"
            width={105}
            height={105}
            className="footer-logo"
          />
        </div>

        <div>
          <p className="footer-title">WokeOnPaper</p>
          <p>
            Nonprofit satire media for people who work in the social sector.
          </p>
          <a href="mailto:wokeonpaper@gmail.com">
            wokeonpaper@gmail.com
          </a>
        </div>
      </footer>
    </main>
  )
}