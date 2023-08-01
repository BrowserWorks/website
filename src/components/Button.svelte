<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	let className = ''

	export let href: string | undefined = undefined
	export let type: 'submit' | 'reset' | 'button' | undefined = 'button'

	export { className as class }
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	on:click|stopPropagation
	on:keydown
	{href}
	type={!href ? type : undefined}
	role={href ? 'link' : 'button'}
	rel={href && href?.startsWith('http') ? 'noopener nofollow' : href ? 'prefecth' : undefined}
	target={href && href?.startsWith('http') ? '_blank' : '_self'}
	class={twMerge(
		'whitespace-nowrap rounded-full bg-gold px-7 py-4 font-montserrat text-lg font-semibold no-underline transition-all hover:scale-105 hover:bg-sand lg:text-xl',
		className
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
