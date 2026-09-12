import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"

export const metadata = {
  title: "About",
  description: "The story behind WokeOnPaper.",
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

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

      <SiteFooter />
    </main>
  )
}
