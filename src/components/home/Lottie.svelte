<script lang="ts">
	import { onMount } from 'svelte'
	import { twMerge } from 'tailwind-merge'
	import { UAParser } from 'ua-parser-js'

	let player: any
	let useAnimations = true
	let loaded = false
	let fallbackImg: HTMLImageElement

	export let file: string
	export let alt = ''
	export let autoplay: boolean = false
	export let width: number
	export let height: number

	export function play() {
		if (useAnimations && typeof player !== 'undefined') player?.play()
	}

	export function pause() {
		if (useAnimations && typeof player !== 'undefined') player?.pause()
	}

	onMount(async () => {
		const { browser } = UAParser(navigator.userAgent)

		useAnimations = Boolean(['chrome', 'edge', 'brave'].includes(browser.name.toLowerCase()))

		if (useAnimations) {
			if (autoplay) play()
			loaded = true
		} else {
			const newImg = new Image()
			newImg.onload = async () => {
				fallbackImg.src = newImg.src
				loaded = true
			}
			newImg.src = `/images/${file}.svg`
		}
	})
</script>

<div
	role="figure"
	class={twMerge('lottie h-full w-full opacity-0', loaded && 'opacity-100')}
	style="aspect-ratio:{width}/{height};"
>
	{#if useAnimations}
		<lottie-player
			bind:this={player}
			src={`/lottie/${file}.json`}
			background="Transparent"
			speed="1"
			class="h-full w-full"
			loop
		/>
	{:else}
		<div class={twMerge('h-full w-full opacity-0 transition-opacity', loaded && 'opacity-100')}>
			<img bind:this={fallbackImg} class="h-full w-full object-contain" {width} {height} {alt} />
		</div>
	{/if}
</div>
