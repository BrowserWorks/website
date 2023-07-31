<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	let open = false

	function toggle() {
		open = !open
	}
</script>

<div class="relative flex items-center font-montserrat font-bold">
	<button
		class={twMerge('absolute z-30 ml-4 block h-[22px] w-[22px] xl:hidden', open && 'fixed')}
		on:click={toggle}
	>
		<span class="absolute left-[-10000px] top-auto h-[1px] w-[1px] overflow-hidden">Open menu</span>

		<div class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 transform">
			<span
				aria-hidden="true"
				class={twMerge(
					'absolute block h-[2.5px] w-full transform rounded-[10px] bg-current transition duration-200 ease-in-out',
					open ? 'rotate-45' : '-translate-y-[7px]'
				)}
			/>
			<span
				aria-hidden="true"
				class={twMerge(
					'absolute block h-[2.5px] w-full transform rounded-[10px] bg-current transition duration-200 ease-in-out',
					open && 'opacity-0'
				)}
			/>
			<span
				aria-hidden="true"
				class={twMerge(
					'absolute block h-[2.5px] w-full transform rounded-[10px] bg-current  transition duration-200 ease-in-out',
					open ? '-rotate-45' : 'translate-y-[7px]'
				)}
			/>
		</div>
	</button>

	<nav
		class={twMerge(
			'relative flex justify-start max-xl:overflow-y-scroll xl:items-center',
			open
				? 'max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:z-20 max-xl:h-[100vh] max-xl:w-full max-xl:bg-white'
				: 'max-xl:hidden'
		)}
	>
		<slot />
	</nav>
</div>
