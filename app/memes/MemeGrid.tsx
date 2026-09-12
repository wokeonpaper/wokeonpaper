"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Meme } from "@/data/memes"

export default function MemeGrid({ memes }: { memes: Meme[] }) {
  const categories = ["All", ...Array.from(new Set(memes.map((m) => m.category)))]
  const [active, setActive] = useState("All")

  const filtered = active === "All" ? memes : memes.filter((m) => m.category === active)

  return (
    <>
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={active === cat ? "category-pill active" : "category-pill"}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="meme-grid">
        {filtered.map((meme) => (
          <Link key={meme.id} href={`/memes/${meme.id}`} className="meme-card">
            <div className="meme-card-image">
              <Image src={meme.image} alt={meme.title} width={800} height={800} />
            </div>

            <div className="meme-card-content">
              <span className="meme-card-number">{String(meme.id).padStart(2, "0")}</span>
              <span className="meme-card-category">{meme.category}</span>
              <h2>{meme.title}</h2>
              <p>{meme.subheading}</p>
              <span className="read-meme">Read the take →</span>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}
