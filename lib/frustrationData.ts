export type Option = { label: string; score: number }
export type Question = {
  id: number
  category: CategoryKey
  text: string
  options: Option[]
}

export type CategoryKey = "pay" | "workCulture" | "values"

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  pay: "Pay",
  workCulture: "Work Culture",
  values: "Values & Integrity",
}

export const questions: Question[] = [
  {
    id: 1,
    category: "pay",
    text: "Are you satisfied with what your organisation pays you?",
    options: [
      { label: "I'm paid fairly.", score: 0 },
      { label: "It's okay, but I expected better.", score: 1 },
      { label: "For the work I do, it feels low.", score: 2 },
      { label: "I've stopped expecting my salary to catch up with my responsibilities.", score: 3 },
    ],
  },
  {
    id: 2,
    category: "pay",
    text: "How confident are you that your pay reflects your level of responsibility?",
    options: [
      { label: "Yes. It feels fair.", score: 0 },
      { label: "Mostly. There are some gaps.", score: 1 },
      { label: "Not really.", score: 2 },
      { label: "My responsibilities grew. My salary didn't.", score: 3 },
    ],
  },
  {
    id: 3,
    category: "pay",
    text: "How transparent is your organisation about salaries and pay differences?",
    options: [
      { label: "Very transparent.", score: 0 },
      { label: "Somewhat transparent.", score: 1 },
      { label: "Most people have to figure it out themselves.", score: 2 },
      { label: "I'd need clearance to ask.", score: 3 },
    ],
  },
  {
    id: 4,
    category: "workCulture",
    text: "How comfortable are you telling your manager or leadership that you disagree with a decision?",
    options: [
      { label: "Very comfortable. It's encouraged.", score: 0 },
      { label: "I can disagree if I choose my words carefully.", score: 1 },
      { label: "I usually think twice before saying it.", score: 2 },
      { label: "Disagreeing is possible. Being heard is another matter.", score: 3 },
    ],
  },
  {
    id: 5,
    category: "workCulture",
    text: "What usually happens when the workload becomes too much?",
    options: [
      { label: "We reprioritise and make space.", score: 0 },
      { label: "We figure it out together.", score: 1 },
      { label: "We somehow make it work.", score: 2 },
      { label: "Something gets dropped. Usually sleep.", score: 3 },
    ],
  },
  {
    id: 6,
    category: "workCulture",
    text: "Which best describes your organisation's approach to employee wellbeing?",
    options: [
      { label: "People's wellbeing is genuinely taken seriously.", score: 0 },
      { label: "There's support when people need it.", score: 1 },
      { label: "We have a wellbeing policy. The workload remains.", score: 2 },
      { label: "We talk about wellbeing more than we practise it.", score: 3 },
    ],
  },
  {
    id: 7,
    category: "values",
    text: "When the evidence says your programme isn't working, what happens?",
    options: [
      { label: "We change the approach.", score: 0 },
      { label: "We discuss what needs to change.", score: 1 },
      { label: "We look for a way to make the results work.", score: 2 },
      { label: "We make the report look better.", score: 3 },
    ],
  },
  {
    id: 8,
    category: "values",
    text: "How much does funding influence what your organisation chooses to work on?",
    options: [
      { label: "It doesn't. We decide based on what communities need.", score: 0 },
      { label: "It influences some of our priorities.", score: 1 },
      { label: "A lot of our work follows where the funding is.", score: 2 },
      { label: "Sometimes the funding opportunity comes first and the problem comes later.", score: 3 },
    ],
  },
  {
    id: 9,
    category: "values",
    text: "When your organisation talks about its values, how closely do they match what happens internally?",
    options: [
      { label: "Very closely. We practise what we preach.", score: 0 },
      { label: "Mostly. We have our contradictions.", score: 1 },
      { label: "There's a noticeable gap.", score: 2 },
      { label: "Our website and our workplace seem to belong to different organisations.", score: 3 },
    ],
  },
  {
    id: 10,
    category: "values",
    text: "How much do you trust your organisation to tell you the whole story when something goes wrong?",
    options: [
      { label: "Completely. Problems are openly discussed.", score: 0 },
      { label: "Mostly. We usually get the important details.", score: 1 },
      { label: "It depends on what happened and who was involved.", score: 2 },
      { label: "I usually find out the real story later.", score: 3 },
    ],
  },
]

export type Band = { min: number; max: number; title: string; copy: string }

export const bands: Band[] = [
  {
    min: 0,
    max: 49,
    title: "You're doing surprisingly okay.",
    copy: "Either you've found a healthy corner of the sector or you've developed an impressive tolerance for nonprofit nonsense.",
  },
  {
    min: 50,
    max: 59,
    title: "This is a good amount of frustration.",
    copy: "You care enough to be annoyed. That's usually where the interesting questions begin.",
  },
  {
    min: 60,
    max: 69,
    title: "You are likely overdue for a serious conversation.",
    copy: "You still believe in the work. You're just beginning to wonder why the sector makes the work so unnecessarily difficult.",
  },
  {
    min: 70,
    max: 79,
    title: "Start saving for therapy.",
    copy: "You've moved beyond mild irritation. The mission still matters. Your patience is another story.",
  },
  {
    min: 80,
    max: 89,
    title: "You are running on belief and resentment.",
    copy: "You're still here because you care. At this point, “let's take this offline” may be enough to ruin your entire afternoon.",
  },
  {
    min: 90,
    max: 100,
    title: "Your frustration is in the top 5%.",
    copy: "Time to say bye bye to the organisation. Beg, borrow, steal and go for therapy.",
  },
]

export const biggestFrustrationCopy: Record<CategoryKey, string> = {
  pay: "You don't mind working for a cause. You'd just like the cause to pay you properly.",
  workCulture: "You came for meaningful work. You did not necessarily sign up for permanent exhaustion.",
  values: "You can handle difficult work. It's the gap between what the sector says and what it does that's getting to you.",
}
