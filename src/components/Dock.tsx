import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from 'motion/react'
import { Link, useLocation } from '@tanstack/react-router'
import {
  Home, PenLine, BookOpen, Layers, Monitor, User,
  Github, Linkedin,
  Sun, Moon, LayoutGrid, X,
  PanelLeft, PanelBottom, PanelTop,
} from 'lucide-react'

type DockPos = 'bottom' | 'left' | 'top'

// ── item definitions ─────────────────────────
const NAV_ITEMS = [
  { to: '/',          icon: Home,     label: 'Home',      color: 'text-violet-500 dark:text-violet-400'   },
  { to: '/blogs',     icon: PenLine,  label: 'Blogs',     color: 'text-sky-500    dark:text-sky-400'      },
  { to: '/cookbooks', icon: BookOpen, label: 'Cookbooks', color: 'text-amber-500  dark:text-amber-400'    },
  { to: '/projects',  icon: Layers,   label: 'Projects',  color: 'text-emerald-500 dark:text-emerald-400' },
  { to: '/uses',      icon: Monitor,  label: 'Uses',      color: 'text-cyan-500   dark:text-cyan-400'     },

] as const

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
  </svg>
)

const SOCIAL_ITEMS = [
  { href: 'https://github.com/byrahulsingh',            icon: Github,   label: 'GitHub',   color: 'text-neutral-700 dark:text-neutral-200' },
  { href: 'https://www.linkedin.com/in/byrahulsingh/', icon: Linkedin, label: 'LinkedIn', color: 'text-blue-600    dark:text-blue-400'     },
  { href: 'https://x.com/byrahulsingh',                icon: XLogo,    label: 'X',        color: 'text-neutral-900 dark:text-white'       },
] as const

// magnification constants
const MAG   = 1.85
const RANGE = 110

// ── DockIcon ─────────────────────────────────
interface DockIconProps {
  icon:     React.ComponentType<{ className?: string }>
  label:    string
  color:    string
  active?:  boolean
  mousePos: MotionValue<number>
  dockPos:  DockPos
  index:    number          // for stagger delay
  wrap:     (inner: React.ReactNode) => React.ReactNode
}

function DockIcon({ icon: Icon, label, color, active, mousePos, dockPos, index, wrap }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tip, setTip] = useState(false)

  const scale = useTransform(mousePos, (v) => {
    if (!ref.current) return 1
    const r      = ref.current.getBoundingClientRect()
    const center = dockPos === 'bottom' ? r.left + r.width / 2 : r.top + r.height / 2
    const dist   = Math.abs(v - center)
    if (dist > RANGE) return 1
    return 1 + (MAG - 1) * (1 - dist / RANGE) ** 2
  })
  const spring = useSpring(scale, { stiffness: 320, damping: 22, mass: 0.45 })
  const origin = dockPos === 'bottom' ? 'bottom center' : dockPos === 'top' ? 'top center' : 'center left'

  const inner = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.3 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22, delay: index * 0.035 }}
      style={{ scale: spring, transformOrigin: origin }}
      className="relative flex items-center justify-center"
      onMouseEnter={() => setTip(true)}
      onMouseLeave={() => setTip(false)}
    >
      <div className={[
        'w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer select-none',
        'transition-all duration-100',
        active ? 'bg-white/30 dark:bg-white/10' : 'hover:bg-white/20 dark:hover:bg-white/5',
        color,
      ].join(' ')}>
        <Icon className="w-[1.1rem] h-[1.1rem]" />
      </div>

      {/* active dot */}
      {active && (
        <span className={[
          'absolute w-[5px] h-[5px] rounded-full bg-current opacity-60',
          dockPos === 'left'
            ? 'right-[-7px] top-1/2 -translate-y-1/2'
            : 'bottom-[-7px] left-1/2 -translate-x-1/2',
        ].join(' ')} />
      )}

      {/* tooltip */}
      <AnimatePresence>
        {tip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.1 }}
            className={[
              'absolute z-[200] pointer-events-none whitespace-nowrap',
              'text-[11px] font-semibold px-2.5 py-1 rounded-lg',
              'bg-neutral-900/90 text-white dark:bg-white/90 dark:text-neutral-900',
              'backdrop-blur-md shadow-xl',
              dockPos === 'left'
                ? 'left-[calc(100%+14px)] top-1/2 -translate-y-1/2'
                : dockPos === 'top'
                ? 'top-[calc(100%+14px)] left-1/2 -translate-x-1/2'
                : 'bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2',
            ].join(' ')}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  return <>{wrap(inner)}</>
}

// ── Divider ───────────────────────────────────
function Divider({ dockPos, index }: { dockPos: DockPos; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.035 }}
      className={[
        'rounded-full bg-neutral-400/20 dark:bg-white/10 shrink-0 self-center',
        dockPos === 'left' ? 'h-px w-5' : 'w-px h-5',
      ].join(' ')}
    />
  )
}

