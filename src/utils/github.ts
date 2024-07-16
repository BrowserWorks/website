import { promises as fs } from "node:fs";
import * as https from "node:https";
import { join } from "node:path";
import { pick } from "lodash";
import { downloadLinks } from "../config";

const { writeFile, mkdir } = fs;

interface Release {
	id: number;
	prerelease: boolean;
	name: string;
	tag_name: string;
	published_at: string;
}

interface CleanedRelease
	extends Pick<
		Release,
		"id" | "prerelease" | "name" | "tag_name" | "published_at"
	> {
	downloads: {
		id: string;
		label: string;
		link: string;
		hash: string;
	}[];
}

function request(url: string): Promise<string> {
	return new Promise((resolve, reject) => {
		https
			.get(url, (res) => {
				let data = "";
				res.on("data", (chunk) => {
					data += chunk;
				});
				res.on("end", () => resolve(data));
			})
			.on("error", reject);
	});
}

async function getHash(url: string): Promise<string> {
	return request(`${url}.sha512`);
}

async function main() {
	const apiResponse: string = await request(
		"https://api.github.com/repos/BrowserWorks/Waterfox/releases",
	);

	const releases: Release[] = JSON.parse(apiResponse);

	const cleanedReleases: CleanedRelease[] = await Promise.all(
		releases.map(async (release) => {
			const windowsLink = downloadLinks.windows(release.tag_name);
			const macOSLink = downloadLinks.macOS(release.tag_name);
			const linuxLink = downloadLinks.linux(release.tag_name);

			const hashPromises = [
				getHash(windowsLink),
				getHash(macOSLink),
				getHash(linuxLink),
			];

			const [windowsHash, macHash, linuxHash] = await Promise.all(hashPromises);

			const cleanedRelease: CleanedRelease = {
				...pick(release, [
					"id",
					"prerelease",
					"name",
					"tag_name",
					"published_at",
				]),
				downloads: [
					{
						id: "windows",
						label: "Windows",
						link: windowsLink,
						hash: windowsHash,
					},
					{
						id: "macos",
						label: "macOS",
						link: macOSLink,
						hash: macHash,
					},
					{
						id: "linux",
						label: "Linux",
						link: linuxLink,
						hash: linuxHash,
					},
				],
			};

			return cleanedRelease;
		}),
	);

	const targetDir = join(__dirname, "../generated");
	await mkdir(targetDir, { recursive: true });

	await writeFile(
		join(targetDir, "releases.json"),
		JSON.stringify(cleanedReleases, null, 2),
	);

	console.log("Done!");
}

main().catch(console.error);
