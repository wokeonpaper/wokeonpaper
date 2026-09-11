const latestArticles = [
  {
    category: "HUMOUR",
    title: "Types of Credit Chors in the Social Sector",
    description: "Not everyone gets the credit they deserve.",
    time: "2 min read",
  },
  {
    category: "SATIRE",
    title: "Are You a Good Indian Citizen?",
    description: "Asking for accountability is apparently questionable.",
    time: "2 min read",
  },
  {
    category: "HOT TAKE",
    title: "When CSR Becomes Event Management",
    description: "When impact starts looking suspiciously like a photo opportunity.",
    time: "4 min read",
  },
  {
    category: "STORIES",
    title: "Life in the Logframe",
    description: "A field note on what really happens between targets, reports and people.",
    time: "6 min read",
  },
];

const categories = [
  "Development Sector",
  "Nonprofit Life",
  "Funders & Funding",
  "CSR",
  "Government",
  "NGO Culture",
  "Impact & Evaluation",
  "Policy",
  "Communications",
];

const hotTakes = [
  "Why is every NGO hiring a “Storytelling Lead” but nobody asking who gets to tell the story?",
  "Does impact actually need a dashboard?",
  "Why does every nonprofit conference have the same five people on stage?",
  "Is “community participation” still participation when the agenda is already decided?",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#111111]">
      {/* HEADER */}
      <header className="border-b border-black/10 bg-[#f7f5ef]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" className="flex items-center gap-5">
            <div className="text-[27px] font-black leading-[0.82] tracking-[-0.08em]">
              WOKE
              <br />
              ON
              <br />
              PAPER
            </div>

            <div className="hidden border-l border-black/20 pl-5 text-sm leading-tight text-black/60 sm:block">
              Satire. Stories. Conversations.
              <br />
              For a more honest social sector.
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="/" className="border-b-2 border-black pb-1">
              Home
            </a>
            <a href="/satire" className="hover:opacity-50">
              Satire
            </a>
            <a href="/stories" className="hover:opacity-50">
              Stories
            </a>
            <a href="/hot-takes" className="hover:opacity-50">
              Hot Takes
            </a>
            <a href="/the-sector" className="hover:opacity-50">
              The Sector
            </a>
            <a href="/contribute" className="hover:opacity-50">
              Contribute
            </a>
            <a href="/about" className="hover:opacity-50">
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/wokeonpaper/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-lg hover:opacity-50"
            >
              ◎
            </a>

            <button
              className="text-xl lg:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1400px] gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 lg:px-10 lg:py-24">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/50">
              Independent media for the social sector
            </p>

            <h1 className="max-w-[700px] text-[clamp(3.5rem,7vw,7.5rem)] font-black leading-[0.88] tracking-[-0.065em]">
              The social sector takes itself very seriously.
            </h1>

            <p className="mt-2 text-[clamp(3rem,6vw,6.5rem)] font-black leading-[0.88] tracking-[-0.065em] text-black/35">
              We don&apos;t.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/65">
              WokeOnPaper is an independent media collective making sense of
              the development sector through satire, stories, conversations
              and the occasional uncomfortable question.
            </p>

            <div className="mt-8">
              <a
                href="#latest"
                className="inline-flex items-center gap-4 bg-black px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-1"
              >
                Read the latest
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden border-l border-black/10 bg-[#dedbd2] lg:min-h-[650px]">
            <div className="absolute inset-8 border border-black/20 lg:inset-12">
              <div className="flex h-full items-center justify-center p-10">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -left-4 -top-8 rotate-[-5deg] border border-black/20 bg-[#f5e9cf] px-7 py-5 text-xl font-bold shadow-sm">
                    SAME MEETING.
                    <br />
                    DIFFERENT
                    <br />
                    BUZZWORDS.
                  </div>

                  <div className="ml-auto w-3/4 rotate-[3deg] border border-black/20 bg-white p-8 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-black/50">
                      Strategic Framework
                    </p>

                    <div className="mt-6 space-y-5">
                      <div className="h-3 w-full bg-black/80" />
                      <div className="h-3 w-4/5 bg-black/20" />
                      <div className="h-3 w-full bg-black/20" />
                      <div className="h-3 w-3/5 bg-black/20" />
                    </div>

                    <p className="mt-10 text-3xl font-black leading-tight">
                      PEOPLE.
                      <br />
                      PURPOSE.
                      <br />
                      IMPACT.
                      <br />
                      SYNERGY.
                    </p>
                  </div>

                  <div className="absolute -bottom-10 -left-3 rotate-[-3deg] bg-black px-5 py-4 text-sm font-bold text-white">
                    ACTION ITEMS: 17
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section id="latest" className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mb-10 flex items-end justify-between border-b border-black pb-5">
          <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
            The Latest
          </h2>

          <a
            href="/stories"
            className="text-sm font-bold uppercase tracking-wide underline underline-offset-4"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-4">
          {latestArticles.map((article, index) => (
            <article
              key={article.title}
              className="group bg-[#f7f5ef] p-5 lg:p-6"
            >
              <div
                className={`mb-6 flex aspect-[4/3] items-end p-5 ${
                  index === 0
                    ? "bg-[#d6c6a9]"
                    : index === 1
                      ? "bg-[#c8d0ca]"
                      : index === 2
                        ? "bg-[#e1c4a8]"
                        : "bg-[#d1d0c9]"
                }`}
              >
                <span className="text-5xl font-black leading-none opacity-30">
                  0{index + 1}
                </span>
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/50">
                {article.category}
              </p>

              <h3 className="mt-2 text-2xl font-black leading-tight tracking-tight group-hover:underline">
                {article.title}
              </h3>

              <p className="mt-3 leading-relaxed text-black/60">
                {article.description}
              </p>

              <p className="mt-8 text-xs font-medium text-black/50">
                {article.time}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-black tracking-tight lg:text-4xl">
              Explore by category
            </h2>

            <a
              href="/the-sector"
              className="hidden text-sm font-bold uppercase tracking-wide underline underline-offset-4 sm:block"
            >
              View all topics →
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="border border-black/15 px-5 py-3 text-sm transition-colors hover:bg-black hover:text-white"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED + HOT TAKES */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="mb-7 flex items-end justify-between border-b border-black pb-4">
              <h2 className="text-3xl font-black lg:text-4xl">
                Featured story
              </h2>
            </div>

            <article className="grid gap-8 md:grid-cols-2">
              <div className="aspect-[4/3] bg-[#b9b3a5] p-6">
                <div className="flex h-full items-end border border-black/20 p-5">
                  <p className="max-w-xs text-4xl font-black leading-tight">
                    What participation really looks like.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/50">
                  STORIES
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight">
                  What Participation Really Looks Like
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-black/60">
                  It&apos;s not a workshop. It&apos;s a relationship.
                </p>

                <p className="mt-8 text-xs text-black/50">8 min read</p>
              </div>
            </article>
          </div>

          <div>
            <div className="mb-7 flex items-end justify-between border-b border-black pb-4">
              <h2 className="text-3xl font-black lg:text-4xl">Hot Takes</h2>

              <a
                href="/hot-takes"
                className="text-sm font-bold underline underline-offset-4"
              >
                View all →
              </a>
            </div>

            <div>
              {hotTakes.map((take, index) => (
                <a
                  href="#"
                  key={take}
                  className="group flex gap-5 border-b border-black/15 py-6"
                >
                  <span className="text-sm font-bold text-black/30">
                    0{index + 1}
                  </span>

                  <span className="text-lg font-medium leading-snug group-hover:underline">
                    {take}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-black/10 bg-[#ebe7dd]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 lg:grid-cols-2 lg:px-10 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
              Got something to say?
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight lg:text-5xl">
              Tell us what nobody is saying.
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black/65">
              Have you experienced something absurd, uncomfortable, funny or
              deeply broken in the development sector? We want to hear it.
            </p>

            <a
              href="/contribute"
              className="mt-7 inline-flex bg-black px-7 py-4 text-sm font-bold uppercase tracking-wide text-white"
            >
              Write for WokeOnPaper →
            </a>
          </div>

          <div className="border-t border-black/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
              Stay in the loop
            </p>

            <h3 className="mt-3 text-3xl font-black">
              No spam. Just good stuff.
            </h3>

            <form className="mt-6 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-h-12 flex-1 border border-black/20 bg-white px-4 outline-none focus:border-black"
              />

              <button
                type="submit"
                className="min-h-12 bg-black px-7 text-sm font-bold uppercase tracking-wide text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-10">
          <div>
            <div className="text-3xl font-black leading-[0.8] tracking-[-0.07em]">
              WOKE
              <br />
              ON
              <br />
              PAPER
            </div>

            <p className="mt-5 text-sm text-white/50">
              Satire. Stories. Conversations.
            </p>

            <p className="mt-2 text-xs text-white/35">
              © 2026 WokeOnPaper. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/70">
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/contribute" className="hover:text-white">
              Write for us
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
            <a
              href="https://www.instagram.com/wokeonpaper/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}