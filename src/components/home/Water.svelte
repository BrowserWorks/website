<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import Bubbles from '~/components/home/Bubbles.svelte'

	let className = ''

	export { className as class }

	export let bubbleQty: number | undefined = undefined
	export let bubbleSize: 'small' | 'large' = 'small'
	export let bgAlign: 'center' | 'top' = 'center'
</script>

<div class={twMerge('absolute left-0 top-0 h-full w-full overflow-hidden', className)}>
	<div
		class={twMerge(
			"absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 bg-[url('/images/water.png')] bg-cover bg-center lg:h-[120%] lg:w-[120%]",
			bgAlign === 'center' ? 'bg-center' : 'bg-top'
		)}
	/>

	<!-- Bubbles -->
	<Bubbles
		class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 lg:-translate-x-[calc(50%+500px)]"
		qty={bubbleQty}
		size={bubbleSize}
	/>
	<Bubbles
		class="absolute left-1/2 top-1/2 z-10 hidden lg:block lg:translate-x-[calc(-50%+500px)]"
		qty={bubbleQty}
		size={bubbleSize}
	/>
</div>
