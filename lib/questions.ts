export interface Question {
  id: string
  section: number
  sectionTitle: string
  question: string
  hint?: string
  placeholder?: string
}

export const questions: Question[] = [
  // Section 1 — Setting the Table
  {
    id: "highlights",
    section: 1,
    sectionTitle: "Setting the Table",
    question: "What were your highlights this year?",
    hint: "This is a speedrun. Set a timer for 5 minutes and write.",
    placeholder: "The moments that made you smile, feel proud, or grateful...",
  },
  {
    id: "lowlights",
    section: 1,
    sectionTitle: "Setting the Table",
    question: "What were your lowlights?",
    hint: "This is a speedrun. Set a timer for 5 minutes and write.",
    placeholder: "The challenges, disappointments, or difficult moments...",
  },
  {
    id: "floating",
    section: 1,
    sectionTitle: "Setting the Table",
    question: "What else is floating in your head?",
    hint: "This is a speedrun. Set a timer for 5 minutes and write.",
    placeholder: "Anything else that comes to mind about this year...",
  },
  // Section 2 — Looking Back
  {
    id: "proud",
    section: 2,
    sectionTitle: "Looking Back",
    question: "What were you most proud of this year?",
    hint: "Doesn't have to be sunshine and rainbows.",
    placeholder: "The accomplishments, growth, or moments of courage...",
  },
  {
    id: "learned",
    section: 2,
    sectionTitle: "Looking Back",
    question: "What did you learn the most from?",
    hint: "The good, the bad, and the unexpected.",
    placeholder: "The experiences that taught you something valuable...",
  },
  {
    id: "impact",
    section: 2,
    sectionTitle: "Looking Back",
    question: "Who or what had the biggest impact on you?",
    hint: "When you look back on this year, what changed your trajectory?",
    placeholder: "The people, events, or ideas that shifted your path...",
  },
  {
    id: "avoid",
    section: 2,
    sectionTitle: "Looking Back",
    question: "What do you avoid thinking about from the past year?",
    hint: "We all have demons. Let's name them.",
    placeholder: "The thoughts you push away, the things left unsaid...",
  },
  // Section 3 — Looking Ahead
  {
    id: "letgo",
    section: 3,
    sectionTitle: "Looking Ahead",
    question: "What do you need to let go of?",
    hint: "These could be beliefs, stories you tell yourself, fears & anxieties, people & relationships, etc.",
    placeholder: "The baggage you're ready to put down...",
  },
  {
    id: "room",
    section: 3,
    sectionTitle: "Looking Ahead",
    question: "What do you want to make more room for?",
    hint: "People, behaviors, activities, ideas.",
    placeholder: "The things you want to prioritize and nurture...",
  },
  {
    id: "start",
    section: 3,
    sectionTitle: "Looking Ahead",
    question: "What do you want to start doing next year?",
    hint: "How do you take steps towards the future you want? What's worth adding to your life?",
    placeholder: "The new habits, projects, or adventures...",
  },
  {
    id: "story",
    section: 3,
    sectionTitle: "Looking Ahead",
    question: "What's the story you want to tell at the end of next year?",
    hint: "What are the contours of the landscape? What's the one-liner you'd love to tell?",
    placeholder: "The narrative you want to live into...",
  },
  {
    id: "decade",
    section: 3,
    sectionTitle: "Looking Ahead",
    question: "If very little changes in your life, how will you feel in a decade?",
    hint: "Compounding is a hell of a drug.",
    placeholder: "The honest truth about staying on your current path...",
  },
  {
    id: "theme",
    section: 3,
    sectionTitle: "Looking Ahead",
    question: "What is your theme for the coming year?",
    hint: "Make it pithy. Get it tattooed.",
    placeholder: "One word or phrase to guide your year...",
  },
]

export const sections = [
  { number: 1, title: "Setting the Table" },
  { number: 2, title: "Looking Back" },
  { number: 3, title: "Looking Ahead" },
]
