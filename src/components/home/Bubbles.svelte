<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	let className = ''

	export let width = 621
	export let height = 1024

	export let qty: number = 13
	export let size: 'small' | 'large' = 'small'

	$: smallBubbles = Math.round(qty * 0.7)
	$: largeBubbles = Math.round(qty * 0.3)

	function random(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	export { className as class }
</script>

<div class={twMerge('h-[10rem] w-full overflow-visible', className)} style="max-width:{width}px;">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 {width} {height}"
		class="h-auto w-full overflow-visible"
	>
		<g class="overflow-visible" stroke-width="5">
			{#each { length: largeBubbles } as _, i}
				{@const d = size === 'small' ? random(18, 32) : random(48, 62)}

				<g
					style="animation: up {random(12, 20)}s {random(
						100 * i,
						250 * i * 2
					)}ms infinite; transform: translateY({height}px);"
					class="opacity-0"
				>
					<g
						style="animation: up {random(12, 20)}s {random(
							100 * i,
							250 * i * 2
						)}ms infinite;transform: translate({random(0, width)}px, {height}px);"
					>
						<circle
							cx={d}
							cy={d}
							r={d}
							class="fill-none stroke-white scale-100"
							style="animation: wobble {random(6, 8)}s infinite ease-in-out;"
						/>
					</g>
				</g>
			{/each}
		</g>

		<g class="overflow-visible" stroke-width="2">
			{#each { length: smallBubbles } as _, i}
				{@const d = size === 'small' ? random(10, 20) : random(15, 25)}

				<g
					style="animation: up {random(10, 18)}s {random(
						100 * i,
						250 * i * 2
					)}ms infinite; transform: translateY({height}px);"
					class="opacity-0"
				>
					<g
						style="animation: up {random(10, 18)}s {random(
							100 * i,
							250 * i * 2
						)}ms infinite;transform: translate({random(0, width)}px, {height}px);"
					>
						<circle
							cx={d}
							cy={d}
							r={d}
							class="fill-none stroke-white scale-100"
							style="animation: wobble {random(6, 8)}s infinite ease-in-out;"
						/>
					</g>
				</g>
			{/each}
		</g>
	</svg>
</div>
