import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    category: "SATIRE",
    title: "We're humbled and honored to...",
    description:
      "A small guide to the nonprofit social media post that has already been written, approved, scheduled and liked by the person posting it.",
    image: "/wop/meme-3.webp",
  },
  {
    category: "CSR",
    title: "CSR, but make it impact",
    description:
      "Two to three lakhs on a water tap, a broken system a year later, and a beautifully branded wall. What counts as impact?",
    image: "/wop/meme-24.webp",
  },
  {
    category: "WORK & CULTURE",
    title: "The internship economy",
    description:
      "Unpaid academic labour in exchange for an experience letter. A familiar arrangement in a sector that likes to talk about dignity.",
    image: "/wop/meme-38.webp",
  },
];

const sectors = [
  "Work & Culture",
  "Funding & Power",
  "CSR",
  "Rights & Democracy",
  "Research & Academia",
  "Communications",
  "Public Systems",
  "Field & Practice",
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <Link href="/" className="brand">
          <Image
            src="/wop/logo.png"
            alt="WokeOnPaper"
            width={190}
            height={80}
            priority
          />
        </Link>

        <nav>
          <Link href="#latest">Latest</Link>
          <Link href="#satire">Satire</Link>
          <Link href="#sector">The Sector</Link>
          <Link href="#majdoor">Majdoor Union</Link>
          <Link href="#about">About</Link>
        </nav>

        <a
          className="instagram-link"
          href="https://www.instagram.com/wokeonpaper/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow yellow-text">NONPROFIT SATIRE MEDIA</p>

          <h1>
            For people who
            <br />
            work in the
            <br />
            social sector
            <span className="hero-question">.</span>
          </h1>

          <p className="hero-intro">
            And have questions.
          </p>

          <p className="hero-description">
            WokeOnPaper is a satirical media space for the people, ideas,
            contradictions and power structures that shape the development
            sector.
          </p>

          <div className="hero-actions">
            <Link href="#latest" className="button yellow-button">
              READ THE LATEST <span>→</span>
            </Link>

            <Link href="#about" className="text-link">
              Why WokeOnPaper?
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <div className="union-sticker">
            SOCIAL SECTOR
            <br />
            MAJDOOR
            <br />
            UNION
          </div>

          <div className="meme-frame">
            <Image
              src="/wop/meme-50.webp"
              alt="WokeOnPaper satire"
              fill
              priority
              className="hero-meme"
              sizes="(max-width: 900px) 90vw, 45vw"
            />
          </div>

          <p className="hero-note">THE SECTOR HAS QUESTIONS.</p>

          <div className="scribble scribble-one">hmm.</div>
          <div className="scribble scribble-two">really?</div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro" id="about">
        <div>
          <p className="eyebrow purple-text">WHAT THIS IS</p>

          <h2>
            The social sector has no shortage of reports, frameworks, theories
            of change and impact dashboards.
            <br />
            <span>It could use a little more honesty.</span>
          </h2>
        </div>

        <p className="intro-text">
          We use humour, visual storytelling and critical commentary to make
          the everyday absurdities of nonprofit work visible. Sometimes the
          joke is just the joke. Sometimes there is an uncomfortable question
          underneath it.
        </p>
      </section>

      {/* LATEST */}
      <section className="latest" id="latest">
        <div className="section-heading">
          <div>
            <p className="eyebrow purple-text">FROM THE PAPER</p>
            <h2>The Latest</h2>
          </div>

          <Link href="#latest" className="explore-link">
            Explore all →
          </Link>
        </div>

        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <div className="article-image">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>

              <div className="article-content">
                <p className="article-category">{article.category}</p>

                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <Link href="#latest" className="read-link">
                  READ
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTOR */}
      <section className="sector" id="sector">
        <div className="section-heading">
          <div>
            <p className="eyebrow purple-text">EXPLORE THE CONVERSATION</p>
            <h2>The Sector, unpacked.</h2>
          </div>
        </div>

        <div className="sector-grid">
          {sectors.map((item, index) => (
            <Link href="#latest" className="sector-item" key={item}>
              <span className="sector-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="sector-name">{item}</span>

              <span className="sector-mark">+</span>
            </Link>
          ))}
        </div>
      </section>

      {/* MAJDOOR UNION */}
      <section className="majdoor" id="majdoor">
        <div className="majdoor-header">
          <div>
            <p className="eyebrow yellow-text">A WOKEONPAPER SERIES</p>

            <h2>
              Social Sector
              <br />
              Majdoor Union
            </h2>
          </div>

          <p>
            For the people doing the work. Questioning power, refusing unpaid
            overtime, asking where the money went, and occasionally saying what
            everyone else was thinking.
          </p>
        </div>

        <div className="union-grid">
          <div className="union-card">
            <div className="union-card-image">
              <Image
                src="/wop/meme-5.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>

            <p className="article-category">WORK & CULTURE</p>
            <h3>The Bad NGO Worker</h3>
            <p>
              Questions power. Refuses unpaid overtime. Takes credit for their
              work. Sounds like a problem until you read the list again.
            </p>
            <Link href="#latest" className="read-link light-link">
              READ
            </Link>
          </div>

          <div className="union-card">
            <div className="union-card-image">
              <Image
                src="/wop/meme-20.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>

            <p className="article-category">FUNDING & POWER</p>
            <h3>Where did the money go?</h3>
            <p>
              The budget is approved. The presentation is beautiful. The
              question remains.
            </p>
            <Link href="#latest" className="read-link light-link">
              READ
            </Link>
          </div>

          <div className="union-card">
            <div className="union-card-image">
              <Image
                src="/wop/meme-30.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>

            <p className="article-category">COMMUNICATIONS</p>
            <h3>Say less. Mean more.</h3>
            <p>
              Because sometimes the biggest communications problem is simply
              too many words.
            </p>
            <Link href="#latest" className="read-link light-link">
              READ
            </Link>
          </div>
        </div>
      </section>

      {/* SUBMISSION */}
      <section className="submission">
        <div>
          <p className="eyebrow purple-text">HAVE SOMETHING TO SAY?</p>

          <h2>
            Tell us what nobody
            <br />
            is saying.
          </h2>

          <p>
            Have a story, observation, rant, field note or beautifully
            ridiculous social sector experience? WokeOnPaper is a space for
            it.
          </p>
        </div>

        <div className="submission-actions">
          <a
            href="mailto:wokeonpaper@gmail.com"
            className="button purple-button"
          >
            WRITE TO WOKEONPAPER <span>→</span>
          </a>

          <a
            href="https://www.instagram.com/wokeonpaper/"
            target="_blank"
            rel="noreferrer"
            className="follow-link"
          >
            Follow on Instagram →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <Image
            src="/wop/logo.png"
            alt="WokeOnPaper"
            width={180}
            height={76}
          />

          <p>
            Nonprofit satire media.
            <br />
            Serving social sector workers since 2025.
          </p>
        </div>

        <div className="footer-links">
          <Link href="#latest">Latest</Link>
          <Link href="#satire">Satire</Link>
          <Link href="#sector">The Sector</Link>
          <Link href="#majdoor">Majdoor Union</Link>
          <Link href="#about">About</Link>
        </div>

        <div className="footer-contact">
          <a href="mailto:wokeonpaper@gmail.com">
            wokeonpaper@gmail.com
          </a>

          <a
            href="https://www.instagram.com/wokeonpaper/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>

          <p>© 2026 WokeOnPaper</p>
        </div>
      </footer>
    </main>
  );
}