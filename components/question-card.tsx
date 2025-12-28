"use client"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import type { Question } from "@/lib/questions"

interface QuestionCardProps {
  question: Question
  answer: string
  onAnswerChange: (value: string) => void
  onNext: () => void
  onPrevious: () => void
  isFirst: boolean
  isLast: boolean
}

export function QuestionCard({
  question,
  answer,
  onAnswerChange,
  onNext,
  onPrevious,
  isFirst,
  isLast,
}: QuestionCardProps) {
  const [localAnswer, setLocalAnswer] = useState(answer)

  useEffect(() => {
    setLocalAnswer(answer)
  }, [answer])

  const handleChange = (value: string) => {
    setLocalAnswer(value)
    onAnswerChange(value)
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">
          Section {question.section} — {question.sectionTitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance">{question.question}</h2>
        {question.hint && <p className="text-muted-foreground text-sm italic">{question.hint}</p>}
      </div>

      <Textarea
        value={localAnswer}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={question.placeholder}
        className="min-h-[200px] text-base leading-relaxed resize-none"
        autoFocus
      />

      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onPrevious} disabled={isFirst} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button onClick={onNext} className="gap-2">
          {isLast ? "Finish" : "Continue"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
