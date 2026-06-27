import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Github, Linkedin, FileText, Mail, MapPin, Briefcase } from 'lucide-react'

export const Route = createFileRoute('/me')({
  component: MeRoute,
})

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
  </svg>
)

const techStack = [
  'React', 'Next.js', 'Remix', 'Astro', 'Node.js', 'TypeScript', 'Tailwind CSS', 'AWS'
]

function MeRoute() {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">

      {/* MAIN CONTENT — centered single column */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pt-20 pb-32">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <img
            src="/rahul_singh.jpeg"
            alt="Rahul Singh"
            className="w-28 h-28 rounded-full object-cover object-center grayscale ring-2 ring-neutral-200 dark:ring-neutral-800"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4"
        >
          Rahul Singh
        </motion.h1>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-500 dark:text-neutral-400 text-sm mb-8"
        >
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" />
            Principal Engineer at Livlong
          </span>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">·</span>
          <span>9+ years</span>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">·</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Gurgaon, India
          </span>
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4 mb-8"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
            Highly driven and experienced senior engineer with expertise as team lead and full stack developer. Proven track record of delivering scalable products as per business needs. Adept at working closely with co-founders, stakeholders, and end users to ensure successful project delivery.
          </p>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Actions row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
          <a
            href="mailto:hello@byrahulsingh.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          >
            <Mail className="h-4 w-4" />
            hello@byrahulsingh.com
          </a>

          <span className="hidden sm:block w-px h-6 bg-neutral-200 dark:bg-neutral-800 mx-1" />

          <a
            href="https://github.com/byrahulsingh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/byrahulsingh/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/byrahulsingh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            title="X"
          >
            <XLogo className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-neutral-200 dark:border-neutral-800"
        >
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          
          <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 space-y-12">
            {/* Livlong */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[5.5px] top-2 bg-neutral-300 dark:bg-neutral-700 rounded-full w-3 h-3 ring-4 ring-white dark:ring-neutral-950" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-1">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  <a href="https://livlong.com/" target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Livlong 365
                  </a>
                </h3>
                <a href="https://livlong.com/" target="_blank" rel="noreferrer" className="shrink-0">
                  <img 
                    src="/images/livlong-main-logo.svg" 
                    alt="Livlong" 
                    className="h-8 w-auto object-contain" 
                  />
                </a>
              </div>
              
              <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-5">
                Principal Engineer & Team Lead <span className="mx-2">•</span> Sep 2021 - Present
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <li>Leading a team of 12+ members.</li>
                <li>Architected, Developed and Delivered more than 15 products in production in 2 years.</li>
                <li>Interviewed, Hired and Mentored the team for 12 members.</li>
                <li>Delivered D2C (livlong.com) scalable product which required high frequency of changes and collaboration across teams.</li>
                <li>In Process of product optimisations to improve the performance of website as per seo guidelines and search results.</li>
                <li>Involved in decision making for product planning and product delivery by working closely with my CTO, CEO and business teams.</li>
                <li>Setup the work culture for team members and trained them so effectively that now they are mature enough to find right toolset as per business needs.</li>
              </ul>
            </motion.div>

            {/* Nurtr */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[5.5px] top-2 bg-neutral-300 dark:bg-neutral-700 rounded-full w-3 h-3 ring-4 ring-white dark:ring-neutral-950" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-1">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  <a href="https://www.nurtr.com/" target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Nurtr Ltd.
                  </a>
                </h3>
                <a href="https://www.nurtr.com/" target="_blank" rel="noreferrer" className="shrink-0 bg-white rounded-lg px-2.5 py-1 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center">
                  <img 
                    src="/images/nurtr-logo.webp" 
                    alt="Nurtr" 
                    className="h-6 w-auto object-contain mix-blend-multiply" 
                  />
                </a>
              </div>
              <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-5">
                Sr. Full stack developer <span className="mx-2">•</span> Oct 2017 - March 2021
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <li>Lead team of 6+ members.</li>
                <li>Delivered nurtr.com in production.</li>
                <li>Crafted scalable frontend web applications with Angular 2+.</li>
                <li>Created Backend Node JS services following microservice architecture.</li>
                <li>Collaborated and worked closely with CTO and CEO for delivering products as per business requirements.</li>
                <li>Interviewed and actively participated in hiring team members.</li>
              </ul>
            </motion.div>

            {/* Mindtree */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[5.5px] top-2 bg-neutral-300 dark:bg-neutral-700 rounded-full w-3 h-3 ring-4 ring-white dark:ring-neutral-950" />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Mindtree Ltd.</h3>
              <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-5">
                Software Engineer <span className="mx-2">•</span> March 2015 - Sep 2017
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <li>Developed web app for managing applications similar to app store.</li>
                <li>Manual tested the developed application.</li>
                <li>Organised and provided different sessions on new web frameworks.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
