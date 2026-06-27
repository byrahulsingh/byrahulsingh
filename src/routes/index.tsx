import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowUpRight, PenLine, BookOpen, Layers, Monitor, User } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const sections = [
  {
    href: '/blogs',
    label: 'Blogs',
    description: 'Sharing knowledge in small, quickly readable bits.',
    meta: 'Essays',
    icon: PenLine,
    accent: 'sky',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    href: '/cookbooks',
    label: 'Cookbooks',
    description: 'Engineering patterns & recipes — from architecture to code review.',
    meta: 'Guides',
    icon: BookOpen,
    accent: 'amber',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    href: '/projects',
    label: 'Projects',
    description: 'Things I\'ve shipped — products, open source, experiments.',
    meta: 'Work',
    icon: Layers,
    accent: 'emerald',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    href: '/uses',
    label: 'Uses',
    description: 'The tools, gear, and software that power my workflow.',
    meta: 'Setup',
    icon: Monitor,
    accent: 'cyan',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    href: '/me',
    label: 'About',
    description: 'Who I am — the longer version of my journey.',
    meta: 'Me',
    icon: User,
    accent: 'orange',
    className: 'md:col-span-2 md:row-span-1',
  },
]

const ACCENT_HOVER_MAP: Record<string, string> = {
  sky:     'group-hover:ring-2 group-hover:ring-sky-500/50 text-sky-500',
  amber:   'group-hover:ring-2 group-hover:ring-amber-500/50 text-amber-500',
  emerald: 'group-hover:ring-2 group-hover:ring-emerald-500/50 text-emerald-500',
  cyan:    'group-hover:ring-2 group-hover:ring-cyan-500/50 text-cyan-500',
  orange:  'group-hover:ring-2 group-hover:ring-orange-500/50 text-orange-500',
}

function HomePage() {
  return (
    <div className="h-screen w-full bg-neutral-50 dark:bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6 py-6 pb-24">
        
        {/* Newspaper Grid Layout */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(130px,auto)] max-h-[600px]"
        >
          {sections.map((section) => {
            const innerContent = (
              <>
                {/* Background SVG Image */}
                <div className="absolute -right-4 -bottom-4 w-40 h-40 md:w-56 md:h-56 opacity-20 dark:opacity-30 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-6 text-neutral-200 dark:text-neutral-800">
                  <section.icon 
                    className="w-full h-full transition-all duration-1000 ease-out [stroke-dashoffset:500] group-hover:[stroke-dashoffset:0]"
                    strokeWidth={1}
                    style={{ strokeDasharray: 500 }}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-end pt-12 md:pt-16">
                  <div className="flex justify-between items-end gap-3">
                    <div className="min-w-0 flex-1">
                      <h2 
                        style={{ fontFamily: "'Playpen Sans', cursive" }} 
                        className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-1.5 transition-colors duration-300 truncate"
                      >
                        {section.label}
                      </h2>
                      <p className="text-[13px] md:text-sm text-neutral-600 dark:text-neutral-400 font-medium truncate">
                        {section.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-neutral-300 dark:text-neutral-600 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                </div>
              </>
            )
            
            const classes = [
              'group relative block h-full w-full p-4 md:p-5 no-underline overflow-hidden',
              'rounded-3xl transition-all duration-300',
              'bg-white dark:bg-neutral-900',
              'hover:shadow-2xl hover:-translate-y-1',
              'ring-1 ring-transparent', // base ring to prevent layout shift
              ACCENT_HOVER_MAP[section.accent as keyof typeof ACCENT_HOVER_MAP],
            ].join(' ')

            return (
              <motion.div
                key={section.href}
                variants={{
                  hidden: { opacity: 0, scale: 0.96, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
                }}
                className={section.className}
              >
                {section.isExternal ? (
                  <a href={section.href} target="_blank" rel="noreferrer" className={classes}>
                    {innerContent}
                  </a>
                ) : (
                  <Link to={section.href} className={classes}>
                    {innerContent}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
