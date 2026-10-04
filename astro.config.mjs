// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://byrahulsingh.com',
  integrations: [mdx(), sitemap()],

  // Only /me exists for now; point the root at it until the home page is built.
  redirects: {
      '/': '/me',
	},

  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Shantell Sans',
          cssVariable: '--font-shantell',
          weights: [400, 500, 600, 700, 800],
          subsets: ['latin'],
          fallbacks: ['ui-rounded', 'system-ui', 'sans-serif'],
      },
      {
          provider: fontProviders.google(),
          name: 'JetBrains Mono',
          cssVariable: '--font-jetbrains',
          weights: [500, 800],
          subsets: ['latin'],
          fallbacks: ['ui-monospace', 'monospace'],
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});