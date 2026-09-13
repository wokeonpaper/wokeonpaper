import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"
import HeroCarousel from "@/app/components/HeroCarousel"

export default function Home() {
  return (
    <main>
      <SiteHeader />

            <section className="hero">
        <div className="hero-copy">
          <h1>
            Serving nonprofit satire
            <br />
            since 2025.
          </h1>

          <p>
            An independent satire collective of development practitioners, nudging
            the social sector to laugh at itself, listen better, and do better.
          </p>

          <Link href="/memes" className="hero-button">
            Explore the memes →
          </Link>
        </div>

        <div className="hero-image">
          <HeroCarousel />
        </div>
      </section>

      <section className="intro-section">
        <p className="eyebrow">WHY WOKE ON PAPER?</p>

        <h2>
          The social sector has no shortage of reports, frameworks, theories
          of change and impact dashboards.
        </h2>

        <p>
          It could use a little more honesty.
        </p>
      </section>

      <section className="sector-stats">
        <p className="eyebrow">THE NONPROFIT LANDSCAPE IN INDIA</p>
        <h2>Who counts as a nonprofit, and how many are there?</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">3,04,666</span>
            <span className="stat-label">Trusts</span>
            <span className="stat-percent">49.84%</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">2,50,726</span>
            <span className="stat-label">Societies</span>
            <span className="stat-percent">41.02%</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">55,861</span>
            <span className="stat-label">Section 8 Companies</span>
            <span className="stat-percent">9.14%</span>
          </div>
        </div>
        <p className="stats-source">Source: NGO Darpan, India&apos;s NGO registration portal.</p>
      </section>

      <section className="fc-promo">
        <div className="fc-promo-inner">
          <div className="fc-promo-text">
            <p className="fc-promo-kicker">Take the quiz</p>
            <h2>How frustrated are you with the nonprofit sector?</h2>
            <p>
              Ten brutally honest questions. One highly unscientific score. Find out just how
              much the sector has tested your patience &mdash; then share your Frustration Card.
            </p>
            <Link href="/frustration-card" className="hero-button">
              Calculate my frustration →
            </Link>
          </div>
          <div className="fc-promo-badge" aria-hidden="true">
            <Image
              src="/wokeonpaper/wop/frustration-guy.png"
              alt=""
              width={360}
              height={360}
              className="fc-promo-photo"
            />
            <div className="fc-promo-badge-ring">
              <span className="fc-promo-num">?%</span>
              <span className="fc-promo-label">frustrated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FROM THE ARCHIVE</p>
            <h2>Things we can't stop thinking about.</h2>
          </div>

          <Link href="/memes">See all →</Link>
        </div>

        <div className="featured-grid">
          <Link href="/memes/3" className="featured-card">
            <div className="featured-image">
              <Image
                src="/wokeonpaper/memes/3.png"
                alt="The theory of change versus the change that actually happens"
                width={800}
                height={800}
              />
            </div>

            <div className="featured-copy">
              <span>03 · SOCIAL SECTOR</span>
              <h3>The Theory of Change vs The Change</h3>
              <p>
                What happens when the beautiful diagram meets actual life?
              </p>
            </div>
          </Link>

          <Link href="/memes/24" className="featured-card">
            <div className="featured-image">
              <Image
                src="/wokeonpaper/memes/24.png"
                alt="The NGO hospital"
                width={800}
                height={800}
              />
            </div>

            <div className="featured-copy">
              <span>24 · SOCIAL SECTOR</span>
              <h3>The NGO Hospital</h3>
              <p>
                When the nonprofit sector becomes the answer to every public
                problem.
              </p>
            </div>
          </Link>

          <Link href="/memes/38" className="featured-card">
            <div className="featured-image">
              <Image
                src="/wokeonpaper/memes/38.png"
                alt="Collaboration in the nonprofit sector"
                width={800}
                height={800}
              />
            </div>

            <div className="featured-copy">
              <span>38 · COLLABORATION</span>
              <h3>Let's Discuss the Partnership First</h3>
              <p>
                Sometimes we spend more time designing the collaboration than
                doing the work.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="majdoor-section">
        <div className="majdoor-copy">
          <h2>For the people doing the work.</h2>

          <p>
            For people asking where the money went. For people who have
            attended one too many strategy workshops.
          </p>

          <Link href="/memes/30" className="text-link">
            Meet the bad NGO worker →
          </Link>
        </div>

        <div className="majdoor-fan">
          <Link href="/memes/5" className="fan-card fan-card-1">
            <Image src="/wokeonpaper/memes/5.png" alt="WokeOnPaper meme" width={500} height={625} />
          </Link>
          <Link href="/memes/20" className="fan-card fan-card-2">
            <Image src="/wokeonpaper/memes/20.png" alt="WokeOnPaper meme" width={500} height={625} />
          </Link>
          <Link href="/memes/30" className="fan-card fan-card-3">
            <Image src="/wokeonpaper/memes/30.png" alt="A Bad NGO Worker" width={500} height={625} />
          </Link>
        </div>
      </section>

      <section className="archive-cta">
        <p className="eyebrow">THE FULL ARCHIVE</p>

        <h2>Read something. Get annoyed. Think about it.</h2>

        <Link href="/memes" className="hero-button">
          Enter the archive →
        </Link>
      </section>

      <SiteFooter />
    </main>
  )
}