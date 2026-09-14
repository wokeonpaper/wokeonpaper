"use client"

import { useEffect, useState } from "react"

type Stat = {
  headline: string
  statement: string
  source: string
}

const STATS: Stat[] = [
  {
    headline: "₹34,909 crore",
    statement:
      "Companies in India spent ₹34,909 crore on CSR in 2023–24, taking five-year CSR spending to more than ₹1.44 lakh crore.",
    source: "Ministry of Corporate Affairs, Government of India, 2026.",
  },
  {
    headline: "50% of CSR implementation",
    statement:
      "About half of CSR implementation in India happens through partnerships with nonprofit organisations.",
    source: "Economic Survey 2023–24, Government of India.",
  },
  {
    headline: "2% → 17%",
    statement:
      "Public sector companies make up about 2% of companies under the CSR mandate, but contribute almost 17% of total CSR spending.",
    source: "Economic Survey 2023–24, Government of India.",
  },
  {
    headline: "70%+ of CSR spending",
    statement:
      "More than three quarters of CSR spending goes to just four areas: education, healthcare and sanitation, rural development, and environment and conservation.",
    source: "Economic Survey 2023–24, Government of India.",
  },
  {
    headline: "₹1.53 lakh crore",
    statement:
      "Companies spent ₹1.53 lakh crore on CSR between 2014 and 2022, with more than half of that spent in just the final three years.",
    source: "Economic Survey 2023–24, Government of India.",
  },
  {
    headline: "5 lakh+ NPOs",
    statement:
      "More than 5 lakh nonprofits have registered on the Government's NGO Darpan portal.",
    source: "NITI Aayog Annual Report 2025–26.",
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

  return (
    <section className="dyk-section">
      <div
        className="dyk-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <p className="dyk-kicker">Did you know?</p>

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
