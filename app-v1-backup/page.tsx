const featured = [
  {
    image: "/wop/meme-41.webp",
    kicker: "THE SECTOR",
    title: "When the sector becomes an implementation arm",
    text: "A sharper look at what happens when organisations doing social development are pushed towards donor-defined products, targets and cost-per-beneficiary thinking.",
  },
  {
    image: "/wop/meme-19.webp",
    kicker: "FUNDING & POWER",
    title: "So, who really does what in the social sector?",
    text: "A visual way of looking at the uneasy relationship between governments, corporates, donors and nonprofits.",
  },
  {
    image: "/wop/meme-22.webp",
    kicker: "ACCOUNTABILITY",
    title: "Why are you always so critical of nonprofits?",
    text: "Because accountability should run towards the people organisations work with—not only towards the people who fund them.",
  },
];

const latest = [
  {
    image: "/wop/meme-50.webp",
    category: "PARTICIPATION",
    title: "Community voices: requested, preferred, or actually heard?",
    text: "There is a difference between asking for a community voice and being willing to hear what the community has to say.",
  },
  {
    image: "/wop/meme-30.webp",
    category: "WORK & CULTURE",
    title: "The Bad NGO Worker",
    text: "Questions power. Refuses unpaid overtime. Takes credit for their work. Sounds like a problem—until you read the list again.",
  },
  {
    image: "/wop/meme-8.webp",
    category: "CSR",
    title: "When groundwork meets corporate image-building",
    text: "What happens when the money meant for doing the work finds a more photogenic destination?",
  },
  {
    image: "/wop/meme-2.webp",
    category: "WORK & CAREERS",
    title: "Still waiting for fellowships to count as experience",
    text: "The social sector loves young talent—just not always enough to recognise the work they have already done.",
  },
  {
    image: "/wop/meme-27.webp",
    category: "FUNDING",
    title: "When grant writing becomes the work",
    text: "When the ability to write a compelling proposal starts mattering more than the work happening on the ground.",
  },
  {
    image: "/wop/meme-24.webp",
    category: "PUBLIC SYSTEMS",
    title: "NGOs: the answer to everything?",
    text: "When nonprofits are expected to fill gaps that public systems were meant to address in the first place.",
  },
];

const topics = [
  "Work & Culture",
  "Funding & Power",
  "CSR",
  "Rights & Democracy",
  "Research & Academia",
  "Communications",
  "Public Systems",
  "Field & Practice",
];

