import { questions, sections } from "./questions"
import type { Answers } from "./storage"

export function generateMarkdown(answers: Answers): string {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  let markdown = `# Year Reflection\n\n*Completed on ${date}*\n\n---\n\n`

  sections.forEach((section) => {
    markdown += `## Section ${section.number} — ${section.title}\n\n`

    const sectionQuestions = questions.filter((q) => q.section === section.number)

    sectionQuestions.forEach((q) => {
      markdown += `### ${q.question}\n\n`
      if (q.hint) {
        markdown += `*${q.hint}*\n\n`
      }
      markdown += `${answers[q.id] || "_No response_"}\n\n`
    })

    markdown += "---\n\n"
  })

  return markdown
}

export function downloadMarkdown(answers: Answers): void {
  const markdown = generateMarkdown(answers)
  const blob = new Blob([markdown], { type: "text/markdown" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `year-reflection-${new Date().getFullYear()}.md`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
