<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { twMerge } from 'tailwind-merge'

	let className = ''

	export { className as class }

	export let disabled = false

	let cardEl: HTMLElement
	let glowEl: HTMLElement

	function rotateToMouse(e: MouseEvent) {
		if (!disabled) {
			const bounds = cardEl.getBoundingClientRect()

			const mouseX = e.clientX
			const mouseY = e.clientY

			const leftX = mouseX - bounds.x
			const topY = mouseY - bounds.y

			const center = {
				x: leftX - bounds.width / 2,
				y: topY - bounds.height / 2
			}

			const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

			cardEl.style.transform = `
            rotate3d(${center.y * 0.01}, ${center.x * -0.01}, 0, ${Math.log(distance)}deg)
        `

			glowEl.style.backgroundImage = `
            radial-gradient(
                circle at
                    ${center.x * 2 + bounds.width / 2}px
                    ${center.y * 2 + bounds.height / 2}px,
                rgba(199, 243, 255, 0.2) 0%,
                rgba(255, 255, 255, 0) 50%
            )
        `
		}
	}

	function onMouseEnter() {
		document.addEventListener('mousemove', rotateToMouse)
	}

	function onMouseLeave() {
		document.removeEventListener('mousemove', rotateToMouse)
		cardEl.style.transform = ''
		cardEl.style.background = ''
	}

	onMount(() => {
		cardEl?.addEventListener('mouseenter', onMouseEnter)
		cardEl?.addEventListener('mouseleave', onMouseLeave)
	})

	onDestroy(() => {
		cardEl?.removeEventListener('mouseenter', onMouseEnter)
		cardEl?.removeEventListener('mouseleave', onMouseLeave)
	})
</script>

<div
	class={twMerge('group/cardFx relative transition-shadow duration-300', className)}
	bind:this={cardEl}
	role="figure"
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	<slot />

	{#if !disabled}
		<div
			bind:this={glowEl}
			class="absolute left-0 top-0 h-full w-full rounded-[1.5rem] opacity-0 transition-colors group-hover/cardFx:opacity-100"
			style="background-image: radial-gradient(circle at center, rgba(199, 243, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%);"
		/>
	{/if}
</div>
