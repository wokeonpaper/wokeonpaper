"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { toPng } from "html-to-image"
import { jsPDF } from "jspdf"
import {
  questions,
  CATEGORY_LABELS,
  biggestFrustrationCopy,
  type CategoryKey,
} from "@/lib/frustrationData"
import {
  calculateFrustrationPercentage,
  calculateCategoryScores,
  getBiggestFrustration,
  getResultBand,
  generateResultCopy,
  type Answers,
} from "@/lib/frustrationScoring"

type Stage = "intro" | "name" | "quiz" | "calculating" | "result"

const CARD_WIDTH = 1080
const CARD_HEIGHT = 1350
const CATEGORY_ORDER: CategoryKey[] = ["pay", "workCulture", "values"]

export default function FrustrationCard() {
  const [stage, setStage] = useState<Stage>("intro")
  const [name, setName] = useState("")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [copied, setCopied] = useState(false)
  const [canShare, setCanShare] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const previewBoxRef = useRef<HTMLDivElement>(null)
  const [cardScale, setCardScale] = useState(1)

  const displayName = name.trim() || "YOU"
  const q = questions[current]

  const percent = calculateFrustrationPercentage(answers)
  const cats = calculateCategoryScores(answers)
  const topCat = getBiggestFrustration(answers)
  const band = getResultBand(percent)

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && typeof navigator.share === "function")
  }, [])

  useEffect(() => {
    if (stage !== "result") return
    const box = previewBoxRef.current
    if (!box) return
    const updateScale = () => setCardScale(box.clientWidth / CARD_WIDTH)
    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(box)
    return () => observer.disconnect()
  }, [stage])

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
    setTimeout(() => setStage("result"), 1700)
  }

  function safeName() {
    return displayName.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "you"
  }

  async function captureCardPng(): Promise<string> {
    const el = cardRef.current
    if (!el) throw new Error("Card not ready")
    const prevTransform = el.style.transform
    el.style.transform = "none"
    try {
      return await toPng(el, { pixelRatio: 1, width: CARD_WIDTH, height: CARD_HEIGHT, cacheBust: true })
    } finally {
      el.style.transform = prevTransform
    }
  }

  async function downloadPng() {
    const dataUrl = await captureCardPng()
    const a = document.createElement("a")
    a.href = dataUrl
    a.download = `${safeName()}-frustration-card.png`
    a.click()
  }

  async function downloadPdf() {
    const dataUrl = await captureCardPng()
    const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [CARD_WIDTH, CARD_HEIGHT] })
    pdf.addImage(dataUrl, "PNG", 0, 0, CARD_WIDTH, CARD_HEIGHT)
    pdf.save(`${safeName()}-frustration-card.pdf`)
  }

  function copyResult() {
    const text = generateResultCopy(displayName, percent)
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  async function shareResult() {
    const text = generateResultCopy(displayName, percent)
    try {
      const nav = navigator as Navigator & {
        canShare?: (data: { files?: File[] }) => boolean
      }
      if (nav.canShare) {
        const dataUrl = await captureCardPng()
        const blob = await (await fetch(dataUrl)).blob()
        const file = new File([blob], `${safeName()}-frustration-card.png`, { type: "image/png" })
        if (nav.canShare({ files: [file] })) {
          await navigator.share({ title: "The Frustration Card", text, files: [file] })
          return
        }
      }
      await navigator.share({ title: "The Frustration Card", text })
    } catch {}
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
          <h1 className="fc-caps">How frustrated are you with the nonprofit sector?</h1>
          <p className="fc-lead">
            10 questions. No performance review. No donor report. Just answer honestly.
          </p>
          <p className="fc-small-copy">
            We&apos;ll turn your answers into a completely unscientific measure of your frustration
            with the social sector.
          </p>
          <button className="fc-btn-primary fc-caps" onClick={() => setStage("name")}>
            Get my Frustration Card
          </button>
          <p className="fc-privacy-note">
            We don&apos;t collect, store or share your responses or personal information. Your
            Frustration Card is generated just for you and stays with you. No sign ups, no email
            addresses, no data trails.
          </p>
        </div>
      </div>
    )
  }

  if (stage === "name") {
    return (
      <div className="fc-shell">
        <div className="fc-intro">
          <h1 className="fc-caps">What should we call you?</h1>
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
          <button className="fc-btn-primary fc-caps" onClick={() => setStage("quiz")}>
            Let&apos;s find out
          </button>
        </div>
      </div>
    )
  }

  if (stage === "quiz") {
    const selected = answers[q.id]
    const isLast = current === questions.length - 1
    return (
      <div className="fc-shell">
        <div className="fc-quiz">
          <div className="fc-progress">
            <span className="fc-caps">Question {current + 1} of {questions.length}</span>
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
            <button className="fc-btn-ghost fc-caps" onClick={prev} disabled={current === 0}>← Previous</button>
            <button className="fc-btn-primary fc-caps" onClick={next} disabled={selected === undefined}>
              {isLast ? "Show my score" : "Next"}
            </button>
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
          <p className="fc-caps">Calculating your frustration&hellip;</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fc-shell">
      <div className="fc-result">
        <div className="fc-result-summary">
          <p className="fc-result-name">{displayName}</p>
          <p className="fc-section-label">Your frustration score</p>
          <p className="fc-big-percent">{percent}%</p>
          <h2 className="fc-band-title">{band.title}</h2>
          <p className="fc-band-copy">{band.copy}</p>

          <h3 className="fc-section-label">Your frustration breakdown</h3>
          <div className="fc-breakdown">
            {CATEGORY_ORDER.map((cat) => (
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

          <h3 className="fc-section-label">Your biggest frustration</h3>
          <p className="fc-top-cat">{CATEGORY_LABELS[topCat]}</p>
          <p className="fc-insight">{biggestFrustrationCopy[topCat]}</p>
        </div>

        <div className="fc-card-preview" ref={previewBoxRef}>
          <div
            className="fc-card"
            ref={cardRef}
            style={{ transform: `scale(${cardScale})` }}
          >
            <div className="fc-card-top">
              <Image
                src="/brand/logo-reversed.png"
                alt="WokeOnPaper"
                width={600}
                height={591}
                className="fc-card-logo"
              />
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
              <p className="fc-card-section-label">Your frustration breakdown</p>
              {CATEGORY_ORDER.map((cat) => (
                <div key={cat} className="fc-card-bar-row">
                  <span className="fc-card-bar-label">{CATEGORY_LABELS[cat]}</span>
                  <div className="fc-card-bar-track">
                    <div className="fc-card-bar-fill" style={{ width: `${cats[cat]}%` }} />
                  </div>
                  <span className="fc-card-bar-pct">{cats[cat]}%</span>
                </div>
              ))}
            </div>

            <div className="fc-card-biggest">
              <p className="fc-card-section-label">Biggest source of frustration</p>
              <p className="fc-card-biggest-cat">{CATEGORY_LABELS[topCat]}</p>
              <p className="fc-card-biggest-copy">{biggestFrustrationCopy[topCat]}</p>
            </div>

            <div className="fc-card-foot">
              <span>Get yours at wokeonpaper.in</span>
              <span>A completely unscientific measure of sector frustration.</span>
            </div>
          </div>
        </div>

        <div className="fc-actions">
          <button className="fc-btn-primary fc-caps" onClick={downloadPng}>Download as PNG</button>
          <button className="fc-btn-dark fc-caps" onClick={downloadPdf}>Download as PDF</button>
          <button className="fc-btn-ghost fc-caps" onClick={copyResult}>
            {copied ? "Copied." : "Copy my result"}
          </button>
          {canShare && (
            <button className="fc-btn-ghost fc-caps" onClick={shareResult}>Share my card</button>
          )}
          <button className="fc-btn-ghost fc-caps" onClick={restart}>Start over</button>
          <Link href="/" className="fc-btn-ghost fc-caps">Back home</Link>
        </div>

        <p className="fc-share-note">
          Download your card and share it on social media. Don&apos;t forget to tag @wokeonpaper
          on Instagram.
        </p>
      </div>
    </div>
  )
}
