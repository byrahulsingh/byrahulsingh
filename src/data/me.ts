// All copy for /me lives here so it can be edited without touching markup.

export type Accent = 'blue' | 'red' | 'green' | 'amber' | 'plum';

export const pipeline: { title: string; text: string; accent: Accent }[] = [
	{ title: 'Shape', text: 'Turn a fuzzy idea into a small first version a team can actually build.', accent: 'plum' },
	{ title: 'Build', text: 'Write the hard parts myself, set the architecture, keep the team unblocked.', accent: 'blue' },
	{ title: 'Launch', text: 'Get it in front of real users, then fix what they actually hit.', accent: 'red' },
	{ title: 'Scale', text: 'Make it fast and keep it running: microservices, performance, SEO.', accent: 'green' },
];

export const ships: {
	where: string;
	title: string;
	text: string;
	stamp: string;
	accent: Accent;
	tags: string[];
}[] = [
	{
		where: 'Livlong',
		title: 'livlong.com rebuild',
		text: 'Moved the public site off legacy WordPress. Lighthouse went from ~65–70 to 98–99, SEO to 100.',
		stamp: 'SHIPPED',
		accent: 'green',
		tags: ['web', 'SEO', 'performance'],
	},
	{
		where: 'Livlong',
		title: 'Lab-test marketplace',
		text: 'Built and launched a lab-test marketplace end to end.',
		stamp: 'SHIPPED',
		accent: 'blue',
		tags: ['React', 'Node.js', 'Postgres'],
	},
	{
		where: 'Livlong',
		title: 'Servicing portals',
		text: 'Internal portals the servicing teams work in.',
		stamp: 'SHIPPED',
		accent: 'amber',
		tags: ['React', 'Node.js'],
	},
	{
		where: 'Livlong',
		title: 'AI chatbot + voice calling',
		text: 'An AI chatbot and AI voice calling, both running in production.',
		stamp: 'IN PROD',
		accent: 'plum',
		tags: ['LLMs', 'voice'],
	},
	{
		where: 'Livlong',
		title: 'AI agents across CRM, email & WhatsApp',
		text: 'AI agents working across CRM, email and WhatsApp.',
		stamp: 'IN PROD',
		accent: 'red',
		tags: ['agents', 'workflows'],
	},
	{
		where: 'nurtr',
		title: 'Live chess classes platform',
		text: "The company's first product, built from scratch. Later led the move from monolith to microservices.",
		stamp: '0 → 1',
		accent: 'green',
		tags: ['ed-tech', 'microservices'],
	},
];

export const numbers: { value: string; text: string; accent: Accent }[] = [
	{ value: '11+ yrs', text: 'building and shipping products', accent: 'blue' },
	{ value: '15+', text: 'engineers in my team today', accent: 'plum' },
	{ value: '0 → 1', text: 'first product at nurtr, built from scratch', accent: 'red' },
	{ value: '65 → 98', text: 'Lighthouse score on livlong.com', accent: 'green' },
	{ value: '~60%', text: 'of my week is still hands-on code', accent: 'amber' },
];

export const chapters: {
	years: string;
	company: string;
	url?: string;
	role: string;
	accent: Accent;
	points: string[];
}[] = [
	{
		years: '2021 – now · Mumbai',
		company: 'Livlong',
		url: 'https://livlong.com/',
		role: 'Team Lead → Principal Engineer',
		accent: 'blue',
		points: [
			'Promoted to Principal after ~2 years.',
			'Lead 15+ engineers across React, Node.js and PostgreSQL on AWS.',
			'Shipped the site rebuild, a marketplace, portals and AI systems.',
		],
	},
	{
		years: '2017 – 2021',
		company: 'nurtr',
		url: 'https://www.nurtr.com/',
		role: 'One of the first engineers → Sr. Full Stack',
		accent: 'amber',
		points: [
			'Built the first product, live chess classes, from scratch.',
			'Led the monolith → microservices migration.',
			'Mentored a team of 4.',
		],
	},
	{
		years: '2015 – 2017 · Pune',
		company: 'Mindtree',
		role: 'Software Engineer',
		accent: 'green',
		points: ['QA → early Angular 2 → Node.js full-stack.', '"A Player" and "Best Team Player" awards.'],
	},
];

export const principles: { title: string; text: string; accent: Accent }[] = [
	{
		title: 'Hands on keys',
		text: 'About 60% code, 40% people and stakeholders. A working branch beats a slide deck.',
		accent: 'blue',
	},
	{
		title: 'Done means live',
		text: "A feature isn't finished when it merges. It's finished when users have it and it holds up.",
		accent: 'red',
	},
	{
		title: 'Speed is a feature',
		text: 'The livlong.com rebuild took Lighthouse from the 60s to 98. Fast products win more users.',
		accent: 'green',
	},
];

export const toolbox = [
	'Next.js',
	'React',
	'TypeScript',
	'TanStack',
	'Tailwind',
	'shadcn/ui',
	'Node.js',
	'Bun',
	'Hono',
	'Express',
	'Drizzle',
	'Postgres',
	'Python',
	'LangChain',
	'LangGraph',
	'AWS',
];
