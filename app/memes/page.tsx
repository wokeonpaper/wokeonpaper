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
        <h1>Laugh. Laugh harder. Then ask &mdash; are we woke only on paper?</h1>
        <p className="memes-intro-text">Satirical takes on the everyday realities, contradictions and absurdities of the nonprofit sector &mdash; because sometimes laughter is the easiest way to start a harder conversation.</p>
      </section>

      <MemeGrid memes={memes} />

      <SiteFooter />
    </main>
  )
}
