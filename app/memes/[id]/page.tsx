import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"
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
      <SiteHeader />

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

            <div className="meme-credit-card">
              <Image src="/wop/logo.png" alt="" width={44} height={44} className="writer-avatar" />
              <div className="writer-id">
                <span className="writer-name">
                  Social Sector Majdoor Union
                  <svg className="verified" viewBox="0 0 24 24" width="17" height="17" aria-label="Verified">
                    <path fill="#1d9bf0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                  </svg>
                </span>
                <span className="writer-handle">@wokeonpaper</span>
              </div>
              <a href="https://www.instagram.com/wokeonpaper/" target="_blank" rel="noopener noreferrer" className="writer-follow">Follow</a>
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

      <SiteFooter />
    </main>
  )
}