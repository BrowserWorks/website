<script lang="ts">
	import { onMount } from 'svelte'
	import { UAParser } from 'ua-parser-js'
	import Button from '~/components/Button.svelte'
	import { latestLinks } from '~/config'
	let href = ('/download')

	onMount(() => {
		const parser = UAParser(navigator.userAgent)
		const os = parser.os.name.toLowerCase()
		const isMacOS = ['macos'].includes(os)
		const isWindows = ['windows'].includes(os)
		const isLinux = ['ubuntu', 'linux', 'unix', 'gnu', 'fedora'].includes(os)

		// https://faisalman.github.io/ua-parser-js-docs/v2/api/ua-parser-js/get-os.html
		if (isMacOS) {
			href = latestLinks.macOS()
		} else if (isWindows) {
			href = latestLinks.windows()
		} else if (isLinux) {
			href = latestLinks.linux()
		}
	})
</script>

<Button {href}>Download</Button>
