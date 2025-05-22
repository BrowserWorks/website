import { resolve } from "node:path";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightBlog from "starlight-blog";
import starlightCoolerCredit from "starlight-cooler-credit";
import { generateSidebar } from "./sidebar.config.mjs";

const rootDir = new URL(".", import.meta.url).pathname;
const modulePath = resolve(rootDir, "src", "generated", "sriHashes.mjs");

export default defineConfig({
	integrations: [
		starlight({
			components: {
				Head: "~/components/Head.astro",
				PageFrame: "~/components/CustomPageFrame.astro",
				ThemeSelect: "~/components/overrides/ThemeSelect.astro",
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
			pagination: false,
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
					customImageAlt: "heart",
				}),
			],
			sidebar: await generateSidebar(),
			social: [
				{
					icon: "blueSky",
					label: "BlueSky",
					href: "https://bsky.app/profile/waterfox.net",
				},
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/BrowserWorks/Waterfox",
				},
				{
					icon: "mastodon",
					label: "Mastodon",
					href: "https://mastodon.social/@Waterfox",
				},
				{
					icon: "reddit",
					label: "Reddit",
					href: "https://www.reddit.com/r/waterfox",
				},
			],
			title: "Waterfox",
		}),
	],
	site: "https://www.waterfox.net",
	vite: {
		plugins: [tailwindcss()],
	},
});
