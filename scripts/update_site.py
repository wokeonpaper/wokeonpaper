import pathlib

files = [
    "app/page.tsx",
    "app/about/page.tsx",
    "app/memes/page.tsx",
    "app/memes/[id]/page.tsx",
]

header_logo = """          <Image
            src="/wokeonpaper/wop/logo.png"
            alt="WokeOnPaper"
            width={105}
            height={48}
            priority
          />"""
header_replacement = '          <span className="brand-text">WokeOnPaper</span>'

footer_logo = """          <Image
            src="/wokeonpaper/wop/logo.png"
            alt="WokeOnPaper"
            width={105}
            height={105}
            className="footer-logo"
          />"""
footer_replacement = '          <span className="footer-brand-text">WokeOnPaper</span>'

nav_old = """<nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/memes">Memes</Link>
          <Link href="/about">About</Link>
        </nav>"""
nav_new = """<nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/memes">Memes</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
        </nav>"""

mail_old = """          <a href="mailto:wokeonpaper@gmail.com">
            wokeonpaper@gmail.com
          </a>"""
mail_new = mail_old + """
          <a href="https://www.instagram.com/wokeonpaper/" target="_blank" rel="noopener noreferrer">
            @wokeonpaper on Instagram
          </a>"""

featured_marker = '<section className="featured-section">'
stats_section = """<section className="sector-stats">
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

      """ + featured_marker

for fname in files:
    p = pathlib.Path(fname)
    text = p.read_text()
    orig = text
    text = text.replace(header_logo, header_replacement)
    text = text.replace(footer_logo, footer_replacement)
    text = text.replace(nav_old, nav_new)
    text = text.replace(mail_old, mail_new)
    text = text.replace("See all 50 →", "See all →")
    text = text.replace('<p className="eyebrow">50 MEMES AND COUNTING</p>', '<p className="eyebrow">THE FULL ARCHIVE</p>')
    text = text.replace("<h1>50 memes. Many uncomfortable questions.</h1>", "<h1>Memes. Many uncomfortable questions.</h1>")
    text = text.replace(featured_marker, stats_section)
    if text == orig:
        print(f"WARNING: no changes matched in {fname} — check this file manually")
    else:
        p.write_text(text)
        print(f"Updated {fname}")

# about page no longer uses Image at all — drop the now-unused import
about = pathlib.Path("app/about/page.tsx")
about_text = about.read_text()
if "<Image" not in about_text:
    about_text = about_text.replace('import Image from "next/image"\n', "")
    about.write_text(about_text)
    print("Removed unused Image import from app/about/page.tsx")
