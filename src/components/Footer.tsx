import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socials = [
  { href: 'https://github.com/byrahulsingh', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/byrahulsingh/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://x.com/byrahulsingh', label: 'X', Icon: Twitter },
  { href: 'mailto:hello@byrahulsingh.com', label: 'Email', Icon: Mail },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-xs text-neutral-400 dark:text-neutral-600">
          © {year} Rahul Singh
        </p>
        <div className="flex items-center gap-1">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
