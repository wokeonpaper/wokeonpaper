import Image from "next/image"
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

// Notes around the "who we are" illustration. Positions are in the
// 1200 x 800 stage used by the arrow SVG; each arrow ends on one person.
const whoWeAre = [
  {
    text: "We work in the sector, so we know its contradictions up close.",
    note: { left: 0, top: 70, width: 270 },
    arrow: "M160 205 C 170 280, 230 325, 312 330",
  },
  {
    text: "We stay anonymous by choice, but we don't hold back on the critique.",
    note: { left: 30, top: 670, width: 300 },
    arrow: "M250 662 C 300 600, 350 540, 400 505",
  },
  {
    text: "No funders, no sponsors. Just stories, observations, and a point of view.",
    note: { left: 420, top: 0, width: 360 },
    arrow: "M560 112 C 540 160, 560 200, 580 234",
  },
  {
    text: "We all have full-time jobs. This happens after office hours.",
    note: { left: 870, top: 670, width: 300 },
    arrow: "M950 662 C 900 600, 830 540, 778 505",
  },
  {
    text: "We're part of the same sector we poke fun at. No one gets a free pass.",
    note: { left: 930, top: 70, width: 270 },
    arrow: "M1040 205 C 1030 280, 990 320, 928 332",
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

      <section className="who-we-are" aria-label="Who we are">
        <div className="who-stage">
          <svg className="who-arrows" viewBox="0 0 1200 800" aria-hidden="true">
            <defs>
              <marker id="who-arrowhead" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="12" markerHeight="12" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
                <path d="M1 1 L 10 6 L 1 11" />
              </marker>
            </defs>
            {whoWeAre.map((item) => (
              <path key={item.text} d={item.arrow} markerEnd="url(#who-arrowhead)" />
            ))}
          </svg>

          <Image
            src="/about/who-we-are.webp"
            alt="Line drawing of five faceless people, the anonymous team behind WokeOnPaper"
            width={1400}
            height={640}
            className="who-illustration"
          />

          <ol className="who-notes">
            {whoWeAre.map((item, i) => (
              <li
                key={item.text}
                className={`who-note who-note-${i + 1}`}
                style={{
                  left: `${(item.note.left / 1200) * 100}%`,
                  top: `${(item.note.top / 800) * 100}%`,
                  width: `${(item.note.width / 1200) * 100}%`,
                }}
              >
                {item.text}
              </li>
            ))}
          </ol>
        </div>
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
