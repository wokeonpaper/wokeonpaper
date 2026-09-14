import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"
import HeroCarousel from "@/app/components/HeroCarousel"
import DidYouKnow from "@/app/components/DidYouKnow"
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
            src="/wop/social-sector-majdoor.png"
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

      <section className="wwd-section">
        <p className="eyebrow">WHAT WOKE ON PAPER DOES</p>
        <h2 className="wwd-heading">We love the sector. That&apos;s why we keep poking it.</h2>
        <p className="wwd-supporting">
          Woke on Paper uses satire, stories, questions and conversations to hold up a mirror to
          India&apos;s social sector and ask whether we are practising the values we preach.
        </p>

        <div className="wwd-grid">
          <div className="wwd-box">
            <h3>Pinch the sector</h3>
            <p>
              Using satire, humour and uncomfortable questions to poke at the contradictions of a
              sector that promises so much, while occasionally forgetting to look in the mirror.
            </p>
          </div>
          <div className="wwd-box">
            <h3>Change how we work</h3>
            <p>
              Pushing the sector to take work culture, equity, pay, power and wellbeing as
              seriously as the change it wants to create outside its walls.
            </p>
          </div>
          <div className="wwd-box">
            <h3>Change the way change happens</h3>
            <p>
              Making the case for organisations that listen to their own people, advocate for
              systemic change and stop treating communities as delivery targets.
            </p>
          </div>
        </div>
      </section>

      <DidYouKnow />

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
                src="/wop/frustration-guy.png"
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
                src="/memes/3.png"
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
                src="/memes/24.png"
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
                src="/memes/38.png"
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
                src="/memes/14.png"
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
                src="/memes/43.png"
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

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LONG-FORM</p>
            <h2>Hot takes on power, politics, and work culture of nonprofits.</h2>
          </div>

          <Link href="/stories">See all →</Link>
        </div>

        <div className="featured-grid">
          {stories.slice(0, 5).map((story) => (
            <Link key={story.slug} href={`/stories/${story.slug}`} className="featured-card">
              <div className="featured-image">
                <Image src={story.cover} alt={story.title} width={800} height={800} />
              </div>
              <div className="featured-copy">
                <span>{story.tag.toUpperCase()}</span>
                <h3>{story.title}</h3>
                <p>{story.dek}</p>
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
            <Image src="/memes/5.png" alt="WokeOnPaper meme" width={500} height={625} />
          </Link>
          <Link href="/memes/20" className="fan-card fan-card-2">
            <Image src="/memes/20.png" alt="WokeOnPaper meme" width={500} height={625} />
          </Link>
          <Link href="/memes/30" className="fan-card fan-card-3">
            <Image src="/memes/30.png" alt="A Bad NGO Worker" width={500} height={625} />
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