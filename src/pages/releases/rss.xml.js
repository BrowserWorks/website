import rss from '@astrojs/rss'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { defaultLang } from '~/i18n/locales'
import { useTranslations } from '~/i18n/utils'
import { getCollectionEntries } from '~/lib/collection'
import { orderBy, parseSemVer } from '~/lib/orderBy'

const parser = new MarkdownIt()

export async function get(context) {
	const releases = orderBy(
		(await getCollectionEntries('docs', defaultLang)).filter((item) => item.parent === 'releases'),
		(item) => parseSemVer(item.data.label),
		'desc'
	)
	const t = useTranslations(defaultLang)

	return rss({
		title: t('rss.releases.title'),
		description: t('rss.releases.description'),
		site: context.site,
		items: releases.map((release) => {
			return {
				title: release.data.title,
				pubDate: release.data?.pubDate || new Date(),
				description: sanitizeHtml(parser.render(release.body), {
					allowedTags: []
				}),
				link: release.href
			}
		})
	})
}
