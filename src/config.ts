// main nav
const navigation = [
	{
		type: 'link',
		key: 'nav.docs', // i18n key
		href: '/docs/', // absolute page url (excluding lang)
		content: 'docs'
	},
	{
		type: 'link',
		key: 'nav.blog', // i18n key
		href: '/blog/', // absolute page url (excluding lang)
		content: 'blog'
	},
	{
		type: 'link',
		key: 'nav.download', // i18n key
		href: '/download/' // absolute page url (excluding lang)
	},
	{
		type: 'link',
		key: 'nav.support', // i18n key
		href: '/support/', // absolute page url (excluding lang)
		content: 'support'
	},
	{
		type: 'language-picker'
	}
]

// footer nav
const footerNavigation = [
	{
		type: 'link',
		key: 'nav.blog', // i18n key
		href: '/blog/' // absolute page url (excluding lang)
	},
	{
		type: 'link',
		key: 'nav.faq', // i18n key
		href: '/docs/faq/' // absolute page url (excluding lang)
	},
	{
		type: 'link',
		key: 'nav.github', // i18n key
		href: 'https://github.com/WaterfoxCo/Waterfox'
	}
]

// policies nav (also in footer)
const policiesNavigation = [
	{
		type: 'link',
		key: 'nav.privacy', // i18n key
		href: '/docs/policies/privacy/' // absolute page url (excluding lang)
	},
	{
		type: 'link',
		key: 'nav.terms', // i18n key
		href: '/docs/policies/terms/' // absolute page url (excluding lang)
	}
]

// download links
const downloadLinks = {
	windows: (version: string) =>
		`https://cdn1.waterfox.net/waterfox/releases/${version}/WINNT_x86_64/Waterfox%20Setup%20${version}.exe`,
	macOS: (version: string) =>
		`https://cdn1.waterfox.net/waterfox/releases/${version}/Darwin_x86_64-aarch64/Waterfox%20${version}.dmg`,
	linux: (version: string) =>
		`https://cdn1.waterfox.net/waterfox/releases/${version}/Linux_x86_64/waterfox-${version}.tar.bz2`
}

const latestLinks = {
	windows: () =>
		`https://cdn1.waterfox.net/waterfox/releases/latest/windows-stub`,
	macOS: () =>
		`https://cdn1.waterfox.net/waterfox/releases/latest/macos`,
	linux: () =>
		`https://cdn1.waterfox.net/waterfox/releases/latest/linux`
}

export { downloadLinks, footerNavigation, latestLinks, navigation, policiesNavigation }
