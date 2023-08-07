<script lang="ts">
	import { clickoutside } from '~/components/use/clickoutside'

	let className = ''

	export { className as class }

	let expanded: boolean = false
</script>

<div class="relative">
	<button
		use:clickoutside
		on:click={() => (expanded = !expanded)}
		on:clickoutside={() => (expanded = false)}
		aria-expanded={expanded}
		type="button"
		class={className}
	>
		<slot />
	</button>

	{#if expanded}
		<div
			class="min-w-32 absolute left-1/2 mt-2 rounded-md bg-frost p-4 max-xl:-translate-x-1/2 xl:left-0 xl:bg-white xl:shadow-lg"
		>
			<slot name="items" />
		</div>
	{/if}
</div>
