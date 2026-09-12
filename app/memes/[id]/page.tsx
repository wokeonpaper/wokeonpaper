import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { memes } from "@/data/memes"

type Props = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return memes.map((meme) => ({
    id: meme.id.toString(),
  }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const meme = memes.find((item) => item.id === Number(id))

  if (!meme) {
    return {
      title: "Meme not found | WokeOnPaper",
    }
  }

  return {
    title: `${meme.title} | WokeOnPaper`,
    description: meme.subheading,
  }
}

export default async function MemePage({ params }: Props) {
  const { id } = await params
  const meme = memes.find((item) => item.id === Number(id))

  if (!meme) {
    notFound()
  }

  const currentIndex = memes.findIndex((item) => item.id === meme.id)
  const previousMeme = memes[currentIndex - 1]
  const nextMeme = memes[currentIndex + 1]

  return (
    <main className="meme-page">
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

      <div className="meme-page-inner">
        <div className="meme-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/memes">Memes</Link>
          <span>/</span>
          <span>{meme.category}</span>
        </div>

        <section className="meme-article">
          <div className="meme-article-copy">
            <p className="eyebrow">
              WOKE ON PAPER · {String(meme.id).padStart(2, "0")}
            </p>

            <h1>{meme.title}</h1>

            <h2>{meme.subheading}</h2>

            <div className="meme-tags">
              {meme.tags.map((tag) => (
                <span key={tag}>#{tag.replace(/\s+/g, "")}</span>
              ))}
            </div>

            <div className="meme-body">
              {meme.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="meme-credit">
              <span>WokeOnPaper</span>
              <span>Social Sector Majdoor Union</span>
            </div>
          </div>

          <div className="meme-image-wrap">
            <div className="meme-image-paper">
              <Image
                src={meme.image}
                alt={meme.title}
                width={1200}
                height={1200}
                className="meme-image"
                priority
              />
            </div>
          </div>
        </section>

        <div className="meme-navigation">
          {previousMeme ? (
            <Link href={`/memes/${previousMeme.id}`} className="meme-nav-card">
              <span>← Previous</span>
              <strong>{previousMeme.title}</strong>
            </Link>
          ) : (
            <div />
          )}

          {nextMeme ? (
            <Link href={`/memes/${nextMeme.id}`} className="meme-nav-card next">
              <span>Next →</span>
              <strong>{nextMeme.title}</strong>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

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
          <p>Nonprofit satire media for people who work in the social sector.</p>
          <a href="mailto:wokeonpaper@gmail.com">
            wokeonpaper@gmail.com
          </a>
          <a href="https://www.instagram.com/wokeonpaper/" target="_blank" rel="noopener noreferrer">
            @wokeonpaper on Instagram
          </a>
        </div>
      </footer>
    </main>
  )
}