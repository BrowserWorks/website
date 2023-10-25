<script lang="ts">
	import ClipboardJS from 'clipboard'
	import { onDestroy, onMount, tick } from 'svelte'
	import Select from 'svelte-select'
	import { twMerge } from 'tailwind-merge'
	import Button from '~/components/Button.svelte'
	import Icon from '~/components/Icon.svelte'
	import releases from '~/generated/releases.json'

	let items: {
		label: string
		value: string
		stable: boolean
		pubDate: string
		downloads: { id: string; label: string; link: string; hash: string }[]
	}[] = []

	let selected: (typeof items)[number] | undefined = undefined
	let latest: (typeof items)[number] | undefined = undefined
	let listOpen: boolean = false
	let focused = false
	let clipboard: ClipboardJS
	let copied: string = ''
	let timeout

	items = releases.map((release) => ({
		label: release.name,
		value: String(release.id),
		stable: !Boolean(release?.prerelease),
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
		clipboard = new ClipboardJS('.copy')

		clipboard.on('success', (e) => {
			copied = e.trigger.getAttribute('data-uuid') || ''
			if (timeout) clearTimeout(timeout)
			timeout = setTimeout(() => (copied = ''), 2000)
		})
	})

	onDestroy(() => {
		if (timeout) clearTimeout(timeout)
		clipboard?.destroy()
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
					new Date(selected.pubDate).toLocaleDateString("en-US", {
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
					<Icon name={id} class="inline-flex h-[18px] w-[18px] align-bottom" />
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
				<Button href={link} class="tailwind-preflight flex items-center justify-center gap-2 py-2 text-sm lg:text-sm">
					<Icon name="download" class="-ml-1 flex h-[18px] w-[18px]" />Download
					{selected?.label}
				</Button>
			</div>
		</div>
	{/each}
</div>
