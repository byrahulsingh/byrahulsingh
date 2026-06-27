import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { to: '/blogs', label: 'Blogs' },
  { to: '/cookbooks', label: 'Cookbooks' },
  { to: '/projects', label: 'Projects' },
  { to: '/uses', label: 'Uses' },
  { to: '/bookmarks', label: 'Bookmarks' },
  { to: '/me', label: 'About' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 dark:border-neutral-900 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
      <nav className="max-w-2xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors no-underline"
        >
          <img src="/images/rahul-logo.png" alt="Logo" className="w-6 h-6 object-contain rounded-md" />
          <span>Rahul Singh</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => 
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors no-underline"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors no-underline"
                activeProps={{ className: 'text-sm text-neutral-900 dark:text-neutral-100 font-medium no-underline' }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </nav>
    </header>
  )
}
