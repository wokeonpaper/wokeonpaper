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

      <SiteFooter />
    </main>
  )
}