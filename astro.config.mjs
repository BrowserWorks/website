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
			customCss: ["~/assets/global.css", "~/fonts/fonts.css"],
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
			logo: {
				dark: "~/assets/waterfox-logo-dark.svg",
				light: "~/assets/waterfox-logo.svg",
				replacesTitle: true,
			},
			plugins: [
				starlightBlog({
					authors: {
						alex: {
							name: "Alex Kontos",
							picture: "/alex.jpg",
							title: "Founder",
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
					credit: {
						description: {
							en: "Like what we're doing? →",
						},
						href: "https://buymeacoffee.com/waterfox",
						title: {
							en: "Donate",
						},
					},
					customImage: "./src/assets/heart.png",
				}),
			],
			sidebar: await generateSidebar(),
			social: {
				blueSky: "https://bsky.app/profile/waterfox.net",
				github: "https://github.com/BrowserWorks/Waterfox",
				mastodon: "https://mastodon.social/@Waterfox",
				reddit: "https://www.reddit.com/r/waterfox",
			},
			title: "Waterfox",
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	site: "https://www.waterfox.net",
});
