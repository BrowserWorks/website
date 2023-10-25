<script lang="ts">
	import LeftSplash from '~/assets/left-splash.svg?raw'
	import RightSplash from '~/assets/right-splash.svg?raw'
	import ImgLogo from '~/assets/waterfox-logo-square.svg'
	import Icon from '~/components/Icon.svelte'

	export let locales: {
		mobileImageAlt: string
		tab: string
		searchbar: string
		import: string
		search: string
		cta: string
	}

	const mobileImageSrc =
		'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
</script>

<div
	class="pointer-events-none relative z-10 block w-full font-noto text-[12px] font-medium text-black opacity-100 lg:shadow-xl lg:after:block"
>
	<span
		class="absolute bottom-[5%] left-0 z-10 mb-[20px] w-[130px] -translate-x-1/2 translate-y-1/2 lg:bottom-0 lg:-z-10 lg:h-[408px] lg:w-[429px]"
	>
		{@html LeftSplash}
	</span>

	<span
		class="absolute right-[3%] top-[15%] z-10 mt-[20px] w-[130px] -translate-y-1/2 translate-x-1/2 lg:right-0 lg:top-0 lg:h-[583px] lg:w-[518px]"
	>
		{@html RightSplash}
	</span>

	<div id="rwd-mobile-ui" class="left-0 top-0 flex h-full w-full flex-col sm:hidden">
		<img
			src={mobileImageSrc}
			alt={locales.mobileImageAlt}
			width="500"
			height="500"
			class="w-full bg-[#F2F2F2] object-contain"
		/>
	</div>

	<div id="rwd-desktop-ui" class="left-0 top-0 hidden h-full w-full flex-col sm:flex">
		<div class="flex h-[34px] flex-row gap-[10px] bg-[#CCCCCC]">
			<div class="flex w-[90px] flex-row items-center gap-[7px] pl-[13px]">
				<span
					class="block h-[12px] w-[12px] rounded-full border-[1px] border-black/5 bg-[#EF695E]"
				/>
				<span
					class="block h-[12px] w-[12px] rounded-full border-[1px] border-black/5 bg-[#F6BF4C]"
				/>
				<span
					class="block h-[12px] w-[12px] rounded-full border-[1px] border-black/5 bg-[#5DC650]"
				/>
			</div>
			<div
				class="relative flex w-[55%] max-w-[238px] items-center bg-[#F2F2F2] px-[10px] before:absolute before:left-0 before:top-0 before:block before:h-[2px] before:w-full before:bg-[#0A84FF]"
			>
				<div class="flex grow items-center gap-[8px]">
					<Icon name="b-waterfox" class="h-[14px]" />
					<span>{locales.tab}</span>
				</div>
				<Icon name="b-close" class="h-[14px]" />
			</div>
			<div class="flex items-center">
				<Icon name="b-new" class="h-[16px] w-[16px]" />
			</div>
		</div>

		<div class="flex flex-col bg-[#F2F2F2] px-[12px]">
			<div class="flex items-center gap-[5px] py-[4px] md:gap-[10px]">
				<div class="flex gap-[14px]">
					<Icon name="b-back" class="h-[18px] w-[18px]" />
					<Icon name="b-back" class="h-[18px] w-[18px] rotate-180" />
					<Icon name="b-refresh" class="h-[18px] w-[18px]" />
				</div>
				<div
					class="mx-[10px] flex w-full grow items-center gap-[10px] overflow-hidden rounded-[5px] border-[1px] border-[#0C0C0D]/20 bg-white px-[8px] py-[4px] shadow-sm"
				>
					<Icon name="b-search" class="h-[24px] w-[24px] text-black/60" />
					<span class="overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-black/60">
						{locales.searchbar}
					</span>
				</div>
				<div class="flex items-center gap-[14px]">
					<Icon name="b-downloads" class="h-[16px] w-[16px]" />
					<Icon name="b-more" class="h-[16px] w-[16px]" />
				</div>
			</div>
			<div class="flex grow items-center gap-[6px] pb-[4px] pt-[2px] text-black/90">
				<Icon name="b-import" />
				{locales.import}
			</div>
		</div>

		<div
			class="flex grow flex-col items-center justify-center gap-[40px] bg-[#F9F9FB] p-[40px] lg:min-h-[630px]"
		>
			<img src={ImgLogo.src} alt="Waterfox" width="128" height="86" />

			<div
				class="flex w-full max-w-[590px] items-center justify-center gap-[10px] rounded-[8px] bg-white p-[16px] shadow-md"
			>
				<Icon name="b-search" class="h-[20px] text-[#1B66E9]" />
				<span class="grow text-[13px] text-black/60">{locales.search}</span>
				<Icon name="b-go" class="h-[12px]" />
			</div>

			<div
				class="mb-[80px] grid grid-cols-2 text-[0.9em] md:grid-cols-4 lg:mb-[120px] lg:grid-cols-8"
			>
				<div
					class="relative flex flex-col items-center justify-center gap-[5px] p-[20px] pb-[12px]"
				>
					<Icon name="b-edit" class="absolute right-[5px] top-[5px] z-10 h-[14px]" />

					<div
						class="z-10 flex flex-col items-center justify-center rounded-[5px] border-[1px] border-black/10 bg-white p-[14px]"
					>
						<Icon name="b-waterfox" class="h-[34px] w-[34px]" />
					</div>
					<span class="z-10">Waterfox</span>

					<div class="absolute left-0 top-1/2 z-10 lg:left-1/2 lg:top-full">
						<Icon
							name="b-arrow-desktop"
							class="absolute left-0 top-[10px] hidden h-[77px] w-[144px] -translate-x-[20%] lg:block"
						/>
						<Icon
							name="b-arrow-mobile"
							class="absolute -left-[10px] top-0 hidden h-[245px] w-[77px] -translate-x-[60px] -translate-y-[20px] max-lg:block"
						/>

						<span
							class="absolute left-0 top-[225px] -translate-y-1/2 translate-x-[30px] whitespace-nowrap font-montserrat text-2xl font-bold font-semibold text-deepsea lg:left-[114px] lg:top-[77px] lg:text-3xl"
						>
							{@html locales.cta}
						</span>
					</div>

					<div class="absolute left-0 top-0 z-0 h-full w-full rounded-[8px] bg-black/10" />
				</div>
				<div
					class="relative flex flex-col items-center justify-center gap-[5px] p-[20px] pb-[12px]"
				>
					<div
						class="flex flex-col items-center justify-center rounded-[5px] border-[1px] border-black/10 bg-white p-[14px]"
					>
						<Icon name="b-facebook" class="h-[34px] w-[34px]" />
					</div>
					<span>Facebook</span>
				</div>
				<div
					class="relative flex flex-col items-center justify-center gap-[5px] p-[20px] pb-[12px]"
				>
					<div
						class="flex flex-col items-center justify-center rounded-[5px] border-[1px] border-black/10 bg-white p-[14px]"
					>
						<Icon name="b-netflix" class="h-[34px] w-[34px]" />
					</div>
					<span>Netflix</span>
				</div>
				<div
					class="relative flex flex-col items-center justify-center gap-[5px] p-[20px] pb-[12px]"
				>
					<div
						class="flex flex-col items-center justify-center rounded-[5px] border-[1px] border-black/10 bg-white p-[14px]"
					>
						<Icon name="b-spotify" class="h-[34px] w-[34px]" />
					</div>
					<span>Spotify</span>
				</div>
				<div
					class="relative flex flex-col items-center justify-center gap-[5px] p-[20px] pb-[12px] max-md:hidden"
				>
					<div
						class="flex flex-col items-center justify-center rounded-[5px] border-[1px] border-black/10 bg-white p-[14px]"
					>
						<Icon name="b-disney-plus" class="h-[34px] w-[34px]" />
					</div>
					<span>Disney+</span>
				</div>
				<div
					class="relative flex flex-col items-center justify-center gap-[5px] p-[20px] pb-[12px] max-md:hidden"
				>
					<div
						class="flex flex-col items-center justify-center rounded-[5px] border-[1px] border-black/10 bg-white p-[14px]"
					>
						<Icon name="b-amazon" class="h-[34px] w-[34px]" />
					</div>
					<span>Amazon</span>
				</div>
				<div
					class="relative flex flex-col items-center justify-center gap-[5px] p-[20px] pb-[12px] max-md:hidden"
				>
					<div
						class="flex flex-col items-center justify-center rounded-[5px] border-[1px] border-black/10 bg-white p-[14px]"
					>
						<Icon name="b-gmail" class="h-[34px] w-[34px]" />
					</div>
					<span>Gmail</span>
				</div>
				<div
					class="relative flex flex-col items-center justify-center gap-[5px] p-[20px] pb-[12px] max-md:hidden"
				>
					<div
						class="flex flex-col items-center justify-center rounded-[5px] border-[1px] border-black/10 bg-white p-[14px]"
					>
						<Icon name="b-instagram" class="h-[34px] w-[34px]" />
					</div>
					<span>Instagram</span>
				</div>
			</div>
		</div>
	</div>
</div>
