"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const MEME_IDS = [50, 30, 3, 24, 13, 47]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % MEME_IDS.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero-stage">
      <div className="hero-frame">
        {MEME_IDS.map((id, i) => (
          <Image
            key={id}
            src={`/wokeonpaper/memes/${id}.png`}
            alt="WokeOnPaper meme"
            width={900}
            height={1125}
            priority={i === 0}
            className={i === active ? "hero-slide active" : "hero-slide"}
          />
        ))}

        <div className="hero-dots">
          {MEME_IDS.map((id, i) => (
            <button
              key={id}
              aria-label={`Show meme ${i + 1}`}
              onClick={() => setActive(i)}
              className={i === active ? "hero-dot active" : "hero-dot"}
            />
          ))}
        </div>
      </div>

      <div className="hero-chip hero-chip-top">
        <span className="hero-chip-num">50+</span>
        <span className="hero-chip-label">memes &amp; counting</span>
      </div>

      <div className="hero-chip hero-chip-bottom">
        <span className="hero-chip-num">10</span>
        <span className="hero-chip-label">long-form stories</span>
      </div>
    </div>
  )
}
