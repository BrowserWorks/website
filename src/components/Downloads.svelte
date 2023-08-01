<script lang="ts">
	import ClipboardJS from 'clipboard'
	import { onDestroy, onMount, tick } from 'svelte'
	import Select from 'svelte-select'
	import { twMerge } from 'tailwind-merge'
	import Button from '~/components/Button.svelte'
	import Icon from '~/components/Icon.svelte'
	import GithubReleases from '~/generated/releases.json'
	import { useTranslations } from '~/i18n/utils'

	export let lang: string = 'en'

	const t = useTranslations(lang as any)

	let items: {
		label: string
		value: string
		stable: boolean
		pubDate: string
		downloads: { icon: string; label: string; link: string; hash: string }[]
	}[] = []
	let selected: (typeof items)[number] | undefined = undefined
	let latest: (typeof items)[number] | undefined = undefined
	let listOpen: boolean = false
	let focused = false
	let clipboard: ClipboardJS
	let copied: string = ''
	let timeout

	async function load() {
		const allItems: typeof items = []

		for (let idx = 0; idx < GithubReleases.length; idx++) {
			const release = GithubReleases[idx]
			const v = release.tag_name

			const windows = `https://cdn1.waterfox.net/waterfox/releases/${v}/WINNT_x86_64/Waterfox%20Setup%20${v}.exe`
			const macOS = `https://cdn1.waterfox.net/waterfox/releases/${v}/Darwin_x86_64-aarch64/Waterfox%20${v}.dmg`
			const linux = `https://cdn1.waterfox.net/waterfox/releases/${v}/Linux_x86_64/waterfox-${v}.tar.bz2`

			allItems.push({
				label: release.name,
				value: String(release.id),
				stable: !Boolean(release?.prerelease),
				pubDate: release?.published_at,
				downloads: [
					{
						icon: 'windows',
						label: 'Windows',
						link: windows,
						hash: await sha512(windows + '.sha512')
					},
					{
						icon: 'macos',
						label: 'macOS',
						link: macOS,
						hash: await sha512(macOS + '.sha512')
					},
					{
						icon: 'linux',
						label: 'Linux',
						link: linux,
						hash: await sha512(linux + '.sha512')
					}
				]
			})
		}

		items = allItems
		latest = items.find((i) => i.stable)

		reset()
	}

	function sha512(str) {
		return crypto.subtle.digest('SHA-512', new TextEncoder().encode(str)).then((buf) => {
			return Array.prototype.map
				.call(new Uint8Array(buf), (x) => ('00' + x.toString(16)).slice(-2))
				.join('')
		})
	}

	async function reset() {
		focused = false
		await tick()
		selected = latest
	}

	const releases = load()

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

{#await releases}
	{t('downloads.loading')}
{:then}
	<div class="relative flex w-full flex-col gap-8">
		<div class="relative flex w-full max-w-[24rem] items-center lg:ml-2">
			<Select
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
					<div class="text-lg font-normal">{t('downloads.version')}</div>
					<span class="text-lg font-semibold">{selection.label}</span>

					{#if !selection.stable}
						<div>
							<span class="rounded-lg bg-yellow-200 px-2 py-1 text-xs font-medium text-yellow-800">
								{t('downloads.unstable')}
							</span>
						</div>
					{:else if selection.label === latest?.label}
						<div>
							<span class="rounded-lg bg-lime-200 px-2 py-1 text-xs font-medium text-lime-800">
								{t('downloads.latest')}
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
								{t('downloads.unstable')}
							</span>
						</div>
					{:else if item.label === latest?.label}
						<div>
							<span class="rounded-lg bg-lime-200 px-2 py-1 text-xs font-medium text-lime-800">
								{t('downloads.latest')}
							</span>
						</div>
					{/if}
				</div>
			</Select>
		</div>

		<div
			class="flex w-full flex-col gap-3 rounded-[1.5rem] border-[1px] border-indigo/5 px-8 py-6 shadow-lg lg:flex-row"
		>
			<div class="flex grow flex-col">
				<span class="text-sm">{t('downloads.date')}</span>
				<span class="font-bold">
					{selected?.pubDate &&
						new Date(selected.pubDate).toLocaleDateString(lang, {
							dateStyle: 'long'
						})}
				</span>
			</div>
			<div class="flex grow flex-col">
				<span class="text-sm">{t('downloads.version')}</span>
				<span class="font-bold">{selected?.label}</span>
			</div>
			<div class="flex grow flex-col">
				<span class="text-sm">{t('downloads.release')}</span>
				<span class="font-bold">
					{selected?.label && selected.label === latest?.label
						? t('downloads.latest')
						: selected?.stable
						? t('downloads.stable')
						: t('downloads.prerelease')}
				</span>
			</div>
		</div>
	</div>

	<div>
		<slot name="beforeDownloads" />
	</div>

	<div
		class="flex w-full flex-col gap-y-4 rounded-[1.5rem] border-[1px] border-indigo/80 bg-frost/20 px-8 py-6 shadow-xl"
	>
		{#each selected?.downloads || [] as { icon, label, link, hash }}
			{@const uuid = `${label} - ${hash}`}
			<div class="grid w-full gap-x-20 max-lg:gap-y-2 lg:grid-cols-[60%_1fr]">
				<div class="grid grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto] lg:gap-x-20">
					<div class="flex items-center gap-2 font-bold">
						<Icon name={icon} class="inline-flex h-[18px] w-[18px] align-bottom" />
						<span>{label}</span>
					</div>
					<div class="w-[4rem] whitespace-nowrap text-center text-xs">
						{#if copied === uuid}
							<span class="text-deepblue">{t('downloads.copied')}</span>
						{:else}
							<button data-uuid={uuid} data-clipboard-text={hash} class="copy hover:underline">
								{t('downloads.copy')}
							</button>
						{/if}
					</div>
				</div>
				<div>
					<Button
						href={link}
						class="flex items-center justify-center gap-2 py-2 text-sm lg:text-sm"
					>
						<Icon name="download" class="-ml-1 flex h-[18px] w-[18px]" />{t('downloads.download')}
						{selected?.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
{:catch}
	{t('downloads.error')}
{/await}
