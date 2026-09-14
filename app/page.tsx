import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"
import HeroCarousel from "@/app/components/HeroCarousel"
import { stories } from "@/data/stories"

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

      <section className="community-stats">
        <div className="community-stats-image">
          <Image
            src="/wokeonpaper/wop/social-sector-majdoor.png"
            alt="Social Sector Majdoor — raised fists"
            width={1080}
            height={1350}
          />
        </div>

        <div className="community-stats-copy">
          <h2>
            The social sector is talking. We&apos;re listening.
          </h2>
          <div className="community-stats-grid">
            <div className="community-stat">
              <span className="community-stat-number">10,000+</span>
              <span className="community-stat-label">
                people have joined the conversation on Instagram
              </span>
            </div>
            <div className="community-stat">
              <span className="community-stat-number">2 lakh+</span>
              <span className="community-stat-label">
                people engaging with WokeOnPaper every month
              </span>
            </div>
          </div>
        </div>
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
            <div className="fc-promo-badge-visual">
              <div className="fc-promo-badge-circle" />
              <Image
                src="/wokeonpaper/wop/frustration-guy.png"
                alt=""
                width={360}
                height={360}
                className="fc-promo-photo"
              />
            </div>
            <span className="fc-promo-num">?%</span>
            <span className="fc-promo-label">frustrated</span>
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

          <Link href="/memes/14" className="featured-card">
            <div className="featured-image">
              <Image
                src="/wokeonpaper/memes/14.png"
                alt="Impact vs Instagram"
                width={800}
                height={800}
              />
            </div>

            <div className="featured-copy">
              <span>14 · COMMUNICATIONS</span>
              <h3>Impact vs Instagram</h3>
              <p>
                What happened on the ground and what happened on social media
                are often two different stories.
              </p>
            </div>
          </Link>

          <Link href="/memes/43" className="featured-card">
            <div className="featured-image">
              <Image
                src="/wokeonpaper/memes/43.png"
                alt="Authentic stories, carefully edited"
                width={800}
                height={800}
              />
            </div>

            <div className="featured-copy">
              <span>43 · COMMUNICATIONS</span>
              <h3>Authentic Stories, Carefully Edited</h3>
              <p>
                We want the complexity of the ground, but please remove
                anything complicated.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="featured-section home-stories-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LONG-FORM</p>
            <h2>Stories worth sitting with.</h2>
          </div>

          <Link href="/stories">See all →</Link>
        </div>

        <div className="story-nav-grid home-story-grid">
          {stories.slice(0, 5).map((story) => (
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