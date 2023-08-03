<script lang="ts">
	import '@docsearch/css'
	import docsearch from '@docsearch/js'
	import { onMount } from 'svelte'
	import { twMerge } from 'tailwind-merge'
	import Icon from '~/components/Icon.svelte'
	import { defaultLang } from '~/i18n/locales'
	import { useTranslations } from '~/i18n/utils'

	let searchboxEl: HTMLElement

	export let lang: string = defaultLang
	export let mode: 'icon' | 'default' = 'default'

	const t = useTranslations(lang as any)

	function open() {
		let el: HTMLElement = document.getElementsByClassName('DocSearch-Button')[0] as HTMLElement
		el.click()
	}

	onMount(() => {
		docsearch({
			appId: import.meta.env.PUBLIC_ALGOLIA_APP_ID,
			apiKey: import.meta.env.PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY,
			container: searchboxEl,
			indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME,
			placeholder: t('search.placeholder'),
			searchParameters: {
				facetFilters: [`language:${lang}`]
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
