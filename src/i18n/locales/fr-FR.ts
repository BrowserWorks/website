export default {
	/** meta */
	'meta.title': 'Waterfox, Free Web Browser',
	'meta.description': 'Waterfox is a popular open source web browser.',

	/** RSS */
	'rss.blog.title': '',
	'rss.blog.description': '',
	'rss.releases.title': '',
	'rss.releases.description': '',

	/** alt images tags */
	'alt.logo': (name: string) => `Logo ${name}`,
	'alt.illustration': (name: string) => `${name} illustration`,

	/** browser ui **/
	'browser.tab': 'Nouvel Onglet',
	'browser.searchbar': 'Rechercher ou saisir une adresse',
	'browser.import': 'Importer les favoris..',
	'browser.search': 'Rechercher sur le web',
	'browser.cta':
		'Utilisez Waterfox<span class="max-lg:hidden">&nbsp;</span><br class="lg:hidden" />Aujourd\'hui!',

	/** content */
	'content.onthispage': 'Sur cette page',
	'content.blog': 'Articles',
	'content.docs': 'Documentation',
	'content.support': 'Support',
	'content.download': 'Download',
	'content.policies': 'Policies',
	'content.releases': 'Releases',

	/** nav **/
	'nav.docs': 'Docs',
	'nav.blog': 'Blog',
	'nav.download': 'Télécharger',
	'nav.support': 'Support',
	'nav.github': 'GitHub',
	'nav.privacy': 'Politique de confidentialité',
	'nav.terms': 'Conditions',
	'nav.faq': 'FAQ',
	'nav.twitter': 'Twitter',
	'nav.search': 'Search',
	'nav.language': 'Langue',

	/** search bar **/
	'search.placeholder': 'Recherche',

	/** cta's **/
	'cta.download': 'Télécharger Waterfox',

	/** footer **/
	'footer.madewith': 'Fait avec <span>♥</span> à Venice, CA et Guelph, ON',
	'footer.copyright': `&copy; ${new Date().getFullYear()} System1 LLC.<br />Tous droits réservés.`,

	/** home **/
	'home.title': 'Sûr, Rapide, et Privé',
	'home.subtitle': 'Vitesse, sécurité et confidentialité lorsque vous naviguez le web.',

	/** features section **/
	// trackers
	'feature.trackers.title': 'Bloquer les traqueurs en ligne',
	'feature.trackers.content':
		"La protection renforcée de Waterfox garantit votre confidentialité pendant votre navigation. Elle bloque les traqueurs qui vous suivent et collectent des données sur vos habitudes de navigation et vos centres d'intérêt sans perturber le fonctionnement des sites. Elle vous protège également contre les programmes malveillants tels que les logiciels malveillants qui épuisent votre batterie.",
	// privatemode
	'feature.privatemode.title': 'Onglets privés avec recherche privée',
	'feature.privatemode.content':
		"Vous pouvez ouvrir un onglet privé pour naviguer de manière privée et anonyme n'importe où dans votre navigateur sans avoir besoin d'ouvrir une fenêtre privée au préalable.",
	// containertabs
	'feature.containertabs.title': 'Rester organisé avec les onglets de conteneur',
	'feature.containertabs.content':
		"Vous pouvez ouvrir un onglet privé pour naviguer de manière privée et anonyme n'importe où dans votre navigateur sans avoir besoin d'ouvrir une fenêtre privée au préalable.",
	// switching
	'feature.switching.title': 'Migrez facilement',
	'feature.switching.content':
		"Vous pouvez facilement importer vos favoris, vos mots de passe et plus encore depuis d'autres navigateurs.",
	// data
	'feature.data.title': 'Nous ne collectons pas vos données',
	'feature.data.content':
		"Contrairement à d'autres navigateurs, ce que vous faites dans votre navigateur reste avec vous. Nous n'avons pas besoin de savoir. La télémétrie est désactivée dans le navigateur et seule une collecte de données limitée est utilisée pour maintenir votre navigateur à jour et sécurisé. Lisez-en plus dans la Politique de confidentialité.",

	/** comparison table **/
	'comparison.title': 'Confidentialité par défaut',
	'comparison.included': 'Fonctionnalité incluse',
	'comparison.excluded': 'fonctionnalité non incluse',
	'comparison.1': 'Recherche privée par défaut',
	'comparison.2': 'Bloqueur de traqueurs',
	'comparison.3': 'Onglets de conteneur',
	'comparison.4': 'Onglets privés',
	'comparison.5': 'Télémétrie',

	/** reviews section **/
	'reviews.title': 'Avis',
	'review.1.content':
		"Waterfox est génial. Je l'utilise depuis un certain temps maintenant et il est beaucoup plus rapide que Safari.",
	'review.1.stars': 5,
	'review.2.content':
		"J'aime la nature très personnalisable de celui-ci. Merci pour un navigateur fantastique.",
	'review.2.stars': 5,
	'review.3.content':
		"Je viens d'installer ce navigateur gratuit et jusqu'à présent, il est incroyablement rapide.",
	'review.3.stars': 5,

	/** download section (surf) **/
	'surf.title': 'Arrêtez de vous inquiéter et naviguez le web en toute sécurité !',
	'surf.content':
		'Mettez en lumière les éléments effrayants/onglets privés - peut-être à travers une illustration ou une section en contraste élevé ?',

	/** featured on section **/
	'featured.title': 'Mis en avant par',
	'featured.bestReviews':
		'Si vous êtes intéressé par la confidentialité ou la personnalisation, Waterfox est un excellent navigateur pour vous.',
	'featured.topNewReview':
		'Waterfox est un exemple impressionnant de ce à quoi une meilleure version de Firefox peut ressembler : plus léger, plus rapide et sans le désir de collecter vos données.',
	'featured.hostingAdvice':
		"Le navigateur open-source Waterfox offre un équilibre entre la confidentialité et l'utilisabilité.",

	/** download section (splash) **/
	'splash.title': "Essayez Waterfox dès aujourd'hui.",

	/** faq section **/
	'faq.title': 'FAQ',

	/** Downloads **/
	'downloads.download': 'Télécharger',
	'downloads.date': 'Date',
	'downloads.version': 'Version',
	'downloads.release': 'Release',
	'downloads.stable': 'Stable',
	'downloads.latest': 'Dernière',
	'downloads.prerelease': 'Instable',
	'downloads.unstable': 'Instable',
	'downloads.copy': 'Copier hash',
	'downloads.copied': 'Copié!',
	'downloads.loading': 'Chargement...',
	'downloads.error': 'Erreur lors du chargement. Veuillez réessayer plus tard.'
}
