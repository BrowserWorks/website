<script lang="ts">
	export let title: string
	export let subtitle: string | undefined = undefined
</script>

<div class="mx-auto my-6 flex max-w-7xl gap-20 px-6 lg:my-20">
	<div class="mb-12 flex w-full grow flex-col gap-12 lg:mb-20 lg:flex">
		<div class="markdown">
			<div class="mb-2 flex max-w-[65ch] flex-col gap-2 lg:mb-5">
				{#if title}
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
	</div>
</div>
