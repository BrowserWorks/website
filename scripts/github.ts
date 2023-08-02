import { writeFile } from 'fs/promises'
import { sha512 } from 'hash-wasm'
import { join } from 'path'
import { downloadLinks } from '../src/config'

async function pull() {
	try {
		const data = await fetch('https://api.github.com/repos/WaterfoxCo/Waterfox/releases')
		const json = await data.json()
		const releases: any[] = []

		for (let idx = 0; idx < json.length; idx++) {
			const release = json[idx]

			const windows = downloadLinks.windows(release.tag_name)
			const macOS = downloadLinks.macOS(release.tag_name)
			const linux = downloadLinks.linux(release.tag_name)

			release.downloads = [
				{
					id: 'windows',
					label: 'Windows',
					link: windows,
					hash: await sha512(windows + '.sha512')
				},
				{
					id: 'macos',
					label: 'macOS',
					link: macOS,
					hash: await sha512(macOS + '.sha512')
				},
				{
					id: 'linux',
					label: 'Linux',
					link: linux,
					hash: await sha512(linux + '.sha512')
				}
			]

			releases.push(release)
		}

		await writeFile(
			join(__dirname, '../src/generated/releases.json'),
			JSON.stringify(releases, null, 2)
		)

		console.log(releases.map((r) => r.name))
		console.log('\nContent pulled from Github!')
	} catch (err) {
		console.error(err)
	}
}

pull()
