import en_US from './locales/en-US'
import fr_FR from './locales/fr-FR'

export const languages = {
	'en-US': 'English',
	'fr-FR': 'Français'
}

export const defaultLang = 'en-US'

export const locales = { ['en-US']: en_US, ['fr-FR']: fr_FR } as const
