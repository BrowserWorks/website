<script lang="ts">
	export let title: string
	export let titleLink: string | undefined = undefined
	export let pubDate: string
	export let readingTime: string | undefined = undefined
	export let author: string
	export let authorTitle: string
	export let authorImageSrc: string | undefined = undefined
	export let authorLink: string | undefined = undefined
</script>

<div class="markdown">
	<div class="flex flex-col">
		{#if titleLink}
			<a href={titleLink} rel="prefetch" class="no-underline">
				<h1
					class="text-pretty mb-5 font-montserrat text-3xl font-bold hover:text-deepblue lg:text-5xl"
				>
					{title}
				</h1>
			</a>
		{:else}
			<h1 class="text-pretty mb-5 font-montserrat text-3xl font-bold lg:text-5xl">
				{title}
			</h1>
		{/if}
		<div class="not-prose text-montserrat flex flex-col gap-5">
			<span class="text-sm text-deepaqua">
				{pubDate}{#if readingTime} · {readingTime}{/if}
			</span>
			<div class="flex">
				<div
					class="relative flex w-full max-w-[22rem] gap-3 rounded-[1.5rem] border-[1px] border-indigo/5 px-4 py-4 shadow-lg"
				>
					<div
						class="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat lg:h-14 lg:w-14"
						style={authorImageSrc && `background-image:url('${authorImageSrc}');`}
					/>
					<div class="flex flex-col justify-center gap-0">
						<span class="text-base font-semibold">
							{#if authorLink}
								<a href={authorLink} target="_blank" rel="noopener nofollow">{author}</a>
							{:else}
								{author}
							{/if}
						</span>
						<span class="text-sm">{authorTitle}</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="text-pretty">
		<slot />
	</div>
</div>
