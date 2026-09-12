import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"
import { memes } from "@/data/memes"
import MemeGrid from "./MemeGrid"

export const metadata = {
  title: "Memes | WokeOnPaper",
  description:
    "Satire, humour and uncomfortable questions from the social sector.",
}

export default function MemesPage() {
  return (
    <main className="memes-index-page">
      <SiteHeader />

      <section className="memes-intro">
        <p className="eyebrow">THE WOKE ON PAPER ARCHIVE</p>
        <h1>Memes. Many uncomfortable questions.</h1>
        <p className="memes-intro-text">
          A growing collection of satire about work, funding, power,
          communication and the everyday absurdities of the social sector.
        </p>
      </section>

      <MemeGrid memes={memes} />

      <SiteFooter />
    </main>
  )
}
