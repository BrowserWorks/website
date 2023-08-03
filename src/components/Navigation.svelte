<script lang="ts">
	import { onMount } from 'svelte'
	import { twMerge } from 'tailwind-merge'
	import Dropdown from '~/components/Dropdown.svelte'
	import Icon from '~/components/Icon.svelte'
	import { defaultLang, languages, locales } from '~/i18n/locales'
	import { localizeUrl, useTranslations } from '~/i18n/utils'
	import { orderBy, parseSemVer } from '~/lib/orderBy'

	type Item = {
		type?: 'link' | 'language-picker'
		key?: string
		href?: string
		label?: string
		slug?: string
		isActive?: boolean
		childs?: Item[]
		isExpanded?: boolean
	}

	export let template: 'default' | 'sidebar' = 'default'
	export let theme: 'dark' | 'light' = 'light'
	export let parentKey: string | undefined = undefined
	export let items: Item[] = []
	export let lang: string = defaultLang
	export let depth: number = 1

	export { className as class }

	const t = useTranslations(lang as any)
	const langSwitcher = Object.entries(languages) as unknown as [keyof typeof locales, string]

	let className: string
	let innerWidth: number
	let pageUrl: string

	$: useNestedNav = (template === 'default' && innerWidth < 1280) || template === 'sidebar'

	const orderedItems =
		parentKey === 'releases'
			? orderBy(items, (i: any) => parseSemVer(i.data?.label), 'desc')
			: depth > 1 || template === 'sidebar'
			? orderBy(
					items,
					[(i: any) => i?.childs?.length, (i: any) => i?.data?.pubDate, 'label'],
					['asc', 'desc', 'asc']
			  )
			: items

	const itemsList =
		orderedItems?.map((item) => {
			const hasActiveChild = item?.childs?.some(
				(c) => c.isActive || c?.childs?.find((gc) => gc?.isActive)
			)

			return {
				...item,
				...(hasActiveChild &&
					typeof item?.isExpanded === 'undefined' && {
						isExpanded: true,
						isActive: true
					})
			}
		}) || []

	onMount(() => (pageUrl = window.location.pathname.replace(`/${lang}`, '')))
</script>

<svelte:window bind:innerWidth />

<ul
	class={twMerge(
		'relative flex w-full flex-col items-start gap-2 font-montserrat text-sm font-semibold',
		!useNestedNav
			? 'items-center gap-y-6 text-2xl xl:flex-row xl:gap-x-6 xl:text-lg'
			: 'max-xl:text-2xl',
		useNestedNav && template === 'default' && depth === 1 && 'absolute max-xl:py-[20vh]',
		className
	)}
>
	{#each itemsList as item, idx}
		<li
			class={twMerge(
				'flex w-full flex-col items-start gap-2',
				useNestedNav && template === 'default' && depth === 1 && 'max-xl:px-[14vw]'
			)}
		>
			{#if item?.type === 'language-picker' && langSwitcher?.length > 1}
				{#if useNestedNav}
					<button
						type="button"
						class="flex items-center gap-2"
						id="content-nav-{idx}"
						aria-expanded={Boolean(item?.['isExpanded'])}
						aria-controls="content-subnav-{idx}"
						on:click={() => (item['isExpanded'] = !Boolean(item?.isExpanded))}
					>
						{t('nav.language')}
						<Icon
							name="chevron"
							class={twMerge('h-[10px] w-[10px]', !Boolean(item?.isExpanded) && '-rotate-90')}
						/>
					</button>

					{#if Boolean(item?.isExpanded)}
						<section id="content-subnav-{idx}" aria-labelledby="content-nav-{idx}">
							<ul class={twMerge('flex flex-col items-start pl-6', className)}>
								{#each langSwitcher as [locale, label]}
									<li>
										<a
											href={localizeUrl(pageUrl, locale)}
											rel="prefetch"
											class={twMerge(
												'text-pretty font-normal hover:text-deepblue',
												locale === lang && 'text-deepblue',
												useNestedNav && template === 'default' && 'text-sm'
											)}
										>
											{label}
										</a>
									</li>
								{/each}
							</ul>
						</section>
					{/if}
				{:else}
					<Dropdown class="flex items-center gap-2">
						{lang && languages?.[lang]}

						<Icon
							name="dropdown"
							class={twMerge(
								'h-[20px] w-[20px] text-deepsea xl:h-[20px] xl:w-[20px] ',
								theme === 'dark' && 'xl:text-white'
							)}
						/>

						<svelte:fragment slot="items">
							<ul class="flex flex-col gap-2">
								{#each langSwitcher.filter(([locale]) => locale !== lang) as [locale, label]}
									<li>
										<a href={localizeUrl(pageUrl, locale)} rel="prefetch">
											{label}
										</a>
									</li>
								{/each}
							</ul>
						</svelte:fragment>
					</Dropdown>
				{/if}
			{:else if item?.type !== 'language-picker' && item?.childs?.length && useNestedNav}
				<button
					type="button"
					class={twMerge(
						'flex items-center gap-2',
						useNestedNav && template === 'default' && depth > 1 && 'text-base',
						useNestedNav && template === 'default' && item?.isActive && 'text-deepblue'
					)}
					id="content-nav-{idx}"
					aria-expanded={Boolean(item?.['isExpanded'])}
					aria-controls="content-subnav-{idx}"
					on:click={() => {
						item['isExpanded'] = !Boolean(item?.['isExpanded'])
					}}
				>
					{item?.label}
					<Icon
						name="chevron"
						class={twMerge('h-[10px] w-[10px]', !Boolean(item?.isExpanded) && '-rotate-90')}
					/>
				</button>

				{#if Boolean(item?.isExpanded)}
					<section id="content-subnav-{idx}" aria-labelledby="content-nav-{idx}">
						<svelte:self
							class={'pl-6'}
							depth={depth + 1}
							bind:items={item.childs}
							bind:parentKey={item.key}
							bind:template
							bind:lang
							bind:theme
						/>
					</section>
				{/if}
			{:else if item?.type !== 'language-picker'}
				<a
					href={item?.href}
					class={twMerge(
						'text-pretty hover:text-deepblue',
						item?.isActive && 'text-deepblue',
						useNestedNav && 'font-normal',
						useNestedNav && template === 'default' && depth > 1 && 'text-sm',
						useNestedNav && template === 'default' && depth === 1 && 'font-semibold'
					)}
				>
					{item?.label}
				</a>
			{/if}
		</li>
	{/each}
</ul>
