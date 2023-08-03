<script lang="ts">
	import { onMount } from 'svelte'
	import { UAParser } from 'ua-parser-js'

	let lottieEl: any
	let useLottie = true

	export let file: string
	export let alt = ''
	export let autoplay: boolean = false
	export let width: number
	export let height: number

	export function play() {
		if (useLottie) lottieEl?.play()
	}

	export function pause() {
		if (useLottie) lottieEl?.pause()
	}

	onMount(async () => {
		const { browser } = UAParser(navigator.userAgent)
		useLottie = Boolean(['chrome', 'edge', 'brave'].includes(browser.name.toLowerCase()))
	})
</script>

<div role="figure" class="lottie h-full w-full" style="aspect-ratio:{width}/{height};">
	{#if useLottie}
		<lottie-player
			bind:this={lottieEl}
			src={`/lottie/${file}.json`}
			background="Transparent"
			speed="1.1"
			style="width:100%; height:100%"
			direction="1"
			mode="normal"
			loop
			autoplay={autoplay ?? undefined}
		/>
	{:else}
		<div class="h-full w-full p-2 lg:p-6">
			<img src="/images/{file}.svg" class="w-full" {width} {height} {alt} />
		</div>
	{/if}
</div>
