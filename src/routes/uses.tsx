import { createFileRoute } from '@tanstack/react-router'
import { Code2, Cpu, Github, Monitor, Package } from 'lucide-react'
import { motion } from 'motion/react'

export const Route = createFileRoute('/uses')({
  component: UsesPage,
})

const categories = [
  {
    icon: Monitor,
    title: 'Editor & IDE',
    color: 'text-blue-500 dark:text-blue-400',
    repoLink: 'https://github.com/byrahulsingh/uses',
    isPills: true,
    items: [
      { name: 'Editors', pills: [{name: 'VS Code'}, {name: 'Cursor'}, {name: 'Antigravity'}] },
      { name: 'Terminal & Shell', pills: [{name: 'Zsh'}] },
    ],
  },
  {
    icon: Code2,
    title: 'Tech Stack & Languages',
    color: 'text-yellow-500 dark:text-yellow-400',
    isPills: true,
    items: [
      { name: 'Frontend', pills: [{name: 'React'}, {name: 'Next.js', logo: '/images/nextjs.svg'}, {name: 'Tanstack Start', logo: '/images/tanstack.svg'}, {name: 'React Router / Tanstack Router', logo: '/images/tanstack.svg'}, {name: 'Tailwind CSS', logo: '/images/tailwindcss.svg'}, {name: 'shadcn/ui'}] },
      { name: 'Backend', pills: [{name: 'NodeJS'}, {name: 'BunJS', logo: '/images/bun-logo.svg'}, {name: 'ExpressJS'}, {name: 'HonoJS'}, {name: 'Drizzle ORM'}] },
      { name: 'Database', pills: [{name: 'Postgres'}] },
      { name: 'AI', pills: [{name: 'Python'}, {name: 'Langchain'}, {name: 'Langgraph'}] },
      { name: 'Cloud Provider', pills: [{name: 'AWS'}] },
    ],
  },
  {
    icon: Package,
    title: 'Apps & Tools',
    color: 'text-fuchsia-500 dark:text-fuchsia-400',
    items: [
      { name: 'Chrome', detail: 'Primary web browser and dev tools' },
      { name: 'Notion', detail: 'Notes, docs, and thinking space' },
      { name: 'Claude', detail: 'AI assistant for coding and logic' },
      { name: 'Excalidraw', detail: 'Whiteboarding and system diagrams' },
    ],
  },
  {
    icon: Cpu,
    title: 'Hardware',
    color: 'text-orange-500 dark:text-orange-400',
    items: [
      { name: 'MacBook Pro', detail: 'Primary development machine' },
    ],
  },
]

function UsesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-fuchsia-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">Setup</p>
          <h1 style={{ fontFamily: "'Playpen Sans', cursive" }} className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            My Personal Dev Setup
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-xl">
            The tools, gear, and software that power my day-to-day engineering workflow. Updated as things change.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {categories.map((cat, idx) => (
            <motion.div key={cat.title} variants={itemVariants} className="relative">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 ${cat.color}`}>
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h2 style={{ fontFamily: "'Playpen Sans', cursive" }} className="text-xl font-bold text-neutral-800 dark:text-neutral-200 tracking-wide">
                    {cat.title}
                  </h2>
                </div>
                {cat.repoLink && (
                  <div className="relative inline-flex p-[1px] overflow-hidden rounded-md group hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-shadow">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#a855f7_50%,#10b981_100%)] opacity-75 group-hover:opacity-100 transition-opacity" />
                    <a
                      href={cat.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-[5px] bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Get settings here
                    </a>
                  </div>
                )}
              </div>

              {(cat as any).isPills ? (
                <div className="space-y-6 bg-neutral-50/80 dark:bg-neutral-900/20 p-6 sm:p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800/50">
                  {cat.items.map((item: any) => (
                    <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-300 min-w-[130px]">{item.name}</p>
                      <div className="flex flex-wrap gap-2.5">
                        {item.pills.map((pill: any) => (
                          <span key={pill.name} className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:scale-105 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all cursor-default">
                            {pill.logo && <img src={pill.logo} alt={pill.name} className="w-4 h-4 object-contain" />}
                            {pill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {cat.items.map((item: any) => (
                    <div
                      key={item.name}
                      className="flex flex-col gap-1 p-5 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-800/50 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-sm transition-all group"
                    >
                      <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{item.name}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center text-xs text-neutral-400 dark:text-neutral-600"
        >
          Inspired by <a href="https://uses.tech" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">uses.tech</a>
        </motion.p>
      </div>
    </div>
  )
}
