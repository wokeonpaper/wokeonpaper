"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { toPng } from "html-to-image"
import { jsPDF } from "jspdf"
import {
  questions,
  CATEGORY_LABELS,
  categoryInsight,
  categoryPersonal,
  type CategoryKey,
} from "@/lib/frustrationData"
import {
  frustrationPercent,
  categoryPercents,
  highestCategory,
  resultBand,
  type Answers,
} from "@/lib/frustrationScoring"

type Stage = "intro" | "name" | "quiz" | "calculating" | "result"

export default function FrustrationCard() {
  const [stage, setStage] = useState<Stage>("intro")
  const [name, setName] = useState("")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const cardRef = useRef<HTMLDivElement>(null)

  const displayName = name.trim() || "You"
  const q = questions[current]
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === questions.length

  const percent = frustrationPercent(answers)
  const cats = categoryPercents(answers)
  const topCat = highestCategory(answers)
  const band = resultBand(percent)

  function selectOption(score: number) {
    setAnswers((prev) => ({ ...prev, [q.id]: score }))
  }

  function next() {
    if (current < questions.length - 1) setCurrent((c) => c + 1)
    else startCalculating()
  }

  function prev() {
    if (current > 0) setCurrent((c) => c - 1)
  }

  function startCalculating() {
    setStage("calculating")
    setTimeout(() => setStage("result"), 1900)
  }

  function safeName() {
    return displayName.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "you"
  }

  async function downloadPng() {
    if (!cardRef.current) return
    const dataUrl = await toPng(cardRef.current, { pixelRatio: 1, width: 1080, height: 1350, cacheBust: true })
    const a = document.createElement("a")
    a.href = dataUrl
    a.download = `${safeName()}-frustration-card.png`
    a.click()
  }

  async function downloadPdf() {
    if (!cardRef.current) return
    const dataUrl = await toPng(cardRef.current, { pixelRatio: 1, width: 1080, height: 1350, cacheBust: true })
    const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [1080, 1350] })
    pdf.addImage(dataUrl, "PNG", 0, 0, 1080, 1350)
    pdf.save(`${safeName()}-frustration-card.pdf`)
  }

  function copyResult() {
    const text = `${displayName} is ${percent}% frustrated with the nonprofit sector.`
    navigator.clipboard?.writeText(text)
  }

  async function shareResult() {
    const text = `${displayName} is ${percent}% frustrated with the nonprofit sector.`
    if (navigator.share) {
      try { await navigator.share({ title: "The Frustration Card", text }) } catch {}
    } else {
      copyResult()
    }
  }

  function restart() {
    setAnswers({})
    setCurrent(0)
    setName("")
    setStage("intro")
  }

  if (stage === "intro") {
    return (
      <div className="fc-shell">
        <div className="fc-intro">
          <p className="fc-kicker">The Frustration Card</p>
          <h1>How frustrated are you with the nonprofit sector?</h1>
          <p className="fc-lead">
            Answer 10 brutally honest questions about transparency, impact, pay and work culture.
            We&apos;ll calculate just how much the sector has tested your patience.
          </p>
          <button className="fc-btn-primary" onClick={() => setStage("name")}>
            Calculate my frustration →
          </button>
          <p className="fc-disclaimer">
            Not a scientific assessment. A highly unscientific measure of how much the sector has
            tested your patience.
          </p>
        </div>
      </div>
    )
  }

  if (stage === "name") {
    return (
      <div className="fc-shell">
        <div className="fc-intro">
          <p className="fc-kicker">Before we begin</p>
          <h1>What should we call you?</h1>
          <input
            className="fc-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") setStage("quiz") }}
            autoFocus
            aria-label="Your name"
          />
          <button className="fc-btn-primary" onClick={() => setStage("quiz")}>
            Let&apos;s go →
          </button>
        </div>
      </div>
    )
  }

  if (stage === "quiz") {
    const selected = answers[q.id]
    return (
      <div className="fc-shell">
        <div className="fc-quiz">
          <div className="fc-progress">
            <span>Question {current + 1} of {questions.length}</span>
            <span className="fc-cat-tag">{CATEGORY_LABELS[q.category]}</span>
          </div>
          <div className="fc-progress-bar">
            <div className="fc-progress-fill" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
          </div>

          <h2 className="fc-question">{q.text}</h2>

          <div className="fc-options" role="radiogroup" aria-label={q.text}>
            {q.options.map((opt, i) => (
              <button
                key={i}
                role="radio"
                aria-checked={selected === opt.score}
                className={selected === opt.score ? "fc-option selected" : "fc-option"}
                onClick={() => selectOption(opt.score)}
              >
                <span className="fc-option-letter">{String.fromCharCode(65 + i)}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>

          <div className="fc-nav">
            <button className="fc-btn-ghost" onClick={prev} disabled={current === 0}>← Previous</button>
            {current < questions.length - 1 ? (
              <button className="fc-btn-primary" onClick={next} disabled={selected === undefined}>Next →</button>
            ) : (
              <button className="fc-btn-primary" onClick={next} disabled={!allAnswered}>See my result →</button>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (stage === "calculating") {
    return (
      <div className="fc-shell">
        <div className="fc-calculating">
          <div className="fc-spinner" />
          <p>Calculating your frustration…</p>
        </div>
      </div>
    )
  }

  const catOrder: CategoryKey[] = ["transparency", "impact", "pay", "reality"]

  return (
    <div className="fc-shell">
      <div className="fc-result">
        <div className="fc-result-summary">
          <p className="fc-kicker">Your result</p>
          <p className="fc-big-percent">{percent}%</p>
          <p className="fc-frustrated-label">frustrated with the nonprofit sector</p>
          <h2 className="fc-band-title">{band.title}</h2>
          <p className="fc-band-copy">{band.copy}</p>

          <h3 className="fc-section-label">What&apos;s frustrating you most?</h3>
          <p className="fc-top-cat">{CATEGORY_LABELS[topCat]}</p>
          <p className="fc-insight">{categoryInsight[topCat]}</p>
          <p className="fc-personal">{categoryPersonal[topCat](displayName)}</p>

          <div className="fc-breakdown">
            {catOrder.map((cat) => (
              <div key={cat} className="fc-bar-row">
                <div className="fc-bar-head">
                  <span>{CATEGORY_LABELS[cat]}</span>
                  <span>{cats[cat]}%</span>
                </div>
                <div className="fc-bar-track">
                  <div className="fc-bar-fill" style={{ width: `${cats[cat]}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="fc-actions">
            <button className="fc-btn-primary" onClick={downloadPng}>Download PNG</button>
            <button className="fc-btn-dark" onClick={downloadPdf}>Download PDF</button>
            <button className="fc-btn-ghost" onClick={copyResult}>Copy result</button>
            <button className="fc-btn-ghost" onClick={shareResult}>Share</button>
          </div>
          <div className="fc-actions">
            <button className="fc-btn-ghost" onClick={restart}>Start over</button>
            <Link href="/" className="fc-btn-ghost">Back home</Link>
          </div>
        </div>

        <div className="fc-export-wrap" aria-hidden="true">
          <div className="fc-card" ref={cardRef}>
            <div className="fc-card-top">
              <span>WokeOnPaper</span>
              <span>THE FRUSTRATION CARD</span>
            </div>

            <div className="fc-card-hero">
              <p className="fc-card-name">{displayName}</p>
              <p className="fc-card-is">is</p>
              <p className="fc-card-percent">{percent}%</p>
              <p className="fc-card-frustrated">frustrated with the<br />nonprofit sector.</p>
            </div>

            <div className="fc-card-band">
              <p className="fc-card-band-title">{band.title}</p>
              <p className="fc-card-band-copy">{band.copy}</p>
            </div>

            <div className="fc-card-cats">
              {catOrder.map((cat) => (
                <div key={cat} className="fc-card-bar-row">
                  <span className="fc-card-bar-label">{CATEGORY_LABELS[cat]}</span>
                  <div className="fc-card-bar-track">
                    <div className="fc-card-bar-fill" style={{ width: `${cats[cat]}%` }} />
                  </div>
                  <span className="fc-card-bar-pct">{cats[cat]}%</span>
                </div>
              ))}
            </div>

            <div className="fc-card-foot">
              <span>Get yours at wokeonpaper.in</span>
              <span>A highly unscientific measure of sector frustration.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
