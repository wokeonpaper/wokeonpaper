export type Option = { label: string; score: number }
export type Question = {
  id: number
  category: CategoryKey
  text: string
  options: Option[]
}

export type CategoryKey = "transparency" | "impact" | "pay" | "reality"

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  transparency: "Transparency & Governance",
  impact: "Impact",
  pay: "Pay & Work Culture",
  reality: "Sector Reality",
}

export const questions: Question[] = [
  {
    id: 1,
    category: "transparency",
    text: "How clearly does your organisation explain where its money comes from and where it goes?",
    options: [
      { label: "Very clearly — I can find this information easily.", score: 0 },
      { label: "Somewhat clearly — I know the broad picture.", score: 1 },
      { label: "Not very clearly — I have to ask around.", score: 2 },
      { label: "I genuinely have no idea.", score: 3 },
    ],
  },
  {
    id: 2,
    category: "transparency",
    text: "How transparent is your organisation about senior leadership pay?",
    options: [
      { label: "Completely transparent — ranges or actual compensation are openly available.", score: 0 },
      { label: "Somewhat transparent — I know roughly what senior leaders earn.", score: 1 },
      { label: "Not transparent — compensation is rarely discussed.", score: 2 },
      { label: "It feels like a forbidden question.", score: 3 },
    ],
  },
  {
    id: 3,
    category: "transparency",
    text: "When an important organisational decision is made, how clearly do you understand who made it and why?",
    options: [
      { label: "Very clearly — the reasoning is usually explained.", score: 0 },
      { label: "Mostly clearly — I understand it, even if I wasn't involved.", score: 1 },
      { label: "Often unclear — decisions appear with little explanation.", score: 2 },
      { label: "Decisions simply arrive from somewhere above.", score: 3 },
    ],
  },
  {
    id: 4,
    category: "transparency",
    text: "How comfortable are you asking your leadership, \u201cWhy did we decide this?\u201d",
    options: [
      { label: "Very comfortable — questioning decisions is encouraged.", score: 0 },
      { label: "Comfortable, but I choose my moments.", score: 1 },
      { label: "I would probably think twice.", score: 2 },
      { label: "I would rather not risk it.", score: 3 },
    ],
  },
  {
    id: 5,
    category: "impact",
    text: "Do you believe your organisation's work is creating meaningful change for the people it exists to serve?",
    options: [
      { label: "Yes — we have strong evidence that it is.", score: 0 },
      { label: "Mostly — there is evidence, although it is hard to measure.", score: 1 },
      { label: "Somewhat — I believe in the intent more than the evidence.", score: 2 },
      { label: "Honestly, I'm not sure.", score: 3 },
    ],
  },
  {
    id: 6,
    category: "impact",
    text: "When something your organisation does isn't working, what usually happens?",
    options: [
      { label: "We examine the evidence and change our approach.", score: 0 },
      { label: "We discuss it and sometimes make changes.", score: 1 },
      { label: "We usually find a way to present it differently.", score: 2 },
      { label: "We keep doing it because the funder/report/deadline requires it.", score: 3 },
    ],
  },
  {
    id: 7,
    category: "pay",
    text: "Are you satisfied with what your organisation pays you for the work you do?",
    options: [
      { label: "Yes — I feel fairly compensated.", score: 0 },
      { label: "Mostly — some concerns, but it feels reasonable.", score: 1 },
      { label: "Not really — it doesn't reflect the work or responsibility.", score: 2 },
      { label: "Absolutely not — \u201cbut it's a nonprofit\u201d is not a compensation strategy.", score: 3 },
    ],
  },
  {
    id: 8,
    category: "pay",
    text: "Which best describes your organisation's work culture?",
    options: [
      { label: "Healthy — people can disagree, set boundaries and ask for help.", score: 0 },
      { label: "Mostly healthy — stressful periods, but manageable.", score: 1 },
      { label: "Mission-driven but exhausting — work comes at the expense of people.", score: 2 },
      { label: "We need a wellbeing programme for our wellbeing programme.", score: 3 },
    ],
  },
  {
    id: 9,
    category: "reality",
    text: "How often do you encounter contradictions between what the sector preaches and what it practises?",
    options: [
      { label: "Rarely — the sector generally practises what it preaches.", score: 0 },
      { label: "Occasionally — contradictions exist, but they're acknowledged.", score: 1 },
      { label: "Often — a noticeable gap between values and practice.", score: 2 },
      { label: "Constantly — sometimes the irony writes itself.", score: 3 },
    ],
  },
  {
    id: 10,
    category: "reality",
    text: "Which statement best describes how you currently feel about working in the nonprofit sector?",
    options: [
      { label: "I'm optimistic. There's a lot worth fixing, but I still believe in it.", score: 0 },
      { label: "I'm hopeful, but increasingly critical.", score: 1 },
      { label: "I care about the work, but the sector tests my patience.", score: 2 },
      { label: "I believe in the mission. I just wish the sector practised what it preached.", score: 3 },
    ],
  },
]

export type Band = { min: number; max: number; title: string; copy: string }

export const bands: Band[] = [
  { min: 0, max: 20, title: "Suspiciously Unfrustrated", copy: "Either you've found a remarkably functional corner of the nonprofit sector, or you haven't attended enough meetings yet." },
  { min: 21, max: 40, title: "Mildly Frustrated", copy: "You still believe the sector can change. You just wish it would stop making you fill out three forms to prove it." },
  { min: 41, max: 60, title: "Properly Frustrated", copy: "You've seen enough to know that good intentions and good systems are not always the same thing." },
  { min: 61, max: 80, title: "Seriously Frustrated", copy: "You still care about the work. You're just increasingly convinced that \u201clet's take this offline\u201d is where good ideas go to disappear." },
  { min: 81, max: 95, title: "Extremely Frustrated", copy: "You believe in the mission. Your patience, however, has started exploring other opportunities." },
  { min: 96, max: 100, title: "Woke Beyond Repair", copy: "Congratulations. You have reached the point where sector jargon no longer works on you." },
]

export const categoryInsight: Record<CategoryKey, string> = {
  transparency: "You'd like to know who made the decision, why they made it and where the money went. Revolutionary.",
  impact: "You're beginning to suspect that \u201cimpact\u201d shouldn't just be a column in a report.",
  pay: "You believe in the mission. You'd also like to be paid fairly for advancing it.",
  reality: "You've noticed that sometimes the sector's biggest contradictions are hiding in plain sight.",
}

export const categoryPersonal: Record<CategoryKey, (name: string) => string> = {
  transparency: (n) => `${n}, you're asking for something radical: transparency.`,
  impact: (n) => `${n}, you don't just want to hear about impact. You want to know whether it's actually happening.`,
  pay: (n) => `${n}, turns out passion doesn't pay the rent.`,
  reality: (n) => `${n}, you've clearly spent enough time in the sector to recognise the irony.`,
}
