import fs from "node:fs/promises";
import path from "node:path";

async function getCategoryLabel(dirPath) {
	try {
		const categoryPath = path.join(dirPath, "_category_.json");
		const content = await fs.readFile(categoryPath, "utf-8");
		const { label } = JSON.parse(content);
		return label;
	} catch {
		return path.basename(dirPath);
	}
}

async function getMarkdownFileInfo(filePath) {
	try {
		const content = await fs.readFile(filePath, "utf-8");

		// Get title from frontmatter
		const titleMatch = content.match(/title:\s*["'](.+)["']/);
		const title = titleMatch ? titleMatch[1] : path.basename(filePath, ".md");

		// Get slug from frontmatter (optional)
		const slugMatch = content.match(
			/^\s*slug:\s*(?:"([^"]+)"|'([^']+)'|([^\n]+))/m,
		);
		// Derive a fallback slug from the file path (relative to src/content/docs)
		const docsRoot = path.join(process.cwd(), "src/content/docs");
		const rel = path.relative(docsRoot, filePath).replace(/\\/g, "/");
		const fileSlug = rel.replace(/\.md$/, "");
		const fallbackSlug = fileSlug.startsWith("docs/")
			? fileSlug.slice(5)
			: fileSlug;

		// Prefer the frontmatter slug when present; otherwise use the path-derived fallback
		let canonicalSlug;
		if (slugMatch) {
			const rawSlug = slugMatch[1] || slugMatch[2] || slugMatch[3];
			const fmSlug = (rawSlug || "").trim();
			canonicalSlug = fmSlug.startsWith("/") ? fmSlug.slice(1) : fmSlug;
		} else {
			canonicalSlug = fallbackSlug;
		}
		// Detect draft pages (exclude from sidebar)
		const isDraft = /^\s*draft:\s*true\b/m.test(content);

		// Parse frontmatter badge if present (YAML-style)
		let badge;
		const fmMatch = content.match(/^---\s*([\s\S]*?)\n---/);
		if (fmMatch) {
			const fm = fmMatch[1];
			const lines = fm.split(/\r?\n/);
			for (let i = 0; i < lines.length; i++) {
				const m = lines[i].match(/^(\s*)badge:\s*$/);
				if (m) {
					const baseIndent = m[1].length;
					const b = {};
					for (let j = i + 1; j < lines.length; j++) {
						const line = lines[j];
						const m2 = line.match(/^(\s+)([A-Za-z0-9_-]+):\s*(.+)?\s*$/);
						if (!m2) break;
						const indentLen = m2[1].length;
						if (indentLen <= baseIndent) break;
						const key = m2[2];
						let val = (m2[3] || "").trim();
						val = val.replace(/^["']|["']$/g, "");
						b[key] = val;
					}
					if (Object.keys(b).length > 0) {
						badge = b;
					}
					break;
				}
			}
		}

		return {
			title,
			slug: canonicalSlug,
			draft: isDraft,
		};
	} catch {
		return null;
	}
}

async function buildSidebarFromDirectory(basePath, currentPath = "") {
	const fullPath = path.join(basePath, currentPath);
	const entries = await fs.readdir(fullPath, { withFileTypes: true });

	const items = [];

	// Handle markdown files first
	const mdFiles = entries.filter(
		(entry) =>
			entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md",
	);

	for (const file of mdFiles) {
		const filePath = path.join(basePath, currentPath, file.name);
		const fileInfo = await getMarkdownFileInfo(filePath);
		const isProd = process.env.NODE_ENV === "production";
		if (fileInfo && (isProd ? !fileInfo.draft : true)) {
			items.push({ slug: fileInfo.slug });
		}
	}

	// Then handle directories
	const directories = entries.filter((entry) => entry.isDirectory());

	for (const dir of directories) {
		const dirPath = path.join(currentPath, dir.name);
		const fullDirPath = path.join(basePath, dirPath);
		const label = await getCategoryLabel(fullDirPath);

		const subItems = await buildSidebarFromDirectory(basePath, dirPath);

		if (subItems.length > 0) {
			items.push({
				label,
				collapsed: true,
				items: subItems,
			});
		} else {
			items.push({
				label,
				collapsed: true,
				autogenerate: { directory: dirPath },
			});
		}
	}

	return items;
}

function parseReleaseTitle(title) {
	const result = {
		seriesWeight: 2, // modern series (no "G" prefix)
		major: 0,
		minor: 0,
		patch: 0,
		isBeta: false,
		beta: 0,
	};

	if (!title || typeof title !== "string") {
		return result;
	}

	let t = title.trim();

	// Handle legacy "G" prefix
	if (t.startsWith("G")) {
		result.seriesWeight = 1; // legacy series
		t = t.slice(1).trim();
	}

	// Extract semantic version numbers at the start
	const m = t.match(/^(\d+)(?:\.(\d+))?(?:\.(\d+))?/);
	if (m) {
		result.major = parseInt(m[1] || "0", 10);
		result.minor = parseInt(m[2] || "0", 10);
		result.patch = parseInt(m[3] || "0", 10);
	}

	// Detect beta notation ("Beta N" or "bN")
	const betaMatch =
		t.match(/\bBeta\s*([0-9]+)\b/i) || t.match(/\bb([0-9]+)\b/i);
	if (betaMatch) {
		result.isBeta = true;
		result.beta = parseInt(betaMatch[1], 10);
	}

	return result;
}

function compareReleaseTitlesDesc(aTitle, bTitle) {
	const a = parseReleaseTitle(aTitle);
	const b = parseReleaseTitle(bTitle);

	if (a.seriesWeight !== b.seriesWeight) return b.seriesWeight - a.seriesWeight;
	if (a.major !== b.major) return b.major - a.major;
	if (a.minor !== b.minor) return b.minor - a.minor;
	if (a.patch !== b.patch) return b.patch - a.patch;
	if (a.isBeta !== b.isBeta) return a.isBeta ? 1 : -1; // stable before beta
	return b.beta - a.beta;
}

async function buildReleasesSidebar(baseDocsPath) {
	const releasesPath = path.join(baseDocsPath, "docs/releases");
	const entries = await fs.readdir(releasesPath, { withFileTypes: true });
	const isProd = process.env.NODE_ENV === "production";

	// Top-level releases (non-Android)
	const topLevelFiles = entries.filter(
		(e) => e.isFile() && e.name.endsWith(".md") && e.name !== "index.md",
	);

	const topLevelInfo = [];
	for (const file of topLevelFiles) {
		const filePath = path.join(releasesPath, file.name);
		const info = await getMarkdownFileInfo(filePath);
		if (info && (isProd ? !info.draft : true)) {
			topLevelInfo.push(info);
		}
	}

	topLevelInfo.sort((a, b) => compareReleaseTitlesDesc(a.title, b.title));
	const topLevelItems = topLevelInfo.map((i) => ({ slug: i.slug }));

	// Handle subdirectories (group Android separately)
	const directories = entries.filter((e) => e.isDirectory());
	const groupedDirs = [];

	for (const dir of directories) {
		const dirName = dir.name;
		const fullDirPath = path.join(releasesPath, dirName);

		// Skip directories that duplicate a top-level markdown filename (e.g., 6.6.0-beta-3 + 6.6.0-beta-3.md)
		const hasMdSibling = entries.some(
			(e) => e.isFile() && e.name === `${dirName}.md`,
		);
		if (hasMdSibling) {
			continue;
		}

		// Skip media-only directories that contain no markdown content
		if (dirName.toLowerCase() !== "android") {
			const dirEntries = await fs.readdir(fullDirPath, { withFileTypes: true });
			const hasAnyMd = dirEntries.some(
				(e) => e.isFile() && e.name.endsWith(".md") && e.name !== "index.md",
			);
			if (!hasAnyMd) {
				continue;
			}
		}

		if (dirName.toLowerCase() === "android") {
			const androidEntries = await fs.readdir(fullDirPath, {
				withFileTypes: true,
			});
			const androidFiles = androidEntries.filter(
				(e) => e.isFile() && e.name.endsWith(".md") && e.name !== "index.md",
			);

			const androidInfo = [];
			for (const file of androidFiles) {
				const filePath = path.join(fullDirPath, file.name);
				const info = await getMarkdownFileInfo(filePath);
				if (info && (isProd ? !info.draft : true)) {
					androidInfo.push(info);
				}
			}

			androidInfo.sort((a, b) => compareReleaseTitlesDesc(a.title, b.title));
			const androidItems = androidInfo.map((i) => ({ slug: i.slug }));

			groupedDirs.push({
				label: "Android",
				collapsed: true,
				items: androidItems,
			});
		} else {
			// Fallback for any other subdirectories
			const label = await getCategoryLabel(fullDirPath);
			const subItems = await buildSidebarFromDirectory(
				baseDocsPath,
				path.join("docs/releases", dirName),
			);

			if (subItems.length > 0) {
				groupedDirs.push({
					label,
					collapsed: true,
					items: subItems,
				});
			} else {
				groupedDirs.push({
					label,
					collapsed: true,
					autogenerate: { directory: path.join("docs/releases", dirName) },
				});
			}
		}
	}

	return [...topLevelItems, ...groupedDirs];
}

export async function generateSidebar() {
	const docsPath = path.join(process.cwd(), "src/content/docs");

	const supportSection = {
		label: "Support",
		collapsed: true,
		autogenerate: { directory: "docs/support" },
	};

	const policiesSection = {
		label: "Policies",
		collapsed: true,
		autogenerate: { directory: "docs/policies" },
	};

	const releasesItems = await buildReleasesSidebar(docsPath);

	const releasesSection = {
		label: "Releases",
		collapsed: true,
		items: releasesItems,
	};

	return [policiesSection, releasesSection, supportSection];
}
