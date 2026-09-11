import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand">
          <Image
            src="/wokeonpaper/wop/logo.png"
            alt="WokeOnPaper"
            width={105}
            height={48}
            priority
          />
        </Link>

        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/memes">Memes</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">WOKE ON PAPER</p>

          <h1>
            For people who work in the social sector.
            <br />
            And have questions.
          </h1>

          <p>
            The social sector is full of big ideas. We look at what happens
            when they meet real life.
          </p>

          <Link href="/memes" className="hero-button">
            Explore the memes →
          </Link>
        </div>

        <div className="hero-image">
          <div className="hero-paper">
            <Image
              src="/wokeonpaper/wop/meme-50.webp"
              alt="WokeOnPaper meme"
              width={900}
              height={900}
              priority
            />
          </div>
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

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FROM THE ARCHIVE</p>
            <h2>Things we can't stop thinking about.</h2>
          </div>

          <Link href="/memes">See all 50 →</Link>
        </div>

        <div className="featured-grid">
          <Link href="/memes/3" className="featured-card">
            <div className="featured-image">
              <Image
                src="/wokeonpaper/wop/meme-3.webp"
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
                src="/wokeonpaper/wop/meme-24.webp"
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
                src="/wokeonpaper/wop/meme-38.webp"
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
          <p className="eyebrow">SOCIAL SECTOR MAJDOOR UNION</p>

          <h2>For the people doing the work.</h2>

          <p>
            For people asking where the money went. For people who have
            attended one too many strategy workshops.
          </p>

          <Link href="/memes/30" className="text-link">
            Meet the bad NGO worker →
          </Link>
        </div>

        <div className="majdoor-images">
          <Image
            src="/wokeonpaper/wop/meme-5.webp"
            alt="WokeOnPaper meme"
            width={500}
            height={500}
          />

          <Image
            src="/wokeonpaper/wop/meme-20.webp"
            alt="WokeOnPaper meme"
            width={500}
            height={500}
          />

          <Image
            src="/wokeonpaper/wop/meme-30.webp"
            alt="A Bad NGO Worker"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="archive-cta">
        <p className="eyebrow">50 MEMES AND COUNTING</p>

        <h2>Read something. Get annoyed. Think about it.</h2>

        <Link href="/memes" className="hero-button">
          Enter the archive →
        </Link>
      </section>

      <footer className="site-footer">
        <div>
          <Image
            src="/wokeonpaper/wop/logo.png"
            alt="WokeOnPaper"
            width={105}
            height={105}
            className="footer-logo"
          />
        </div>

        <div>
          <p className="footer-title">WokeOnPaper</p>

          <p>
            Nonprofit satire media. Serving social sector workers since 2025.
          </p>

          <a href="mailto:wokeonpaper@gmail.com">
            wokeonpaper@gmail.com
          </a>
        </div>
      </footer>
    </main>
  )
}