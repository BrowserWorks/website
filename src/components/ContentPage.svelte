<script lang="ts">
	export let title: string
	export let titleLink: string | undefined = undefined
	export let subtitle: string | undefined = undefined
</script>

<div class="markdown">
	<div class="mb-2 flex max-w-[65ch] flex-col gap-2 lg:mb-5">
		{#if titleLink}
			<a href={titleLink} rel="prefetch" class="no-underline">
				<h1
					class="text-pretty mb-0 font-montserrat text-3xl font-bold hover:text-deepblue lg:text-5xl"
				>
					{title}
				</h1>
			</a>
		{:else}
			<h1 class="text-pretty mb-0 font-montserrat text-3xl font-bold lg:text-5xl">
				{title}
			</h1>
		{/if}
		{#if subtitle}
			<span class="text-balance text-montserrat text-xl">{subtitle}</span>
		{/if}
	</div>

	<div class="text-pretty">
		<slot />
	</div>
</div>
