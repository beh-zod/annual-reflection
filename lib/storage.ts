const STORAGE_KEY = "year-reflection-answers"

export interface Answers {
  [questionId: string]: string
}

export function saveAnswers(answers: Answers): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
  }
}

export function loadAnswers(): Answers {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch {
        return {}
      }
    }
  }
  return {}
}

export function clearAnswers(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY)
  }
}