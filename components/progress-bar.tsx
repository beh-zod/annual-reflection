"use client"

import { questions } from "@/lib/questions"

interface ProgressBarProps {
  currentQuestion: number
}

export function ProgressBar({ currentQuestion }: ProgressBarProps) {
  const total = questions.length
  const percentage = ((currentQuestion + 1) / total) * 100

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {total}
        </span>
        <span className="text-sm font-medium text-primary">{Math.round(percentage)}%</span>
      </div>
      <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}
