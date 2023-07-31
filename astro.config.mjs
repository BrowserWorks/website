import cloudflare from '@astrojs/cloudflare'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import prefetch from '@astrojs/prefetch'
import { rssSchema } from '@astrojs/rss'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import remarkDirective from 'remark-directive'
import remarkToc from 'remark-toc'
import { remarkAdmonitions } from './scripts/remark-admonitions.mjs'
import { remarkJson } from './scripts/remark-json.mjs'
import { remarkReadingTime } from './scripts/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.waterfox.net',
	build: {
		inlineStylesheets: 'auto'
	},
	markdown: {
		remarkPlugins: [remarkToc, remarkReadingTime, remarkDirective, remarkAdmonitions, remarkJson],
		rehypePlugins: [rehypeHeadingIds, rehypeAccessibleEmojis]
	},
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		mdx(),
		svelte(),
		prefetch(),
		partytown(),
		sitemap()
	],
	schema: rssSchema,
	output: 'server',
	adapter: cloudflare()
})