// ── Dock ──────────────────────────────────────
export default function Dock() {
  const { pathname } = useLocation()
  const [open,    setOpen]    = useState(true)
  const [dockPos, setDockPos] = useState<DockPos>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dock-pos') as DockPos | null
      return saved || 'bottom'
    }
    return 'bottom'
  })
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return false
  })
  const dockRef = useRef<HTMLElement>(null)

  // Empty useEffect to keep things tidy
  useEffect(() => {}, [])


  const mousePos       = useMotionValue<number>(-9999)
  const handleMove     = (e: React.MouseEvent) => mousePos.set(dockPos === 'left' ? e.clientY : e.clientX)
  const handleLeave    = () => mousePos.set(-9999)

  const togglePos = () => {
    const cycle: Record<DockPos, DockPos> = { bottom: 'left', left: 'top', top: 'bottom' }
    const next = cycle[dockPos]
    setDockPos(next)
    localStorage.setItem('dock-pos', next)
  }

  const toggleTheme = () => {
    const html = document.documentElement
    const next = html.classList.contains('dark') ? 'light' : 'dark'
    html.classList.remove('light', 'dark')
    html.classList.add(next)
    localStorage.setItem('theme', next)
    setIsDark(next === 'dark')
    window.dispatchEvent(new CustomEvent('theme-change', { detail: next }))
  }

  const posClass = dockPos === 'bottom'
    ? 'bottom-5 left-1/2 -translate-x-1/2 flex-row px-3 py-2.5'
    : dockPos === 'top'
    ? 'top-5 left-1/2 -translate-x-1/2 flex-row px-3 py-2.5'
    : 'left-5 top-1/2 -translate-y-1/2 flex-col py-3 px-2.5'

  // all items for index-based stagger
  let idx = 0
  const navCount     = NAV_ITEMS.length
  const socialCount  = SOCIAL_ITEMS.length

  return (
    <motion.nav
      ref={dockRef}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.8 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={[
        'fixed z-[150] flex gap-1.5 items-center',
        'rounded-2xl',
        'bg-white/10 dark:bg-neutral-900/20',
        'backdrop-blur-3xl backdrop-saturate-200',
        'border border-white/25 dark:border-white/[0.06]',
        'shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.4)_inset]',
        'dark:shadow-[0_4px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.04)_inset]',
        posClass,
      ].join(' ')}
    >
      {/* ── Trigger button (always visible) ── */}
      <motion.button
        layout
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        className={[
          'w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer select-none shrink-0',
          'transition-all duration-150',
          open
            ? 'text-rose-500 dark:text-rose-400 bg-white/20 dark:bg-white/5'
            : 'text-emerald-500 dark:text-emerald-400 hover:bg-white/20 dark:hover:bg-white/5',
        ].join(' ')}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X className="w-[1.1rem] h-[1.1rem]" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <LayoutGrid className="w-[1.1rem] h-[1.1rem]" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Expanded items ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* nav */}
            {NAV_ITEMS.map((item) => {
              const i = idx++
              return (
                <DockIcon
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  color={item.color}
                  active={item.to && pathname === item.to}
                  mousePos={mousePos}
                  dockPos={dockPos}
                  index={i}
                  wrap={(inner) => 
                    item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="block no-underline">
                        {inner}
                      </a>
                    ) : (
                      <Link to={item.to!} className="block no-underline">
                        {inner}
                      </Link>
                    )
                  }
                />
              )
            })}

            {/* divider */}
            <Divider dockPos={dockPos} index={idx++} />

            {/* social */}
            {SOCIAL_ITEMS.map((s) => {
              const i = idx++
              return (
                <DockIcon
                  key={s.href}
                  icon={s.icon}
                  label={s.label}
                  color={s.color}
                  mousePos={mousePos}
                  dockPos={dockPos}
                  index={i}
                  wrap={(inner) => (
                    <a href={s.href} target="_blank" rel="noreferrer" className="block no-underline">
                      {inner}
                    </a>
                  )}
                />
              )
            })}

            {/* divider */}
            <Divider dockPos={dockPos} index={idx++} />

            {/* theme */}
            <DockIcon
              icon={isDark ? Sun : Moon}
              label={isDark ? 'Light mode' : 'Dark mode'}
              color={isDark ? 'text-amber-400 dark:text-amber-300' : 'text-indigo-500 dark:text-indigo-400'}
              mousePos={mousePos}
              dockPos={dockPos}
              index={idx++}
              wrap={(inner) => (
                <button onClick={toggleTheme} type="button" className="block cursor-pointer">{inner}</button>
              )}
            />

            {/* position */}
            <DockIcon
              icon={dockPos === 'bottom' ? PanelLeft : dockPos === 'left' ? PanelTop : PanelBottom}
              label={dockPos === 'bottom' ? 'Move to left' : dockPos === 'left' ? 'Move to top' : 'Move to bottom'}
              color="text-neutral-400 dark:text-neutral-500"
              mousePos={mousePos}
              dockPos={dockPos}
              index={idx++}
              wrap={(inner) => (
                <button onClick={togglePos} type="button" className="block cursor-pointer">{inner}</button>
              )}
            />
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
