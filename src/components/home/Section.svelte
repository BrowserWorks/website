<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	let className = ''

	export let id: string | undefined = undefined
	export let color: 'white' | 'deepsea' | 'frost' | 'crystal' = 'white'
	export let width: '5xl' | '7xl' = '7xl'
	export let padding: 'normal' | 'tight' = 'normal'

	export { className as class }
</script>

<section
	{id}
	class={twMerge(
		'relative px-6',
		color === 'deepsea' && `bg-deepsea`,
		color === 'frost' && `bg-frost`,
		color === 'crystal' && `bg-crystal`,
		padding === 'normal' && 'pb-14 pt-14 lg:pb-28 lg:pt-32',
		padding === 'tight' && 'pb-14 pt-14 lg:pb-12 lg:pt-16'
	)}
>
	<div
		class={twMerge(
			`mx-auto flex w-full flex-col items-center gap-12 lg:gap-24`,
			width === '7xl' && 'max-w-7xl',
			width === '5xl' && 'max-w-5xl',
			className
		)}
	>
		<slot />
	</div>
</section>
