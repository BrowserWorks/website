import rss from '@astrojs/rss'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { useTranslations } from '~/i18n/utils'
import { getCollectionEntries } from '~/lib/collection'

const parser = new MarkdownIt()

export async function get(context) {
	const blog = await getCollectionEntries('blog', 'en')
	const t = useTranslations('en')

	return rss({
		title: t('rss.blog.title'),
		description: t('rss.blog.description'),
		site: context.site,
		items: blog.map((post) => {
			return {
				title: post.data.title,
				pubDate: post.data.pubDate,
				author: post.data.author,
				description: sanitizeHtml(parser.render(post.body), {
					allowedTags: []
				}),
				link: post.href
			}
		})
	})
}
