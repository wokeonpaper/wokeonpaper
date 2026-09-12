import Image from "next/image"
import Link from "next/link"
import { stories } from "@/data/stories"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"

export const metadata = {
  title: "Stories | WokeOnPaper",
  description:
    "Long-form reporting and commentary from WokeOnPaper, for people who work in the social sector.",
}

export default function StoriesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="memes-intro">
        <p className="eyebrow">LONG-FORM</p>
        <h1>Stories worth sitting with.</h1>
        <p className="memes-intro-text">
          Reporting and commentary on governance, power and work culture in the
          Indian social sector — the stuff that doesn&apos;t fit in a single meme.
        </p>
      </section>

      <section className="story-nav-grid">
        {stories.map((story) => (
          <Link key={story.slug} href={`/stories/${story.slug}`} className="story-preview-card">
            <div className="story-preview-image">
              <Image src={story.cover} alt={story.title} width={800} height={1000} />
            </div>
            <div className="story-preview-copy">
              <span className="story-tag">{story.tag}</span>
              <h2>{story.title}</h2>
              <p>{story.dek}</p>
              <span className="read-meme">Read the story →</span>
            </div>
          </Link>
        ))}
      </section>

      <SiteFooter />
    </main>
  )
}
