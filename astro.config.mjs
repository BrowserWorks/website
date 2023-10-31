import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import blog from 'starlight-blog'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.waterfox.net',
	integrations: [
		blog({
			authors: {
				alex: {
					name: 'Alex Kontos',
					title: 'Founder',
					picture: '/alex.jpg',
					url: 'https://www.linkedin.com/in/alex-kontos'
				}
			}
		}),
		starlight({
			components: {
				Head: '~/components/Head.astro',
				Header: '~/components/Header.astro',
				MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
				PageFrame: '~/components/CustomPageFrame.astro',
				Pagination: '~/components/Pagination.astro',
				Sidebar: '~/components/Sidebar.astro'
			},
			defaultLocale: 'root', // optional
			locales: {
				root: {
					label: 'English',
					lang: 'en-US' // lang is required for root locales
				}
			},
			customCss: ['~/assets/global.scss', '~/fonts/fonts.css'],
			title: 'Waterfox',
			logo: {
				replacesTitle: true,
				light: '~/assets/waterfox-logo.svg',
				dark: '~/assets/waterfox-logo-dark.svg'
			},
			social: {
				github: 'https://github.com/WaterfoxCo/Waterfox',
				mastodon: 'https://mastodon.social/@Waterfox',
				twitter: 'https://twitter.com/Waterfoxproject'
			},
			sidebar: [
				{
					label: 'Docs',
					items: [
						{ label: 'About', link: 'about-waterfox/' },
						{ label: 'FAQ', link: 'faq/' }
					]
				},
				{
					label: 'Policies',
					autogenerate: { directory: 'docs/policies' }
				},
				{
					label: 'Releases',
					collapsed: true,
					autogenerate: { directory: 'docs/releases' }
				}
			]
		}),
		svelte(),
		tailwind({
			applyBaseStyles: false
		})
	]
})
