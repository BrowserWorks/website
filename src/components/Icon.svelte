<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	// browser ui
	import IconAmazon from '~/assets/icons/browser/amazon.svg?raw'
	import IconArrowDesktop from '~/assets/icons/browser/arrow-desktop.svg?raw'
	import IconArrowMobile from '~/assets/icons/browser/arrow-mobile.svg?raw'
	import IconBack from '~/assets/icons/browser/back.svg?raw'
	import IconClose from '~/assets/icons/browser/close.svg?raw'
	import IconDisneyPlus from '~/assets/icons/browser/disney-plus.svg?raw'
	import IconDownloads from '~/assets/icons/browser/downloads.svg?raw'
	import IconEdit from '~/assets/icons/browser/edit.svg?raw'
	import IconFacebook from '~/assets/icons/browser/facebook.svg?raw'
	import IconGmail from '~/assets/icons/browser/gmail.svg?raw'
	import IconGo from '~/assets/icons/browser/go.svg?raw'
	import IconImport from '~/assets/icons/browser/import.svg?raw'
	import IconInstagram from '~/assets/icons/browser/instagram.svg?raw'
	import IconMore from '~/assets/icons/browser/more.svg?raw'
	import IconNetflix from '~/assets/icons/browser/netflix.svg?raw'
	import IconNew from '~/assets/icons/browser/new.svg?raw'
	import IconRefresh from '~/assets/icons/browser/refresh.svg?raw'
	import IconSearch2 from '~/assets/icons/browser/search.svg?raw'
	import IconSpotify from '~/assets/icons/browser/spotify.svg?raw'
	import IconWaterfox from '~/assets/icons/browser/waterfox.svg?raw'
	// global
	import IconCheck from '~/assets/icons/check.svg?raw'
	import IconChevron from '~/assets/icons/chevron.svg?raw'
	import IconCross from '~/assets/icons/cross.svg?raw'
	import IconDownload from '~/assets/icons/download.svg?raw'
	import IconDropdown from '~/assets/icons/dropdown.svg?raw'
	import IconLinux from '~/assets/icons/linux.svg?raw'
	import IconMacOS from '~/assets/icons/macos.svg?raw'
	import IconSearch from '~/assets/icons/search.svg?raw'
	import IconStar from '~/assets/icons/star.svg?raw'
	import IconTwitter from '~/assets/icons/twitter.svg?raw'
	import IconWindows from '~/assets/icons/windows.svg?raw'

	export let name: string
	export let className: string = ''

	const map = {
		// global
		search: IconSearch,
		dropdown: IconDropdown,
		check: IconCheck,
		cross: IconCross,
		star: IconStar,
		chevron: IconChevron,
		twitter: IconTwitter,
		download: IconDownload,
		windows: IconWindows,
		macos: IconMacOS,
		linux: IconLinux,

		// browser
		'b-amazon': IconAmazon,
		'b-arrow-desktop': IconArrowDesktop,
		'b-arrow-mobile': IconArrowMobile,
		'b-back': IconBack,
		'b-close': IconClose,
		'b-disney-plus': IconDisneyPlus,
		'b-downloads': IconDownloads,
		'b-edit': IconEdit,
		'b-facebook': IconFacebook,
		'b-gmail': IconGmail,
		'b-go': IconGo,
		'b-import': IconImport,
		'b-instagram': IconInstagram,
		'b-more': IconMore,
		'b-netflix': IconNetflix,
		'b-new': IconNew,
		'b-refresh': IconRefresh,
		'b-spotify': IconSpotify,
		'b-waterfox': IconWaterfox,
		'b-search': IconSearch2
	}

	const icon = map?.[name] || ''

	export { className as class }
</script>

<span class={twMerge('h-[16px] w-[16px]', className)} {...$$restProps}>
	{@html icon}
</span>
