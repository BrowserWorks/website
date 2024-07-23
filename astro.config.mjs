import { resolve } from "node:path";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { shield } from "@kindspells/astro-shield";
import { defineConfig, squooshImageService } from "astro/config";
import blog from "starlight-blog";

const rootDir = new URL(".", import.meta.url).pathname;
const modulePath = resolve(rootDir, "src", "generated", "sriHashes.mjs");

// https://astro.build/config
export default defineConfig({
	site: "https://www.waterfox.net",
	image: {
		service: squooshImageService(),
	},
	integrations: [
		shield({
			sri: { hashesModule: modulePath },
		}),
		starlight({
			components: {
				Head: "~/components/Head.astro",
				Header: "~/components/Header.astro",
				PageFrame: "~/components/CustomPageFrame.astro",
				// Pagination: "~/components/Pagination.astro",
				// Sidebar: "~/components/Sidebar.astro",
			},
			defaultLocale: "root", // optional
			favicon: "/favicon.ico",
			locales: {
				root: {
					label: "English",
					lang: "en-US", // lang is required for root locales
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
				"x.com": "https://x.com/Waterfoxproject",
			},
			plugins: [
				blog({
					authors: {
						alex: {
							name: "Alex Kontos",
							title: "Founder",
							picture: "/alex.jpg",
							url: "https://www.linkedin.com/in/alex-kontos",
						},
					},
				}),
			],
			sidebar: [
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
