<script lang="ts">
	import type { AnimationItem, LottiePlayer } from 'lottie-web'
	import { onDestroy, onMount } from 'svelte'
	import { UAParser } from 'ua-parser-js'

	let targetEl: HTMLElement
	let lottieAnim: AnimationItem
	let lottie: LottiePlayer
	let useLottie = true

	export let file: string
	export let alt = ''
	export let autoplay: boolean = false
	export let width: number
	export let height: number

	export function play() {
		if (useLottie) lottieAnim?.play()
	}

	export function pause() {
		if (useLottie) lottieAnim?.pause()
	}

	onMount(async () => {
		const { browser } = UAParser(navigator.userAgent)

		useLottie = Boolean(['chrome', 'edge', 'brave'].includes(browser.name.toLowerCase()))

		if (useLottie) {
			lottie = (await import('lottie-web')) as unknown as LottiePlayer

			lottieAnim = lottie.loadAnimation({
				container: targetEl,
				renderer: 'svg',
				loop: true,
				autoplay,
				path: `/lottie/${file}.json`
			})

			lottieAnim?.setSpeed(1.1)
		}
	})

	onDestroy(() => {
		if (useLottie) lottieAnim?.destroy()
	})
</script>

<div
	bind:this={targetEl}
	role="figure"
	class="lottie h-full w-full"
	style="aspect-ratio:{width}/{height};"
>
	{#if !useLottie}
		<div class="w-full h-full p-2 lg:p-6">
			<img src="/images/{file}.png" class="w-full" {width} {height} {alt} />
		</div>
	{/if}
</div>
