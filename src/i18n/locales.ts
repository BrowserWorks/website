import en_US from './locales/en-US'

export const languages = {
	'en-US': 'English (US)',
	// 'fr-FR': 'Français'
}

export const defaultLang = 'en-US'

export const locales = { ['en-US']: en_US } as const
// export const locales = { ['en-US']: en_US, ['fr-FR']: fr_FR } as const