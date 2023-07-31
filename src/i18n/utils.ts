import { defaultLang, locales } from '~/i18n/locales'

export type Key = keyof (typeof locales)[typeof defaultLang]

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in locales) return lang as keyof typeof locales
	return defaultLang
}

export function localizeUrl(url: URL | string, lang: string) {
	if (!url) return url
	const parts = typeof url === 'string' ? url.split('/') : url.pathname.split('/')
	return `/${[lang, ...parts.filter(Boolean)].join('/')}/`
}

export function useTranslations(lang: keyof typeof locales) {
	return function t(key: Key, ...args: string[]): string {
		const k = locales?.[lang]?.[key] || locales?.[defaultLang]?.[key] || key
		return typeof k === 'function' ? (k as Function)(...args) : k
	}
}
