import { getCollection } from 'astro:content'
import '~/assets/global.scss'
import { navigation } from '~/config'
import { defaultLang, type locales } from '~/i18n/locales'
import { localizeUrl, useTranslations, type Key } from '~/i18n/utils'
import { parseCollectionEntry } from '~/lib/collection'

type NavigationItem = {
	key: string
	parentKey?: string
	[propName: string]: any
}

type NavigationTreeNode = {
	key?: string
	childs?: NavigationTreeNode[]
	[propName: string]: any
}

type NavOptions = {
	useNav?: boolean
	useContentNav?: boolean | string
	lang?: keyof typeof locales
	isActive?: (item: any) => boolean
	ignoreChilds?: (item: any) => boolean
}

type GetNavParams = {
	lang: Required<NavOptions>['lang']
	isActive: Required<NavOptions>['isActive']
	ignoreChilds: Required<NavOptions>['ignoreChilds']
	useContentNav: Required<NavOptions>['useContentNav']
	t: Function
}

export async function createNavigation(opts?: NavOptions) {
	const navOptions = {
		lang: (opts?.lang ?? defaultLang) as keyof typeof locales,
		isActive: typeof opts?.isActive === 'function' ? opts?.isActive : () => false,
		ignoreChilds: typeof opts?.ignoreChilds === 'function' ? opts?.ignoreChilds : () => false
	}

	const t = useTranslations(navOptions.lang as any)
	const useNav = typeof opts?.useNav !== 'undefined' ? opts.useNav : false
	const useContentNav = typeof opts?.useContentNav !== 'undefined' ? opts.useContentNav : false
	const params = { ...navOptions, useContentNav, t }

	let arr: any[] = []

	if (useNav) arr = [...arr, ...getNavigationItems(params)]

	if (useContentNav) arr = [...arr, ...(await getContentNavigationItems(params))]

	return createNavigationTree(arr, params)
}

function getNavigationItems({ lang, t, isActive }: GetNavParams) {
	return (navigation as any[]).map((navItem) => {
		const href = localizeUrl(navItem.href, lang)

		const attrs = {
			...navItem,
			...(navItem?.href && { href }),
			...(navItem?.key && {
				label: t(navItem.key as Key)
			})
		}

		return {
			...attrs,
			isActive: isActive(attrs)
		}
	})
}

async function getContentNavigationItems({ isActive, lang, useContentNav }: GetNavParams) {
	let contentNavigation: any[] = []

	if (useContentNav === true) {
		for (let idx = 0; idx < navigation.length; idx++) {
			const navItem = navigation[idx]

			if (navItem?.content) {
				const pages = await getCollection(navItem.content as any)

				pages.forEach((page) => {
					const attrs = parseCollectionEntry(page, navItem.content)
					const parentKey = attrs?.parent ? attrs.parent : navItem.key
					const pageIndex = contentNavigation.findIndex((p) => p.key === attrs.key)
					const pageData = {
						...page,
						...attrs,
						isActive: isActive(attrs),
						parentKey,
						grandParentKey: navItem.key
					}

					if ((attrs.lang === lang || attrs.lang === defaultLang) && pageIndex === -1) {
						contentNavigation.push(pageData)
					} else if (attrs.lang === lang && pageIndex > -1) {
						contentNavigation[pageIndex] = pageData
					}
				})
			}
		}
	} else if (typeof useContentNav === 'string') {
		;(await getCollection(useContentNav as any)).forEach((page) => {
			const attrs = parseCollectionEntry(page, useContentNav)
			const parentKey = attrs?.parent
			const pageIndex = contentNavigation.findIndex((p) => p.key === attrs.key)
			const pageData = { ...page, ...attrs, isActive: isActive(attrs), parentKey }

			if ((attrs.lang === lang || attrs.lang === defaultLang) && pageIndex === -1) {
				contentNavigation.push(pageData)
			} else if (attrs.lang === lang && pageIndex > -1) {
				contentNavigation[pageIndex] = pageData
			}
		})
	}

	for (let idx = 0; idx < contentNavigation.length; idx++) {
		const navItem = contentNavigation[idx]

		if (
			navItem?.grandParentKey &&
			navItem?.parentKey &&
			navItem?.grandParentKey !== navItem?.parentKey &&
			!contentNavigation.find((item) => item.key === navItem?.parentKey)
		) {
			contentNavigation.push({
				key: navItem?.parentKey,
				parentKey: navItem.grandParentKey
			})
		}
	}

	return contentNavigation
}

function createNavigationTree(
	items: NavigationItem[],
	{ t, ignoreChilds, isActive }: GetNavParams
): NavigationTreeNode[] {
	const nodes: { [id: string]: NavigationTreeNode } = {}

	// Create navigation nodes for all items, including those without explicit keys.
	items
		.filter((item) => item?.key)
		.forEach((item) => {
			nodes[item.key] = { ...nodes[item.key], ...item, childs: [] }

			if (item?.parentKey && !nodes[item.parentKey]) {
				const urlParts = item.href.split('/')

				const virtualItem = {
					label: t(`content.${item.parentKey}` as Key),
					key: item.parentKey,
					href: urlParts.slice(0, urlParts.length - 2).join('/') + '/',
					lang: item.lang,
					childs: []
				}

				nodes[item.parentKey] = {
					...virtualItem,
					isActive: isActive(virtualItem)
				}
			}
		})

	// Connect child nodes to parent nodes.
	items
		.filter((item) => item?.key)
		.forEach((item) => {
			if (item?.parentKey && !ignoreChilds(nodes[item.parentKey])) {
				nodes[item.parentKey]?.childs?.push(nodes[item.key])
			}
		})

	// Return the nodes that have no parents as the root nodes of the navigation tree.
	return [
		...Object.values(nodes).filter(
			(node) => !items.some((item) => item.key === node.key && item.parentKey)
		),
		// add items without key
		...items.filter((item) => !item?.key)
	]
}
