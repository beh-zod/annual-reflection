"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, RotateCcw, Pencil } from "lucide-react"
import { questions, sections } from "@/lib/questions"
import { downloadMarkdown } from "@/lib/export"
import type { Answers } from "@/lib/storage"

interface FinalSummaryProps {
  answers: Answers
  onEdit: (questionIndex: number) => void
  onReset: () => void
}

export function FinalSummary({ answers, onEdit, onReset }: FinalSummaryProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="space-y-2 text-center">
        <p className="text-sm font-medium text-primary">Reflection Complete</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Your Year in Review</h2>
        <p className="text-muted-foreground">
          Here&apos;s everything you wrote. Download it as a markdown file or edit any response.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button onClick={() => downloadMarkdown(answers)} className="gap-2">
          <Download className="h-4 w-4" />
          Download Markdown
        </Button>
        <Button variant="outline" onClick={onReset} className="gap-2 bg-transparent">
          <RotateCcw className="h-4 w-4" />
          Start Over
        </Button>
      </div>

      <div className="space-y-8">
        {sections.map((section) => {
          const sectionQuestions = questions.filter((q) => q.section === section.number)

          return (
            <div key={section.number} className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">
                Section {section.number} — {section.title}
              </h3>
              <div className="space-y-4">
                {sectionQuestions.map((q) => {
                  const questionIndex = questions.findIndex((question) => question.id === q.id)
                  return (
                    <Card key={q.id} className="p-4 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-medium text-sm">{q.question}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0 h-8 w-8"
                          onClick={() => onEdit(questionIndex)}
                        >
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
