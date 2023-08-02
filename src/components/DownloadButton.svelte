<script lang="ts">
	import { onMount } from 'svelte'
	import { UAParser } from 'ua-parser-js'
	import Button from '~/components/Button.svelte'
	import { downloadLinks } from '~/config'
	import GithubReleases from '~/generated/releases.json'
	import { defaultLang } from '~/i18n/locales'
	import { localizeUrl, useTranslations } from '~/i18n/utils'

	export let lang: string = defaultLang

	const t = useTranslations(lang as any)
	const latest = GithubReleases?.find((release) => !Boolean(release?.prerelease))

	let href = localizeUrl('/download', lang)

	onMount(() => {
		if (latest) {
			const uap = UAParser(navigator.userAgent)
			const os = uap.os.name.toLowerCase()
			const isMacOS = ['mac os'].includes(os)
			const isWindows = ['windows'].includes(os)
			const isLinux = ['ubuntu', 'linux', 'unix', 'gnu', 'fedora'].includes(os)

			// https://faisalman.github.io/ua-parser-js-docs/v2/api/ua-parser-js/get-os.html
			if (isMacOS) {
				href = downloadLinks.macOS(latest.tag_name)
			} else if (isWindows) {
				href = downloadLinks.windows(latest.tag_name)
			} else if (isLinux) {
				href = downloadLinks.linux(latest.tag_name)
			}
		}
	})
</script>

<Button {href}>{t('cta.download')}</Button>
