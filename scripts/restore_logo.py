import pathlib

files = [
    "app/page.tsx", "app/about/page.tsx", "app/memes/page.tsx",
    "app/memes/[id]/page.tsx", "app/stories/page.tsx",
]

header_text = '<span className="brand-text">WokeOnPaper</span>'
header_img = '''<Image
            src="/wokeonpaper/wop/logo.png"
            alt="WokeOnPaper"
            width={46}
            height={46}
            className="brand-logo"
            priority
          />'''

footer_text = '<span className="footer-brand-text">WokeOnPaper</span>'
footer_img = '''<Image
            src="/wokeonpaper/wop/logo.png"
            alt="WokeOnPaper"
            width={90}
            height={90}
            className="footer-logo"
          />'''

for fname in files:
    p = pathlib.Path(fname)
    if not p.exists():
        print(f"skip (missing) {fname}"); continue
    t = p.read_text(); orig = t
    t = t.replace(header_text, header_img)
    t = t.replace(footer_text, footer_img)
    if "next/image" not in t:
        t = 'import Image from "next/image"\n' + t
    if t != orig:
        p.write_text(t); print(f"Updated {fname}")
    else:
        print(f"no change {fname}")
