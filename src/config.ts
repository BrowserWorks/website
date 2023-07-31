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

export { footerNavigation, navigation, policiesNavigation }
