<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import CardThreeD from '~/components/home/CardThreeD.svelte'
	import Lottie from '~/components/home/Lottie.svelte'

	let lottieEl: any
	let innerWidth: number = -1

	export let lottie: string
	export let alt: string
	export let title: string
	export let content: string
	export let cols: 1 | 2 = 1

	$: isMobile = innerWidth > -1 && innerWidth < 1024
	$: isMobile && lottieEl?.play()
	$: !isMobile && lottieEl?.pause()

	function onMouseEnter() {
		if (innerWidth > 768) lottieEl?.play()
	}

	function onMouseLeave() {
		lottieEl?.pause()
	}
</script>

<svelte:window bind:innerWidth />

<div
	style="perspective:1200px"
	class={twMerge(
		'grid w-full transition-transform duration-300 max-lg:max-w-[32rem] md:hover:scale-105',
		cols === 2 && 'lg:col-span-2'
	)}
>
	<CardThreeD
		class="rounded-[1.5rem] border-[1px] border-transparent bg-white dark:bg-slate-800 shadow-lg max-lg:border-gray-100 md:hover:border-gray-100 md:hover:shadow-2xl"
		on:mouseenter={onMouseEnter}
		on:mouseleave={onMouseLeave}
		disabled={isMobile}
	>
		<div class={twMerge('grid items-center gap-6 p-6 lg:p-14')}>
			<div
				class={twMerge(
					'mx-auto w-[90%] max-w-[500px]',
					cols === 2 && 'lg:row-start-1 last:lg:col-start-2'
				)}
			>
				<Lottie
					bind:this={lottieEl}
					file={lottie}
					{alt}
					autoplay={isMobile}
					width={800}
					height={600}
				/>
			</div>

			<div
				class={twMerge(
					'flex flex-col items-center gap-6 text-center',
					cols === 2 && 'lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left'
				)}
			>
				<h2
					class={twMerge(
						'text-balance font-montserrat text-3xl font-bold lg:max-w-[24rem]',
						cols === 2 && 'lg:max-w-none'
					)}
				>
					{title}
				</h2>
				<p class="text-balance">
					{@html content}
				</p>
			</div>
		</div>
	</CardThreeD>
</div>
