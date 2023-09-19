import cloudflare from '@astrojs/cloudflare'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import { rssSchema } from '@astrojs/rss'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { globSync } from 'glob'
import { join, parse } from 'path'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import remarkDirective from 'remark-directive'
import remarkToc from 'remark-toc'
import { remarkAdmonitions } from './scripts/remark-admonitions.mjs'
import { remarkJson } from './scripts/remark-json.mjs'
import { remarkReadingTime } from './scripts/remark-reading-time.mjs'
import { defaultLang, languages } from './src/i18n/locales'

// Sitemap config
const site = 'https://www.waterfox.net'
const customPages = []

// Sitemap build
globSync('./src/content/**/*.{md,mdx}').forEach((filePath) => {
	const fileParts = filePath
		?.split('/content/')?.[1]
		?.replace(/^\/|\/$/g, '')
		?.split('/')
	const [category, lang, ...rest] = fileParts.map((p) => parse(p).name)
	const id = [category, ...rest].join('/')
	const url = site + '/' + join(lang, category, ...rest) + '/'
	const idx = customPages.findIndex((page) => page.id === id)

	if (idx > -1) customPages[idx].links.push({ url, lang })
	else customPages.push({ id, links: [{ url, lang }] })
})

// https://astro.build/config
export default defineConfig({
	site: site,
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
		sitemap({
			customPages: customPages.map(
				({ links }) => links.find((link) => link.lang === defaultLang).url
			),
			i18n: {
				defaultLocale: defaultLang,
				locales: Object.keys(languages).reduce((acc, key) => {
					acc[key] = key
					return acc
				}, {})
			},
			serialize(item) {
				const page = customPages.find(({ links }) => links.find((link) => link.url === item.url))
				if (page) item.links = page.links
				return item
			}
		})
	],
	schema: rssSchema,
	output: 'server',
	adapter: cloudflare(),
	image: {
		service: {
			entrypoint: 'astro/assets/services/noop'
		}
	}
})
