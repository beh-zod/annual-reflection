"use client"

import { useState, useEffect, useCallback } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProgressBar } from "@/components/progress-bar"
import { WelcomeScreen } from "@/components/welcome-screen"
import { QuestionCard } from "@/components/question-card"
import { SectionSummary } from "@/components/section-summary"
import { FinalSummary } from "@/components/final-summary"
import { questions, sections } from "@/lib/questions"
import { saveAnswers, loadAnswers, clearAnswers, type Answers } from "@/lib/storage"

type AppState = "welcome" | "question" | "section-summary" | "final"

export function ReflectionApp() {
  const [appState, setAppState] = useState<AppState>("welcome")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [currentSectionComplete, setCurrentSectionComplete] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = loadAnswers()
    if (Object.keys(saved).length > 0) {
      setAnswers(saved)
    }
  }, [])

  const handleAnswerChange = useCallback(
    (value: string) => {
      const questionId = questions[currentQuestionIndex].id
      setAnswers((prev) => {
        const updated = { ...prev, [questionId]: value }
        saveAnswers(updated)
        return updated
      })
    },
    [currentQuestionIndex],
  )

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex]
    const nextQuestion = questions[currentQuestionIndex + 1]

    // Check if we're at the last question
    if (currentQuestionIndex === questions.length - 1) {
      setAppState("final")
      return
    }

    // Check if we're transitioning to a new section
    if (nextQuestion && nextQuestion.section !== currentQuestion.section) {
      setCurrentSectionComplete(currentQuestion.section)
      setAppState("section-summary")
      return
    }

    setCurrentQuestionIndex((prev) => prev + 1)
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleContinueFromSummary = () => {
    setCurrentSectionComplete(null)
    setCurrentQuestionIndex((prev) => prev + 1)
    setAppState("question")
  }

  const handleEditQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    setCurrentSectionComplete(null)
    setAppState("question")
  }

  const handleStart = () => {
    setAppState("question")
  }

  const handleReset = () => {
    clearAnswers()
    setAnswers({})
    setCurrentQuestionIndex(0)
    setCurrentSectionComplete(null)
    setAppState("welcome")
  }

  const hasExistingAnswers = Object.keys(answers).length > 0

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          <span className="font-semibold">Year Reflection</span>
          <ThemeToggle />
        </div>
        {appState === "question" && (
          <div className="container px-4 pb-3">
            <ProgressBar currentQuestion={currentQuestionIndex} />
          </div>
        )}
      </header>

      <main className="flex-1 container px-4 py-12 md:py-16">
        {appState === "welcome" && <WelcomeScreen onStart={handleStart} hasExistingAnswers={hasExistingAnswers} />}

        {appState === "question" && (
          <QuestionCard
            key={questions[currentQuestionIndex].id}
            question={questions[currentQuestionIndex]}
            answer={answers[questions[currentQuestionIndex].id] || ""}
            onAnswerChange={handleAnswerChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={currentQuestionIndex === 0}
            isLast={currentQuestionIndex === questions.length - 1}
          />
        )}

        {appState === "section-summary" && currentSectionComplete !== null && (
          <SectionSummary
            sectionNumber={currentSectionComplete}
            sectionTitle={sections.find((s) => s.number === currentSectionComplete)?.title || ""}
            answers={answers}
            onEdit={handleEditQuestion}
            onContinue={handleContinueFromSummary}
          />
        )}

        {appState === "final" && <FinalSummary answers={answers} onEdit={handleEditQuestion} onReset={handleReset} />}
      </main>
    </div>
  )
}
