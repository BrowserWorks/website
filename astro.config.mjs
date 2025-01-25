import { resolve } from "node:path";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { shield } from "@kindspells/astro-shield";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import { defineConfig } from "astro/config";
import starlightBlog from "starlight-blog";
import starlightCoolerCredit from "starlight-cooler-credit";
import { generateSidebar } from "./sidebar.config.mjs";

const rootDir = new URL(".", import.meta.url).pathname;
const modulePath = resolve(rootDir, "src", "generated", "sriHashes.mjs");

export default defineConfig({
	site: "https://www.waterfox.net",
	integrations: [
		shield({
			sri: {
				hashesModule: modulePath,
			},
		}),
		starlight({
			components: {
				Head: "~/components/Head.astro",
				PageFrame: "~/components/CustomPageFrame.astro",
				Sidebar: "~/components/Sidebar.astro",
			},
			defaultLocale: "root",
			editLink: {
				baseUrl: "https://github.com/BrowserWorks/website/edit/main-ssg",
			},
			favicon: "/favicon.ico",
			locales: {
				root: {
					label: "English (US)",
					lang: "en",
				},
			},
			customCss: ["~/assets/global.css", "~/fonts/fonts.css"],
			title: "Waterfox",
			logo: {
				replacesTitle: true,
				light: "~/assets/waterfox-logo.svg",
				dark: "~/assets/waterfox-logo-dark.svg",
			},
			social: {
				blueSky: "https://bsky.app/profile/waterfox.net",
				github: "https://github.com/BrowserWorks/Waterfox",
				mastodon: "https://mastodon.social/@Waterfox",
				reddit: "https://www.reddit.com/r/waterfox",
			},
			plugins: [
				starlightBlog({
					authors: {
						alex: {
							name: "Alex Kontos",
							title: "Founder",
							picture: "/alex.jpg",
							url: "https://www.linkedin.com/in/alex-kontos",
						},
					},
				}),
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: "Navigation" },
					},
				}),
				starlightCoolerCredit({
					customImage: "./src/assets/heart.png",
					credit: {
						title: {
							en: "Donate",
						},
						href: "https://buymeacoffee.com/waterfox",
						description: {
							en: "Like what we're doing? →",
						},
					},
				}),
			],
			sidebar: await generateSidebar(),
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
