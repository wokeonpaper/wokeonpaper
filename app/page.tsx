import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"
import HeroFrame from "@/app/components/HeroFrame"
import DidYouKnow from "@/app/components/DidYouKnow"
import CommunityTweets from "@/app/components/CommunityTweets"
import { stories, formatStoryDate } from "@/data/stories"

const CONTRIBUTION_THEMES = [
  {
    label: "Work Culture",
    copy: "The things we call “part of the job” that probably shouldn't be.",
  },
  {
    label: "Pay & Parity",
    copy: "Who gets paid what, who decides and why is everyone so secretive about it?",
  },
  {
    label: "Power & Governance",
    copy: "Who really gets to make the decisions?",
  },
  {
    label: "Impact & Funding",
    copy: "When the money shapes the work, who gets to define impact?",
  },
  {
    label: "Values & Contradictions",
    copy: "Tell us about the gap between what the sector says and what it does.",
  },
]

const COMMUNITY_POSTS = [
  { id: 1, alt: "Post by Siddharth Shankar (@bysidart) on the social sector's silence on the climate and water crisis" },
  { id: 2, alt: "Post by Social Sector Majdoor Union (@wokeonpaper) on new FCRA regulations for NGOs" },
  { id: 3, alt: "Post by Harish Hande (@harishhande) comparing NGO impact measurement to garbage theory" },
  { id: 4, alt: "Post by Social Sector Majdoor Union (@wokeonpaper) on CSR jargon" },
  { id: 5, alt: "Post by Social Sector Majdoor Union (@wokeonpaper) on inequality within the social sector" },
]

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <h1>
            Serving nonprofit{" "}
            <span className="hero-underline">
              satire
              <svg viewBox="0 0 220 26" aria-hidden="true" preserveAspectRatio="none">
                <path d="M4 17 C 60 6, 150 4, 214 10" />
                <path d="M30 22 C 90 14, 160 13, 206 18" />
              </svg>
            </span>
            <br />
            since 2025.
          </h1>

          <p className="hero-lede">
            An independent satire collective of development practitioners, nudging
            the social sector to laugh at itself, listen better, and do better.
          </p>

          <div className="hero-ctas">
            <Link href="/memes" className="hero-cta">
              Explore the memes →
            </Link>
            <Link href="/about" className="hero-textlink">
              Read our story
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>2 lakh+</strong>
              <span>Monthly reach on Instagram</span>
            </div>
            <a
              href="https://idronline.org/contributor/wokeonpaper/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-stat hero-featured"
            >
              <span>Featured on</span>
              <Image
                src="/brand/idr-logo.png"
                alt="India Development Review"
                width={360}
                height={298}
              />
            </a>
          </div>
        </div>

        <div className="hero-collage">
          <div className="hero-blob" aria-hidden="true" />
          <div className="hero-burst" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <polygon points="100,4 116,52 158,20 146,70 196,66 156,98 196,132 146,128 160,180 116,146 100,196 84,146 40,180 54,128 4,132 44,98 4,66 54,70 42,20 84,52" />
            </svg>
          </div>

          <HeroFrame />

          <p className="hero-sticky hero-sticky-left" aria-hidden="true">
            Same old problems.
            <br />
            New jargon.
            <svg viewBox="0 0 60 50">
              <path d="M8 4 C 2 24, 18 40, 50 42" />
              <path d="M40 34 L 51 42 L 40 48" />
            </svg>
          </p>

          <p className="hero-scribble hero-scribble-mission" aria-hidden="true">
            A more honest
            <br />
            social sector
          </p>

          <p className="hero-sticky hero-sticky-cycle" aria-hidden="true">
            Ideas
            <br />
            Funds
            <br />
            Impact
            <br />
            Audits
            <br />
            Repeat
          </p>

          <p className="hero-sticky hero-sticky-torn" aria-hidden="true">
            Someone had
            <br />
            to say it.
          </p>

        </div>

        <div className="hero-band">
          <p className="hero-band-label">We talk about</p>
          <ul className="hero-band-topics">
            {CONTRIBUTION_THEMES.map((theme) => (
              <li key={theme.label}>{theme.label}</li>
            ))}
          </ul>
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
        <div className="wwd-frame">
          <span className="wwd-fold" aria-hidden="true" />
          <p className="eyebrow">What Woke On Paper does</p>
          <h2 className="wwd-heading">
            We love the sector. That&apos;s why we keep{" "}
            <span className="scribble-underline">poking it.</span>
          </h2>
        </div>

        <div className="wwd-intro">
          <p className="wwd-supporting">
            Woke on Paper uses satire, stories, questions and conversations to hold up a mirror to
            India&apos;s social sector and ask whether we are practising the values we preach.
          </p>
          <Link href="/about" className="arrow-link">
            Read our story →
          </Link>
        </div>

        <ul className="wwd-pillars">
          <li>
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <path d="M6 9h28v17H18l-8 7v-7H6z" />
              <path d="M13 16h14M13 20h9" />
            </svg>
            <div>
              <h3>Pinch the sector</h3>
              <p>
                Using satire, humour and uncomfortable questions to poke at the contradictions of a
                sector that promises so much, while occasionally forgetting to look in the mirror.
              </p>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <circle cx="20" cy="12" r="5" />
              <circle cx="9" cy="16" r="3.5" />
              <circle cx="31" cy="16" r="3.5" />
              <path d="M11 32c0-6 4-10 9-10s9 4 9 10M3 31c0-4 2.5-7 6-7M37 31c0-4-2.5-7-6-7" />
            </svg>
            <div>
              <h3>Change how we work</h3>
              <p>
                Pushing the sector to take work culture, equity, pay, power and wellbeing as
                seriously as the change it wants to create outside its walls.
              </p>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <path d="M20 5a10 10 0 0 0-6 18c1.5 1.2 2 2.6 2 4v1h8v-1c0-1.4.5-2.8 2-4A10 10 0 0 0 20 5z" />
              <path d="M16 32h8M17 36h6" />
            </svg>
            <div>
              <h3>Change the way change happens</h3>
              <p>
                Making the case for organisations that listen to their own people, advocate for
                systemic change and stop treating communities as delivery targets.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <DidYouKnow />

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">COMMUNITY</p>
            <h2>What the community is talking about.</h2>
          </div>
        </div>

        <CommunityTweets posts={COMMUNITY_POSTS} />

        <div className="community-cta">
          <Link href="/participate" className="btn-outline">
            Participate in discussion
          </Link>
        </div>
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
                {story.publishedAt && (
                  <time className="story-date" dateTime={story.publishedAt}>{formatStoryDate(story.publishedAt)}</time>
                )}
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

      <section className="contribute-section">
        <p className="eyebrow">HAVE SOMETHING TO SAY?</p>

        <h2>
          Got a story the sector would rather not hear?
          <br />
          We probably want to hear it.
        </h2>

        <p className="contribute-supporting">
          Work culture horror story? A pay gap that makes no sense? A brilliant idea that
          deserves more attention? Send it our way. We&apos;re always looking for stories,
          experiences and questions that make the social sector look in the mirror.
        </p>

        <div className="contribute-actions">
          <a
            href="mailto:wokeonpaper@gmail.com?subject=Contribution%20to%20Woke%20on%20Paper"
            className="hero-button"
          >
            Contribute to Woke on Paper →
          </a>
          <Link href="/stories" className="btn-outline">
            Stories
          </Link>
        </div>

        <div className="contribute-grid">
          {CONTRIBUTION_THEMES.map((theme) => (
            <a
              key={theme.label}
              href={`mailto:wokeonpaper@gmail.com?subject=${encodeURIComponent(
                `Story idea: ${theme.label}`
              )}`}
              className="contribute-box"
            >
              <h3>{theme.label}</h3>
              <p>{theme.copy}</p>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}