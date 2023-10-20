<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import WaterfoxLogo from '~/assets/icons/browser/waterfox.svg'
	import Icon from '~/components/Icon.svelte'

	const browsers = {
		waterfox: 'Waterfox',
		chrome: 'Chrome',
		edge: 'Edge',
		safari: 'Safari'
	} as const

	export let features: {
		[feature: string]: {
			waterfox: boolean
			chrome: boolean
			edge: boolean
			safari: boolean
		}
	} = {}

	export let locales: {
		included?: string
		excluded?: string
	} = {}

	$: featuresList = Object.keys(features)?.map((feature) => ({
		label: feature,
		...features?.[feature]
	}))
</script>

<table class="h-full overflow-hidden rounded-[1.5rem] border-none bg-white dark:bg-slate-800 shadow-lg">
	<thead>
		<tr>
			<td />

			{#each Object.values(browsers) as browser}
				<th scope="col">
					<div class="flex h-full flex-col items-center justify-end gap-2 py-6">
						<div class="flex items-center justify-center">
							{#if browser == 'Waterfox'}
								<img
									src={WaterfoxLogo.src}
									aria-hidden="true"
									alt="{browser} browser icon"
									class="w-[13vw] lg:w-[118px]"
									width="236"
									height="192"
								/>
							{:else}
								<img
									src="/images/{browser.toLowerCase()}.svg"
									aria-hidden="true"
									alt="{browser} browser icon"
									class="w-[13vw] lg:w-[118px]"
									width="236"
									height="192"
								/>
							{/if}
						</div>
						<div class="font-montserrat text-xs font-bold md:text-base lg:text-lg">
							{browser}
						</div>
					</div>
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each featuresList as feat, row}
			<tr class="group/feat">
				<th
					class={twMerge(
						'duration-50 border-2 border-l-0 border-deepsea p-0 transition-colors group-hover/feat:bg-turquoise/10',
						row === featuresList?.length - 1 && 'border-b-0'
					)}
				>
					<div
						class="flex h-[5rem] max-w-[16rem] items-center justify-start px-3 text-left font-montserrat text-xs font-bold md:text-base lg:h-[5.6rem] lg:px-8 lg:text-lg"
					>
						{feat.label}
					</div>
				</th>

				{#each Object.keys(browsers) as browser, col}
					<td
						class={twMerge(
							'h-full w-[18vw] border-2 border-deepsea p-0 lg:w-[12rem]',
							col === Object.keys(browsers)?.length - 1 && 'border-r-0',
							row === featuresList?.length - 1 && 'border-b-0'
						)}
					>
						<div
							style="perspective:800px"
							class={twMerge(
								'group/browserfeat duration-50 relative flex h-full w-full items-center justify-center px-2 transition-all hover:z-10 group-hover/feat:bg-turquoise/10',
								col === 0 && 'bg-crystal/40'
							)}
						>
							{#if feat?.[browser]}
								<Icon
									name="check"
									class="duration-50 h-[32px] w-[32px] rounded-full transition-all group-hover/browserfeat:scale-125 group-hover/browserfeat:shadow-xl lg:h-[42px] lg:w-[42px]"
									title={locales?.included}
								/>
							{:else}
								<Icon
									name="cross"
									class="duration-50 h-[32px] w-[32px] rounded-full transition-all group-hover/browserfeat:scale-125 group-hover/browserfeat:shadow-xl lg:h-[42px] lg:w-[42px]"
									title={locales?.included}
								/>
							{/if}
						</div>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