const unionPosts = [
  {
    image: "/wop/meme-35.webp",
    title: "We’re humbled and honored to…",
    text: "A small guide to the nonprofit social-media post that has already been written, approved, scheduled and liked by the person posting it.",
  },
  {
    image: "/wop/meme-10.webp",
    title: "CSR, but make it impact",
    text: "Two to three lakhs on a water tap, a broken system a year later, and a beautifully branded wall. What counts as impact?",
  },
  {
    image: "/wop/meme-11.webp",
    title: "The internship economy",
    text: "Unpaid academic labour in exchange for an experience letter. A familiar arrangement in a sector that likes to talk about dignity.",
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="brand-lockup" aria-label="WokeOnPaper home">
            <img src="/wop/logo.png" alt="WokeOnPaper Social Sector Majdoor Union" className="brand-mark" />
            <div className="brand-copy">
              <strong>WokeOnPaper</strong>
              <span>Nonprofit Satire Media</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#latest">Latest</a>
            <a href="#satire">Satire</a>
            <a href="#sector">The Sector</a>
            <a href="#union">Majdoor Union</a>
            <a href="#about">About</a>
          </nav>

          <div className="header-actions">
            <a href="https://www.instagram.com/wokeonpaper/" target="_blank" rel="noreferrer" className="instagram-link">Instagram ↗</a>
            <details className="mobile-menu">
              <summary>Menu</summary>
              <div className="mobile-menu-panel">
                <a href="#latest">Latest</a>
                <a href="#satire">Satire</a>
                <a href="#sector">The Sector</a>
                <a href="#union">Majdoor Union</a>
                <a href="#about">About</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">NONPROFIT SATIRE MEDIA</p>
            <h1>For people who work in the social sector—and have questions.</h1>
            <p className="hero-text">
              WokeOnPaper is a satirical media space for the people, ideas, contradictions and power structures that shape the development sector.
            </p>
            <div className="hero-links">
              <a className="button button-light" href="#latest">Read the latest <Arrow /></a>
              <a className="text-link light-link" href="#about">Why WokeOnPaper? <Arrow /></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-sticker">SOCIAL SECTOR<br />MAJDOOR<br />UNION</div>
            <img src="/wop/meme-3.webp" alt="The theory of change deck versus the change that actually happens" />
            <div className="scribble">THEORY ≠ REALITY</div>
          </div>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <div className="intro-inner">
          <p className="section-label">WHAT THIS IS</p>
          <p className="intro-big">
            The social sector has no shortage of reports, frameworks, theories of change and impact dashboards. It could use a little more honesty.
          </p>
          <p className="intro-small">
            We use humour, visual storytelling and critical commentary to make the everyday absurdities of nonprofit work visible—and sometimes to ask the uncomfortable question underneath the joke.
          </p>
        </div>
      </section>

      <section className="section" id="latest">
        <div className="section-heading">
          <div>
            <p className="section-label">FROM THE PAPER</p>
            <h2>The Latest</h2>
          </div>
          <a className="text-link" href="#satire">Explore all <Arrow /></a>
        </div>

        <div className="feature-grid">
          {featured.map((item, index) => (
            <article className={index === 0 ? "feature-card feature-main" : "feature-card"} key={item.title}>
              <div className="image-frame">
                <img src={item.image} alt="" />
              </div>
              <div className="card-kicker">{item.kicker}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="read-link" href="#">Read story <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="purple-section" id="satire">
        <div className="section purple-inner">
          <div className="section-heading purple-heading">
            <div>
              <p className="section-label">SATIRE, HUMOUR & COMMENTARY</p>
              <h2>Things the sector says. Things the sector does.</h2>
            </div>
            <p className="heading-note">The joke is often the shortest route to the uncomfortable question.</p>
          </div>

          <div className="latest-grid">
            {latest.map((item) => (
              <article className="latest-card" key={item.title}>
                <div className="image-frame">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-kicker">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="read-link" href="#">Read <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="sector">
        <div className="section-heading">
          <div>
            <p className="section-label">EXPLORE THE CONVERSATION</p>
            <h2>The Sector, unpacked.</h2>
          </div>
        </div>
        <div className="topic-grid">
          {topics.map((topic, i) => (
            <a href="#" className="topic" key={topic}>
              <span>0{i + 1}</span>
              <strong>{topic}</strong>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="union-section" id="union">
        <div className="section union-inner">
          <div className="union-heading">
            <div>
              <p className="section-label">A WOKEONPAPER SERIES</p>
              <h2>Social Sector Majdoor Union</h2>
            </div>
            <p>
              For the people doing the work: questioning power, refusing unpaid overtime, asking where the money went, and occasionally saying what everyone else was thinking.
            </p>
          </div>

          <div className="union-grid">
            {unionPosts.map((post) => (
              <article className="union-card" key={post.title}>
                <img src={post.image} alt="" />
                <div className="union-card-body">
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  <a className="read-link" href="#">See post <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <blockquote>
          We want authentic stories from the ground.
        </blockquote>
        <p>— Nonprofit Comms</p>
        <div className="quote-aside">And sometimes the ground has an opinion.</div>
      </section>

      <section className="contribute">
        <div className="contribute-inner">
          <div>
            <p className="section-label">HAVE SOMETHING TO SAY?</p>
            <h2>Tell us what nobody is saying.</h2>
            <p>
              Have a story, observation, rant, field note or beautifully ridiculous social-sector experience? WokeOnPaper is a space for it.
            </p>
          </div>
          <div className="contribute-actions">
            <a className="button button-dark" href="mailto:wokeonpaper@gmail.com">Write to WokeOnPaper <Arrow /></a>
            <a className="text-link" href="https://www.instagram.com/wokeonpaper/" target="_blank" rel="noreferrer">Follow on Instagram <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/wop/logo.png" alt="WokeOnPaper" />
            <p>Nonprofit satire media. Serving social-sector workers since 2025.</p>
          </div>
          <div className="footer-links">
            <a href="#latest">Latest</a>
            <a href="#satire">Satire</a>
            <a href="#sector">The Sector</a>
            <a href="#union">Majdoor Union</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-meta">
            <a href="mailto:wokeonpaper@gmail.com">wokeonpaper@gmail.com</a>
            <a href="https://www.instagram.com/wokeonpaper/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <span>© 2026 WokeOnPaper</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
