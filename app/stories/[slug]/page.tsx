import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { stories } from "@/data/stories"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const story = stories.find((s) => s.slug === slug)
  if (!story) return { title: "Story not found | WokeOnPaper" }
  return {
    title: story.title + " | WokeOnPaper",
    description: story.dek,
    openGraph: { title: story.title, description: story.dek, images: [story.cover], type: "article" },
    twitter: { card: "summary_large_image", title: story.title, description: story.dek, images: [story.cover] },
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = stories.find((s) => s.slug === slug)
  if (!story) notFound()

  const index = stories.findIndex((s) => s.slug === slug)
  const next = stories[index + 1] ?? stories[0]

  return (
    <main>
      <SiteHeader />

      <article className="post">
        <div className="post-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/stories">Stories</Link>
        </div>

        <header className="post-header">
          <span className="story-tag">{story.tag}</span>
          <h1>{story.title}</h1>
          <p className="post-dek">{story.dek}</p>

          <div className="post-byline">
            <Image src="/wokeonpaper/wop/logo.png" alt="" width={40} height={40} className="byline-avatar" />
            <div>
              <span className="byline-name">{story.author}</span>
              <span className="byline-meta">@{story.authorHandle} &middot; {story.readTime}</span>
            </div>
          </div>
        </header>

        <div className="post-cover">
          <Image src={story.cover} alt={story.title} width={1080} height={1350} priority />
        </div>

        <div className="post-body">
          {story.sections.map((section) => {
            const attribution = section.quoteAttribution ? "\u2014 " + section.quoteAttribution : null
            return (
              <section key={section.heading} className="post-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {section.quote && (
                  <blockquote className="pull-quote">
                    <p>{section.quote}</p>
                    {attribution && <cite className="pull-cite">{attribution}</cite>}
                  </blockquote>
                )}

                {section.figure && (
                  <figure className="post-figure">
                    <Image src={section.figure} alt={section.figureCaption ?? ""} width={1080} height={1350} />
                    {section.figureCaption && <figcaption>{section.figureCaption}</figcaption>}
                  </figure>
                )}
              </section>
            )
          })}
        </div>

        <div className="writer-card">
          <div className="writer-card-top">
            <Image src="/wokeonpaper/wop/logo.png" alt="" width={52} height={52} className="writer-avatar" />
            <div className="writer-id">
              <span className="writer-name">
                {story.author}
                <svg className="verified" viewBox="0 0 24 24" width="18" height="18" aria-label="Verified">
                  <path fill="#1d9bf0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                </svg>
              </span>
              <span className="writer-handle">@{story.authorHandle}</span>
            </div>
            <a href="https://www.instagram.com/wokeonpaper/" target="_blank" rel="noopener noreferrer" className="writer-follow">Follow</a>
          </div>
          <p className="writer-bio">
            WokeOnPaper is an independent satire media collective led by a small group of development
            practitioners. Through memes, stories and commentary, it reflects on the everyday absurdities
            of the social sector &mdash; nudging it towards becoming more honest, participatory and democratic.
          </p>
        </div>

        <div className="post-next">
          <span>Next story</span>
          <Link href={`/stories/${next.slug}`}>{next.title} &rarr;</Link>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
