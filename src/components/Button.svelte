<script lang="ts">
import { twMerge } from "tailwind-merge";

// biome-ignore lint/style/useConst: off
export let className = "";
// biome-ignore lint/style/useConst: off
export let href: string | undefined = undefined;
// biome-ignore lint/style/useConst: off
export let type: "submit" | "reset" | "button" | undefined = "button";
// biome-ignore lint/style/useConst: off
export let id: string | undefined = undefined;

export { className as class };
</script>

<svelte:element
	this="a"
	on:click|stopPropagation
	on:keydown
	{href}
	id={id ?? 'button'}
	type={!href ? type : undefined}
	role={href ? 'link' : 'button'}
	rel={href && href?.startsWith('http') ? 'noopener nofollow' : href ? 'prefetch' : undefined}
	target={href && href?.startsWith('http') ? '_blank' : '_self'}
	class={twMerge(
		'whitespace-nowrap rounded-full bg-gold px-7 py-4 font-montserrat text-lg dark:text-deepsea font-semibold no-underline transition-all hover:scale-105 hover:bg-sand lg:text-xl',
		className
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
