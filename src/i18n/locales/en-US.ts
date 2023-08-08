export default {
	/** meta */
	'meta.title': 'Waterfox - The free, open and private browser',
	'meta.description': 'Waterfox is a popular open source web browser.',
	'blog.meta.title': 'Waterfox Blog',
	'blog.meta.description': 'The Waterfox blog, news and updates.',
	'releases.meta.title': 'Waterfox Release Notes',

	/** RSS */
	'rss.blog.title': 'Waterfox Blog',
	'rss.blog.description': 'The Waterfox blog, news and updates.',
	'rss.releases.title': 'Waterfox Releases',
	'rss.releases.description': 'The latest Waterfox releases.',

	/** alt images tags */
	'alt.logo': (name: string) => `${name} logo`,
	'alt.illustration': (name: string) => `Illustration for ${name}`,

	/** browser ui **/
	'browser.mobileImageAlt': 'Waterfox mobile',
	'browser.tab': 'New Tab',
	'browser.searchbar': 'Search or enter address',
	'browser.import': 'Import bookmarks..',
	'browser.search': 'Search the web',
	'browser.cta':
		'Make Waterfox<span class="max-lg:hidden">&nbsp;</span><br class="lg:hidden" />Yours!',

	/** content */
	'content.onthispage': 'On this page',
	'content.blog': 'All posts',
	'content.docs': 'Docs',
	'content.support': 'Support',
	'content.download': 'Download',
	'content.policies': 'Policies',
	'content.releases': 'Releases',

	/** nav **/
	'nav.docs': 'Docs',
	'nav.blog': 'Blog',
	'nav.download': 'Download',
	'nav.support': 'Support',
	'nav.github': 'GitHub',
	'nav.privacy': 'Privacy Policy',
	'nav.terms': 'Terms',
	'nav.faq': 'FAQ',
	'nav.twitter': 'Twitter',
	'nav.search': 'Search',
	'nav.language': 'Language',

	/** search bar **/
	'search.placeholder': 'Search',

	/** cta's **/
	'cta.download': 'Download Waterfox',

	/** footer **/
	'footer.madewith': 'Made in London, UK 🇬🇧.',
	'footer.copyright': `&copy; ${new Date().getFullYear()} BrowserWorks Ltd.<span class="lg:hidden">&nbsp;</span><br class="max-lg:hidden" />Independent and grassroots.`,

	/** home **/
	'home.title': 'Fast and Private Web Browser',
	'home.subtitle': 'Get privacy out of the box with Waterfox.',

	/** features section **/
	// trackers
	'feature.trackers.title': 'No More Spying',
	'feature.trackers.content':
		"Waterfox comes with built in tracking protection by default. Waterfox also offers Oblivious DNS, which makes it harder for your ISP to track your website connections, keeping what you do online private.",
	// privatemode
	'feature.privatemode.title': 'Private Tabs with Private Search',
	'feature.privatemode.content':
		'You can launch a private tab to browse privately and anonymously anywhere in your browser without the need to open a Private Window first.',
	// containertabs
	'feature.containertabs.title': 'Stay Organized With Container Tabs',
	'feature.containertabs.content':
		'Container tabs help you organize your browsing by separating your work, shopping or personal browsing. You can even assign a different color to each container tab to help you identify them.',
	// switching
	'feature.switching.title': 'Switching is Easy',
	'feature.switching.content':
		'You can import your bookmarks, passwords and more from other browsers with ease.',
	// data
	'feature.data.title': "We don't collect your data",
	'feature.data.content':
		"Unlike other browsers What you do within your browser stays with you. We don't need to know. Telemetry is disabled within the browser - and only limited data collection is used to keep your browser up to date and secure.",

	/** comparison table **/
	'comparison.title': 'Privacy Comes Standard',
	'comparison.included': 'Feature included',
	'comparison.excluded': 'Feature not included',
	'comparison.1': 'Default Private Search',
	'comparison.2': 'Anti Tracking',
	'comparison.3': 'Container Tabs',
	'comparison.4': 'Private Tabs',
	'comparison.5': 'No Telemetry Collection',

	/** reviews section **/
	'reviews.title': 'Reviews',
	'review.1.content':
		'Waterfox is great. Have been using it for sometime now and its much faster than Safari.',
	'review.1.stars': 5,
	'review.2.content':
		'I like the very customisable nature of it. Thank you for a fantastic Browser.',
	'review.2.stars': 5,
	'review.3.content': 'Just installed this free browser and so far it is amazingly fast.',
	'review.3.stars': 5,

	/** download section (surf) **/
	'surf.title': 'Stop Worrying, and Safely Surf the Web!',
	'surf.content':
		'Surf knowing that your data is safe, your privacy is respected, and you are in control. Other browsers have you opt-in to privacy settings, but Waterfox has them on by default.',

	/** featured on section **/
	'featured.title': 'Featured On',
	'featured.bestReviews':
		"If you're interested either in privacy or customization, Waterfox is an excellent browser for you.",
	'featured.topNewReview':
		'Waterfox is an impressive example of what a better version of Firefox can look like: leaner, faster, and without the desire to collect your data.',
	'featured.hostingAdvice':
		'The Open-Source Waterfox Browser Delivers a Balance of Privacy and Usability.',

	/** download section (splash) **/
	'splash.title': 'Make a Splash.<br />Try Waterfox Today.',

	/** faq section **/
	'faq.title': 'FAQ',

	/** Downloads **/
	'downloads.download': 'Download',
	'downloads.date': 'Published',
	'downloads.version': 'Version',
	'downloads.release': 'Release',
	'downloads.stable': 'Stable',
	'downloads.latest': 'Latest',
	'downloads.prerelease': 'Pre-release',
	'downloads.unstable': 'Unstable',
	'downloads.copy': 'Copy hash',
	'downloads.copied': 'Copied!',
	'downloads.loading': 'Fetching releases...',
	'downloads.error': 'Oops, error fetching releases. Please try again later.'
}
