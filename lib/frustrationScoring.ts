import { questions, bands, type CategoryKey } from "./frustrationData"

export type Answers = Record<number, number> // questionId -> option score

const CATEGORY_QIDS: Record<CategoryKey, number[]> = {
  pay: [1, 2, 3],
  workCulture: [4, 5, 6],
  values: [7, 8, 9, 10],
}

const CATEGORY_ORDER: CategoryKey[] = ["values", "workCulture", "pay"]

function categoryRawScore(answers: Answers, cat: CategoryKey): number {
  return CATEGORY_QIDS[cat].reduce((sum, id) => sum + (answers[id] ?? 0), 0)
}

export function calculateRawScore(answers: Answers): number {
  return questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
}

export function calculateFrustrationPercentage(answers: Answers): number {
  return Math.round((calculateRawScore(answers) / 30) * 100)
}

export function calculateCategoryScores(answers: Answers): Record<CategoryKey, number> {
  const out = {} as Record<CategoryKey, number>
  ;(Object.keys(CATEGORY_QIDS) as CategoryKey[]).forEach((cat) => {
    const raw = categoryRawScore(answers, cat)
    const max = CATEGORY_QIDS[cat].length * 3
    out[cat] = Math.round((raw / max) * 100)
  })
  return out
}

export function getBiggestFrustration(answers: Answers): CategoryKey {
  const percents = calculateCategoryScores(answers)
  const bestPercent = Math.max(...Object.values(percents))
  const tiedByPercent = (Object.keys(percents) as CategoryKey[]).filter(
    (cat) => percents[cat] === bestPercent
  )
  if (tiedByPercent.length === 1) return tiedByPercent[0]

  const rawScores = Object.fromEntries(
    tiedByPercent.map((cat) => [cat, categoryRawScore(answers, cat)])
  ) as Record<CategoryKey, number>
  const bestRaw = Math.max(...Object.values(rawScores))
  const tiedByRaw = tiedByPercent.filter((cat) => rawScores[cat] === bestRaw)
  if (tiedByRaw.length === 1) return tiedByRaw[0]

  return CATEGORY_ORDER.find((cat) => tiedByRaw.includes(cat)) ?? tiedByRaw[0]
}

export function getResultBand(percent: number) {
  return bands.find((b) => percent >= b.min && percent <= b.max) ?? bands[bands.length - 1]
}

export function generateResultCopy(name: string, percent: number): string {
  return `${name} is ${percent}% frustrated with the nonprofit sector.\n\nfrom wokeonpaper.in`
}
