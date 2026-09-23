"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const SLIDES = [
  {
    src: "/wop/hero-gandhi.webp",
    alt: "Meme: Mahatma Gandhi in pixel sunglasses says, “Glad I never had to write a grant proposal or make a pitch deck to fight systemic inequalities like NGOs do today.”",
  },
  { src: "/memes/3.png", alt: "Meme: the theory of change deck versus the change that actually happens" },
  { src: "/memes/24.png", alt: "Meme: the NGO hospital" },
  { src: "/memes/14.png", alt: "Meme: impact versus Instagram" },
  { src: "/memes/30.png", alt: "Meme: a bad NGO worker" },
  { src: "/memes/50.png", alt: "WokeOnPaper meme" },
]

const INTERVAL_MS = 4500

export default function HeroFrame() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <figure className="hero-meme-card">
      <span className="hero-tape" aria-hidden="true" />
      <span className="hero-meme-fold" aria-hidden="true" />
      <div className="hero-meme-paper">
        <div className="hero-meme-window">
          {SLIDES.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width={1080}
              height={1350}
              priority={i === 0}
              aria-hidden={i !== active}
              className={`hero-meme-slide hero-meme-slide-${i % 3}${i === active ? " active" : ""}`}
            />
          ))}
        </div>
      </div>
    </figure>
  )
}
