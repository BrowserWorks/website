import algoliasearch from 'algoliasearch'
import * as dotenv from 'dotenv'
import fs from 'fs'
import { globSync } from 'glob'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { join, parse } from 'path'
import sanitizeHtml from 'sanitize-html'
import MarkdownItAdminition from './markdown-it-adminition'

const parser = new MarkdownIt().use(MarkdownItAdminition, {
	marker: ':',
	types: ['info', 'important']
})

dotenv.config()

async function sync() {
	try {
		const posts = globSync(join(__dirname, '../src/content/**/*.{md,mdx}'))
			.map((filePath) => {
				const markdownFile = fs.readFileSync(filePath)

				const { data: frontmatter, content: markdown } = matter(markdownFile)

				const fileParts = filePath
					?.split('/content/')?.[1]
					?.replace(/^\/|\/$/g, '')
					?.split('/')

				const [category, lang, ...rest] = fileParts.map((p) => parse(p).name)

				const href = `/${[lang, category, ...rest].join('/')}/`
					.toLowerCase()
					.replace(/\./g, '')
					.replace(new RegExp('/index/' + '$'), '/')

				const objectID = href

				const title = frontmatter?.title || ''

				const content = sanitizeHtml(
					parser
						.render(markdown)
						.replace(/import.+';?/gim, '\n') // remove mdx imports
						.replace(/&lt;.+&gt;/gim, '\n') // remove <tags />
						.replace(/&[a-z]{1,3};/gim, ''), // remove any &; html chars
					{
						allowedTags: [],
						allowedAttributes: false
					}
				)
					.replace(/info\n/gim, '')
					.trim()

				return {
					objectID,
					lang,
					href,
					category,
					title,
					content
				}
			})
			.filter((post) => post?.title || post?.content)

		const client = algoliasearch(
			String(process.env.PUBLIC_ALGOLIA_APP_ID),
			String(process.env.ALGOLIA_WRITE_API_KEY)
		)

		const index = client.initIndex(String(process.env.PUBLIC_ALGOLIA_INDEX_NAME))

		const { objectIDs } = await index.replaceAllObjects(posts)

		console.log(objectIDs)
		console.log('\nContent synced with Algolia!')
	} catch (err) {
		console.error(err)
	}
}

sync()
