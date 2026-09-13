import { questions, bands, type CategoryKey } from "./frustrationData"

export type Answers = Record<number, number> // questionId -> option score

const CATEGORY_QIDS: Record<CategoryKey, number[]> = {
  transparency: [1, 2, 3, 4],
  impact: [5, 6],
  pay: [7, 8],
  reality: [9, 10],
}

export function frustrationPercent(answers: Answers): number {
  const raw = questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
  return Math.round((raw / 30) * 100)
}

export function categoryPercents(answers: Answers): Record<CategoryKey, number> {
  const out = {} as Record<CategoryKey, number>
  ;(Object.keys(CATEGORY_QIDS) as CategoryKey[]).forEach((cat) => {
    const qids = CATEGORY_QIDS[cat]
    const raw = qids.reduce((sum, id) => sum + (answers[id] ?? 0), 0)
    const max = qids.length * 3
    out[cat] = Math.round((raw / max) * 100)
  })
  return out
}

export function highestCategory(answers: Answers): CategoryKey {
  const cats = categoryPercents(answers)
  let best: CategoryKey = "transparency"
  let bestVal = -1
  ;(Object.keys(cats) as CategoryKey[]).forEach((cat) => {
    if (cats[cat] > bestVal) { bestVal = cats[cat]; best = cat }
  })
  return best
}

export function resultBand(percent: number) {
  return bands.find((b) => percent >= b.min && percent <= b.max) ?? bands[bands.length - 1]
}
