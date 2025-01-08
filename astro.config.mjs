import { resolve } from "node:path";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { shield } from "@kindspells/astro-shield";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import { defineConfig } from "astro/config";
import starlightBlog from "starlight-blog";

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
			favicon: "/favicon.ico",
			locales: {
				root: {
					label: "English (US)",
					lang: "en",
				},
			},
			customCss: ["~/assets/global.scss", "~/fonts/fonts.css"],
			title: "Waterfox",
			logo: {
				replacesTitle: true,
				light: "~/assets/waterfox-logo.svg",
				dark: "~/assets/waterfox-logo-dark.svg",
			},
			social: {
				github: "https://github.com/BrowserWorks/Waterfox",
				mastodon: "https://mastodon.social/@Waterfox",
				reddit: "https://www.reddit.com/r/waterfox",
				"x.com": "https://x.com/Waterfoxproject",
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
			],
			sidebar: [
				{
					label: "Navigation",
					items: [
						{ label: "Docs", link: "/docs/" },
						{ label: "Download", link: "/download/" },
					],
				},
				{
					label: "Docs",
					collapsed: true,
					items: [
						{ label: "About", link: "docs/about-waterfox/" },
						{ label: "FAQ", link: "docs/faq/" },
					],
				},
				{
					label: "Policies",
					collapsed: true,
					autogenerate: { directory: "docs/policies" },
				},
				{
					label: "Releases",
					collapsed: true,
					autogenerate: { directory: "docs/releases" },
				},
				{
					label: "Support",
					collapsed: true,
					autogenerate: { directory: "docs/support/android" },
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
