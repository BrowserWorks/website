import { writeFile } from 'fs/promises';
import { join } from 'path';
import { downloadLinks } from '../src/config';

async function readHash(url) {
	try {
	  const response = await fetch(url);
	  const text = await response.text();
	  return text;
	} catch (error) {
	  console.error(error);
	}
  }

async function pull() {
	try {
		const data = await fetch('https://api.github.com/repos/WaterfoxCo/Waterfox/releases')
		const json = await data.json()
		const releases: any[] = []

		for (let idx = 0; idx < json.length; idx++) {
			let release = json[idx]

			const windows = downloadLinks.windows(release.tag_name)
			const macOS = downloadLinks.macOS(release.tag_name)
			const linux = downloadLinks.linux(release.tag_name)

			release.downloads = [
				{
					id: 'windows',
					label: 'Windows',
					link: windows,
					hash: await readHash(windows + '.sha512')
				},
				{
					id: 'macos',
					label: 'macOS',
					link: macOS,
					hash: await readHash(macOS + '.sha512')
				},
				{
					id: 'linux',
					label: 'Linux',
					link: linux,
					hash: await readHash(linux + '.sha512')
				}
			]
			// for (var k in release) {
			// 	if (k !== 'id' && k !== 'name' && k !== 'tag_name' && k !== 'published_at' && k !== 'downloads') {
			// 		delete release[k];
			// 	}
			// }
			release = (({ id, prerelease, name, tag_name, published_at, downloads }) => ({ id, prerelease, name, tag_name, published_at, downloads }))(release);
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
