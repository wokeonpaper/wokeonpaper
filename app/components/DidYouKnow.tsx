"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type Stat = {
  headline: string
  statement: string
  source: string
}

const STATS: Stat[] = [
  {
    headline: "83% of nonprofits struggle to get their real costs funded",
    statement:
      "83% of NGOs surveyed said they struggle to secure funding for indirect costs such as HR, finance, technology, communications and other essential organisational functions.",
    source: "The Bridgespan Group, Building Strong, Resilient NGOs in India, 2021.",
  },
  {
    headline: "Only 18% of nonprofits say they invest enough in organisational development",
    statement:
      "Only 18% of NGOs surveyed said they invest adequately in organisational development, including leadership, talent, strategy, technology and organisational capacity.",
    source: "The Bridgespan Group, Building Strong, Resilient NGOs in India, 2021.",
  },
  {
    headline: "90% of nonprofits say funding is their biggest challenge",
    statement:
      "90% of nonprofits surveyed identified funding and financial sustainability as their primary challenge, while 68% reported a funding deficit in FY 2024–25.",
    source: "Dasra, India Nonprofit Report 2026.",
  },
  {
    headline: "60% of large nonprofits have no marginalised representation in leadership",
    statement:
      "Around 60% of large and very large nonprofits surveyed reported having no leadership representation from any marginalised community.",
    source: "Dasra, India Nonprofit Report 2026.",
  },
  {
    headline: "75% of nonprofits say they are working towards systems change",
    statement:
      "Three quarters of nonprofits surveyed say they work towards systems change, while 64% engage in narrative building and 59% in meaningful collaborative action.",
    source: "Dasra, India Nonprofit Report 2026.",
  },
  {
    headline: "73% of nonprofits have no corpus fund",
    statement:
      "Nearly three quarters of nonprofits surveyed reported having no corpus fund, making it harder for organisations to build the financial resilience needed for long-term work.",
    source: "Dasra, India Nonprofit Report 2026.",
  },
]

const ROTATE_MS = 3000

export default function DidYouKnow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % STATS.length)
    }, ROTATE_MS)
    return () => clearTimeout(timer)
  }, [index, paused])

  const stat = STATS[index]
  const go = (step: number) => setIndex((i) => (i + step + STATS.length) % STATS.length)

  return (
    <section className="dyk-section">
      <div
        className="dyk-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <button type="button" className="dyk-arrow dyk-arrow-prev" aria-label="Previous statistic" onClick={() => go(-1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L 8 12 L 15 19" /></svg>
        </button>
        <button type="button" className="dyk-arrow dyk-arrow-next" aria-label="Next statistic" onClick={() => go(1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5 L 16 12 L 9 19" /></svg>
        </button>

        {/* Banraksh from Panchayat, gesturing at the stat */}
        <figure className="dyk-meme">
          <Image src="/wop/banraksh.jpg" alt="Banraksh from Panchayat, pointing at the statistic" width={310} height={322} />
          <figcaption className="dyk-bubble">Dekh raha hai Binod?</figcaption>
        </figure>

        <div key={index} className="dyk-content">
          <p className="dyk-headline">{stat.headline}</p>
          <p className="dyk-statement">{stat.statement}</p>
          <p className="dyk-source">Source: {stat.source}</p>
        </div>

        <div className="dyk-dots" role="tablist" aria-label="Statistics">
          {STATS.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show statistic ${i + 1} of ${STATS.length}`}
              className={i === index ? "dyk-dot active" : "dyk-dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
