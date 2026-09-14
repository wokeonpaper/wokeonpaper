# WokeOnPaper

Nonprofit satire media for people who work in the social sector. Memes, long-form stories, and commentary on power, funding and work culture — nudging the sector towards being more honest, participatory and democratic.

- **Live site:** https://wokeonpaper.in
- **Instagram:** https://www.instagram.com/wokeonpaper/

---

## Tech stack

- **Next.js 16** (App Router) — the website framework
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (available) + a custom stylesheet in `app/globals.css`
- **Static export** (`output: "export"`) — the site builds to plain HTML/CSS/JS
- **Deployed to GitHub Pages** via GitHub Actions, served at the custom domain `wokeonpaper.in`

---

## Running it locally

You need [Node.js](https://nodejs.org/) 20 or newer installed.

```bash
npm install        # first time only — installs dependencies
npm run dev        # starts the local dev server
```

Then open **http://localhost:3000** in your browser.

Other commands:

```bash
npm run build      # produces the static site in the ./out folder
npm run lint       # checks code style
```

---

## Project structure

**Important:** all styling lives in `app/globals.css`. There are no per-component style files.

---

## How to add a new meme

1. Add the image to `public/memes/` (e.g. `51.png`). Keep images in **4:5 ratio** so no text is cut.
2. Add an entry to the `memes` array in `data/memes.ts`:

```ts
{
  id: 51,
  title: "Your Meme Title",
  subheading: "A one-line summary.",
  body: [
    "First paragraph of commentary.",
    "Second paragraph.",
  ],
  category: "Work Culture",
  tags: ["tag1", "tag2"],
  image: "/memes/51.png"
}
```

The homepage, archive, filters and individual page update automatically.

---

## How to add a new story

1. Add the cover image (and any supporting images) to `public/stories/`. Keep covers in **4:5 ratio**.
2. Add an entry to the `stories` array in `data/stories.ts`:

```ts
{
  id: 11,
  slug: "your-story-slug",          // becomes the URL: /stories/your-story-slug
  title: "Your Story Title",
  dek: "A one-line description shown under the title.",
  tag: "Category Name",
  cover: "/stories/your-cover.png",
  images: ["/stories/your-support.png"],   // optional
  author: "Social Sector Majdoor Union",
  authorHandle: "wokeonpaper",
  readTime: "6 min read",
  sections: [
    {
      heading: "Section Heading",
      paragraphs: ["Paragraph one.", "Paragraph two."],
      quote: "An optional pull-quote for a strong statement.",   // optional
      quoteAttribution: "Name, role",                            // optional
      figure: "/stories/your-support.png",           // optional inline image
      figureCaption: "Optional caption for the figure."          // optional
    }
  ]
}
```

The stories index and blog page generate automatically from this.

---

## Deploying (publishing changes)

The workflow is: **edit → commit → push to `main` → auto-deploy.**

```bash
git add .
git commit -m "Describe what you changed"
git push origin main
```

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`), which builds the site and publishes it to GitHub Pages. The live site updates within a few minutes. Check deploy status at:
https://github.com/wokeonpaper/wokeonpaper/actions

**Tip:** run `npm run build` locally before pushing. If it builds cleanly there, the deploy will succeed.

---

## Content notes

Some stories cite specific statistics and sources transcribed from source decks. Verify figures and attributions against original sources before promoting widely.
