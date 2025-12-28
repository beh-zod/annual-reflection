"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface WelcomeScreenProps {
  onStart: () => void
  hasExistingAnswers: boolean
}

export function WelcomeScreen({ onStart, hasExistingAnswers }: WelcomeScreenProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 text-center animate-in fade-in duration-500">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Year Reflection</h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto text-balance">
          A thoughtful guide to help you look back on your year and set intentions for the next.
        </p>
      </div>

      <div className="space-y-4">
        <Button size="lg" onClick={onStart} className="gap-2">
          {hasExistingAnswers ? "Continue Reflecting" : "Begin Reflection"}
          <ArrowRight className="h-4 w-4" />
        </Button>

        {hasExistingAnswers && (
          <p className="text-sm text-muted-foreground">You have saved progress from a previous session.</p>
        )}
      </div>

      <div className="pt-8 border-t">
        <p className="text-sm text-muted-foreground">
          Your answers are stored locally in your browser. Nothing is sent to any server. Please send feedback to{" "}
          <a
            href="https://x.com/beh_zod"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Behzod
          </a>
          .
        </p>
      </div>
    </div>
  )
}
