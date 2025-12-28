"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Pencil } from "lucide-react"
import { questions } from "@/lib/questions"
import type { Answers } from "@/lib/storage"

interface SectionSummaryProps {
  sectionNumber: number
  sectionTitle: string
  answers: Answers
  onEdit: (questionIndex: number) => void
  onContinue: () => void
}

export function SectionSummary({ sectionNumber, sectionTitle, answers, onEdit, onContinue }: SectionSummaryProps) {
  const sectionQuestions = questions.filter((q) => q.section === sectionNumber)

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Section Complete</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{sectionTitle}</h2>
        <p className="text-muted-foreground">
          Here&apos;s what you wrote. Feel free to edit or continue to the next section.
        </p>
      </div>

      <div className="space-y-4">
        {sectionQuestions.map((q) => {
          const questionIndex = questions.findIndex((question) => question.id === q.id)
          return (
            <Card key={q.id} className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium text-sm">{q.question}</h3>
                <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8" onClick={() => onEdit(questionIndex)}>
                  <Pencil className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                {answers[q.id] || <em>No response</em>}
              </p>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-end">
        <Button onClick={onContinue} className="gap-2">
          Continue to next section
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
