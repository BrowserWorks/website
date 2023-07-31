import { writeFile } from 'fs/promises'
import { join } from 'path'

async function pull() {
	try {
		const data = await fetch('https://api.github.com/repos/WaterfoxCo/Waterfox/releases')
		const releases = await data.json()

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
