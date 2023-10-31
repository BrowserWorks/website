import { OGImageRoute } from 'astro-og-canvas'
import { getCollection } from 'astro:content'
import { join, resolve } from 'node:path'
import { writeFile } from 'node:fs'

const allPages = await getCollection('docs', (entry) => {
	return true
})

// fs.writeFileSync('log.json', JSON.stringify(allPages))

/** Paths for all of our Markdown content we want to generate OG images for. */
const paths = process.env.SKIP_OG ? [] : allPages

/** An object mapping file paths to file metadata. */
const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]))

export const { getStaticPaths, GET } = OGImageRoute({
	param: 'path',

	pages,

	getImageOptions: async (_, { data, slug }: (typeof pages)[string]) => {
		return {
			title: data.title,
			description: data.description,
			dir: slug,
			logo: {
				path: './src/assets/waterfox-logo.png',
				size: [400]
			},
			border: { color: [5, 51, 97], width: 20, side: 'inline-start' },
			bgGradient: [
				[182, 156, 254],
				[123, 165, 255]
			],
			font: {
				title: {
					size: 80,
					families: ['Montserrat'],
					weight: 'Bold'
				},
				description: {
					size: 40,
					lineHeight: 1.25,
					families: ['Montserrat Thin'],
					weight: 'Light'
				}
			},
			fonts: [
				'https://github.com/JulietaUla/Montserrat/raw/master/fonts/webfonts/Montserrat-Light.woff2',
				'https://github.com/JulietaUla/Montserrat/raw/master/fonts/webfonts/Montserrat-Bold.woff2'
			]
		}
	}
})
