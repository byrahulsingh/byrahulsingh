import { createFileRoute } from '@tanstack/react-router'
import { PenLine } from 'lucide-react'

export const Route = createFileRoute('/blogs')({
  component: WritingPage,
})

function WritingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-32">
        <div className="mb-12">
          <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-3">Essays</p>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">Blogs</h1>
          <p className="text-neutral-500 dark:text-neutral-500 text-base leading-relaxed">
            Sharing knowledge in small, quickly readable bits.
          </p>
        </div>

        {/* Empty state */}
        <div className="border border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl p-12 text-center">
          <PenLine className="h-8 w-8 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
          <p className="text-sm text-neutral-400 dark:text-neutral-600">Posts coming soon.</p>
        </div>
      </div>
    </div>
  )
}
