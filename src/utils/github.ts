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
	return new Promise((resolve) => {
		https.get(url, (res) => {
			let data = "";

			res.on("data", (chunk) => {
				data += chunk;
			});

			res.on("end", () => resolve(data));
		});
	});
}

async function getHash(url) {
	const response = await request(url);
	return response;
}

async function main() {
	const apiResponse: string = await request(
		"https://api.github.com/repos/WaterfoxCo/Waterfox/releases",
	);

	const releases: Release[] = Object.values(JSON.parse(apiResponse));

	const updatedReleases: CleanedRelease[] = [];

	for (const release of releases) {
		const windowsLink = downloadLinks.windows(release.tag_name);
		const macOSLink = downloadLinks.macOS(release.tag_name);
		const linuxLink = downloadLinks.linux(release.tag_name);

		const [windowsHash, macHash, linuxHash] = await Promise.all([
			getHash(`${windowsLink}.sha512`),
			getHash(`${macOSLink}.sha512`),
			getHash(`${linuxLink}.sha512`),
		]);

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

		cleanedRelease.downloads = [
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
		];

		updatedReleases.push(cleanedRelease);
	}

	const targetDir = join(__dirname, "../generated");

	await mkdir(targetDir, { recursive: true });

	await writeFile(
		join(targetDir, "releases.json"),
		JSON.stringify(updatedReleases, null, 2),
	);

	console.log("Done!");
}

main().catch(console.error);
