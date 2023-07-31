<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	let className = ''

	export let href: string | undefined = undefined
	export let type: 'submit' | 'reset' | 'button' | undefined = 'button'

	export { className as class }

	let tag: 'a' | 'button' = href ? 'a' : 'button'
	let role: 'link' | 'button' = href ? 'link' : 'button'
	let target: '_blank' | '_self' | undefined
	let rel: 'prefecth' | 'noopener nofollow' | undefined

	if (tag === 'a') {
		type = undefined
		rel = 'prefecth'

		if (href && href?.startsWith('http')) {
			target = '_blank'
			rel = 'noopener nofollow'
		} else if (href) {
			target = '_self'
		}
	}
</script>

<svelte:element
	this={tag}
	on:click|stopPropagation
	on:keydown
	{href}
	{type}
	{role}
	{rel}
	{target}
	class={twMerge(
		'whitespace-nowrap rounded-full bg-gold px-7 py-4 font-montserrat text-lg font-bold font-semibold no-underline transition-all hover:scale-105 hover:bg-sand lg:text-xl',
		className
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
