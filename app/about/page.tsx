import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"

export const metadata = {
  title: "About",
  description: "The story behind WokeOnPaper, and how to contribute your own social sector stories.",
}

const lookingFor = [
  {
    label: "Satirical memes",
    text: "about social sector reality — because sometimes only humour can save us.",
  },
  {
    label: "Latest reforms",
    text: "react, rant, or roast new policies (with facts, of course).",
  },
  {
    label: "Opinion pieces",
    text: "your hot takes, unpopular opinions, and 'what-actually-works' stories.",
  },
  {
    label: "Ground reality",
    text: "anecdotes straight from the field or your office — what happened vs. what was planned.",
  },
  {
    label: "Anything read-worthy",
    text: "if your WhatsApp group loved it, so will we. Promise.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="memes-intro">
        <p className="eyebrow">ABOUT</p>
        <h1>Who are we?</h1>
        <p className="memes-intro-text">
          WokeOnPaper is an independent satire media collective led by a small group of
          development practitioners. Through memes, stories, and commentary, it reflects on the
          everyday absurdities of the social sector, nudging it towards becoming more honest,
          participatory, and democratic. Blending humour with lived experience from the field,
          WokeOnPaper speaks to practitioners, inviting the sector to laugh at itself, listen
          better, and do better.
        </p>
      </section>

      <section className="contribute">
        <div className="contribute-inner">
          <p className="eyebrow">CALL FOR CONTRIBUTIONS</p>
          <h2>Share your social sector stories with WokeOnPaper.</h2>
          <p className="contribute-lead">
            If you work in, volunteer for, or regularly roll your eyes at what social sector
            organisations are doing — whether in India or globally, be it campaigns, policymaking,
            or grassroots work — we and our audience want to hear from you.
          </p>

          <h3>What we&apos;re looking for</h3>
          <p className="contribute-sub">
            We invite you to contribute in formats that thrive on humour, fresh takes, and a dash
            of honesty.
          </p>
          <ul className="contribute-list">
            {lookingFor.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong> — {item.text}
              </li>
            ))}
          </ul>

          <h3>Why contribute?</h3>
          <p>
            There are countless online communities for every niche — fitness buffs, food lovers,
            artists, gamers — but when it comes to the social sector, there are almost none that
            are truly free and independent.
          </p>
          <p>
            Most spaces are run by organisations that only talk about their own work under strict
            social media guidelines. The fear of losing funding, donations, or FCRA approval leaves
            them with no choice but to be rhetorical, never critical.
          </p>
          <p>
            We&apos;re creating a space where social workers can share their lived experiences
            without censorship, free of cost, and build solidarity. That&apos;s why you should
            contribute.
          </p>

          <div className="contribute-cta">
            <h3>How to submit</h3>
            <p>
              Send your memes, stories, reels — anything social sector and sassy — to us by email.
              If you want to stay <strong>anonymous</strong>, just say so and we&apos;ll keep your
              name and details hush-hush. If you want <strong>shoutouts and collabs</strong>, share
              your name and Instagram handle so we can tag you and give credit where it&apos;s due.
            </p>
            <a href="mailto:wokeonpaper@gmail.com" className="hero-button">
              wokeonpaper@gmail.com →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
