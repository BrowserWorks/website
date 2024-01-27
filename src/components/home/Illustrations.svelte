<script lang="ts">
	import { onMount } from 'svelte'
	import { twMerge } from 'tailwind-merge'

	let loaded = false
	let illustration: HTMLImageElement

	export let file: string
	export let alt = ''
	export let width: number
	export let height: number

	onMount(async () => {
		const newImg = new Image()
		newImg.onload = async () => {
			illustration.src = newImg.src
			loaded = true
		}
		newImg.src = `/images/${file}.svg`
	})
</script>

<div
	role="figure"
	class={twMerge('lottie h-full w-full opacity-0', loaded && 'opacity-100')}
	style="aspect-ratio:{width}/{height};"
>
	<div class={twMerge('h-full w-full opacity-0 transition-opacity', loaded && 'opacity-100')}>
		<img bind:this={illustration} class="h-full w-full object-contain" {width} {height} {alt} />
	</div>
</div>
