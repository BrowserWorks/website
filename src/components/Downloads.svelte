<script lang="ts">
	import { onMount, tick } from 'svelte'
	import Select from 'svelte-select'
	import { twMerge } from 'tailwind-merge'
	import downloadSvg from '~/assets/icons/browser/downloads.svg'
	import linuxSvg from '~/assets/icons/linux.svg'
	import macSvg from '~/assets/icons/macos.svg'
	import windowsSvg from '~/assets/icons/windows.svg'

	import releases from '~/generated/releases.json'

	const svgMap = {
		windows: windowsSvg,
		macos: macSvg,
		linux: linuxSvg
	}

	let items: {
		label: string
		value: string
		stable: boolean
		pubDate: string
		downloads: { id: string; label: string; link: string; hash: string }[]
	}[] = []

	let selected: (typeof items)[number] | undefined = undefined
	let latest: (typeof items)[number] | undefined = undefined
	// biome-ignore lint/style/useConst: off
	let listOpen = false
	let focused = false
	let copied = ''
	let timeout: NodeJS.Timeout | undefined

	items = releases.map((release) => ({
		label: release.name,
		value: String(release.id),
		stable: !release?.prerelease,
		pubDate: release?.published_at,
		downloads: release?.downloads || []
	}))

	latest = items.find((i) => i.stable)
	selected = latest
	focused = false

	async function reset() {
		focused = false
		await tick()
		selected = latest
	}

	onMount(() => {
		const copyButtons = document.querySelectorAll('.copy')

		for (const button of copyButtons) {
			button.addEventListener('click', async (e) => {
				const target = e.target as Element
				const uuid = target.getAttribute('data-uuid') || ''
				const hash = target.getAttribute('data-clipboard-text') || ''
				copied = uuid
				await navigator.clipboard.writeText(hash)
				if (timeout) clearTimeout(timeout)
				timeout = setTimeout(() => {
					copied = ''
				}, 2000)
			})
		}
	})
</script>

<div class="relative flex w-full flex-col gap-8">
	<div class="relative flex w-full max-w-[24rem] items-center lg:ml-2">
		<Select
			--background="var(--sl-color-bg)"
			--list-background="var(--sl-color-bg)"
			--item-hover-bg="var(--sl-color-bg-accent)"
			--item-hover-color="var(--sl-color-bg)"
			{items}
			bind:value={selected}
			bind:listOpen
			bind:focused
			class="w-full"
			showChevron
			searchable={false}
			on:clear={reset}
			on:focus={() => (listOpen = true)}
		>
			<div slot="selection" class="flex w-full flex-row items-center gap-3 p-2" let:selection>
				<div class="text-lg font-normal">Version</div>
				<span class="text-lg font-semibold">{selection.label}</span>

				{#if !selection.stable}
					<div>
						<span class="rounded-lg bg-yellow-200 px-2 py-1 text-xs font-medium text-yellow-800">
							Pre-release
						</span>
					</div>
				{:else if selection.label === latest?.label}
					<div>
						<span class="rounded-lg bg-lime-200 px-2 py-1 text-xs font-medium text-lime-800">
							Latest
						</span>
					</div>
				{/if}
			</div>
			<div slot="item" class="flex h-full w-full flex-row items-center gap-4" let:item>
				<div class={twMerge('grow text-lg', item.label === latest?.label && 'font-semibold')}>
					{item.label}
				</div>

				{#if !item.stable}
					<div>
						<span class="rounded-lg bg-yellow-200 px-2 py-1 text-xs font-medium text-yellow-800">
							Pre-release
						</span>
					</div>
				{:else if item.label === latest?.label}
					<div>
						<span class="rounded-lg bg-lime-200 px-2 py-1 text-xs font-medium text-lime-800">
							Latest
						</span>
					</div>
				{/if}
			</div>
		</Select>
	</div>

	<div
		class="flex w-full flex-col gap-3 rounded-[1.5rem] border-[1px] bg-frost/20 px-8 py-6 shadow-lg lg:flex-row"
	>
		<div class="flex grow flex-col">
			<span class="text-sm">Date</span>
			<span class="font-bold">
				{selected?.pubDate &&
					new Date(selected.pubDate).toLocaleDateString('en-US', {
						dateStyle: 'long'
					})}
			</span>
		</div>
		<div class="flex grow flex-col">
			<span class="text-sm">Version</span>
			<span class="font-bold">{selected?.label}</span>
		</div>
		<div class="flex grow flex-col">
			<span class="text-sm">Release</span>
			<span class="font-bold">
				{selected?.label && selected.label === latest?.label
					? 'Latest'
					: selected?.stable
						? 'Latest'
						: 'Pre-release'}
			</span>
		</div>
	</div>
</div>

<div>
	<slot name="beforeDownloads" />
</div>

<div
	class="flex w-full flex-col gap-y-4 rounded-[1.5rem] border-[1px] bg-frost/20 px-8 py-6 shadow-xl"
>
	{#each selected?.downloads || [] as { id, label, link, hash }}
		{@const uuid = `${label} - ${hash}`}
		<div class="grid w-full gap-x-20 max-lg:gap-y-2 lg:grid-cols-[50%_1fr]">
			<div class="grid grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto] lg:gap-x-20">
				<div class="flex items-center gap-2 font-bold">
					<img
						src={svgMap[id]?.src}
						alt={`${id} icon`}
						class="not-prose inline-flex h-[18px] w-[18px] align-bottom"
					/>
					<span>{label}</span>
				</div>
				<div class="w-[4rem] whitespace-nowrap text-center text-xs">
					{#if copied === uuid}
						<span class="text-deepblue">Copied</span>
					{:else}
						<button data-uuid={uuid} data-clipboard-text={hash} class="copy hover:underline">
							Copy hash
						</button>
					{/if}
				</div>
			</div>
			<div>
				<a
					href={link}
					class="whitespace-nowrap rounded-full bg-gold px-7 font-montserrat dark:text-deepsea font-semibold no-underline transition-all hover:scale-105 hover:bg-sand tailwind-preflight flex items-center justify-center gap-2 py-2 text-sm lg:text-sm"
					type="button"
					id="button"
					rel={link.startsWith('http') ? 'noopener nofollow' : 'prefetch'}
					target={link.startsWith('http') ? '_blank' : '_self'}
				>
					<img
						src={downloadSvg.src}
						alt="Download icon"
						class="not-prose -ml-1 flex h-[18px] w-[18px]"
					/>
					Download {selected?.label}
				</a>
			</div>
		</div>
	{/each}
</div>
