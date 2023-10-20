<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import Icon from '~/components/Icon.svelte'

	export let items: { heading: string; content: string; expanded?: boolean }[]

	function toggle(index: number) {
		items[index].expanded = !Boolean(items[index].expanded)
	}
</script>

<div class="flex w-full flex-col gap-5" itemscope itemtype="https://schema.org/FAQPage">
	{#each items as item, idx}
		<div
			itemscope
			itemprop="mainEntity"
			itemtype="https://schema.org/Question"
			class={twMerge(
				'w-full rounded-3xl bg-white dark:bg-slate-800 text-lg shadow-lg transition-colors',
				!item?.expanded && 'hover:bg-crystal'
			)}
		>
			<h3>
				<button
					type="button"
					id="accordion-header-{idx}"
					aria-expanded={item?.expanded}
					aria-controls="accordion-panel-{idx}"
					class="text-balance flex h-full w-full items-center gap-4 px-5 py-5 text-left font-montserrat font-semibold lg:px-10 lg:py-8"
					on:click={() => toggle(idx)}
				>
					<span class="grow" itemprop="name">{item.heading}</span>
					<Icon
						name="chevron"
						class={twMerge('duration-400 transition-all', item?.expanded === true && 'rotate-180')}
					/>
				</button>
			</h3>
			<section
				itemscope
				itemprop="acceptedAnswer"
				itemtype="https://schema.org/Answer"
				id="accordion-panel-{idx}"
				aria-labelledby="accordion-header-{idx}"
				class={twMerge(
					'duration-400 h-full max-h-0 overflow-hidden transition-[max-height]',
					item?.expanded === true && 'max-h-[50rem]'
				)}
			>
				<p class="px-5 pb-8 text-base leading-relaxed max-lg:text-base lg:px-10" itemprop="text">
					{@html item.content}
				</p>
			</section>
		</div>
	{/each}
</div>
