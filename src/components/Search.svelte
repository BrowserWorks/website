<script lang="ts">
	import { autocomplete, getAlgoliaResults, type AutocompleteApi } from '@algolia/autocomplete-js'
	import '@algolia/autocomplete-theme-classic'
	import algoliasearch from 'algoliasearch'
	import { onMount } from 'svelte'
	import { twMerge } from 'tailwind-merge'
	import Icon from '~/components/Icon.svelte'
	import { useTranslations } from '~/i18n/utils'

	let searchboxEl: HTMLElement
	let algolia: AutocompleteApi<any>

	export let lang: string = 'en'
	export let mode: 'icon' | 'default' = 'default'

	const t = useTranslations(lang as any)

	const searchClient = algoliasearch(
		import.meta.env.PUBLIC_ALGOLIA_APP_ID,
		import.meta.env.PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
	)

	function open() {
		algolia.setIsOpen(true)
	}

	onMount(() => {
		algolia = autocomplete({
			container: searchboxEl,
			placeholder: t('search.placeholder'),
			detachedMediaQuery: '',
			openOnFocus: true,
			defaultActiveItemId: 0,
			reshape({ sources }) {
				const categories: {
					[category: string]: {
						items: string[]
						source: any
					}
				} = {}

				for (const source of sources) {
					const items = source.getItems()
					for (const item of items) {
						const category = item.category as string
						if (!categories[category]) {
							categories[category] = { items: [], source }
						}
						categories[category].items.push(item)
					}
				}

				const reshapedResults = Object.entries(categories).map(([category, value]) => ({
					...value.source,
					sourceId: category,
					getItems: () => value.items
				}))

				return reshapedResults
			},
			getSources({ query }) {
				return [
					{
						sourceId: 'posts',
						onSelect({ item }) {
							if (item?.href) window.location.href = String(item.href)
						},
						getItemInputValue({ item }) {
							return item.title
						},
						getItems() {
							return getAlgoliaResults({
								searchClient,
								queries: [
									{
										indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME,
										query,
										params: {
											hitsPerPage: 5,
											attributesToSnippet: ['title:10', 'content:10'],
											snippetEllipsisText: '…',
											filters: `lang:${lang}`
										}
									}
								]
							})
						},
						templates: {
							header({ html, source }) {
								return html`<div class="flex items-center gap-2 font-bold capitalize text-deepsea">
									${source.sourceId}
								</div>`
							},
							item({ item, components, html }) {
								return html`<div class="aa-ItemWrapper">
									<div class="aa-ItemContent">
										<div class="aa-ItemIcon">
											<svg width="20" height="20" viewBox="0 0 20 20">
												<path
													d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4"
													stroke="currentColor"
													fill="none"
													fill-rule="evenodd"
													stroke-linejoin="round"
												/>
											</svg>
										</div>
										<div class="aa-ItemContentBody">
											<div class="aa-ItemContentTitle">
												${components.Highlight({
													hit: item,
													attribute: 'title'
												})}
											</div>
											<div class="aa-ItemContentDescription">
												${components.Snippet({
													hit: item,
													attribute: 'content'
												})}
											</div>
										</div>
									</div>
									<div class="aa-ItemActions">
										<button
											class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
											type="button"
											title="Select"
										>
											<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
												<path
													d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"
												/>
											</svg>
										</button>
									</div>
								</div>`
							}
						}
					}
				]
			}
		})
	})
</script>

<div
	class={twMerge(
		'relative',
		mode === 'default' && 'absolute right-4 top-1/2 z-20 -translate-y-1/2 xl:right-0'
	)}
>
	<div bind:this={searchboxEl} class={twMerge('max-xl:hidden', mode === 'icon' && 'hidden')} />

	<button
		on:click={open}
		class={twMerge('hover:text-aqua max-xl:flex', mode === 'default' && 'hidden')}
	>
		<Icon name="search" class="flex h-[21px] w-[21px]" />
		<span class="absolute left-[-10000px] top-auto h-[1px] w-[1px] overflow-hidden">
			{t('nav.search')}
		</span>
	</button>
</div>
