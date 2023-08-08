import { defaultLang, languages, locales } from '~/i18n/locales'

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

export function useTranslations(lang: keyof typeof locales, opts?: { useKeyAsFallack?: boolean }) {
	return function t(key: Key, ...args: string[]): string {
		const v = locales?.[lang]?.[key] || locales?.[defaultLang]?.[key]
		const f = opts?.useKeyAsFallack ? key : undefined
		const k = v || f
		return typeof k === 'function' ? (k as Function)(...args) : k
	}
}

export function unlocalizeUrl(url: URL | string) {
	if (!url) return url
	const parts = typeof url === 'string' ? url.split('/') : url.pathname.split('/')
	return `/${[...parts.filter(Boolean).filter((p) => !Object.keys(languages).includes(p))].join(
		'/'
	)}/`
}
