import { getCollection } from 'astro:content'
import type { locales } from '~/i18n/locales'

export function parseCollectionEntry(entry: any, collection: string) {
	const [locale, ...rest] = entry.slug.split('/')
	const slug = rest.join('/')
	const localeCodes = locale.split('-')
	const lang =
		localeCodes.length === 2
			? `${localeCodes[0].toLowerCase()}-${localeCodes[1].toUpperCase()}`
			: locale
	const key = String(rest?.at(-1))
	const dir = rest?.at(-2)
	const href = `/${[lang, collection, ...rest].join('/')}/`
	const parent = dir !== collection ? dir : undefined
	const label = (entry.data as any)?.label || (entry.data as any)?.title || entry.key

	return {
		lang,
		key,
		slug,
		href,
		parent,
		label
	}
}

export async function getCollectionEntries(
	collection: 'blog' | 'docs' | 'download' | 'support',
	lang: keyof typeof locales
) {
	const entries = (await getCollection(collection))
		.sort((a: any, b: any) => {
			if (a?.data?.pubDate && b?.data?.pubDate) {
				return b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
			} else {
				return b.data.title - a.data.title
			}
		})
		.map((page: any) => ({
			...page,
			...parseCollectionEntry(page, collection)
		}))
		.filter((page) => page.lang === lang)

	const collectionEntries: ((typeof entries)[number] & {
		Content?: any
		formattedDate?: string
		remarkPluginFrontmatter?: Record<string, any>
	})[] = entries

	for (let index = 0; index < collectionEntries.length; index++) {
		const page = collectionEntries[index]
		const { Content, headings, remarkPluginFrontmatter } = await page.render()

		collectionEntries[index]['Content'] = Content
		collectionEntries[index]['headings'] = headings
		collectionEntries[index]['remarkPluginFrontmatter'] = remarkPluginFrontmatter

		if (page?.data?.pubDate)
			collectionEntries[index]['formattedDate'] = page.data.pubDate.toLocaleDateString(lang, {
				dateStyle: 'long'
			})
	}

	return collectionEntries
}
